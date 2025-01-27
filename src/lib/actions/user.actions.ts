"use server";

import { ID } from "node-appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";
import { createAdminClient, createSessionClient } from "../appwrite/config";
import { APPWRITE_BUCKET_ID, APPWRITE_DATABASE_ID, APPWRITE_USERSCOLLECTION_ID, NEXT_PUBLIC_APPWRITE_PROJECT } from "../appwrite";
import { redirect } from "next/navigation";
import { User } from "@/types";

export const getLoggedInUser = async () => {
  try {
    const { account } = await createSessionClient();
    const { databases } = await createAdminClient();
    const currentuser = await account.get();
    const result = await databases.getDocument(
      APPWRITE_DATABASE_ID!,
      APPWRITE_USERSCOLLECTION_ID!,
      currentuser.$id
    );

    const newUser: User = {
      id: result.$id,
      name: result.name,
      username: result.username,
      birthday: result.birthdate,
      gender: result.gender,
      profilePicUrl: result.profilePicUrl,
      phone: result.phone,
      address: result.address,
      country: result.country,
      zipcode: result.zipcode,
      email: result.email,
      referralId: result.referralId
    }
  
    return parseStringify(newUser);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const registerUser = async ({ 
  email,
  password, 
  name,
  username,
  referralId
}: {
  email: string;
  password: string;
  name: string;
  username: string;
  referralId: string;
}) => {
  try {
    const { account, databases } = await createAdminClient();

    const id = ID.unique();
  
    await account.create(id, email, password, name);
    const session = await account.createEmailPasswordSession(email, password);
  
    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
  
    const result = await databases.createDocument(
      APPWRITE_DATABASE_ID!,
      APPWRITE_USERSCOLLECTION_ID!,
      id,
      {
        email,
        name,
        username,
        referralId,
        birthday: "",
        gender: null,
        profilePicUrl: "",
        phone: "",
        address: "",
        country: "",
        zipcode: "",
      }
    );
    
    const newUser: User = {
      name: result.name,
      username: result.username,
      birthday: result.birthdate,
      gender: result.gender,
      phone: result.phone,
      address: result.address,
      profilePicUrl: result.profilePicUrl,
      country: result.country,
      zipcode: result.zipcode,
      email: result.email,
      referralId: result.referralId
    }
  
    return parseStringify(newUser);
  } catch (error) {
    console.log(error)
    throw new Error("Failed to register user");
  }
}

export const logUserIn = async ({ email, password }: { email: string; password: string }) => {
  try {

    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);

    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    const currentloggedInUser = await getLoggedInUser()
    return parseStringify(currentloggedInUser);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to log user in");
  }
}

export const updateUser = async (fieldToUpdate: { type: "profile", file: File } | { type: "others" }) => {
  try {
    const { databases } = await createAdminClient();

    const currentUser = await getLoggedInUser();
    const currentUserId = currentUser.id;

    if(!currentUser) {
      throw new Error("You must be logged in to upload an image.")
    }

    if (fieldToUpdate.type === "profile") {
      await uploadImage(fieldToUpdate.file);
      const userProfilePicUrl = `
        https://cloud.appwrite.io/v1/storage/buckets/${APPWRITE_BUCKET_ID}/files/${currentUserId}/preview?project=${NEXT_PUBLIC_APPWRITE_PROJECT}&width=300&height=300
      `;
      const result = await databases.updateDocument(
        APPWRITE_DATABASE_ID!,
        APPWRITE_USERSCOLLECTION_ID!,
        currentUserId!,
        {
          profilePicUrl: userProfilePicUrl.trim()
        }
      );

      const user: User = {
        name: result.name,
        username: result.username,
        birthday: result.birthdate,
        gender: result.gender,
        phone: result.phone,
        address: result.address,
        profilePicUrl: result.profilePicUrl,
        country: result.country,
        zipcode: result.zipcode,
        email: result.email,
        referralId: result.referralId
      }
    
      return parseStringify(user);
    } else {
      const result = await databases.updateDocument(
        APPWRITE_DATABASE_ID!,
        APPWRITE_USERSCOLLECTION_ID!,
        currentUserId!,
        {
          profilePicUrl: ""
        }
      );

      const user: User = {
        name: result.name,
        username: result.username,
        birthday: result.birthdate,
        gender: result.gender,
        phone: result.phone,
        address: result.address,
        profilePicUrl: result.profilePicUrl,
        country: result.country,
        zipcode: result.zipcode,
        email: result.email,
        referralId: result.referralId
      }
    
      return parseStringify(user);
    }
  } catch (error) {
    console.log(error)
  }
}

export const signOut = async () => {
  const { account } = await createSessionClient();

  (await cookies()).delete("appwrite-session");
  await account.deleteSession("current");

  redirect("/login");
}

export const uploadImage = async (file: File) => {
  try {
    const { account } = await createSessionClient();
    const { storage } = await createAdminClient();

    const currentUser = await account.get();
    const fileId = currentUser.$id;

    await storage.createFile(
      APPWRITE_BUCKET_ID!,
      fileId,
      file
    );

    return "success";
  } catch (error) {
    console.log(error)
    throw new Error("eror uploading file.")
  }
}