export default function TransactionsLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <div className="text-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto" />
        <p className="text-gray-400">Laden...</p>
      </div>
    </div>
  )
}
