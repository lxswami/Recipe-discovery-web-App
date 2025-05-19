// app/loading.tsx (or app/your-page/loading.tsx)
export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-white">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-lg font-semibold text-gray-700">Loading...</p>
      </div>
    </div>
  )
}
