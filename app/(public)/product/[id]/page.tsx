import type { Metadata } from "next";

type ProductProps = {
  params: {
    Id: string;
  };
};

export default async function Decision({ params: { Id } }: ProductProps) {
  return (
    <main>
      <p>Product 1 {Id}</p>
    </main>
  );
}
