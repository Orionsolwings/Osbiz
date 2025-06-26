import React, { useState,useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { assests, SignupAssests } from "@assets/assets";
import { FaCheck, FaTimes } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);
  const [CompanyName, setCompanyName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passError, setPassError] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [signUpAuth, setSignUpAuth] = useState(false);
 const [otp, setOtp] = useState(["", "", "", ""]); // For 4-digit OTP
  const [otpError, setOtpError] = useState("");
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
    e.preventDefault(); // Prevent default to avoid caret jumping
    const updatedOtp = [...otp];

    if (otp[index]) {
      // If current input has a value, clear it
      updatedOtp[index] = "";
      setOtp(updatedOtp);
    } else if (index > 0) {
      // If current input is empty, move to previous
      updatedOtp[index - 1] = "";
      setOtp(updatedOtp);
      inputRefs.current[index - 1]?.focus();
    }
  }
};

  //otp input get function
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

  //input focus
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

  const onAuthOTP = (e) => {
    e.preventDefault();
    const fullOtp = otp.join("");
    if (fullOtp.length < otp.length) {
      console.log("Please enter complete OTP");
      setOtpError("Please enter a valid 4-digit OTP.");
    } else {
      navigate('/companyprofile')
      setOtpError("");
      console.log("OTP submitted:", fullOtp);
    }
  };

  const validatePassword = (pwd) => ({
    minLength: pwd.length >= 6,
    hasLowercase: /[a-z]/.test(pwd),
    hasUppercase: /[A-Z]/.test(pwd),
    hasNumber: /[0-9]/.test(pwd),
    hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
  });

  const rules = validatePassword(password);
  const progress = Object.values(rules).filter(Boolean).length;

  const PasswordRule = ({ valid, text }) => (
    <li className={`flex items-center gap-2 ${valid ? "text-green-600" : "text-gray-700"}`}>
      {valid ? <FaCheck className="text-green-500" /> : <FaTimes className="text-red-500" />}<span>{text}</span>
    </li>
  );

  const EmailVerification = (e) => {
    const value = e.target.value;
    setEmailAddress(value);
    if (value === "") setEmailError("Required");
    else setEmailError("");
  };

  const onsubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[6-9]\d{9}$/;
    let isValid = true;

    if (!CompanyName.trim()) {
      setCompanyError("Company name is required.");
      isValid = false;
    } else setCompanyError("");

    if (!emailPattern.test(emailAddress)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    } else setEmailError("");

    if (!phonePattern.test(PhoneNumber)) {
      setPhoneError("Please enter a valid 10-digit phone number.");
      isValid = false;
    } else setPhoneError("");

    if (password.length < 6) {
      setPassError("Password must be at least 6 characters");
      isValid = false;
    } else setPassError("");

    if (password !== confirmPassword) {
      setConfirmError("Passwords do not match.");
      isValid = false;
    } else setConfirmError("");

    if (!isValid) return;
    setSignUpAuth(true);
    console.log("Form is valid", { CompanyName, emailAddress, PhoneNumber, password });
  };

  return (
    <>{!signUpAuth ? (
      <div className="w-full h-100% flex max-md:forgound-bg z-10">
        <div className="max-md:w-full w-1/2 z-30">
          <div className="flex items-center h-auto py-5 px-6">
            <img className="w-16 h-16" src={assests.logo} alt="Logo" />
            <h1 className="text-2xl font-extrabold text-primary-blue ml-2">OS BIZ</h1>
          </div>
          <div className="flex justify-center items-center w-full h-[80%] max-md:h-fit">
            <div className="w-96 max-sm:w-full h-fit max-md:my-20 mx-auto my-6 p-6 max-md:px-4 bg-white">
              <h2 className="text-3xl text-black font-extrabold">Create an account</h2>
              <p className="text-gray-700 mt-2">Simplify Your Inventory, Boost Your Business.</p>
              <form className="mt-6 space-y-4" onSubmit={onsubmit} autoComplete="off">
                <div>
                  <label className="text-md font-medium text-gray-700 block mb-1">Company Name</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                      <img src={SignupAssests.CompanyName} alt="" className="w-5 h-5" />
                    </span>
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={CompanyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className={`w-full pl-10 pr-4 py-2 border ${companyError ? "border-red-300" : "border-gray-300"} focus:ring-primary-blue focus:shadow-2xl rounded-md focus:outline-none focus:ring-2`}
                    />
                  </div>
                  {companyError && <span className="text-red-500 text-sm mt-1 block">{companyError}</span>}
                </div>

                <div>
                  <label className="text-md font-medium text-gray-700 block mb-1">Email Address</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                      <img src={assests.mail} alt="" className="w-5 h-5" />
                    </span>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={emailAddress}
                      onChange={EmailVerification}
                      className={`w-full pl-10 pr-4 py-2 border ${emailError ? "border-red-300" : "border-gray-300"} focus:ring-primary-blue focus:shadow-2xl rounded-md focus:outline-none focus:ring-2`}
                    />
                  </div>
                  {emailError && <span className="text-red-500 text-sm mt-1 block">{emailError}</span>}
                </div>

                <div>
                  <label className="text-md font-medium text-gray-700 block mb-1">Phone Number</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                      <img src={SignupAssests.PhoneNumber} alt="" className="w-5 h-5" />
                    </span>
                    <input
                      type="tel"
                      inputMode="tel"
                      placeholder="Phone Number"
                      value={PhoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className={`w-full pl-10 pr-4 py-2 border ${phoneError ? "border-red-300" : "border-gray-300"} focus:ring-primary-blue focus:shadow-2xl rounded-md focus:outline-none focus:ring-2`}
                    />
                  </div>
                  {phoneError && <span className="text-red-500 text-sm mt-1 block">{phoneError}</span>}
                </div>

                <div className="relative w-full max-w-md">
                  <label className="text-md font-medium text-gray-700 block mb-1">Password</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                      <img src={assests.pass} alt="password icon" className="w-5 h-5" />
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      value={password}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`w-full pl-10 pr-10 py-2 border ${passError ? "border-red-300" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue`}
                    />
                    <span
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}>
                      {password && (showPassword ? <AiOutlineEyeInvisible size={22} /> : <AiOutlineEye size={22} />)}
                    </span>
                  </div>
                  {passError && <span className="text-red-500 text-sm mt-1 block">{passError}</span>}
                  {isFocused && (
                    <div className="absolute z-10 w-full mt-2 p-4 bg-white border rounded-md shadow-xl">
                      <div className="flex mb-3 space-x-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className={`h-1 flex-1 rounded-full ${i <= progress ? "bg-blue-500" : "bg-blue-200"}`}></div>
                        ))}
                      </div>
                      <p className="text-sm font-medium mb-2 text-gray-700">Your password must contain:</p>
                      <ul className="space-y-1 text-sm">
                        <PasswordRule valid={rules.minLength} text="Minimum 6 characters." />
                        <PasswordRule valid={rules.hasLowercase} text="Lowercase letter." />
                        <PasswordRule valid={rules.hasUppercase} text="Uppercase letter." />
                        <PasswordRule valid={rules.hasNumber} text="A number." />
                        <PasswordRule valid={rules.hasSpecialChar} text="A special character." />
                      </ul>
                    </div>
                  )}
                </div>

                <div>
                  <label className="text-md font-medium text-gray-700 block mb-1">Confirm Password</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                      <img src={assests.pass} alt="" className="w-5 h-5" />
                    </span>
                    <input
                      type={confirmShowPassword ? "text" : "password"}
                      placeholder="Confirm password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className={`w-full pl-10 pr-10 py-2 border ${(confirmError || passError) ? "border-red-300" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue focus:shadow-2xl`}
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 cursor-pointer" onClick={() => setConfirmShowPassword(!confirmShowPassword)}>
                      {confirmPassword && (confirmShowPassword ? <AiOutlineEyeInvisible size={22} /> : <AiOutlineEye size={22} />)}
                    </span>
                  </div>
                  {confirmError && <span className="text-red-500 text-sm mt-1 block">{confirmError}</span>}
                </div>

                <button type="submit" className="w-full bg-primary-blue text-white py-2 my-4 rounded-md hover:bg-blue-800 transition font-semibold cursor-pointer">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="max-md:hidden relative w-1/2 h-auto bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${assests.loginBg})` }}>
          <div className="w-full h-fit relative top-1/2 transform -translate-y-1/2">
            <div className="flex flex-col items-center justify-center p-6 pr-0">
              <div className="w-full flex justify-center">
                <img className="xl:w-[min(100%,520px)] w-[min(100%,480px)] h-auto object-contain" src={SignupAssests.Signupimg} alt="Dashboard" />
              </div>
              <p className="text-white font-inter text-center font-semibold text-3xl px-8 mt-2">
                The Easiest way to manage your Business
              </p>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="w-full  h-[100vh] forgound-bg z-10">
                  {/* Left Panel */}
                  <div className="flex h-auto items-center  py-5 px-6">
                    <img className="w-16 h-16" src={assests.logo} alt="Logo" />
                    <h1 className="text-2xl font-extrabold text-primary-blue ml-2">
                      OS BIZ
                    </h1>
                  </div>
                   <div className="w-full flex justify-center items-center my-6 absolute">
                                <div className="w-90 h-auto max-sm:w-full max-md:my-20 mx-auto my-6 p-4 max-md:px-4 bg-white rounded-[10px] shadow-[0px_5px_12px_0px_rgba(0,51,102,0.2)]">
                                  <div className="border border-gray-300 text-gray-800 w-fit p-[2px] rounded-[4px] cursor-pointer"  onClick={() => {
                                 setSignUpAuth(false)
                                 setOtp(["","","",""])
                    }}>
                                    <IoIosArrowBack size={20}/>
                                  </div>
                                  <div className="flex flex-col justify-center items-center">
                                    <img className="w-16 object-contain" src={assests.forgetmail} alt="" />
                                  </div>
                                  <h2 className="text-center text-[24px]/7 font-inter font-extrabold mx-auto mt-2">Verify Your E-Mail Address</h2>
                                  <p className="text-center text-sm/4 mt-2">Enter the verification code we sent to </p>
                                  <span className="font-semibold">{emailAddress}</span>
                                 <form id="otp-form" className="mt-4 space-y-2"  onSubmit={(e) => onAuthOTP(e)}>
                  <div className="flex gap-2 mx-auto justify-center">
                     {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              onFocus={handleFocus}
              onPaste={handlePaste}
              ref={(el) => (inputRefs.current[index] = el)}
              className={`shadow-xs flex w-[54px] h-[54px] items-center justify-center rounded-lg border border-stroke bg-white p-2  text-center text-xl font-medium text-gray-5 outline-none sm:text-2xl border ${
                        otpError
                          ? "border-red-300"
                          : "border-gray-300 focus:ring-primary-blue focus:shadow-2xl"
                      } focus:shadow-2xl focus:outline-none focus:ring-2`}
            />
          ))}
                  </div>
                  {otpError && (
        <p className="text-red-500 text-center text-sm mt-2">{otpError}</p>
      )}
          
          <button
                  type="submit"
                  className="w-full bg-primary-blue text-white py-2 my-4 rounded-md hover:bg-blue-800 transition font-semibold cursor-pointer"
                >
                  Verify
                </button>
        </form>
                                </div>
                              </div>
      </div>
    )}</>
  );
};

export default Signup;