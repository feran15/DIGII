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
            src="/203.webp" 
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


        {/* -------- Feature 4 -------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-26">
        
        {/* Text (comes first for alternating layout) */}
        <div>
          <h5 className="font-semibold text-xl mb-4">
            Hostel Service Management
          </h5>

          <p className="mb-4 text-gray-700 leading-relaxed">
           Now you can easily handle housekeeping, maintainance, and <br /> general hostel service 
           workflows via a single dashboard. The <br /> module offers escalation capabilities for enhanced 
           <br />accountability and measure effectiveness at each service level
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>⨠ 100+ Maintenance, House-Keeping, and other General Service- Related Workflows</li>
            <li>⨠ Multi-Level Escalation for Better Accountability</li>
            <li>⨠ Dashboards to Measure Effectiveness and Efficiency at Each Service <br /> Level</li>
            <li>⨠ Escalation for Quick Resolution</li>
          </ul>
        </div>

        {/* Image */}
        <div>
          <img 
            className="w-full md:w-[90%] mx-auto" 
            src="/11.webp" 
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
            src="/51.webp" 
            alt="Hostel management dashboard"
          />
        </div>

        {/* Text */}
        <div>
          <h5 className="font-semibold text-xl mb-4">
            Hostel Fee Management
          </h5>

          <p className="mb-4 text-gray-700 leading-relaxed">
          Our unified payment system accomodates both offline and <br /> online payment methods. Additionally,
          the software sends <br /> timely notifications to ensure parents and students are <br /> reminded 
          of upcoming hostel fee payment dates
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>⨠ Unified Payment System for Easy Transactions</li>
            <li>⨠ Real-Time Notifications to Students and Parents</li>
            <li>⨠ Download Fee Submission Report</li>
          </ul>
        </div>
      </div>

    </section>
  )
}

export default Features