import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/base/_globals.scss";

export const metadata = {
  title: "Skytix Flight Booking",
  description: "Flight Booking Management Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}