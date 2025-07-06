import React from 'react';
import { useMemo } from 'react';

const Button = ({
  children,
  type = 'button',
  onClick,
  className = '',
  disabled = false,
  loading = false,
  variant = 'primary', // 'primary', 'secondary', 'outline'
  ...props
}) => useMemo(() => {
  const baseClasses = 'py-2 rounded-md font-semibold cursor-pointer transition flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-primary-blue text-white hover:bg-blue-800',
    secondary: 'bg-primary-blue text-white hover:bg-transparent hover:border-[1.8px] hover:border-primary-blue hover:text-primary-blue',
    outline: 'border-[1.8px] border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {loading ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        </>
      ) : (
        children
      )}
    </button>
  );
}, [children, className, disabled, loading, onClick, type, variant, props]);

export default Button;