export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-700 border-t-blue-600" />
        <p className="text-sm text-gray-400">Laden...</p>
      </div>
    </div>
  )
}
