import { useState, useRef} from 'react';

export const useOtpInput = (length = 4) => {
  const [otp, setOtp] = useState(Array(length).fill(''));
  const [otpError, setOtpError] = useState('');
  const inputRefs = useRef([]);

  const handleKeyDown = (e) => {
    const index = inputRefs.current.indexOf(e.target);

    // Prevent invalid keys
    if (
      !/^[0-9]$/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "Tab" &&
      e.key !== "ArrowLeft" &&
      e.key !== "ArrowRight"
    ) {
      e.preventDefault();
    }

    // Handle Backspace behavior
    if (e.key === "Backspace") {
      e.preventDefault();
      const updatedOtp = [...otp];

      if (otp[index]) {
        updatedOtp[index] = "";
        setOtp(updatedOtp);
      } else if (index > 0) {
        updatedOtp[index - 1] = "";
        setOtp(updatedOtp);
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleInput = (e) => {
    const { value } = e.target;
    const index = inputRefs.current.indexOf(e.target);

    if (/^\d$/.test(value)) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);
      setOtpError("");

      if (index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "");
    if (pasted.length === otp.length) {
      const newOtp = pasted.split("");
      setOtp(newOtp);
      inputRefs.current[otp.length - 1]?.focus();
      setOtpError("");
    }
  };

  const validateOtp = () => {
    const fullOtp = otp.join("");
    if (fullOtp.length < otp.length) {
      setOtpError("Please enter complete OTP.");
      return false;
    }
    setOtpError("");
    return true;
  };

  const getFullOtp = () => otp.join("");

  return {
    otp,
    setOtp,
    otpError,
    inputRefs,
    handleKeyDown,
    handleInput,
    handleFocus,
    handlePaste,
    validateOtp,
    getFullOtp,
    setOtpError
  };
};