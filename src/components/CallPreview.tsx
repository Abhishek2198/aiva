"use client"
import type React from "react"
import {
  Video,
  Smile,
  MapPin,
  Star,
  Shield,
  Zap,
  Heart,
  Sparkles,
  Clock,
  CheckCircle,
  Phone,
  Mail,
  Calendar,
  CreditCard,
  ChevronDown,
  ChevronUp,
  Users,
  Award,
  Stethoscope,
  Building,
  ArrowRight,
  MessageCircle,
  Headphones,
} from "lucide-react"
import { useState } from "react"

interface CallPreviewProps {
  onStartCall: () => void
}

const CallPreview: React.FC<CallPreviewProps> = ({ onStartCall }) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [selectedLocation, setSelectedLocation] = useState(0)

  const faqData = [
    {
      question: "What should I expect during my first visit?",
      answer:
        "Your first visit includes a comprehensive examination, digital X-rays, professional cleaning, and a personalized treatment plan discussion with our dental specialist.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "Yes, we accept most major insurance plans including Delta Dental, Blue Cross Blue Shield, Aetna, and many others. We also offer flexible payment plans and Care Credit financing.",
    },
    {
      question: "How often should I visit the dentist?",
      answer:
        "We recommend visiting every 6 months for routine cleanings and checkups. However, some patients may need more frequent visits based on their oral health needs.",
    },
    {
      question: "What emergency dental services do you provide?",
      answer:
        "We offer 24/7 emergency dental care including treatment for severe tooth pain, dental trauma, broken teeth, and urgent oral health issues.",
    },
    {
      question: "Are your treatments painful?",
      answer:
        "We use advanced pain management techniques including local anesthesia, sedation options, and gentle treatment methods to ensure your comfort throughout all procedures.",
    },
  ]

  const locations = [
    {
      name: "Downtown Medical Center",
      address: "123 Main Street, Downtown",
      phone: "(555) 123-4567",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-3PM",
    },
    {
      name: "Westside Dental Clinic",
      address: "456 Oak Avenue, Westside",
      phone: "(555) 234-5678",
      hours: "Mon-Fri: 7AM-7PM, Sat: 8AM-4PM",
    },
    {
      name: "Northgate Family Dentistry",
      address: "789 Pine Road, Northgate",
      phone: "(555) 345-6789",
      hours: "Mon-Fri: 8AM-5PM, Sat: 9AM-2PM",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 via-white to-blue-50">
      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-blue-700 py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-600/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-pink-500/10 to-purple-500/20"></div>
        {/* Enhanced animated background elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-white/20 to-pink-200/30 rounded-full animate-pulse blur-sm"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-purple-300/25 to-blue-300/25 rounded-full animate-bounce blur-sm"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-300/30 to-purple-300/30 rounded-full animate-pulse blur-sm"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-br from-blue-300/20 to-sky-300/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-10 w-16 h-16 bg-gradient-to-br from-pink-400/25 to-purple-400/25 rounded-full animate-bounce delay-1000"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-10">
              <div className="bg-white/20 backdrop-blur-sm p-8 rounded-3xl border border-white/30 shadow-2xl hover:scale-105 transition-transform duration-300">
                <Smile className="w-20 h-20 text-white animate-pulse" />
              </div>
            </div>
            <h1 className="text-7xl font-bold text-white mb-8 leading-tight">
              Premium Dental Care with
              <span className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 bg-clip-text text-transparent block mt-2">
                DentalCare Pro
              </span>
            </h1>
            <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Get expert dental consultation from our certified specialists. Discover comprehensive dental services and
              personalized oral health solutions for your perfect smile.
            </p>

            {/* Trust indicators */}
            <div className="flex items-center justify-center space-x-8 text-blue-200">
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6" />
                <span className="font-semibold">Award Winning</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6" />
                <span className="font-semibold">15K+ Patients</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6" />
                <span className="font-semibold">Certified Specialists</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-10">
        {/* Enhanced Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Side - Enhanced Service Info */}
          <div className="space-y-10">
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 backdrop-blur-sm hover:shadow-3xl transition-shadow duration-300">
              <div className="flex items-center space-x-8 mb-10">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
                    alt="Dental Specialist"
                    className="w-32 h-32 rounded-full object-cover ring-4 ring-blue-100 shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-400 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                    <div className="w-4 h-4 bg-green-600 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">Dr. Sarah Johnson</h2>
                  <p className="text-gray-600 text-xl mb-3">Dental Care Specialist</p>
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 font-medium">DentalCare Pro Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-blue-600">
                    <Stethoscope className="w-4 h-4" />
                    <span>15+ Years Experience</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-5 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-700 font-semibold text-lg">Free Dental Consultation</span>
                </div>
                <div className="flex items-center space-x-5 p-4 bg-gradient-to-r from-sky-50 to-sky-100 rounded-xl hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center shadow-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-700 font-semibold text-lg">Digital Smile Analysis</span>
                </div>
                <div className="flex items-center space-x-5 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-700 font-semibold text-lg">24/7 Dental Support</span>
                </div>
              </div>
            </div>

            {/* Enhanced Service Highlight */}
            <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-blue-700 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden hover:shadow-3xl transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
              <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-sky-400/20 rounded-full -translate-x-12 -translate-y-12 animate-pulse"></div>

              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-6">DentalCare Pro Services</h3>
                <p className="text-blue-100 mb-8 text-xl leading-relaxed">
                  Comprehensive Dental Care by DentalCare Pro - Your Trusted Oral Health Partner
                </p>
                <div className="grid grid-cols-2 gap-8 text-base mb-10">
                  <div className="flex items-center space-x-4">
                    <Heart className="w-6 h-6" />
                    <span>Preventive Care</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6" />
                    <span>Multiple Locations</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Zap className="w-6 h-6" />
                    <span>Same-Day Treatment</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Star className="w-6 h-6" />
                    <span>Expert Dentists</span>
                  </div>
                </div>
                <div className="pt-8 border-t border-blue-400">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">Call 1800-DENTAL-1</span>
                    <span className="bg-white text-blue-600 px-6 py-3 rounded-full text-base font-bold shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                      Book Now
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Right Side - Call Interface */}
          <div className="flex flex-col items-center justify-center space-y-10">
            <div className="text-center">
              <div className="w-96 h-96 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/40 via-pink-400/40 to-blue-400/40 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-pink-300/20 to-purple-300/30 animate-pulse"></div>
                <div
                  className="absolute inset-6 border-2 border-white/20 rounded-full animate-spin"
                  style={{ animationDuration: "20s" }}
                ></div>
                <div className="absolute inset-12 border border-white/10 rounded-full animate-ping"></div>
                <div className="relative z-10 text-center">
                  <Smile className="w-32 h-32 text-white mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                  <div className="text-white text-2xl font-bold">Dental Care</div>
                  <div className="text-blue-100 text-lg">AI Consultant</div>
                </div>
              </div>
              <h3 className="text-5xl font-bold text-gray-900 mb-6">Need Professional Dental Care?</h3>
              <p className="text-gray-600 mb-10 max-w-lg mx-auto text-xl leading-relaxed">
                Connect with our dental specialist to get personalized oral health recommendations and comprehensive
                dental care solutions
              </p>
            </div>

            <button
              onClick={onStartCall}
              className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-24 py-10 rounded-3xl font-bold text-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden animate-pulse hover:animate-none"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/50 via-purple-500/50 to-blue-500/50 animate-pulse opacity-50"></div>
              <div className="relative z-10 flex items-center space-x-5">
                <Video className="w-10 h-10" />
                <span>Start Dental Consultation</span>
              </div>
            </button>

            <div className="flex items-center space-x-10 text-base text-gray-500">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-semibold">Dentist Available Now</span>
              </div>
              <div>•</div>
              <div className="font-semibold">Free Consultation</div>
              <div>•</div>
              <div className="font-semibold">HD Quality</div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid md:grid-cols-4 gap-10 mb-24">
          <div className="text-center bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="text-5xl font-bold text-purple-600 mb-4 group-hover:scale-110 transition-transform">
              15K+
            </div>
            <div className="text-gray-600 font-semibold text-lg">Happy Patients</div>
            <div className="w-16 h-1 bg-purple-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="text-center bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="text-5xl font-bold text-sky-600 mb-4 group-hover:scale-110 transition-transform">50+</div>
            <div className="text-gray-600 font-semibold text-lg">Expert Dentists</div>
            <div className="w-16 h-1 bg-sky-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="text-center bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="text-5xl font-bold text-green-600 mb-4 group-hover:scale-110 transition-transform">25+</div>
            <div className="text-gray-600 font-semibold text-lg">Clinic Locations</div>
            <div className="w-16 h-1 bg-green-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="text-center bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="text-5xl font-bold text-purple-600 mb-4 group-hover:scale-110 transition-transform">
              98%
            </div>
            <div className="text-gray-600 font-semibold text-lg">Success Rate</div>
            <div className="w-16 h-1 bg-purple-600 mx-auto mt-4 rounded-full"></div>
          </div>
        </div>

        {/* Enhanced Dental Service Types */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Comprehensive Dental Services</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Choose from our wide range of dental services designed to maintain your oral health and give you the
              perfect smile you deserve
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="bg-white rounded-3xl p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:rotate-1 group border border-purple-100/50">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-lg">
                <Smile className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-4 text-xl">General Dentistry</h3>
              <p className="text-gray-600 text-base leading-relaxed">Routine checkups and preventive care</p>
            </div>
            <div className="bg-white rounded-3xl p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:rotate-1 group border border-purple-100/50">
              <div className="w-24 h-24 bg-gradient-to-br from-sky-100 to-sky-200 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-lg">
                <Sparkles className="w-12 h-12 text-sky-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-4 text-xl">Cosmetic Dentistry</h3>
              <p className="text-gray-600 text-base leading-relaxed">Teeth whitening and smile makeovers</p>
            </div>
            <div className="bg-white rounded-3xl p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:rotate-1 group border border-purple-100/50">
              <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-lg">
                <Shield className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-4 text-xl">Orthodontics</h3>
              <p className="text-gray-600 text-base leading-relaxed">Braces and teeth alignment solutions</p>
            </div>
            <div className="bg-white rounded-3xl p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:rotate-1 group border border-purple-100/50">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-lg">
                <Heart className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-4 text-xl">Oral Surgery</h3>
              <p className="text-gray-600 text-base leading-relaxed">Tooth extractions and surgical procedures</p>
            </div>
            <div className="bg-white rounded-3xl p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:rotate-1 group border border-purple-100/50">
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-lg">
                <Star className="w-12 h-12 text-indigo-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-4 text-xl">Dental Implants</h3>
              <p className="text-gray-600 text-base leading-relaxed">Permanent tooth replacement solutions</p>
            </div>
            <div className="bg-white rounded-3xl p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:rotate-1 group border border-purple-100/50">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-lg">
                <Zap className="w-12 h-12 text-teal-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-4 text-xl">Emergency Care</h3>
              <p className="text-gray-600 text-base leading-relaxed">Urgent dental pain and trauma treatment</p>
            </div>
          </div>
        </div>

        {/* NEW: Appointment Booking Section */}
        <div className="bg-gradient-to-br from-blue-50 via-sky-50 to-white rounded-3xl p-16 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/20 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-200/20 rounded-full translate-y-24 -translate-x-24"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Book Your Appointment</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Schedule your dental consultation in just a few clicks. Choose your preferred time and location.
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3 text-lg">Full Name</label>
                    <input
                      type="text"
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3 text-lg">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3 text-lg">Email Address</label>
                    <input
                      type="email"
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3 text-lg">Preferred Date</label>
                    <input
                      type="date"
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3 text-lg">Service Type</label>
                    <select className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg">
                      <option>General Consultation</option>
                      <option>Cosmetic Dentistry</option>
                      <option>Orthodontics</option>
                      <option>Emergency Care</option>
                      <option>Dental Implants</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3 text-lg">Additional Notes</label>
                    <textarea
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg h-24 resize-none"
                      placeholder="Any specific concerns or requests..."
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="text-center mt-10">
                <button className="bg-gradient-to-r from-blue-600 to-sky-600 text-white px-12 py-4 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Schedule Appointment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* NEW: Location Finder Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Find a Location Near You</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit any of our convenient locations for comprehensive dental care
            </p>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="flex justify-center mb-8">
              <div className="flex bg-gray-100 rounded-2xl p-2">
                {locations.map((location, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedLocation(index)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedLocation === index
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-gray-600 hover:text-blue-600"
                      }`}
                  >
                    {location.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">{locations[selectedLocation].name}</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-gray-700 text-lg">{locations[selectedLocation].address}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-lg">{locations[selectedLocation].phone}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <span className="text-gray-700 text-lg">{locations[selectedLocation].hours}</span>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2">
                  <span>Get Directions</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Building className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg">Interactive Map</p>
                  <p className="text-sm">Location: {locations[selectedLocation].name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Patient Testimonials */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">What Our Patients Say</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real patients who transformed their smiles with DentalCare Pro
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-8">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
                  alt="Patient"
                  className="w-20 h-20 rounded-full object-cover mr-6 ring-4 ring-blue-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-xl">Sarah Mitchell</h4>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed text-lg">
                "The team at DentalCare Pro completely transformed my smile. The digital consultation was so convenient,
                and Dr. Sarah made me feel comfortable throughout the entire process."
              </p>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-8">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
                  alt="Patient"
                  className="w-20 h-20 rounded-full object-cover mr-6 ring-4 ring-blue-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-xl">Michael Chen</h4>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed text-lg">
                "I was nervous about dental work, but the advanced technology and gentle approach made all the
                difference. Highly recommend their cosmetic dentistry services!"
              </p>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-8">
                <img
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
                  alt="Patient"
                  className="w-20 h-20 rounded-full object-cover mr-6 ring-4 ring-blue-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-xl">Emily Rodriguez</h4>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed text-lg">
                "The emergency dental care saved my weekend! Quick response, professional treatment, and the pain relief
                was immediate. Thank you DentalCare Pro!"
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Pricing Plans */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Transparent Pricing Plans</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your dental care needs with no hidden fees
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-3">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Basic Care</h3>
                <div className="text-5xl font-bold text-blue-600 mb-4">
                  $99<span className="text-xl text-gray-500">/visit</span>
                </div>
                <p className="text-gray-600 text-lg">Perfect for routine checkups</p>
              </div>
              <ul className="space-y-5 mb-10">
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4" />
                  <span className="text-gray-700 text-lg">Comprehensive examination</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4" />
                  <span className="text-gray-700 text-lg">Digital X-rays</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4" />
                  <span className="text-gray-700 text-lg">Professional cleaning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4" />
                  <span className="text-gray-700 text-lg">Oral health consultation</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-blue-700 transition-colors">
                Choose Plan
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-10 shadow-3xl hover:shadow-4xl transition-all duration-300 hover:-translate-y-3 text-white relative overflow-hidden transform scale-105 animate-pulse hover:animate-none">
              <div className="absolute top-6 right-6 bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold mb-4">Complete Care</h3>
                <div className="text-5xl font-bold mb-4">
                  $199<span className="text-xl text-blue-200">/visit</span>
                </div>
                <p className="text-blue-100 text-lg">Comprehensive dental solution</p>
              </div>
              <ul className="space-y-5 mb-10">
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-300 mr-4" />
                  <span className="text-lg">Everything in Basic Care</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-300 mr-4" />
                  <span className="text-lg">Cosmetic consultation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-300 mr-4" />
                  <span className="text-lg">Teeth whitening session</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-300 mr-4" />
                  <span className="text-lg">Priority scheduling</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-300 mr-4" />
                  <span className="text-lg">24/7 emergency support</span>
                </li>
              </ul>
              <button className="w-full bg-white text-blue-600 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors">
                Choose Plan
              </button>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-3">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Premium Care</h3>
                <div className="text-5xl font-bold text-purple-600 mb-4">
                  $299<span className="text-xl text-gray-500">/visit</span>
                </div>
                <p className="text-gray-600 text-lg">Ultimate dental experience</p>
              </div>
              <ul className="space-y-5 mb-10">
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4" />
                  <span className="text-gray-700 text-lg">Everything in Complete Care</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4" />
                  <span className="text-gray-700 text-lg">3D smile design</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4" />
                  <span className="text-gray-700 text-lg">Sedation options</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4" />
                  <span className="text-gray-700 text-lg">Specialist referrals</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4" />
                  <span className="text-gray-700 text-lg">Concierge service</span>
                </li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-purple-700 transition-colors">
                Choose Plan
              </button>
            </div>
          </div>
        </div>

        {/* NEW: FAQ Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our dental services and procedures
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors"
                >
                  <h3 className="text-xl font-semibold text-gray-900 pr-8">{faq.question}</h3>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-8 pb-8">
                    <p className="text-gray-600 text-lg leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Why Choose DentalCare Pro */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">
          <div className="bg-white rounded-3xl p-10 text-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-3 group">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-lg">
              <MapPin className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-6 text-2xl">Free Consultation</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Expert dental guidance and treatment planning nationwide
            </p>
          </div>
          <div className="bg-white rounded-3xl p-10 text-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-3 group">
            <div className="w-24 h-24 bg-gradient-to-br from-sky-100 to-sky-200 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-lg">
              <Sparkles className="w-12 h-12 text-sky-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-6 text-2xl">Digital Technology</h3>
            <p className="text-gray-600 leading-relaxed text-lg">Advanced digital imaging and 3D treatment planning</p>
          </div>
          <div className="bg-white rounded-3xl p-10 text-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-3 group">
            <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-lg">
              <Shield className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-6 text-2xl">Quality Assurance</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Board-certified dentists with proven treatment protocols
            </p>
          </div>
          <div className="bg-white rounded-3xl p-10 text-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-3 group">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-lg">
              <Clock className="w-12 h-12 text-purple-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-6 text-2xl">Flexible Scheduling</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Evening and weekend appointments with online booking
            </p>
          </div>
        </div>

        {/* Enhanced Advanced Dental Technology & Services */}
        <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-sky-50 rounded-3xl p-20 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-200/20 rounded-full -translate-y-40 translate-x-40"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-sky-200/20 rounded-full translate-y-30 -translate-x-30"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-300/10 rounded-full -translate-x-16 -translate-y-16 animate-pulse"></div>

          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-8">Advanced Dental Technology & Expertise</h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Experience modern dentistry with our state-of-the-art equipment and highly qualified dental
                professionals committed to your oral health
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="bg-white w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:shadow-3xl transition-shadow group-hover:scale-110 transform duration-300">
                  <Sparkles className="w-16 h-16 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Digital Imaging</h3>
                <p className="text-gray-600 leading-relaxed text-xl">
                  3D cone beam CT scans, digital X-rays, and intraoral cameras for precise diagnosis
                </p>
              </div>
              <div className="text-center group">
                <div className="bg-white w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:shadow-3xl transition-shadow group-hover:scale-110 transform duration-300">
                  <Shield className="w-16 h-16 text-sky-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Expert Specialists</h3>
                <p className="text-gray-600 leading-relaxed text-xl">
                  Board-certified dentists and specialists with advanced training and years of experience
                </p>
              </div>
              <div className="text-center group">
                <div className="bg-white w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:shadow-3xl transition-shadow group-hover:scale-110 transform duration-300">
                  <Heart className="w-16 h-16 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Comfort Care</h3>
                <p className="text-gray-600 leading-relaxed text-xl">
                  Sedation options, pain-free procedures, and patient comfort technologies
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Insurance & Payment */}
        <div className="bg-white rounded-3xl p-16 shadow-2xl mb-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Insurance & Payment Options</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              We accept most major insurance plans and offer flexible payment options
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="text-center p-8 bg-blue-50 rounded-3xl hover:shadow-lg transition-shadow">
              <CreditCard className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h3 className="font-bold text-gray-900 mb-4 text-xl">Flexible Payment</h3>
              <p className="text-gray-600 text-lg">Monthly payment plans available</p>
            </div>
            <div className="text-center p-8 bg-green-50 rounded-3xl hover:shadow-lg transition-shadow">
              <Shield className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h3 className="font-bold text-gray-900 mb-4 text-xl">Insurance Accepted</h3>
              <p className="text-gray-600 text-lg">Most major insurance plans</p>
            </div>
            <div className="text-center p-8 bg-purple-50 rounded-3xl hover:shadow-lg transition-shadow">
              <Star className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h3 className="font-bold text-gray-900 mb-4 text-xl">No Hidden Fees</h3>
              <p className="text-gray-600 text-lg">Transparent pricing always</p>
            </div>
            <div className="text-center p-8 bg-sky-50 rounded-3xl hover:shadow-lg transition-shadow">
              <Heart className="w-16 h-16 text-sky-600 mx-auto mb-6" />
              <h3 className="font-bold text-gray-900 mb-4 text-xl">Care Credit</h3>
              <p className="text-gray-600 text-lg">Special financing available</p>
            </div>
          </div>
        </div>

        {/* NEW: Live Chat Support Section */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl p-16 text-white mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-24 translate-x-24"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-20 -translate-x-20"></div>

          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-12 h-12" />
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-6">Need Immediate Assistance?</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
              Our dental support team is available 24/7 to answer your questions and help with appointments
            </p>
            <div className="flex items-center justify-center space-x-8">
              <button className="bg-white text-green-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors flex items-center space-x-3">
                <MessageCircle className="w-6 h-6" />
                <span>Start Live Chat</span>
              </button>
              <button className="bg-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-800 transition-colors flex items-center space-x-3">
                <Headphones className="w-6 h-6" />
                <span>Call Support</span>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Contact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-sky-600 rounded-3xl p-16 text-white mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-24 translate-x-24"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-20 -translate-x-20"></div>
          <div className="absolute top-1/3 left-1/3 w-20 h-20 bg-sky-400/20 rounded-full animate-pulse"></div>

          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-8">Ready to Transform Your Smile?</h2>
              <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
                Contact us today to schedule your free consultation and take the first step towards perfect oral health
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div className="flex flex-col items-center group">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="w-10 h-10" />
                </div>
                <h3 className="font-bold text-2xl mb-4">Call Us</h3>
                <p className="text-blue-100 text-xl">1800-DENTAL-1</p>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="w-10 h-10" />
                </div>
                <h3 className="font-bold text-2xl mb-4">Email Us</h3>
                <p className="text-blue-100 text-xl">info@dentalcarepro.com</p>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Calendar className="w-10 h-10" />
                </div>
                <h3 className="font-bold text-2xl mb-4">Book Online</h3>
                <p className="text-blue-100 text-xl">24/7 Online Booking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallPreview
