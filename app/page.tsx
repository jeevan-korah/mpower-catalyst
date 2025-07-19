"use client"

import Image from "next/image"
import { Zap, Users, Target, Lightbulb } from "lucide-react"
import { Menu, X, Instagram, Twitter, Linkedin, Github, Mail } from "lucide-react"
import { useState } from "react"

export default function CatalystTeam() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const teamMembers = [
    {
      name: "Devananda Devakumar",
      role: "Captain",
      image: "/cataylstmem/deva.png?height=300&width=300",
    },
    {
      name: "Jeevan Biju Korah",
      role: "Vice Captain",
      image: "/cataylstmem/jeevan.png?height=300&width=300",
    },
    {
      name: "Hana OP",
      role: "",
      image: "/cataylstmem/hana.png?height=300&width=300",
    },
    {
      name: "Karthik Krishna S",
      role: "",
      image: "/cataylstmem/karthik.png?height=300&width=300",
    },
    {
      name: "Keerthana Sajeev",
      role: "",
      image: "/cataylstmem/keerthana.png?height=300&width=300",
    },
    {
      name: "John Brito",
      role: "",
      image: "/cataylstmem/brito.png?height=300&width=300",
    },
    {
      name: "Muhammed Farhan S",
      role: "",
      image: "/cataylstmem/farhan.png?height=300&width=300",
    },
    {
      name: "Jothsna Sara Kuruvilla",
      role: "",
      image: "/cataylstmem/jothsna.png?height=300&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              {/* <Zap className="h-6 w-6 text-blue-600" /> */}
              <Image
                    src={"/logo.avif"}
                    alt="logo"
                    width={10}
                    height={10}                   
                    className="w-10 h-10   object-cover"
                  />
              <span className="text-xl font-bold text-gray-900">CATALYST</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="#team" className="text-gray-700 hover:text-blue-600 transition-colors">
                Team
              </a>
              <a href="#gallery" className="text-gray-700 hover:text-blue-600 transition-colors">
                Gallery
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-blue-100">
              <div className="flex flex-col space-y-4">
                <a
                  href="#home"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#team"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Team
                </a>
                <a
                  href="#gallery"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-slate-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-24 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
              {/* <Zap className="h-12 w-12" /> */}
               <Image
                    src={"/logo.avif"}
                    alt="logo"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">CATALYST</h1>
          <p className="text-xl md:text-2xl font-light mb-8 opacity-90">Be The Spark</p>
          <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="p-3 bg-blue-100 rounded-full">
              <Lightbulb className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-8 text-gray-900">About Catalyst</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            We are a dynamic team of innovators, creators, and problem-solvers who believe in the power of collaboration
            to ignite extraordinary results. At Catalyst, we don't just build solutions – we spark transformations that
            drive meaningful change in everything we touch.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Innovation</h3>
              <p className="text-gray-600">Pushing boundaries and exploring new possibilities in every project.</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-slate-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Collaboration</h3>
              <p className="text-gray-600">Working together to achieve results greater than the sum of our parts.</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Impact</h3>
              <p className="text-gray-600">Creating meaningful change that resonates beyond our immediate work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Eight passionate individuals united by a shared vision to create, innovate, and inspire change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 border border-blue-100">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-200 to-slate-200 p-1">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="w-full h-full rounded-full object-cover bg-white"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Zap className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 font-medium text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Moments that define us, projects that inspire us, and memories that fuel our passion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Team Brainstorming", image: "/gallery/pic1.jpg?height=400&width=600" },
              // { title: "Project Launch", image: "/placeholder.svg?height=400&width=600" },
              // { title: "Innovation Workshop", image: "/placeholder.svg?height=400&width=600" },
              // { title: "Team Building", image: "/placeholder.svg?height=400&width=600" },
              // { title: "Code Review", image: "/placeholder.svg?height=400&width=600" },
              // { title: "Achievement Celebration", image: "/placeholder.svg?height=400&width=600" },
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-slate-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Spark Something Amazing?</h2>
            <p className="text-xl mb-8 opacity-90">Let's collaborate and create something extraordinary together.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@catalyst-team.com"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300"
              >
                Get In Touch
              </a>
              <a
                href="#team"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <Zap className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-6">Follow our journey and connect with us</p>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="/"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="/"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              {/* <a
                href="https://github.com/catalyst-team"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a> */}
              <a
                href="https://www.instagram.com/catalyxt._?igsh=MWo3c3plZGhyOGFyeg=="
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="/"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Team Catalyst. Be the spark that ignites change.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
