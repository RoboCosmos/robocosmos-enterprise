export default function AdminListingsLoading() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="flex flex-col items-center gap-2">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-border border-t-primary" />
        <p className="text-sm text-muted-foreground">Laden...</p>
      </div>
    </div>
  )
}
