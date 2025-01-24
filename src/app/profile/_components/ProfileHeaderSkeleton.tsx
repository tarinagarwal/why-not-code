function ProfileHeaderSkeleton() {
  return (
    <div
      className="relative mb-8 bg-white/5 rounded-2xl p-8 border
       border-white/10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />
      <div className="relative flex items-center gap-8">
        {/* Avatar Skeleton */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-600/20 rounded-full blur-xl" />
          <div className="w-24 h-24 rounded-full bg-gray-800/80 animate-pulse relative z-10 border-4 border-gray-800/50" />
        </div>

        {/* User Info Skeleton */}
        <div className="space-y-3">
          <div className="h-8 w-48 bg-gray-800/80 rounded animate-pulse" />
          <div className="h-5 w-32 bg-gray-800/80 rounded animate-pulse" />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="group relative p-4 rounded-xl bg-gray-800/20 border border-gray-800/50 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br opacity-5" />
            <div className="relative space-y-4">
              {/* Stat Header */}
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="h-4 w-24 bg-gray-800/80 rounded animate-pulse" />
                  <div className="h-8 w-16 bg-gray-800/80 rounded animate-pulse" />
                  <div className="h-4 w-32 bg-gray-800/80 rounded animate-pulse" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-gray-800/80 animate-pulse" />
              </div>

              {/* Stat Footer */}
              <div className="pt-4 border-t border-gray-800/50 flex items-center gap-2">
                <div className="h-4 w-4 bg-gray-800/80 rounded animate-pulse" />
                <div className="h-4 w-20 bg-gray-800/80 rounded animate-pulse" />
                <div className="h-4 w-16 bg-gray-800/80 rounded animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileHeaderSkeleton;
