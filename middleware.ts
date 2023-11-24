import{withAuth} from "next-auth/middleware"

import type {NextRequestWithAuth} from "next-auth/middleware"
import { notFound, useRouter } from "next/navigation"
import { NextResponse } from "next/server"


export default withAuth(
    function middleware(request: NextRequestWithAuth) {
        
        
        if (request.nextUrl.pathname.startsWith("/posts")){
            if(request.nextauth.token?.user.role_user!== "админ"){
                
                return NextResponse.rewrite(new URL("/404", request.url))
            }
        }

        if (request.nextUrl.pathname.startsWith("/orders")){
            if(request.nextauth.token?.user.role_user!== "админ"){        
            
                return NextResponse.rewrite(new URL("/404", request.url))
            }
        }
        
        if (request.nextUrl.pathname.startsWith("/account")){
            if(!request.nextauth.token?.user){            

                return NextResponse.rewrite(new URL("/signin", request.url))
            }
        }                 
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token
        },
    }
    
    
    )
    

export const config = { matcher: ["/orders", "/account", "/posts"] }


