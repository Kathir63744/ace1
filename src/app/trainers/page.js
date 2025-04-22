"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Award,
  Users,
  Clock,
  MessageSquare,
  ArrowRight,
  Calendar,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Menu } from "lucide-react"
import { useRouter } from "next/navigation"
const About = () => {
  const [activeTrainer, setActiveTrainer] = useState(null)
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0])

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Course", path: "/courses" },
    { name: "Trainers", path: "/trainers" },
    { name: "Event", path: "/event" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ]
  const router = useRouter()

  const trainers = [
    {
      name: "Instructor 1",
      role: "Fullstack Development Instructor",
      image: "/pro3.jpg",
      link: "https://example.com/johndoe",
      specialties: ["Java/Python", "React/Angular", "MongoDB"],
      experience: "10+ years",
      certification: "NASM Certified",
      bio: "John specializes in full-stack development with expertise in both frontend and backend technologies. His teaching approach focuses on practical, real-world applications.",
    },
    {
      name: "Instructor 2",
      role: "Frontend Development Instructor",
      image: "/ava2.jpeg",
      link: "https://example.com/janesmith",
      specialties: ["HTML/CSS/JS", "React/Angular", "Next.js/Vue.js"],
      experience: "8 years",
      certification: "RYT-500",
      bio: "Jane is passionate about creating beautiful, responsive user interfaces. She brings her industry experience to help students master modern frontend frameworks.",
    },
    {
      name: "Instructor 3",
      role: "Backend Development Instructor",
      image: "/ava3.jpeg",
      link: "https://example.com/mikejohnson",
      specialties: ["Node.js", "Database Connectivity", "Core Languages"],
      experience: "12 years",
      certification: "CSCS",
      bio: "Mike is an expert in server-side technologies and database architecture. He helps students build robust, scalable backend systems.",
    },
    {
      name: "Instructor 4",
      role: "Digital Marketing Expert",
      image: "/ava4.jpeg",
      link: "https://example.com/sarahlee",
      specialties: ["Digital Marketing", "SEO Specialist", "Advanced Digital Marketing"],
      experience: "7 years",
      certification: "PMA Certified",
      bio: "Sarah combines technical knowledge with marketing expertise to teach effective digital marketing strategies for the modern web.",
    },
    {
      name: "Instructor 5",
      role: "AI Expert",
      image: "/ava.jpeg",
      link: "https://example.com/chrisbrown",
      specialties: ["AI", "Functional Training", "Fundamentals of AI"],
      experience: "9 years",
      certification: "CrossFit L3",
      bio: "Chris is at the forefront of AI technology, teaching students how to implement machine learning and artificial intelligence in practical applications.",
    },
  ]

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Frontend Developer",
      image: "/placeholder.svg?height=80&width=80",
      text: "The instructors here completely transformed my career path. Their hands-on approach and real-world projects prepared me for my dream job in tech.",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      role: "Full Stack Engineer",
      image: "/placeholder.svg?height=80&width=80",
      text: "I tried several online courses before, but nothing compares to the personalized guidance I received here. The trainers truly care about your success.",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "Software Developer",
      image: "/placeholder.svg?height=80&width=80",
      text: "The curriculum is constantly updated with the latest industry trends. I graduated with skills that were immediately relevant in the job market.",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length)
  }
  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }
  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: i * 0.1,
      },
    }),
  }
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev)
  }, [])
  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800"
    >
      <div className="relative">
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
      </div>
      {/* Hero Section with Parallax */}
      <div className="relative h-[70vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 to-purple-800/70 z-10" />
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
          >
            Learn From The <span className="text-purple-300">Best</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto mb-10"
          >
            Our world-class instructors bring years of industry experience to help you master the skills that matter.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
              Meet Our Team <ArrowRight size={18} />
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg">
              View Courses
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-purple-50 to-transparent dark:from-purple-900 dark:to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>

      {/* Stats Section with Counter Animation */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div style={{ opacity, y }} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { label: "Combined Experience", value: "45+ Years", icon: <Clock className="h-8 w-8 text-purple-500" /> },
            { label: "Happy Students", value: "1000+", icon: <Users className="h-8 w-8 text-purple-500" /> },
            { label: "Certifications", value: "25+", icon: <Award className="h-8 w-8 text-purple-500" /> },
            { label: "Success Rate", value: "98%", icon: <Star className="h-8 w-8 text-purple-500" /> },
          ].map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={statsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center p-8 bg-white dark:bg-purple-800/40 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <CounterAnimation
                target={Number.parseInt(stat.value) || 100}
                suffix={stat.value.includes("+") ? "+" : stat.value.includes("%") ? "%" : ""}
                className="text-4xl font-bold text-purple-600 dark:text-purple-300"
              />
              <p className="text-gray-700 dark:text-purple-200 mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Featured Trainers Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-purple-900/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-extrabold text-purple-900 dark:text-purple-100 mb-4">
            Meet Our Expert Trainers
          </h2>
          <p className="text-xl text-purple-700 dark:text-purple-200">
            Our certified professionals are here to guide you through your career journey with personalized attention
            and expertise.
          </p>
        </motion.div>

        {/* Trainers Grid with Interactive Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative h-full overflow-hidden rounded-xl bg-white dark:bg-purple-800/50 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={trainer.image || "/placeholder.svg"}
                    alt={trainer.name}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 p-6 text-white"
                  >
                    <p className="font-medium mb-2">{trainer.bio}</p>
                    <button
                      onClick={() => setActiveTrainer(trainer)}
                      className="mt-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-sm font-medium transition-all duration-300"
                    >
                      View Full Profile
                    </button>
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-2">{trainer.name}</h3>
                  <p className="text-purple-600 dark:text-purple-300 font-medium mb-3">{trainer.role}</p>
                  <div className="space-y-2">
                    <p className="text-purple-700 dark:text-purple-200">
                      <span className="font-semibold">Experience:</span> {trainer.experience}
                    </p>
                    <p className="text-purple-700 dark:text-purple-200">
                      <span className="font-semibold">Certification:</span> {trainer.certification}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {trainer.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-100 text-purple-700 dark:text-purple-500  rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/80 dark:to-pink-900/80">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-extrabold text-purple-900 dark:text-purple-100 mb-4">What Our Students Say</h2>
          <p className="text-xl text-purple-700 dark:text-purple-200">
            Hear from our graduates who have successfully transformed their careers.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white dark:bg-purple-800 p-3 rounded-full shadow-lg hover:bg-purple-100 dark:hover:bg-purple-700 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-purple-600 dark:text-purple-200" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white dark:bg-purple-800 p-3 rounded-full shadow-lg hover:bg-purple-100 dark:hover:bg-purple-700 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-purple-600 dark:text-purple-200" />
          </button>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-purple-800/50 rounded-2xl shadow-xl p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonials[testimonialIndex].image || "/placeholder.svg"}
                      alt={testimonials[testimonialIndex].name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-purple-200 dark:border-purple-600"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex mb-4">
                      {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-lg md:text-xl text-gray-700 dark:text-purple-100 italic mb-6">
                      "{testimonials[testimonialIndex].text}"
                    </p>
                    <div>
                      <h4 className="text-xl font-bold text-purple-900 dark:text-purple-200">
                        {testimonials[testimonialIndex].name}
                      </h4>
                      <p className="text-purple-600 dark:text-purple-300">{testimonials[testimonialIndex].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setTestimonialIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === testimonialIndex ? "bg-purple-600 w-6" : "bg-purple-300 dark:bg-purple-700"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="bg-gradient-to-r from-purple-600 to-pink-400 rounded-3xl p-12 max-w-8.5xl mx-auto shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-10" />

          <div className="relative z-10 w-full">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Ready to Transform Your Career?</h2>
            <p className="text-xl text-purple-100 mb-10 max-w-3xl mx-auto">
              Book a free consultation with one of our expert trainers and start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-purple-50 font-bold py-4 px-10 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                <Calendar className="h-5 w-5" />
                Schedule Consultation
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-10 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Chat With Us
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Trainer Modal */}
      <AnimatePresence>
        {activeTrainer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveTrainer(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white dark:bg-purple-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={activeTrainer.image || "/placeholder.svg"}
                  alt={activeTrainer.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setActiveTrainer(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                  aria-label="Close modal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-purple-900 dark:text-purple-100 mb-2">{activeTrainer.name}</h3>
                <p className="text-xl text-purple-600 dark:text-purple-300 font-medium mb-6">{activeTrainer.role}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">About</h4>
                    <p className="text-gray-700 dark:text-purple-200">{activeTrainer.bio}</p>

                    <h4 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mt-6 mb-3">
                      Certification
                    </h4>
                    <p className="text-gray-700 dark:text-purple-200">{activeTrainer.certification}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">Specialties</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {activeTrainer.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-700 text-purple-700 dark:text-purple-100 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>

                    <h4 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">Experience</h4>
                    <p className="text-gray-700 dark:text-purple-200">
                      {activeTrainer.experience} of professional experience in teaching and industry work.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                  <a
                    href={activeTrainer.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    View Full Profile
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
const CounterAnimation = ({ target, suffix = "", className = "" }) => {
  const [count, setCount] = useState(0)
  const counterRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTime
          const duration = 2000

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            const currentCount = Math.floor(progress * target)
            setCount(currentCount)

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.1 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [target])

  return (
    <div ref={counterRef} className={className}>
      {count}
      {suffix}
    </div>
  )
}

export default About
