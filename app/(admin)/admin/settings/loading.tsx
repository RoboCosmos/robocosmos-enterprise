export default function AdminSettingsLoading() {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent mb-4"></div>
        <p className="text-muted-foreground">Laden...</p>
      </div>
    </div>
  )
}
