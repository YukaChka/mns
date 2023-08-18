import { UserProps } from "@/app/api/user/user";
import type { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";


export const authConfig:AuthOptions ={
    providers:[
        Credentials({
            name: "Credentials",
            credentials: {
                email: {label:'email', type:'email', required: true, placeholder: "your-cool-username"},
               
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password"
                }
            },
            async authorize(credentials) {
                // This is where you need to retrieve user data 
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                const user  = await (await fetch(`http://localhost:3000/api/user?email=${credentials?.email}&pass=${credentials?.password}`)).json();
                let CurrentUser = user as UserProps;
                if (credentials?.email === CurrentUser.email && credentials?.password === CurrentUser.password) {
                    console.log(CurrentUser)
                    return CurrentUser as any
                } else {
                    return null
                }
            }
        })
    ],
    callbacks: {
        // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
        async jwt({ token, user }) {
            if (user) token.role = user.role
            return token
        },
        // If you want to use the role in client components
        async session({ session, token }) {
            if (session?.user) session.user.role = token.role
            return session
        },
        async redirect({url,baseUrl}){
            return "/"
        }
    },
    pages:{
        
    }

    
   

        
    
    //pages:{
        //signIn:'/signin',
    //},
}    

