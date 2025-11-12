import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  const isUserLogged = (await headers()).get("x-user");
  if (isUserLogged) {
    redirect("/");
  }

  return (
    <div className="auth-wrapper flex min-h-screen min-w-screen justify-center">{children}</div>
  );
}
