'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getCurrentUser } from '@/store/features/authSlice';
import PassageAuthElement from './PassageAuthElement';

export default function PassageAuth() {
  const dispatch = useAppDispatch();
  const { isAuthenticated, loading } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

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