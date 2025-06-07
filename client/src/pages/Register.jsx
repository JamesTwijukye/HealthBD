/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { Link } from 'react-router-dom';


const Register = () => {
  return (
    <div className="min-h-screen justify-center flex flex-col items-center bg-gray-5">

      <div className="w-1/2 border border-blue-600 rounded-md shadow-md bg-white p-6">
        <form action="">
        <h2 className="text-center font-bold text-4xl text-blue-600  mb-6">HealthBD</h2>

          <h2 className="text-xl text-center font-bold text-black mt-5">Register</h2>

          <div className="mt-3 flex flex-col">
            <label
              htmlFor="name"
              className="ml-2 text-black  font-semibold text-md"
            >
              User name
            </label>
            <input
              type="text"
              id="name"
              className="bg-transparent  border-2  rounded p-1"
            />
          </div>

          <div className="mt-3 flex flex-col">
            <label
              htmlFor="email"
              className="ml-2  text-black  font-semibold text-md"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-transparent border-2  rounded p-1"
            />
          </div>

          <div className="mt-3 flex flex-col">
            <label
              htmlFor="password"
              className="ml-2 text-black  font-semibold text-md"
            >
              Password (6+ characters)
            </label>
            <input
              type="password"
              id="password"
              className="bg-transparent border-2   rounded p-1"
            />
          </div>

          <div className="mt-3  flex flex-col">
            <label
              htmlFor="confirmPassword"
              className="ml-2 text-black font-semibold text-md"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="bg-transparent  border-2  rounded p-1"
            />
          </div>
      
          <div className="py-3  bg-blue-600 mt-4 flex justify-center items-center mx-auto rounded-md">
            <button className="text-white text-md font-bold">Register</button>
          </div>

        <div className="text-black flex justify-center  text-lg mt-2 items-center">

          <p >
        <span className='italic text-md '>Back to</span>  
          <Link to="/Signin" className=" ml-2  hover:text-yellow-500 focus:text-yellow-500 active:text-yellow-500 font-bold">
              Login
            </Link>  </p>
      </div>

        </form>
      </div>
    </div>
  );
};


export default Register;