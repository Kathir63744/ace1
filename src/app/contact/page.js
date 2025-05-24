"use client"
import React, { useCallback, useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, Send, CheckCircle, GraduationCap, Users, Award, BookOpen } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function ContactPage() {
  const router = useRouter();
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Course", path: "/courses" },
    { name: "Trainers", path: "/trainers" },
    { name: "Event", path: "/event" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format.";
    }
    if (!formData.mobile.trim()) {
      errors.mobile = "Mobile number is required.";
    } else if (!/^[\d\s()+.-]{10,15}$/.test(formData.mobile)) {
      errors.mobile = "Please enter a valid mobile number.";
    }
    if (!formData.course) errors.course = "Please select a course.";
    if (!formData.message.trim()) errors.message = "Message is required.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionSuccess(true);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        course: "",
        message: "",
      });
      setTimeout(() => setSubmissionSuccess(false), 3000);
    }, 2000);
  };

  const stats = [
    {
      icon: GraduationCap,
      count: "50,000+",
      label: "Graduates",
      color: "bg-violet-100",
    },
    {
      icon: Users,
      count: "200+",
      label: "Expert Instructors",
      color: "bg-violet-50",
    },
    {
      icon: Award,
      count: "100%",
      label: "Success Rate",
      color: "bg-violet-100",
    },
    {
      icon: BookOpen,
      count: "300+",
      label: "Courses",
      color: "bg-violet-50",
    },
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "bg-violet-100",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@acelevelup.com", "support@acelevelup.com"],
      color: "bg-violet-50",
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Education Street", "Learning City, ED 12345"],
      color: "bg-violet-100",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 2:00 PM"],
      color: "bg-violet-50",
    },
  ];
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-violet-50 via-white to-violet-50">
      {/* Header */}
      <div className="relative">
        <nav
          className={cn(
            "bg-white p-3 h-16 flex items-center fixed top-0 w-full shadow-md z-50 transition-all duration-300",
            isScrolled && "shadow-lg h-14"
          )}
        >
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
           <Link href="/" className="flex items-center">
              <h1 className="font-bold text-black text-lg ml-3">AceLevelUp</h1>
           </Link>
            {/* Mobile Menu Button */}
            <button className="md:hidden flex items-center mr-4" onClick={toggleMobileMenu} aria-label="Toggle menu">
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
      <main className="flex-grow pt-16">
        {/* Hero Section with Animated Background */}
        <section className="relative bg-gradient-to-b from-violet-100 to-white py-16 sm:py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-5"></div>
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-violet-900 mb-6 animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Have questions about our courses? Ready to start your learning journey?
              Our team is here to guide you every step of the way.
            </p>
          </div>
        </section>
        
        {/* Contact Info Cards with Enhanced Design */}
        <section className="py-16 px-4 bg-gradient-to-r from-violet-50 via-white to-violet-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-violet-900 mb-12">
              Ways to Connect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`${info.color} rounded-2xl p-6 sm:p-8 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl`}
                >
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <info.icon className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-violet-900 mb-4 text-center">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-center mb-2">{detail}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Form and Map Section with Enhanced Design */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="bg-gradient-to-br from-violet-50 to-white rounded-3xl shadow-2xl p-6 md:p-12 grid md:grid-cols-2 gap-12">
              {/* Form Section */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-violet-900 mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-4 rounded-xl border ${
                        formErrors.name ? 'border-red-400' : 'border-violet-200'
                      } focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all duration-200`}
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-sm ml-2">{formErrors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-4 rounded-xl border ${
                        formErrors.email ? 'border-red-400' : 'border-violet-200'
                      } focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all duration-200`}
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm ml-2">{formErrors.email}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number"
                      value={formData.mobile}
                      onChange={handleChange}
                      className={`w-full p-4 rounded-xl border ${
                        formErrors.mobile ? 'border-red-400' : 'border-violet-200'
                      } focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all duration-200`}
                    />
                    {formErrors.mobile && (
                      <p className="text-red-500 text-sm ml-2">{formErrors.mobile}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className={`w-full p-4 rounded-xl border ${
                        formErrors.course ? 'border-red-400' : 'border-violet-200'
                      } focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all duration-200`}
                    >
                      <option value="">Select a Course</option>
                      <option value="fullstack">Full Stack Development</option>
                      <option value="scrum">Scrum Master Certification</option>
                      <option value="digital">Digital Marketing</option>
                      <option value="appdev">Mobile App Development</option>
                      <option value="ai">AI & Machine Learning</option>
                      <option value="pm">Product Management</option>
                    </select>
                    {formErrors.course && (
                      <p className="text-red-500 text-sm ml-2">{formErrors.course}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full p-4 rounded-xl border ${
                        formErrors.message ? 'border-red-400' : 'border-violet-200'
                      } focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all duration-200`}
                    />
                    {formErrors.message && (
                      <p className="text-red-500 text-sm ml-2">{formErrors.message}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-xl flex items-center justify-center space-x-3 text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-violet-600 hover:bg-violet-700 hover:shadow-lg'
                    }`}
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-6 w-6 border-3 border-white border-t-transparent" />
                    ) : (
                      <Send className="w-6 h-6" />
                    )}
                  </button>
                  {submissionSuccess && (
                    <div className="flex items-center justify-center space-x-2 text-green-600 bg-green-50 p-4 rounded-xl animate-fade-in">
                      <CheckCircle className="w-6 h-6" />
                      <span className="font-medium">Message sent successfully!</span>
                    </div>
                  )}
                </form>
              </div>
              
              {/* Map Section with Enhanced Design */}
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px] md:h-[700px] relative">
                <div className="absolute inset-0 bg-violet-100 opacity-20"></div>
                <iframe
                  className="w-full h-full relative z-10"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5067280740576!2d76.96472667503588!3d11.016844092154774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857c51cfa54e1%3A0x46d8c0b2a6e81e8b!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1685080903709!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AceLevelUp Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      
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

export default ContactPage;
