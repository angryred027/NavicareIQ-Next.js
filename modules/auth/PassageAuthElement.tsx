'use client';

import { useEffect, useRef } from 'react';

interface PassageAuthElementProps {
  appId: string;
}

export default function PassageAuthElement({ appId }: PassageAuthElementProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadPassage = async () => {
      if (elementRef.current) {
        const auth = document.createElement('passage-auth');
        auth.setAttribute('app-id', appId);
        elementRef.current.innerHTML = '';
        elementRef.current.appendChild(auth);
      }
    };

    loadPassage();
  }, [appId]);

  return <div ref={elementRef} />;
} 