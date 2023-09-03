"use client";

import { LoginAndRegistrationToast } from "@/components/LoginAndRegistrationToast";
import { LoginForm } from "@/components/loginForm";
import { GetServerSidePropsContext } from "next";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
export const dynamic = "force-dynamic";
export default function SignIn() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return <>{domLoaded && <LoginAndRegistrationToast />}</>;
}
