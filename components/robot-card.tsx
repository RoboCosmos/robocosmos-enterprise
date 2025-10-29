import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Move3d, BatteryCharging, Gauge } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export interface Robot {
  id: number | string
  manufacturer: string
  model: string
  category: string
  status: "available" | "on-request" | "rented" | "sold"
  image?: string
  payload?: string
  batteryLife?: string
  tco?: string
  rentalPrice?: string
  purchasePrice?: string
  priceType?: "rental" | "purchase"
}

interface RobotCardProps {
  robot: Robot
  href?: string
}

export function RobotCard({ robot, href }: RobotCardProps) {
  const statusConfig = {
    available: { label: "Verfügbar", className: "bg-primary hover:bg-primary" },
    "on-request": { label: "Auf Anfrage", className: "bg-yellow-600 hover:bg-yellow-600" },
    rented: { label: "Vermietet", className: "bg-muted hover:bg-muted" },
    sold: { label: "Verkauft", className: "bg-muted hover:bg-muted" },
  }

  const status = statusConfig[robot.status]

  return (
    <Link
      href={href || `/robots/${robot.id}`}
      className="block hover:no-underline transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-lg"
    >
      <Card className="overflow-hidden border-border bg-card text-foreground h-full flex flex-col hover:border-primary/50 hover:shadow-xl transition-all">
        {/* Image Section with Status Badge */}
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          <Image
            src={robot.image || "/placeholder.svg?height=400&width=600"}
            alt={`${robot.manufacturer} ${robot.model}`}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
          {/* Status Badge - Absolute positioned in top-right */}
          <Badge className={`absolute right-3 top-3 ${status.className} text-primary-foreground`}>{status.label}</Badge>
        </div>

        <CardContent className="p-5 flex-grow flex flex-col justify-between">
          <div>
            {/* Core Info */}
            <div className="mb-4 space-y-2">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Hersteller: {robot.manufacturer}
              </p>
              <h3 className="text-xl font-bold text-foreground">{robot.model}</h3>
              <Badge variant="secondary" className="bg-muted text-muted-foreground">
                {robot.category}
              </Badge>
            </div>

            {/* Key B2B Specs */}
            <div className="space-y-2 border-t border-border pt-4">
              {robot.payload && (
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Move3d className="h-4 w-4 text-primary" />
                  <span>Nutzlast: {robot.payload}</span>
                </div>
              )}
              {robot.batteryLife && (
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <BatteryCharging className="h-4 w-4 text-primary" />
                  <span>Akku: {robot.batteryLife}</span>
                </div>
              )}
              {robot.tco && (
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Gauge className="h-4 w-4 text-primary" />
                  <span>TCO: {robot.tco}</span>
                </div>
              )}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="border-t border-border pt-4 mt-4">
            {robot.priceType === "rental" && robot.rentalPrice ? (
              <div>
                <p className="text-sm text-muted-foreground">Miete ab</p>
                <p className="text-2xl font-bold text-primary">{robot.rentalPrice}</p>
                <p className="text-xs text-muted-foreground">pro Tag</p>
              </div>
            ) : robot.priceType === "purchase" && robot.purchasePrice ? (
              <div>
                <p className="text-sm text-muted-foreground">Kaufpreis</p>
                <p className="text-2xl font-bold text-primary">{robot.purchasePrice}</p>
              </div>
            ) : (
              <div>
                <p className="text-sm text-muted-foreground">Preis auf Anfrage</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
