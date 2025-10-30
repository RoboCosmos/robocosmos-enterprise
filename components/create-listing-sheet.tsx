"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Info,
  Settings,
  DollarSign,
  Camera,
  CheckCircle,
  Upload,
  FileText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface CreateListingSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const steps = [
  { id: 1, name: "Basis-Informationen", icon: Info },
  { id: 2, name: "Technische Daten", icon: Settings },
  { id: 3, name: "Wirtschaftliche Daten", icon: DollarSign },
  { id: 4, name: "Medien & Upload", icon: Camera },
  { id: 5, name: "Veröffentlichung", icon: CheckCircle },
]

export function CreateListingSheet({ open, onOpenChange }: CreateListingSheetProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Basis-Informationen
    model_name: "",
    manufacturer: "",
    category: "",
    availability_type: "",
    location: "",
    description: "",
    // Step 2: Technische Daten
    payload_kg: "",
    reach_m: "",
    battery_life_hours: "",
    ip_rating: "",
    use_cases: "",
    // Step 3: Wirtschaftliche Daten
    price_purchase: "",
    price_rental_per_day: "",
    tco_per_hour: "",
    roi_months: "",
    warranty_months: "",
    mtbf_hours: "",
    // Step 4: Medien & Upload
    video_link: "",
    // Step 5: Veröffentlichung
    status: "",
    agreement: false,
  })

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    console.log("[v0] Form submitted:", formData)
    // TODO: Implement actual submission logic
    onOpenChange(false)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-5xl p-0 flex flex-col">
        <SheetHeader className="px-6 py-4 border-b border-border">
          <SheetTitle className="text-2xl">Neues Roboter-Inserat erstellen</SheetTitle>
          <SheetDescription>Erstellen Sie ein neues Inserat für RoboCosmos Enterprise</SheetDescription>
        </SheetHeader>

        <div className="flex flex-1 overflow-hidden">
          {/* Left Navigation - Sticky */}
          <div className="w-48 border-r border-border bg-muted/30 p-4">
            <nav className="space-y-2">
              {steps.map((step) => {
                const Icon = step.icon
                const isActive = currentStep === step.id
                const isCompleted = currentStep > step.id

                return (
                  <button
                    key={step.id}
                    onClick={() => setCurrentStep(step.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left",
                      isActive && "bg-primary text-primary-foreground",
                      !isActive && isCompleted && "text-foreground hover:bg-accent",
                      !isActive && !isCompleted && "text-muted-foreground hover:bg-accent",
                    )}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="text-xs leading-tight">{step.name}</span>
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Right Content - Scrollable */}
          <div className="flex-1 flex flex-col">
            <ScrollArea className="flex-1">
              <div className="p-6 space-y-6">
                {/* Step 1: Basis-Informationen */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">Basis-Informationen</h3>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="model_name">Modellname</Label>
                      <Input
                        id="model_name"
                        placeholder="Atlas V3"
                        value={formData.model_name}
                        onChange={(e) => setFormData({ ...formData, model_name: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="manufacturer">Hersteller</Label>
                      <Input
                        id="manufacturer"
                        placeholder="Agility Robotics"
                        value={formData.manufacturer}
                        onChange={(e) => setFormData({ ...formData, manufacturer: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Kategorie</Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) => setFormData({ ...formData, category: value })}
                      >
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Kategorie wählen" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="logistik">Logistik</SelectItem>
                          <SelectItem value="fertigung">Fertigung</SelectItem>
                          <SelectItem value="schweissen">Schweißen</SelectItem>
                          <SelectItem value="montage">Montage</SelectItem>
                          <SelectItem value="verpackung">Verpackung</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="availability_type">Verfügbarkeitstyp</Label>
                      <Select
                        value={formData.availability_type}
                        onValueChange={(value) => setFormData({ ...formData, availability_type: value })}
                      >
                        <SelectTrigger id="availability_type">
                          <SelectValue placeholder="Verfügbarkeit wählen" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="miete_kauf">Miete/Kauf</SelectItem>
                          <SelectItem value="nur_miete">Nur Miete</SelectItem>
                          <SelectItem value="nur_kauf">Nur Kauf</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Standort des Roboters</Label>
                      <Input
                        id="location"
                        placeholder="PLZ oder Stadt"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Beschreibung</Label>
                      <Textarea
                        id="description"
                        placeholder="Detaillierte Beschreibung des Roboters und seines Zustands"
                        rows={5}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Technische Daten */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">Technische Daten</h3>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="payload_kg">Nutzlast (kg)</Label>
                      <Input
                        id="payload_kg"
                        type="number"
                        placeholder="10"
                        value={formData.payload_kg}
                        onChange={(e) => setFormData({ ...formData, payload_kg: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="reach_m">Reichweite (m)</Label>
                      <Input
                        id="reach_m"
                        type="number"
                        step="0.1"
                        placeholder="1.5"
                        value={formData.reach_m}
                        onChange={(e) => setFormData({ ...formData, reach_m: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="battery_life_hours">Akkulaufzeit (h)</Label>
                      <Input
                        id="battery_life_hours"
                        type="number"
                        placeholder="8"
                        value={formData.battery_life_hours}
                        onChange={(e) => setFormData({ ...formData, battery_life_hours: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ip_rating">IP-Schutzklasse</Label>
                      <Select
                        value={formData.ip_rating}
                        onValueChange={(value) => setFormData({ ...formData, ip_rating: value })}
                      >
                        <SelectTrigger id="ip_rating">
                          <SelectValue placeholder="IP-Schutzklasse wählen" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="IP54">IP54</SelectItem>
                          <SelectItem value="IP65">IP65</SelectItem>
                          <SelectItem value="IP67">IP67</SelectItem>
                          <SelectItem value="IP68">IP68</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="use_cases">Anwendungsfälle</Label>
                      <Input
                        id="use_cases"
                        placeholder="z.B. Palettierung, Kommissionierung"
                        value={formData.use_cases}
                        onChange={(e) => setFormData({ ...formData, use_cases: e.target.value })}
                      />
                      <p className="text-xs text-muted-foreground">Mehrere Anwendungsfälle mit Komma trennen</p>
                    </div>
                  </div>
                )}

                {/* Step 3: Wirtschaftliche Daten */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">Wirtschaftliche Daten</h3>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="price_purchase">Kaufpreis (€)</Label>
                      <Input
                        id="price_purchase"
                        type="number"
                        placeholder="50000"
                        value={formData.price_purchase}
                        onChange={(e) => setFormData({ ...formData, price_purchase: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="price_rental_per_day">Mietpreis pro Tag (€)</Label>
                      <Input
                        id="price_rental_per_day"
                        type="number"
                        placeholder="850"
                        value={formData.price_rental_per_day}
                        onChange={(e) => setFormData({ ...formData, price_rental_per_day: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tco_per_hour">TCO pro Stunde (€)</Label>
                      <Input
                        id="tco_per_hour"
                        type="number"
                        step="0.01"
                        placeholder="12.50"
                        value={formData.tco_per_hour}
                        onChange={(e) => setFormData({ ...formData, tco_per_hour: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="roi_months">Amortisationszeit (Monate)</Label>
                      <Input
                        id="roi_months"
                        type="number"
                        placeholder="24"
                        value={formData.roi_months}
                        onChange={(e) => setFormData({ ...formData, roi_months: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="warranty_months">Garantie (Monate)</Label>
                      <Input
                        id="warranty_months"
                        type="number"
                        placeholder="12"
                        value={formData.warranty_months}
                        onChange={(e) => setFormData({ ...formData, warranty_months: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mtbf_hours">MTBF (Stunden)</Label>
                      <Input
                        id="mtbf_hours"
                        type="number"
                        placeholder="10000"
                        value={formData.mtbf_hours}
                        onChange={(e) => setFormData({ ...formData, mtbf_hours: e.target.value })}
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Medien & Upload */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">Medien & Upload</h3>
                    </div>

                    {/* Image Upload Section */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-foreground">Produktbilder (JPEG/PNG)</h4>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                        <Label htmlFor="images" className="cursor-pointer text-sm text-foreground hover:text-primary">
                          Bilder wählen
                        </Label>
                        <Input id="images" type="file" accept="image/jpeg,image/png" multiple className="hidden" />
                        <p className="text-xs text-muted-foreground mt-2">Mindestens 3 Bilder erforderlich (max. 10)</p>
                      </div>
                    </div>

                    {/* Video Link Section */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-foreground">Video-Link</h4>
                      <Label htmlFor="video_link">Video-Link (YouTube/Vimeo)</Label>
                      <Input
                        id="video_link"
                        type="url"
                        placeholder="https://youtube.com/watch?v=..."
                        value={formData.video_link}
                        onChange={(e) => setFormData({ ...formData, video_link: e.target.value })}
                      />
                    </div>

                    {/* Technical Documents Section */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-foreground">Technische Dokumente (Datenblätter)</h4>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                        <FileText className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                        <Label
                          htmlFor="datasheet"
                          className="cursor-pointer text-sm text-foreground hover:text-primary"
                        >
                          Datei wählen
                        </Label>
                        <Input id="datasheet" type="file" accept="application/pdf" className="hidden" />
                        <p className="text-xs text-muted-foreground mt-2">
                          Wichtig für B2B-Kunden. Nur PDF erlaubt (max. 5 MB)
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5: Veröffentlichung */}
                {currentStep === 5 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">Veröffentlichung</h3>
                    </div>

                    {/* Summary */}
                    <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                      <h4 className="text-sm font-semibold text-foreground">Zusammenfassung</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="text-muted-foreground">Modell:</span>
                          <p className="text-foreground font-medium">{formData.model_name || "—"}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Hersteller:</span>
                          <p className="text-foreground font-medium">{formData.manufacturer || "—"}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Kategorie:</span>
                          <p className="text-foreground font-medium">{formData.category || "—"}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Mietpreis:</span>
                          <p className="text-foreground font-medium">
                            {formData.price_rental_per_day ? `${formData.price_rental_per_day} € / Tag` : "—"}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Status Selection */}
                    <div className="space-y-2">
                      <Label htmlFor="status">Status</Label>
                      <Select
                        value={formData.status}
                        onValueChange={(value) => setFormData({ ...formData, status: value })}
                      >
                        <SelectTrigger id="status">
                          <SelectValue placeholder="Status wählen" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Entwurf speichern</SelectItem>
                          <SelectItem value="review">Zur Prüfung senden</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Agreement Checkbox */}
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="agreement"
                        checked={formData.agreement}
                        onCheckedChange={(checked) => setFormData({ ...formData, agreement: checked as boolean })}
                      />
                      <Label htmlFor="agreement" className="text-sm font-normal leading-tight cursor-pointer">
                        Ich bestätige, dass alle Angaben korrekt sind und der Händlervereinbarung entsprechen.
                      </Label>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Footer with Navigation Buttons */}
            <div className="border-t border-border p-4 flex items-center justify-between bg-background">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={currentStep === 1}
                className="border-border bg-transparent"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Zurück
              </Button>

              <div className="text-sm text-muted-foreground">
                Schritt {currentStep} von {steps.length}
              </div>

              {currentStep < 5 ? (
                <Button onClick={handleNext} className="bg-primary hover:bg-primary/90">
                  Weiter
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!formData.agreement}
                  className="bg-primary hover:bg-primary/90"
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Inserat zur Prüfung senden
                </Button>
              )}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
