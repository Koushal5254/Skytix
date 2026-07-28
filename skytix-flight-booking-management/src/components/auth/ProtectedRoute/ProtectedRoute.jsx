"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";

import "./ProtectedRoute.scss";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const {
    isAuthenticated,
    authLoading,
  } = useAuth();

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      const redirect = encodeURIComponent(
        pathname || "/dashboard"
      );

      router.replace(
        `/auth/login?redirect=${redirect}`
      );
    }
  }, [
    authLoading,
    isAuthenticated,
    pathname,
    router,
  ]);

  if (authLoading) {
    return (
      <div className="auth-page-loader">
        <div className="auth-page-loader__spinner" />
        <span>Loading Skytix...</span>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="auth-page-loader">
        <div className="auth-page-loader__spinner" />
      </div>
    );
  }

  return children;
}