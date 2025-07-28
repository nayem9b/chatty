import AuthLayout from "../pages/auth-layout";
import LoginForm from "./LoginForm";

export const metadata = {
  title: "Sign In | Chatty",
  description: "Sign in to your Chatty account",
};

export default function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
