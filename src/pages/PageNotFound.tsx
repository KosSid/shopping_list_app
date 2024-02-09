const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">404 Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-600">We're sorry, the page you are looking for does not exist.</p>
      <a href="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors">
        Go Home
      </a>
    </div>
  );
};

export default PageNotFound;
