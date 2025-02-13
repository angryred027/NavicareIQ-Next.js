'use client';

import './Icon.module.css';

interface IconProps {
    id: string;
    width: number;
    height: number;
    className?: string;
}

const Icon = ({ id, width, height, className = "" }: IconProps) => {
    return (
        <svg
            className={`${className}`}
            width={width}
            height={height}
            fill="none"
            stroke="currentColor"
        >
            <use href={`/icons/symbol-defs.svg#${id}`} />
        </svg >
    )
};

export default Icon;