import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { passage } from '@/lib/passage';

export async function middleware(request: NextRequest) {

  if (request.nextUrl.pathname === '/') {
    return NextResponse.next();
  }

  const authToken = request.cookies.get('psg_auth_token');

  if (!authToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  try {
    const isValid = await passage.validAuthToken(authToken.value);
    if (!isValid) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  } catch (error) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/locations/:path*',
    '/users/:path*',
    '/paper/:path*',

    '/((?!login|api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 