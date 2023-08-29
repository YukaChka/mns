"use client";

import { useRouter } from "next/navigation";

type CreateOrEditNewsPageProps = {
  params: {
    id: number | string;
  };
};

export default function CreateOrEditNewsPage({
  params: { id },
}: CreateOrEditNewsPageProps) {
  const router = useRouter();
  let isEdit = "create a new post";
  if (typeof id == "string" && id !== "new") {
    try {
      console.log(parseInt(id));
      isEdit = `Edit post ${id}`;
      if (isNaN(parseInt(id))) {
        router.push("/404");
      }
    } catch (error) {
      router.push("/404");
    }
  }

  return (
    <div>
      CreateOrEditNewsPage
      <div>{isEdit}</div>
    </div>
  );
}
