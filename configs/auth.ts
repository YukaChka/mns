import { UserProps } from "@/app/api/user/user";
import type { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { use } from "react";



export  const authConfig:AuthOptions ={
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

                const url = process.env.NEXTAUTH_URL
                
                const user  = await (await fetch(`${url}/api/user?email=${credentials?.email}&pass=${credentials?.password}`)).json();
                
                let CurrentUser = user as UserProps;
                
                if (credentials?.email === CurrentUser.email && credentials?.password === CurrentUser.password) {
                    
                    const person:User ={
                        id:CurrentUser.id,
                        email:CurrentUser.email,
                        firstname:CurrentUser.firstname, 
                        lastname:CurrentUser.lastname,
                        role:CurrentUser.role,
                        password:CurrentUser.password
                    } 
                    

                    
                    
                    
                    return person
                } else {
                    return null
                }
            }
        })
    ],
    secret:`${process.env.NEXTAUTH_SECRET}`,
    events: {
        async signIn(message) { /* on successful sign in */ },
        async signOut(message) { /* on signout */ },
        async createUser(message) { /* user created */ },
        async updateUser(message) { /* user updated - e.g. their email was verified */ },
        async linkAccount(message) { /* account (e.g. Twitter) linked to a user */ },
        async session(message) { /* session is active */ },
      },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            return true
          },
          
        async redirect({ url, baseUrl }) {
            
            return baseUrl
          },
        //Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
        async jwt({ token, user, session, trigger }) {
            

            if (user){
            token.user=user
            
            

            //token.role = user.role
            
            }
            return token
        },
        // If you want to use the role in client components
        async session({ session, token, user}) {
        
            
            session.user.role=token.user.role
            session.user.firstname= token.user.firstname
            session.user.lastname = token.user.lastname
            session.user.email= token.user.email
            
            
            //session.user.role = token.role
            
            return session;
                
        }
    },
    pages:{
        signIn:"/signin"
    }
}
