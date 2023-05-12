import React, { useEffect, useState } from 'react';
import SercieCard from './SercieCard';

const Services = () => {
      const [services,setServices] =useState();
      useEffect(()=>{
            fetch("services.json")
            .then(res=>res.json())
            .then(data => setServices(data))

      },[])
      console.log(services);
      return (
            <div className='mt-4'>
                  <div className='text-center'>
                        <h3 className="text-3xl text-orange-500">Our Services</h3>
                        <h2 className='text-5xl'>Our Service Area</h2>
                        
                  </div>
                  <div className='lg:grid lg:grid-cols-3'>
                       {
                        services?.map((service)=><SercieCard key={service._id} service={service}></SercieCard>)
                       }
                  </div>
            </div>
      );
};

export default Services;