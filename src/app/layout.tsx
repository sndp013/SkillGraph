import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "SkillGraph | Your Lifelong Portfolio",
  description: "A lifelong portfolio and skill-proof platform where users showcase projects, achievements, and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
