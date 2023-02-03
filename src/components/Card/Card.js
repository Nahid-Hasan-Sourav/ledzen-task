import React, { useState } from 'react';

const Card = ({item}) => {
    const [show,setShow]=useState(false)

    return (
      <div className="mb-10">
        <div className="card bg-base-100 shadow-xl">
          <div className="p-10 grid grid-cols-5 content-center">
            <div>
                {item.name}
            </div>
            <div>
                <p className='font-bold'>Company</p>
                <p>{item.company.name}</p>
            </div>
            <div>
                <p className='font-bold'>City</p>
                <p>{item.address.city}</p>
            </div>
            <div>
                <p className='font-bold'>State</p>
                <p>{item.address.street}</p>
            </div>
            <div>
            <button className="btn" 
            onClick={()=>setShow(!show)}
            >
                {
                    show ? "Hide Details" : "view Details"
                }
            </button>
            </div>
          </div>
        </div>

        {
            show && 
            <div className="card bg-base-100 shadow-xl mt-3">
                <div className="p-10 grid md:grid-cols-2 md:justify-items-center ">
                   <div className=''>
                   <h4 className='font-bold'>Contact</h4>
                    <p>Name : {item.name}</p>
                    <p>Email : {item.email}</p>
                    <p>Phone : {item.phone}</p>
                    <p>User Name : {item.username}</p>
                    <p>Website : {item.website}</p>
                   </div>
                   <div className=''>
                   <h4 className='font-bold'>Company Details</h4>
                   <p>Name : {item.company.name}</p>
                   <p>Catch Phrase : {item.company.catchPhrase}</p>
                   </div>
                </div>
            </div>
        }
      </div>
    );
};

export default Card;