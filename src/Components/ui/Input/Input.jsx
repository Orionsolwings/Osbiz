import React from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  icon,
  error,
  showPasswordToggle,
  showPassword,
  onTogglePassword,
  className = '',
  inputClassName = '',
  disabled,
  ...props
}) => {
  return (
    <div className={`relative ${className}`}>
      {icon && (
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
          {icon}
        </span>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full ${icon ? 'pl-10' : 'pl-3'} pr-${showPasswordToggle ? '10' : '3'} py-2 border ${
          error ? 'border-red-300' : 'border-gray-300 focus:ring-primary-blue focus:shadow-2xl'
        }
         ${disabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-white text-black'} rounded-md focus:outline-none focus:ring-2 ${inputClassName}`}
        {...props}
      />
      {showPasswordToggle && (
        <span
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 cursor-pointer"
          onClick={onTogglePassword}
        >
          {showPassword ? <AiOutlineEyeInvisible size={22} /> : <AiOutlineEye size={22} />}
        </span>
      )}
      
    </div>
  );
};

export default Input;