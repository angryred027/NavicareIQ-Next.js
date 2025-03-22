import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { passageServer } from '@/lib/passageServer';
import { NoAuthRoutes } from './config/routes';

export async function middleware(request: NextRequest) {
  return NextResponse.next();

  if (NoAuthRoutes.includes(request.nextUrl.pathname)) return;

  if (request.nextUrl.pathname === '/') {
    return NextResponse.next();
  }

  const authToken = request.cookies.get('psg_auth_token');

  if (!authToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    const userId: string = await passageServer.auth.validateJwt(authToken.value);

    if (userId) {
      return NextResponse.next();
    }

    if (!userId) {
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
