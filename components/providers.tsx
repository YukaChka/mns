"use client";
import { SessionProvider, useSession } from "next-auth/react";
import { useState } from "react";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
