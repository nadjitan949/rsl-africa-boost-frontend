import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string; // Permet de passer du style personnalisé (Tailwind ou CSS Modules)
    variant?: 'primary' | 'secondary' | 'danger';
}

const Button: React.FC<ButtonProps> = ({
    children,
    className = '',
    variant = 'primary',
    ...props
}) => {

    const variantStyles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        danger: "bg-red-600 text-white hover:bg-red-700",
    };

    return (
        <button
            className={` ${variantStyles[variant]} ${className}`}
            {...props} // On propage les attributs classiques (onClick, type, disabled, etc.)
        >
            {children}
        </button>
    );
};

export default Button;