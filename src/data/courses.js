export const categories = [
  "FullStack Development",
  "Digital Marketing",
  "App Development",
  "Scrum Master",
  "Cyber Security",
  "Product Management"
];

export const courses = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    duration: "6 Months",
    startDate: "10th Apr '25",
    image: "/images/fullstack.jpg",
    institute: "MIT Professional Education",
    logo: "/images/logos/mit.png",
    courseType: "website-development",
    rating: 4.8,
    students: "2.5k+",
    level: "Advanced",
    highlights: [
      "500+ hours of hands-on coding",
      "10+ real-world projects",
      "1:1 mentorship sessions"
    ]
  },
  {
    id: 2,
    title: "Digital Marketing Mastery",
    duration: "4 Months",
    startDate: "15th Apr '25",
    image: "/images/digital-marketing.jpg",
    institute: "Harvard Business School",
    logo: "/images/logos/harvard.png",
    courseType: "digital-marketing",
    rating: 4.7,
    students: "1.8k+",
    level: "Intermediate",
    highlights: [
      "Comprehensive marketing strategies",
      "Real campaign development",
      "Industry certification"
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "FullStack Developer",
    company: "TechCorp",
    image: "/images/testimonials/alex.jpg",
    quote: "This course transformed my career from beginner to professional developer in just 6 months.",
    video: "/videos/testimonials/alex.mp4",
    bgColor: "from-purple-50 to-pink-50",
    accentColor: "bg-purple-600",
    courseType: "website-development"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "DigitalGrowth",
    image: "/images/testimonials/sarah.jpg",
    quote: "The digital marketing course gave me practical skills I used to double our company's online leads.",
    video: "/videos/testimonials/sarah.mp4",
    bgColor: "from-blue-50 to-cyan-50",
    accentColor: "bg-blue-600",
    courseType: "digital-marketing"
  }
];

export const courseData = {
  "website-development": {
    title: "FullStack Development",
    subtitle: "Master FullStack Development in 12 Weeks",
    description: "Transform into a professional full-stack developer with our intensive, project-based program. Learn to build modern web applications from scratch using cutting-edge technologies.",
    outcomes: [
      "Develop dynamic and responsive web applications",
      "Work with frontend and backend technologies",
      "Understand database management and API integration",
      "Deploy and maintain applications efficiently"
    ],
    requirements: [
      "Basic understanding of programming",
      "Familiarity with HTML, CSS, and JavaScript",
      "Dedication to commit 20+ hours/week"
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
          "DOM manipulation"
        ]
      },
      {
        week: 2,
        topic: "React & State Management",
        hours: 35,
        details: [
          "React components & hooks",
          "Context API",
          "Redux Toolkit",
          "TypeScript integration"
        ]
      }
    ],
    careers: [
      {
        title: "Full Stack Developer",
        salary: "$85,000 - $130,000",
        description: "Build complete web applications and services end-to-end",
        icon: "Code",
        skills: ["React", "Node.js", "Database Management"]
      },
      {
        title: "Frontend Engineer",
        salary: "$75,000 - $120,000",
        description: "Specialize in creating engaging user interfaces and experiences",
        icon: "Smartphone",
        skills: ["UI/UX", "React", "State Management"]
      }
    ],
    videoBackground: "/videos/fullstack-bg.mp4",
    bgGradient: "from-violet-50 to-indigo-50",
    accentColor: "blue-600",
    secondaryColor: "violet-600",
    headerBg: "from-violet-600 to-indigo-600",
    pricing: {
      fullPrice: 2999,
      currentPrice: 2499,
      paymentPlans: [
        {
          name: "Pay in Full",
          price: 2499,
          savings: 500,
          perks: ["$500 savings", "Free career coaching session"]
        },
        {
          name: "3-Month Installments",
          price: 899,
          total: 2697,
          perks: ["Flexible payments", "No credit check"]
        }
      ]
    }
  },
  "digital-marketing": {
    title: "Digital Marketing",
    subtitle: "Master Digital Marketing Strategies",
    description: "Comprehensive digital marketing course covering SEO, social media, PPC, email marketing, and analytics to help businesses grow online.",
    outcomes: [
      "Develop effective marketing campaigns",
      "Analyze and optimize digital performance",
      "Increase brand awareness and conversions"
    ],
    schedule: [
      {
        week: 1,
        topic: "Marketing Fundamentals",
        hours: 25,
        details: [
          "Marketing principles",
          "Consumer behavior",
          "Market research"
        ]
      }
    ],
    careers: [
      {
        title: "Digital Marketing Specialist",
        salary: "$60,000 - $90,000",
        description: "Develop and execute digital marketing strategies",
        icon: "BarChart2",
        skills: ["SEO", "Social Media", "Google Ads"]
      }
    ],
    videoBackground: "/videos/marketing-bg.mp4",
    bgGradient: "from-blue-50 to-cyan-50",
    accentColor: "blue-600",
    secondaryColor: "cyan-600",
    headerBg: "from-blue-600 to-cyan-600",
    pricing: {
      fullPrice: 1999,
      currentPrice: 1699,
      paymentPlans: [
        {
          name: "Pay in Full",
          price: 1699,
          savings: 300,
          perks: ["$300 savings", "Free analytics toolkit"]
        }
      ]
    }
  }
};