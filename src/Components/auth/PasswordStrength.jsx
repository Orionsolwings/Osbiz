import React from 'react';
import PasswordRule from './PasswordRule';

const PasswordStrength = ({ rules, isFocused }) => {
  if (!isFocused) return null;

  return (
    <div className="absolute z-10 w-full mt-2 p-4 bg-white border rounded-md shadow-xl">
      <div className="flex mb-3 space-x-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full ${
              i <= Object.values(rules).filter(Boolean).length 
                ? 'bg-blue-500' 
                : 'bg-blue-200'
            }`}
          ></div>
        ))}
      </div>

      <p className="text-sm font-medium mb-2 text-gray-700">
        Your password must contain:
      </p>
      <ul className="space-y-1 text-sm">
        <PasswordRule
          valid={rules.minLength}
          text="Minimum number of characters is 6."
        />
        <PasswordRule
          valid={rules.hasLowercase}
          text="Should contain lowercase."
        />
        <PasswordRule
          valid={rules.hasUppercase}
          text="Should contain uppercase."
        />
        <PasswordRule
          valid={rules.hasNumber}
          text="Should contain numbers."
        />
        <PasswordRule
          valid={rules.hasSpecialChar}
          text="Should contain special characters."
        />
      </ul>
    </div>
  );
};

export default PasswordStrength;