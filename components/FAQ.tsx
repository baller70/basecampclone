"use client"

import { useState } from 'react'

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const faqItems = [
    {
      question: "The answer is YES!",
      answer: "Whatever you're wondering about Basecamp, the answer is probably yes. It handles teams of all sizes, works on every device, integrates with your favorite tools, scales with your business, and has been helping millions of people work better together for over 20 years.",
      bgColor: "bg-red-500",
      textColor: "text-white"
    },
    {
      question: "How much does Basecamp cost?",
      answer: "Basecamp costs $99/month for unlimited users and projects. We also offer a personal plan for $9/month for up to 3 projects and 20 users. Both plans include all features, no per-user fees, and you can try it free for 30 days.",
      bgColor: "bg-teal-500",
      textColor: "text-white"
    },
    {
      question: "Can I try Basecamp for free?",
      answer: "Yes! You can try Basecamp free for 30 days. No credit card required. Just sign up and start using it right away. If you love it, great! If not, no worries - just walk away.",
      bgColor: "bg-blue-500",
      textColor: "text-white"
    },
    {
      question: "What happens to my data if I cancel?",
      answer: "Your data is always yours. If you cancel, you can export all your data at any time. We'll keep it safe for 6 months in case you change your mind, then permanently delete it.",
      bgColor: "bg-purple-500",
      textColor: "text-white"
    },
    {
      question: "Is Basecamp secure?",
      answer: "Absolutely. We use bank-level security, encrypt all data in transit and at rest, and undergo regular security audits. Your data is stored in secure data centers with 24/7 monitoring.",
      bgColor: "bg-green-500",
      textColor: "text-white"
    },
    {
      question: "Need help? Contact us directly!",
      answer: "Reach out to our founders directly: Jason Fried at jason@basecamp.com or David Heinemeier Hansson at david@basecamp.com. We respond personally to every message.",
      bgColor: "bg-orange-500",
      textColor: "text-white"
    }
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Basecamp
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="rounded-lg shadow-lg border-2 border-gray-300 overflow-hidden">
              <button
                className={`w-full px-6 py-4 text-left flex justify-between items-center ${item.bgColor} ${item.textColor} hover:opacity-90 focus:outline-none focus:opacity-90 transition-opacity`}
                onClick={() => setOpenItem(openItem === index ? null : index)}
              >
                <span className="text-lg font-bold">{item.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    openItem === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openItem === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Testimonials section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-black text-center mb-12">
            What people are saying about Basecamp
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <p className="text-gray-600 mb-4">
                "Basecamp has completely transformed how our team works together. We're more organized, productive, and actually enjoy our projects now."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Marketing Director</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <p className="text-gray-600 mb-4">
                "Finally, a project management tool that doesn't feel like work. Our clients love being part of the process too."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-900">Mike Chen</p>
                  <p className="text-sm text-gray-500">Creative Agency Owner</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <p className="text-gray-600 mb-4">
                "We tried every tool out there. Basecamp is the only one that actually makes project management simple and enjoyable."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-500 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-900">Emily Rodriguez</p>
                  <p className="text-sm text-gray-500">Product Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-black mb-4">
            Ready to get organized?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join over 100,000 companies that trust Basecamp to keep their projects organized and their teams happy.
          </p>
          <a href="#" className="inline-block px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-full hover:bg-green-600 transition-colors mr-4">
            Try Basecamp Free
          </a>
          <a href="#" className="inline-block px-8 py-4 border-2 border-gray-300 text-gray-700 text-lg font-semibold rounded-full hover:border-gray-400 transition-colors">
            Watch the Demo
          </a>
        </div>
      </div>
    </section>
  )
}
