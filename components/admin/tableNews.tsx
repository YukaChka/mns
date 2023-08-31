import { ItemNewProps } from "@/app/api/posts/posts";
import ItemNew from "./itemNew";

export default async function TableNews() {
  const url = "http://localhost:3000/api/posts";
  //process.env.NEXTAUTH_URL + "/api/posts";

  const posts = (await (
    await fetch(`http://localhost:3000/api/posts`)
  ).json()) as ItemNewProps[];

  return (
    <div>
      {posts.map((post) => (
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
