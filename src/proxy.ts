import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SESSION_COOKIE_NAME, LOGIN_PATH, SETUP_PATH } from "@/lib/auth-constants";
import { verifySession } from "@/lib/auth";

const PUBLIC_BOSS_PATHS = new Set<string>([LOGIN_PATH, SETUP_PATH]);

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Login- und Setup-Seite nicht schützen — Setup prüft eigenen Token
  if (PUBLIC_BOSS_PATHS.has(pathname)) {
    return NextResponse.next();
  }

  const sessionToken = request.cookies.get(SESSION_COOKIE_NAME)?.value;

  if (!sessionToken || !(await verifySession(sessionToken))) {
    const loginUrl = new URL(LOGIN_PATH, request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/boss/:path*"],
};
