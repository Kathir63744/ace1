"use client"
import React, { useCallback, useState } from "react"
import { useRouter } from "next/navigation"
import { GraduationCap, Clock, ExternalLink, Star, Quote, X, Play, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"


 const navLinks = [
    { name: "About", path: "/about" },
    { name: "Course", path: "/courses" },
    { name: "Trainers", path: "/trainers" },
    { name: "Event", path: "/event" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

const categories = [
  "FullStack Development",
  "Digital Marketing",
  "App Development",
  "Scrum Master",
  "Cyber Security",
  "Product Management",
]

const courses = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    duration: "6 Months",
    startDate: "10th Apr '25",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    institute: "MIT Professional Education",
    logo: "/hl1.png",
    courseType: "FullStack Development",
    rating: 4.8,
    students: "2.5k+",
    level: "Advanced",
  },
  {
    id: 2,
    title: "Advanced Digital Marketing",
    duration: "4 Months",
    startDate: "15th Apr '25",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    institute: "Harvard Business School",
    logo: "/hl2.jpg",
    courseType: "digital-marketing",
    rating: 4.7,
    students: "1.8k+",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "Mobile App Development",
    duration: "5 Months",
    startDate: "20th Apr '25",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80",
    institute: "Stanford University",
    logo: "/hl3.jpeg",
    courseType: "app-development",
    rating: 4.9,
    students: "3k+",
    level: "Advanced",
  },
  {
    id: 4,
    title: "Scrum Master Certification",
    duration: "5 Months",
    startDate: "20th Apr '25",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    institute: "Stanford University",
    logo: "/hl4.jpeg",
    courseType: "scrum-master",
    rating: 4.6,
    students: "1.2k+",
    level: "Professional",
  },
  {
    id: 5,
    title: "AI and Cyber-security",
    duration: "5 Months",
    startDate: "20th Apr '25",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    institute: "Stanford University",
    logo: "/hl5.jpeg",
    courseType: "ai-cybersecurity",
    rating: 4.9,
    students: "2.1k+",
    level: "Expert",
  },
  {
    id: 6,
    title: "Product Management",
    duration: "5 Months",
    startDate: "20th Apr '25",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    institute: "Stanford University",
    logo: "/produc.png",
    courseType: "product-management",
    rating: 4.9,
    students: "2.1k+",
    level: "Expert",
  },
]

const testimonials = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Website development",
    company: "Neural Dynamics",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop",
    quote:
      "The Full-Stack Web Development course teaches you to build dynamic web applications by mastering both frontend and backend technologies.",
    video: "https://www.youtube.com/embed/PmLt6ckEM6A",
    bgColor: "from-purple-50 to-pink-50",
    accentColor: "bg-purple-600",
  },
  {
    id: 2,
    name: "Maya Patel",
    role: "Digital Marketing",
    company: "CloudFlow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    quote:
      "The Advanced Digital Marketing course covers essential strategies like SEO, social media marketing, PPC advertising, email marketing, and analytics to help businesses grow online.",
    video: "https://www.youtube.com/embed/DzyOpJpV6F0?start=6",
    bgColor: "from-blue-50 to-cyan-50",
    accentColor: "bg-blue-600",
  },
  {
    id: 3,
    name: "James Chen",
    role: "App Developer",
    company: "ChainTech",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop",
    quote:
      "The Mobile App Development course teaches you how to build powerful iOS and Android applications using modern frameworks like React Native and Flutter.",
    video: "https://www.youtube.com/embed/cRy06OuccBI",
    bgColor: "from-emerald-50 to-teal-50",
    accentColor: "bg-emerald-600",
  },
  {
    id: 4,
    name: "Sofia Rodriguez",
    role: "Scrum Master",
    company: "DesignScale",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1887&auto=format&fit=crop",
    quote:
      "The Scrum Master course equips you with the skills to lead agile teams, enhance collaboration, and drive efficient project delivery.",
    video: "https://www.youtube.com/embed/Adz-kdNB3DE",
    bgColor: "from-orange-50 to-amber-50",
    accentColor: "bg-orange-600",
  },
  {
    id: 5,
    name: "Thomas Anderson",
    role: "Cyber Security",
    company: "SecureMatrix",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1887&auto=format&fit=crop",
    quote:
      "The Cyber Security course teaches you how to protect systems, networks, and data from cyber threats. You'll learn about ethical hacking, encryption, risk management, and threat detection.",
    video: "https://www.youtube.com/embed/bdG2SUANSnQ",
    bgColor: "from-red-50 to-rose-50",
    accentColor: "bg-red-600",
  },
]

export default function CoursePage({ params }) {
  const [activeCategory, setActiveCategory] = React.useState("All Courses");
  const [activeVideo, setActiveVideo] = React.useState(null);
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter();
    const toggleMobileMenu = useCallback(() => {
      setMobileMenuOpen((prev) => !prev)
    }, [])

  const handleViewProgram = (courseType) => {
    localStorage.setItem('selectedcourseid',JSON.stringify(courseType));
    router.push('/register/courseType');
  };

  const { courseType } = params;
  const filteredCourses = courseType
    ? courses.filter((course) => course.courseType === courseType)
    : courses;
  return (  
    <div className="min-h-screen bg-gray-50">
           <div className="relative">
            <nav
              className={cn(
                "bg-white p-3 h-16 flex items-center fixed top-0 w-full shadow-md z-50 transition-all duration-300",
                isScrolled && "shadow-lg h-14"
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
                          setMobileMenuOpen(false); // Close mobile menu on navigation
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            <span className="text-violet-600">Explore</span> Our Top Courses
          </h2>
          <p className="text-gray-600 text-lg">Transform your career with industry-leading courses</p>
        </div>
        {/* Layout with Sidebar and Courses */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Categories</h3>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`w-full text-left py-3 px-4 my-2 rounded-xl font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-violet-600 text-white shadow-lg shadow-violet-200"
                      : "text-gray-700 hover:bg-violet-50 hover:text-violet-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          {/* Course Cards */}
          <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => handleViewProgram(course.courseType)}
              >
                {/* Image & Logo Section */}
                <div className="relative">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white p-2 rounded-xl shadow-lg">
                    <img
                      src={course.logo || "/placeholder.svg"}
                      alt={course.institute}
                      className="w-12 h-6 object-contain"
                    />
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-semibold">{course.rating}</span>
                  </div>
                </div>
                {/* Course Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium">
                      {course.level}
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {course.students} students
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{course.title}</h3>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      <span className="text-sm">{course.institute}</span>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewProgram(course.courseType);
                    }}
                    className="w-full bg-violet-600 text-white text-center font-semibold py-3 rounded-xl hover:bg-violet-700 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    View Program
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Testimonials Section */}
      <div className="mt-20 bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-violet-600 mb-6">Real Stories, Real Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our graduates are reshaping the tech industry with their newly acquired skills
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`rounded-3xl overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-2xl bg-gradient-to-br ${testimonial.bgColor}`}
              >
                {activeVideo === testimonial.id ? (
                  <div className="relative w-full h-[350px]">
                    <button
                      onClick={() => setActiveVideo(null)}
                      className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2.5 shadow-lg transition-transform hover:scale-110"
                      aria-label="Close video"
                    >
                      <X className="w-5 h-5 text-gray-700" />
                    </button>
                    <iframe
                      src={testimonial.video}
                      className="w-full h-full"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="p-8">
                    <div className="flex items-start mb-8">
                      <div className="relative">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-2xl object-cover shadow-lg"
                        />
                        <button
                          onClick={() => setActiveVideo(testimonial.id)}
                          className={`absolute -bottom-3 -right-3 ${testimonial.accentColor} rounded-full p-2.5 shadow-lg transform transition-all duration-300 hover:scale-110 group`}
                          aria-label="Play video"
                        >
                          <Play className="w-4 h-4 text-white" />
                        </button>
                      </div>
                      <div className="ml-6">
                        <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className={`font-medium mt-1 ${testimonial.accentColor.replace("bg-", "text-")}`}>
                          {testimonial.role}
                        </p>
                        <p className="text-gray-500 text-sm">{testimonial.company}</p>
                      </div>
                    </div>

                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gray-200 transform -rotate-12" />
                      <blockquote className="text-gray-700 pl-6 relative z-10">{testimonial.quote}</blockquote>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

