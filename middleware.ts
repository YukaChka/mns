import{withAuth} from "next-auth/middleware"

import type {NextRequestWithAuth} from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    function middleware(request: NextRequestWithAuth) {
        console.log(request.nextUrl.pathname)

        
        if (request.nextUrl.pathname.startsWith("/admin/new")){
            if(request.nextauth.token?.role!== "админ")
                return NextResponse.rewrite(new URL("/signin", request.url)
            )
        }
        

        
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token
        },
    }
    
    
    )
    

export const config = { matcher: ["/admin/new"] }


