"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Map, List, MapPin, Star, Factory } from "lucide-react"

export function VerifiedMerchantsSection() {
  const [view, setView] = useState<string>("map")

  const merchants = [
    {
      id: 1,
      name: "RoboTrade GmbH",
      address: "Hamburg, Germany",
      badge: "Top Rated",
      avatar: "/robot-company.jpg",
      rating: 4.9,
      industry: "Industrierobotik",
    },
    {
      id: 2,
      name: "AutoMech Solutions",
      address: "München, Germany",
      badge: "Verified",
      avatar: "/automation-company.jpg",
      rating: 4.8,
      industry: "Logistik & Lager",
    },
    {
      id: 3,
      name: "IndustrieRoboter AG",
      address: "Berlin, Germany",
      badge: "Premium Partner",
      avatar: "/industrial-robotics.jpg",
      rating: 4.7,
      industry: "Fertigung & Produktion",
    },
    {
      id: 4,
      name: "TechBot Systems",
      address: "Frankfurt, Germany",
      badge: "Top Rated",
      avatar: "/modern-tech-office.png",
      rating: 4.9,
      industry: "Inspektion & Wartung",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-12 lg:px-8 lg:py-20">
      <div className="container mx-auto max-w-7xl">
        <Card className="border-border/50 shadow-lg">
          <CardHeader className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <CardTitle className="text-3xl font-bold text-foreground">Verifizierte Händler in Ihrer Nähe</CardTitle>

              <ToggleGroup type="single" value={view} onValueChange={(value) => value && setView(value)}>
                <ToggleGroupItem value="map" aria-label="Karten Ansicht" className="gap-2 cursor-pointer">
                  <Map className="h-4 w-4" />
                  <span className="hidden sm:inline">Karten Ansicht</span>
                </ToggleGroupItem>
                <ToggleGroupItem value="list" aria-label="Listen Ansicht" className="gap-2 cursor-pointer">
                  <List className="h-4 w-4" />
                  <span className="hidden sm:inline">Listen Ansicht</span>
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </CardHeader>

          <CardContent>
            {view === "map" ? (
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="lg:w-1/3 space-y-3">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-3">Händler in der Nähe</h3>
                  {merchants.map((merchant) => (
                    <div
                      key={merchant.id}
                      className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-primary/50 transition-colors cursor-pointer"
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={merchant.avatar || "/placeholder.svg"} alt={merchant.name} />
                        <AvatarFallback>{merchant.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{merchant.name}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Factory className="h-3 w-3" />
                          {merchant.industry}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="lg:flex-1 bg-muted rounded-lg flex items-center justify-center h-[400px] border border-border/50">
                  <div className="text-center space-y-2">
                    <Map className="h-12 w-12 text-muted-foreground mx-auto" />
                    <p className="text-muted-foreground font-medium">Map Placeholder</p>
                    <p className="text-sm text-muted-foreground/70">Interaktive Karte wird hier angezeigt</p>
                  </div>
                </div>
              </div>
            ) : (
              <ul className="space-y-4">
                {merchants.map((merchant) => (
                  <li
                    key={merchant.id}
                    className="flex items-center gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/50 hover:shadow-md transition-all cursor-pointer"
                  >
                    <Avatar className="h-14 w-14">
                      <AvatarImage src={merchant.avatar || "/placeholder.svg"} alt={merchant.name} />
                      <AvatarFallback className="text-lg">{merchant.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-foreground">{merchant.name}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {merchant.badge}
                        </Badge>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Factory className="h-4 w-4 text-primary" />
                          <span className="font-medium text-foreground">{merchant.industry}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {merchant.address}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                          {merchant.rating}
                        </span>
                      </div>
                    </div>

                    <div className="hidden sm:block">
                      <button className="px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                        Details und Lösungen ansehen →
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
