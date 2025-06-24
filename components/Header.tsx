export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and tagline */}
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full mr-2 flex items-center justify-center" style={{backgroundColor: '#DC5F47'}}>
                <span className="text-white font-bold text-lg">b</span>
              </div>
              <span className="text-lg font-bold" style={{color: '#DC5F47'}}>Basecamp</span>
            </div>
            <span className="ml-4 text-sm text-gray-600">
              is the <span className="bg-yellow-300 px-1">wonderfully efficient</span> project management system by <span className="font-semibold text-blue-600">37signals</span>
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <a href="#" className="px-4 py-2 rounded-full bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition-colors">
              Real world results
            </a>
            <a href="#" className="px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-colors">
              Features
            </a>
            <a href="#" className="px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-colors">
              Paths
            </a>
            <a href="#" className="px-4 py-2 rounded-full bg-purple-500 text-white text-sm font-medium hover:bg-purple-600 transition-colors">
              Pricing
            </a>
            <a href="#" className="px-4 py-2 rounded-full bg-teal-500 text-white text-sm font-medium hover:bg-teal-600 transition-colors">
              Sign in
            </a>
            <a href="#" className="px-6 py-2 rounded-full bg-green-600 text-white text-sm font-bold hover:bg-green-700 transition-colors">
              Sign up free
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
