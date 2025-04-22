"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

// Import course options from a shared file or define here
const courseOptions = [
  { value: "website-development", label: "FullStack Development" },
  { value: "digital-marketing", label: "Digital Marketing" },
  { value: "app-development", label: "Mobile App Development" },
  { value: "scrum-master", label: "Scrum Master Certification" },
  { value: "ai-cybersecurity", label: "AI and Cybersecurity" },
  { value: "product-management", label: "Product Management" },
]

const timeSlots = [
  { value: "morning", label: "Morning (9AM - 12PM)" },
  { value: "afternoon", label: "Afternoon (1PM - 4PM)" },
  { value: "evening", label: "Evening (6PM - 9PM)" },
  { value: "weekend", label: "Weekend (Sat/Sun)" },
]

export default function EnrollPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "website-development",
    timeSlot: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsSubmitted(true)

    // In a real app, you would send this data to your backend
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-violet-50 py-12 px-6 mt-">
      <div className="max-w-md mx-auto">
        <Link href="/course" className="inline-block mb-8 text-indigo-600 hover:text-indigo-800 transition-colors">
          ← Back to courses
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-6 text-white">
            <h1 className="text-2xl font-bold">Enroll Now</h1>
            <p className="text-indigo-100">Complete the form below to secure your spot</p>
          </div>

          <div className="p-6">
            {isSubmitted ? (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-4">
                  Your enrollment request has been submitted successfully. We'll contact you shortly with next steps.
                </p>
                <Link href="/" className="inline-block text-indigo-600 hover:text-indigo-800 transition-colors">
                  Return to home page
                </Link>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-4 py-2.5 border"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-4 py-2.5 border"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-4 py-2.5 border"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                    Course *
                  </label>
                  <select
                    id="course"
                    name="course"
                    required
                    value={formData.course}
                    onChange={handleChange}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-4 py-2.5 border"
                  >
                    {courseOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="timeSlot" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Time Slot *
                  </label>
                  <select
                    id="timeSlot"
                    name="timeSlot"
                    required
                    value={formData.timeSlot}
                    onChange={handleChange}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-4 py-2.5 border"
                  >
                    <option value="" disabled>
                      Select a time slot
                    </option>
                    {timeSlots.map((slot) => (
                      <option key={slot.value} value={slot.value}>
                        {slot.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-4 py-2.5 border"
                    placeholder="Any specific questions or requirements?"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Application
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

