import React from 'react'

const Features = () => {
  return (
    <section className="features_body bg-[rgb(240,240,240)] mt-16 px-6 md:px-20 py-12">
      
      {/* Heading */}
      <div className="mb-12">
        <h3 className="font-semibold text-2xl md:text-3xl">
          Key Features & Characteristics of Hostel Management
        </h3>
      </div>

      {/* -------- Feature 1 -------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-25">
        
        {/* Image */}
        <div>
          <img 
            className="w-full md:w-[90%] mx-auto" 
            src="/creen.webp" 
            alt="Hostel management dashboard"
          />
        </div>

        {/* Text */}
        <div>
          <h5 className="font-semibold text-xl mb-4">
            Manage Hostel Master Data
          </h5>

          <p className="mb-4 text-gray-700 leading-relaxed">
            Digiicampus Hostel Management is purpose-built for higher education institutions.
            It is an integrated solution to manage campus operations while saving your time.
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>⨠ Create Hostel Buildings with Unique IDs</li>
            <li>⨠ Allocate Rooms individually or in Bulk</li>
            <li>⨠ Collect Fees Online with Dues Management</li>
          </ul>
        </div>
      </div>

      {/* -------- Feature 2 -------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Text (comes first for alternating layout) */}
        <div>
          <h5 className="font-semibold text-xl mb-4">
            Track Allotments & Check-Outs
          </h5>

          <p className="mb-4 text-gray-700 leading-relaxed">
            Our hostel management software automates room allocation based on student requirements 
            and availability. It maintains real-time vacancy updates and handles transfers seamlessly.
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>⨠ View Allotment Status of All Occupants</li>
            <li>⨠ All-inclusive check-out process</li>
            <li>⨠ Monitor provisional or confirmed allotments</li>
            <li>⨠ Track dues, remarks, and check-out time</li>
          </ul>
        </div>

        {/* Image */}
        <div>
          <img 
            className="w-full md:w-[90%] mx-auto" 
            src="/creen.webp" 
            alt="Allotment tracking dashboard"
          />
        </div>
      </div>

          {/*--------- Feauture 3 -------- */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-25">
        
        {/* Image */}
        <div>
          <img 
            className="w-full md:w-[90%] mx-auto" 
            src="/18.webp" 
            alt="Hostel management dashboard"
          />
        </div>

        {/* Text */}
        <div>
          <h5 className="font-semibold text-xl mb-4">
            Hostel Attendance & Leave Management
          </h5>

          <p className="mb-4 text-gray-700 leading-relaxed">
            Digiicampus hostel management system integrates with <br />
             Exotel's IVR for attendance and gate pass workflows, <br /> priotizing student safety with a 
             parent-based leave approval <br /> system.
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>⨠ Daily Attendance Management with Biometric Integration</li>
            <li>⨠ Gates Pass Workflows to Manage Student Entry and Exit</li>
            <li>⨠ Parent-Based Leave Approval System</li>
            <li>⨠ Real-Time Notifications to Students and Parents</li>
          </ul>
        </div>
      </div>

    </section>
  )
}

export default Features