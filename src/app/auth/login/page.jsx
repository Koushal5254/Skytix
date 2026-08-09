import { Suspense } from "react";
import AuthLayout from "@/components/auth/AuthLayout/AuthLayout";
import LoginForm from "@/components/auth/LoginForm/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout>
      <Suspense fallback={null}>
        <LoginForm />
      </Suspense>
    </AuthLayout>
  );
}