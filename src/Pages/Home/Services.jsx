import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const services = () => {
  const [Services, setServices] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setServices(data));
  }, [])
  return (
    <div className="mt-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-orange-600 mb-4">Our Services</h1>
        <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            Services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
          }
      </div>
    </div>
  );
};

export default services;