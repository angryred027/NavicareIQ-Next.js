import { ReactNode, useEffect } from 'react';
import Icon from '@/components/icon/Icon';
import Button from '../button/Button';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  position?: 'left' | 'right';
  className?: string;
}

const Drawer = ({ isOpen, onClose, title, children, footer, position = 'right', className = '' }: DrawerProps) => {
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
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />

      <div
        className={`
          fixed 
          top-0 
          ${position === 'right' ? 'right-0' : 'left-0'}
          h-full
          bg-white 
          z-50
          w-full
          max-w-[310px]
          transition-transform
          duration-300
          ${isOpen ? 'translate-x-0' : `${position === 'right' ? 'translate-x-full' : '-translate-x-full'}`}
          ${className}
        `}
      >
        <div className="flex items-center justify-between p-5 border-b border-system-light-200">
          {title && <h2 className="text-h4 text-system-dark-900 text-center">{title}</h2>}
          <Button variant="ghost" onClick={onClose} className=" transition-colors w-[40px] h-[40px] p-[8px]">
            <Icon name="close" viewBox="0 0 24 24" size={24} />
          </Button>
        </div>

        <div className="flex flex-1 p-6 overflow-y-auto h-[calc(100vh-60px)] [&::-webkit-scrollbar]:none">
          {children}
        </div>

        {/* {footer && (
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-white">
            {footer}
          </div>
        )} */}
      </div>
    </>
  );
};

export default Drawer;
