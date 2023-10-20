"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { LoginForm } from "@/components/forms/loginForm";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { RegistrationForm } from "@/components/forms/registrationForm";
import { useRouter, useSearchParams } from "next/navigation";

interface ToastProps {
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

interface ToastPropsV2 {
  path: string;
}

export function LoginAndRegistrationToast() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [open, setOpen] = useState(true);
  const [redirect, setRedirect] = useState("/");
  useEffect(() => {
    try {
    } catch (error) {
      setRedirect("/");
    }
  }, [redirect]);

  useEffect(() => {
    if (!open) {
      router.push(redirect);
      setTimeout(() => {
        setIsLogin(true);
      }, 300);
    }
  });
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="">
        <div className="hover:cursor-pointer "></div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            <div>Вход в личный кабинет</div>
          </DialogTitle>
        </DialogHeader>

        <div>
          <LoginForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
