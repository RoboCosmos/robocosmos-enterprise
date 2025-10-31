export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-2">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-border border-t-primary" />
        <p className="text-sm text-muted-foreground">Laden...</p>
      </div>
    </div>
  )
}
