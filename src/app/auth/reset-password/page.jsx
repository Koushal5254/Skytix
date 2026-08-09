import { Suspense } from "react";
import AuthLayout from "@/components/auth/AuthLayout/AuthLayout";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <AuthLayout>
      <Suspense fallback={null}>
        <ResetPasswordForm />
      </Suspense>
    </AuthLayout>
  );
}