import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from "next/image"

export default function CustomerBookings() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Meine Buchungen</h1>
        <p className="text-sm md:text-base text-muted-foreground mt-1">Verwalten Sie Ihre Roboter-Buchungen</p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="grid gap-4 md:grid-cols-3">
            <Input
              placeholder="Suche nach Roboter oder Händler..."
              className="bg-background border-input text-foreground placeholder:text-muted-foreground"
            />
            <Select defaultValue="all">
              <SelectTrigger className="bg-background border-input text-foreground">
                <SelectValue placeholder="Typ" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle</SelectItem>
                <SelectItem value="rental">Miete</SelectItem>
                <SelectItem value="purchase">Kauf</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="bg-background border-input text-foreground">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle</SelectItem>
                <SelectItem value="requested">Angefragt</SelectItem>
                <SelectItem value="confirmed">Bestätigt</SelectItem>
                <SelectItem value="active">Aktiv</SelectItem>
                <SelectItem value="completed">Abgeschlossen</SelectItem>
                <SelectItem value="cancelled">Storniert</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-accent">
                <TableHead className="text-muted-foreground">Roboter</TableHead>
                <TableHead className="text-muted-foreground">Typ</TableHead>
                <TableHead className="text-muted-foreground">Händler</TableHead>
                <TableHead className="text-muted-foreground">Preis</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
                <TableHead className="text-muted-foreground text-right">Aktionen</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Row 1 - Rental */}
              <TableRow className="border-border hover:bg-accent">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center overflow-hidden">
                      <Image
                        src="/industrial-robot-arm.jpg"
                        alt="Atlas V2"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <span className="font-medium text-foreground">Atlas V2</span>
                  </div>
                </TableCell>
                <TableCell className="text-foreground">Miete (6 Monate)</TableCell>
                <TableCell className="text-foreground">RoboTrade GmbH</TableCell>
                <TableCell className="text-foreground font-medium">€45.000</TableCell>
                <TableCell>
                  <Badge className="bg-green-600 hover:bg-green-700 text-white">Aktiv</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border text-foreground hover:bg-accent bg-transparent"
                    >
                      Details
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border text-foreground hover:bg-accent bg-transparent"
                    >
                      Nachricht senden
                    </Button>
                  </div>
                </TableCell>
              </TableRow>

              {/* Row 2 - Purchase */}
              <TableRow className="border-border hover:bg-accent">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center overflow-hidden">
                      <Image src="/kuka-robot.jpg" alt="Kuka KR 210" width={40} height={40} className="object-cover" />
                    </div>
                    <span className="font-medium text-foreground">Kuka KR 210</span>
                  </div>
                </TableCell>
                <TableCell className="text-foreground">Kauf</TableCell>
                <TableCell className="text-foreground">Händler Müller</TableCell>
                <TableCell className="text-foreground font-medium">€110.000</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="bg-muted text-muted-foreground">
                    Abgeschlossen
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border text-foreground hover:bg-accent bg-transparent"
                    >
                      Details
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border text-foreground hover:bg-accent bg-transparent"
                    >
                      Bewertung abgeben
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
