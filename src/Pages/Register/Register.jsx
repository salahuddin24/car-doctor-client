import { Link } from 'react-router-dom';
import img from '../../../public/assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';


const Register = () => {

  const {createUser} = useContext(AuthContext);



  const handleSignup = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // const conformPassword = form.conformPass.value;
    // console.log(email, password, conformPassword);
    createUser(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
    .then(error => console.log(error))
  }
  return (
    <div>
    <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row w-full">
  <div className=" lg:w-1/2 mr-10 p-6 pl-6 ">
    
   <img src={img} alt="" />
  </div>
  <div className="card shrink-0 w-full lg:w-1/2  shadow-2xl bg-base-100">
    <h2 className="text-4xl font-bold text-center mt-4">Sign Up  </h2>
    <form onSubmit={handleSignup} className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" 
        name="email"
        placeholder="email" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type="password" placeholder="password" 
        name="password"
        className="input input-bordered" required />
        
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Conform  Password</span>
        </label>
        <input type="password" placeholder="conform password" 
        name="conformPass"
        className="input input-bordered" required />
        
      </div>
      <div className="form-control mt-6">
        <input type="submit" value="Sign Up"  className="btn text-xl font-bold btn-primary"/>
      </div>
    </form>

    <p className="text-center">Already have an account? Please  <Link to='/login' className="text-orange-500 font-bold">Sign In </Link></p>
  </div>
</div>
</div>
  </div>
  );
};

export default Register;