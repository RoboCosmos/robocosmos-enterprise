import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const teamMembers = [
  { name: "Max Mustermann", title: "CEO & Mitgründer", initials: "MM" },
  { name: "Anna Schmidt", title: "Leitung Technik", initials: "AS" },
  { name: "Thomas Weber", title: "VP Vertrieb", initials: "TW" },
  { name: "Lisa Müller", title: "Leitung Operations", initials: "LM" },
]

export function TeamSection() {
  return (
    <section className="bg-muted/30 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 md:mb-12 text-center text-2xl md:text-4xl font-bold text-foreground">
          Das RoboCosmos-Team: Ihre Partner für die Automation.
        </h2>

        <div className="mx-auto grid max-w-6xl gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center transition-transform hover:scale-105">
              <CardContent className="p-6">
                <Avatar className="mx-auto mb-4 h-20 w-20 md:h-24 md:w-24">
                  <AvatarImage src={`/.jpg?height=96&width=96&query=${member.name}`} />
                  <AvatarFallback className="bg-primary text-primary-foreground text-xl md:text-2xl">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="mb-2 text-lg md:text-xl font-bold text-foreground">{member.name}</h3>
                <p className="mb-3 md:mb-4 text-sm font-semibold text-primary">{member.title}</p>
                <p className="text-sm text-muted-foreground">
                  Erfahrene Führungskraft mit tiefgreifender Expertise in Robotik, Automatisierung und
                  B2B-Marktplatzbetrieb.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
