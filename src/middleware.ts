import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    if (req.nextUrl.pathname.startsWith("/auth/signin")) {
      if (req.nextauth.token) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        if (req.nextUrl.pathname.startsWith("/protected")) {
          return !!token;
        }
        return true;
      },
    },
  },
);

export const config = {
  matcher: ["/protected/:path*", "/auth/signin", "/auth/signup"],
};
