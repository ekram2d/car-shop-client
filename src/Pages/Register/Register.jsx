import React, { useContext, useState } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../../Providers/AuthProvider';
const Register = () => {
      const [error, setError] = useState();
      const {registerWithEmailPassword}=useContext(AuthContext);
      // console.log(loginWithEmailPassword);
      const handleRegister = (event) => {
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            console.log(name, email, password);
            setError("");
            registerWithEmailPassword(email, password)
                  .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        // ...
                        console.log(user);
                  })
                  .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setError(errorMessage);
                        // ..
                  });


      }
      return (
            <div className="hero min-h-screen bg-base-200">

                  <div className="hero-content flex-col lg:flex-row">

                        <div className="w-1/2 ">


                              <img src={img}></img>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                              <div className="card-body">
                                    <h1 className="text-3xl font-bold text-center ">Sign Up</h1>
                                    <form onSubmit={handleRegister} >
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Name</span>
                                                </label>
                                                <input type="text" name='name' placeholder="name" className="input  input-bordered" />
                                          </div>


                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Email</span>
                                                </label>
                                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Password</span>
                                                </label>
                                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                                <label className="label">
                                                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                                </label>
                                          </div>
                                          <div className="form-control mt-6">

                                                <input type='submit' className='btn btn-primary' value="Register"></input>
                                          </div>

                                    </form>
                                    <p className='text-center p-2'>Have an account? <Link to="/login" className='text-red-500'> Login</Link></p>

                            

                              </div>
                              <p className='text-center text-red-600 '>{error && error}</p>
                        </div>
                  </div>
            </div>
      );
};

export default Register;