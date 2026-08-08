"use client";

import { AuthProvider } from "@/context/AuthContext";

export default function AuthProviders({ children }) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}