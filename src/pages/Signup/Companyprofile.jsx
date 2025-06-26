import React from 'react'
import { assests, SignupAssests } from "@assets/assets";

const Companyprofile = () => {
  return (
    <div className="w-full  h-[100vh] forgound-bg z-10">
                      {/* Left Panel */}
                      <div className="flex h-auto items-center  py-5 px-6">
                        <img className="w-16 h-16" src={assests.logo} alt="Logo" />
                        <h1 className="text-2xl font-extrabold text-primary-blue ml-2">
                          OS BIZ
                        </h1>
                      </div>
                       <div className="w-full flex justify-center items-center my-6 absolute">
                                    <div className="w-[80%] h-auto max-sm:w-full max-md:my-20 mx-auto my-6 p-4 max-md:px-4 bg-white rounded-[10px] shadow-[0px_5px_12px_0px_rgba(0,51,102,0.2)]">
                                      <div className="flex flex-col justify-center items-center">
                                      </div>
                                      <h2 className="text-center text-[24px]/7 font-inter font-extrabold mx-auto mt-2">Company Profile</h2>
                                      <form >
                                        
                                      </form>
                                    </div>

                                  </div>
          </div>
  )
}

export default Companyprofile