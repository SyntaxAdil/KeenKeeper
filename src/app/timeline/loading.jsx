export default function Loading() {
  return (
    <section className="my-10 max-w-6xl mx-auto px-4">
      
      {/* Title */}
      <div className="skeleton h-10 w-48 mb-6"></div>

      {/* Filter */}
      <div className="skeleton h-12 w-52 mb-6"></div>

      {/* Timeline List */}
      <div className="space-y-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="w-full p-4 rounded-md border border-gray-200 bg-white flex items-center gap-4"
          >
            {/* icon */}
            <div className="skeleton w-10 h-10 rounded-full"></div>

            {/* text */}
            <div className="flex-1 space-y-2">
              <div className="skeleton h-4 w-2/3"></div>
              <div className="skeleton h-3 w-1/3"></div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}