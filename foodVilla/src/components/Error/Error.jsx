import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
        <h2 className="text-2xl font-semibold mb-4">Something Went Wrong!</h2>
        <p className="text-lg mb-4">
          {err.status} : {err.statusText}
        </p>
        <p className="text-gray-600">
          Don't worry, our team is on it. Please try again later.
        </p>
        <Link to="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-6">
            Go To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
