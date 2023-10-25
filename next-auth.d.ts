import { DefaultSession, DefaultUser } from "next-auth"
import { JWT, DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
    interface Session {
        user: {
            id: string,
            email:string,
            first_name:string,
            last_name:string,
            role_user: string,
        } & DefaultSession
    }

    interface User extends DefaultUser {
        id: string;
        email: string;
        password: string;
        first_name: string;
        last_name: string;
        role_user:string
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        user:{
        id:string,
        email:string,
        first_name:string,
        last_name:string,
        role_user: string,
        }
        
    }
}