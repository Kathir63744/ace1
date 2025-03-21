"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Calendar, X, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { toast } from "sonner"

export default function WebinarForm({ closeModal }) {
  const router = useRouter()
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [webinarTime, setWebinarTime] = useState("10:00 AM")
  const [whatsappUpdates, setWhatsappUpdates] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Format date and time
    const formattedDate = selectedDate ? format(selectedDate, "yyyy-MM-dd") : null
    const formattedTime = webinarTime ? formatTimeForBackend(webinarTime) : null

    // Validate inputs
    if (!formattedDate || !formattedTime) {
      toast.error("Please select a valid date and time.")
      setIsSubmitting(false)
      return
    }

    const formData = {
      name: fullName,
      email: email,
      phone: phoneNumber,
      date: formattedDate,
      time: formattedTime,
      whatsappUpdates: whatsappUpdates,
    }

    try {
      const response = await fetch("http://localhost:9090/api/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success("Registration successful! Check your email for confirmation.")
        closeModal()
      } else {
        toast.error("Failed to register. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      toast.error("Something went wrong!")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Convert AM/PM format to 24-hour format
  const formatTimeForBackend = (time) => {
    if (!time) return null
    const [timeString, modifier] = time.split(" ")
    let [hours, minutes] = timeString.split(":")

    if (modifier === "PM" && hours !== "12") {
      hours = String(Number.parseInt(hours, 10) + 12)
    } else if (modifier === "AM" && hours === "12") {
      hours = "00"
    }

    return `${hours}:${minutes}:00`
  }

  // Validate email
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  // Validate phone number
  const validatePhoneNumber = (phone) => {
    const regex = /^\+?[1-9]\d{1,14}$/
    return regex.test(phone)
  }

  return (
    <Card className="w-full max-w-lg shadow-lg">
      <CardHeader className="relative pb-2">
        <Button variant="ghost" size="icon" className="absolute right-2 top-2" onClick={closeModal}>
          <X className="h-4 w-4" />
        </Button>
        <CardTitle className="text-xl">Register for our webinar</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <Info className="h-4 w-4" />
          How to Nail your next Technical Interview
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {/* Date Picker */}
          <div className="space-y-2">
            <Label htmlFor="date">Select Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant="outline"
                  className={cn("w-full justify-start text-left font-normal", !selectedDate && "text-muted-foreground")}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {selectedDate ? format(selectedDate, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  initialFocus
                  disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={email && !validateEmail(email) ? "border-red-500" : ""}
            />
            {email && !validateEmail(email) && (
              <p className="text-xs text-red-500">Please enter a valid email address.</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phone">
              Phone Number
              <span className="text-xs text-muted-foreground ml-1">(for webinar reminders)</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className={phoneNumber && !validatePhoneNumber(phoneNumber) ? "border-red-500" : ""}
            />
            {phoneNumber && !validatePhoneNumber(phoneNumber) && (
              <p className="text-xs text-red-500">Please enter a valid phone number.</p>
            )}
          </div>

          {/* Webinar Time Selection */}
          <div className="space-y-2">
            <Label htmlFor="time">Select Webinar Time</Label>
            <Select value={webinarTime} onValueChange={setWebinarTime}>
              <SelectTrigger id="time" className="w-full">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                <SelectItem value="6:00 PM">6:00 PM</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* WhatsApp Updates Checkbox */}
          <div className="flex items-start space-x-2 pt-2">
            <Checkbox id="whatsapp" checked={whatsappUpdates} onCheckedChange={setWhatsappUpdates} />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="whatsapp"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Receive updates via WhatsApp
              </Label>
              <p className="text-xs text-muted-foreground">Get confirmation and reminders about the webinar</p>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4">
          <p className="text-xs text-muted-foreground">
            By sharing your contact details, you agree to our{" "}
            <a href="#" className="text-primary underline">
              privacy policy
            </a>
            .
          </p>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent"></span>
                Registering...
              </>
            ) : (
              <>Register Now</>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}