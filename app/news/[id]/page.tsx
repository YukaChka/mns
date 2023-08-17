"use client";

import { useRouter } from "next/router";

type NewProps = {
  params: {
    id: number;
    date: string;
    title: string;
    description: string;
  };
};

export default function New({ params }: NewProps) {
  return (
    <>
      <p>{params.id}</p>
    </>
  );
}
