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
import { cn } from "@/lib/utils"
import path from "path"
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
      name: "Rajya Vardhan Mishra",
      title: "How I got into Google India",
      img: "/video1.avif",
      videoLink:
        "https://www.youtube.com/watch?v=NgqNA1I1IFg&pp=ygUuaG93IGkgZ290IGEgam9iIGF0IGdvb2dsZSByYWp5YSB2YXJkaGFuIG1pc2hyYQ%3D%3D",
    },
    {
      name: "Sanjog Jadhav",
      title: "How I got into AWS",
      img: "/video2.avif",
      videoLink: "https://www.youtube.com/watch?v=Of_3aS0yZXE&pp=ygUhaG93IGkgZ290IGEgam9iIGF3cyBzYW5qb2cgamFkaGF2",
    },
    {
      name: "Sushil Hiremath",
      title: "How I got a 2X hike",
      img: "/video3.avif",
      videoLink: "https://www.youtube.com/watch?v=0vUNlnqIJ0w&pp=ygUhaG93IGkgZ290IDJ4IGhpa2Ugc3VzaGlsIGhpcmVtYXRo",
    },
  ]
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
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
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
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center ml-14">
              <Image src="/logoref1.png" alt="Logo" width={50} height={50} className="h-12 w-12" />
              <h1 className="font-bold text-black text-lg ml-3">AceLevelUp</h1>
            </div>
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
                  className="relative overflow-hidden text-md-400 text-gray-900 font-bold hover:text-purple-700 font-sans transition-colors"
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
                      router.push(path);
                      setMobileMenuOpen(false);
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
      </div>
      {/* Main Content */}
      <div className="pt-16">
        {/* Webinar Section */}
        <section className="flex flex-col lg:flex-row mt-10 items-start justify-between px-8 md:px-16 lg:px-32 py-12 bg-white gap-8">
          {/* Left Section */}
          <div className="max-w-2xl lg:max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-8">
              Get{" "}
              <span className="text-violet-600 relative">
                Ace Level Up
                <span className="absolute bottom-1 left-0 w-full h-2 bg-violet-200 -z-10"></span>
              </span>{" "}
              Experience the Better Way
            </h1>
            <ul className="space-y-4 text-lg text-gray-700 mb-10">
              <li className="flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-green-100 text-green-600 rounded-full">
                  ✓
                </span>
                Designed by 500+ FAANG experts
              </li>
              <li className="flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-green-100 text-green-600 rounded-full">
                  ✓
                </span>
                Live training and mock interviews
              </li>
              <li className="flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-green-100 text-green-600 rounded-full">
                  ✓
                </span>
                17,000+ tech professionals trained
              </li>
            </ul>
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-500 rounded-lg p-4 mb-10">
              <p className="text-gray-800 text-lg">
                <span className="font-semibold">Best suitable for:</span> Software Professionals with{" "}
                <span className="font-semibold text-orange-600">5+ years</span> of experience.
              </p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="group w-full lg:w-auto px-10 py-4 bg-violet-600 text-white font-semibold rounded-xl 
                        hover:bg-violet-700 transition-all duration-300
                        border border-violet-500/30 mb-8 shadow-lg hover:shadow-violet-500/20
                        flex items-center justify-center"
            >
              Register for our FREE webinar
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            {showModal && (
              <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
                <WebinarForm closeModal={() => setShowModal(false)} />
              </div>
            )}
            <div className="text-gray-700">
              <p className="font-semibold text-lg mb-4">NEXT WEBINAR STARTS IN</p>
              <div className="flex space-x-6">
                <div className="bg-gray-100 rounded-lg p-3 text-center w-16">
                  <div className="text-2xl font-bold text-violet-600">{formatTime(timeLeft.days)}</div>
                  <div className="text-xs text-gray-500 mt-1">DAYS</div>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-center w-16">
                  <div className="text-2xl font-bold text-violet-600">{formatTime(timeLeft.hours)}</div>
                  <div className="text-xs text-gray-500 mt-1">HOURS</div>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-center w-16">
                  <div className="text-2xl font-bold text-violet-600">{formatTime(timeLeft.minutes)}</div>
                  <div className="text-xs text-gray-500 mt-1">MINS</div>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-center w-16">
                  <div className="text-2xl font-bold text-violet-600">{formatTime(timeLeft.seconds)}</div>
                  <div className="text-xs text-gray-500 mt-1">SECS</div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="flex flex-col items-start w-full lg:w-auto lg:ml-12">
            <div className=" w-[450px]">
              {instructors.map((instructor, index) => (
                <div
                  key={index}
                  className="relative w-500 h-384 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
                >
                  <Image
                    src={instructor.image || "/placeholder.svg"}
                    alt={instructor.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-3">
                    <p className="text-white font-semibold">{instructor.name}</p>
                    <p className="text-gray-300 text-xs">
                      {instructor.title} - {instructor.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 w-full">
              <div className="flex flex-col items-center">
                <p className="text-gray-600">or sign up using:</p>
                <div className="flex space-x-4 mt-4">
                  <button className="p-3 bg-white shadow-md rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <FaGoogle className="text-red-500 text-2xl" />
                  </button>
                  <button className="p-3 bg-white shadow-md rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <FaLinkedin className="text-blue-700 text-2xl" />
                  </button>
                  <button className="p-3 bg-white shadow-md rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <FaGithub className="text-gray-800 text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Courses Section */}
        <div className="p-6 max-w-7xl mx-auto">
          {/* Header */}
          <h1 className="text-3xl text-gray-900 font-bold">All the skills you need in one place</h1>
          <p className="text-gray-700 mt-2">
            From critical skills to technical topics, AceLevelUp supports your professional development.
          </p>
          {/* Category Tabs */}
          <div className="flex space-x-4 mt-6 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white text-black p-4 shadow-md rounded-lg border border-gray-100 transition-all duration-300 hover:shadow-xl"
                onMouseEnter={() => setHoveredCourse(index)}
                onMouseLeave={() => setHoveredCourse(null)}
              >
                <div className="relative overflow-hidden rounded-md">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="rounded-md w-full transition-transform duration-500 hover:scale-105"
                  />
                  {hoveredCourse === index && (
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 animate-fadeIn">
                      <button className="bg-white text-gray-800 px-4 py-2 rounded-md font-medium">
                        Preview Course
                      </button>
                    </div>
                  )}
                </div>
                <h2 className="font-bold mt-4 text-lg line-clamp-2 h-14">{course.title}</h2>
                <p className="text-gray-600 text-sm">{course.author}</p>
                <div className="flex items-center text-yellow-500 mt-1">
                  <FaStar className="mr-1" /> {course.rating}
                  <span className="text-gray-500 text-sm ml-1">({course.reviews})</span>
                </div>
                <div className="flex items-center mt-2">
                  <span className="text-lg font-bold">{course.price}</span>
                  <span className="text-gray-500 line-through ml-2">{course.oldPrice}</span>
                </div>
                <div className="mt-2 flex gap-2">
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
          <button className="mt-6 px-6 py-3 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition-colors flex items-center">
            Show all {activeCategory} courses
            <ChevronRight className="ml-2" />
          </button>
        </div>
        {/* Image Grid Section */}
        <section className="bg-blue-50 py-12 px-6 lg:px-20 flex flex-col lg:flex-row items-center">
          {/* Left Side - Full-Width Image Layout */}
          <div className="relative grid grid-cols-2 gap-4 lg:w-1/2">
            {/* Large Image */}
            <div className="relative col-span-2 h-80 rounded-xl overflow-hidden shadow-lg bg-white border border-gray-300 transform transition-transform hover:scale-105">
              <Image
                src="/istockphoto-973718370-2048x2048.jpg"
                alt="Image 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            {/* Smaller Images */}
            <div className="relative h-60 rounded-xl overflow-hidden shadow-lg bg-white border border-gray-300 transform transition-transform hover:scale-105">
              <Image src="/g2.jpg" alt="Image 2" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div className="relative h-60 rounded-xl overflow-hidden shadow-lg bg-white border border-gray-300 transform transition-transform hover:scale-105">
              <Image src="/g4.jpg" alt="Image 3" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </div>
          {/* Right Side - Content */}
          <div className="lg:w-1/2 mt-10 lg:mt-0 lg:ml-20">
            <h2 className="text-3xl font-bold text-gray-900">Learner outcomes on AceLevelUp</h2>
            <p className="text-gray-700 mt-4">
              <strong className="font-bold text-black">77% of learners report career benefits</strong>, such as new
              skills, increased pay, and new job opportunities.{" "}
              <a href="#" className="text-violet-600 font-medium hover:underline">
                2025 AceLevelUp Learner Outcomes Report
              </a>
            </p>
            <button className="mt-6 bg-violet-600 text-white px-6 py-3 rounded-md font-medium hover:bg-violet-700 transition-colors flex items-center group">
              Join for Free
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="bg-blue-50 py-12 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900">We asked our students how our program helped them</h2>
            <p className="text-gray-600 mt-2">Here's what they said</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="relative group bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative">
                    <Image
                      src={testimonial.img || "/placeholder.svg"}
                      width={400}
                      height={250}
                      alt={testimonial.name}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={testimonial.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-3 rounded-full transform transition-transform duration-300 hover:scale-110"
                        aria-label={`Watch ${testimonial.title} video`}
                      >
                        <FaPlay className="text-violet-600 text-xl" />
                      </a>
                    </div>
                  </div>
                  <div className="p-4 text-left">
                    <h3 className="text-violet-600 font-bold">{testimonial.title}</h3>
                    <p className="text-gray-800 font-medium">{testimonial.name}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Ratings Section */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-md">
                <Image src="/google-2015-logo-3649.png" width={100} height={30} alt="Google" />
                <span className="text-lg text-black font-bold">5.0 ⭐⭐⭐⭐⭐</span>
              </div>
              <div className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-md">
                <Image src="/google-2015-logo-3649.png" width={100} height={30} alt="Yelp" />
                <span className="text-lg text-black font-bold">4.5 ⭐⭐⭐⭐⭐</span>
              </div>
              <div className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-md">
                <Image src="/google-2015-logo-3649.png" width={100} height={30} alt="Course Report" />
                <span className="text-lg text-black font-bold">4.8 ⭐⭐⭐⭐⭐</span>
              </div>
            </div>
          </div>
        </section>
        {/* Trusted Companies Section */}
        <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
          <div className="text-center text-gray-600 mb-8">
            <p className="text-lg font-medium">
              Trusted by over 16,000 companies and millions of learners around the world
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-6">
              <div className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image src="/vk.png" alt="VW" width={80} height={40} />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300 mt-8">
                <Image src="/Samsung.png" alt="Samsung" width={100} height={90} />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image src="/visa.png" alt="visa" width={100} height={10} />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image src="/vimeo.webp" alt="Vimeo" width={80} height={40} />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image src="/card.png" alt="P&G" width={80} height={30} />
              </div>
            </div>
          </div>
          {/* Course Carousel */}
          <h2 className="text-2xl font-bold text-gray-900">Learner is viewing</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {learnerCourses.map((course, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={400}
                    height={250}
                    className="w-full transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <button
                      className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                      aria-label="Save course"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
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
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 line-clamp-2 h-12">{course.title}</h3>
                  <p className="text-sm text-gray-600">{course.instructor}</p>
                  <div className="flex items-center mt-2 text-yellow-500">
                    <FaStar /> <span className="ml-1 font-bold">{course.rating}</span>
                    <span className="text-gray-500 text-sm ml-2">({course.reviews})</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <span className="font-bold text-lg text-gray-900">{course.price}</span>
                    <span className="text-gray-500 line-through ml-2">{course.originalPrice}</span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    {Array.isArray(course.tags) &&
                      course.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`text-xs font-semibold px-2 py-1 rounded-lg ${
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
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-8 md:px-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side Content */}
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
                Elevate Your Tech Career <br /> with Expert-Led Webinars
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                Join industry leaders and enhance your skills in system design, algorithms, and mock interviews.
              </p>
              <button className="mt-6 bg-violet-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-violet-700 transition-all duration-300 shadow-lg hover:shadow-violet-500/20 flex items-center group">
                Register for FREE Webinar
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            {/* Right Side Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-16 px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our program is tailored for{" "}
            <span className="text-violet-600 underline decoration-2 decoration-dotted">dedicated professionals</span>
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-200 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-3">
                <span className="text-violet-600 text-2xl">✔</span>
                <h3 className="text-xl font-semibold text-gray-800">Flexible & Remote</h3>
              </div>
              <p className="mt-2 text-gray-600">Join live sessions from anywhere at your convenience.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-200 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-3">
                <span className="text-violet-600 text-2xl">✔</span>
                <h3 className="text-xl font-semibold text-gray-800">Work-Life Balance</h3>
              </div>
              <p className="mt-2 text-gray-600">A well-structured schedule that fits your professional life.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-200 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-3">
                <span className="text-violet-600 text-2xl">✔</span>
                <h3 className="text-xl font-semibold text-gray-800">Extended Support</h3>
              </div>
              <p className="mt-2 text-gray-600">6-month mentorship, mock interviews, and career guidance.</p>
            </div>
          </div>
        </section>
        {/* Trends Section */}
        <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-12">
          {/* Left Text Section */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">Top trends for the future of work</h2>
            <p className="text-gray-600 text-lg">
              Our 2025 Global Learning & Skills Trends Report is out now! Find out how to build the skills to keep pace
              with change.
            </p>
            <button className="px-6 py-3 border border-violet-600 text-violet-600 font-semibold rounded-md hover:bg-violet-600 hover:text-white transition-all duration-300 flex items-center group">
              Get the report
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          {/* Right Image Section */}
          <div className="md:w-1/2 flex justify-center relative mt-8 md:mt-0">
            <div className="relative w-[400px] h-[280px] md:w-[500px] md:h-[350px] transform transition-all duration-500 hover:scale-105">
              <Image src="/top.jpeg" alt="Trends Report Cover" layout="fill" objectFit="contain" />
            </div>
            <div className="absolute -bottom-6 -right-8 w-[300px] h-[200px] md:w-[350px] md:h-[250px] rotate-6 shadow-lg transform transition-all duration-500 hover:rotate-3">
              <Image src="/top1.jpeg" alt="Trends Report Inside Page" layout="fill" objectFit="contain" />
            </div>
          </div>
        </section>
        {/* Expert Reviews Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">What our experts are saying</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-6 shadow-lg flex flex-col items-center text-center transform transition-all duration-300 ${
                    activeTestimonial === index ? "scale-105 border-2 border-violet-300" : "hover:shadow-xl"
                  }`}
                >
                  <div className="relative w-20 h-20 mb-4">
                    <img
                      src={review.image || "/placeholder.svg"}
                      alt={review.name}
                      className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
                    />
                    <div
                      className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-no-repeat bg-contain"
                      style={{ backgroundImage: "url('/brushstroke.png')" }}
                    ></div>
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{review.quote}"</p>
                  <h3 className="font-bold text-violet-600">{review.name}</h3>
                  <p className="text-gray-500 text-sm">{review.position}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Final CTA Section */}
        <section className="bg-gradient-to-b from-white to-blue-100 py-16 px-6 flex justify-center">
          <div className="bg-blue-50 p-8 rounded-2xl shadow-lg flex flex-col md:flex-row items-center max-w-4xl">
            <div className="text-left md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Ready to crush your interview? <br /> Let's do it!
              </h2>
              <p className="mt-4 text-gray-700">
                If you've made it this far, you must be at least a little curious. Talk to our founding team to take the
                first step toward your goals.
              </p>
              <button className="mt-6 bg-violet-600 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-violet-700 transition-all duration-300 flex items-center group">
                Register for our FREE webinar
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="mt-6 text-gray-900 font-semibold">
                NEXT WEBINAR STARTS IN
                <div className="flex space-x-4 text-violet-600 text-xl font-bold mt-2">
                  <div className="bg-white rounded p-2 w-12 text-center">{formatTime(timeLeft.days)}</div>
                  <div className="bg-white rounded p-2 w-12 text-center">{formatTime(timeLeft.hours)}</div>
                  <div className="bg-white rounded p-2 w-12 text-center">{formatTime(timeLeft.minutes)}</div>
                  <div className="bg-white rounded p-2 w-12 text-center">{formatTime(timeLeft.seconds)}</div>
                </div>
                <div className="flex space-x-4 text-xs text-gray-500 mt-1">
                  <div className="w-12 text-center">DAYS</div>
                  <div className="w-12 text-center">HOURS</div>
                  <div className="w-12 text-center">MINS</div>
                  <div className="w-12 text-center">SECS</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
              <img
                src="/Trainer-Desain-Logo.png"
                alt="Webinar Speaker"
                className="w-48 md:w-64 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        </section>
        {/* Fixed Action Buttons */}
        <div className="fixed bottom-10 right-5 flex flex-col space-y-2 z-50">
          {/* Download Brochure */}
          <button className="flex items-center space-x-2 bg-violet-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-violet-700 transition-all duration-300">
            <Download size={18} />
            <span>Download Brochure</span>
          </button>
          {/* Talk to Us */}
          <button
            onClick={() => setShowCall(!showCall)}
            className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
          >
            <Phone size={18} />
            <span>Talk to us</span>
          </button>

          {showCall && (
            <div className="absolute right-full mr-2 bg-white p-4 shadow-lg rounded-lg border border-gray-200 animate-fadeIn">
              <p className="text-gray-700">Call us at:</p>
              <p className="font-semibold">+1 234 567 890</p>
            </div>
          )}
          {/* Chat with Us */}
          <button
            onClick={() => setShowChat(!showChat)}
            className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
          >
            <MessageCircle size={18} />
            <span>Chat with us</span>
          </button>

          {showChat && (
            <div className="absolute right-full mr-2 bg-white p-4 shadow-lg rounded-lg border border-gray-200 animate-fadeIn">
              <p className="text-gray-700">Chat via WhatsApp:</p>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                className="text-green-600 font-semibold hover:underline flex items-center"
                rel="noreferrer"
              >
                Open Chat <FaArrowRight className="ml-1" />
              </a>
            </div>
          )}
        </div>
        {/* Cookie Banner */}
        {show && (
          <div className="fixed bottom-0 w-full bg-[#0b0b27] text-white p-4 flex justify-between items-center z-40 animate-slideUp">
            <p className="text-sm">
              We use Cookies on this site to enhance your experience and improve our marketing efforts. To learn more,
              click on
              <button className="ml-2 bg-[#3d348b] text-white px-4 py-2 rounded hover:bg-[#2a2561] transition-colors">
                About Cookies
              </button>
            </p>
            <div className="flex items-center gap-4">
              <button className="bg-white text-[#0b0b27] px-6 py-2 rounded hover:bg-gray-200 transition-colors">
                Accept
              </button>
              <button
                onClick={() => setShow(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        )}
        {/* Footer */}
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
    </div>
  )
}
function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md flex space-x-4 items-start hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="text-violet-600 text-3xl">
        <Icon />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{desc}</p>
      </div>
    </div>
  )
}
function ChevronRight(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
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