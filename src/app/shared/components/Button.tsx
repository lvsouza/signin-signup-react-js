import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Tipos diferentes de estilo do botão
     */
    variant?: 'contained' | 'outlined' | 'text';
}
export const Button: React.FC<ButtonProps> = ({ variant, ...props }) => {
    if (variant === 'outlined') return (
        <button
            {...props}
            className={"padding-s margin-top-m background-transparent border-radius-soft font-size-m text-uppercase border-thin " + props.className}
        />
    );

    if (variant === 'text') return (
        <button
            {...props}
            className={"padding-s margin-top-m background-transparent border-radius-soft font-size-m text-uppercase border-none " + props.className}
        />
    );

    return (
        <button
            {...props}
            className={"padding-s margin-top-m background-primary border-radius-soft border-none text-white font-size-m text-uppercase " + props.className}
        />
    );
}
