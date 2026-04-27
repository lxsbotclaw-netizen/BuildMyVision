import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { SESSION_COOKIE_NAME, LOGIN_PATH } from "@/lib/auth-constants";
import { getBaseUrl } from "@/lib/constants";

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, "", { maxAge: 0, path: "/" });

  return NextResponse.redirect(new URL(LOGIN_PATH, getBaseUrl()));
}
