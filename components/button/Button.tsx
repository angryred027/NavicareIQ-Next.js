type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
};

export default function Button({ 
  type = 'button',
  children, 
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  onClick
}: ButtonProps) {
  const sizes = {
    sm: 'px-3 py-1.5 text-caption-bold',
    md: 'px-4 py-2 text-body-bold',
    lg: 'p-4 text-h5 rounded-[16px]',
  };

  const baseStyles = `
    rounded-[12px] 
    transition-all 
    duration-150 
    font-semibold 
    flex 
    items-center 
    justify-center
    ${sizes[size]}
  `;
  
  const variants = {
    // poppy
    primary: `
      bg-poppy-500 text-white
      hover:bg-poppy-800
      active:bg-poppy-900 active:transform active:scale-95
      disabled:bg-poppy-100 disabled:cursor-not-allowed 
      disabled:hover:bg-poppy-100 disabled:active:transform-none
    `,
    
    // midnight
    secondary: `
      bg-midnight-500 text-white
      hover:bg-midnight-800
      active:bg-midnight-900 active:transform active:scale-95
      disabled:bg-midnight-100 disabled:cursor-not-allowed 
      disabled:hover:bg-midnight-100 disabled:active:transform-none
    `,
    
    // transparent
    ghost: `
      bg-transparent 
      text-system-dark-800
      border-[1px] 
      border-light-800
      hover:bg-poppy-800 
      hover:text-white 
      hover:border-poppy-800
      active:bg-poppy-900 
      active:border-poppy-900 
      active:transform 
      active:scale-95
      disabled:bg-transparent 
      disabled:border-poppy-100 
      disabled:text-poppy-100 
      disabled:cursor-not-allowed 
      disabled:hover:bg-transparent 
      disabled:active:transform-none
    `,
  };

  return (
    <button 
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
