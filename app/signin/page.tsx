"use client";

import { LoginAndRegistrationToast } from "@/components/LoginAndRegistrationToast";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";

export default function SignPage() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return <>{domLoaded && <LoginAndRegistrationToast />}</>;
}
