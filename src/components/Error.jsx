import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-4 mb-6">Page Not Found</p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
