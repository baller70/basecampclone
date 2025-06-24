"use client"

import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    alert('Thanks for subscribing!')
    setEmail('')
  }

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter and Support Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Newsletter */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">Never miss an update</h3>
            <p className="text-gray-600 mb-6">
              Join more than 150,000 people who get our newsletter. We'll share product updates, thoughts, new releases, and other tidbits we think you'll find interesting.
            </p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="julia.young@hey.com"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-black text-white rounded-r-md hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">We're here to help with 24/7/365 support</h3>
            <p className="text-gray-600 mb-4">
              There are no stupid questions — for pre-sales questions, existing customers who need a hand, or just inquiries, just ping us and we'll get back to you within an hour. 
              <a href="#" className="text-blue-600 hover:underline">Watch tutorials</a>, 
              <a href="#" className="text-blue-600 hover:underline ml-1">read the help guides</a>, or 
              <a href="#" className="text-blue-600 hover:underline ml-1">send us a message</a> to get help.
            </p>
            <p className="text-sm text-gray-500">
              If you love Basecamp, you'll love <span className="font-semibold">HEY</span> — our delightfully fresh take on email + calendar
            </p>
          </div>
        </div>

        {/* Extensive Links Section */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-black mb-6">And there's more...</h3>
          <div className="text-sm leading-relaxed text-gray-600">
            <a href="#" className="text-blue-600 hover:underline">What's new</a> • 
            <a href="#" className="text-blue-600 hover:underline ml-1">The people's path to Basecamp</a> • 
            <a href="#" className="text-blue-600 hover:underline ml-1">Books we've written</a> • 
            <a href="#" className="text-blue-600 hover:underline ml-1">Where we came from</a> • 
            <a href="#" className="text-blue-600 hover:underline ml-1">How we communicate</a> • 
            <a href="#" className="text-blue-600 hover:underline ml-1">How we make decisions</a> • <br className="block md:hidden" />
            <a href="#" className="text-blue-600 hover:underline ml-1">Why we choose profit</a> • 
            <a href="#" className="text-blue-600 hover:underline ml-1">Group chat problems</a> • 
            <a href="#" className="text-blue-600 hover:underline ml-1">Seven shipping principles</a> • 
            <a href="#" className="text-blue-600 hover:underline ml-1">We stand to lose</a> • 
            <a href="#" className="text-blue-600 hover:underline ml-1">Some overviuls</a> • <br className="block md:hidden" />
            <a href="#" className="text-blue-600 hover:underline ml-1">Leaving the Cloud</a> • 
            <a href="#" className="text-blue-600 hover:underline ml-1">Night & day</a> • 
            <a href="#" className="text-blue-600 hover:underline ml-1">See where projects really stand</a> • 
            <a href="#" className="text-blue-600 hover:underline ml-1">JUST LET ME DO MY JOB</a> • 
            <a href="#" className="text-blue-600 hover:underline ml-1">What changed for the better?</a> • 
            <a href="#" className="text-blue-600 hover:underline ml-1">Integrations</a> • <br className="block md:hidden" />
            <a href="#" className="text-blue-600 hover:underline ml-1">Basecamp is for everyone</a> • 
            <a href="#" className="text-blue-600 hover:underline ml-1">Basecamp community</a> • 
            <a href="#" className="text-blue-600 hover:underline ml-1">Learn Basecamp</a> • 
            <a href="#" className="text-blue-600 hover:underline ml-1">Employee handbook</a>
          </div>
        </div>

        {/* Company Info */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img src="/images/basecamp-logo.png" alt="Basecamp" className="h-6 w-auto mr-2" />
              <span className="text-sm text-gray-600">
                is designed, built, and backed by <span className="font-semibold">37signals</span>
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-700">Updates</a>
              <a href="#" className="hover:text-gray-700">Status</a>
              <a href="#" className="hover:text-gray-700">Policies</a>
              <span>© 2025 37signals LLC</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
