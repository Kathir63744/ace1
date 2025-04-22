"use client"

import { useState } from "react"
import { toast } from "sonner"
import { X } from "lucide-react"
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
      date: selectedDate instanceof Date
        ? selectedDate.toISOString().split("T")[0]
        : selectedDate,
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
    <div className="w-full max-w-xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden p-6">
      <div className="relative">
        <button
          onClick={closeModal}
          className="absolute right-2 top-2 text-gray-500 hover:text-gray-800"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-blue-700">
            🚀 Join Our Live Webinar
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Learn to ace your tech interviews like a pro!
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Date (Simplified) */}
        <div>
          <Label className="block text-sm font-semibold text-gray-700 mb-1">
            📅 Webinar Date
          </Label>
          <Input
            type="date"
            value={selectedDate ? selectedDate.toISOString?.().split("T")[0] || selectedDate : ""}
            onChange={(e) => setSelectedDate(e.target.value)}
            required
            className="rounded-xl border border-gray-300 px-4 py-2 shadow-sm"
          />
        </div>
        {/* Time (Simplified) */}
        <div>
          <Label className="block text-sm font-semibold text-gray-700 mb-1">
            ⏰ Choose Time Slot
          </Label>
          <select
            value={webinarTime}
            onChange={(e) => setWebinarTime(e.target.value)}
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select a time</option>
            <option value="10:00">10:00 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="15:00">3:00 PM</option>
            <option value="18:00">6:00 PM</option>
          </select>
        </div>
        {/* Name */}
        <div>
          <Label className="block text-sm font-semibold text-gray-700 mb-1">
            👤 Full Name
          </Label>
          <Input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            placeholder="Your full name"
            className="rounded-xl border border-gray-300 px-4 py-2 shadow-sm"
          />
        </div>
        {/* Email */}
        <div>
          <Label className="block text-sm font-semibold text-gray-700 mb-1">
            📧 Email Address
          </Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="example@mail.com"
            className="rounded-xl border border-gray-300 px-4 py-2 shadow-sm"
          />
        </div>
        {/* Phone */}
        <div>
          <Label className="block text-sm font-semibold text-gray-700 mb-1">
            📱 Phone Number
          </Label>
          <Input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            placeholder="123-456-7890"
            className="rounded-xl border border-gray-300 px-4 py-2 shadow-sm"
          />
        </div>
        {/* Submit */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 rounded-xl hover:scale-105 transform transition-all duration-200"
          >
            {isSubmitting ? "Registering..." : "✅ Register Now"}
          </button>
        </div>
      </form>
    </div>
  )
}
