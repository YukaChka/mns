import Image from "next/image";
import QUERY_COUNTRIES from "./queryCountries.graphql";
import { getAllPostsForHome } from "@/lib/api";

export default async function Home() {
  const query = `query postQuery {
    posts {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }`;
  const posts = await getAllPostsForHome(false);

  const heroPost = posts?.edges[0]?.node;
  const morePosts = posts.edges.slice(1);
  console.log(heroPost);
  console.log(morePosts);
  return (
    <main>
      <div>{
        
        }</div>
    </main>
  );
}
