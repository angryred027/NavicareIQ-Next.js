'use client';

import { useEffect, useRef } from 'react';

interface PassageAuthElementProps {
  appId: string;
}

export default function PassageAuthElement({ appId }: PassageAuthElementProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      const passageAuth = document.createElement('passage-auth');
      passageAuth.setAttribute('app-id', appId);
      elementRef.current.appendChild(passageAuth);
    }

    return () => {
      if (elementRef.current) {
        elementRef.current.innerHTML = '';
      }
    };
  }, [appId]);

  return <div ref={elementRef} />;
} 