export default function HeroSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Hero illustration with speech bubbles */}
          <div className="mb-12 relative">
            <img 
              src="/images/hero-illustration.png" 
              alt="Project chaos illustration" 
              className="mx-auto max-w-4xl w-full h-auto"
            />
            
            {/* Speech bubbles overlay */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Left speech bubble */}
              <div className="absolute top-16 left-8 bg-white rounded-lg p-3 shadow-lg border-2 border-gray-300 max-w-xs">
                <div className="text-sm font-bold text-gray-800">WAIT, WHO MADE THAT DECISION?</div>
                <div className="absolute bottom-0 left-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white transform translate-y-full"></div>
              </div>
              
              {/* Right speech bubble */}
              <div className="absolute top-20 right-8 bg-white rounded-lg p-3 shadow-lg border-2 border-gray-300 max-w-xs">
                <div className="text-sm font-bold text-gray-800">DID WE GET THAT DONE YET?</div>
                <div className="absolute bottom-0 right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white transform translate-y-full"></div>
              </div>
              
              {/* Additional speech bubbles */}
              <div className="absolute top-32 left-1/4 bg-white rounded-lg p-3 shadow-lg border-2 border-gray-300 max-w-xs">
                <div className="text-sm font-bold text-gray-800">I DON'T KNOW WHERE TO PUT THAT!</div>
                <div className="absolute bottom-0 left-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white transform translate-y-full"></div>
              </div>
              
              <div className="absolute top-40 right-1/4 bg-white rounded-lg p-3 shadow-lg border-2 border-gray-300 max-w-xs">
                <div className="text-sm font-bold text-gray-800">WAIT, CAN THE CLIENT SEE THAT?</div>
                <div className="absolute bottom-0 right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white transform translate-y-full"></div>
              </div>
              
              {/* X marks over chaotic elements */}
              <div className="absolute top-24 left-1/3 text-red-500 text-6xl font-bold transform rotate-12">✗</div>
              <div className="absolute top-36 right-1/3 text-red-500 text-6xl font-bold transform -rotate-12">✗</div>
            </div>
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
            Wrestling with projects?
            <br />
            <span className="block">It doesn't have to be this hard.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A project is where the tasks, discussions, deliverables, and decisions happen. Projects hold everything — and everyone — together in one tidy, predictably structured place.
          </p>
          
          {/* Jason Fried signature */}
          <div className="mb-8">
            <p className="text-lg text-gray-700 italic font-handwriting mb-2">
              "It just works. And you'll work better with it too."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Jason Fried, <a href="mailto:jason@basecamp.com" className="text-blue-600 hover:underline">jason@basecamp.com</a></p>
                <p className="text-sm text-gray-600">Co-founder & CEO</p>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="mb-16">
            <a href="#" className="inline-block px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-full hover:bg-green-600 transition-colors shadow-lg">
              Sign up free
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
