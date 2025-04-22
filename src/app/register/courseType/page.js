"use client"
import { useEffect, useState, useRef, useCallback } from "react"
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  BookOpen,
  Users,
  Award,
  Target,
  CheckCircle,
  Calendar,
  Briefcase,
  GraduationCap,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Rocket,
  ShieldCheck,
  Code,
  Globe,
  Smartphone,
  BarChart2,
  Palette,
  TrendingUp,
  Zap,
  Database,
  Shield,
  Layers,
  Star,
  Send,
  Play,
  X,
  Menu,
  Heart,
  Clock,
  Sparkles,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Course", path: "/courses" },
  { name: "Trainers", path: "/trainers" },
  { name: "Event", path: "/event" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
]

// Enhanced course data with more details
const courseData = {
  "website-development": {
    title: "FullStack Development",
    subtitle: "Master FullStack Development in 12 Weeks",
    description:
      "Transform into a professional full-stack developer with our intensive, project-based program. Learn to build modern web applications from scratch using cutting-edge technologies.",
    highlights: [
      "500+ hours of hands-on coding",
      "10+ real-world projects",
      "1:1 mentorship sessions",
      "Career support & interview prep",
    ],
    outcomes: [
      "Develop dynamic and responsive web applications",
      "Work with frontend and backend technologies",
      "Understand database management and API integration",
      "Deploy and maintain applications efficiently",
      "Implement authentication and security best practices",
      "Optimize application performance",
    ],
    requirements: [
      "Basic understanding of programming concepts",
      "Familiarity with HTML, CSS, and JavaScript",
      "Dedication to commit 20+ hours/week",
      "A laptop with 8GB RAM (minimum)",
    ],
    skills: [
      "React & Next.js",
      "Node.js & Express",
      "MongoDB & PostgreSQL",
      "RESTful & GraphQL APIs",
      "Authentication (OAuth, JWT)",
      "Docker & Kubernetes",
      "AWS & CI/CD Pipelines",
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        role: "Software Developer at TechCorp",
        content:
          "This course completely transformed my career. Within 3 months of completing the program, I landed my dream job with a 40% salary increase. The hands-on projects were exactly what employers were looking for.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      },
      {
        name: "Michael Chen",
        role: "Full Stack Engineer at StartupX",
        content:
          "The curriculum was perfectly balanced between theory and practice. The capstone project I built during the course became the centerpiece of my portfolio and helped me stand out during interviews.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      },
      {
        name: "Priya Patel",
        role: "Frontend Developer at DesignHub",
        content:
          "As a career switcher, I was nervous about breaking into tech. The structured learning path and mentor support gave me the confidence and skills I needed to succeed.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      },
    ],
    schedule: [
      {
        week: 1,
        topic: "Frontend Fundamentals",
        hours: 30,
        details: [
          "HTML5 & CSS3 mastery",
          "Responsive design principles",
          "JavaScript ES6+ features",
          "DOM manipulation",
        ],
      },
      {
        week: 2,
        topic: "React & State Management",
        hours: 35,
        details: ["React components & hooks", "Context API", "Redux Toolkit", "TypeScript integration"],
      },
      {
        week: 3,
        topic: "Backend Development",
        hours: 40,
        details: ["Node.js fundamentals", "Express framework", "REST API design", "Middleware architecture"],
      },
      {
        week: 4,
        topic: "Database Integration",
        hours: 30,
        details: ["SQL vs NoSQL", "MongoDB with Mongoose", "PostgreSQL with Prisma", "Database modeling"],
      },
      {
        week: 5,
        topic: "Authentication & Security",
        hours: 25,
        details: ["JWT implementation", "OAuth 2.0 flows", "Password hashing", "CORS & CSRF protection"],
      },
      {
        week: 6,
        topic: "Deployment & DevOps",
        hours: 30,
        details: ["Docker containers", "Kubernetes basics", "AWS EC2 & S3", "CI/CD pipelines"],
      },
    ],
    careers: [
      {
        title: "Full Stack Developer",
        salary: "$85,000 - $130,000",
        description: "Build complete web applications and services end-to-end",
        icon: <Code className="w-6 h-6" />,
        skills: ["React", "Node.js", "Database Management"],
      },
      {
        title: "Frontend Engineer",
        salary: "$75,000 - $120,000",
        description: "Specialize in creating engaging user interfaces and experiences",
        icon: <Smartphone className="w-6 h-6" />,
        skills: ["UI/UX", "React", "State Management"],
      },
      {
        title: "Backend Developer",
        salary: "$80,000 - $125,000",
        description: "Focus on server-side logic, databases, and API development",
        icon: <Globe className="w-6 h-6" />,
        skills: ["API Design", "Database", "Security"],
      },
      {
        title: "DevOps Engineer",
        salary: "$90,000 - $140,000",
        description: "Manage deployment pipelines and cloud infrastructure",
        icon: <Rocket className="w-6 h-6" />,
        skills: ["CI/CD", "Cloud Services", "Monitoring"],
      },
    ],
    videoBackground: "/full.mp4",
    bgGradient: "from-blue-50 to-cyan-50",
    accentColor: "cyan-600",
    secondaryColor: "blue-600",
    headerBg: "from-blue-600 to-cyan-600",
    pricing: {
      fullPrice: 2999,
      currentPrice: 2499,
      paymentPlans: [
        {
          name: "Pay in Full",
          price: 2499,
          savings: 500,
          perks: ["$500 savings", "Free career coaching session"],
        },
        {
          name: "3-Month Installments",
          price: 899,
          total: 2697,
          perks: ["Flexible payments", "No credit check"],
        },
        {
          name: "6-Month Installments",
          price: 499,
          total: 2994,
          perks: ["Most flexible", "Deferred payment option"],
        },
      ],
    },
  },
  "digital-marketing": {
    title: "Digital Marketing",
    subtitle: "Master Digital Marketing in 10 Weeks",
    description:
      "Become a digital marketing expert with our comprehensive program. Learn to create and execute effective marketing strategies across multiple digital channels.",
    highlights: [
      "300+ hours of practical training",
      "8+ real-world campaigns",
      "1:1 mentorship sessions",
      "Industry certification prep",
    ],
    outcomes: [
      "Create comprehensive digital marketing strategies",
      "Execute effective social media campaigns",
      "Optimize websites for search engines",
      "Analyze marketing data and metrics",
      "Manage paid advertising campaigns",
      "Create compelling content for various platforms",
    ],
    requirements: [
      "Basic computer skills",
      "Interest in marketing and communication",
      "Dedication to commit 15+ hours/week",
      "A laptop with reliable internet connection",
    ],
    skills: [
      "SEO & SEM",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Google Analytics",
      "Facebook & Google Ads",
      "Marketing Automation",
    ],
    testimonials: [
      {
        name: "Jessica Williams",
        role: "Marketing Manager at BrandCo",
        content:
          "This program gave me the practical skills I needed to advance my career. The hands-on approach and real-world projects helped me build a portfolio that impressed my current employer.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      },
      {
        name: "David Rodriguez",
        role: "Digital Marketing Specialist at GrowthAgency",
        content:
          "The instructors were industry professionals who shared valuable insights you can't find in textbooks. I was able to implement strategies from the course immediately in my job.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      },
      {
        name: "Aisha Khan",
        role: "Social Media Manager at TrendSetters",
        content:
          "As someone transitioning from traditional marketing, this course was exactly what I needed. The step-by-step approach to digital channels and analytics made the learning curve manageable.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      },
    ],
    schedule: [
      {
        week: 1,
        topic: "Digital Marketing Fundamentals",
        hours: 25,
        details: [
          "Marketing principles",
          "Digital landscape overview",
          "Customer journey mapping",
          "Brand positioning",
        ],
      },
      {
        week: 2,
        topic: "Content Marketing",
        hours: 30,
        details: [
          "Content strategy development",
          "Copywriting for digital",
          "Content calendars",
          "Storytelling techniques",
        ],
      },
      {
        week: 3,
        topic: "Search Engine Optimization",
        hours: 35,
        details: ["On-page SEO", "Off-page SEO", "Technical SEO", "Keyword research"],
      },
      {
        week: 4,
        topic: "Social Media Marketing",
        hours: 30,
        details: ["Platform strategies", "Community management", "Paid social campaigns", "Content creation"],
      },
      {
        week: 5,
        topic: "Email Marketing",
        hours: 25,
        details: ["List building", "Email automation", "A/B testing", "Campaign optimization"],
      },
      {
        week: 6,
        topic: "Analytics & Reporting",
        hours: 30,
        details: ["Google Analytics", "KPI setting", "Performance reporting", "Data visualization"],
      },
    ],
    careers: [
      {
        title: "Digital Marketing Manager",
        salary: "$70,000 - $110,000",
        description: "Oversee all digital marketing initiatives and strategies",
        icon: <TrendingUp className="w-6 h-6" />,
        skills: ["Strategy", "Team Management", "Analytics"],
      },
      {
        title: "SEO Specialist",
        salary: "$60,000 - $90,000",
        description: "Optimize websites and content for search engines",
        icon: <Globe className="w-6 h-6" />,
        skills: ["Technical SEO", "Content Optimization", "Analytics"],
      },
      {
        title: "Social Media Manager",
        salary: "$55,000 - $85,000",
        description: "Manage brand presence across social platforms",
        icon: <MessageSquare className="w-6 h-6" />,
        skills: ["Content Creation", "Community Management", "Paid Social"],
      },
      {
        title: "PPC Specialist",
        salary: "$65,000 - $95,000",
        description: "Manage paid advertising campaigns across platforms",
        icon: <BarChart2 className="w-6 h-6" />,
        skills: ["Google Ads", "Facebook Ads", "Campaign Optimization"],
      },
    ],
    videoBackground: "/digi.mp4",
    bgGradient: "from-blue-50 to-cyan-50",
    accentColor: "cyan-600",
    secondaryColor: "blue-600",
    headerBg: "from-blue-600 to-cyan-600",
    pricing: {
      fullPrice: 2499,
      currentPrice: 1999,
      paymentPlans: [
        {
          name: "Pay in Full",
          price: 1999,
          savings: 500,
          perks: ["$500 savings", "Free marketing toolkit"],
        },
        {
          name: "3-Month Installments",
          price: 699,
          total: 2097,
          perks: ["Flexible payments", "No credit check"],
        },
        {
          name: "6-Month Installments",
          price: 399,
          total: 2394,
          perks: ["Most flexible", "Deferred payment option"],
        },
      ],
    },
  },
  "app-development": {
    title: "Mobile App Development",
    subtitle: "Master Mobile App Development in 14 Weeks",
    description:
      "Become a professional mobile app developer capable of building native and cross-platform applications. Learn to create engaging, user-friendly mobile experiences for iOS and Android.",
    highlights: [
      "550+ hours of hands-on coding",
      "12+ app projects for your portfolio",
      "1:1 mentorship sessions",
      "App store submission guidance",
    ],
    outcomes: [
      "Build native iOS and Android applications",
      "Develop cross-platform apps with React Native",
      "Implement responsive UI/UX designs",
      "Integrate APIs and backend services",
      "Implement user authentication and data storage",
      "Publish apps to the App Store and Google Play",
    ],
    requirements: [
      "Basic programming knowledge",
      "Familiarity with JavaScript (preferred)",
      "Dedication to commit 20+ hours/week",
      "A laptop with 8GB RAM (minimum)",
    ],
    skills: [
      "React Native",
      "Swift & SwiftUI",
      "Kotlin",
      "Firebase",
      "Redux & Context API",
      "Native APIs & Modules",
      "App Performance Optimization",
    ],
    testimonials: [
      {
        name: "Alex Rivera",
        role: "Mobile Developer at AppWorks",
        content:
          "This course gave me the skills to transition from web to mobile development. Within weeks of completing the program, I was hired to build apps for a major retail company.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      },
      {
        name: "Sophia Lee",
        role: "iOS Developer at TechStart",
        content:
          "The iOS-specific modules were incredibly detailed and practical. I went from zero knowledge to publishing my first app in the App Store by the end of the course.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      },
      {
        name: "Marcus Johnson",
        role: "React Native Developer at MobileFirst",
        content:
          "Learning React Native through this program was a game-changer for my career. The instructors were experts who guided us through real-world app development challenges.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      },
    ],
    schedule: [
      {
        week: 1,
        topic: "Mobile Development Fundamentals",
        hours: 35,
        details: [
          "Mobile platforms overview",
          "UI/UX for mobile",
          "Development environment setup",
          "App architecture patterns",
        ],
      },
      {
        week: 2,
        topic: "React Native Essentials",
        hours: 40,
        details: ["React Native components", "Navigation", "Styling and layouts", "Handling user input"],
      },
      {
        week: 3,
        topic: "iOS Development with Swift",
        hours: 45,
        details: ["Swift programming", "UIKit fundamentals", "SwiftUI introduction", "iOS app lifecycle"],
      },
      {
        week: 4,
        topic: "Android Development with Kotlin",
        hours: 45,
        details: [
          "Kotlin programming",
          "Android UI components",
          "Activities and fragments",
          "Android app architecture",
        ],
      },
      {
        week: 5,
        topic: "Data & API Integration",
        hours: 35,
        details: ["RESTful API integration", "GraphQL clients", "Local storage options", "Firebase integration"],
      },
      {
        week: 6,
        topic: "App Deployment & Publishing",
        hours: 30,
        details: [
          "App store guidelines",
          "App submission process",
          "CI/CD for mobile apps",
          "App analytics implementation",
        ],
      },
    ],
    careers: [
      {
        title: "Mobile App Developer",
        salary: "$90,000 - $140,000",
        description: "Build native and cross-platform mobile applications",
        icon: <Smartphone className="w-6 h-6" />,
        skills: ["React Native", "iOS", "Android"],
      },
      {
        title: "iOS Developer",
        salary: "$95,000 - $145,000",
        description: "Specialize in creating applications for Apple devices",
        icon: <Zap className="w-6 h-6" />,
        skills: ["Swift", "SwiftUI", "iOS SDK"],
      },
      {
        title: "Android Developer",
        salary: "$90,000 - $135,000",
        description: "Focus on building apps for the Android ecosystem",
        icon: <Layers className="w-6 h-6" />,
        skills: ["Kotlin", "Android SDK", "Material Design"],
      },
      {
        title: "Mobile UX/UI Designer",
        salary: "$80,000 - $130,000",
        description: "Design intuitive and engaging mobile interfaces",
        icon: <Palette className="w-6 h-6" />,
        skills: ["UI Design", "Prototyping", "User Testing"],
      },
    ],
    videoBackground: "/appd.mp4",
    bgGradient: "from-blue-50 to-cyan-50",
    accentColor: "cyan-600",
    secondaryColor: "blue-600",
    headerBg: "from-blue-600 to-cyan-600",
    pricing: {
      fullPrice: 3499,
      currentPrice: 2999,
      paymentPlans: [
        {
          name: "Pay in Full",
          price: 2999,
          savings: 500,
          perks: ["$500 savings", "Free app publishing guide"],
        },
        {
          name: "3-Month Installments",
          price: 1049,
          total: 3147,
          perks: ["Flexible payments", "No credit check"],
        },
        {
          name: "6-Month Installments",
          price: 549,
          total: 3294,
          perks: ["Most flexible", "Deferred payment option"],
        },
      ],
    },
  },
  "scrum-master": {
    title: "Scrum Master Certification",
    subtitle: "Become a Certified Scrum Master in 6 Weeks",
    description:
      "Master Agile methodologies and prepare for industry-recognized Scrum Master certification. Learn to lead development teams and implement Agile practices effectively.",
    highlights: [
      "150+ hours of specialized training",
      "5+ real-world case studies",
      "1:1 coaching sessions",
      "Certification exam preparation",
    ],
    outcomes: [
      "Lead Agile teams effectively",
      "Implement Scrum frameworks in various environments",
      "Facilitate Scrum events and ceremonies",
      "Remove impediments for development teams",
      "Coach teams on Agile best practices",
      "Pass Scrum Master certification exams",
    ],
    requirements: [
      "Basic understanding of software development",
      "Familiarity with project management concepts",
      "Dedication to commit 10+ hours/week",
      "A laptop for virtual sessions",
    ],
    skills: [
      "Scrum Framework",
      "Agile Methodologies",
      "Sprint Planning",
      "Backlog Management",
      "Team Facilitation",
      "Conflict Resolution",
      "Continuous Improvement",
    ],
    testimonials: [
      {
        name: "Thomas Wilson",
        role: "Scrum Master at EnterpriseAgile",
        content:
          "This program prepared me thoroughly for my PSM certification and gave me practical tools I use daily as a Scrum Master. The role-playing scenarios were particularly valuable.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      },
      {
        name: "Lakshmi Patel",
        role: "Agile Coach at TechSolutions",
        content:
          "I transitioned from a developer role to Scrum Master after completing this certification. The course provided both theoretical knowledge and practical experience needed to excel.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      },
      {
        name: "Robert Chen",
        role: "Project Manager at AgileWorks",
        content:
          "The instructors brought real-world experience that made complex Agile concepts accessible. I was able to implement improvements in my team immediately during the course.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      },
    ],
    schedule: [
      {
        week: 1,
        topic: "Agile & Scrum Fundamentals",
        hours: 20,
        details: [
          "Agile manifesto & principles",
          "Scrum framework overview",
          "Roles & responsibilities",
          "Scrum values",
        ],
      },
      {
        week: 2,
        topic: "Scrum Events & Artifacts",
        hours: 25,
        details: ["Sprint planning", "Daily scrums", "Sprint reviews & retrospectives", "Product & sprint backlogs"],
      },
      {
        week: 3,
        topic: "Facilitation & Coaching",
        hours: 25,
        details: ["Team dynamics", "Conflict resolution", "Effective communication", "Coaching techniques"],
      },
      {
        week: 4,
        topic: "Scaling Agile",
        hours: 20,
        details: ["Large-scale Scrum (LeSS)", "Scaled Agile Framework (SAFe)", "Scrum of Scrums", "Distributed teams"],
      },
      {
        week: 5,
        topic: "Metrics & Continuous Improvement",
        hours: 20,
        details: ["Agile metrics", "Velocity & burndown charts", "Continuous improvement", "Impediment removal"],
      },
      {
        week: 6,
        topic: "Certification Preparation",
        hours: 25,
        details: ["PSM I exam preparation", "CSM exam preparation", "Practice assessments", "Final case study"],
      },
    ],
    careers: [
      {
        title: "Scrum Master",
        salary: "$85,000 - $125,000",
        description: "Guide development teams in implementing Scrum practices",
        icon: <Target className="w-6 h-6" />,
        skills: ["Scrum", "Team Facilitation", "Impediment Removal"],
      },
      {
        title: "Agile Coach",
        salary: "$110,000 - $150,000",
        description: "Coach organizations in Agile transformation",
        icon: <Users className="w-6 h-6" />,
        skills: ["Coaching", "Change Management", "Organizational Agility"],
      },
      {
        title: "Product Owner",
        salary: "$90,000 - $140,000",
        description: "Manage product backlogs and maximize value delivery",
        icon: <Briefcase className="w-6 h-6" />,
        skills: ["Product Management", "Backlog Prioritization", "Stakeholder Management"],
      },
      {
        title: "Agile Project Manager",
        salary: "$95,000 - $135,000",
        description: "Lead projects using Agile methodologies",
        icon: <Calendar className="w-6 h-6" />,
        skills: ["Project Planning", "Risk Management", "Agile Methodologies"],
      },
    ],
    videoBackground: "/scrum.mp4",
    bgGradient: "from-blue-50 to-cyan-50",
    accentColor: "cyan-600",
    secondaryColor: "blue-600",
    headerBg: "from-blue-600 to-cyan-600",
    pricing: {
      fullPrice: 1999,
      currentPrice: 1699,
      paymentPlans: [
        {
          name: "Pay in Full",
          price: 1699,
          savings: 300,
          perks: ["$300 savings", "Free exam voucher"],
        },
        {
          name: "3-Month Installments",
          price: 599,
          total: 1797,
          perks: ["Flexible payments", "No credit check"],
        },
        {
          name: "6-Month Installments",
          price: 319,
          total: 1914,
          perks: ["Most flexible", "Deferred payment option"],
        },
      ],
    },
  },
  "ai-cybersecurity": {
    title: "AI and Cybersecurity",
    subtitle: "Master AI-Powered Cybersecurity in 14 Weeks",
    description:
      "Become an expert in applying artificial intelligence to cybersecurity challenges. Learn to detect threats, prevent attacks, and secure systems using cutting-edge AI technologies.",
    highlights: [
      "500+ hours of specialized training",
      "10+ hands-on security projects",
      "1:1 mentorship with security experts",
      "Ethical hacking lab access",
    ],
    outcomes: [
      "Implement AI-based threat detection systems",
      "Conduct vulnerability assessments and penetration testing",
      "Design secure systems and networks",
      "Apply machine learning to security challenges",
      "Respond to and mitigate security incidents",
      "Develop security policies and compliance frameworks",
    ],
    requirements: [
      "Basic programming knowledge (Python preferred)",
      "Familiarity with networking concepts",
      "Dedication to commit 20+ hours/week",
      "A laptop with 16GB RAM (recommended)",
    ],
    skills: [
      "Machine Learning for Security",
      "Network Security",
      "Ethical Hacking",
      "Security Information & Event Management",
      "Threat Intelligence",
      "Incident Response",
      "Security Automation",
    ],
    testimonials: [
      {
        name: "Elena Rodriguez",
        role: "Security Analyst at CyberDefense",
        content:
          "This program bridged the gap between traditional security and AI-powered approaches. The hands-on labs gave me practical experience with tools I now use daily in my security role.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      },
      {
        name: "James Wilson",
        role: "Cybersecurity Engineer at SecureTech",
        content:
          "The AI components of this course were cutting-edge and immediately applicable. I implemented an anomaly detection system at my company based directly on what I learned.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      },
      {
        name: "Olivia Chang",
        role: "Threat Intelligence Analyst at GuardNet",
        content:
          "The combination of cybersecurity fundamentals with advanced AI techniques made this course invaluable. The instructors' industry experience provided context that you can't get from textbooks alone.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      },
    ],
    schedule: [
      {
        week: 1,
        topic: "Cybersecurity Fundamentals",
        hours: 35,
        details: ["Security principles", "Threat landscape", "Attack vectors", "Defense in depth"],
      },
      {
        week: 2,
        topic: "Network Security",
        hours: 40,
        details: ["Network architecture", "Firewalls & IDS/IPS", "VPNs & encryption", "Network monitoring"],
      },
      {
        week: 3,
        topic: "AI & Machine Learning Basics",
        hours: 45,
        details: [
          "ML algorithms overview",
          "Supervised & unsupervised learning",
          "Neural networks",
          "Data preprocessing",
        ],
      },
      {
        week: 4,
        topic: "AI for Threat Detection",
        hours: 45,
        details: [
          "Anomaly detection",
          "User behavior analytics",
          "Malware classification",
          "Predictive security analytics",
        ],
      },
      {
        week: 5,
        topic: "Penetration Testing",
        hours: 40,
        details: [
          "Reconnaissance techniques",
          "Vulnerability scanning",
          "Exploitation frameworks",
          "Post-exploitation",
        ],
      },
      {
        week: 6,
        topic: "Incident Response",
        hours: 35,
        details: ["IR frameworks", "Digital forensics", "Threat hunting", "Recovery strategies"],
      },
    ],
    careers: [
      {
        title: "Security Data Scientist",
        salary: "$110,000 - $160,000",
        description: "Apply data science and ML to solve security challenges",
        icon: <Database className="w-6 h-6" />,
        skills: ["Machine Learning", "Data Analysis", "Security Analytics"],
      },
      {
        title: "Cybersecurity Engineer",
        salary: "$100,000 - $150,000",
        description: "Design and implement secure systems and networks",
        icon: <Shield className="w-6 h-6" />,
        skills: ["Network Security", "System Hardening", "Security Architecture"],
      },
      {
        title: "Threat Intelligence Analyst",
        salary: "$90,000 - $140,000",
        description: "Analyze and respond to emerging security threats",
        icon: <Target className="w-6 h-6" />,
        skills: ["Threat Analysis", "Intelligence Gathering", "Risk Assessment"],
      },
      {
        title: "Security Automation Engineer",
        salary: "$105,000 - $155,000",
        description: "Build automated security monitoring and response systems",
        icon: <Zap className="w-6 h-6" />,
        skills: ["Security Automation", "SOAR Platforms", "Scripting"],
      },
    ],
    videoBackground: "/cyb.mp4",
    bgGradient: "from-blue-50 to-cyan-50",
    accentColor: "cyan-600",
    secondaryColor: "blue-600",
    headerBg: "from-blue-600 to-cyan-600",
    pricing: {
      fullPrice: 3999,
      currentPrice: 3499,
      paymentPlans: [
        {
          name: "Pay in Full",
          price: 3499,
          savings: 500,
          perks: ["$500 savings", "Free security tools bundle"],
        },
        {
          name: "3-Month Installments",
          price: 1199,
          total: 3597,
          perks: ["Flexible payments", "No credit check"],
        },
        {
          name: "6-Month Installments",
          price: 629,
          total: 3774,
          perks: ["Most flexible", "Deferred payment option"],
        },
      ],
    },
  },
  "product-management": {
    title: "Product Management",
    subtitle: "Become a Product Manager in 10 Weeks",
    description:
      "Master the art and science of product management. Learn to identify market opportunities, define product strategy, and lead cross-functional teams to deliver successful products.",
    highlights: [
      "300+ hours of specialized training",
      "8+ product case studies",
      "1:1 mentorship with product leaders",
      "Portfolio-building projects",
    ],
    outcomes: [
      "Define product vision and strategy",
      "Conduct market research and user interviews",
      "Create product roadmaps and specifications",
      "Prioritize features using data-driven methods",
      "Lead agile development teams",
      "Analyze metrics and make product decisions",
    ],
    requirements: [
      "Basic understanding of business concepts",
      "Familiarity with technology products",
      "Dedication to commit 15+ hours/week",
      "A laptop for workshops and projects",
    ],
    skills: [
      "Product Strategy",
      "User Research",
      "Wireframing & Prototyping",
      "Agile Methodologies",
      "Data Analysis",
      "Stakeholder Management",
      "Product Marketing",
    ],
    testimonials: [
      {
        name: "Daniel Park",
        role: "Product Manager at TechInnovate",
        content:
          "This program gave me the structured approach to product management I needed. The frameworks and tools I learned helped me transition from engineering to product management seamlessly.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      },
      {
        name: "Rachel Green",
        role: "Senior Product Manager at ProductFirst",
        content:
          "The real-world case studies and product challenges were invaluable. I was able to apply the concepts immediately in my current role, which led to a promotion within months.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      },
      {
        name: "Miguel Sanchez",
        role: "Product Owner at AgileWorks",
        content:
          "As someone transitioning from project management, this course provided exactly what I needed to understand the product mindset. The mentorship component was particularly valuable.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      },
    ],
    schedule: [
      {
        week: 1,
        topic: "Product Management Fundamentals",
        hours: 30,
        details: [
          "Product management overview",
          "Product lifecycle",
          "Product vs. project management",
          "Product manager responsibilities",
        ],
      },
      {
        week: 2,
        topic: "User Research & Discovery",
        hours: 35,
        details: ["Market research techniques", "User interviews", "Personas & journey mapping", "Problem definition"],
      },
      {
        week: 3,
        topic: "Product Strategy & Roadmapping",
        hours: 30,
        details: ["Vision & strategy development", "OKRs & goal setting", "Roadmap creation", "Stakeholder alignment"],
      },
      {
        week: 4,
        topic: "Product Design & Specification",
        hours: 35,
        details: [
          "Wireframing basics",
          "Prototyping tools",
          "User stories & requirements",
          "PRDs & specification documents",
        ],
      },
      {
        week: 5,
        topic: "Agile Product Development",
        hours: 30,
        details: ["Agile methodologies", "Sprint planning", "Backlog management", "Working with development teams"],
      },
      {
        week: 6,
        topic: "Product Analytics & Growth",
        hours: 30,
        details: ["Key metrics & KPIs", "A/B testing", "Product analytics tools", "Data-driven decisions"],
      },
    ],
    careers: [
      {
        title: "Product Manager",
        salary: "$95,000 - $145,000",
        description: "Define and execute product strategy and roadmap",
        icon: <Target className="w-6 h-6" />,
        skills: ["Product Strategy", "User Research", "Roadmapping"],
      },
      {
        title: "Product Owner",
        salary: "$90,000 - $135,000",
        description: "Manage product backlog and work with development teams",
        icon: <Briefcase className="w-6 h-6" />,
        skills: ["Backlog Management", "User Stories", "Agile"],
      },
      {
        title: "Product Marketing Manager",
        salary: "$85,000 - $130,000",
        description: "Develop go-to-market strategies for products",
        icon: <TrendingUp className="w-6 h-6" />,
        skills: ["Marketing Strategy", "Positioning", "Launch Planning"],
      },
      {
        title: "Growth Product Manager",
        salary: "$100,000 - $150,000",
        description: "Focus on metrics and strategies to grow product adoption",
        icon: <BarChart2 className="w-6 h-6" />,
        skills: ["Growth Metrics", "A/B Testing", "User Acquisition"],
      },
    ],
    videoBackground: "/prod.mp4",
    bgGradient: "from-blue-50 to-cyan-50",
    accentColor: "cyan-600",
    secondaryColor: "blue-600",
    headerBg: "from-blue-600 to-cyan-600",
    pricing: {
      fullPrice: 2799,
      currentPrice: 2299,
      paymentPlans: [
        {
          name: "Pay in Full",
          price: 2299,
          savings: 500,
          perks: ["$500 savings", "Free product management toolkit"],
        },
        {
          name: "3-Month Installments",
          price: 799,
          total: 2397,
          perks: ["Flexible payments", "No credit check"],
        },
        {
          name: "6-Month Installments",
          price: 429,
          total: 2574,
          perks: ["Most flexible", "Deferred payment option"],
        },
      ],
    },
  },
}

const courseOptions = [
  { value: "FullStack Development", label: "website-development" },
  { value: "digital-marketing", label: "Digital Marketing" },
  { value: "app-development", label: "Mobile App Development" },
  { value: "scrum-master", label: "Scrum Master Certification" },
  { value: "ai-cybersecurity", label: "AI and Cybersecurity" },
  { value: "product-management", label: "Product Management" },
]

const features = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Industry-Proven Curriculum",
    description: "Content designed with hiring managers at top tech companies",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "1:1 Mentorship",
    description: "Weekly sessions with senior developers",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Job Guarantee",
    description: "Get hired within 6 months or your money back",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Certification",
    description: "Recognized by 500+ employers worldwide",
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: "Career Services",
    description: "Resume reviews, mock interviews, and salary negotiation",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Portfolio Projects",
    description: "Build 10+ apps for your professional portfolio",
  },
]
const FadeInWhenVisible = ({ children, delay = 0, direction = "up", duration = 0.6 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  let initialY = 0
  let initialX = 0
  let initialScale = 1
  if (direction === "up") initialY = 50
  if (direction === "down") initialY = -50
  if (direction === "left") initialX = 50
  if (direction === "right") initialX = -50
  if (direction === "scale") initialScale = 0.9
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: initialY,
        x: initialX,
        scale: initialScale,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
              x: 0,
              scale: 1,
            }
          : {
              opacity: 0,
              y: initialY,
              x: initialX,
              scale: initialScale,
            }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
    >
      {children}
    </motion.div>
  )
}
const AccordionItem = ({ week, topic, hours, details, index }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="mb-4 overflow-hidden"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex justify-between items-center w-full p-6 text-left rounded-lg transition-all duration-300",
          isOpen
            ? "bg-indigo-50 border border-indigo-100 shadow-md"
            : "bg-white hover:bg-gray-50 border border-gray-100 hover:shadow-sm",
        )}
        whileHover={{ scale: isOpen ? 1 : 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex items-center">
          <motion.div
            className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-full mr-4"
            animate={{ rotate: isOpen ? 360 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-indigo-600 font-bold">{week}</span>
          </motion.div>
          <div>
            <h3 className="text-lg font-semibold">{topic}</h3>
            <p className="text-gray-600">{hours} hours</p>
          </div>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-indigo-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-indigo-600" />
          )}
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-white border border-t-0 border-gray-200 rounded-b-lg"
          >
            <div className="p-6 pt-2">
              <ul className="space-y-3">
                {details.map((detail, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
const VideoModal = ({ isOpen, onClose, videoSrc }) => {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <video src={videoSrc} className="w-full aspect-video" controls autoPlay />
      </motion.div>
    </motion.div>
  )
}
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 45,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds -= 1
        } else {
          seconds = 59
          if (minutes > 0) {
            minutes -= 1
          } else {
            minutes = 59
            if (hours > 0) {
              hours -= 1
            } else {
              hours = 23
              if (days > 0) {
                days -= 1
              }
            }
          }
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex justify-center space-x-4 my-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="bg-white w-16 h-16 md:w-20 md:h-20 rounded-lg shadow-lg flex items-center justify-center">
            <span className="text-2xl md:text-3xl font-bold text-indigo-600">{value.toString().padStart(2, "0")}</span>
          </div>
          <span className="text-xs md:text-sm mt-2 text-gray-600 capitalize">{unit}</span>
        </div>
      ))}
    </div>
  )
}

// Enhanced testimonial card with animations
const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 border border-gray-100"
    >
      <div className="flex items-center mb-6">
        <motion.img
          whileHover={{ scale: 1.1 }}
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-indigo-100"
        />
        <div>
          <h4 className="text-xl font-semibold">{testimonial.name}</h4>
          <p className="text-indigo-600">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
      <div className="flex">
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// Mobile navigation component
const MobileNav = ({ isOpen, onClose, activeSection }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "spring", damping: 25 }}
          className="fixed inset-0 z-50 bg-white"
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-6 border-b">
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-8 h-8 text-indigo-600" />
                <h1 className="text-xl font-bold">Course Registration</h1>
              </div>
              <button onClick={onClose} className="p-2">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-6">
              <nav className="space-y-6">
                {["overview", "curriculum", "outcomes", "testimonials", "pricing", "registration"].map(
                  (section, index) => (
                    <a
                      key={section}
                      href={`#${section}`}
                      onClick={onClose}
                      className={cn(
                        "block text-xl capitalize py-3 px-4 rounded-lg transition-colors",
                        activeSection === index ? "bg-indigo-50 text-indigo-600 font-medium" : "hover:bg-gray-50",
                      )}
                    >
                      {section}
                    </a>
                  ),
                )}
              </nav>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function CourseRegistration() {
  const router = useRouter()
  // Use local storage to persist the selected course
  const [selectedCourseType, setSelectedCourseType] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("selectedCourse")
      return saved ? JSON.parse(saved) : "website-development"
    }
    return "website-development"
  })

  const [showForm, setShowForm] = useState(false)
  // Update localStorage when course changes
  const updateSelectedCourse = (courseType) => {
    setSelectedCourseType(courseType)
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedCourse", JSON.stringify(courseType))
    }
  }

  const course = courseData[selectedCourseType] || courseData["website-development"]

  useEffect(() => {
    const storedCourse = localStorage.getItem("selectedcourseid")
    if (storedCourse) {
      updateSelectedCourse(JSON.parse(storedCourse))
    }
  }, [])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    course: selectedCourseType,
    resume: null,
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeSection, setActiveSection] = useState(0)
  const [selectedPlan, setSelectedPlan] = useState(0)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [isCourseSelectorOpen, setIsCourseSelectorOpen] = useState(false)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Parallax effect for hero section
  const heroRef = useRef(null)
  const [heroParallax, setHeroParallax] = useState({ y: 0 })

  // Update form data when course changes
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      course: selectedCourseType,
    }))
  }, [selectedCourseType])

  // Handle scroll events for section detection and parallax
  useEffect(() => {
    const handleScroll = () => {
      // Section detection
      const sections = document.querySelectorAll("section")
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(index)
        }
      })

      // Parallax effect for hero
      if (heroRef.current) {
        const scrollY = window.scrollY
        setHeroParallax({ y: scrollY * 0.4 })
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)

    // Scroll to the top of the form section with animation
    document.getElementById("registration")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price)
  }

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev)
  }, [])

  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className={`min-h-screen bg-gradient-to-br ${course.bgGradient}`}>
      {/* Navigation Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-cyan-600 z-50" style={{ scaleX }} />

      {/* Mobile Navigation */}
      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} activeSection={activeSection} />

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <VideoModal
            isOpen={isVideoModalOpen}
            onClose={() => setIsVideoModalOpen(false)}
            videoSrc={course.videoBackground}
          />
        )}
      </AnimatePresence>

      {/* Floating CTA Button with pulse effect */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.a
          href="#registration"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center justify-center px-6 py-3 bg-${course.accentColor} text-white font-medium rounded-full shadow-lg shadow-${course.accentColor}/50 relative`}
        >
          <motion.span
            className="absolute inset-0 rounded-full bg-cyan-600 opacity-70"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          />
          <Rocket className="w-5 h-5 mr-2" />
          Enroll Now
        </motion.a>
      </div>
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
                  className="relative overflow-hidden text-md-400 text-gray-900 font-bold hover:text-cyan-700 font-sans transition-colors"
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

      {/* Course Selector Dropdown */}
      <div className="fixed top-20 right-6 z-40">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative"
        >
          <button
            onClick={() => setIsCourseSelectorOpen(!isCourseSelectorOpen)}
            className="flex items-center justify-between w-full bg-white rounded-lg shadow-lg p-3 text-left"
          >
            <span className="font-medium">Explore Courses</span>
            <ChevronDown className={`w-5 h-5 transition-transform ${isCourseSelectorOpen ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {isCourseSelectorOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl overflow-hidden z-50"
              >
                {courseOptions.map((option) => (
                  <motion.button
                    key={option.value}
                    whileHover={{ backgroundColor: "#f3f4f6" }}
                    onClick={() => {
                      updateSelectedCourse(option.value)
                      setIsCourseSelectorOpen(false)
                    }}
                    className={`w-full p-3 text-left ${selectedCourseType === option.value ? "bg-indigo-50 text-indigo-600" : ""}`}
                  >
                    {option.label}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-40 bg-gradient-to-r ${course.headerBg} text-white shadow-lg`}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <GraduationCap className="w-8 h-8" />
            <h1 className="text-xl font-bold">{course.title}</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center space-x-6"
          >
            <a href="#overview" className="hover:text-indigo-200 transition-colors">
              Overview
            </a>
            <a href="#curriculum" className="hover:text-indigo-200 transition-colors">
              Curriculum
            </a>
            <a href="#outcomes" className="hover:text-indigo-200 transition-colors">
              Outcomes
            </a>
            <a href="#pricing" className="hover:text-indigo-200 transition-colors">
              Pricing
            </a>
            <motion.a
              href="#registration"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-white text-cyan-600 rounded-lg font-medium"
            >
              Enroll Now
            </motion.a>
          </motion.div>
          <button className="md:hidden" onClick={() => setIsMobileNavOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background with Parallax */}
        <div className="absolute inset-0 z-0">
          <motion.div style={{ y: heroParallax.y }} className="w-full h-full">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src={course.videoBackground} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </motion.div>
        </div>

        <div className="relative z-10 w-full max-w-7xl px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium mb-6"
            >
              {course.subtitle}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
            >
              Become a {course.title.split(" ")[0]} <br />
              <span className="text-indigo-300">in Just 12 Weeks</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-indigo-100 mb-10 max-w-3xl mx-auto"
            >
              {course.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.a
                href="#registration"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-cyan-600 hover:bg-gray-100 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Enroll Now - {formatPrice(course.pricing.currentPrice)}
              </motion.a>

              <motion.button
                onClick={() => setIsVideoModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg font-bold text-lg transition-all duration-300 flex items-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm py-4 border-t border-white/20"
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <motion.div className="p-2" whileHover={{ y: -5 }}>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-indigo-200">Hours of Content</div>
              </motion.div>
              <motion.div className="p-2" whileHover={{ y: -5 }}>
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-indigo-200">Real Projects</div>
              </motion.div>
              <motion.div className="p-2" whileHover={{ y: -5 }}>
                <div className="text-3xl font-bold text-white">94%</div>
                <div className="text-indigo-200">Job Placement</div>
              </motion.div>
              <motion.div className="p-2" whileHover={{ y: -5 }}>
                <div className="text-3xl font-bold text-white">1:1</div>
                <div className="text-indigo-200">Mentorship</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Course Highlights */}
      <section id="overview" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeInWhenVisible>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why This {course.title} Course Stands Out</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We've designed this program to give you everything you need to succeed in today's competitive job market
              </p>
            </FadeInWhenVisible>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 border border-gray-100 h-full"
                >
                  <motion.div
                    className="w-14 h-14 flex items-center justify-center bg-indigo-100 rounded-full mb-6"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>

          {/* Course highlights */}
          <div className="mt-20">
            <FadeInWhenVisible>
              <div className="bg-indigo-50 rounded-2xl p-8 md:p-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">What You'll Get</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <ul className="space-y-6">
                      {course.highlights.slice(0, Math.ceil(course.highlights.length / 2)).map((highlight, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="bg-white rounded-full p-1 mr-4 shadow-md">
                            <CheckCircle className="w-6 h-6 text-green-500" />
                          </div>
                          <span className="text-lg">{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-6">
                      {course.highlights.slice(Math.ceil(course.highlights.length / 2)).map((highlight, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                          className="flex items-start"
                        >
                          <div className="bg-white rounded-full p-1 mr-4 shadow-md">
                            <CheckCircle className="w-6 h-6 text-green-500" />
                          </div>
                          <span className="text-lg">{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <FadeInWhenVisible>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Curriculum</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our {course.schedule.length}-week program covers everything from fundamentals to advanced concepts
              </p>
            </FadeInWhenVisible>
          </div>

          <div className="space-y-4">
            {course.schedule.map((week, index) => (
              <AccordionItem
                key={index}
                week={week.week}
                topic={week.topic}
                hours={week.hours}
                details={week.details}
                index={index}
              />
            ))}
          </div>

          {/* Requirements */}
          <FadeInWhenVisible delay={0.3}>
            <div className="mt-16 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Requirements</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.requirements.map((req, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>{req}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section id="outcomes" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeInWhenVisible>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What You'll Achieve</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                By the end of this program, you'll have the skills and confidence to excel as a professional{" "}
                {course.title.toLowerCase()} expert
              </p>
            </FadeInWhenVisible>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeInWhenVisible direction="left">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Sparkles className="w-6 h-6 text-indigo-600 mr-2" />
                  Skills You'll Master
                </h3>
                <ul className="space-y-4">
                  {course.skills.map((skill, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="bg-indigo-100 rounded-full p-1 mr-3 flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-indigo-600" />
                      </div>
                      <span className="text-lg">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible direction="right">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Briefcase className="w-6 h-6 text-indigo-600 mr-2" />
                  Career Outcomes
                </h3>
                <div className="space-y-6">
                  {course.careers.map((career, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start">
                        <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-full mr-4 flex-shrink-0">
                          {career.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold">{career.title}</h4>
                          <p className="text-indigo-600 font-medium mb-2">{career.salary}</p>
                          <p className="text-gray-600">{career.description}</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {career.skills.map((skill, i) => (
                              <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeInWhenVisible>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from our graduates who transformed their careers
              </p>
            </FadeInWhenVisible>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {course.testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <FadeInWhenVisible>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Flexible Pricing Options</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose the payment plan that works best for you</p>
              <div className="mt-6 inline-block bg-indigo-50 px-4 py-2 rounded-full text-indigo-700">
                <span className="line-through text-gray-500 mr-2">{formatPrice(course.pricing.fullPrice)}</span>
                <span className="font-bold">{formatPrice(course.pricing.currentPrice)}</span>
                <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                  SAVE {formatPrice(course.pricing.fullPrice - course.pricing.currentPrice)}
                </span>
              </div>
            </FadeInWhenVisible>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {course.pricing.paymentPlans.map((plan, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedPlan(index)}
                  className={cn(
                    "p-8 rounded-xl border-2 cursor-pointer transition-all duration-300",
                    selectedPlan === index
                      ? "border-cyan-600 bg-indigo-50 shadow-lg"
                      : "border-gray-200 hover:border-indigo-300",
                  )}
                >
                  <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">
                      {formatPrice(plan.price)}
                      {plan.name !== "Pay in Full" && <span className="text-lg text-gray-500">/mo</span>}
                    </span>
                    {plan.savings && (
                      <p className="text-green-600 mt-1 flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        Save {formatPrice(plan.savings)}
                      </p>
                    )}
                    {plan.total && <p className="text-gray-500 text-sm mt-1">Total: {formatPrice(plan.total)}</p>}
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.perks.map((perk, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                      >
                        <CheckCircle
                          className={cn(
                            "w-5 h-5 mt-0.5 mr-2 flex-shrink-0",
                            selectedPlan === index ? "text-cyan-600" : "text-gray-400",
                          )}
                        />
                        <span>{perk}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={cn(
                      "w-full py-3 px-6 rounded-lg font-medium transition-colors",
                      selectedPlan === index
                        ? "bg-cyan-600 text-white hover:bg-cyan-700"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200",
                    )}
                  >
                    Choose Plan
                  </motion.button>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>

          <FadeInWhenVisible delay={0.4}>
            <div className="mt-12 bg-indigo-50 p-8 rounded-xl border border-indigo-100">
              <h3 className="text-2xl font-semibold mb-4 text-center">What's Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <motion.div className="flex items-start" whileHover={{ x: 5 }}>
                  <CheckCircle className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Lifetime Access</h4>
                    <p className="text-gray-600 text-sm">All course materials and future updates</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start" whileHover={{ x: 5 }}>
                  <CheckCircle className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Private Community</h4>
                    <p className="text-gray-600 text-sm">Network with peers and instructors</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start" whileHover={{ x: 5 }}>
                  <CheckCircle className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Certificate</h4>
                    <p className="text-gray-600 text-sm">Verified credential for your LinkedIn</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start" whileHover={{ x: 5 }}>
                  <CheckCircle className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Career Support</h4>
                    <p className="text-gray-600 text-sm">Resume reviews and interview prep</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start" whileHover={{ x: 5 }}>
                  <CheckCircle className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Project Feedback</h4>
                    <p className="text-gray-600 text-sm">Personalized code reviews</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start" whileHover={{ x: 5 }}>
                  <CheckCircle className="w-6 h-6 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Job Guarantee</h4>
                    <p className="text-gray-600 text-sm">Get hired within 6 months or money back</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Registration Form */}
      <section id="registration" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeInWhenVisible>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your Career?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join our next cohort starting soon. Limited seats available.
              </p>
              <div className="flex justify-center mt-6">
                <div className="flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="font-medium">Only 8 spots left for this cohort</span>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Section */}
            <FadeInWhenVisible direction="left">
              <motion.div
                className="bg-white rounded-2xl shadow-xl p-8 h-fit border border-gray-100"
                whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Secure Your Spot</h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    >
                      <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">Registration Successful!</h3>
                    <p className="text-lg mb-4">
                      Thank you for registering. We've sent a confirmation to {formData.email}.
                    </p>
                    <p className="text-lg">Our admissions team will contact you within 24 hours with next steps.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 px-4 py-3 border"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 px-4 py-3 border"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                          Mobile Number *
                        </label>
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          type="tel"
                          id="mobile"
                          name="mobile"
                          required
                          value={formData.mobile}
                          onChange={handleChange}
                          className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 px-4 py-3 border"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>

                      <div>
                        <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                          Select Course *
                        </label>
                        <motion.select
                          whileFocus={{ scale: 1.01 }}
                          id="course"
                          name="course"
                          required
                          value={formData.course}
                          onChange={handleChange}
                          className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 px-4 py-3 border"
                        >
                          {courseOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </motion.select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Tell Us About Your Goals
                      </label>
                      <motion.textarea
                        whileFocus={{ scale: 1.01 }}
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 px-4 py-3 border"
                        placeholder="What do you hope to achieve with this course? Any specific areas you want to focus on?"
                      />
                    </div>

                    <div className="flex items-start">
                      <motion.input
                        whileHover={{ scale: 1.2 }}
                        id="terms"
                        name="terms"
                        type="checkbox"
                        required
                        className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500 mt-1"
                      />
                      <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                        I agree to the{" "}
                        <a href="#" className="text-cyan-600 hover:text-cyan-500">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-cyan-600 hover:text-cyan-500">
                          Privacy Policy
                        </a>
                      </label>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors duration-200"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Submit Application
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </FadeInWhenVisible>

            {/* Benefits Section */}
            <FadeInWhenVisible direction="right">
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Why Enroll Now?</h3>
                  <ul className="space-y-4">
                    <motion.li className="flex items-start" whileHover={{ x: 5 }}>
                      <div className="bg-green-100 rounded-full p-1 mr-3 flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <span className="font-medium">Early Bird Discount:</span> Save{" "}
                        {formatPrice(course.pricing.fullPrice - course.pricing.currentPrice)} when you enroll today
                      </div>
                    </motion.li>
                    <motion.li className="flex items-start" whileHover={{ x: 5 }}>
                      <div className="bg-green-100 rounded-full p-1 mr-3 flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <span className="font-medium">Limited Seats:</span> Only 8 spots remaining for the upcoming
                        cohort
                      </div>
                    </motion.li>
                    <motion.li className="flex items-start" whileHover={{ x: 5 }}>
                      <div className="bg-green-100 rounded-full p-1 mr-3 flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <span className="font-medium">Job Guarantee:</span> Get hired within 6 months or receive a full
                        refund
                      </div>
                    </motion.li>
                    <motion.li className="flex items-start" whileHover={{ x: 5 }}>
                      <div className="bg-green-100 rounded-full p-1 mr-3 flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <span className="font-medium">Flexible Schedule:</span> Part-time and full-time options
                        available
                      </div>
                    </motion.li>
                  </ul>
                </div>

                <div className="bg-cyan-600 p-8 rounded-xl shadow-md text-white">
                  <h3 className="text-2xl font-bold mb-4">Hear From Our Alumni</h3>
                  <div className="space-y-6">
                    <motion.div whileHover={{ scale: 1.02 }} className="bg-cyan-500/50 p-4 rounded-lg">
                      <p className="italic mb-3">
                        "This course was the best investment I've ever made in my career. I went from a junior position
                        to a senior role with a 45% salary increase."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-cyan-200 mr-3"></div>
                        <div>
                          <p className="font-medium">Alex Johnson</p>
                          <p className="text-cyan-200 text-sm">Senior Developer</p>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} className="bg-cyan-500/50 p-4 rounded-lg">
                      <p className="italic mb-3">
                        "The hands-on projects and mentorship were invaluable. I landed a job at a top tech company just
                        2 weeks after completing the program."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-cyan-200 mr-3"></div>
                        <div>
                          <p className="font-medium">Maria Garcia</p>
                          <p className="text-cyan-200 text-sm">Product Engineer</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`py-16 bg-gradient-to-r ${course.headerBg} text-white`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your New Career?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Join thousands of students who transformed their lives with our program
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="#registration"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-cyan-600 hover:bg-gray-100 rounded-lg font-bold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Enroll Now
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg font-bold text-lg transition-colors duration-300 flex items-center"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Chat With Advisor
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="w-8 h-8" />
                <h3 className="text-xl font-bold">AceLevelUp</h3>
              </div>
              <p className="text-gray-400">Transforming careers through expert-led tech education since 2025.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Courses</h4>
              <ul className="space-y-2">
                {courseOptions.map((option) => (
                  <li key={option.value}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {option.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 AceLevelUp. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

