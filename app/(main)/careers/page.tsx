"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  Briefcase,
  Lightbulb,
  Cpu,
  Rocket,
  Search,
  ArrowRight,
  Laptop,
  Wallet,
  GraduationCap,
  Pizza,
  Zap,
  HeartHandshake,
  MapPin,
} from "lucide-react"

export default function CareersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("all")

  // Sample job listings
  const jobListings = [
    {
      id: "1",
      title: "Senior Frontend Engineer",
      location: "Berlin / Remote",
      department: "tech",
      description: "Gestalten Sie die Zukunft unserer B2B-Plattform mit modernsten Web-Technologien.",
      tasks: [
        "Entwicklung und Optimierung unserer Next.js-basierten Plattform",
        "Implementierung neuer Features in enger Zusammenarbeit mit dem Design-Team",
        "Code-Reviews und Mentoring von Junior-Entwicklern",
        "Performance-Optimierung und Best Practices etablieren",
      ],
      profile: [
        "5+ Jahre Erfahrung mit React und TypeScript",
        "Fundierte Kenntnisse in Next.js, Tailwind CSS und modernen Frontend-Tools",
        "Erfahrung mit API-Integration und State Management",
        "Leidenschaft für Clean Code und User Experience",
      ],
    },
    {
      id: "2",
      title: "Business Development Manager",
      location: "Berlin / Hybrid",
      department: "sales",
      description: "Bauen Sie strategische Partnerschaften auf und treiben Sie unser Wachstum voran.",
      tasks: [
        "Identifikation und Akquise neuer B2B-Kunden und Partner",
        "Aufbau langfristiger Geschäftsbeziehungen",
        "Verhandlung von Verträgen und Konditionen",
        "Marktanalyse und Wettbewerbsbeobachtung",
      ],
      profile: [
        "3+ Jahre Erfahrung im B2B-Vertrieb oder Business Development",
        "Nachweisbare Erfolge im Aufbau von Partnerschaften",
        "Ausgezeichnete Kommunikations- und Verhandlungsfähigkeiten",
        "Affinität für Technologie und Robotik",
      ],
    },
    {
      id: "3",
      title: "Product Designer (UI/UX)",
      location: "Remote",
      department: "tech",
      description: "Gestalten Sie intuitive und ansprechende Nutzererlebnisse für unsere Plattform.",
      tasks: [
        "Design von User Interfaces für Web und Mobile",
        "Durchführung von User Research und Usability Tests",
        "Erstellung von Wireframes, Prototypen und Design Systems",
        "Enge Zusammenarbeit mit Entwicklern und Product Managern",
      ],
      profile: [
        "3+ Jahre Erfahrung im UI/UX Design",
        "Expertise in Figma, Adobe XD oder ähnlichen Tools",
        "Portfolio mit B2B-Projekten",
        "Verständnis für Frontend-Technologien (HTML, CSS, React)",
      ],
    },
    {
      id: "4",
      title: "DevOps Engineer",
      location: "Berlin / Remote",
      department: "tech",
      description: "Optimieren Sie unsere Infrastruktur und sorgen Sie für reibungslose Deployments.",
      tasks: [
        "Verwaltung und Optimierung unserer Cloud-Infrastruktur (Vercel, Supabase)",
        "Implementierung von CI/CD-Pipelines",
        "Monitoring, Logging und Performance-Optimierung",
        "Sicherstellung der Systemsicherheit und Compliance",
      ],
      profile: [
        "3+ Jahre Erfahrung im DevOps-Bereich",
        "Kenntnisse in Docker, Kubernetes und Cloud-Plattformen",
        "Erfahrung mit CI/CD-Tools (GitHub Actions, Jenkins)",
        "Verständnis für Sicherheitsstandards und Best Practices",
      ],
    },
    {
      id: "5",
      title: "Marketing Manager",
      location: "Berlin / Hybrid",
      department: "marketing",
      description: "Entwickeln Sie innovative Marketingstrategien für unsere B2B-Zielgruppe.",
      tasks: [
        "Entwicklung und Umsetzung von Marketing-Kampagnen",
        "Content-Erstellung für verschiedene Kanäle (Blog, Social Media, Newsletter)",
        "SEO/SEM-Optimierung und Performance-Tracking",
        "Event-Management und Messe-Auftritte",
      ],
      profile: [
        "3+ Jahre Erfahrung im B2B-Marketing",
        "Expertise in digitalem Marketing und Content-Strategie",
        "Analytisches Denken und datengetriebene Entscheidungsfindung",
        "Kreativität und Hands-on-Mentalität",
      ],
    },
    {
      id: "6",
      title: "Customer Success Manager",
      location: "Berlin / Remote",
      department: "operations",
      description: "Betreuen Sie unsere Kunden und sorgen Sie für deren langfristigen Erfolg.",
      tasks: [
        "Onboarding neuer Kunden und Partner",
        "Proaktive Betreuung und Beratung bestehender Kunden",
        "Identifikation von Upselling- und Cross-Selling-Möglichkeiten",
        "Sammlung und Analyse von Kundenfeedback",
      ],
      profile: [
        "2+ Jahre Erfahrung im Customer Success oder Account Management",
        "Ausgezeichnete Kommunikationsfähigkeiten",
        "Problemlösungsorientierung und Empathie",
        "Technisches Verständnis für SaaS-Produkte",
      ],
    },
  ]

  // Filter jobs based on search and department
  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      searchQuery === "" ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesDepartment = departmentFilter === "all" || job.department === departmentFilter
    return matchesSearch && matchesDepartment
  })

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900/95 py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-gray-900" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center px-10">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Den Deutschen Markt der Robotik mitgestalten.
              </h1>
              <p className="text-lg text-gray-300 md:text-xl">
                Werden Sie Teil unseres B2B-Marktplatzes. Wir suchen die besten Köpfe für die Automatisierung in Deutschland.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="#open-positions">
                    <Briefcase className="mr-2 h-5 w-5" />
                    Zu den offenen Stellen
                  </a>
                </Button>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative aspect-video lg:aspect-square">
              <Image
                src="/developers-working-with-robots-in-modern-office.jpg"
                alt="Team bei RoboCosmos Enterprise"
                fill
                className="rounded-lg object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="bg-gray-900 py-10">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Warum RoboCosmos?</h2>
            <p className="mt-4 text-lg text-gray-400">Drei gute Gründe, Teil unseres Teams zu werden</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1: Zukunftsorientierte Mission */}
            <Card className="border-gray-800 bg-gray-800/50">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10">
                  <Lightbulb className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle className="text-white">Arbeiten in einer wachsenden Branche</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Arbeiten Sie am Puls der Zeit und gestalten Sie den Handel mit Robotern neu.
                </p>
              </CardContent>
            </Card>

            {/* Card 2: Tech Focus */}
            <Card className="border-gray-800 bg-gray-800/50">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10">
                  <Cpu className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle className="text-white">Technologie-Vorsprung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Modernster Tech-Stack (Next.js, Supabase, KI-Agenten) und direkter Zugang zu neuesten
                  Robotik-Modellen.
                </p>
              </CardContent>
            </Card>

            {/* Card 3: Startup Culture */}
            <Card className="border-gray-800 bg-gray-800/50">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10">
                  <Rocket className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle className="text-white">Flache Hierarchien</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Volle Verantwortung vom ersten Tag, schnelle Entscheidungen und flexible Arbeitsmodelle.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="bg-gray-800" />

      {/* Open Positions Section */}
      <section id="open-positions" className="bg-gray-900 py-10">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Offene Stellen</h2>
            <p className="mt-4 text-lg text-gray-400">Finden Sie Ihre perfekte Position bei RoboCosmos Enterprise</p>
          </div>

          {/* Filter Row */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                placeholder="Stelle oder Abteilung suchen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-gray-700 bg-gray-800 pl-10 text-white placeholder:text-gray-500"
              />
            </div>
            <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
              <SelectTrigger className="w-full border-gray-700 bg-gray-800 text-white sm:w-[250px]">
                <SelectValue placeholder="Abteilung wählen" />
              </SelectTrigger>
              <SelectContent className="border-gray-700 bg-gray-800">
                <SelectItem value="all">Alle Abteilungen</SelectItem>
                <SelectItem value="tech">Tech & Development</SelectItem>
                <SelectItem value="sales">Sales & Partnerships</SelectItem>
                <SelectItem value="operations">Operations</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Job Listings Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {filteredJobs.map((job) => (
              <AccordionItem
                key={job.id}
                value={job.id}
                className="rounded-lg border border-gray-800 bg-gray-800/50 px-6"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex flex-1 items-start justify-between gap-4 text-left">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                      <div className="mt-2 flex items-center gap-2 text-sm text-gray-400">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                    </div>
                    <Badge variant="outline" className="border-blue-600 text-blue-500">
                      {job.department === "tech" && "Tech"}
                      {job.department === "sales" && "Sales"}
                      {job.department === "operations" && "Operations"}
                      {job.department === "marketing" && "Marketing"}
                    </Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-6 pt-4">
                  <div>
                    <h4 className="mb-2 font-semibold text-white">Kurzbeschreibung</h4>
                    <p className="text-gray-400">{job.description}</p>
                  </div>

                  <div>
                    <h4 className="mb-3 font-semibold text-white">Ihre Aufgaben</h4>
                    <ul className="space-y-2">
                      {job.tasks.map((task, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-400">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-3 font-semibold text-white">Ihr Profil</h4>
                    <ul className="space-y-2">
                      {job.profile.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-400">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                      <Link href="/contact">
                        Jetzt bewerben
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {filteredJobs.length === 0 && (
            <div className="rounded-lg border border-gray-800 bg-gray-800/50 p-12 text-center">
              <p className="text-gray-400">Keine Stellen gefunden. Versuchen Sie es mit anderen Suchbegriffen.</p>
            </div>
          )}
        </div>
      </section>

      <Separator className="bg-gray-800" />

      {/* Culture & Benefits Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Ihre Vorteile bei RoboCosmos</h2>
            <p className="mt-4 text-lg text-gray-400">Was wir Ihnen als Arbeitgeber bieten</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Benefit 1 */}
            <Card className="border-gray-800 bg-gray-800/50">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10">
                  <Laptop className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle className="text-white">Flexibles & Remote-Arbeiten</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Arbeiten Sie von überall aus und gestalten Sie Ihre Arbeitszeiten flexibel.
                </p>
              </CardContent>
            </Card>

            {/* Benefit 2 */}
            <Card className="border-gray-800 bg-gray-800/50">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10">
                  <Wallet className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle className="text-white">Wettbewerbsfähiges Gehalt</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Faire Vergütung mit attraktiven Bonusmodellen und Beteiligungsoptionen.</p>
              </CardContent>
            </Card>

            {/* Benefit 3 */}
            <Card className="border-gray-800 bg-gray-800/50">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10">
                  <GraduationCap className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle className="text-white">Weiterbildungsbudget</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Jährliches Budget für Konferenzen, Kurse und persönliche Weiterentwicklung.
                </p>
              </CardContent>
            </Card>

            {/* Benefit 4 */}
            <Card className="border-gray-800 bg-gray-800/50">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10">
                  <Pizza className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle className="text-white">Regelmäßige Team-Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Gemeinsame Aktivitäten, Offsites und Team-Building für starken Zusammenhalt.
                </p>
              </CardContent>
            </Card>

            {/* Benefit 5 */}
            <Card className="border-gray-800 bg-gray-800/50">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10">
                  <Zap className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle className="text-white">Modernes Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Neueste Hardware und Software-Tools für produktives Arbeiten.</p>
              </CardContent>
            </Card>

            {/* Benefit 6 */}
            <Card className="border-gray-800 bg-gray-800/50">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10">
                  <HeartHandshake className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle className="text-white">Gesundheitsförderung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Zuschüsse für Fitnessstudio, Sportangebote und betriebliche Gesundheitsvorsorge.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-900/95 py-20">
        <div className="container mx-auto px-4">
          <Card className="border-blue-600/20 bg-gradient-to-br from-blue-600/10 to-gray-800/50">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-white md:text-4xl">
                Bereit für den nächsten Schritt?
              </CardTitle>
              <CardDescription className="mt-4 text-lg text-gray-300">
                Wir freuen uns auf Ihre Bewerbung und darauf, Sie in unserem Team willkommen zu heißen!
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pt-6">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <a href="#open-positions">
                  <Briefcase className="mr-2 h-5 w-5" />
                  Alle Jobs ansehen
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
