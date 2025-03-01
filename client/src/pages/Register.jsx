const Register = () => {
  return (
    <div
      className="h-3/4 w-full p-1 flex justify-center items-center"
    >
      <div
        className="h-5/6 w-3/5 border border-blue-600 rounded-md  shadow-md bg-white"
      >
        <h2 className="text-md flex justify-center items-center mt-5">
          Register
        </h2>
        <div className="mt-0 mx-3 flex flex-col p-2">
          <label
            htmlFor="use-name"
            className="ml-4 text-black-300 font-semi-bold text-xs"
          >
            User name
          </label>
          <input
            type="text"
            id="name"
            className="bg-transparent border border-black-300 mr-6"
          />
        </div>
        <div className=" mx-3 flex flex-col p-2">
          <label
            htmlFor="Email"
            className="ml-4 text-black-300 font-semi-bold bg-transparent text-xs"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-transparent border border-black-300 mr-6"
          />
        </div>
        bg-transparent
        <div className="my-0 ml-3 flex flex-col px-2">
          <label
            htmlFor="password"
            className="ml-3 text-black-300 font-semi-bold text-xs"
          >
            Password(6+characters)
          </label>
          <input
            type="email"
            id="email"
            className="bg-transparent border border-black-300 mr-8"
          />
        </div>
        <div className="mt-0 ml-3 flex flex-col p-2 ">
          <label
            htmlFor="password"
            className="ml-3 text-black-300 font-semi-bold text-xs"
          >
            Confirm Password
          </label>
          <input
            type="email"
            id="email"
            className="bg-transparent border border-black-300 mr-8"
          />
        </div>
        <h1 className="flex ml-5 items-center text-xs">Forgot password ?</h1>
        <div className="h-10 w-5/6 bg-blue-600 mt-2 flex justify-center items-center ml-6 bg-transparent rounded-md ">
          <button className="text-white text-xs bg-transparent ">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
