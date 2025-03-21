"use client"

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"




export default function WebinarList({ webinars }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Webinars</CardTitle>
        <CardDescription>Your registered webinar sessions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {webinars.map((webinar) => (
            <div key={webinar.id} className="flex justify-between items-center">
              <div>
                <p className="font-medium">{webinar.title}</p>
                <p className="text-sm text-muted-foreground">
                  {webinar.date} at {webinar.time}
                </p>
              </div>
              <Button variant="outline" size="sm">Join</Button>
            </div>
          ))}
          <Button variant="outline" className="w-full">
            View All Webinars
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}