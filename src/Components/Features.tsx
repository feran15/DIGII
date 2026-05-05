import React from 'react'

const Features = () => {
  return (
    <div>
        <div className="feautres_body bg-[rgb(240,240,240)] mt-18">
            <div className="text">
                <h3 className="font-semibold p-20 text-3xl">Key Feautres & Characteristics of Hostel Management</h3>
            </div>
            <div className='grid grid-cols-2'>
            <div className="Master_data">
              <img className='w-[60%]' src="/creen.webp" alt="" />
            </div>
            <div className="data_text">
              <h5 className='font-semibold'>Manage Hostel Master Data</h5>
              <p>Digiicampus Hostel Management is purpose-built for <br />
              higher education institutions. <br />
              It is an integrated solution to manage campus operations <br />while saving your
              time!
              <ul>
    
             <li> ⨠ Create Hostel Buildings with Unique IDs </li>
             <li> ⨠ Allocate Rooms individually or in Bulk </li>
             <li> ⨠ Collect Fees Online with Dues Management </li>
              </ul>
              </p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Features