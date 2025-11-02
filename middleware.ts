
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')
  const { pathname } = request.nextUrl

 
  if (token && pathname === '/auth') {
    return NextResponse.redirect(new URL('/calendar', request.url))
  }


  if (!token && pathname.startsWith('/calendar')) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/auth', '/calendar/:path*']
}