import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Package, User, Building2, MessageSquare, Send } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BookingDetailPage({ params }: { params: { id: string } }) {
  // Placeholder data - in production, fetch based on params.id
  const booking = {
    id: params.id,
    status: "confirmed",
    booking_type: "rental",
    total_price: "€15.000",
    created_at: "15.01.2025",
    rental_start_date: "01.02.2025",
    rental_end_date: "28.02.2025",
    robot: {
      id: "1",
      model_name: "KUKA KR 210 R3100",
      manufacturer: "KUKA",
      image: "/kuka-robot.jpg",
    },
    customer: {
      first_name: "Thomas",
      last_name: "Müller",
      company_name: "AutoTech GmbH",
      avatar: "",
    },
    merchant: {
      first_name: "Sarah",
      last_name: "Schmidt",
      company_name: "RoboTech Solutions",
      avatar: "",
    },
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-600 hover:bg-green-700">Bestätigt</Badge>
      case "requested":
        return <Badge className="bg-yellow-600 hover:bg-yellow-700">Angefragt</Badge>
      case "completed":
        return <Badge className="bg-gray-600 hover:bg-gray-700">Abgeschlossen</Badge>
      case "cancelled":
        return <Badge className="bg-red-600 hover:bg-red-700">Storniert</Badge>
      default:
        return <Badge className="bg-blue-600 hover:bg-blue-700">{status}</Badge>
    }
  }

  return (
    <div className="space-y-8">
      {/* Page Title & Status */}
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-100">Buchungsdetails ID: #{booking.id}</h1>
        {getStatusBadge(booking.status)}
      </div>

      {/* Core Booking Information Card */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-100 flex items-center gap-2">
            <Package className="h-5 w-5 text-blue-600" />
            Buchungsinformationen
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm text-gray-400">Status</p>
              <p className="text-gray-100 font-medium">
                {booking.status === "confirmed"
                  ? "Bestätigt"
                  : booking.status === "requested"
                    ? "Angefragt"
                    : booking.status === "completed"
                      ? "Abgeschlossen"
                      : "Unbekannt"}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Typ</p>
              <p className="text-gray-100 font-medium">{booking.booking_type === "rental" ? "Miete" : "Kauf"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Gesamtpreis</p>
              <p className="text-gray-100 font-medium text-lg">{booking.total_price}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Erstellt am</p>
              <p className="text-gray-100 font-medium">{booking.created_at}</p>
            </div>
            {booking.booking_type === "rental" && (
              <>
                <div>
                  <p className="text-sm text-gray-400">Mietbeginn</p>
                  <p className="text-gray-100 font-medium flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    {booking.rental_start_date}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Mietende</p>
                  <p className="text-gray-100 font-medium flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    {booking.rental_end_date}
                  </p>
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Robot Details Card */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-100 flex items-center gap-2">
            <Package className="h-5 w-5 text-blue-600" />
            Gebuchter Roboter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-6">
            <div className="relative h-32 w-32 rounded-lg overflow-hidden bg-gray-800">
              <Image
                src={booking.robot.image || "/placeholder.svg"}
                alt={booking.robot.model_name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 space-y-2">
              <Link
                href={`/robots/${booking.robot.id}`}
                className="text-xl font-semibold text-blue-600 hover:text-blue-500 transition-colors"
              >
                {booking.robot.model_name}
              </Link>
              <p className="text-gray-400">
                Hersteller: <span className="text-gray-100">{booking.robot.manufacturer}</span>
              </p>
              <Button variant="outline" size="sm" asChild className="mt-2 bg-transparent">
                <Link href={`/robots/${booking.robot.id}`}>Roboter-Details ansehen</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Involved Parties Card */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-100 flex items-center gap-2">
            <User className="h-5 w-5 text-blue-600" />
            Beteiligte Parteien
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Customer */}
          <div>
            <p className="text-sm text-gray-400 mb-3">Kunde</p>
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={booking.customer.avatar || "/placeholder.svg"} />
                <AvatarFallback className="bg-blue-600 text-white">
                  {booking.customer.first_name[0]}
                  {booking.customer.last_name[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-gray-100 font-medium">
                  {booking.customer.first_name} {booking.customer.last_name}
                </p>
                <p className="text-sm text-gray-400 flex items-center gap-1">
                  <Building2 className="h-3 w-3" />
                  {booking.customer.company_name}
                </p>
              </div>
            </div>
          </div>

          <Separator className="bg-gray-800" />

          {/* Merchant */}
          <div>
            <p className="text-sm text-gray-400 mb-3">Händler</p>
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={booking.merchant.avatar || "/placeholder.svg"} />
                <AvatarFallback className="bg-blue-600 text-white">
                  {booking.merchant.first_name[0]}
                  {booking.merchant.last_name[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-gray-100 font-medium">
                  {booking.merchant.first_name} {booking.merchant.last_name}
                </p>
                <p className="text-sm text-gray-400 flex items-center gap-1">
                  <Building2 className="h-3 w-3" />
                  {booking.merchant.company_name}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Communication Section */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-100 flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-blue-600" />
            Kommunikation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-400 text-sm">Hier wird der Chatverlauf zu dieser Buchung angezeigt.</p>
          <div className="space-y-3">
            <Textarea
              placeholder="Nachricht eingeben..."
              className="bg-gray-800 border-gray-700 text-gray-100 placeholder:text-gray-500"
              rows={3}
            />
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Send className="h-4 w-4 mr-2" />
              Nachricht senden
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Actions Card - Customer View */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-100">Aktionen</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          {booking.status === "completed" && (
            <Button className="bg-blue-600 hover:bg-blue-700">Bewertung abgeben</Button>
          )}
          {booking.status === "confirmed" && <Button variant="destructive">Buchung stornieren</Button>}
          <Button variant="outline">Rechnung herunterladen</Button>
        </CardContent>
      </Card>
    </div>
  )
}
