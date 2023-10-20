import type { Metadata } from "next";

type ProductProps = {
  params: {
    id: string;
  };
};

export default async function Decision({ params: { id } }: ProductProps) {
  return (
    <main>
      <p className="text-[10px]">Product {id}</p>
    </main>
  );
}
