import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    className?: string; // Permet de passer du style personnalisé (Tailwind ou CSS Modules)
}

const Button: React.FC<ButtonProps> = ({
    children,
    className = '',
    ...props
}) => {

    const baseStyle = "cursor-pointer"

    return (
        <button
            className={`${baseStyle} ${className}`}
            {...props} // On propage les attributs classiques (onClick, type, disabled, etc.)
        >
            {children}
        </button>
    );
};

export default Button;