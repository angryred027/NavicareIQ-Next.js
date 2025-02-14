type IconProps = {
    name: any;
    className?: string;
    size?: number;
  };
  
  const icons = {
    flask: (
        <>
            <path d="M6.61002 2H8.00002V8.81L3.47002 17.08C3.26523 17.6318 3.19691 18.2249 3.27089 18.8088C3.34488 19.3927 3.55896 19.95 3.8949 20.4333C4.23083 20.9166 4.67865 21.3115 5.20017 21.5843C5.7217 21.8571 6.30145 21.9997 6.89001 22H17.11C17.6986 21.9997 18.2783 21.8571 18.7999 21.5843C19.3214 21.3115 19.7692 20.9166 20.1051 20.4333C20.4411 19.95 20.6552 19.3927 20.7291 18.8088C20.8031 18.2249 20.7348 17.6318 20.53 17.08L16 8.81V2H17.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.71 15H15.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.71 18.02H15.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.03003 2H15.97" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </> 
    ),
    location: (
        <>
            <path d="M19 20C20.25 20 24 17.2 24 13.3333C24 10.4 21.9167 8 19 8C16.0833 8 14 10.4 14 13.3333C14 17.2 17.75 20 19 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 13.5C19.2761 13.5 19.5 13.2761 19.5 13C19.5 12.7239 19.2761 12.5 19 12.5C18.7239 12.5 18.5 12.7239 18.5 13C18.5 13.2761 18.7239 13.5 19 13.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.2857 20C4.02857 20 3 18.5 3 11C3 3.5 5.05877 2 12.2645 2C18 2 19.5 3 20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </>
    ),
    users: (
        <>
            <path d="M18 17.9167C18 19.1912 15 20 12 20C8.5 20 6 19.1912 6 17.9167C6 16.0577 9 15 12 15C15 15 18 16.25 18 17.9167Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20.5 17.3339C21.5449 17.0376 22 16.5469 22 15.9207C22 14.7107 20.261 13.7652 18 13.5474" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18 11C19.3807 11 20.5 9.88071 20.5 8.5C20.5 7.11929 19.3807 6 18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.5 17.3339C2.4551 17.0376 2 16.5469 2 15.9207C2 14.7107 3.73896 13.7652 6 13.5474" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 11C4.61929 11 3.5 9.88071 3.5 8.5C3.5 7.11929 4.61929 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </>
    ),
    paper: (
        <>
            <path d="M20 12C20 18 19.1111 21 12 21C4.88889 21 4 18 4 12C4 6 5 3 12 3C19 3 20 6 20 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 4C9 4 9.60457 6.39543 8.5 7.5C7.39543 8.60457 5 8 5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 16H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 13L16 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </>
    ),
    'info-romb': (
        <>
            <path d="M12 16L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.3241 17.5753C12.5916 22.3078 11.5858 22.4852 6.34315 17.2425C1.1005 11.9999 1.27208 10.9999 6.34315 5.92883C11.4142 0.857761 12.2279 0.499893 17.6569 5.92883C23.0858 11.3578 22.8995 11.9999 17.3241 17.5753Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 8C12.2761 8 12.5 7.77614 12.5 7.5C12.5 7.22386 12.2761 7 12 7C11.7239 7 11.5 7.22386 11.5 7.5C11.5 7.77614 11.7239 8 12 8Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </>
    )
  };
  
  export default function Icon({ name, className, size = 24 }: IconProps) {
    return (
      <svg 
        className={className}
        width={size} 
        height={size}
        viewBox="0 0 24 24" 
        fill="none"
        stroke="currentColor"
      >
        {icons[name as keyof typeof icons]}
      </svg>
    );
  }