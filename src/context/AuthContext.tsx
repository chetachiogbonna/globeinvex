"use client";

import { getLoggedInUser } from "@/lib/actions/user.actions"
import { User } from "@/types"
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react"

type AuthContextType = {
  user: User | null,
  setUser: Dispatch<SetStateAction<User | null>>
}

const INITIAL_VALUE: AuthContextType = {
  user: null,
  setUser: () => {}
}

const AuthContext = createContext(INITIAL_VALUE)

function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const getCurrentUser = async () => {
      const currentUser = await getLoggedInUser();
      setUser(currentUser)
    }

    getCurrentUser()
  }, [])

  return (
    <AuthContext.Provider 
      value={{
        user,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext);

export default AuthContextProvider