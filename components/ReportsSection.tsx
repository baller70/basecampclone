export default function ReportsSection() {
  return (
    <section className="bg-pink-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Reports give you confidence to hold people accountable
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            See who's working on what, when, and how much time they're spending. No more wondering what happened to that deadline.
          </p>
        </div>

        {/* Reports grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Time tracking */}
          <div className="relative">
            <div className="absolute top-4 left-4 z-10">
              <div className="bg-yellow-300 px-4 py-2 rounded-md transform -rotate-1">
                <span className="text-sm font-bold text-black uppercase">HOW MUCH TIME HAVE WE SPENT?</span>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border-4 border-pink-400">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Timesheets</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-sm">Emily Rodriguez</span>
                    <span className="text-sm font-semibold">24.5 hours</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-sm">Sarah Johnson</span>
                    <span className="text-sm font-semibold">32.0 hours</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-sm">Mike Chen</span>
                    <span className="text-sm font-semibold">28.5 hours</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-sm">Alex Rivera</span>
                    <span className="text-sm font-semibold">19.0 hours</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between items-center font-bold">
                    <span>Total:</span>
                    <span>104.0 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Activity tracking */}
          <div className="relative">
            <div className="absolute top-4 left-4 z-10">
              <div className="bg-yellow-300 px-4 py-2 rounded-md transform rotate-1">
                <span className="text-sm font-bold text-black uppercase">WHO'S RESPONSIBLE FOR WHAT?</span>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border-4 border-red-400">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Activity Feed</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <p className="text-sm">
                        <span className="font-semibold">Sarah Johnson</span> completed 
                        <span className="text-blue-600"> Website redesign mockups</span>
                      </p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <p className="text-sm">
                        <span className="font-semibold">Mike Chen</span> updated 
                        <span className="text-blue-600"> Database optimization</span>
                      </p>
                      <p className="text-xs text-gray-500">4 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <p className="text-sm">
                        <span className="font-semibold">Emily Rodriguez</span> commented on 
                        <span className="text-blue-600"> Marketing campaign</span>
                      </p>
                      <p className="text-xs text-gray-500">6 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <p className="text-sm">
                        <span className="font-semibold">Alex Rivera</span> uploaded 
                        <span className="text-blue-600"> Final presentation</span>
                      </p>
                      <p className="text-xs text-gray-500">8 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visualization section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Visualizations are for seeing, not squinting
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
            Hill Charts show you if work is stuck or moving along. Gantt-style charts show you dependencies and timing. Both give you the big picture at a glance.
          </p>
          
          {/* Sample charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-blue-400">
              <h3 className="text-xl font-bold mb-4 text-left">Hill Chart Progress</h3>
              <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm text-gray-600">Project moving forward</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-purple-400">
              <h3 className="text-xl font-bold mb-4 text-left">Timeline Overview</h3>
              <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm text-gray-600">Timeline visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
