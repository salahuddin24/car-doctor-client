import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Checkout = () => {
  const service = useLoaderData();
  const {title, _id, price, img} = service;
  const {user} = useContext(AuthContext);


  const handleBookService = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const price = form.price.value;
   
      
    

  }
  return (
    <div>
    <h2 className="text-3xl md:text-5xl font-bold text-center">Book Service : {title} </h2>

    <form onSubmit={handleBookService} className="card-body">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-6">
    <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" name="name" placeholder="Name"  defaultValue={user?.displayName
} className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Date</span>
        </label>
        <input type="date" name="date"  className="input input-bordered" required />
        
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" defaultValue={user?.email} name="email"  placeholder="email" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Dua Amount</span>
        </label>
        <input type="text" defaultValue={'$' + price} name="price"  className="input input-bordered" required />
        
      </div>
      <div className="form-control mt-6 md:col-span-2">
        <input className="btn btn-primary text-xl font-bold btn-block" type="submit" value="Order Conform" />
      </div>
    </div>
    </form>
    
  </div>
  );
};

export default Checkout;