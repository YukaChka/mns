"use client";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

type CreateOrEditNewsPageProps = {
  params: {
    id: number | string;
  };
};

async function GetPost(id: number) {
  const response = fetch(`http://localhost:3000/api/posts?id=${id}`);
  return (await response).json();
}

export default function CreateOrEditNewsPage({
  params: { id },
}: CreateOrEditNewsPageProps) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return <>{domLoaded}</>;
}
