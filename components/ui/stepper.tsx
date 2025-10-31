"use client"

import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface Step {
  title: string
  description?: string
}

interface StepperProps {
  steps: Step[]
  currentStep: number
  className?: string
}

export function Stepper({ steps, currentStep, className }: StepperProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const stepNumber = index + 1
          const isCompleted = stepNumber < currentStep
          const isCurrent = stepNumber === currentStep
          const isUpcoming = stepNumber > currentStep

          return (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center flex-1">
                <div className="flex items-center w-full">
                  <div className="flex flex-col items-center">
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors",
                        isCompleted && "border-primary bg-primary text-primary-foreground",
                        isCurrent && "border-primary bg-background text-primary",
                        isUpcoming && "border-muted bg-background text-muted-foreground",
                      )}
                    >
                      {isCompleted ? <Check className="h-5 w-5" /> : stepNumber}
                    </div>
                    <div className="mt-2 text-center">
                      <p
                        className={cn(
                          "text-sm font-medium",
                          isCurrent && "text-foreground",
                          !isCurrent && "text-muted-foreground",
                        )}
                      >
                        {step.title}
                      </p>
                      {step.description && <p className="text-xs text-muted-foreground mt-0.5">{step.description}</p>}
                    </div>
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "h-0.5 flex-1 mx-2 mb-8 transition-colors",
                    stepNumber < currentStep ? "bg-primary" : "bg-muted",
                  )}
                />
              )}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}
