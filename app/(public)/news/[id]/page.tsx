"use client";

type NewProps = {
  params: {
    id: string;
  };
};


export default function New({ params }: NewProps) {
  return (
    <>
      <p>{params.id}</p>
    </>
  );
}
