import { UserProps } from "@/app/api/user/user";
import type { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";




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
                //await (await fetch(`${url}/api/auth?email=${credentials?.email}&pass=${credentials?.password}`)).json();
                let users:UserProps[]  =[ {
                    user_id:"1",
                    email:"admin@mail.ru" ,
                    password:"root",
                    first_name:"1",
                    last_name:"1",
                    role_user: "админ"
                },{
                    user_id:"2",
                    email:"mike@gmail.com" ,
                    password:"1234",
                    first_name:"2",
                    last_name:"2",
                    role_user: "пользователь"
                }]

                
                
                //let CurrentUser = users as UserProps[];
                let CurrentUser = users.find((user)=>user.email === credentials?.email && user.password === credentials.password )
                if(!CurrentUser){
                    return null
                }
                if (credentials?.email === CurrentUser?.email && credentials?.password === CurrentUser?.password) {
                    console.log("auth")
                    const person:User ={
                        id:CurrentUser.user_id,
                        user_id:CurrentUser.user_id,
                        email:CurrentUser.email,
                        first_name:CurrentUser.first_name, 
                        last_name:CurrentUser.last_name,
                        role_user:CurrentUser.role_user,
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
        
            session.user.user_id = token.user.user_id
            session.user.role_user=token.user.role_user
            session.user.first_name= token.user.first_name
            session.user.last_name = token.user.last_name
            session.user.email= token.user.email
            
            
            //session.user.role = token.role
            
            return session;
                
        }
    },
    pages:{
        signIn:"/signin"
    },
    session:{
        strategy:"jwt",
        maxAge:60*60
    }

}
