import { PostProps } from "@/app/api/posts/posts";
import Link from "next/link";
import Image from "next/image";

type NewProps = {
  params: {
    id: string;
  };
};

async function GetPost(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts?id=${id}`,
    {
      cache: "no-cache",
    }
  );
  return res.json() as Promise<PostProps>;
}

export default async function New({ params }: NewProps) {
  const post = await GetPost(params.id);
  console.log(post);

  const text = post.description as string[];
  console.log(text);
  return (
    <main>
      <div className="mt-20">
        <div className="mb-5 ">
          <div className="flex container ">
            <div className="max-w-6xl">
              <div className=" ">
                <Link href="/news" className="text-xl">
                  {"<"} Новости
                </Link>
                <div className="font-bold mt-2">{post.date_of_public}</div>
              </div>
              <div className="font-bold text-2xl mt-2 text-center md:text-start">
                {post.title}
              </div>
              <div className=" text-xl mt-8 text-center md:text-start">
                {text.map((str, i) => (
                  <p className="mt-5" key={i}>
                    {str}
                  </p>
                ))}
              </div>
              <div className="flex justify-center p-9"></div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </main>
  );
}
