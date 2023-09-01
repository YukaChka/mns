import { DefaultSession, DefaultUser } from "next-auth"
import { JWT, DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
    interface Session {
        user: {
            id: string,
            email:string,
            firstname:string,
            lastname:string,
            role: string,
        } & DefaultSession
    }

    interface User extends DefaultUser {
        id: string;
        email: string;
        password: string;
        firstname: string;
        lastname: string;
        role:string
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        user:{
        id:string,
        email:string,
        firstname:string,
        lastname:string,
        role: string,
        }
        
    }
}