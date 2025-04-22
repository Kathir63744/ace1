"use client"
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  BookOpen,
  Users,
  Target,
  Calendar,
  MessageSquare,
  Star,
  TrendingUp,
  CheckCircle,
  Coffee,
  Briefcase,
  GraduationCap,
  Code,
  LineChart,
  Brain,
  Laptop,
  UserPlus,
  Rocket,
  X,
  Menu,
  ChevronDown,
  ChevronUp,
  Globe,
  Heart,
  MapPin,
  Lightbulb,
  Share2,
} from 'lucide-react';
function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(false); 
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    }; 
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Course", path: "/courses" },
    { name: "Trainers", path: "/trainers" },
    { name: "Event", path: "/event" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Developer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      content: "AceLevelUp transformed my career trajectory. The practical skills and mentorship I received were invaluable."
    },
    {
      name: "Michael Chen",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      content: "The Agile & Scrum certification program helped me lead my team more effectively. Highly recommended!"
    },
    {
      name: "Emily Rodriguez",
      role: "Digital Marketing Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      content: "The digital marketing course provided real-world applications that I could implement immediately."
    }
  ];
  const stats = [
    { icon: Users, label: "Active Students", value: "10,000+" },
    { icon: BookOpen, label: "Courses", value: "150+" },
    { icon: Award, label: "Certifications", value: "50+" },
    { icon: Target, label: "Success Rate", value: "95%" }
  ];
  const careerPaths = [
    {
      title: "Technology",
      icon: Laptop,
      roles: ["Software Engineer", "DevOps Specialist", "Cloud Architect", "Data Scientist"]
    },
    {
      title: "Management",
      icon: Briefcase,
      roles: ["Project Manager", "Product Owner", "Scrum Master", "Team Lead"]
    },
    {
      title: "Digital",
      icon: LineChart,
      roles: ["Digital Marketer", "UX Designer", "Content Strategist", "SEO Specialist"]
    }
  ];
  const teamMembers = [
    {
      name: "Dr. Alexandra Chen",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      bio: "With over 15 years in education technology, Dr. Chen founded AceLevelUp to bridge the gap between academic learning and industry needs."
    },
    {
      name: "Marcus Johnson",
      role: "Chief Learning Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      bio: "Former university professor with a passion for innovative teaching methodologies and curriculum development."
    },
    {
      name: "Priya Sharma",
      role: "Head of Technology",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      bio: "Tech industry veteran who ensures our platform leverages cutting-edge technology to deliver exceptional learning experiences."
    },
    {
      name: "David Wilson",
      role: "Director of Career Services",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      bio: "Corporate recruiter turned educator, David bridges the gap between education and employment opportunities."
    }
  ];
  const historyTimeline = [
    {
      year: "2015",
      title: "Foundation",
      description: "AceLevelUp was founded with a mission to transform professional education."
    },
    {
      year: "2017",
      title: "First 1,000 Students",
      description: "Reached our first milestone of 1,000 successful graduates."
    },
    {
      year: "2019",
      title: "Global Expansion",
      description: "Expanded our reach to serve students across 25 countries."
    },
    {
      year: "2021",
      title: "Industry Partnerships",
      description: "Formed strategic partnerships with Fortune 500 companies."
    },
    {
      year: "2023",
      title: "Innovation Award",
      description: "Recognized for our innovative approach to professional education."
    }
  ];

  const partners = [
    { name: "TechGiant", logo: "/Samsung.png" },
    { name: "InnovateNow", logo: "/visa.png" },
    { name: "FutureWorks", logo: "/vk.png" },
    { name: "GlobalSoft", logo: " /google-2015-logo-3649.png" },
    { name: "DataSphere", logo: "/P_G_.png" },
    { name: "CloudPeak", logo: "/Cipla_logo.svg.png" }
  ];

  const faqs = [
    {
      question: "What makes AceLevelUp different from other educational platforms?",
      answer: "AceLevelUp combines industry-relevant curriculum, expert instructors, hands-on projects, and career support in one comprehensive platform. Our focus on practical skills and direct industry connections sets us apart."
    },
    {
      question: "How are the courses structured?",
      answer: "Our courses blend self-paced learning with live sessions, hands-on projects, and mentorship. This hybrid approach ensures flexibility while providing the accountability and guidance needed for success."
    },
    {
      question: "Do you offer financial assistance?",
      answer: "Yes, we offer various financial options including scholarships, income share agreements, and flexible payment plans to make quality education accessible to all motivated learners."
    },
    {
      question: "What kind of support do students receive?",
      answer: "Students receive technical support, academic guidance, career counseling, and access to our alumni network. Our dedicated success coaches work with each student to ensure they achieve their goals."
    },
    {
      question: "Are the certifications industry-recognized?",
      answer: "Absolutely. Our certifications are developed in partnership with industry leaders and are widely recognized by employers across the technology and business sectors."
    }
  ];
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly evolve our teaching methods and curriculum to stay ahead of industry trends."
    },
    {
      icon: Heart,
      title: "Student Success",
      description: "Every decision we make is guided by what will best serve our students' career goals."
    },
    {
      icon: Share2,
      title: "Collaboration",
      description: "We believe in the power of community and collaborative learning environments."
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Quality education should be accessible to motivated learners regardless of background."
    }
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav
        className={`bg-white p-3 h-16 flex items-center fixed top-0 w-full shadow-md z-50 transition-all duration-300 ${
          isScrolled ? "shadow-lg h-14" : ""
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img
              src="/logoref1.png"
              alt="Logo"
              className="h-12 w-12 ml-12"
            />
            <h1 className="font-bold text-black text-lg ml-4">AceLevelUp</h1>
          </a>
          {/* Mobile Menu Button */}
          <button className="md:hidden flex items-center" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 text-blue-950 mr-6">
            {navLinks.map(({ name, path }) => (
              <a
                key={name}
                href={path}
                className="relative overflow-hidden text-md-400 text-gray-900 font-bold hover:text-purple-700 font-sans transition-colors"
              >
                {name}
              </a>
            ))}
          </div>
          {/* Mobile Navigation (Dropdown) */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center space-y-4">
              {navLinks.map(({ name, path }) => (
                <a
                  key={name}
                  href={path}
                  className="text-gray-900 font-bold hover:text-black transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
      {/* Hero Section */}
      <section className="pt-16 mt-5 relative w-full h-[500px] bg-cover bg-center bg-no-repeat flex items-center">
        <div 
          className="absolute inset-0 bg-black/60" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/80 to-indigo-900/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold text-white mb-6">
              Transform Your Future with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400 block mt-2">
                AceLevelUp
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mb-8 leading-relaxed">
              Together, our team of enthusiastic teachers, subject-matter specialists, and tech innovators creates a smooth, engaging, and successful learning environment. 
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-violet-600 text-white font-bold text-lg rounded-lg hover:bg-violet-700 transition-colors duration-300">
                Explore Courses
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Mission Statement Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
              <div className="h-1 w-20 bg-violet-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
              At Ace Level Up, we think that the cornerstone of opportunity is education. In order to make learning accessible and interesting for everyone, our platform provides a vast array of courses, tutorials, and interactive content, whether you're studying for tests, learning new skills, or looking for professional advice. 
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Through innovative teaching methods, cutting-edge curriculum, and personalized support, we empower individuals to reach their full potential and make meaningful contributions to their fields.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg"
              >
                <stat.icon className="w-12 h-12 text-violet-600 mb-4" />
                <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-violet-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Student Success Path Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Your Path to Success
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <GraduationCap className="w-12 h-12 text-violet-600 mr-4" />
                <h3 className="text-2xl font-bold">For Students</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Structured learning paths aligned with industry demands</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Internship opportunities with leading companies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Career counseling and resume building workshops</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Industry-recognized certifications</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <Briefcase className="w-12 h-12 text-violet-600 mr-4" />
                <h3 className="text-2xl font-bold">For Professionals</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Advanced technical training and upskilling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Leadership and management development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Flexible learning schedules for working professionals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Industry networking opportunities</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <Code className="w-12 h-12 text-violet-600 mr-4" />
                <h3 className="text-2xl font-bold">For IT Experts</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Cutting-edge technology workshops</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Cloud certification programs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Advanced programming courses</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>DevOps and architecture training</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Meet Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="h-64 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-violet-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                  <div className="flex mt-4 space-x-3">
                    <a href="#" className="text-gray-500 hover:text-violet-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-violet-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-violet-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Career Paths Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Career Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {careerPaths.map((path, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <path.icon className="w-12 h-12 text-violet-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{path.title}</h3>
                <ul className="space-y-3">
                  {path.roles.map((role, roleIndex) => (
                    <li key={roleIndex} className="flex items-center">
                      <Target className="w-5 h-5 text-violet-600 mr-2" />
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Company History Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            {historyTimeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex mb-8 items-center"
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'order-last pl-8'}`}>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold">
                    {item.year.slice(-2)}
                  </div>
                  <div className="h-full w-0.5 bg-violet-600"></div>
                </div>
                <div className={`w-1/2 ${index % 2 === 0 ? 'order-last pl-8' : 'pr-8 text-right'}`}>
                  <h3 className="text-2xl font-bold text-violet-600">{item.year}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Learning Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our Learning Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessCard
              icon={Brain}
              step="1"
              title="Skill Assessment"
              description="Evaluate your current skill level and identify growth opportunities"
            />
            <ProcessCard
              icon={Target}
              step="2"
              title="Custom Learning Path"
              description="Get a personalized curriculum tailored to your goals"
            />
            <ProcessCard
              icon={UserPlus}
              step="3"
              title="Expert Mentorship"
              description="Learn from industry professionals and get real-world insights"
            />
            <ProcessCard
              icon={Rocket}
              step="4"
              title="Career Launch"
              description="Apply your skills and accelerate your career growth"
            />
          </div>
        </div>
      </section>
      {/* Partners & Clients Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our Partners & Clients
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-4"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 max-w-2xl mx-auto">
              We collaborate with leading organizations to ensure our curriculum meets industry standards and our graduates are prepared for the demands of the modern workplace.
            </p>
          </div>
        </div>
      </section>
      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Calendar className="w-8 h-8 text-violet-600" />}
              title="Flexible Schedule"
              description="Learn at your own pace with 24/7 access to course materials"
            />
            <FeatureCard
              icon={<MessageSquare className="w-8 h-8 text-violet-600" />}
              title="Expert Support"
              description="Get personalized guidance from industry professionals"
            />
            <FeatureCard
              icon={<Star className="w-8 h-8 text-violet-600" />}
              title="Quality Content"
              description="Updated curriculum aligned with industry standards"
            />
            <FeatureCard
              icon={<TrendingUp className="w-8 h-8 text-violet-600" />}
              title="Career Growth"
              description="Access to job placement assistance and career counseling"
            />
            <FeatureCard
              icon={<CheckCircle className="w-8 h-8 text-violet-600" />}
              title="Certified Programs"
              description="Industry-recognized certifications to boost your resume"
            />
            <FeatureCard
              icon={<Coffee className="w-8 h-8 text-violet-600" />}
              title="Community"
              description="Join a network of professionals and like-minded learners"
            />
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Student Success Stories
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[250px]">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: activeTestimonial === index ? 1 : 0,
                    x: activeTestimonial === index ? 0 : 100
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute top-0 left-0 w-full ${
                    activeTestimonial === index ? "block" : "hidden"
                  }`}
                >
                  <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full"
                      />
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-700">{testimonial.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    activeTestimonial === index ? "bg-violet-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="flex justify-between items-center w-full p-5 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  {activeFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-violet-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-violet-600" />
                  )}
                </button>
                {activeFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-5 bg-white rounded-b-lg shadow-md mt-1"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Global Presence */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our Global Presence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">North America</h3>
              <p className="text-gray-600">New York, San Francisco, Toronto, Mexico City</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Europe</h3>
              <p className="text-gray-600">London, Berlin, Paris, Amsterdam</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Asia Pacific</h3>
              <p className="text-gray-600">Singapore, Sydney, Tokyo, Bangalore</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Online</h3>
              <p className="text-gray-600">Serving students in 150+ countries worldwide</p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-violet-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of successful professionals who have transformed their careers with AceLevelUp.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-violet-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Start Learning Now
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-colors duration-300">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
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
  );
}
function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-2xl shadow-lg"
    >
      {icon}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

function ProcessCard({ icon: Icon, step, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-2xl shadow-lg relative"
    >
      <div className="absolute top-4 right-4 w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center text-white font-bold">
        {step}
      </div>
      <Icon className="w-12 h-12 text-violet-600 mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

export default App;