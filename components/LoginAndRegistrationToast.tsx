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

import { LoginForm } from "@/components/loginForm";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { RegistrationForm } from "@/components/registrationForm";
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
      const params = useSearchParams();
      const path = params.get("path")?.toString();
    } catch (error) {
      setRedirect("/");
    }
  }, [redirect]);

  console.log(redirect);

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
            <div>{isLogin ? "Вход в личный кабинет" : "Регистрация"}</div>
          </DialogTitle>
        </DialogHeader>

        <div>
          {isLogin ? (
            <LoginForm />
          ) : (
            <RegistrationForm setIsLogin={setIsLogin} isLogin={isLogin} />
          )}
        </div>

        <DialogFooter>
          <div></div>
          <div>
            {isLogin && (
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setIsLogin(false);
                }}
              >
                Зарегистрироваться
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
