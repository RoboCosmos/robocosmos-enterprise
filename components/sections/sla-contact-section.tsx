import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import Link from "next/link"

export function SlaContactSection() {
  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardContent className="py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <Mail className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Fragen zu unseren SLAs?</h3>
              <p className="text-gray-300">
                Unser Enterprise-Team steht Ihnen für individuelle SLA-Vereinbarungen und maßgeschneiderte
                Service-Pakete zur Verfügung.
              </p>
            </div>
          </div>
          <Link href="/contact">
            <Button
              variant="outline"
              className="border-blue-600 text-blue-400 hover:bg-blue-950/50 whitespace-nowrap bg-transparent"
            >
              Kontakt für SLA-Anfragen
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
