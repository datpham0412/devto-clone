import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import { config } from "~/config";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get("code");
    const next = requestUrl.searchParams.get("next") ?? "/";

    if (code) {
      const supabase = createRouteHandlerClient({ cookies });
      await supabase.auth.exchangeCodeForSession(code);
    }

    return NextResponse.redirect(new URL(next, config.appUrl));
  } catch (error) {
    console.error('Auth callback error:', error);
    return NextResponse.redirect(new URL('/auth/error', config.appUrl));
  }
}
