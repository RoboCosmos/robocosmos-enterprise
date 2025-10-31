"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Stepper } from "@/components/ui/stepper"

const steps = [
  { title: "1. Basis-Informationen" },
  { title: "2. Technische Daten" },
  { title: "3. Wirtschaftliche Daten" },
  { title: "4. Medien & Uploads" },
  { title: "5. Verifizierung" },
]

export default function NewListingPage() {
  const [currentStep, setCurrentStep] = useState(1)

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Main Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Neues Roboter-Inserat erstellen</h1>
        <p className="text-sm md:text-base text-muted-foreground mt-1">
          Füllen Sie alle Schritte aus, um Ihr Inserat auf RoboCosmos zu veröffentlichen.
        </p>
      </div>

      {/* Stepper Navigation */}
      <Stepper steps={steps} currentStep={currentStep} />

      {/* Form Content Area */}
      <Card>
        <CardHeader>
          <CardTitle>Schritt {currentStep}: Basis-Informationen</CardTitle>
          <CardDescription>Geben Sie die grundlegenden Informationen zu Ihrem Roboter ein.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {currentStep === 1 && (
            <>
              <div className="space-y-2">
                <Label htmlFor="modelName">Modellname</Label>
                <Input id="modelName" placeholder="z.B. KUKA KR 10 R1100" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="manufacturer">Hersteller</Label>
                <Input id="manufacturer" placeholder="z.B. KUKA, ABB, FANUC" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Kategorie wählen</Label>
                <Select>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Wählen Sie eine Kategorie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="industrial">Industrierobotik</SelectItem>
                    <SelectItem value="welding">Schweißroboter</SelectItem>
                    <SelectItem value="collaborative">Kollaborative Roboter</SelectItem>
                    <SelectItem value="mobile">Mobile Roboter</SelectItem>
                    <SelectItem value="service">Service-Roboter</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="availability">Verfügbarkeitstyp</Label>
                <Select>
                  <SelectTrigger id="availability">
                    <SelectValue placeholder="Wählen Sie den Verfügbarkeitstyp" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rent">Miete</SelectItem>
                    <SelectItem value="buy">Kauf</SelectItem>
                    <SelectItem value="both">Beides</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Standort des Roboters (PLZ oder Stadt)</Label>
                <Input id="location" placeholder="z.B. 10115 Berlin oder München" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Beschreibung des Roboters und seines Zustands</Label>
                <Textarea
                  id="description"
                  placeholder="Beschreiben Sie den Roboter, seinen Zustand, besondere Merkmale und Einsatzmöglichkeiten..."
                  rows={6}
                />
              </div>
            </>
          )}

          {currentStep > 1 && (
            <div className="py-12 text-center text-muted-foreground">
              <p>Schritt {currentStep} Formularfelder werden hier angezeigt.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Form Footer Navigation */}
      <div className="flex justify-between items-center pt-4 border-t border-border">
        {currentStep > 1 ? (
          <Button variant="outline" onClick={handleBack}>
            Zurück
          </Button>
        ) : (
          <div />
        )}
        <Button className="bg-primary hover:bg-primary/90" onClick={handleNext}>
          {currentStep === steps.length ? "Inserat veröffentlichen" : "Weiter"}
        </Button>
      </div>
    </div>
  )
}
