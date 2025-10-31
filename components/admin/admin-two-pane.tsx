"use client"
import type { ReactNode } from "react"

interface AdminTwoPaneProps {
  leftPane: ReactNode
  rightPane: ReactNode
  leftPaneWidth?: string
  rightPaneWidth?: string
}

export function AdminTwoPane({
  leftPane,
  rightPane,
  leftPaneWidth = "35%",
  rightPaneWidth = "65%",
}: AdminTwoPaneProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-6">
      {/* Left Pane */}
      <div>{leftPane}</div>

      {/* Right Pane */}
      <div>{rightPane}</div>
    </div>
  )
}
