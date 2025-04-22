"use client"
import { useState, useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Send,
  BookOpen,
  Users,
  Clock,
  Award,
  Target,
  Brain,
  CheckCircle,
  Star,
  Calendar,
  Briefcase,
  GraduationCap,
  MessageSquare,
} from "lucide-react"

// Course data for different course types
const courseData = {
  "website-development": {
    title: "FullStack Development",
    subtitle: "Master FullStack Development Course",
    description:
      "A comprehensive program for aspiring full-stack developers, mastering both frontend and backend technologies. Equips learners with the skills to build scalable web applications using modern frameworks.",
    outcomes: [
      "Develop dynamic and responsive web applications",
      "Work with frontend and backend technologies",
      "Understand database management and API integration",
      "Deploy and maintain applications efficiently",
    ],
    requirements: [
      "Basic understanding of programming",
      "Familiarity with HTML, CSS, and JavaScript",
      "A laptop with a stable internet connection",
    ],
    skills: [
      "Frontend Development",
      "Backend Development",
      "Database Management",
      "RESTful APIs & Authentication",
      "Deployment & DevOps",
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        role: "Software Developer",
        content: "This course transformed my career. The practical approach and expert guidance were invaluable.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      },
      {
        name: "Michael Chen",
        role: "Full Stack Engineer",
        content: "Comprehensive curriculum that prepared me well for real-world development challenges.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      },
    ],
    schedule: [
      { week: 1, topic: "Frontend Fundamentals", hours: 20 },
      { week: 2, topic: "Backend Development", hours: 25 },
      { week: 3, topic: "Database Integration", hours: 20 },
      { week: 4, topic: "API Development", hours: 25 },
      { week: 5, topic: "Authentication & Security", hours: 20 },
      { week: 6, topic: "Deployment & DevOps", hours: 15 },
    ],
    careers: [
      {
        title: "Full Stack Developer",
        description: "Build complete web applications and services",
        icon: <Briefcase className="w-6 h-6" />,
        skills: ["React", "Node.js", "Database Management"],
      },
      {
        title: "Frontend Specialist",
        description: "Create engaging user interfaces and experiences",
        icon: <Users className="w-6 h-6" />,
        skills: ["UI/UX", "React", "State Management"],
      },
      {
        title: "Backend Engineer",
        description: "Develop robust server-side applications",
        icon: <Brain className="w-6 h-6" />,
        skills: ["API Design", "Database", "Security"],
      },
      {
        title: "DevOps Engineer",
        description: "Manage deployment and infrastructure",
        icon: <Target className="w-6 h-6" />,
        skills: ["CI/CD", "Cloud Services", "Monitoring"],
      },
    ],
    videoBackground: "/full.mp4",
    bgGradient: "from-violet-50 to-indigo-50",
    accentColor: "blue-600",
    secondaryColor: "violet-600",
  },
  "digital-marketing": {
    title: "Advanced Digital Marketing",
    subtitle: "Master Digital Marketing Course",
    description:
      "A comprehensive program covering essential digital marketing strategies including SEO, social media marketing, content creation, email campaigns, and analytics to help businesses grow their online presence.",
    outcomes: [
      "Create effective digital marketing strategies",
      "Optimize websites for search engines (SEO)",
      "Manage successful social media campaigns",
      "Analyze marketing data and improve ROI",
    ],
    requirements: [
      "Basic computer skills",
      "Interest in marketing and communication",
      "A laptop with a stable internet connection",
    ],
    skills: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Analytics & Reporting",
    ],
    testimonials: [
      {
        name: "Emma Wilson",
        role: "Marketing Manager",
        content: "This course provided practical skills I could immediately apply to my company's marketing strategy.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      },
      {
        name: "David Park",
        role: "Digital Strategist",
        content: "The instructors are industry experts who share real-world examples and current best practices.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      },
    ],
    schedule: [
      { week: 1, topic: "Digital Marketing Fundamentals", hours: 15 },
      { week: 2, topic: "Search Engine Optimization", hours: 20 },
      { week: 3, topic: "Social Media Marketing", hours: 20 },
      { week: 4, topic: "Content Marketing", hours: 15 },
      { week: 5, topic: "Email Marketing & Automation", hours: 15 },
      { week: 6, topic: "Analytics & Optimization", hours: 20 },
    ],
    careers: [
      {
        title: "Digital Marketing Manager",
        description: "Lead digital marketing strategies and campaigns",
        icon: <Briefcase className="w-6 h-6" />,
        skills: ["Strategy", "Campaign Management", "Team Leadership"],
      },
      {
        title: "SEO Specialist",
        description: "Optimize websites for search engines",
        icon: <Target className="w-6 h-6" />,
        skills: ["Keyword Research", "On-page SEO", "Link Building"],
      },
      {
        title: "Social Media Manager",
        description: "Manage brand presence across social platforms",
        icon: <Users className="w-6 h-6" />,
        skills: ["Content Creation", "Community Management", "Paid Social"],
      },
      {
        title: "Marketing Analyst",
        description: "Analyze campaign performance and provide insights",
        icon: <Brain className="w-6 h-6" />,
        skills: ["Data Analysis", "Reporting", "A/B Testing"],
      },
    ],
    videoBackground: "/digital.mp4",
    bgGradient: "from-blue-50 to-cyan-50",
    accentColor: "cyan-600",
    secondaryColor: "blue-600",
  },
  "app-development": {
    title: "Mobile App Development",
    subtitle: "Master Mobile App Development Course",
    description:
      "Learn to build powerful iOS and Android applications using modern frameworks like React Native and Flutter. This course covers the entire app development lifecycle from concept to deployment.",
    outcomes: [
      "Build cross-platform mobile applications",
      "Design intuitive user interfaces for mobile",
      "Implement app state management and data storage",
      "Publish apps to the App Store and Google Play",
    ],
    requirements: [
      "Basic programming knowledge",
      "Understanding of JavaScript fundamentals",
      "A laptop with a stable internet connection",
    ],
    skills: [
      "React Native Development",
      "Flutter Development",
      "Mobile UI/UX Design",
      "App State Management",
      "API Integration",
    ],
    testimonials: [
      {
        name: "Jason Lee",
        role: "Mobile Developer",
        content: "This course gave me the skills to transition from web to mobile development successfully.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      },
      {
        name: "Sophia Martinez",
        role: "App Developer",
        content: "The hands-on projects helped me build a portfolio that landed me my dream job.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      },
    ],
    schedule: [
      { week: 1, topic: "Mobile Development Fundamentals", hours: 20 },
      { week: 2, topic: "React Native Essentials", hours: 25 },
      { week: 3, topic: "Flutter Development", hours: 25 },
      { week: 4, topic: "UI/UX for Mobile Apps", hours: 15 },
      { week: 5, topic: "State Management & Data", hours: 20 },
      { week: 6, topic: "App Publishing & Monetization", hours: 15 },
    ],
    careers: [
      {
        title: "Mobile App Developer",
        description: "Build native and cross-platform mobile applications",
        icon: <Briefcase className="w-6 h-6" />,
        skills: ["React Native", "Flutter", "Swift/Kotlin"],
      },
      {
        title: "Mobile UI/UX Designer",
        description: "Create intuitive and engaging mobile interfaces",
        icon: <Users className="w-6 h-6" />,
        skills: ["Mobile Design Patterns", "Prototyping", "User Testing"],
      },
      {
        title: "App Architect",
        description: "Design scalable app architecture and systems",
        icon: <Brain className="w-6 h-6" />,
        skills: ["System Design", "Performance Optimization", "Security"],
      },
      {
        title: "Mobile DevOps Engineer",
        description: "Manage app deployment and CI/CD pipelines",
        icon: <Target className="w-6 h-6" />,
        skills: ["CI/CD", "App Distribution", "Monitoring"],
      },
    ],
    videoBackground: "/app.mp4",
    bgGradient: "from-emerald-50 to-teal-50",
    accentColor: "emerald-600",
    secondaryColor: "teal-600",
  },
  "scrum-master": {
    title: "Scrum Master Certification",
    subtitle: "Professional Scrum Master Course",
    description:
      "Become a certified Scrum Master and learn to facilitate agile development teams. This course covers agile methodologies, sprint planning, team facilitation, and continuous improvement practices.",
    outcomes: [
      "Lead agile teams effectively",
      "Facilitate scrum events and ceremonies",
      "Remove impediments and foster team collaboration",
      "Implement continuous improvement practices",
    ],
    requirements: [
      "Basic understanding of software development",
      "Familiarity with project management concepts",
      "A laptop with a stable internet connection",
    ],
    skills: [
      "Agile Methodologies",
      "Sprint Planning & Execution",
      "Team Facilitation",
      "Conflict Resolution",
      "Continuous Improvement",
    ],
    testimonials: [
      {
        name: "Rachel Kim",
        role: "Scrum Master",
        content: "This certification helped me transition from a developer role to a successful Scrum Master position.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      },
      {
        name: "Mark Johnson",
        role: "Agile Coach",
        content:
          "The practical exercises and real-world scenarios prepared me for the challenges of implementing Scrum.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      },
    ],
    schedule: [
      { week: 1, topic: "Agile & Scrum Fundamentals", hours: 15 },
      { week: 2, topic: "The Scrum Master Role", hours: 20 },
      { week: 3, topic: "Facilitating Scrum Events", hours: 15 },
      { week: 4, topic: "Team Dynamics & Coaching", hours: 20 },
      { week: 5, topic: "Scaling Scrum", hours: 15 },
      { week: 6, topic: "Certification Preparation", hours: 15 },
    ],
    careers: [
      {
        title: "Scrum Master",
        description: "Facilitate agile teams and implement Scrum",
        icon: <Briefcase className="w-6 h-6" />,
        skills: ["Scrum Framework", "Facilitation", "Servant Leadership"],
      },
      {
        title: "Agile Coach",
        description: "Guide organizations in agile transformation",
        icon: <Users className="w-6 h-6" />,
        skills: ["Coaching", "Change Management", "Organizational Agility"],
      },
      {
        title: "Product Owner",
        description: "Manage product backlog and stakeholder expectations",
        icon: <Target className="w-6 h-6" />,
        skills: ["Product Vision", "Backlog Management", "Stakeholder Management"],
      },
      {
        title: "Delivery Manager",
        description: "Oversee project delivery using agile methodologies",
        icon: <Brain className="w-6 h-6" />,
        skills: ["Delivery Planning", "Risk Management", "Team Leadership"],
      },
    ],
    videoBackground: "/scrum.mp4",
    bgGradient: "from-orange-50 to-amber-50",
    accentColor: "orange-600",
    secondaryColor: "amber-600",
  },
  "ai-cybersecurity": {
    title: "AI and Cyber-security",
    subtitle: "Advanced AI & Cybersecurity Course",
    description:
      "Master the intersection of artificial intelligence and cybersecurity. Learn to implement AI-powered security solutions, threat detection systems, and protect against advanced cyber threats.",
    outcomes: [
      "Implement AI-powered security solutions",
      "Detect and respond to cyber threats",
      "Perform security assessments and penetration testing",
      "Design secure systems and networks",
    ],
    requirements: [
      "Basic programming knowledge",
      "Understanding of networking concepts",
      "Familiarity with cybersecurity fundamentals",
      "A laptop with a stable internet connection",
    ],
    skills: [
      "AI for Security",
      "Threat Detection & Analysis",
      "Penetration Testing",
      "Security Architecture",
      "Incident Response",
    ],
    testimonials: [
      {
        name: "Alex Rivera",
        role: "Security Analyst",
        content: "This course provided cutting-edge knowledge on how AI is transforming the cybersecurity landscape.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      },
      {
        name: "Priya Sharma",
        role: "Cybersecurity Engineer",
        content: "The hands-on labs and real-world scenarios helped me develop practical skills I use daily in my job.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      },
    ],
    schedule: [
      { week: 1, topic: "Cybersecurity Fundamentals", hours: 20 },
      { week: 2, topic: "AI & Machine Learning Basics", hours: 25 },
      { week: 3, topic: "AI for Threat Detection", hours: 25 },
      { week: 4, topic: "Penetration Testing", hours: 20 },
      { week: 5, topic: "Security Architecture & Design", hours: 15 },
      { week: 6, topic: "Advanced Threat Response", hours: 20 },
    ],
    careers: [
      {
        title: "AI Security Specialist",
        description: "Implement AI-powered security solutions",
        icon: <Briefcase className="w-6 h-6" />,
        skills: ["AI/ML", "Security Analytics", "Threat Intelligence"],
      },
      {
        title: "Cybersecurity Analyst",
        description: "Monitor and respond to security incidents",
        icon: <Target className="w-6 h-6" />,
        skills: ["Threat Analysis", "Incident Response", "Security Tools"],
      },
      {
        title: "Penetration Tester",
        description: "Identify and exploit security vulnerabilities",
        icon: <Users className="w-6 h-6" />,
        skills: ["Ethical Hacking", "Vulnerability Assessment", "Exploitation"],
      },
      {
        title: "Security Architect",
        description: "Design secure systems and infrastructure",
        icon: <Brain className="w-6 h-6" />,
        skills: ["Security Design", "Risk Assessment", "Compliance"],
      },
    ],
    videoBackground: "/cyber.mp4",
    bgGradient: "from-red-50 to-rose-50",
    accentColor: "red-600",
    secondaryColor: "rose-600",
  },
  "product-management": {
    title: "Product Management",
    subtitle: "Professional Product Management Course",
    description:
      "Master the art and science of product management. Learn to identify market opportunities, define product vision, create roadmaps, and lead cross-functional teams to deliver successful products.",
    outcomes: [
      "Define product vision and strategy",
      "Create and prioritize product roadmaps",
      "Lead cross-functional product teams",
      "Make data-driven product decisions",
    ],
    requirements: [
      "Basic understanding of business concepts",
      "Familiarity with software development",
      "A laptop with a stable internet connection",
    ],
    skills: [
      "Product Strategy",
      "User Research & UX",
      "Roadmap Planning",
      "Agile Product Development",
      "Product Analytics",
    ],
    testimonials: [
      {
        name: "Jennifer Wu",
        role: "Product Manager",
        content: "This course provided a comprehensive framework for product management that I apply daily in my role.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      },
      {
        name: "Thomas Brown",
        role: "Senior Product Manager",
        content: "The instructors bring real-world experience and practical insights that go beyond theory.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      },
    ],
    schedule: [
      { week: 1, topic: "Product Management Fundamentals", hours: 15 },
      { week: 2, topic: "User Research & Product Discovery", hours: 20 },
      { week: 3, topic: "Product Strategy & Roadmapping", hours: 20 },
      { week: 4, topic: "Agile Product Development", hours: 15 },
      { week: 5, topic: "Product Analytics & Experimentation", hours: 20 },
      { week: 6, topic: "Product Leadership", hours: 15 },
    ],
    careers: [
      {
        title: "Product Manager",
        description: "Lead product development from concept to launch",
        icon: <Briefcase className="w-6 h-6" />,
        skills: ["Product Strategy", "Roadmapping", "Cross-functional Leadership"],
      },
      {
        title: "Product Owner",
        description: "Manage product backlog and development priorities",
        icon: <Target className="w-6 h-6" />,
        skills: ["Backlog Management", "User Stories", "Sprint Planning"],
      },
      {
        title: "UX Product Manager",
        description: "Focus on user experience and product design",
        icon: <Users className="w-6 h-6" />,
        skills: ["User Research", "UX Design", "Usability Testing"],
      },
      {
        title: "Technical Product Manager",
        description: "Bridge technical and business requirements",
        icon: <Brain className="w-6 h-6" />,
        skills: ["Technical Requirements", "API Product Management", "Developer Experience"],
      },
    ],
    videoBackground: "/product.mp4",
    bgGradient: "from-purple-50 to-pink-50",
    accentColor: "purple-600",
    secondaryColor: "pink-600",
  },
}

const courseOptions = [
  { value: "website-development", label: "Website Development" },
  { value: "digital-marketing", label: "Digital Marketing" },
  { value: "app-development", label: "App Development" },
  { value: "scrum-master", label: "Scrum Master / Product Management" },
  { value: "ai-cybersecurity", label: "AI and Cyber-security" },
  { value: "product-management", label: "Product Management" },
]

const features = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Expert-Led Curriculum",
    description: "Learn from industry professionals",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Interactive Sessions",
    description: "Engage in live discussions",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Flexible Schedule",
    description: "Learn at your own pace",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Certification",
    description: "Industry-recognized credentials",
  },
]

const FadeInWhenVisible = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  )
}

export default function Register({ params }) {
  const { courseType } = params
  const course = courseData[courseType] || courseData["website-development"]

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    course: courseType,
    resume: null,
  })

  const [activeSection, setActiveSection] = useState(0)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(index)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Animated success message
    const formElement = e.target
    formElement.classList.add("submitted")
    setTimeout(() => {
      formElement.classList.remove("submitted")
      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
        course: courseType,
        resume: null,
      })
    }, 2000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${course.bgGradient}`}>
      <motion.div
        className={`fixed top-0 left-0 right-0 h-1 bg-${course.secondaryColor} transform-origin-0`}
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center border-8 border-white overflow-hidden">
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover z-0" 
          autoPlay 
          loop 
          muted
          playsInline
        >
          <source src={course.videoBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full h-full flex items-center bg-black bg-opacity-50 px-8 md:px-16"
        >
          <div className="max-w-2xl text-white">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-${course.accentColor} font-mono font-bold md:text-4xl`}
            >
              {course.subtitle}
            </motion.h3>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              {course.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="text-white font-serif font-medium"
            >
              {course.description}
            </motion.p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 bg-${course.accentColor} hover:bg-${course.accentColor}/90 mt-6 text-white font-semibold rounded-lg transition`}
            >
              Get Started Now
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Course Overview Section */}
     
        
    
  <FadeInWhenVisible>
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Your Learning Path</h2>
        <div className="relative">
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-${course.secondaryColor}/20`}
          ></div>
          {course.schedule.map((week, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-10 h-10 flex items-center justify-center bg-${course.secondaryColor}/10 rounded-full mr-4`}
                    >
                      <span className={`text-${course.secondaryColor} font-bold`}>{week.week}</span>
                    </div>
                    <h3 className="text-xl font-semibold">{week.topic}</h3>
                  </div>
                  <p className="text-gray-600">
                    Master the fundamentals and advanced concepts through practical exercises and real-world projects.
                  </p>
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{week.hours} Hours of Content</span>
                  </div>
                </div>
              </div>
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-${course.secondaryColor} rounded-full border-4 border-white`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </FadeInWhenVisible>
  ;<FadeInWhenVisible>
    <section className="py-16 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills You'll Master</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {course.skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full mr-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold">{skill}</h3>
              </div>
              <p className="text-gray-600">
                Master industry-standard tools and best practices for professional development.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </FadeInWhenVisible>
  ;<FadeInWhenVisible>
    <section className={`py-16 px-8 bg-gradient-to-br ${course.bgGradient}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Career Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {course.careers.map((career, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-12 h-12 flex items-center justify-center bg-${course.secondaryColor}/10 rounded-full mr-4`}
                >
                  {career.icon}
                </div>
                <h3 className="text-xl font-semibold">{career.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{career.description}</p>
              <div className="flex flex-wrap gap-2">
                {career.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 bg-${course.secondaryColor}/10 text-${course.secondaryColor} rounded-full text-sm`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </FadeInWhenVisible>
  ;<FadeInWhenVisible>
    <section className="py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Course Schedule</h2>
      <div className="max-w-4xl mx-auto">
        {course.schedule.map((week, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center mb-6 p-4 bg-white rounded-lg shadow-md"
          >
            <div
              className={`w-16 h-16 flex items-center justify-center bg-${course.secondaryColor}/10 rounded-full mr-6`}
            >
              <Calendar className={`w-8 h-8 text-${course.secondaryColor}`} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Week {week.week}</h3>
              <p className="text-gray-600">{week.topic}</p>
            </div>
            <div className="text-right">
              <span className="text-sm text-gray-500">{week.hours} hours</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </FadeInWhenVisible>
  ;<FadeInWhenVisible>
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Course</h2>
        <p className="text-gray-600 text-lg mb-8">{course.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What you'll learn</h3>
            <div className="space-y-3">
              {course.outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <Target className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{outcome}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h3>
            <div className="space-y-3">
              {course.requirements.map((req, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <Brain className="w-5 h-5 text-violet-500 mr-3" />
                  <span className="text-gray-700">{req}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </FadeInWhenVisible>
  ;<FadeInWhenVisible>
    <section className="py-16 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {course.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{testimonial.content}</p>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </FadeInWhenVisible>
  ;<FadeInWhenVisible>
    <section className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Begin Your Learning Journey</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take the first step towards mastering new skills and advancing your career
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-xl p-6 h-fit"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Course Registration</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700">
                    Select Course
                  </label>
                  <select
                    id="course"
                    name="course"
                    required
                    value={formData.course}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"
                  >
                    {courseOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"
                  placeholder="Tell us about your learning goals and any specific requirements..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-${course.secondaryColor} hover:bg-${course.secondaryColor}/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${course.secondaryColor} transition-colors duration-200`}
              >
                <Send className="w-4 h-4 mr-2" />
                Submit Registration
              </motion.button>
            </form>
          </motion.div>

          {/* Features Section */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Courses?</h3>
              <div className="grid grid-cols-1 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className={`p-3 bg-${course.accentColor}/10 rounded-lg`}>{feature.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{feature.title}</h4>
                      <p className="mt-1 text-gray-500">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </FadeInWhenVisible>
  </div>
  )
}

