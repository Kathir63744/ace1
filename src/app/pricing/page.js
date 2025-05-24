"use client"

import { useState, useEffect, useCallback } from "react"
import {
  GraduationCap,
  Clock,
  Star,
  Check,
  Shield,
  Gift,
  AlertCircle,
  Menu,
  X,
  Calendar,
  Users,
  BookOpen,
  Award,
  ChevronRight,
  Search,
} from "lucide-react"
import { cn } from "../../lib/utils"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

const courses = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    duration: "6 Months",
    startDate: "10th Apr '25",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    institute: "MIT Professional Education",
    courseType: "FullStack Development",
    rating: 4.8,
    students: 1245,
    price: 1499,
    features: [
      "24/7 Support",
      "Live Project Sessions",
      "Industry Expert Sessions",
      "Career Guidance",
      "Job Assistance",
      "Internship Opportunities",
    ],
    pricingTiers: [
      {
        name: "Standard",
        price: 1499,
        description: "Perfect for individual learners",
        features: ["Basic course access", "Community support", "Course completion certificate"],
      },
      {
        name: "Premium",
        price: 1999,
        description: "Enhanced learning experience",
        features: ["All Standard features", "1-on-1 mentoring", "Priority support", "Resume review"],
      },
    ],
    earlyBirdDiscount: 200,
    groupDiscount: "15% off for groups of 3+",
    popular: true,
  },
  {
    id: 2,
    title: "Advanced Digital Marketing",
    duration: "4 Months",
    startDate: "15th Apr '25",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    institute: "Harvard Business School",
    courseType: "Digital Marketing",
    rating: 4.7,
    students: 987,
    price: 999,
    features: [
      "Real Campaign Experience",
      "Google Ads Certification",
      "Social Media Strategy",
      "Analytics Training",
      "Portfolio Development",
      "Networking Events",
    ],
    pricingTiers: [
      {
        name: "Standard",
        price: 999,
        description: "Essential digital marketing skills",
        features: ["Course materials", "Practice tests", "Basic certification"],
      },
      {
        name: "Premium",
        price: 1499,
        description: "Complete marketing mastery",
        features: ["All Standard features", "Advanced workshops", "Campaign reviews", "Industry networking"],
      },
    ],
    earlyBirdDiscount: 150,
    groupDiscount: "10% off for groups of 3+",
    popular: false,
  },
  {
    id: 3,
    title: "Mobile App Development",
    duration: "5 Months",
    startDate: "20th Apr '25",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80",
    institute: "Stanford University",
    courseType: "App Development",
    rating: 4.9,
    students: 1102,
    price: 1299,
    features: [
      "iOS & Android Development",
      "UI/UX Design Principles",
      "App Store Optimization",
      "Cross-Platform Development",
      "App Security",
      "Publishing Support",
    ],
    pricingTiers: [
      {
        name: "Standard",
        price: 1299,
        description: "Core app development skills",
        features: ["Basic course access", "Community support", "Course completion certificate"],
      },
      {
        name: "Premium",
        price: 1799,
        description: "Advanced development mastery",
        features: ["All Standard features", "1-on-1 mentoring", "Priority support", "Resume review"],
      },
    ],
    earlyBirdDiscount: 200,
    groupDiscount: "15% off for groups of 3+",
    popular: true,
  },
  {
    id: 4,
    title: "Scrum Master Certification",
    duration: "3 Months",
    startDate: "20th Apr '25",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    institute: "Agile Alliance",
    courseType: "Scrum Master",
    rating: 4.6,
    students: 756,
    price: 899,
    features: [
      "Agile Methodologies",
      "Team Management",
      "Sprint Planning",
      "Risk Management",
      "Certification Preparation",
      "Case Studies",
    ],
    pricingTiers: [
      {
        name: "Standard",
        price: 899,
        description: "Essential Scrum knowledge",
        features: ["Basic course access", "Community support", "Course completion certificate"],
      },
      {
        name: "Premium",
        price: 1299,
        description: "Complete Scrum mastery",
        features: ["All Standard features", "1-on-1 mentoring", "Priority support", "Resume review"],
      },
    ],
    earlyBirdDiscount: 100,
    groupDiscount: "15% off for groups of 3+",
    popular: false,
  },
  {
    id: 5,
    title: "AI and Cyber-security",
    duration: "5 Months",
    startDate: "20th Apr '25",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    institute: "MIT Cybersecurity",
    courseType: "Cyber Security",
    rating: 4.9,
    students: 892,
    price: 1599,
    features: [
      "Ethical Hacking",
      "Network Security",
      "AI Integration",
      "Threat Detection",
      "Security Protocols",
      "Live Lab Sessions",
    ],
    pricingTiers: [
      {
        name: "Standard",
        price: 1599,
        description: "Core security fundamentals",
        features: ["Basic course access", "Community support", "Course completion certificate"],
      },
      {
        name: "Premium",
        price: 2199,
        description: "Advanced security expertise",
        features: ["All Standard features", "1-on-1 mentoring", "Priority support", "Resume review"],
      },
    ],
    earlyBirdDiscount: 250,
    groupDiscount: "15% off for groups of 3+",
    popular: true,
  },
  {
    id: 6,
    title: "Product Management",
    duration: "4 Months",
    startDate: "20th Apr '25",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
    institute: "Product School",
    courseType: "Product Management",
    rating: 4.8,
    students: 1045,
    price: 1199,
    features: [
      "Product Strategy",
      "Market Research",
      "User Experience",
      "Agile Development",
      "Product Analytics",
      "Leadership Skills",
    ],
    pricingTiers: [
      {
        name: "Standard",
        price: 1199,
        description: "Essential PM skills",
        features: ["Basic course access", "Community support", "Course completion certificate"],
      },
      {
        name: "Premium",
        price: 1699,
        description: "Advanced PM mastery",
        features: ["All Standard features", "1-on-1 mentoring", "Priority support", "Resume review"],
      },
    ],
    earlyBirdDiscount: 150,
    groupDiscount: "15% off for groups of 3+",
    popular: false,
  },
]

const categories = ["All Courses", "Development", "Marketing", "Management", "Security", "Certification"]

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Course", path: "/courses" },
  { name: "Trainers", path: "/trainers" },
  { name: "Event", path: "/event" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
]

export default function CoursesPage() {
  const router = useRouter()
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [selectedTier, setSelectedTier] = useState("Standard")
  const [showPricingModal, setShowPricingModal] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Courses")
  const [filteredCourses, setFilteredCourses] = useState(courses)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Filter courses based on search query and selected category
    const filtered = courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.courseType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.institute.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory =
        selectedCategory === "All Courses" ||
        (selectedCategory === "Development" &&
          (course.courseType.includes("Development") || course.courseType.includes("App"))) ||
        (selectedCategory === "Marketing" && course.courseType.includes("Marketing")) ||
        (selectedCategory === "Management" &&
          (course.courseType.includes("Management") || course.courseType.includes("Scrum"))) ||
        (selectedCategory === "Security" && course.courseType.includes("Security")) ||
        (selectedCategory === "Certification" && course.courseType.includes("Master"))

      return matchesSearch && matchesCategory
    })

    setFilteredCourses(filtered)
  }, [searchQuery, selectedCategory])

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev)
  }, [])

  const handleEnroll = (courseId) => {
    // Find the course
    const course = courses.find((c) => c.id === courseId)
    setSelectedCourse(course)
    setShowPricingModal(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
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

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Invest in Your Future with Our
              <span className="text-purple-600"> Premium Courses</span>
            </h1>
            <p className="text-xl text-blue-900 mb-10 max-w-3xl mx-auto">
              Choose from our industry-leading courses and transform your career with expert guidance and hands-on
              experience
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search courses by title, type or institute..."
                className="w-full pl-10 pr-4 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-purple-600 text-white shadow-lg"
                      : "bg-white text-blue-700 hover:bg-blue-50"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Pricing Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
            >
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Money-Back Guarantee</h3>
              <p className="text-gray-600">30-day satisfaction guarantee or your money back, no questions asked</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
            >
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <Gift className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Early Bird Discounts</h3>
              <p className="text-gray-600">Save up to $250 when you enroll early in any of our premium courses</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
            >
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <AlertCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Flexible Payment Plans</h3>
              <p className="text-gray-600">Split your payment into easy monthly installments at 0% interest</p>
            </motion.div>
          </div>

          {/* Course Cards Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  {/* Course Image */}
                  <div className="relative h-52">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-semibold">{course.rating}</span>
                    </div>
                    {course.earlyBirdDiscount && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Save ${course.earlyBirdDiscount}
                      </div>
                    )}
                    {course.popular && (
                      <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        Popular
                      </div>
                    )}
                  </div>

                  {/* Course Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-blue-900">{course.title}</h3>
                      <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-md font-medium">
                        {course.courseType}
                      </span>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-blue-500" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                        <span>Starts {course.startDate}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <GraduationCap className="w-4 h-4 mr-2 text-blue-500" />
                        <span>{course.institute}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2 text-blue-500" />
                        <span>{course.students.toLocaleString()} students</span>
                      </div>
                    </div>

                    {/* Pricing Tiers */}
                    <div className="mb-6">
                      <div className="flex gap-2 mb-4">
                        {course.pricingTiers.map((tier) => (
                          <button
                            key={tier.name}
                            onClick={() => setSelectedTier(tier.name)}
                            className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                              selectedTier === tier.name
                                ? "bg-purple-600 text-white"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                          >
                            {tier.name}
                          </button>
                        ))}
                      </div>
                      <div className="text-center mb-4">
                        <p className="text-3xl font-bold text-blue-600">
                          ${course.pricingTiers.find((t) => t.name === selectedTier)?.price}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {course.pricingTiers.find((t) => t.name === selectedTier)?.description}
                        </p>
                      </div>
                    </div>

                    {/* Features Preview */}
                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-blue-500" /> What you'll learn:
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {course.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-center text-gray-600">
                            <Check className="w-4 h-4 mr-1 text-green-500 flex-shrink-0" />
                            <span className="text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>
                      {course.features.length > 4 && (
                        <p className="text-blue-600 text-xs font-medium">+{course.features.length - 4} more</p>
                      )}
                    </div>

                    {/* Group Discount Badge */}
                    {course.groupDiscount && (
                      <div className="bg-blue-50 text-blue-700 p-3 rounded-lg text-sm text-center mb-6 flex items-center justify-center gap-2">
                        <Users className="w-4 h-4" />
                        <p className="font-semibold">{course.groupDiscount}</p>
                      </div>
                    )}

                    {/* Enroll Button */}
                    <button
                      onClick={() => handleEnroll(course.id)}
                      className="w-full bg-purple-600 text-white font-semibold py-3 rounded-xl hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      Enroll Now
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h3 className="text-2xl font-bold text-gray-700 mb-3">No courses found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("All Courses")
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  Reset Filters
                </button>
              </motion.div>
            </div>
          )}

          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 text-center"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Flexible Payment Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-left">
                  <div className="bg-blue-100 p-3 rounded-full inline-flex mb-3">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Monthly Installments</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-1 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>0% interest rate</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-1 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>No hidden fees</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-1 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Easy automatic payments</span>
                    </li>
                  </ul>
                </div>
                <div className="text-left">
                  <div className="bg-blue-100 p-3 rounded-full inline-flex mb-3">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Corporate Training</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-1 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Custom group rates</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-1 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Dedicated support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-1 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Flexible scheduling</span>
                    </li>
                  </ul>
                </div>
                <div className="text-left">
                  <div className="bg-blue-100 p-3 rounded-full inline-flex mb-3">
                    <Award className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Satisfaction Guarantee</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-1 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>30-day money back</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-1 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>No questions asked</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-1 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Risk-free trial period</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-4 max-w-3xl mx-auto">
              During your trial period, you will receive 2 credits that can be used to book either 2 group classes or 1
              private class. Your first payment will be taken 7 days after account activation (7-day trial period). You
              may cancel at any time during your free trial period.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="text-blue-600 hover:text-blue-700 font-medium">Learn more about our courses</button>
              <span className="text-gray-300 hidden sm:inline">|</span>
              <button className="text-blue-600 hover:text-blue-700 font-medium">Contact support</button>
            </div>
          </motion.div>
        </div>
      </div>
      <footer className="bg-gray-900 text-white py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-gray-700 pb-6">
            <p className="text-center text-sm">
              Top companies choose <span className="text-violet-400 font-semibold">AceLevelUp</span> to build
              in-demand career skills.
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
