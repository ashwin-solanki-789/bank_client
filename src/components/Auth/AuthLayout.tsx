import React from "react";
// import { AlertCircle } from "lucide-react";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface LayoutProps {
  children: React.ReactNode;
  error: string;
}
export default function AuthLayout({ children }: LayoutProps) {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 relative">
      <div className="min-h-screen bg-slate-900 hidden md:block"></div>
      <div>{children}</div>
      {/* {error && (
        <Alert variant="destructive" className="w-2/6 absolute left-[40%]">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )} */}
    </div>
  );
}
