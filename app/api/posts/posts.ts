import {Query, ServiceResponce, conn } from "@/lib/db"
import { CreateResourseProps, ResourseProps } from "../upload/route";

export interface PostProps  {
    post_id: number;
    description: string[];
    date_of_public: string;
    title: string;
    resourses: Array<ResourseProps>;
  };

  
export interface PostModel  {
    post_id: number;
    description: string;
    date_of_public: string;
    title: string;
  };


export type CreatePostProps = {
    description: string;
    date_of_public: string;
    title: string;
    resourses: Array<CreateResourseProps>;
  };
  

  
export const dynamic = 'force-dynamic' 
export async function GetPosts() {
    let post_responce= await Query<PostModel>({query:"select p.post_id,p.description, p.date_of_public,  p.title from post p;", values:[]});
    
    if(!post_responce.succes){
      return [];  
    }
    
    let data = post_responce.data?.rows as Array<PostModel>;
    ;
  const formatter = new Intl.DateTimeFormat("ru-RU", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
 
    const posts = new Array<PostProps>();
    for(var i=0; i<data.length; i++){
      let resourse_responce = await Query<ResourseProps>({query:`select r.resource_id , r.title, r.path, r.post_id from  resource r  where r.post_id =${data[i].post_id}`, values:[]})
      let resources = resourse_responce.data?.rows as Array<ResourseProps>;
      let date_of_public = new Date(data[i].date_of_public);
      let date = formatter.format(date_of_public).split(" ")[0].toString();
      let text = data[i].description.split("\n");
      posts.push({
        post_id:data[i].post_id,
        date_of_public: date,
        description:text,
        title:data[i].title,
        resourses:resources
      })
    }
    return posts
}


export async function СreatePost(post:CreatePostProps) {

  
  const client = await conn.connect()
  const CurrentDate = new Date(post.date_of_public);
  const formatter = new Intl.DateTimeFormat("en-US", {
    dateStyle:"short"
  });
  const date = formatter.format(CurrentDate).split(" ");
  try {  
    await client.query("begin")
    const create_post_query =`insert into public.post(date_of_public, description, title) values($1,$2,$3) RETURNING post_id;`
    const post_params=[date,post.description,post.title]
    const create_post = await client.query(create_post_query, post_params);
    for(var i=0; i<post.resourses.length; i++){
      const resourses_params =[post.resourses[i].title,post.resourses[i].path, create_post.rows[0].id]
      const add_resourses_query = `insert into public.resource(title, "path", post_id) values($1,$2,$3)`;
      await client.query(add_resourses_query, resourses_params)
    }
    await client.query('commit')
  } catch (e) {
    await client.query('rollback')
    throw e
    
  } finally{
    client.release()
  }
  

  
  
  return  []
}
