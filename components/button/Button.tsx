
type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
};

export default function Button({ 
  children, 
  disabled = false 
}: ButtonProps) {
  return (
    <button 
      disabled={disabled}
      className="bg-[#716FB2] text-white p-2 rounded-[12px] 
                hover:bg-[#5A598E]
                active:bg-[#44436B] 
                active:transform active:scale-95 
                active:shadow-md
                disabled:bg-[#C6C5E0] disabled:cursor-not-allowed 
                disabled:hover:shadow-none disabled:hover:bg-[#C6C5E0]
                disabled:active:transform-none
                transition-all duration-150"
    >
      {children}
    </button>
  );
}
