interface AvatarProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  src?: string;
  className?: string;
}

const Avatar = ({ 
  name, 
  size = 'md', 
  src,
  className = '' 
}: AvatarProps) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const sizes = {
    sm: 'w-8 h-8 text-caption',
    md: 'w-11 h-11 text-body',
    lg: 'w-12 h-12 text-h5',
  };

  const colors = [
    'bg-[#E1E6F5] text-[#273E69]', // neutral
    'bg-[#F1FBF6] text-[#3DBD7B]', // positive
    'bg-[#FFEDCF] text-[#F5A623]', // warning
    'bg-[#FEF2F2] text-[#F16666]', // negative
  ];

  const colorIndex = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;

  return (
    <div 
      className={`
        ${sizes[size]}
        ${!src ? colors[colorIndex] : ''}
        rounded-full
        flex
        items-center
        justify-center
        text-white
        font-bold
        bg-midnight-500
        ${className}
      `}
    >
      {src ? (
        <img 
          src={src} 
          alt={name}
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        getInitials(name)
      )}
    </div>
  );
};

export default Avatar;