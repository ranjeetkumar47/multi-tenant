import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
};

export default function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const hostname = req.headers.get("host") ?? "";

  // Extract the subdomain
  const subdomain = hostname.split(".")[0];

  // Handle main domain
  if (
    subdomain === "www" ||
    subdomain === process.env.NEXT_PUBLIC_ROOT_DOMAIN
  ) {
    return NextResponse.rewrite(new URL(`/home`, req.url));
  }

  // Handle subdomains
  if (subdomain !== "www" && subdomain !== process.env.NEXT_PUBLIC_ROOT_DOMAIN) {
    url.pathname = `/${subdomain}${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
