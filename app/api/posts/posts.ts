import {ServiceResponce, client, conn } from "@/lib/db"
import { CreateResourseProps, ResourseProps, UpdateResourseProps } from "../upload/route";

export interface PostProps  {
    post_id: number;
    description: string[] | string;
    date_of_public: string;
    title: string;
    resourses: Array<ResourseProps> ;
  };

  
export interface PostModel  {
    post_id: number;
    description: string | string[];
    date_of_public: string;
    title: string;
  };


export interface CreatePostProps {
    description: string;
    date_of_public: string;
    title: string;
    resourses: Array<ResourseProps>;
  };

  
export interface UpdatePostProps {
  post_id: number;
  description: string;
  date_of_public: string;
  title: string;
  resourses: Array<UpdateResourseProps>
};
  

  
export const dynamic = 'force-dynamic' 
export async function GetPosts() {
  

  const posts= new Array<PostProps>() 
  const client = await conn.connect()
  try {  
    
    await client.query("begin")
    const post_query =`select p.post_id,p.description, p.date_of_public,  p.title from post p ORDER BY p.date_of_public DESC`
    
    const model_posts = await client.query(post_query) ;
    const data_posts=model_posts.rows as Array<PostModel>
    for(var i=0; i<data_posts.length; i++){
      const resourses_query = `select r.resource_id , r.title, r.path, r.post_id from  resource r  where r.post_id =$1`;
      const resourses_params =[data_posts[i].post_id]
      let date_of_public = new Date(data_posts[i].date_of_public);
      data_posts[i].date_of_public = Intl.DateTimeFormat("ru-RU", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }).format(date_of_public).split(" ")[0].toString();
      
      data_posts[i].description = (data_posts[i].description as string).split("\n");
      const model_resourses = await client.query(resourses_query, resourses_params)
      const data_resourses=model_resourses.rows as Array<ResourseProps>;
      
      var post = Object.assign({},data_posts[i], {'resourses':data_resourses})
      post = post as PostProps
      posts.push(post)
      
    }
    client.query('commit')
    return posts
  } catch (e) {
    await client.query('rollback')
    client.release()
    return null
    
    
  }   
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
      const resourses_params =[post.resourses[i].title,post.resourses[i].path, create_post.rows[0].post_id]
      const add_resourses_query = `insert into public.resource(title, "path", post_id) values($1,$2,$3)`;
      await client.query(add_resourses_query, resourses_params)
    }
    await client.query('commit')
  } catch (e) {
    await client.query('rollback')
    throw e
    
  } finally{
    client.release()
    
    
    return true
  }
}

export async function UpdatePost(post:UpdatePostProps, isEdit:number) {
  const client = await conn.connect()
  try { 
  

  
  const formatter = new Intl.DateTimeFormat("en-US", {
    dateStyle:"short"
  });
  const date_of_public = post.date_of_public.split(".");
  const date = formatter
    .format(
      new Date(`${date_of_public[2]}-${date_of_public[1]}-${date_of_public[0]}`)
    )
    .split(" ");


  
  
    
    await client.query("begin")
    const update_post_query =`update public.post p set title = $1, description =$2, date_of_public = $3 where post_id =$4`
    const post_params=[post.title, post.description, date, post.post_id]
    await client.query(update_post_query, post_params);
    if(isEdit ==1){
      const params =[post.post_id]
      const delete_resourses_query = `delete from resource r where r.post_id = $1`;
      await client.query(delete_resourses_query, params)

    }
      
    
    if(post.resourses.length !=0){
      post.resourses.map(async (img)=>{
        
        const resourses_params =[img.title,img.path,post.post_id]
          
      const add_resourses_query = `insert into public.resource(title, "path", post_id) values($1,$2,$3)`;
      await client.query(add_resourses_query, resourses_params)
      })
    }
    
  
    
    
    await client.query('commit').then(()=>console.log("commit"))
  } catch (e) {
    await client.query('rollback')
    client.release()
    console.log(e)
    return e
    
    
    
  } 
    
    
  
}

export async function DeletePost(post_id:string) {
  const client = await conn.connect()
  
  try {  
    await client.query("begin")


    const delete_resourses_query = `delete from public.resource where post_id=$1;`;
    const resourses_params =[post_id]  
    await client.query(delete_resourses_query, resourses_params)
    

    const delete_post_query =`delete from public.post where  post_id =$1;`
    const post_params=[post_id]
    await client.query(delete_post_query, post_params);
    
    await client.query('commit')
  } catch (e) {
    await client.query('rollback')
    throw e
    
  } finally{
    client.release()
    
    
    return true
  }
}


