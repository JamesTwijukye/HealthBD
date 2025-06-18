import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from "sonner";
import { BACKEND_URL } from "../utils/index.jsx";
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };


  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {

    const { confirmPassword, username, email, password } = data;
    if (confirmPassword.localeCompare(password)) {
      toast.error("Passwords donot match");
      return;
    }

    const registerUser = await fetch(`${BACKEND_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      "body": JSON.stringify({ username, email, password })
    })
    const response = await registerUser.json()
    if (response.ok) {
      toast.success(response.message)
      reset()
    } else {
      toast.error(response.message)
    }
  }
  return (
    <div className="h-screen w-full p-1 flex justify-center items-center bg-gray-200">

      <form className="w-1/4 border border-blue-600 shadow-md rounded-lg p-6 bg-white" onSubmit={handleSubmit(onSubmit)}>
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
            {...register("username", {
              required: true,
            })}
          />

          {
            errors.username && <p className="text-red-500">Username is required</p>
          }
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
            {...register("email", {
              required: true,
            })}
          />
          {
            errors.email && <p className="text-red-500">Email is required</p>
          }
        </div>

        <div className="flex flex-col ">
          <label
            htmlFor="Password"
            className="text-black-300 font-semi-bold text-md py-2"
          >
            Password
          </label>
          <div className="w-full border-2 flex items-center">
            <input
              type={showPassword ? "password" : "text"}
              {...register("password", {
                required: "Password is required",
              })}
              className="rounded-sm p-2 w-full"
            />


            {showPassword ? (
              <FaEyeSlash
                className="mx-4 cursor-pointer"
                onClick={() => handleShowPassword()}
              />
            ) : (
              <FaEye
                className="mx-4 cursor-pointer"
                onClick={() => handleShowPassword()}
              />
            )}

          </div>


          {
            <span className="text-red-500 text-xs">
              {errors.password?.message}
            </span>
          }
        </div>

        <div className="flex flex-col ">
          <label
            htmlFor="confirmPassword"
            className="text-black-300 font-semi-bold text-md py-2"
          >
            Confirm Password
          </label>
          <div className="w-full border-2 flex items-center">
            <input
              type={showConfirmPassword ? "password" : "text"}
              {...register("confirmPassword", {
                required: "confirmPassword is required",
              })}
              className="rounded-sm p-2 w-full"
            />



            {showConfirmPassword ? (
              <FaEyeSlash
                className="mx-4 cursor-pointer"
                onClick={() => handleShowConfirmPassword()}
              />
            ) : (
              <FaEye
                className="mx-4 cursor-pointer"
                onClick={() => handleShowConfirmPassword()}
              />
            )}
          </div>


          {
            <span className="text-red-500 text-xs">
              {errors.confirmPassword?.message}
            </span>
          }
        </div>


        <button className="text-white text-md font-bold py-3  bg-blue-600 mt-4 flex justify-center items-center mx-auto rounded-md w-full" type="submit">Register</button>

        <div className="text-black flex justify-center  text-lg mt-2 items-center">
          <p >
            <span className='italic text-md '>Back to</span>
            <Link to="/Signin" className=" ml-2  hover:text-yellow-500 focus:text-yellow-500 active:text-yellow-500 font-bold">
              Login
            </Link>  </p>
        </div>
      </form>
    </div>

  );
};


export default RegisterPage;