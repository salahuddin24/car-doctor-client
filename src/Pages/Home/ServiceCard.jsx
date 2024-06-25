import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {
  const {_id, title, img , price} = service;
  
  return (
      <div className="card card-compact w-96 bg-base-100 shadow-xl mt-8">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">{title}</h2>
    <h3 className="text-xl font-bold text-orange-600"> Price : {price}</h3>
    
    <div className="card-actions ">
     <Link to={`checkout/${_id}`}>
     <button className="btn btn-primary">Book Now</button>
     </Link>
    </div>
  </div>
</div>
  
  );
};

export default ServiceCard;