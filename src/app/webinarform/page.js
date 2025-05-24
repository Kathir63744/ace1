"use client"

import { useState } from "react"
import { toast } from "sonner"
import { X, Calendar, Clock, User, Mail, Phone, Loader2 } from "lucide-react"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"

export default function WebinarForm({ closeModal }) {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [webinarTime, setWebinarTime] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = {
      name: fullName,
      email,
      phone: phoneNumber,
      date: selectedDate instanceof Date ? selectedDate.toISOString().split("T")[0] : selectedDate,
      time: webinarTime,
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
        toast.success("Registration successful!")
        setTimeout(() => {
          closeModal()
        }, 3000)
      } else {
        toast.error("Failed to register. Please try again.")
      }
    } catch (error) {
      console.error("Submission error:", error)
      toast.error("Something went wrong!")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-3xl overflow-hidden p-4 sm:p-6 md:p-8 transition-all">
      <div className="relative">
        <button
          onClick={closeModal}
          className="absolute right-0 top-0 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-8">
          <div className="inline-block bg-blue-100 dark:bg-blue-900 p-3 rounded-full mb-4">
            <Calendar className="w-8 h-8 text-blue-600 dark:text-blue-300" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Join Our Live Webinar
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 max-w-md mx-auto">
            Learn to ace your tech interviews like a pro with our expert-led interactive session!
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Date */}
          <div className="space-y-2">
            <Label
              htmlFor="webinar-date"
              className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              <Calendar className="w-4 h-4 mr-2 text-blue-500" />
              Webinar Date
            </Label>
            <div className="relative">
              <Input
                id="webinar-date"
                type="date"
                value={selectedDate ? selectedDate.toISOString?.().split("T")[0] || selectedDate : ""}
                onChange={(e) => setSelectedDate(e.target.value)}
                required
                className="rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full pl-4 pr-4 transition-all"
              />
            </div>
          </div>

          {/* Time */}
          <div className="space-y-2">
            <Label
              htmlFor="webinar-time"
              className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              <Clock className="w-4 h-4 mr-2 text-blue-500" />
              Time Slot
            </Label>
            <select
              id="webinar-time"
              value={webinarTime}
              onChange={(e) => setWebinarTime(e.target.value)}
              required
              className="w-full rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 h-10 transition-all"
            >
              <option value="">Select a time</option>
              <option value="10:00">10:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="15:00">3:00 PM</option>
              <option value="18:00">6:00 PM</option>
            </select>
          </div>
        </div>

        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="full-name" className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
            <User className="w-4 h-4 mr-2 text-blue-500" />
            Full Name
          </Label>
          <Input
            id="full-name"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            placeholder="Your full name"
            className="rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full transition-all"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
            <Mail className="w-4 h-4 mr-2 text-blue-500" />
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="example@mail.com"
            className="rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full transition-all"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
            <Phone className="w-4 h-4 mr-2 text-blue-500" />
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            placeholder="123-456-7890"
            className="rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full transition-all"
          />
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg transform transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Registering...</span>
              </>
            ) : (
              <span>Register Now</span>
            )}
          </button>
        </div>

        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
          By registering, you agree to receive communications about the webinar.
          <br />
          We respect your privacy and won't share your information.
        </p>
      </form>
    </div>
  )
}
