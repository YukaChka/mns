import {Query } from "@/lib/db"

export interface ItemNewProps  {
    id: number;
    title: string;
    datapublic: string;
    description: string;
    imgpaths: Array<ItemNewImagesProps>;
  };
export interface ItemNewImagesProps  {
    id: number;
    title: string;
    path:string
  };

export async function GetPosts() {
    const data= await Query<Array<ItemNewProps>>({
        query:`SELECT DISTINCT  p.id, p.title, p.description, p.datapublic FROM megatel_db.post p  JOIN megatel_db.postimg p2 ON p.id =p2.postid`,
        values:[],
    }) as Array<ItemNewProps>;
    console.log(data);
    
    data.map(async (post)=> {
        const data= await Query<Array<ItemNewImagesProps>>({
            query:`SELECT DISTINCT i.title, i.path FROM megatel_db.image i JOIN megatel_db.postimg p ON p.imgid =i.id WHERE p.postid = ${post.id}`,
            values:[],
        }) as Array<ItemNewImagesProps>;
        
        console.log(data)
    })
    console.log(data)
    return data;
    
    //console.log(users)
    
}
