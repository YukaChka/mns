import {Query } from "@/lib/db"

export interface PostProps  {
    id: number;
    title: string;
    datapublic: string;
    description: string[];
    imgpaths: Array<PostImagesProps>;
  };

  
export interface PostModel  {
    id: number;
    title: string;
    datapublic: string;
    description: string;
    imgpaths: Array<PostImagesProps>;
  };
  
export interface PostImagesProps  {
    id: number;
    title: string;
    path:string
  };
  
export const dynamic = 'force-dynamic' 
export async function GetPosts() {
    const posts= await Query<Array<PostModel>>({
        query:`SELECT DISTINCT  p.id, p.title, p.description, p.datapublic FROM megatel_db.post p`,
        values:[],
    }) as Array<PostModel>;
    
    let res:PostProps[]=new Array<PostProps>
    for(var i=0; i<posts.length; i++){
        const img= await Query<Array<PostImagesProps>>({
            query:`SELECT DISTINCT i.id, i.title, i.path FROM megatel_db.image i JOIN megatel_db.postimg p ON p.imgid =i.id WHERE p.postid = ${i}`,
            values:[],
        }) as Array<PostImagesProps>;
        //data[i].imgpaths=img
        let text=posts[i].description.split("\\n")
        res.push({id:posts[i].id, datapublic:posts[i].datapublic, description:text, title:posts[i].title, imgpaths:img})
        
       }

    return res;
    
    
    
}


export async function СreatePost(post:PostProps) {
  
  const imgpaths = post.imgpaths
  
  let arrayImage:PostImagesProps[]=new Array<PostImagesProps>()

  for(var i=0; i<imgpaths.length; i++){
      let img:PostImagesProps[] = await Query<PostImagesProps[]>({
        query:`SELECT i.id, i.title, i.path FROM megatel_db.image i WHERE i.title='${imgpaths[i].title}' AND i.path='${imgpaths[i].path}'`,
        values:[]
      }) as PostImagesProps[]
      console.log(img)
      arrayImage.push(img[0])
      
  }  
  return arrayImage
  
  
  
  
}
