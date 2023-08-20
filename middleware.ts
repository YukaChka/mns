import{withAuth} from "next-auth/middleware"

import type {NextRequestWithAuth} from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    function middleware(request: NextRequestWithAuth) {
        console.log(request.nextUrl.pathname)
        //console.log(request.nextauth.token)

        if (request.nextUrl.pathname.startsWith("/admin")
            && request.nextauth.token?.role !== "админ") {
            return NextResponse.rewrite(
                new URL("/", request.url)
            )
        }
        if (request.nextUrl.pathname.startsWith("/api")
            && request.nextauth.token?.role !== "админ") {
            return NextResponse.rewrite(
                new URL("/", request.url)
            )
        }

        
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token
        },
    }
    
    
    )
    

export const config = { matcher: ["/admin", "/api"] }


