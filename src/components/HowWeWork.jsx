import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function HowWeWork() {
  const workItems = [
    {
      title: "Global Collaboration",
      description: "From LA to Stockholm and beyond, we assemble tailored teams of creatives for each project, drawing from our growing network to match the right skills to the right challenge."
    },
    {
      title: "Flexible Approach",
      description: "No cookie-cutter solutions. We adapt to each brief, combining research, strategy, and creativity to deliver results that are both impactful and authentic."
    },
    {
      title: "Diverse Expertise",
      description: "Our collective spans the full creative spectrum—video production, animation, UI/UX design, branding, tech development, and more—ensuring we can tackle any creative challenge with precision and flair."
    },
    {
      title: "Open Invitation",
      description: "We're always looking for passionate creatives to join our network. Whether you're an animator in Tokyo, a filmmaker in São Paulo, a designer in London, or a developer anywhere else, &more is a place to collaborate and grow."
    }
  ]

  return (
    <section className="mt-12">
      <h3 className="text-gray-700 dark:text-gray-400 font-semibold mb-4">How We Work</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        &more operates as a fluid collective, not a rigid agency. Here's how we bring ideas to life:
      </p>
      <div className="grid gap-2">
        {workItems.map((item, index) => (
          <Card key={index} className="border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-gray-800 dark:text-gray-200">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
} 