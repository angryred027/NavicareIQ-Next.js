'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getCurrentUser } from '@/store/features/authSlice';
import { useRouter } from 'next/navigation';
import PassageAuthElement from './PassageAuthElement';

export default function PassageAuth() {
  const dispatch = useAppDispatch();
  const { isAuthenticated, loading } = useAppSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    const authSuccessHandler = () => {
      console.log('auth success');
      router.push('/'); // Redirect to the home page or any protected route
    };

    const authElement = document.querySelector('passage-auth');
    if (authElement) {
      authElement.addEventListener('passage-auth-success', authSuccessHandler);
    }

    // Cleanup the event listener when the component is unmounted
    return () => {
      if (authElement) {
        authElement.removeEventListener('passage-auth-success', authSuccessHandler);
      }
    };
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {!isAuthenticated && (
        <PassageAuthElement appId={process.env.NEXT_PUBLIC_PASSAGE_APP_ID!} />
      )}
    </div>
  );
}
