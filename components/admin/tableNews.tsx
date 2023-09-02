import { ItemNewProps } from "@/app/api/posts/posts";
import ItemNew from "./itemNew";

export default async function TableNews() {
  const posts = await GetPosts();

  return (
    <div>
      {posts.map((post: ItemNewProps) => (
        <div key={post.id}>
          <ItemNew
            id={post.id}
            description={post.description}
            datapublic={post.datapublic}
            imgpaths={post.imgpaths}
            title={post.title}
          />
        </div>
      ))}
    </div>
  );
}

export async function GetPosts() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`http://localhost:3000/api/posts`, {
    next: { revalidate: 10 },
  });

  const posts = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return posts;
}
