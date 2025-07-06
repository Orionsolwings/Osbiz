import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const AddBussinessPartner = () => {
    const navigate = useNavigate();
  return (
    <div className='bg-[#f1f3ff] w-full h-screen p-5'>
        <button className='flex justify-start items-center text-[#686868ed] text-sm font-semibold mb-4' onClick={() => navigate('/businesspartner')}>
            <FaArrowLeft color="#686868ed" strokeWidth="0.6" />
            <span style={{ marginLeft: '8px' }}>Back to BP list</span>
        </button>
        <div className='flex w-full h-full'>
            <div className='w-[30%] bg-amber-200 h-full'>
               
            </div>
        <div className='w-[70%] bg-red-200 h-full'></div>
        </div>
    </div>
  )
}

export default AddBussinessPartner