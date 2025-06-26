import { useState } from 'react';

export const usePasswordValidation = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const validatePassword = (pwd) => {
    return {
      minLength: pwd.length >= 6,
      hasLowercase: /[a-z]/.test(pwd),
      hasUppercase: /[A-Z]/.test(pwd),
      hasNumber: /[0-9]/.test(pwd),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
    };
  };

  const rules = validatePassword(password);
  const progress = Object.values(rules).filter(Boolean).length;
  const isPasswordValid = Object.values(rules).every(Boolean);
  const doPasswordsMatch = password === confirmPassword && confirmPassword !== '';

  return {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    isFocused,
    setIsFocused,
    rules,
    progress,
    isPasswordValid,
    doPasswordsMatch,
    validatePassword
  };
};