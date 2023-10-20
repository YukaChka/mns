import{withAuth} from "next-auth/middleware"

import type {NextRequestWithAuth} from "next-auth/middleware"
import { notFound, useRouter } from "next/navigation"
import { NextResponse } from "next/server"


export default withAuth(
    function middleware(request: NextRequestWithAuth) {
        
        console.log(request.nextUrl.pathname)
        console.log(request.url)
        
        if (request.nextUrl.pathname.startsWith("/posts")){
            if(request.nextauth.token?.user.role!== "админ"){
                
                return NextResponse.rewrite(new URL("/404", request.url))
            }}
                
                
            
        
        
        

        
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token
        },
    }
    
    
    )
    

export const config = { matcher: ["/posts","/orders","/account"] }


