import React from 'react'

const Benefits = () => {
  return (
    <div>
        <div className="Hostel_Activities bg-[rgb(255,0,0)] mt-15 grid grid-cols-2">
            <div className="campus_text text-white p-20">
                <h4 className='font-semibold'>Manage your hostel's activities with Digiicampus's <br />
                 technology-based Hostel Management System that <br /> automates campus processes</h4>

                 <button className='text-white border mt-20 rounded-full px-7 py-1 font-semibold leading-relaxed hover:bg-white hover:text-red-500 hover:cursor-pointer transition'>REQUEST A DEMO
                 </button>
            </div>
            <div>
                <img className='w-[50%]' src="/Mask.webp" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Benefits