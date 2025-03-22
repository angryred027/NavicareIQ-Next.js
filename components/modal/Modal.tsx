'use client';
import { ReactNode, useEffect } from 'react';
import Icon from '@/components/icon/Icon';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

const Modal = ({ isOpen, onClose, title, children, footer, className = '' }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40 overflow-y-auto " onClick={onClose} />

      <div
        className={`
        fixed 
        left-1/2 
        top-1/2 
        -translate-x-1/2 
        -translate-y-1/2 
        bg-white 
        rounded-[24px]
        z-50
        w-full
        max-w-[440px]
        max-h-[90vh]
        ${className}
      `}
      >
        <div className="p-5 pt-4 border-b border-system-light-200">
          <button
            onClick={onClose}
            className="absolute top-3.5 left-2.5 p-2 hover:bg-system-light-100 rounded-full transition-colors"
          >
            <Icon name="close" />
          </button>
          {title && <h2 className="text-h4 text-system-dark-900 text-center">{title}</h2>}
        </div>

        <div className="p-5 overflow-y-auto  max-h-[calc(90vh-140px)] [&::-webkit-scrollbar]:hidden">{children}</div>

        {footer && <div className="p-5 border-t border-system-light-200 flex justify-end gap-3">{footer}</div>}
      </div>
    </>
  );
};

export default Modal;
