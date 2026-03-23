import React from 'react'

const Campus = () => {
    const campusData = [
        {icon:"/Ad.svg",title:"Administrators", text:"The module eliminates the necessity for manual paperwork, alleviating staff burden. It enhances transparency, discipline, and fosters trust between students and administrators."},
        {icon:"/fs.svg",title:"Faculty & Staff", text:"Our robust hostel management software automates various hostel operations effortlessly. From managing room availability to fee structures and automatic room number generation, it makes the processes easier!"},
        {icon:"/st.svg",title:"Students", text:"The smart college hostel management software empowers students to select rooms based on their preferences and also provides parents the ability to review room options and associated fees."}
    ]
  return (
    <div>
        <div className="campus-header p-12">
            <h3 className='font-semibold text-2xl'>Manage Campus Hostel From A Single Dashboard</h3>
            <p className='mt-3'>The hostel management system caters to the needs of all your stakeholders and is designed
                 to address the complexities of hostel processes.</p>
        </div>
          {/* CARDS */}
      <div className=" flex gap-4">
        {campusData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md flex flex-col items-center justify-center text-center px-10 py-8 hover:shadow-xl transition cursor-pointer"
          >
            <div className="mb-3 flex items-center justify-center">
              <img src={item.icon} alt="" className="w-10 sm:w-12" />
            </div>

            <h3 className="text-xs sm:text-sm font-medium">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Campus