import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { assests,SignupAssests } from "@assets/assets";
import { usePasswordValidation } from "@hooks/usePasswordValidation";
import { useOtpInput } from "@hooks/useOtpInput";
import Input from "@components/ui/Input/Input";
import Button from "@components/ui/Button/Button";
import OtpInput from "@components/ui/Input/OtpInput";
import PasswordStrength from "@components/auth/PasswordStrength";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { IoIosArrowBack } from "react-icons/io";
import {login} from '@service/Api'


const Login = ({setIsLogin}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [currentForm, setCurrentForm] = useState("login"); // 'login', 'forgot', 'otp', 'reset'
  const [currentSlide, setCurrentSlide] = useState(0);
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [newPassError, setNewPassError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [resetFormError, setResetFormError] = useState("");
  const [adminAuth , setAdminAuth] = useState(false) //is the value if true mean it will go to the admin verification page
    // Password validation hook
  const {
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
    isPasswordValid,
  
  } = usePasswordValidation();

   // OTP input hook
  const {
    otp,
    setOtp,
    otpError,
    inputRefs,
    handleKeyDown,
    handleInput,
    handleFocus,
    handlePaste,
    setOtpError,
  } = useOtpInput();


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 20000); // Auto slide every 20 seconds
    return () => clearInterval(interval);
  }, []);


  //Handles the login form submission.
  const onsubmit = async (e) => {
  e.preventDefault();
  let isValid = true;

  // Validate email or phone
  if (!email) {
    setEmailError("Please enter a valid email or 10-digit phone number.");
    isValid = false;
  } else {
    setEmailError("");
  }

  // Validate Password
  if (password.length < 6) {
    setPassError("Password must be at least 6 characters");
    isValid = false;
  } else {
    setPassError("");
  }

  if (!isValid) return;

  const userData = {
    emailAddress: email,
    password: password,
  };
  console.log(userData)
  try {
    const response = await login(userData); // fixed here

    console.log("Login Response:", response);

    // Example condition if you check for admin
    if (adminAuth == true) {
      setCurrentForm("adminverify");
    } else {
      setIsLogin(true);
      localStorage.setItem("isLogin", true);
      navigate("/dashboard");
    }
  } catch (err) {
    console.error("Login failed:", err);
    console.log(err?.message)
    setPassError("Login failed. Please check credentials.");
  }
};

  //Handles the forgetPhone form submission.
  const handleForgetPhone = (e) => {
    e.preventDefault()
    const phonePattern = /^\d{10}$/;
    if(!phonePattern.test(phone)){
      setPhoneError("Please enter a valid 10-digit phone number.")
    }else{
      //implement the api logic
      setPhoneError("")
      setCurrentForm("otp")
    }
  }

  //Handles the Otp form submission.
   const handleOtpSubmit = (e) => {
    e.preventDefault()
    const fullOtp = otp.join("");
    if (fullOtp.length < otp.length) {
      setOtpError("Please enter a valid 4-digit OTP.");
    } else {
      //Implement the Api login
      setOtpError("");
      setOtp(["","","",""])
      console.log("OTP submitted:", fullOtp);
      setCurrentForm("reset")
    }
   }

   //Handles the Reset form submission.
   const handleResetPasswordSubmit = (e) => {
    e.preventDefault()
    if (!password) {
    setNewPassError("Enter the new Password")
  }else if (!confirmPassword) {
    setConfirmError("Enter the Confirm Password")
  }else if (!isPasswordValid){
    setResetFormError("Password is not strong enough")
  } else if (password !== confirmPassword) {
    console.log("Your Password is not matching");
    setResetFormError("Your Password is not matching")
  } else {
    //Implement the APi Logic here
    console.log("Your Password is updated");

    // Reset all relevant states
    setCurrentForm("login");
    setPassword("");
    setConfirmPassword("");
    setPhone("");
  }

   }

   const onAuthenticateOTP = (e) => {
    e.preventDefault()
    const fullOtp = otp.join("");
    if (fullOtp.length < otp.length) {
      console.log("Please enter complete OTP");
      setOtpError("Please enter a valid 4-digit OTP.");
    } else {
      //implement the api logic
      setIsLogin(true)
      navigate('/')

      setOtpError("");
      console.log("OTP submitted:", fullOtp);
      setCurrentForm('loading')
      setOtp(["","","",""])

      setTimeout(() => {
      setCurrentForm('login');
    }, 3000);
    }
   }

  return (
    <>
      {currentForm === "login" && (
        <div className="w-full h-[100vh] flex max-md:forgound-bg z-10">
          <div className="max-md:w-full w-1/2 z-30">
            <div className="flex items-center h-auto  py-5 px-6">
              <img className="w-16 h-16" src={assests.logo} alt="Logo" />
              <h1 className="text-2xl font-extrabold text-primary-blue ml-2">
                OS BIZ
              </h1>
            </div>
            <div className="flex justify-center items-center w-full h-[80%] max-md:h-fit">
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
                      <Input
                        type="text"
                        placeholder="Phone number / Email Address "
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        icon={
                          <img
                            src={assests.mail}
                            alt="Email"
                            className="w-5 h-5"
                          />
                        }
                        error={emailError}
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
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        icon={
                          <img
                            src={assests.pass}
                            alt="Password"
                            className="w-5 h-5"
                          />
                        }
                        error={passError}
                        showPasswordToggle={true}
                        showPassword={showPassword}
                        onTogglePassword={() => setShowPassword(!showPassword)}
                      />
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
                      onClick={() => setCurrentForm("forgot")}
                    >
                      Forgot password
                    </a>
                  </div>

                  <Button type="submit" className="mt-4 w-full">
                    Sign In
                  </Button>
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

      {currentForm === "forgot" && (
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
              <div
                className="border border-gray-300 text-gray-800 w-fit p-[2px] rounded-[4px] cursor-pointer"
                onClick={() => {
                  setCurrentForm("login");
                   setPhone('')
                }}
              >
                <IoIosArrowBack size={20} />
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  className="w-16 object-contain"
                  src={assests.forgetphone}
                  alt=""
                />
              </div>
              <h2 className="text-center text-[24px]/7 font-inter font-extrabold mx-auto mt-2">
                {" "}
                Forgot your password?
              </h2>
              <p className="text-center text-sm/4 mt-2">
                Enter your registered phone number and we’ll send you an OTP to reset your password.
              </p>
              <form
                className="mt-4 space-y-2"
                onSubmit={(e) => handleForgetPhone(e)}
              >
                {/* Username */}
                <div>
                  <label className="text-md font-medium text-gray-700 block mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Input
                      type="tel"
                      pattern="[0-9]*"
                      placeholder="Enter your phone number"
                      value={phone}
                      onChange={(e) => {const onlyNums = e.target.value.replace(/\D/g, ""); // removes non-digits
    setPhone(onlyNums);}}
                      icon={
                        <img
                          src={SignupAssests.PhoneNumber}
                          alt="Email"
                          className="w-5 h-5"
                        />
                      }
                      error={phoneError}
                    />
                  </div>
                  {phoneError && (
                    <span className="text-red-500 text-sm mt-1">
                      {phoneError}
                    </span>
                  )}
                </div>

                {/* Sign In Button */}
                 <Button type="submit" className="mt-4 w-full">
                    Send OTP
                  </Button>
              </form>
            </div>
          </div>
        </div>
      )}


      {currentForm === "otp" && (
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
              <div
                className="border border-gray-300 text-gray-800 w-fit p-[2px] rounded-[4px] cursor-pointer"
                onClick={() => {
                  setCurrentForm("forgot");
                   setOtp(["","","",""])
                }}
              >
                <IoIosArrowBack size={20} />
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  className="w-16 object-contain"
                  src={assests.forgetphone}
                  alt=""
                />
              </div>
              <h2 className="text-center text-[24px]/7 font-inter font-extrabold mx-auto mt-2">
                {" "}
                Verify OTP
              </h2>
              <p className="text-center text-sm/4 mt-2">We've sent a 4-digit verification code to <br />
          <span className="font-semibold text-base">{phone}</span>
      </p>
              <form
                className="mt-4 space-y-2"
                onSubmit={(e) => handleOtpSubmit(e)}
              >
                {/* OTP */}
                <OtpInput
            otp={otp}
            inputRefs={inputRefs}
            handleInput={handleInput}
            handleKeyDown={handleKeyDown}
            handleFocus={handleFocus}
            handlePaste={handlePaste}
            error={otpError}
          />
 

                {/* Sign In Button */}
                 <Button type="submit" className="mt-4 w-full">
                    Verify
                  </Button>
              </form>
            </div>
          </div>
        </div>
      )}

      {currentForm === "reset" && (
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
              <div
                className="border border-gray-300 text-gray-800 w-fit p-[2px] rounded-[4px] cursor-pointer"
                onClick={() => {
                  setCurrentForm("forgot");
                   setPhone('')
                   setOtp(["","","",""])
                   setPassword("")
                   setConfirmPassword("")
                }}
              >
                <IoIosArrowBack size={20} />
              </div>

              <h2 className="text-center text-[24px]/7 font-inter font-extrabold mx-auto mt-2">
                {" "}
                Reset Passwword
              </h2>
              {resetFormError && (
  <div className="text-red-600 text-sm font-medium mb-2">{resetFormError}</div>
)}
              <form
                className="mt-4 space-y-2"
                onSubmit={(e) => handleResetPasswordSubmit(e)}
              >

                <div className="relative w-full max-w-md">
                      <label className="text-md font-medium text-gray-700 block mb-1">
                        New Password
                      </label>
                      <div className="relative">
                        <Input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              icon={<img src={assests.pass} alt="Password" className="w-5 h-5" />}
              showPasswordToggle={true}
              showPassword={showPassword}
              onTogglePassword={() => setShowPassword(!showPassword)}
            />
            <PasswordStrength rules={rules} isFocused={isFocused} />
                      </div>
                      {newPassError && (
                  <span className="text-red-500 text-sm mt-1 block">{newPassError}</span>
                )}
                
                </div>

                <div className="relative w-full max-w-md">
                      <label className="text-md font-medium text-gray-700 block mb-1">
                        Confirm Password
                      </label>
                      <div className="relative">
                       <Input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            icon={<img src={assests.pass} alt="Password" className="w-5 h-5" />}
            showPasswordToggle={true}
            showPassword={showConfirmPassword}
            onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
            className="mb-4"
          />
                      </div>
                 {confirmError && (
  <span className="text-red-500 text-sm mt-1 block">{confirmError}</span>
)}
                
                </div>
                
 

                {/* Sign In Button */}
                 <Button type="submit" className="mt-4 w-full">
                    Reset
                  </Button>
              </form>
            </div>
          </div>
        </div>
      )}

            {currentForm === "adminverify" && (
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
              <div
                className="border border-gray-300 text-gray-800 w-fit p-[2px] rounded-[4px] cursor-pointer"
                onClick={() => {
                  setCurrentForm("login");
                  setOtp(["","","",""])
                }}
              >
                <IoIosArrowBack size={20} />
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  className="w-16 object-contain"
                  src={assests.Autheticate}
                  alt=""
                />
              </div>
              <h2 className="text-center text-[24px]/7 font-inter font-extrabold mx-auto mt-2">
                {" "}
                Two-factor authentication
              </h2>
              <p className="text-center text-sm/4 mt-2">Enter the verification code we sent to <br />
          <span className="font-semibold text-base">{email}</span>
      </p>
              <form
                className="mt-4 space-y-2"
                onSubmit={(e) => onAuthenticateOTP(e)}
              >
                {/* OTP */}
                <OtpInput
            otp={otp}
            inputRefs={inputRefs}
            handleInput={handleInput}
            handleKeyDown={handleKeyDown}
            handleFocus={handleFocus}
            handlePaste={handlePaste}
            error={otpError}
          />
 

                {/* Sign In Button */}
                 <Button type="submit" className="mt-4 w-full">
                    Verify
                  </Button>
              </form>
            </div>
          </div>
        </div>
      )}

      {currentForm === "loading" &&(
        <div className="w-full  h-[100vh] forgound-bg z-10">
                    <div className="flex h-auto items-center  py-5 px-6">
                      <img className="w-16 h-16" src={assests.logo} alt="Logo" />
                      <h1 className="text-2xl font-extrabold text-primary-blue ml-2">
                        OS BIZ
                      </h1>
                    </div>
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
                    </div>
      )}
    </>
  );
};

export default Login;
