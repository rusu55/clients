import { NextResponse } from "next/server";

const isLoggdenIn : boolean = true;

export function middleware(request: Request){
    if(isLoggdenIn){
       return  NextResponse.next()
    }
    return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: ['/clients/new']
}