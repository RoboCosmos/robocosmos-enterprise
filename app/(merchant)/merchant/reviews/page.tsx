import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ThumbsUp, MessageSquare } from "lucide-react"

export default function MerchantReviews() {
  const reviews = [
    {
      id: 1,
      customer: "Max Müller",
      robot: "ABB IRB 6700",
      rating: 5,
      date: "15.01.2025",
      comment: "Hervorragender Service und schnelle Lieferung. Der Roboter funktioniert einwandfrei.",
      helpful: 12,
    },
    {
      id: 2,
      customer: "Anna Schmidt",
      robot: "KUKA KR QUANTEC",
      rating: 4,
      date: "10.01.2025",
      comment: "Gute Qualität, aber die Einrichtung war etwas kompliziert. Support war hilfreich.",
      helpful: 8,
    },
    {
      id: 3,
      customer: "Thomas Weber",
      robot: "Fanuc M-20iA",
      rating: 5,
      date: "05.01.2025",
      comment: "Perfekt für unsere Produktionslinie. Sehr zuverlässig und präzise.",
      helpful: 15,
    },
  ]

  const avgRating = 4.7
  const totalReviews = 127

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Page Header with semantic tokens */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Bewertungen</h1>
        <p className="text-sm md:text-base text-muted-foreground mt-1">Kundenfeedback zu Ihren Produkten</p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Durchschnittliche Bewertung</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-foreground">{avgRating}</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{totalReviews} Bewertungen</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Positive Bewertungen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">94%</div>
            <p className="mt-2 text-sm text-muted-foreground">4-5 Sterne Bewertungen</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Antwortrate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">98%</div>
            <p className="mt-2 text-sm text-muted-foreground">Innerhalb von 24h</p>
          </CardContent>
        </Card>
      </div>

      {/* Reviews List */}
      <Card>
        <CardHeader>
          <CardTitle>Aktuelle Bewertungen</CardTitle>
          <CardDescription>Kundenfeedback zu Ihren Produkten</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-border pb-6 last:border-0 last:pb-0">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">{review.customer}</span>
                    <Badge variant="outline" className="text-xs">
                      Verifizierter Kauf
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{review.robot}</p>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? "fill-yellow-500 text-yellow-500" : "text-zinc-600"}`}
                    />
                  ))}
                </div>
              </div>
              <p className="mt-3 text-sm text-foreground">{review.comment}</p>
              <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                <span>{review.date}</span>
                <button className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{review.helpful} hilfreich</span>
                </button>
                <button className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                  <MessageSquare className="h-4 w-4" />
                  <span>Antworten</span>
                </button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
