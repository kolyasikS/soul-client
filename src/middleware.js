import { NextResponse } from 'next/server'
import {AuthController} from "./lib/controllers/auth.controller";
import {verifyRouteSecurity} from "./lib/security/verify-route";

export async function middleware(req) {
    const url = req.url;

    if (!(await verifyRouteSecurity(url))) {
        return NextResponse.redirect(new URL('/authentication', req.url));
    }
}

export const config = {
    matcher: ['/contacts', '/:path/'],
}
// See "Matching Paths" below to learn more
