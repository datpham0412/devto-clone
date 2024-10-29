import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session && req.nextUrl.pathname.startsWith("/protected")) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }

  if (
    session &&
    (req.nextUrl.pathname === "/auth/signin" ||
      req.nextUrl.pathname === "/auth/signup")
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return res;
}

export const config = {
  matcher: [
    "/protected/:path*",
    "/auth/signin",
    "/auth/signup",
    "/auth/callback",
  ],
};
