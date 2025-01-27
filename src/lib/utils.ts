import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const parseStringify = <T>(value: T): T => JSON.parse(JSON.stringify(value));

export const generateUniqueUsername = (name: string) => {
  const sanitized = name.trim().replace(/[^a-zA-Z0-9]/g, "");

  const uniqueSuffix = Math.floor(Math.random() * 10000);

  const username = `${sanitized}${uniqueSuffix}`;

  return username;
}