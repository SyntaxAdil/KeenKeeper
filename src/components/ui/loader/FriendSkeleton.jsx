import React from "react";

const FriendsCardSkeleton = () => {
  return (
    <div className="p-8 rounded-md shadow flex items-center flex-col border border-white text-center animate-pulse">
      <div className="skeleton w-20 h-20 rounded-full mb-4"></div>

      <div className="skeleton h-4 w-32 mb-2"></div>
      <div className="skeleton h-3 w-16 mb-3"></div>

      <div className="flex gap-2 mb-3">
        <div className="skeleton h-5 w-14 rounded-full"></div>
        <div className="skeleton h-5 w-14 rounded-full"></div>
      </div>

      <div className="skeleton h-5 w-20 rounded-full"></div>
    </div>
  );
};

const SkeletonGrid = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Your Friends</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <FriendsCardSkeleton key={i} />
        ))}
      </div>
    </>
  );
};

export default SkeletonGrid;
