export default function VideoSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Yellow banner */}
        <div className="text-center mb-12">
          <div className="inline-block bg-yellow-300 px-6 py-3 rounded-md transform -rotate-1 shadow-md border-2 border-yellow-400">
            <h2 className="text-xl font-bold text-black uppercase tracking-wide font-handwriting">
              HIT PLAY TO SEE HOW BASECAMP IS DIFFERENT
            </h2>
          </div>
        </div>
        
        {/* Video player area */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Video thumbnail */}
          <div className="relative">
            <img 
              src="/images/walkthrough-video-thumbnail.webp" 
              alt="Basecamp walkthrough video" 
              className="w-full h-auto"
            />
            
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-black bg-opacity-75 rounded-full flex items-center justify-center hover:bg-opacity-90 transition-opacity">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 5v10l8-5-8-5z"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Demo interface mockup */}
          <div className="p-6 bg-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">e</span>
                </div>
                <button className="px-4 py-2 bg-green-500 text-white rounded-md text-sm font-medium">
                  Make a new project
                </button>
                <button className="px-4 py-2 bg-gray-500 text-white rounded-md text-sm font-medium">
                  Invite people
                </button>
              </div>
            </div>
            
            <div className="text-sm text-gray-600 mb-4">
              Pinned & recent projects below · <a href="#" className="text-blue-600 underline">View all in a list</a> · <a href="#" className="text-blue-600 underline">View favorites</a> · Press <kbd className="bg-gray-200 px-1 rounded">⌘J</kbd> anytime to jump
            </div>
            
            {/* Project cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border">
                <h3 className="font-semibold mb-2">Enormicom HQ</h3>
                <p className="text-sm text-gray-600 mb-2">Where everybody knows your name.</p>
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white"></div>
                  <span className="text-xs text-gray-500 ml-2">+15</span>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border">
                <h3 className="font-semibold mb-2">What Works</h3>
                <p className="text-sm text-gray-600 mb-2">Kickoffs, Heart Sucker Cycles</p>
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white"></div>
                  <span className="text-xs text-gray-500 ml-2">+11</span>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border">
                <h3 className="font-semibold mb-2">Marketing: Swag</h3>
                <p className="text-sm text-gray-600 mb-2">Got Swag 📦</p>
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white"></div>
                  <span className="text-xs text-gray-500 ml-2">+10</span>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <button className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md text-sm">
                RECENTLY VISITED
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
