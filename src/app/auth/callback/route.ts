import { createContext } from "~/server/context";
import { type NextRequest, NextResponse } from "next/server";
import { config } from "~/config";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get("code");
    const next = requestUrl.searchParams.get("next") ?? "/";

    // Create headers for the response
    const resHeaders = new Headers();

    const context = await createContext({
      req: request,
      resHeaders,
    });

    if (code) {
      await context.supabase.auth.exchangeCodeForSession(code);
    }

    return NextResponse.redirect(new URL(next, config.appUrl), {
      headers: resHeaders,
    });
  } catch (error) {
    console.error("Auth callback error:", error);
    return NextResponse.redirect(new URL("/auth/error", config.appUrl));
  }
}
