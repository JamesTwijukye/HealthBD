import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/auth/resetPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Check your email for the reset link!");
      } else {
        alert(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send reset email");
    }
  };

  return (
    <div className="h-screen w-full p-1 flex justify-center items-center bg-gray-200">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/4 border border-blue-600 shadow-md rounded-lg p-6 bg-white"
      >
        <h2 className="text-center font-bold text-4xl text-blue-600 mb-6">
          HealthBD
        </h2>

        <h2 className="text-md text-black text-center mt-5">Reset Password</h2>

        <div className="flex flex-col mt-4">
          <label htmlFor="email" className="text-black font-semibold text-md">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
            className="w-full bg-transparent border-2 rounded p-1"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div className="w-full bg-blue-600 mt-4 flex justify-center items-center rounded-md">
          <button type="submit" className="py-2 text-white text-md w-full">
            Set Password
          </button>
        </div>

        <div className="text-black flex flex-row justify-center text-lg ml-4 text-center mt-4">
          <p>
            <span className="italic text-md">Back to</span>
            <Link
              to="/Signin"
              className="text-black ml-2 hover:text-yellow-500 font-bold"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
