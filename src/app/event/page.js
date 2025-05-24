"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Calendar, MapPin, Clock, Users, ChevronRight, ArrowRight, Menu, X } from "lucide-react"
import Link from "next/link"
import { cn } from "../../lib/utils"
export default function EventPage() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredEvents, setFilteredEvents] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Course", path: "/courses" },
    { name: "Trainers", path: "/trainers" },
    { name: "Event", path: "/event" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ]
  const categories = ["All", "Workshops", "Webinars", "Bootcamps", "Hackathons", "Conferences"]
  const events = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      date: "June 15, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Tech Hub, San Francisco",
      category: "Bootcamps",
      image: "/wb.jpeg?height=400&width=600",
      attendees: 45,
      description: "Intensive 8-hour bootcamp covering modern web development practices and frameworks.",
      featured: true,
    },
    {
      id: 2,
      title: "AI & Machine Learning Workshop",
      date: "July 10, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Innovation Center, New York",
      category: "Workshops",
      image: "/ai.jpeg?height=400&width=600",
      attendees: 32,
      description: "Hands-on workshop exploring the latest in AI and machine learning technologies.",
      featured: true,
    },
    {
      id: 3,
      title: "Future of Frontend Development",
      date: "August 5, 2025",
      time: "1:00 PM - 3:00 PM",
      location: "Virtual Event",
      category: "Webinars",
      image: "/fro.jpeg?height=400&width=600",
      attendees: 120,
      description: "Online webinar discussing emerging trends and technologies in frontend development.",
      featured: false,
    },
    {
      id: 4,
      title: "DevOps & Cloud Computing Conference",
      date: "September 20, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Tech Convention Center, Seattle",
      category: "Conferences",
      image: "/dev.jpeg?height=400&width=600",
      attendees: 250,
      description: "Full-day conference featuring industry leaders in DevOps and cloud technologies.",
      featured: true,
    },
    {
      id: 5,
      title: "Mobile App Development Hackathon",
      date: "October 15, 2025",
      time: "9:00 AM - 9:00 PM",
      location: "Startup Incubator, Austin",
      category: "Hackathons",
      image: "/hack.jpg?height=400&width=600",
      attendees: 75,
      description: "12-hour hackathon challenging participants to build innovative mobile applications.",
      featured: false,
    },
    {
      id: 6,
      title: "Cybersecurity Best Practices",
      date: "November 8, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Virtual Event",
      category: "Webinars",
      image: "/cybu.jpeg?height=400&width=600",
      attendees: 95,
      description: "Expert-led webinar on implementing robust cybersecurity measures in your applications.",
      featured: false,
    },
  ]
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  useEffect(() => {
    const filtered = events.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "All" || event.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    setFilteredEvents(filtered)
  }, [searchQuery, selectedCategory])
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }
  const handleViewDetails = (eventId) => {
    router.push(`/event/${eventId}`)
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav
        className={cn(
          "bg-white p-3 h-16 flex items-center fixed top-0 w-full shadow-md z-50 transition-all duration-300",
          isScrolled && "shadow-lg h-14",
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <h1 className="font-bold text-black text-lg ml-3">AceLevelUp</h1>
          </Link>
          {/* Mobile Menu Button */}
          <button className="md:hidden flex items-center" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 text-blue-950 mr-6">
            {navLinks.map(({ name, path }) => (
              <button
                key={name}
                onClick={() => router.push(path)}
                className="relative overflow-hidden text-md-400 text-gray-900 font-bold hover:text-blue-700 font-sans transition-colors"
              >
                {name}
              </button>
            ))}
          </div>
          {/* Mobile Navigation (Dropdown) */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center space-y-4">
              {navLinks.map(({ name, path }) => (
                <button
                  key={name}
                  onClick={() => {
                    router.push(path)
                    setMobileMenuOpen(false) // Close mobile menu on navigation
                  }}
                  className="text-gray-900 font-bold hover:text-black transition-colors"
                >
                  {name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-6 leading-tight">
              Upcoming <span className="text-purple-600">Events</span>
            </h1>
            <p className="text-xl text-purple-700 mb-10 max-w-3xl mx-auto">
              Join our interactive sessions led by industry experts and enhance your skills through hands-on learning
              experiences.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Category Filters */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-white text-indigo-700 hover:bg-indigo-50"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      {/* Featured Events */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents
              .filter((event) => event.featured)
              .map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                      {event.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">{event.title}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2 text-purple-500" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2 text-purple-500" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 text-purple-500" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-2 text-purple-500" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    <button
                      onClick={() => handleViewDetails(event.id)}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                    >
                      View Details <ChevronRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
      {/* All Events */}
      <section className="pb-24 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">All Upcoming Events</h2>
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {event.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">{event.title}</h3>
                    <div className="space-y-1 mb-3 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-3 w-3 mr-2 text-purple-500" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-3 w-3 mr-2 text-purple-500" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleViewDetails(event.id)}
                      className="w-full bg-gray-100 hover:bg-purple-600 text-purple-700 font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center text-sm"
                    >
                      View Details <ArrowRight className="ml-1 h-3 w-3" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h3 className="text-2xl font-bold text-gray-700 mb-3">No events found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("All")
                  }}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  Reset Filters
                </button>
              </motion.div>
            </div>
          )}
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Want to host your own event?</h2>
            <p className="text-indigo-200 text-xl mb-10">
              We provide venue and technical support for tech-related workshops, meetups, and training sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/contact")}
                className="bg-white text-indigo-700 hover:bg-indigo-50 font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Contact Us
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-gray-700 pb-6">
            <p className="text-center text-sm">
              Top companies choose <span className="text-violet-400 font-semibold">AceLevelUp</span> to build in-demand
              career skills.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-8">
            <div>
              <h3 className="font-semibold mb-3">Certifications</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="hover:text-violet-300 cursor-pointer transition-colors">AWS</li>
                <li className="hover:text-violet-300 cursor-pointer transition-colors">Microsoft</li>
                <li className="hover:text-violet-300 cursor-pointer transition-colors">Google Cloud</li>
                <li className="hover:text-violet-300 cursor-pointer transition-colors">Cisco</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Development</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="hover:text-violet-300 cursor-pointer transition-colors">Web Development</li>
                <li className="hover:text-violet-300 cursor-pointer transition-colors">Mobile Apps</li>
                <li className="hover:text-violet-300 cursor-pointer transition-colors">Game Development</li>
                <li className="hover:text-violet-300 cursor-pointer transition-colors">Database Design</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Business</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="hover:text-violet-300 cursor-pointer transition-colors">Marketing</li>
                <li className="hover:text-violet-300 cursor-pointer transition-colors">Analytics</li>
                <li className="hover:text-violet-300 cursor-pointer transition-colors">Management</li>
                <li className="hover:text-violet-300 cursor-pointer transition-colors">Finance</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="hover:text-violet-300 cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-violet-300 cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-violet-300 cursor-pointer transition-colors">Blog</li>
                <li className="hover:text-violet-300 cursor-pointer transition-colors">Press</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="hover:text-violet-300 cursor-pointer transition-colors">Terms</li>
                <li className="hover:text-violet-300 cursor-pointer transition-colors">Privacy</li>
                <li className="hover:text-violet-300 cursor-pointer transition-colors">Cookies</li>
                <li className="hover:text-violet-300 cursor-pointer transition-colors">Contact</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2025 AceLevelUp, Inc. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <span className="hover:text-violet-300 cursor-pointer transition-colors">Cookie Settings</span>
              <span className="flex items-center space-x-1">
                <span>🌍</span> <span>English</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
