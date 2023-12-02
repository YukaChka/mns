import { client, conn} from "@/lib/db"

export const dynamic = "force-dynamic";

export async function GetUsers() {
    await client.connect()
    let users = new Array<UserProps>
    
    
    try {  
      await client.query("begin")
      const query = "select u.email, u.password, u.first_name, u.last_name, tu.role_user from public.user u join public.type_user tu on u.type_user_id  = tu.type_user_id;"
      users= (await client.query(query)).rows;
      client.query('commit')
    } catch (e) {
      await client.query('rollback')
  
      throw e
      
    } finally{
      client.end
      return users
    }

}


export async function GetUserData() {
  const client=  await conn.connect()
  let user:UserData[];
  try {  
    await client.query("begin")
    const query = "select u.user_id, u.email from public.user u where type_user_id=2"
    
    user =(await client.query(query)).rows as  UserData[]
    client.query('commit')
    return user
  } catch (e) {
    await client.query('rollback')

    throw e
    
  } finally{
    client.release();
    
  }

}


export interface UserProps
    {
    user_id:string;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    role_user: string;
}

export interface UserData
    {
    user_id:number;
    email: string;
   
}


