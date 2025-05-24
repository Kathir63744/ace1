"use client"
import { useEffect, useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { X, Download, Phone, MessageCircle, Menu } from "lucide-react"
import {
  FaGoogle,
  FaLinkedin,
  FaGithub,
  FaPlay,
  FaStar,
  FaClock,
  FaUserTie,
  FaLightbulb,
  FaChalkboardTeacher,
  FaUsers,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa"
import Image from "next/image"
import SignUpForm from "./signup/page"
import SignInForm from "./signin/page"
import WebinarForm from "./webinarform/page"
import { cn } from "../lib/utils"

export default function Navbar() {
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Course", path: "/courses" },
    { name: "Trainers", path: "/trainers" },
    { name: "Event", path: "/event" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];
  const categories = [
    "ChatGPT",
    "Data Science",
    "Python",
    "Machine Learning",
    "Deep Learning",
    "AI",
    "Statistics",
    "Natural Language Processing",
  ]
  const reviews = [
    {
      name: "Saul Van Beurden",
      position: "Head of Technology, Wells Fargo",
      quote:
        "Investing in [our internal] technology college means investing in the people, in the talent... We do that together with AceLevelUp.",
      image: "/ava.jpeg",
    },
    {
      name: "Winston S.",
      position: "Cloud Architect",
      quote:
        "AceLevelUp is solely responsible for getting me from practically minimum wage to over six figures a year.",
      image: "/pro3.jpg",
    },
    {
      name: "Lauren Knausenberger",
      position: "Chief Transformation Officer, United States Air Force",
      quote:
        "With AceLevelUp, our airmen have access to high-quality, up-to-date technology content and can leverage Skill IQ assessments to track progress and map out a faster path for learning.",
      image: "/ava1.jpeg",
    },
  ]
  const instructors = [
    { name: "Strong Liang", title: "Engineering Manager", company: "Google", image: "/pro.jpg" },
  ]
  const learnerCourses = [
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp",
      instructor: "Dr. Angela Yu",
      rating: 4.7,
      reviews: "354,755",
      price: "₹549",
      originalPrice: "₹3,299",
      tags: ["Premium", "Bestseller"],
      image: "/learn1.jpg",
    },
    {
      title: "The Complete Full-Stack Web Development Bootcamp",
      instructor: "Dr. Angela Yu",
      rating: 4.7,
      reviews: "426,937",
      price: "₹499",
      originalPrice: "₹3,099",
      tags: ["Premium", "Bestseller"],
      image: "/learn2.png",
    },
    {
      title: "Ultimate AWS Certified Cloud Practitioner CLF-C02 2025",
      instructor: "Stephane Maarek",
      rating: 4.7,
      reviews: "239,456",
      price: "₹549",
      originalPrice: "₹3,499",
      tags: ["Premium", "Bestseller"],
      image: "/learn3.jpeg",
    },
  ]
  const courses = [
    {
      title: "ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More",
      author: "Julian Melanson, Benza Maman",
      rating: 4.5,
      reviews: "44,652",
      price: "₹499",
      oldPrice: "₹2,699",
      bestseller: true,
      image: "/chatgpt.jpg",
    },
    {
      title: "The Complete AI-Powered Copywriting Course & ChatGPT",
      author: "Ing. Tomas Moravek",
      rating: 4.2,
      reviews: "1,759",
      price: "₹499",
      oldPrice: "₹3,099",
      bestseller: false,
      image: "/chatgpt1.jpg",
    },
    {
      title: "ChatGPT, Midjourney, Gemini, DeepSeek: Marketing Tools",
      author: "Anton Voroniuk",
      rating: 4.5,
      reviews: "494",
      price: "₹499",
      oldPrice: "₹799",
      bestseller: false,
      image: "/chatgpt2.jpg",
    },
    {
      title: "Mastering SEO With ChatGPT: Ultimate Beginner's Guide",
      author: "Anton Voroniuk",
      rating: 4.4,
      reviews: "255",
      price: "₹499",
      oldPrice: "₹799",
      bestseller: false,
      image: "/chatgpt3.jpg",
    },
  ]
  const testimonials = [
    {
      name: "Instructor 1",
      title: "How I got into Google India",
      img: "/coursevideo.png",
      videoLink:
        "https://youtu.be/o21LkcxuLx8?si=zTWU9oq6i1uI3IsF",
    },
    {
      name: "Instructor 2",
      title: "How I got into AWS",
      img: "/coursevideo1.png",
      videoLink: "https://youtu.be/j3DsRK0IBfs?si=wQxFBqbqFBboc3nJ",
    },
    {
      name: "Instructor 3",
      title: "How I got a 2X hike",
      img: "/coursevideo2.png",
      videoLink: "https://www.youtube.com/watch?v=0vUNlnqIJ0w&pp=ygUhaG93IGkgZ290IDJ4IGhpa2Ugc3VzaGlsIGhpcmVtYXRo",
    },
  ]
  
  // State management
  const [user, setUser] = useState(null)
  const [show, setShow] = useState(true)
  const [activeCategory, setActiveCategory] = useState("ChatGPT")
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const [showTimer, setShowTimer] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 1, minutes: 0, seconds: 0 })
  const [showWebinarModal, setShowWebinarModal] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [showCall, setShowCall] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [hoveredCourse, setHoveredCourse] = useState(null)
  const [windowWidth, setWindowWidth] = useState(0)

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    
    setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Other effects
  useEffect(() => {
    const handleScroll = () => {
      setShowTimer(window.scrollY > 100)
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [reviews.length])

  const handleLogout = useCallback(() => {
    localStorage.removeItem("user")
    setUser(null)
    router.push("/signin")
  }, [router])

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev)
  }, [])

  const formatTime = (value) => {
    return String(value).padStart(2, "0")
  }

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="relative">
        <nav
          className={cn(
            "bg-white p-3 h-16 flex items-center fixed top-0 w-full shadow-md z-50 transition-all duration-300",
            isScrolled && "shadow-lg h-14"
          )}
        >
          <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
            {/* Logo */}
            <div className="flex items-center">
              <Image 
                src="/logoref1.png" 
                alt="Logo" 
                width={50} 
                height={50} 
                className="h-10 w-10 sm:h-12 sm:w-12" 
              />
              <h1 className="font-bold text-black text-sm sm:text-lg ml-2 sm:ml-3">AceLevelUp</h1>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden flex items-center" 
              onClick={toggleMobileMenu} 
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4 lg:space-x-8 text-blue-950">
              {navLinks.map(({ name, path }) => (
                <button
                  key={name}
                  onClick={() => router.push(path)}
                  className="relative overflow-hidden text-sm lg:text-md text-gray-900 font-bold hover:text-purple-700 font-sans transition-colors"
                >
                  {name}
                </button>
              ))}
            </div>
            
            {/* Mobile Navigation (Dropdown) */}
            {mobileMenuOpen && (
              <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center space-y-4 z-50">
                {navLinks.map(({ name, path }) => (
                  <button
                    key={name}
                    onClick={() => {
                      router.push(path);
                      setMobileMenuOpen(false);
                    }}
                    className="text-gray-900 font-bold hover:text-black transition-colors text-sm"
                  >
                    {name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="pt-16">
        {/* Webinar Section */}
        <section className="flex flex-col lg:flex-row mt-5 sm:mt-10 items-start justify-between px-4 sm:px-8 md:px-16 lg:px-16 xl:px-32 py-8 sm:py-12 bg-white gap-6 sm:gap-8">
          {/* Left Section */}
          <div className="max-w-2xl lg:max-w-3xl w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-4 sm:mb-8">
              Get{" "}
              <span className="text-violet-600 relative">
                Ace Level Up
                <span className="absolute bottom-1 left-0 w-full h-2 bg-violet-200 -z-10"></span>
              </span>{" "}
              Experience the Better Way
            </h1>
            <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-700 mb-6 sm:mb-10">
              <li className="flex items-center">
                <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 mr-2 bg-green-100 text-green-600 rounded-full">
                  ✓
                </span>
                Designed by 500+ FAANG experts
              </li>
              <li className="flex items-center">
                <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 mr-2 bg-green-100 text-green-600 rounded-full">
                  ✓
                </span>
                Live training and mock interviews
              </li>
              <li className="flex items-center">
                <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 mr-2 bg-green-100 text-green-600 rounded-full">
                  ✓
                </span>
                17,000+ tech professionals trained
              </li>
            </ul>
            <div className=" border-l-4 border-orange-500 rounded-lg p-3 sm:p-4 mb-6 sm:mb-10">
              <p className="text-gray-800 text-sm sm:text-base">
                <span className="font-semibold">Best suitable for:</span> Software Professionals with{" "}
                <span className="font-semibold text-orange-600">5+ years</span> of experience.
              </p>
            </div>
          
            {showModal && (
              <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
                <WebinarForm closeModal={() => setShowModal(false)} />
              </div>
            )}
            <div className="text-gray-700">
              <p className="font-semibold text-sm sm:text-base mb-2 sm:mb-4">NEXT WEBINAR STARTS IN</p>
              <div className="flex space-x-3 sm:space-x-6">
                <div className="bg-gray-100 rounded-lg p-2 sm:p-3 text-center w-12 sm:w-16">
                  <div className="text-xl sm:text-2xl font-bold text-violet-600">{formatTime(timeLeft.days)}</div>
                  <div className="text-xs text-gray-500 mt-1">DAYS</div>
                </div>
                <div className="bg-gray-100 rounded-lg p-2 sm:p-3 text-center w-12 sm:w-16">
                  <div className="text-xl sm:text-2xl font-bold text-violet-600">{formatTime(timeLeft.hours)}</div>
                  <div className="text-xs text-gray-500 mt-1">HOURS</div>
                </div>
                <div className="bg-gray-100 rounded-lg p-2 sm:p-3 text-center w-12 sm:w-16">
                  <div className="text-xl sm:text-2xl font-bold text-violet-600">{formatTime(timeLeft.minutes)}</div>
                  <div className="text-xs text-gray-500 mt-1">MINS</div>
                </div>
                <div className="bg-gray-100 rounded-lg p-2 sm:p-3 text-center w-12 sm:w-16">
                  <div className="text-xl sm:text-2xl font-bold text-violet-600">{formatTime(timeLeft.seconds)}</div>
                  <div className="text-xs text-gray-500 mt-1">SECS</div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="group w-full lg:w-auto px-6 py-3 sm:px-10 sm:py-4 bg-violet-600 text-white font-semibold rounded-lg sm:rounded-xl 
                        hover:bg-violet-700 transition-all duration-300 mt-10
                        border border-violet-500/30 mb-6 sm:mb-8 shadow-lg hover:shadow-violet-500/20
                        flex  text-sm sm:text-base"
            >
              Register for our FREE webinar
              <FaArrowRight className="ml-5 mt-1 group-hover:translate-x-1  transition-transform" />
            </button>
          </div>
          
          {/* Right Section */}
          <div className="flex flex-col items-start w-full lg:w-auto lg:ml-8 xl:ml-12">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[400px] xl:w-[450px]">
              {instructors.map((instructor, index) => (
                <div
                  key={index}
                  className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
                >
                  <Image
                    src={instructor.image || "/placeholder.svg"}
                    alt={instructor.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-3">
                    <p className="text-white font-semibold text-sm sm:text-base">{instructor.name}</p>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      {instructor.title} - {instructor.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 sm:mt-8 w-full">
              <div className="flex flex-col items-center">
                <p className="text-gray-600 text-sm sm:text-base">or sign up using:</p>
                <div className="flex space-x-3 sm:space-x-4 mt-3 sm:mt-4">
                  <button className="p-2 sm:p-3 bg-white shadow-md rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <FaGoogle className="text-red-500 text-xl sm:text-2xl" />
                  </button>
                  <button className="p-2 sm:p-3 bg-white shadow-md rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <FaLinkedin className="text-blue-700 text-xl sm:text-2xl" />
                  </button>
                  <button className="p-2 sm:p-3 bg-white shadow-md rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <FaGithub className="text-gray-800 text-xl sm:text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <div className="p-4 sm:p-6 max-w-7xl mx-auto">
          {/* Header */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">All the skills you need in one place</h1>
          <p className="text-gray-700 mt-1 sm:mt-2 text-sm sm:text-base">
            From critical skills to technical topics, AceLevelUp supports your professional development.
          </p>
          
          {/* Category Tabs */}
          <div className="flex space-x-2 sm:space-x-4 mt-4 sm:mt-6 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? "bg-violet-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Course Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white text-black p-3 sm:p-4 shadow-md rounded-lg border border-gray-100 transition-all duration-300 hover:shadow-xl"
                onMouseEnter={() => setHoveredCourse(index)}
                onMouseLeave={() => setHoveredCourse(null)}
              >
                <div className="relative overflow-hidden rounded-md">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="rounded-md w-full transition-transform duration-500 hover:scale-105 aspect-video"
                  />
                  {hoveredCourse === index && (
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 animate-fadeIn">
                      <button className="bg-white text-gray-800 px-3 py-1 sm:px-4 sm:py-2 rounded-md font-medium text-xs sm:text-sm">
                        Preview Course
                      </button>
                    </div>
                  )}
                </div>
                <h2 className="font-bold mt-3 sm:mt-4 text-sm sm:text-lg line-clamp-2 h-12 sm:h-14">{course.title}</h2>
                <p className="text-gray-600 text-xs sm:text-sm">{course.author}</p>
                <div className="flex items-center text-yellow-500 mt-1 text-xs sm:text-sm">
                  <FaStar className="mr-1" /> {course.rating}
                  <span className="text-gray-500 ml-1">({course.reviews})</span>
                </div>
                <div className="flex items-center mt-2">
                  <span className="text-sm sm:text-lg font-bold">{course.price}</span>
                  <span className="text-gray-500 line-through ml-2 text-xs sm:text-sm">{course.oldPrice}</span>
                </div>
                <div className="mt-2 flex gap-1 sm:gap-2">
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-md font-medium">
                    Premium
                  </span>
                  {course.bestseller && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-md font-medium">
                      Bestseller
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <button className="mt-4 sm:mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition-colors flex items-center text-sm sm:text-base mx-auto">
            Show all {activeCategory} courses
            <ChevronRight className="ml-2" />
          </button>
        </div>

        {/* Image Grid Section */}
        <section className="bg-blue-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-12 xl:px-20 flex flex-col lg:flex-row items-center">
          {/* Left Side - Full-Width Image Layout */}
          <div className="relative grid grid-cols-2 gap-3 sm:gap-4 lg:w-1/2 w-full">
            {/* Large Image */}
            <div className="relative col-span-2 h-48 sm:h-64 md:h-80 rounded-xl overflow-hidden shadow-lg bg-white border border-gray-300 transform transition-transform hover:scale-105">
              <Image
                src="/istockphoto-973718370-2048x2048.jpg"
                alt="Image 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            {/* Smaller Images */}
            <div className="relative h-40 sm:h-48 md:h-60 rounded-xl overflow-hidden shadow-lg bg-white border border-gray-300 transform transition-transform hover:scale-105">
              <Image src="/g2.jpg" alt="Image 2" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div className="relative h-40 sm:h-48 md:h-60 rounded-xl overflow-hidden shadow-lg bg-white border border-gray-300 transform transition-transform hover:scale-105">
              <Image src="/g4.jpg" alt="Image 3" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="lg:w-1/2 mt-6 sm:mt-8 lg:mt-0 lg:ml-8 xl:ml-12 w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Learner outcomes on AceLevelUp</h2>
            <p className="text-gray-700 mt-2 sm:mt-4 text-sm sm:text-base">
              <strong className="font-bold text-black">77% of learners report career benefits</strong>, such as new
              skills, increased pay, and new job opportunities.{" "}
              <a href="#" className="text-violet-600 font-medium hover:underline text-sm sm:text-base">
                2025 AceLevelUp Learner Outcomes Report
              </a>
            </p>
            <button className="mt-4 sm:mt-6 bg-violet-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md font-medium hover:bg-violet-700 transition-colors flex items-center text-sm sm:text-base group">
              Join for Free
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-blue-50 py-8 sm:py-12 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">We asked our students how our program helped them</h2>
            <p className="text-gray-600 text-sm sm:text-base">Here's what they said</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`relative group bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 ${
                    activeTestimonial === index ? "scale-105 border-2 border-violet-300" : "hover:shadow-xl"
                  }`}
                >
                  <div className="relative aspect-video">
                    <Image
                      src={testimonial.img || "/placeholder.svg"}
                      width={400}
                      height={250}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={testimonial.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-2 sm:p-3 rounded-full transform transition-transform duration-300 hover:scale-110"
                        aria-label={`Watch ${testimonial.title} video`}
                      >
                        <FaPlay className="text-violet-600 text-lg sm:text-xl" />
                      </a>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 text-left">
                    <h3 className="text-violet-600 font-bold text-sm sm:text-base">{testimonial.title}</h3>
                    <p className="text-gray-800 font-medium text-xs sm:text-sm">{testimonial.name}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Ratings Section */}
            <div className="mt-8 sm:mt-12 flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              <div className="flex items-center space-x-2 bg-white p-2 sm:p-3 rounded-lg shadow-md">
                <Image src="/google-2015-logo-3649.png" width={80} height={30} alt="Google" className="w-16 sm:w-20" />
                <span className="text-sm sm:text-lg text-black font-bold">5.0 ⭐⭐⭐⭐⭐</span>
              </div>
              <div className="flex items-center space-x-2 bg-white p-2 sm:p-3 rounded-lg shadow-md">
                <Image src="/google-2015-logo-3649.png" width={80} height={30} alt="Yelp" className="w-16 sm:w-20" />
                <span className="text-sm sm:text-lg text-black font-bold">4.5 ⭐⭐⭐⭐⭐</span>
              </div>
              <div className="flex items-center space-x-2 bg-white p-2 sm:p-3 rounded-lg shadow-md">
                <Image src="/google-2015-logo-3649.png" width={80} height={30} alt="Course Report" className="w-16 sm:w-20" />
                <span className="text-sm sm:text-lg text-black font-bold">4.8 ⭐⭐⭐⭐⭐</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Companies Section */}
        <div className="bg-white py-8 sm:py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        <div className="bg-white-900 py-12 px-6 sm:px-8 border-t border-b border-gray-800">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-sm font-mono text-black-400 mb-4 tracking-widest">TRUSTED BY THE BEST</p>
    <h3 className="text-2xl sm:text-3xl font-bold text-black mb-10">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-400">
        16,000+
      </span> companies worldwide
    </h3>
    
    <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
      {['/vk.png', '/Samsung.png', '/visa.png', '/vimeo.webp', '/card.png'].map((logo, index) => (
        <div key={index} className="relative group">
          <div className="absolute inset-0 bg-cyan-400 rounded-lg opacity-0 group-hover:opacity-10 blur-sm transition-all duration-500"></div>
          <div className="relative w-24 h-16 sm:w-28 sm:h-20 flex items-center justify-center p-2">
            <Image 
              src={logo} 
              alt="Partner logo" 
              width={120} 
              height={80}
              className="object-contain w-full h-full grayscale brightness-200 contrast-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
          
          {/* Course Carousel */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Learner is viewing</h2>
          <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {learnerCourses.map((course, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-video">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <button
                      className="bg-white rounded-full p-1 sm:p-2 shadow-md hover:bg-gray-100 transition-colors"
                      aria-label="Save course"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base line-clamp-2 h-12">{course.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{course.instructor}</p>
                  <div className="flex items-center mt-1 sm:mt-2 text-yellow-500 text-xs sm:text-sm">
                    <FaStar /> <span className="ml-1 font-bold">{course.rating}</span>
                    <span className="text-gray-500 ml-2">({course.reviews})</span>
                  </div>
                  <div className="flex items-center mt-1 sm:mt-2">
                    <span className="font-bold text-sm sm:text-lg text-gray-900">{course.price}</span>
                    <span className="text-gray-500 line-through ml-2 text-xs sm:text-sm">{course.originalPrice}</span>
                  </div>
                  <div className="flex gap-1 sm:gap-2 mt-2 sm:mt-3">
                    {Array.isArray(course.tags) &&
                      course.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`text-xs font-semibold px-1 sm:px-2 py-1 rounded-lg ${
                            tag === "Premium" ? "bg-purple-100 text-purple-800" : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-8 sm:py-12 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            {/* Left Side Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                Elevate Your Tech Career <br className="hidden sm:block" /> with Expert-Led Webinars
              </h2>
              <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-700">
                Join industry leaders and enhance your skills in system design, algorithms, and mock interviews.
              </p>
              <button className="mt-4 sm:mt-6 bg-violet-600 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:bg-violet-700 transition-all duration-300 shadow-lg hover:shadow-violet-500/20 flex items-center group">
                Register for FREE Webinar
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Right Side Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              <FeatureCard
                icon={FaUserTie}
                title="Expert Instructors"
                desc="Learn from FAANG tech leads with real-world experience."
              />
              <FeatureCard
                icon={FaChalkboardTeacher}
                title="1:1 Teaching"
                desc="Personalized coaching and guidance for your interview prep."
              />
              <FeatureCard
                icon={FaUsers}
                title="Mock Interviews"
                desc="Practice real-world interviews with experienced engineers."
              />
              <FeatureCard
                icon={FaChartLine}
                title="Career Growth"
                desc="Resume building, LinkedIn optimization, and branding."
              />
              <FeatureCard
                icon={FaLightbulb}
                title="Problem Solving"
                desc="Master 60+ coding patterns with 350+ challenges."
              />
              <FeatureCard
                icon={FaClock}
                title="Feedback & Insights"
                desc="Structured feedback to improve your performance."
              />
            </div>
          </div>
        </section>

        {/* Program Benefits Section */}
        <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-8 sm:py-12 px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900">
            Our program is tailored for{" "}
            <span className="text-violet-600 underline decoration-2 decoration-dotted">dedicated professionals</span>
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-4 sm:p-6 bg-white shadow-lg rounded-xl border border-gray-200 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <span className="text-violet-600 text-xl sm:text-2xl">✔</span>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">Flexible & Remote</h3>
              </div>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">Join live sessions from anywhere at your convenience.</p>
            </div>
            <div className="p-4 sm:p-6 bg-white shadow-lg rounded-xl border border-gray-200 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <span className="text-violet-600 text-xl sm:text-2xl">✔</span>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">Work-Life Balance</h3>
              </div>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">A well-structured schedule that fits your professional life.</p>
            </div>
            <div className="p-4 sm:p-6 bg-white shadow-lg rounded-xl border border-gray-200 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <span className="text-violet-600 text-xl sm:text-2xl">✔</span>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">Extended Support</h3>
              </div>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">6-month mentorship, mock interviews, and career guidance.</p>
            </div>
          </div>
        </section>

        {/* Trends Section */}
        <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Left Text Section */}
          <div className="md:w-1/2 space-y-2 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Top trends for the future of work</h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              Our 2025 Global Learning & Skills Trends Report is out now! Find out how to build the skills to keep pace
              with change.
            </p>
            <button className="px-4 py-2 sm:px-6 sm:py-3 border border-violet-600 text-violet-600 font-semibold rounded-md hover:bg-violet-600 hover:text-white transition-all duration-300 flex items-center text-sm sm:text-base group">
              Get the report
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {/* Right Image Section */}
          <div className="md:w-1/2 flex justify-center relative mt-6 sm:mt-8 md:mt-0">
            <div className="relative w-[280px] h-[200px] sm:w-[350px] sm:h-[250px] md:w-[400px] md:h-[280px] lg:w-[500px] lg:h-[350px] transform transition-all duration-500 hover:scale-105">
              <Image src="/top.jpeg" alt="Trends Report Cover" layout="fill" objectFit="contain" />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-8 w-[200px] h-[140px] sm:w-[250px] sm:h-[180px] md:w-[300px] md:h-[200px] lg:w-[350px] lg:h-[250px] rotate-6 shadow-lg transform transition-all duration-500 hover:rotate-3">
              <Image src="/top1.jpeg" alt="Trends Report Inside Page" layout="fill" objectFit="contain" />
            </div>
          </div>
        </section>

        {/* Expert Reviews Section */}
        <section className="py-8 sm:py-12 bg-gray-100">
          <div className="max-w-6xl mx-auto text-center px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">What our experts are saying</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg p-4 sm:p-6 shadow-lg flex flex-col items-center text-center transform transition-all duration-300 ${
                    activeTestimonial === index ? "scale-105 border-2 border-violet-300" : "hover:shadow-xl"
                  }`}
                >
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4">
                    <img
                      src={review.image || "/placeholder.svg"}
                      alt={review.name}
                      className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
                    />
                    <div
                      className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24 bg-no-repeat bg-contain"
                      style={{ backgroundImage: "url('/brushstroke.png')" }}
                    ></div>
                  </div>
                  <p className="text-gray-700 mb-3 sm:mb-4 italic text-xs sm:text-sm">"{review.quote}"</p>
                  <h3 className="font-bold text-violet-600 text-sm sm:text-base">{review.name}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm">{review.position}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-b from-white to-blue-100 py-8 sm:py-12 px-4 sm:px-6 flex justify-center">
          <div className="bg-blue-50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg flex flex-col md:flex-row items-center max-w-4xl w-full">
            <div className="text-left md:w-2/3">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900">
                Ready to crush your interview? <br className="hidden sm:block" /> Let's do it!
              </h2>
              <p className="mt-2 sm:mt-4 text-gray-700 text-sm sm:text-base">
                If you've made it this far, you must be at least a little curious. Talk to our founding team to take the
                first step toward your goals.
              </p>
              <button className="mt-4 sm:mt-6 bg-violet-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold text-sm sm:text-base md:text-lg shadow-md hover:bg-violet-700 transition-all duration-300 flex items-center group">
                Register for our FREE webinar
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="mt-4 sm:mt-6 text-gray-900 font-semibold text-sm sm:text-base">
                NEXT WEBINAR STARTS IN
                <div className="flex space-x-2 sm:space-x-4 text-violet-600 text-lg sm:text-xl font-bold mt-1 sm:mt-2">
                  <div className="bg-white rounded p-1 sm:p-2 w-10 sm:w-12 text-center">{formatTime(timeLeft.days)}</div>
                  <div className="bg-white rounded p-1 sm:p-2 w-10 sm:w-12 text-center">{formatTime(timeLeft.hours)}</div>
                  <div className="bg-white rounded p-1 sm:p-2 w-10 sm:w-12 text-center">{formatTime(timeLeft.minutes)}</div>
                  <div className="bg-white rounded p-1 sm:p-2 w-10 sm:w-12 text-center">{formatTime(timeLeft.seconds)}</div>
                </div>
                <div className="flex space-x-2 sm:space-x-4 text-xs text-gray-500 mt-1">
                  <div className="w-10 sm:w-12 text-center">DAYS</div>
                  <div className="w-10 sm:w-12 text-center">HOURS</div>
                  <div className="w-10 sm:w-12 text-center">MINS</div>
                  <div className="w-10 sm:w-12 text-center">SECS</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center mt-4 sm:mt-6 md:mt-0">
              <img
                src="/Trainer-Desain-Logo.png"
                alt="Webinar Speaker"
                className="w-32 sm:w-40 md:w-48 lg:w-64 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        </section>
{/* Fixed Action Buttons - Preserved Structure with Mobile Optimizations */}
<div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col space-y-2 z-50">
  {/* Download Brochure */}
  <button className="flex items-center justify-center bg-violet-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full sm:rounded-lg shadow-md hover:bg-violet-700 transition-all duration-300 text-xs sm:text-sm min-w-[40px] sm:min-w-auto">
    <Download size={16} className="sm:size-[18px]" />
    <span className="hidden sm:inline ml-1">Download Brochure</span>
  </button>
  
  {/* Talk to Us */}
  <div className="relative">
    <button
      onClick={() => setShowCall(!showCall)}
      className="flex items-center justify-center bg-blue-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full sm:rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 text-xs sm:text-sm min-w-[40px] sm:min-w-auto"
    >
      <Phone size={16} className="sm:size-[18px]" />
      <span className="hidden sm:inline ml-1">Talk to us</span>
    </button>
    
    {showCall && (
      <div className="absolute right-0 bottom-full mb-2 mr-0 sm:mr-2 bg-white p-3 shadow-lg rounded-lg border border-gray-200 animate-fadeIn text-left w-[160px] sm:w-auto">
        <p className="text-gray-700 text-xs sm:text-sm">Call us at:</p>
        <p className="font-semibold text-sm sm:text-base">+1 234 567 890</p>
      </div>
    )}
  </div>
  
  {/* Chat with Us */}
  <div className="relative">
    <button
      onClick={() => setShowChat(!showChat)}
      className="flex items-center justify-center bg-green-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full sm:rounded-lg shadow-md hover:bg-green-600 transition-all duration-300 text-xs sm:text-sm min-w-[40px] sm:min-w-auto"
    >
      <MessageCircle size={16} className="sm:size-[18px]" />
      <span className="hidden sm:inline ml-1">Chat with us</span>
    </button>
    
    {showChat && (
      <div className="absolute right-0 bottom-full mb-2 mr-0 sm:mr-2 bg-white p-3 shadow-lg rounded-lg border border-gray-200 animate-fadeIn text-left w-[160px] sm:w-auto">
        <p className="text-gray-700 text-xs sm:text-sm">Chat via WhatsApp:</p>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          className="text-green-600 font-semibold hover:underline flex items-center text-sm sm:text-base"
          rel="noreferrer"
        >
          Open Chat <FaArrowRight className="ml-1" />
        </a>
      </div>
    )}
  </div>
</div>

{/* Cookie Banner - Preserved Structure with Mobile Optimizations */}
{show && (
  <div className="fixed bottom-0 left-0 right-0 bg-[#0b0b27] text-white p-4 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-6 z-40 animate-slideUp">
    <div className="flex-1 text-center sm:text-left">
      <p className="text-sm sm:text-base">
        We use cookies to enhance your experience and improve our services.{" "}
        <button 
          className="text-purple-300 hover:text-white underline transition-colors"
          onClick={() => {/* Add your learn more action here */}}
        >
          Learn more
        </button>
      </p>
    </div>
    
    <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
      <button 
        className="bg-[#3d348b] text-white px-4 py-2 rounded-lg hover:bg-[#2a2561] transition-colors flex-1 sm:flex-none text-sm sm:text-base"
        onClick={() => {/* Add cookie settings action */}}
      >
        Settings
      </button>
      <button 
        className="bg-white text-[#0b0b27] px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors flex-1 sm:flex-none text-sm sm:text-base font-medium"
        onClick={() => setShow(false)}
      >
        Accept All
      </button>
      <button
        onClick={() => setShow(false)}
        className="hidden sm:flex text-gray-400 hover:text-white transition-colors p-1"
        aria-label="Close"
      >
        <X size={20} />
      </button>
    </div>
  </div>
)}

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 sm:py-10 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="border-b border-gray-700 pb-4 sm:pb-6">
              <p className="text-center text-xs sm:text-sm">
                Top companies choose <span className="text-violet-400 font-semibold">AceLevelUp</span> to build
                in-demand career skills.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 py-6 sm:py-8">
              <div>
                <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Certifications</h3>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                  <li className="hover:text-violet-300 cursor-pointer transition-colors">AWS</li>
                  <li className="hover:text-violet-300 cursor-pointer transition-colors">Microsoft</li>
                  <li className="hover:text-violet-300 cursor-pointer transition-colors">Google Cloud</li>
                  <li className="hover:text-violet-300 cursor-pointer transition-colors">Cisco</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Development</h3>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                  <li className="hover:text-violet-300 cursor-pointer transition-colors">Web Development</li>
                  <li className="hover:text-violet-300 cursor-pointer transition-colors">Mobile Apps</li>
                  <li className="hover:text-violet-300 cursor-pointer transition-colors">Game Development</li>
                  <li className="hover:text-violet-300 cursor-pointer transition-colors">Database Design</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Business</h3>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                  <li className="hover:text-violet-300 cursor-pointer transition-colors">Marketing</li>
                  <li className="hover:text-violet-300 cursor-pointer transition-colors">Analytics</li>
                  <li className="hover:text-violet-300 cursor-pointer transition-colors">Management</li>
                  <li className="hover:text-violet-300 cursor-pointer transition-colors">Finance</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Company</h3>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                  <li className="hover:text-violet-300 cursor-pointer transition-colors">About Us</li>
                  <li className="hover:text-violet-300 cursor-pointer transition-colors">Careers</li>
                  <li className="hover:text-violet-300 cursor-pointer transition-colors">Blog</li>
                  <li className="hover:text-violet-300 cursor-pointer transition-colors">Press</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Legal</h3>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                  <li className="hover:text-violet-300 cursor-pointer transition-colors">Terms</li>
                  <li className="hover:text-violet-300 cursor-pointer transition-colors">Privacy</li>
                  <li className="hover:text-violet-300 cursor-pointer transition-colors">Cookies</li>
                  <li className="hover:text-violet-300 cursor-pointer transition-colors">Contact</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-3 sm:pt-4 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-400">
              <p>© 2025 AceLevelUp, Inc. All rights reserved.</p>
              <div className="flex space-x-2 sm:space-x-4 mt-2 md:mt-0">
                <span className="hover:text-violet-300 cursor-pointer transition-colors">Cookie Settings</span>
                <span className="flex items-center space-x-1">
                  <span>🌍</span> <span>English</span>
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="bg-white p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl shadow-md flex space-x-2 sm:space-x-3 md:space-x-4 items-start hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="text-violet-600 text-xl sm:text-2xl md:text-3xl">
        <Icon />
      </div>
      <div>
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-xs sm:text-sm mt-1">{desc}</p>
      </div>
    </div>
  )
}

function ChevronRight(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}