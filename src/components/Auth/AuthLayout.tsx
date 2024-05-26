import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}
export default function AuthLayout({ children }: LayoutProps) {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1">
      <div className="min-h-screen bg-slate-900 hidden md:block"></div>
      <div>{children}</div>
    </div>
  );
}
