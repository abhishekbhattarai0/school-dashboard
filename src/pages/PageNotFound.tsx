import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-2xl mt-2">Page Not Found</p>
      <p className="text-gray-500 mt-1">The page you're looking for doesn't exist.</p>
      <Link to="/" className="mt-6 text-blue-500 underline">
        Go back to Home
      </Link>
    </div>
  );
}
