import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const PasswordRule = ({ valid, text }) => (
  <li className={`flex items-center gap-2 ${valid ? 'text-green-600' : 'text-gray-700'}`}>
    {valid ? <FaCheck className="text-green-500" /> : <FaTimes className="text-red-500" />}
    <span>{text}</span>
  </li>
);

export default PasswordRule;