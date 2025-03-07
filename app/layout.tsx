'use client';

import { Inter } from 'next/font/google';
import { ReduxProvider } from '@/components/providers/ReduxProvider';
import Layout from '@/components/layout/Layout';
import Script from 'next/script';
import './globals.css';
import { useEffect, useState } from 'react';
import { passage } from '@/lib/passage';
import { usePathname, useRouter } from 'next/navigation';
import { NoAuthRoutes } from '@/config/routes';
import LoadingPage from './loading/page';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = passage.currentUser;
        const isAuth = user && (await user.userInfo());
        setIsAuthenticated(!!isAuth);

        if (!isAuth && pathname !== '/login') {
          router.push('/login'); // Redirect unauthenticated users
        }

        if (isAuth && pathname === '/login') {
          const token = localStorage.getItem('psg_auth_token');
          document.cookie = `psg_auth_token=${token}; path=/; max-age=${7 * 24 * 60 * 60}; Secure; SameSite=Strict`; // Corrected the cookie max-age value

          router.push('/'); // Redirect authenticated users away from login
        }
      } catch {
        setIsAuthenticated(false);
        if (pathname !== '/login') router.push('/login');
      } finally {
        setIsLoading(false); // Set loading to false after the auth check is complete
      }
    };

    if (!NoAuthRoutes.includes(pathname)) checkAuth();
  }, [pathname, router]);

  // if (isLoading) return <LoadingPage />;
  return (
    <html lang="en" className={inter.variable}>
      <body className={`font-inter antialiased`}>
        <Script src="https://cdn.passage.id/passage-web.js" strategy="beforeInteractive" />
        <ReduxProvider>
          {isAuthenticated && pathname !== '/login' ? <Layout>{children}</Layout> : !isLoading && children}
        </ReduxProvider>
      </body>
    </html>
  );
}
