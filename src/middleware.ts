import { NextResponse, type NextRequest } from 'next/server';
import { kerstActive } from '@/lib/kerst';

/**
 * After Christmas, /kerst sends visitors to the home page. The redirect is
 * temporary (307) so the same URL can be used again next year.
 */
export function middleware(request: NextRequest) {
  if (!kerstActive()) return NextResponse.redirect(new URL('/', request.url));
  return NextResponse.next();
}

export const config = { matcher: ['/kerst', '/kerst/:path*'] };
