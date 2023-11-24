import Image from "next/image";
import useDownloader from "react-use-downloader";
import NewPreview from "@/components/new-preview";
import { PostProps } from "@/app/api/posts/posts";

async function GetPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
    next: {
      revalidate: 60,
    },
  });
  return res.json() as Promise<PostProps[]>;
}

export default async function NewsPage() {
  const posts = await GetPosts();
  return (
    <main>
      <div className="mt-20">
        <div className="mb-5">
          <div className="container ">
            <div className="max-w-6xl">
              <div className="flex justify-start">
                <div className="text-6xl">Новости</div>
                <div>Все</div>
              </div>
              <div className=" text-2xl  mt-8">
                {posts.map((post: PostProps) => (
                  <NewPreview key={post.post_id} post={post} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </main>
  );
}
