import React from "react";

const FriendDetailesSkeleton = () => {
  return (
    <section className="py-10 bg-base-200 w-full min-h-screen px-4">
      <div className="container max-w-6xl mx-auto flex justify-between gap-6 flex-col md:flex-row">

        {/* LEFT SIDE */}
        <div className="w-88 space-y-4">

          {/* Friend Card Skeleton */}
          <div className="card bg-base-100 shadow p-4 space-y-4">
            <div className="flex items-center gap-4">
              <div className="skeleton w-16 h-16 rounded-full"></div>
              <div className="space-y-2 flex-1">
                <div className="skeleton h-4 w-3/4"></div>
                <div className="skeleton h-3 w-1/2"></div>
              </div>
            </div>

            <div className="skeleton h-20 w-full rounded-md"></div>
          </div>

          {/* Buttons Skeleton */}
          <div className="space-y-3">
            <div className="skeleton h-12 w-full rounded-md"></div>
            <div className="skeleton h-12 w-full rounded-md"></div>
            <div className="skeleton h-12 w-full rounded-md"></div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 space-y-4">

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-base-100 shadow rounded-md p-6 space-y-3"
              >
                <div className="skeleton h-10 w-20 mx-auto"></div>
                <div className="skeleton h-4 w-28 mx-auto"></div>
              </div>
            ))}
          </div>

          {/* Goal */}
          <div className="bg-base-100 shadow rounded-md p-6 flex justify-between items-center">
            <div className="space-y-3 w-full">
              <div className="skeleton h-5 w-1/3"></div>
              <div className="skeleton h-4 w-1/2"></div>
            </div>
            <div className="skeleton h-10 w-20"></div>
          </div>

          {/* Actions */}
          <div className="bg-base-100 shadow rounded-md p-6 space-y-4">
            <div className="skeleton h-5 w-1/3"></div>

            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="skeleton h-24 w-full rounded-md"
                ></div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FriendDetailesSkeleton;