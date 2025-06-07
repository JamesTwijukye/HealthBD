import React from 'react'
import{Link}from 'react-router-dom'

const ResetPassword = () => {
  return (
    <div className="min-h-screen flex  flex-col justify-center items-center bg-gray-20">

      <div className="w-1/2 border border-blue-600 font-bold rounded-md shadow-md bg-white p-6">
        <form action="">
        <h2 className="text-center font-bold text-4xl text-blue-600  mb-6">HealthBD</h2>

          <h2 className="text-md text-black text-center mt-5">Reset Password</h2>

          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-black font-semibold text-md"
            >
            

              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-100 bg-transparent border-2 rounded p-1"
            />
          </div>

          <div className="w-full bg-blue-600 mt-4 flex justify-center items-center rounded-md">
            <button className="py-2 text-white text-md w-full">Set password</button>
          </div>
        </form>
        <div className="text-black flex flex-row text-lg ml-4 text-center ">

          <p >
        <span className='italic text-md'>Back to</span>  
          <Link to="/Signin" className=" text-black ml-2 hover:text-yellow-500 focus:text-yellow-500 active:text-yellow-500 font-bold">
              Login
            </Link>  </p>
      </div>

      </div>
    </div>
  )
}

export default ResetPassword;