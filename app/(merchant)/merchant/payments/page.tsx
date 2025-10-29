import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Euro, TrendingUp, Download, Calendar } from "lucide-react"

export default function MerchantPayments() {
  const transactions = [
    {
      id: "TXN-2025-001",
      customer: "Max Müller",
      robot: "ABB IRB 6700",
      amount: 2500,
      status: "completed",
      date: "15.01.2025",
      type: "rental",
    },
    {
      id: "TXN-2025-002",
      customer: "Anna Schmidt",
      robot: "KUKA KR QUANTEC",
      amount: 85000,
      status: "completed",
      date: "12.01.2025",
      type: "purchase",
    },
    {
      id: "TXN-2025-003",
      customer: "Thomas Weber",
      robot: "Fanuc M-20iA",
      amount: 1800,
      status: "pending",
      date: "10.01.2025",
      type: "rental",
    },
  ]

  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Zahlungen</h1>
        <p className="text-sm md:text-base text-muted-foreground mt-1">Ihre Transaktionen und Umsätze</p>
      </div>

      <div className="grid gap-4 md:gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Gesamtumsatz</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Euro className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold text-foreground">89.300 €</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Diesen Monat</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Ausstehend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-yellow-400" />
              <span className="text-2xl font-bold text-foreground">1.800 €</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">1 Transaktion</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Wachstum</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-400" />
              <span className="text-2xl font-bold text-foreground">+24%</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">vs. letzter Monat</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Transaktionen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">47</div>
            <p className="mt-2 text-sm text-muted-foreground">Diesen Monat</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Transaktionen</CardTitle>
              <CardDescription>Ihre Zahlungshistorie</CardDescription>
            </div>
            <Button variant="outline" className="border-border hover:bg-accent bg-transparent">
              <Download className="h-4 w-4 mr-2" />
              Exportieren
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Transaktions-ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Kunde</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Roboter</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Typ</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Betrag</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Datum</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn) => (
                  <tr key={txn.id} className="border-b border-border hover:bg-accent">
                    <td className="py-3 px-4 text-sm text-foreground font-mono">{txn.id}</td>
                    <td className="py-3 px-4 text-sm text-foreground">{txn.customer}</td>
                    <td className="py-3 px-4 text-sm text-foreground">{txn.robot}</td>
                    <td className="py-3 px-4">
                      <Badge variant="outline" className="text-xs">
                        {txn.type === "rental" ? "Miete" : "Kauf"}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-sm font-semibold text-foreground">
                      {txn.amount.toLocaleString("de-DE")} €
                    </td>
                    <td className="py-3 px-4">
                      <Badge
                        className={
                          txn.status === "completed"
                            ? "bg-green-600/20 text-green-400 border-green-600/30"
                            : "bg-yellow-600/20 text-yellow-400 border-yellow-600/30"
                        }
                      >
                        {txn.status === "completed" ? "Abgeschlossen" : "Ausstehend"}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{txn.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
