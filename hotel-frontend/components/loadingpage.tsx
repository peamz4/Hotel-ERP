"use client";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-full bg-transparent">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-t-4 border-gray-500 border-solid animate-bounce rounded-full  mx-auto mb-4"></div>
        <div className="flex gap-4 "> 
        <p className="text-4xl text-gray-700 animate-spin ">L</p>
        <p className="text-4xl text-gray-700 animate-spin ">O</p>
        <p className="text-4xl text-gray-700 animate-spin ">A</p>
        <p className="text-4xl text-gray-700 animate-spin ">D</p>
        <p className="text-4xl text-gray-700 animate-spin ">I</p>
        <p className="text-4xl text-gray-700 animate-spin ">N</p>
        <p className="text-4xl text-gray-700 animate-spin ">G</p>
        <p className="text-4xl text-gray-700 animate-spin ">.</p>
        <p className="text-4xl text-gray-700 animate-spin ">.</p>
        <p className="text-4xl text-gray-700 animate-spin ">.</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
