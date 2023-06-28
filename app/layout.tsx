import type { Metadata } from "next";

// These styles apply to every route in the application
import "./globalstyles.css";

export const metadata: Metadata = {
  title: "MP UI",
  description: "Design System for MP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950">{children}</body>
    </html>
  );
}
