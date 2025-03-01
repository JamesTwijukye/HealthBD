import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="h-screen w-full p-1 flex justify-center items-center bg-gray-200">
      <form
        className="border shadow-md rounded-lg p-6 bg-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Title */}

        <div className="flex justify-center items-center">
          <h1 className="text-4xl text-blue-600 font-bold pb-5">HealthBD</h1>
        </div>
        {/* Field area for email */}

        <div className="flex flex-col">
          <label
            htmlFor="Email"
            className="text-black-300 font-semi-bold text-md py-2"
          >
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
            })}
            className="border rounded-sm p-2"
          />
        </div>
        {<span className="text-red-500 text-xs">{errors.email?.message}</span>}
        {/* Field area for password */}
        <div className="flex flex-col ">
          <label
            htmlFor="Password"
            className="text-black-300 font-semi-bold text-md py-2"
          >
            Password
          </label>
          <div className="w-full border-2 flex items-center">
            <input
              type={showPassword ? "text" : "password"}
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
        {/* Terms and conditions */}
        <div className="flex flex-col text-xs mt-6">
          <p>
            By clicking Agree & Join or continue,you agree to the HealthBD User
            Agreement,
            <br />
            Privacy Policy and Cookie Policy
          </p>
        </div>
        {/* Submit button */}
        <button className="h-10 w-full text-white text-xs bg-blue-600 mt-6 flex justify-center items-center rounded-md">
          Agree & Join
        </button>

        <hr />
        {/* Lower form section */}
        <div className="flex flex-row justify-center items-center my-3">
          <hr />
          <span className="text-sm font-bold">or</span> <hr />
        </div>
        <div className="flex justify-center items-center mt-2">
          <h1 className="text-sm font-bold">
            Dont have an account on HealthBD ?
            <Link to="/signup" className="text-xs text-blue-600 font-bold">
              Sign up
            </Link>
          </h1>
        </div>
      </form>
    </div>
  );
};

export default Signin;
