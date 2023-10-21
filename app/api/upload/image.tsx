import { Query } from "@/lib/db";

export interface PostImagesProps {
  idpostimg: number;
  postid: number;
  imgid: number;
}

export interface ImagesProps {
  id: number;
  title: string;
  path: string;
}

export const dynamic = "force-dynamic";
export async function GetImages() {}
