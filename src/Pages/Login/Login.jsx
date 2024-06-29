import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../../public/assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';

const Login = () => {
const {loginUser} = useContext(AuthContext);
const location = useLocation();
const navigate = useNavigate();


  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email, password)
    .then(result =>{
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const user = {email};
      

      axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
      .then(res =>{
        console.log(res.data);
        if(res.data.success){
          navigate(location?.state ? location.state : '/');
        }
      })
    })
    .catch(error => console.log(error))
  }
  
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row w-full
  ">
    <div className=" lg:w-1/2 mr-10 p-6 pl-6 ">
      
     <img src={img} alt="" />
    </div>
    <div className="card shrink-0 w-full lg:w-1/2  shadow-2xl bg-base-100">
      <h2 className="text-4xl font-bold text-center mt-4">Login </h2>
      <form onSubmit={handleLogin} className="card-body">
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
       
        <div className="form-control mt-6">
          <input type="submit" value="Sign In"  className="btn text-xl font-bold btn-primary"/>
        </div>
      </form>

      <p className="text-center">New to Car Doctors <Link to='/register' className="text-orange-500 font-bold ">Sign Up </Link></p>
    </div>
  </div>
</div>
    </div>
  );
};

export default Login;