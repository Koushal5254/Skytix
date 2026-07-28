import AuthProviders from "@/components/auth/AuthProviders/AuthProviders";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.scss";

export const metadata = {
  title: "Skytix",
  description: "Skytix Flight Booking Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProviders>
          {children}
        </AuthProviders>
      </body>
    </html>
  );
}