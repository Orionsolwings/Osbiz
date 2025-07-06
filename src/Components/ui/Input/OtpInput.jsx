import React,{useMemo} from 'react';

const OtpInput = ({ 
  otp, 
  inputRefs, 
  handleInput, 
  handleKeyDown, 
  handleFocus, 
  handlePaste,
  error,
  length = 4
}) => useMemo(() => {
  return (
    <div className="flex flex-col items-center">
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
            className={`shadow-xs flex w-[54px] h-[54px] items-center justify-center rounded-lg border border-stroke bg-white p-2 text-center text-xl font-medium text-gray-5 outline-none sm:text-2xl border ${
              error ? 'border-red-300' : 'border-gray-300 focus:ring-primary-blue focus:shadow-2xl'
            } focus:shadow-2xl focus:outline-none focus:ring-2`}
          />
        ))}
      </div>
      {error && (
        <p className="text-red-500 text-center text-sm mt-2">{error}</p>
      )}
    </div>
  );
}, [otp, inputRefs, handleInput, handleKeyDown, handleFocus, handlePaste, error, length]);

export default OtpInput;