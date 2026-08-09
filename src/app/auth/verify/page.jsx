import { Suspense } from "react";
import AuthLayout from "@/components/auth/AuthLayout/AuthLayout";
import VerifyForm from "@/components/auth/VerifyForm/VerifyForm";

export default function VerifyPage() {
  return (
    <AuthLayout>
      <Suspense fallback={null}>
        <VerifyForm />
      </Suspense>
    </AuthLayout>
  );
}