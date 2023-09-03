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
  
export const dynamic = 'force-dynamic' 
export async function GetPosts() {
    const data= await Query<Array<ItemNewProps>>({
        query:`SELECT DISTINCT  p.id, p.title, p.description, p.datapublic FROM megatel_db.post p`,
        values:[],
    }) as Array<ItemNewProps>;
    
    
    for(var i=0; i<data.length; i++){
        const img= await Query<Array<ItemNewImagesProps>>({
            query:`SELECT DISTINCT i.title, i.path FROM megatel_db.image i JOIN megatel_db.postimg p ON p.imgid =i.id WHERE p.postid = ${i}`,
            values:[],
        }) as Array<ItemNewImagesProps>;
        data[i].imgpaths=img
       }


    
    
    return data;
    
    //console.log(users)
    
}
