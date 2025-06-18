import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-2xl">
      <h1 className="text-4xl text-red-500">404 Not Found</h1>
      <Link to="/" className="text-gray-600 mt-4">
        Go Back
      </Link>
    </div>
  );
};

export default NotFoundPage;
