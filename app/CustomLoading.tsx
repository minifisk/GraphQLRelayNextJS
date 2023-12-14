import React from 'react';

const CustomLoading: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      <p className="text-gray-700 text-xl mt-4">Loading...</p>
    </div>
  );
};

export default CustomLoading;
