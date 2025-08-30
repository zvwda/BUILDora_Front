"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import bgImage from "../assets/bg.jpg";

const projectsData = [
  {
    id: 1,
    title: "Karajat – Auto Parts Marketplace",
    description:
      "A specialized online marketplace connecting buyers and sellers of car spare parts.",
    image: "/kar3.PNG",
    images: ["/kar1.PNG", "/kar2.PNG", "/kar3.PNG", "/kar4.PNG", "/kar5.PNG"],
    category: "Web & Mobile Development",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    fullDescription:
      "Karajat is a digital platform designed to simplify the process of buying and selling auto spare parts. It works as a trusted intermediary, ensuring smooth transactions between buyers and sellers. The platform provides advanced search and filtering for car models and spare parts, real-time chat between users, secure payment handling, and a user-friendly dashboard for managing listings. Inspired by platforms like OLX but tailored exclusively for the automotive spare parts industry.",
    features: [
      "User Authentication & Profiles",
      "Advanced Search & Filtering by Car Model/Part",
      "Secure Payment Integration",
      "Real-Time Chat between Buyers & Sellers",
      "Seller Dashboard for Listing & Managing Parts",
      "Order Tracking",
      "Mobile-Responsive Design",
    ],
    duration: "6 months",
    client: "Karajat Startup",
    liveUrl: "https://karajatt1.com/user",
    githubUrl: "https://github.com/buildora/karajat-platform",
  },
  {
    id: 2,
    title: "Event Management System",
    description:
      "A complete platform to manage, book, and organize events seamlessly.",
    image: "/EVENT.PNG",
    images: ["/EVENT2.PNG", "/EVENT3.PNG", "/EVENT4.PNG", "/EVENT5.PNG"],
    category: "Website",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
    fullDescription:
      "An advanced Event Management System designed to simplify event creation, ticket booking, attendee management, and real-time updates. The platform allows organizers to create and manage events, track ticket sales, send notifications, and analyze performance. Users can browse upcoming events, book tickets securely, and receive instant confirmations. It ensures a seamless experience for both event organizers and attendees.",
    features: [
      "Event Creation & Management",
      "Online Ticket Booking",
      "Attendee Registration & Tracking",
      "Payment Integration",
      "Notifications & Reminders",
      "Admin Dashboard with Analytics",
      "Multi-device Support",
    ],
    duration: "1 months",
    liveUrl: "https://www.behance.net/gallery/228100371/Event-Booking",
    githubUrl: "",
  },
  {
    id: 3,
    title: "Automated Assessment & Training Platform",
    description:
      "AI-powered assessment and training system with automated grading and detailed analytics",
    image: "/ass1.jpg",
    images: ["/ass1.jpg", "/ass2.jpg", "/ass5.jpg", "/as4.jpg"],
    category: "EdTech Platform",
    technologies: ["React", "Node.js", "MongoDB", "TensorFlow"],
    fullDescription:
      "An intelligent assessment and training platform designed for companies, universities, and training centers. The system enables automated evaluations through multiple-choice, written, and coding questions. AI-driven grading provides instant, fair, and consistent results, while analytics dashboards offer insights into learners' performance. The platform also supports adaptive training paths to enhance skills based on assessment outcomes.",
    features: [
      "Automated Grading (MCQ, Written, Coding)",
      "AI-Powered Evaluation",
      "Adaptive Learning Paths",
      "Real-time Analytics & Reports",
      "Role-based Access (Admin, Instructor, Learner)",
      "Scalable for Enterprise & Academic Use",
    ],
    duration: "6 months",
    client: "SkillUp Academy",
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description:
      "Modern online store with payment integration and inventory management",
    image: "/shop1.jpg",
    images: ["/shop1.jpg", "/shop2.jpg", "/shop3.jpg", "/shop4.jpg"],
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB"],
    fullDescription:
      "A comprehensive e-commerce solution built with modern technologies. Features include user authentication, product catalog management, shopping cart functionality, secure payment processing with Stripe integration, order tracking, and admin dashboard for inventory management. The platform is fully responsive and optimized for performance.",
    features: [
      "User Authentication",
      "Payment Integration",
      "Inventory Management",
      "Order Tracking",
      "Admin Dashboard",
      "Responsive Design",
    ],
    duration: "1 months",
    client: "TechStore Inc.",
    liveUrl: "https://techstore-demo.com",
    githubUrl: "https://github.com/buildora/ecommerce-platform",
  },
  {
    id: 5,
    title: "Online Clothing Store",
    description:
      "E-commerce platform for fashion and clothing with seamless shopping experience.",
    image: "/rawan1.PNG",
    images: [
      "/rawan1.PNG",
      "/rawan2.PNG",
      "/rawan3.PNG",
      "/rawan4.PNG",
      "/rawan5.PNG",
    ],
    category: "E-Commerce",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    fullDescription:
      "A modern online shopping platform specializing in clothing and fashion. The system includes product browsing with filters, secure cart and checkout process, user authentication, order tracking, and integrated payment solutions. The admin panel allows managing products, categories, discounts, and customer orders efficiently.",
    features: [
      "Product Catalog with Filters",
      "Shopping Cart & Secure Checkout",
      "User Authentication & Profiles",
      "Order Tracking",
      "Payment Gateway Integration",
      "Admin Panel for Product & Order Management",
    ],
    duration: "2 months",
    client: "Fashion Hub",
    liveUrl: "https://www.behance.net/gallery/228099813/FYX-Fashion-App",
    githubUrl: "https://github.com/buildora/clothing-shop",
  },
  {
    id: 6,
    title: "Point of Sale (POS) System",
    description:
      "Comprehensive POS solution for retail and restaurants with inventory and billing management",
    image: "/pos1.PNG",
    images: ["/pos1.PNG", "/pos2.PNG", "/pos3.PNG", "/pos4.PNG", "/pos5.PNG"],
    category: "Retail & Hospitality",
    technologies: ["React", "Node.js", "MongoDB"],
    fullDescription:
      "A modern Point of Sale (POS) system designed for retail shops, restaurants, and cafes. It supports fast and secure billing, multi-terminal usage, real-time sales tracking, inventory management, employee management, and detailed reporting to help businesses operate efficiently.",
    features: [
      "Fast & Secure Billing",
      "Inventory Management",
      "Sales & Revenue Reports",
      "Multi-terminal Support",
      "Employee & Role Management",
      "Customer Loyalty & Discounts",
      "Offline Mode Support",
    ],
    duration: "6 months",
    client: "Smart Retail Solutions",
    liveUrl: "",
    githubUrl: "https://github.com/buildora/pos-system",
  },
];
function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const openFullscreen = () => {
    setIsFullscreenOpen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreenOpen(false);
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div>
      <Navbar />
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="bg-cover bg-center min-h-screen"
      >
        <div className="min-h-screen">
          <div className="container mx-auto px-6 py-20">
            {/* Header Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Projects
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                From sketches to systems, these are some of the builds we're
                proud of. Each project represents our commitment to quality,
                innovation, and client success.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              {projectsData.map((project) => (
                <div
                  key={project.id}
                  className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-slate-700/50 text-slate-300 px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => openModal(project)}
                      className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded hover:bg-cyan-400 hover:text-black transition-all duration-300 font-medium"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <p className="text-slate-300 text-lg mb-6">
                Ready to start your own project?
              </p>
              <a href="https://wa.me/201029057739" className="bg-cyan-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-colors duration-300">
                Start Your Project
              </a>
            </div>
          </div>

          {/* Development Lifecycle Section */}
          <div className="container mx-auto px-6 py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Development Lifecycle
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Our proven development process ensures quality, efficiency, and
                client satisfaction at every step. From initial discovery to
                final launch, we collaborate closely with you to bring your
                vision to life.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {/* Phase 1 */}
                <div className="relative">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg
                        className="w-8 h-8 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white text-center mb-3">
                      Discovery & Planning
                    </h3>
                    <p className="text-slate-300 text-sm text-center leading-relaxed">
                      We analyze your requirements, define project scope, and
                      create detailed technical specifications and wireframes.
                    </p>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                      1
                    </div>
                  </div>
                  {/* Connection Line */}
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-cyan-400/50"></div>
                </div>

                {/* Phase 2 */}
                <div className="relative">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg
                        className="w-8 h-8 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white text-center mb-3">
                      Design & Prototyping
                    </h3>
                    <p className="text-slate-300 text-sm text-center leading-relaxed">
                      Creating user-centered designs, interactive prototypes,
                      and establishing the visual identity of your project.
                    </p>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                      2
                    </div>
                  </div>
                  {/* Connection Line */}
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-cyan-400/50"></div>
                </div>

                {/* Phase 3 */}
                <div className="relative">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg
                        className="w-8 h-8 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white text-center mb-3">
                      Development & Testing
                    </h3>
                    <p className="text-slate-300 text-sm text-center leading-relaxed">
                      Building your solution with clean, scalable code while
                      conducting thorough testing.
                    </p>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                      3
                    </div>
                  </div>
                  {/* Connection Line */}
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-cyan-400/50"></div>
                </div>

                {/* Phase 4 */}
                <div className="relative">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg
                        className="w-8 h-8 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white text-center mb-3">
                      Launch & Support
                    </h3>
                    <p className="text-slate-300 text-sm text-center leading-relaxed">
                      Deploying your project to production and providing ongoing
                      maintenance, updates, and technical support.
                    </p>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                      4
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Stats */}
              <div className="mt-16 grid gap-6 md:grid-cols-3 text-center">
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    2-8 weeks
                  </div>
                  <div className="text-slate-300">Average Project Timeline</div>
                </div>
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    24/7
                  </div>
                  <div className="text-slate-300">Post-Launch Support</div>
                </div>
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    100%
                  </div>
                  <div className="text-slate-300">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-slate-700">
              <h2 className="text-2xl font-bold text-white">
                {selectedProject.title}
              </h2>
              <button
                onClick={closeModal}
                className="text-slate-400 hover:text-white text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Project Image */}
                <div>
                  {/* Image Carousel */}
                  <div className="relative">
                    <img
                      src={
                        selectedProject.images
                          ? selectedProject.images[currentImageIndex]
                          : selectedProject.image || "/placeholder.svg"
                      }
                      alt={`${selectedProject.title} - Image ${
                        currentImageIndex + 1
                      }`}
                      className="w-full h-64 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={openFullscreen}
                    />

                    {/* Maximize Button Overlay */}
                    <button
                      onClick={openFullscreen}
                      className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      title="Maximize image"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                        />
                      </svg>
                    </button>

                    {/* Navigation Arrows */}
                    {selectedProject.images &&
                      selectedProject.images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>
                        </>
                      )}
                  </div>

                  {/* Image Indicators */}
                  {selectedProject.images &&
                    selectedProject.images.length > 1 && (
                      <div className="flex justify-center mt-4 space-x-2">
                        {selectedProject.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => goToImage(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                              index === currentImageIndex
                                ? "bg-cyan-400"
                                : "bg-slate-600 hover:bg-slate-500"
                            }`}
                          />
                        ))}
                      </div>
                    )}

                  {/* Image Counter */}
                  {selectedProject.images &&
                    selectedProject.images.length > 1 && (
                      <div className="text-center mt-2">
                        <span className="text-slate-400 text-sm">
                          {currentImageIndex + 1} of{" "}
                          {selectedProject.images.length}
                        </span>
                      </div>
                    )}

                  <div className="mt-4">
                    <span className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Project Overview
                  </h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-medium mb-2">Duration</h4>
                      <p className="text-slate-300">
                        {selectedProject.duration}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-medium mb-2">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-slate-700/50 text-slate-300 px-2 py-1 rounded text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mt-6">
                <h4 className="text-white font-medium mb-3">Key Features</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center text-slate-300"
                    >
                      <span className="text-cyan-400 mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-6 pt-6 border-t border-slate-700">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-400 text-black px-6 py-2 rounded-lg font-medium hover:bg-cyan-300 transition-colors"
                >
                  More{" "}
                </a>
                  <a
                    href="https://wa.me/201029057739"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#00CFFF] text-[#00CFFF] font-semibold px-8 py-3 rounded-md hover:bg-[#00CFFF] hover:text-white transition"
                  >
                    Contact Us
                  </a>
                
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Image Modal */}
      {isFullscreenOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors z-10"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Fullscreen Image */}
            <img
              src={
                selectedProject.images
                  ? selectedProject.images[currentImageIndex]
                  : selectedProject.image || "/placeholder.svg"
              }
              alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />

            {/* Navigation Arrows for Fullscreen */}
            {selectedProject.images && selectedProject.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Image Counter for Fullscreen */}
            {selectedProject.images && selectedProject.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
                <span className="text-sm">
                  {currentImageIndex + 1} of {selectedProject.images.length}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectsPage;
