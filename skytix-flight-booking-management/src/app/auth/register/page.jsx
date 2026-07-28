import AuthLayout from "@/components/auth/AuthLayout/AuthLayout";
import RegisterForm from "@/components/auth/RegisterForm/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}