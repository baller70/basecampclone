export default function ProjectFeatures() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Projects get teams — and keep teams — organized.
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            A project is where the tasks, discussions, deliverables, and decisions happen. Projects hold everything — and everyone — together in one tidy, predictably structured place.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Feature 1 */}
          <div className="relative">
            <div className="absolute top-4 left-4 z-10">
              <div className="bg-yellow-300 px-4 py-2 rounded-md transform -rotate-2 shadow-lg border-2 border-yellow-400">
                <span className="text-sm font-bold text-black uppercase font-handwriting">A PROJECT PAGE ORGANIZES EVERYTHING</span>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden border-4 border-blue-500 shadow-xl">
              <div className="p-6">
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h3 className="font-bold text-lg mb-2">Company Meetup: Austin, TX</h3>
                  <p className="text-sm text-gray-600 mb-2">December 2nd-6th</p>
                  <div className="flex -space-x-2 mb-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 bg-orange-500 rounded-full border-2 border-white"></div>
                    <span className="text-xs text-gray-500 ml-2">+15</span>
                  </div>
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs inline-block">On track</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">Venue booking confirmed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">Catering arranged</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-500">◐</span>
                    <span className="text-sm">Presentation prep</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="relative">
            <div className="absolute top-4 left-4 z-10">
              <div className="bg-yellow-300 px-4 py-2 rounded-md transform rotate-1 shadow-lg border-2 border-yellow-400">
                <span className="text-sm font-bold text-black uppercase font-handwriting">WHAT'S MY WEEK LOOK LIKE?</span>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden border-4 border-green-500 shadow-xl">
              <img 
                src="/images/whats-my-week-look-like.webp" 
                alt="Weekly schedule interface" 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="relative">
            <div className="absolute top-4 left-4 z-10">
              <div className="bg-yellow-300 px-4 py-2 rounded-md transform -rotate-1 shadow-lg border-2 border-yellow-400">
                <span className="text-sm font-bold text-black uppercase font-handwriting">WHICH PROJECTS AM I ON?</span>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden border-4 border-purple-500 shadow-xl">
              <img 
                src="/images/which-projects-am-i-on.webp" 
                alt="Project overview interface" 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Feature 4 */}
          <div className="relative">
            <div className="absolute top-4 left-4 z-10">
              <div className="bg-yellow-300 px-4 py-2 rounded-md transform rotate-2 shadow-lg border-2 border-yellow-400">
                <span className="text-sm font-bold text-black uppercase font-handwriting">WHO'S RESPONSIBLE FOR WHAT?</span>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden border-4 border-orange-500 shadow-xl">
              <div className="p-6">
                <h3 className="font-bold text-lg mb-4">GH Designs: Logo Redesign</h3>
                <p className="text-sm text-gray-600 mb-4">Phase Two | Lead: Sofia</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">Sofia Martinez</span>
                    </div>
                    <span className="text-sm text-orange-600">Lead Designer</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Mike Chen</span>
                    </div>
                    <span className="text-sm text-blue-600">Brand Strategist</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Alex Rivera</span>
                    </div>
                    <span className="text-sm text-green-600">Client Liaison</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="relative">
            <div className="absolute top-4 left-4 z-10">
              <div className="bg-yellow-300 px-4 py-2 rounded-md transform -rotate-2 shadow-lg border-2 border-yellow-400">
                <span className="text-sm font-bold text-black uppercase font-handwriting">HOW FAR ALONG ARE WE?</span>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden border-4 border-teal-500 shadow-xl">
              <div className="p-6">
                <h3 className="font-bold text-lg mb-4">Honcho Airlines: PPC Campaigns</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Status: ⚫ / Completed: 75%</span>
                    <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Some risk</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-teal-500 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                  <div className="text-sm text-gray-600">
                    Updated 3:25pm by Sarah Johnson
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="relative">
            <div className="absolute top-4 left-4 z-10">
              <div className="bg-yellow-300 px-4 py-2 rounded-md transform rotate-1 shadow-lg border-2 border-yellow-400">
                <span className="text-sm font-bold text-black uppercase font-handwriting">ALL IN ONE TOOLBOX</span>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden border-4 border-red-500 shadow-xl">
              <img 
                src="/images/all-in-one-toolbox.webp" 
                alt="All tools interface" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* YES! badges section */}
        <div className="flex justify-center space-x-8 mb-16">
          <div className="bg-yellow-300 px-6 py-3 rounded-lg transform rotate-2 shadow-lg border-2 border-yellow-400">
            <span className="text-2xl font-bold text-black font-handwriting">YES!</span>
          </div>
          <div className="bg-yellow-300 px-6 py-3 rounded-lg transform -rotate-1 shadow-lg border-2 border-yellow-400">
            <span className="text-2xl font-bold text-black font-handwriting">YES!</span>
          </div>
          <div className="bg-yellow-300 px-6 py-3 rounded-lg transform rotate-1 shadow-lg border-2 border-yellow-400">
            <span className="text-2xl font-bold text-black font-handwriting">YES!</span>
          </div>
        </div>

        {/* Bottom content */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-black mb-4">
            10 seconds after you sign up, clarity sets in.
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Everything is purposeful, organized, and easy to find. No more digging through email chains or hunting for the latest version of a file.
          </p>
          <a href="#" className="inline-block px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-full hover:bg-green-600 transition-colors">
            Let's walk through it
          </a>
        </div>
      </div>
    </section>
  )
}
