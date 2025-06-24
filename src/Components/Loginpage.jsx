import React, { useState, useEffect,useRef } from "react";
import { assests } from "@assets/assets";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaCheck, FaTimes } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loginpage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState("");
  const [resetFormError, setResetFormError] = useState(""); // top-level error
const [newPasswordError, setNewPasswordError] = useState(""); // field-specific
const [confirmError, setConfirmError] = useState(""); // field-specific
  const [currentSlide, setCurrentSlide] = useState(0);
  const [forgetEmail, setForgetEmail] = useState(false)
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [forgetOtp, setforgetOtp] = useState(false);
  const [adminVerification, setAdminVerification] = useState(false);
  const [forget, setForget] = useState(false)
  const [otp, setOtp] = useState(["", "", "", ""]); // For 4-digit OTP
  const [otpError, setOtpError] = useState("");
  const inputRefs = useRef([]);
  const [isFocused, setIsFocused] = useState(false);
  const [authLoading, setAuthLoading] = useState(false)


  const validatePassword = (pwd) => {
    return {
      minLength: pwd.length >= 6,
      hasLowercase: /[a-z]/.test(pwd),
      hasUppercase: /[A-Z]/.test(pwd),
      hasNumber: /[0-9]/.test(pwd),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
    };
  };

  let rules = validatePassword(newPassword);
  const progress = Object.values(rules).filter(Boolean).length;


const handleForgetPasswordSubmit = (e) => {
  e.preventDefault();
  const rules = validatePassword(newPassword);
  const progress = Object.values(rules).every(Boolean);

  // Clear previous errors
  setResetFormError("");
  setNewPasswordError("");
  setConfirmError("");

  if (!newPassword) {
    console.log("Enter the new Password");
    setNewPasswordError("Enter the new Password")
    return;
  } else if (!confirmPassword) {
    console.log("Enter the Confirm Password");
    setConfirmError("Enter the Confirm Password")
    return;
  } else if (!progress) {
    console.log("Password is not strong enough");
    setResetFormError("Password is not strong enough")
    return;
  } else if (newPassword !== confirmPassword) {
    console.log("Your Password is not matching");
    setResetFormError("Your Password is not matching")
    return;
  } else {
    console.log("Your Password is updated");

    // Reset all relevant states
    setForget(false);
    setNewPassword("");
    setConfirmPassword("");
    setforgetOtp(false);
    setForgetEmail(false);
    setEmailAddress("");
    setOtp(["", "", "", ""]);
  }
};

  const PasswordRule = ({ valid, text }) => (
  <li className={`flex items-center gap-2 ${valid ? "text-green-600" : "text-gray-700"}`}>
    {valid ? <FaCheck className="text-green-500" /> : <FaTimes className="text-red-500" />}
    <span>{text}</span>
  </li>
);

//forget Email address submit fucntion 
  const handleForgetEmailSubmit = (e) => {
    e.preventDefault()
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pattern.test(emailAddress)) {
      console.log("Invalid email address");
      setEmailError("Please enter a valid email address.");
      return;
    }
    console.log("Otp sended to use mail id")
    setforgetOtp(true)
  }

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

  const onForgetOTP = (e) => {
    e.preventDefault();
    const fullOtp = otp.join("");
    if (fullOtp.length < otp.length) {
      console.log("Please enter complete OTP");
      setOtpError("Please enter a valid 4-digit OTP.");
    } else {
      setOtpError("");
      console.log("OTP submitted:", fullOtp);
      setForgetEmail(true)
    }
  };

    const onAuthenticateOTP = (e) => {
    e.preventDefault();
    const fullOtp = otp.join("");
    if (fullOtp.length < otp.length) {
      console.log("Please enter complete OTP");
      setOtpError("Please enter a valid 4-digit OTP.");
    } else {
      setOtpError("");
      console.log("OTP submitted:", fullOtp);
      setAuthLoading(true)
      setOtp(["","","",""])

       setTimeout(() => {
      setAuthLoading(false);
      setAdminVerification(false); // Hide OTP screen
    }, 5000);
    }
  };


  //email verification function
  const EmailVerification = (e) => {
    const value = e.target.value;
    setEmailAddress(value);

    if (value === "") {
      setEmailError("Required");
    } else {
      setEmailError("");
    }
  };

  const onsubmit = (e) => {
    e.preventDefault(); // fix: correct capitalization

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pattern.test(emailAddress)) {
      console.log("Invalid email address");
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      console.log("Password must be at least 6 characters");
      setPassError("Password must be at least 6 characters");
      return;
    } else {
      setPassError("");
    }

    // If all validations pass
    console.log("Form is valid");
    setAdminVerification(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 20000); // Auto slide every 8 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {forget || adminVerification || (
        <div className="w-full  h-[100vh] max-h-screen flex max-sm:flex-col  z-10 ">
          {/* Left Panel */}
          <div className="max-md:w-full w-1/2 z-30">
            <div className="flex items-center h-auto  py-5 px-6">
              <img className="w-16 h-16" src={assests.logo} alt="Logo" />
              <h1 className="text-2xl font-extrabold text-primary-blue ml-2">
                OS BIZ
              </h1>
            </div>
            <div className="flex justify-center items-center w-full h-[85%]">
              <div className="w-96 max-sm:w-full h-fit max-md:my-20 mx-auto my-6 p-6 max-md:px-4 bg-white">
              <h2 className="text-3xl text-black font-extrabold">Log in</h2>
              <p className="text-gray-700 mt-2">
                Welcome back! Please enter your details.
              </p>

              <form className="mt-6 space-y-4" onSubmit={(e) => onsubmit(e)}>
                {/* Username */}
                <div>
                  <label className="text-md font-medium text-gray-700 block mb-1">
                    Username
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                      <img src={assests.mail} alt="" className="w-5 h-5" />
                    </span>
                    <input
                      type="text"
                      inputMode="email"
                      placeholder="Email Address"
                      value={emailAddress}
                      onChange={(e) => EmailVerification(e)}
                      className={`w-full pl-10 pr-4 py-2 border ${
                        emailError
                          ? "border-red-300"
                          : "border-gray-300 focus:ring-primary-blue focus:shadow-2xl"
                      }  rounded-md focus:outline-none focus:ring-2`}
                    />
                  </div>
                  {emailError && (
                    <span className="text-red-500 text-sm mt-1">
                      {emailError}
                    </span>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label className="text-md font-medium text-gray-700 block mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                      <img src={assests.pass} alt="" className="w-5 h-5" />
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`w-full pl-10 pr-10 py-2 border ${
                        passError ? "border-red-300" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue focus:shadow-2xl`}
                    />
                    <span
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {password &&
                        (showPassword ? (
                          <AiOutlineEyeInvisible size={22} />
                        ) : (
                          <AiOutlineEye size={22} />
                        ))}
                    </span>
                  </div>
                  {passError && (
                    <span className="text-red-500 text-sm mt-1">
                      {passError}
                    </span>
                  )}
                </div>

                {/* Remember & Forgot */}
                <div className="flex justify-between items-center text-sm text-gray-600  max-sm:gap-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="accent-blue-600" />
                    Remember
                  </label>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline"
                    onClick={() => setForget(true)}
                  >
                    Forgot password
                  </a>
                </div>

                {/* Sign In Button */}
                <button
                  type="submit"
                  className="w-full bg-primary-blue text-white py-2 my-4 rounded-md hover:bg-blue-800 transition font-semibold cursor-pointer"
                >
                  Sign in
                </button>
              </form>
            </div>
            </div>
          </div>

          {/* Right Panel with Carousel */}
          <div
            className="max-md:hidden relative w-1/2 h-full bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url(${assests.loginBg})` }}
          >
            <div className="w-full h-fit relative top-1/2 transform -translate-y-1/2">
              <div
              className="flex transition-transform duration-700 ease-in-out w-[200%]"
              style={{ transform: `translateX(-${currentSlide * 50}%)` }}
            >
              {/* Slide 1 */}
              <div className="w-1/2 flex flex-col items-center justify-center p-6 pr-0">
                <div className="w-full flex justify-end">
                  <img
                    className="xl:w-[min(100%,520px)] w-[min(100%,480px)] h-auto object-contain"
                    src={assests.loginDas}
                    alt="Dashboard"
                  />
                </div>
                <p className="text-white text-center text-base px-8 mt-2">
                  Every day easier — new product sub-group adds precision to
                  your reporting, analysis and inventory management.
                </p>
              </div>

              {/* Slide 2 */}
              <div className="w-1/2 flex flex-col items-center justify-center m-auto p-4 text-white text-center max-w-[640px]">
                <h2 className="text-2xl max-xl:text-xl max-md:text-xl font-bold mb-4">
                  OS-Biz: Comprehensive Business Management Solution
                </h2>
                <div className="grid grid-cols-2 gap-2 text-left text-sm">
                  {[
                    {
                      title: "Customers",
                      desc: "A business partner refers to an individual, organization, or a collective of individuals or organizations that share a business relationship with your company.",
                      img: assests.loginCustomer,
                    },
                    {
                      title: "Sales",
                      desc: "It streamlines the complete journey from accepting a customer order to receiving payment, guaranteeing both efficiency and precision.",
                      img: assests.loginSales,
                    },
                    {
                      title: "Purchases",
                      desc: "The procedure for accepting the items requested in the purchase order and adjusting the inventory.",
                      img: assests.loginPurchase,
                    },
                    {
                      title: "Reports",
                      desc: "Generate customized reports to address particular requirements, facilitating personalized data analysis and reporting.",
                      img: assests.loginReport,
                    },
                    {
                      title: "Settings",
                      desc: "Customize the layout and login procedure according to your particular requirements.",
                      img: assests.loginSetting,
                    },
                    {
                      title: "Intelligence",
                      desc: "A unified platform for data analysis, visualization, and distribution, turning data into valuable insights.",
                      img: assests.loginInten,
                    },
                  ].map(({ title, desc, img }) => (
                    <div
                      key={title}
                      className="bg-white/10 border border-white p-4 rounded-xl relative backdrop-opacity-60"
                    >
                      <img
                        className="w-8 h-8 object-contain"
                        src={img}
                        alt=""
                      />
                      <h3 className="font-bold mb-1 text-lg max-lg:text-lg text-white font-inter">
                        {title}
                      </h3>
                      <p className="text-white/80 text-[12px] max-lg:text-[10px] font-inter">
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Carousel Dots */}
            <div className="absolute left-1/2 -translate-x-1/2 flex gap-2 cursor-pointer">
              {[0, 1].map((i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2.5 h-2.5 rounded-full transition ${
                    i === currentSlide ? "bg-white px-3" : "bg-white/50"
                  }`}
                ></button>
              ))}
            </div>
            </div>
          </div>
        </div>
      )}
      {forget &&
        <>
          <div className="w-full  h-[100vh] forgound-bg z-10">
            {/* Left Panel */}
            <div className="flex h-auto items-center  py-5 px-6">
              <img className="w-16 h-16" src={assests.logo} alt="Logo" />
              <h1 className="text-2xl font-extrabold text-primary-blue ml-2">
                OS BIZ
              </h1>
            </div>
            {!forgetEmail ? (
            <>
             {!forgetOtp ? <>
            <div className="w-full flex justify-center items-center my-6 absolute">
              <div className="w-90 h-auto max-sm:w-full max-md:my-20 mx-auto my-6 p-4 max-md:px-4 bg-white rounded-[10px] shadow-[0px_5px_12px_0px_rgba(0,51,102,0.2)]">
                <div className="border border-gray-300 text-gray-800 w-fit p-[2px] rounded-[4px] cursor-pointer"  onClick={() => {
    setForget(prev => !prev);  // Hide Forget Email screen
    setforgetOtp(false);            // Also hide OTP screen
    setEmailAddress('');
               
  }}>
                  <IoIosArrowBack size={20}/>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img className="w-16 object-contain" src={assests.forgetmail} alt="" />
                </div>
                <h2 className="text-center text-[24px]/7 font-inter font-extrabold mx-auto mt-2"> Forgot your password?</h2>
                <p className="text-center text-sm/4 mt-2">Enter your registered email address and we’ll send you a otp to reset your password.</p>
                <form className="mt-4 space-y-2" onSubmit={(e) => handleForgetEmailSubmit(e)}>
                {/* Username */}
                <div>
                  <label className="text-md font-medium text-gray-700 block mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                      <img src={assests.mail} alt="" className="w-5 h-5" />
                    </span>
                    <input
                      type="text"
                      inputMode="email"
                      placeholder="Email Address"
                      value={emailAddress}
                      onChange={(e) => EmailVerification(e)}
                      className={`w-full pl-10 pr-4 py-2 border ${
                        emailError
                          ? "border-red-300"
                          : "border-gray-300 focus:ring-primary-blue focus:shadow-2xl"
                      }  rounded-md focus:outline-none focus:ring-2`}
                    />
                  </div>
                  {emailError && (
                    <span className="text-red-500 text-sm mt-1">
                      {emailError}
                    </span>
                  )}
                </div>

                {/* Sign In Button */}
                <button
                  type="submit"
                  className="w-full bg-primary-blue text-white py-2 my-4 rounded-md hover:bg-blue-800 transition font-semibold cursor-pointer"
                >
                  Send OTP
                </button>
              </form>
              </div>
            </div>
            </> :
            <>
            <div className="w-full flex justify-center items-center my-6 absolute">
              <div className="w-90 h-auto max-sm:w-full max-md:my-20 mx-auto my-6 p-4 max-md:px-4 bg-white rounded-[10px] shadow-[0px_5px_12px_0px_rgba(0,51,102,0.2)]">
                <div className="border border-gray-300 text-gray-800 w-fit p-[2px] rounded-[4px] cursor-pointer" onClick={() =>  {
    setforgetOtp(false);            // Also hide OTP screen 
    setOtp(["","","",""])           // Clear email input
            }}>
                  <IoIosArrowBack size={20}/>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img className="w-16 object-contain" src={assests.forgetmail} alt="" />
                </div>
                <h2 className="text-center text-[24px]/7 font-inter font-extrabold mx-auto mt-2">Check your email</h2>
                <p className="text-center text-sm/4 mt-2">We've sent a 4-digit verification code to <br />
          <span className="font-semibold text-base">{emailAddress}</span>
      </p>
                <form id="otp-form" className="mt-4 space-y-2"  onSubmit={(e) => onForgetOTP(e)}>
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
            </>
            }
            </>
            ):(
        <>
        <div className="w-full flex justify-center items-center my-6 absolute">
              <div className="w-90 h-auto max-sm:w-full max-md:my-20 mx-auto my-6 p-4 max-md:px-4 bg-white rounded-[10px] shadow-[0px_5px_12px_0px_rgba(0,51,102,0.2)]">
                <div className="border border-gray-300 text-gray-800 w-fit p-[2px] rounded-[4px] cursor-pointer"  onClick={() => {
    setForget(prev => !prev);  // Hide Forget Email screen
    setforgetOtp(false);
    setForgetEmail(false);
    setEmailAddress('');
    setOtp(["","","",""])       
               // Clear email input
  }}>
                  <IoIosArrowBack size={20}/>
                </div>
               
                <h2 className="text-center text-[24px]/7 font-inter font-extrabold mx-auto mt-2">Reset Password</h2>
                <p className="text-center text-sm/4 mt-2">Please Type Something you'll remember</p>
                {resetFormError && (
  <div className="text-red-600 text-sm font-medium mb-2">{resetFormError}</div>
)}
                <form className="mt-4 space-y-2" onSubmit={(e) => handleForgetPasswordSubmit(e)}>
                 <div className="relative w-full max-w-md">
      <label className="text-md font-medium text-gray-700 block mb-1">
        New Password
      </label>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
          <img src={assests.pass} alt="password icon" className="w-5 h-5" />
        </span>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          value={newPassword}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
        />
        <span
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {newPassword &&
            (showPassword ? (
              <AiOutlineEyeInvisible size={22} />
            ) : (
              <AiOutlineEye size={22} />
            ))}
        </span>
      </div>
      {newPasswordError && (
  <span className="text-red-500 text-sm mt-1 block">{newPasswordError}</span>
)}

      {/* Password popup */}
      {isFocused && (
        <div className="absolute z-10 w-full mt-2 p-4 bg-white border rounded-md shadow-xl">
          {/* Strength bar */}
          <div className="flex mb-3 space-x-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full ${
                  i <= progress ? "bg-blue-500" : "bg-blue-200"
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
      )}
    </div>

                 <div>
                  <label className="text-md font-medium text-gray-700 block mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                      <img src={assests.pass} alt="" className="w-5 h-5" />
                    </span>
                    <input
                      type={confirmShowPassword ? "text" : "password"}
                      placeholder="Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className={`w-full pl-10 pr-10 py-2 border ${
                        passError ? "border-red-300" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue focus:shadow-2xl`}
                    />
                    <span
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 cursor-pointer"
                      onClick={() => setConfirmShowPassword(!confirmShowPassword)}
                    >
                      {confirmPassword &&
                        (confirmShowPassword ? (
                          <AiOutlineEyeInvisible size={22} />
                        ) : (
                          <AiOutlineEye size={22} />
                        ))}
                    </span>
                  </div>
                  {passError && (
                    <span className="text-red-500 text-sm mt-1">
                      {passError}
                    </span>
                  )}
                  {confirmError && (
  <span className="text-red-500 text-sm mt-1 block">{confirmError}</span>
)}
                </div>

                {/* Sign In Button */}
                <button
                  type="submit"
                  className="w-full bg-primary-blue text-white py-2 my-4 rounded-md hover:bg-blue-800 transition font-semibold cursor-pointer"
                >
                  Reset Password
                </button>
              </form>
              </div>
            </div>
        </>
      ) }
      
          </div>
        </>
      }
      {adminVerification && (
        <>
          <div className="w-full  h-[100vh] forgound-bg z-10">
            <div className="flex h-auto items-center  py-5 px-6">
              <img className="w-16 h-16" src={assests.logo} alt="Logo" />
              <h1 className="text-2xl font-extrabold text-primary-blue ml-2">
                OS BIZ
              </h1>
            </div>
            {!authLoading ? (
            <div className="w-full flex justify-center items-center my-6 absolute">
              <div className="w-90 h-auto max-sm:w-full max-md:my-20 mx-auto my-6 p-3 max-md:px-4 bg-white rounded-[10px] shadow-[0px_5px_12px_0px_rgba(0,51,102,0.2)]">
                <div className="border border-gray-300 text-gray-800 w-fit p-[2px] rounded-[4px] cursor-pointer"  onClick={() => {
    setAdminVerification(prev => !prev);  // Hide Forget Email screen
  }}>
                  <IoIosArrowBack size={20}/>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img className="w-16 object-contain" src={assests.Autheticate} alt="" />
                </div>
                <h2 className="text-center text-[24px]/7 font-inter font-extrabold mx-auto mt-2">Two-factor authentication</h2>
                <p className="text-center text-sm/4 mt-2">Enter the verification code we sent to 
                <span className="font-semibold"> {emailAddress}</span></p>
               <form id="otp-form" className="mt-4 space-y-2"  onSubmit={(e) => onAuthenticateOTP(e)}>
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
            ):(
            <div className="w-full flex justify-center items-center my-6 absolute">
              <div className="w-90 h-auto max-sm:w-full max-md:my-20 mx-auto my-6 p-3 max-md:px-4 bg-white rounded-[10px] shadow-[0px_5px_12px_0px_rgba(0,51,102,0.2)]">
               <DotLottieReact
          src="https://lottie.host/febea2ad-e131-4391-a426-48645bafb5f1/9yj6y8HE8h.lottie"
          autoplay
          loop={false}
        />
        <p className="font-inter text-[#56CA00] text-center text-xl font-semibold">OTP Verified Successfully!</p>
              </div>
            </div>
            )}
            </div>
</>
      )
      }
      </>
  );
};

export default Loginpage;
