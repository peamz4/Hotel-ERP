"use client";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-t-4 border-gray-500 border-solid rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-xl text-gray-700 animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
