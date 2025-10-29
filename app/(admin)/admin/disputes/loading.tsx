export default function DisputesLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-700 border-t-blue-600" />
        <p className="text-gray-400">Laden...</p>
      </div>
    </div>
  )
}
