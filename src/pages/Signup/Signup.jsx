import React, { useState} from "react";
import { useNavigate } from 'react-router-dom';
import { assests, SignupAssests } from "@assets/assets";
import { usePasswordValidation } from "@hooks/usePasswordValidation";
import { useOtpInput } from "@hooks/useOtpInput";
import Input from "@components/ui/Input/Input";
import Button from "@components/ui/Button/Button";
import OtpInput from "@components/ui/Input/OtpInput";
import PasswordStrength from "@components/auth/PasswordStrength";
import { IoIosArrowBack } from "react-icons/io";

const Signup = () => {
  const navigate = useNavigate();
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
      isPasswordValid
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
  const [CompanyName, setCompanyName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [passError, setPassError] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [signUpAuth, setSignUpAuth] = useState(false);
  const [resetFormError, setResetFormError] = useState("");


  const onAuthOTP = (e) => {
    e.preventDefault();
    const fullOtp = otp.join("");
    if (fullOtp.length < otp.length) {
      console.log("Please enter complete OTP");
      setOtpError("Please enter a valid 4-digit OTP.");
    } else {
      localStorage.setItem("isVerified", "true");
      navigate('/companyprofile', {
  state: {
    companyName: CompanyName,
    email: emailAddress,
    phone: PhoneNumber
  }
});
      setOtpError("");
      console.log("OTP submitted:", fullOtp);
    }
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
           isValid = false;
      setPassError("Password must be at least 6 characters");
    } else if (!isPasswordValid){
      isValid = false;
      setPassError("Password is not strong enough")
    }else {
      setPassError("");
    }


    if (confirmPassword.length < 6) {
      setConfirmError("Password must be at least 6 characters");
      isValid = false;
    }else if(password !== confirmPassword){
       setConfirmError("Passwords do not match.");
      isValid = false;
    } else {setConfirmError("");
      }


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
              {resetFormError && (
  <div className="text-red-600 text-sm font-medium mb-2">{resetFormError}</div>
)}
              <form className="mt-6 space-y-4" onSubmit={onsubmit} autoComplete="off">
                <div>
                  <label className="text-md font-medium text-gray-700 block mb-1">Company Name</label>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Company Name"
                      value={CompanyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      icon={
                        <img
                          src={SignupAssests.CompanyName}
                          alt="Email"
                          className="w-5 h-5"
                        />
                      }
                      error={companyError}
                    />
                  </div>
                  {companyError && <span className="text-red-500 text-sm mt-1 block">{companyError}</span>}
                </div>

                <div>
                  <label className="text-md font-medium text-gray-700 block mb-1">Email Address</label>
                  <div className="relative">
                    <Input
                        type="text"
                        placeholder="Email Address "
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
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
                  {emailError && <span className="text-red-500 text-sm mt-1 block">{emailError}</span>}
                </div>

                <div>
                  <label className="text-md font-medium text-gray-700 block mb-1">Phone Number</label>
                  <div className="relative">
                    <Input
                        type="tel"
                        inputMode="tel"
                        pattern="[0-9]*"
                        placeholder="Phone Number"
                        value={PhoneNumber}
                        onChange={(e) => {const onlyNums = e.target.value.replace(/\D/g, ""); setPhoneNumber(onlyNums)}}
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
                  {phoneError && <span className="text-red-500 text-sm mt-1 block">{phoneError}</span>}
                </div>

                <div className="relative w-full max-w-md">
                  <label className="text-md font-medium text-gray-700 block mb-1">Password</label>
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
                  {passError && <span className="text-red-500 text-sm mt-1 block">{passError}</span>}
                </div>

                <div>
                  <label className="text-md font-medium text-gray-700 block mb-1">Confirm Password</label>
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
                  {confirmError && <span className="text-red-500 text-sm mt-1 block">{confirmError}</span>}
                </div>

                  {/* Sign In Button */}
                                 <Button type="submit" className="mt-4">
                                     Sign Up
                                  </Button>
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
                                    <img className="w-16 object-contain" src={assests.forgetphone} alt="" />
                                  </div>
                                  <h2 className="text-center text-[24px]/7 font-inter font-extrabold mx-auto mt-2">Verify Your Phone Number</h2>
                                  <p className="text-center text-sm/4 mt-2">Enter the verification code we sent to <br></br>
                                  <span className="text-center font-semibold"> {PhoneNumber}</span></p>
                                 <form id="otp-form" className="mt-4 space-y-2"  onSubmit={(e) => onAuthOTP(e)}>
                                  <OtpInput
                                              otp={otp}
                                              inputRefs={inputRefs}
                                              handleInput={handleInput}
                                              handleKeyDown={handleKeyDown}
                                              handleFocus={handleFocus}
                                              handlePaste={handlePaste}
                                              error={otpError}
                                            />
          
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