import React from 'react';
import { useMemo } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const PasswordRule = ({ valid, text }) => useMemo(()=>(
  <li className={`flex items-center gap-2 ${valid ? 'text-green-600' : 'text-gray-700'}`}>
    {valid ? <FaCheck className="text-green-500" /> : <FaTimes className="text-red-500" />}
    <span>{text}</span>
  </li>
), [valid, text]);

export default PasswordRule;