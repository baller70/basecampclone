export default function ClientTools() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Got clients? Be partners, not adversaries.
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Client access gives clients visibility into the projects you're working on for them. They get to see work in progress, participate in discussions, and stay in the loop without getting in the way.
          </p>
        </div>

        {/* Client tools grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Client visibility */}
          <div className="bg-gray-50 rounded-lg p-8 border-4 border-green-400">
            <h3 className="text-2xl font-bold mb-4">Client Dashboard</h3>
            <p className="text-gray-600 mb-6">
              Clients can see exactly what you're working on for them, when it's due, and how it's progressing.
            </p>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold">Website Redesign Project</h4>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">On Track</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Design mockups</span>
                  <span className="text-sm text-green-600">✓ Complete</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Development phase</span>
                  <span className="text-sm text-blue-600">In Progress</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Testing & launch</span>
                  <span className="text-sm text-gray-400">Pending</span>
                </div>
              </div>
            </div>
          </div>

          {/* Client communication */}
          <div className="bg-gray-50 rounded-lg p-8 border-4 border-blue-400">
            <h3 className="text-2xl font-bold mb-4">Direct Communication</h3>
            <p className="text-gray-600 mb-6">
              Clients can participate in discussions, ask questions, and provide feedback directly within the project.
            </p>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="text-sm">
                      <span className="font-semibold">Client:</span> The new homepage looks great! Can we adjust the header font size?
                    </p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="text-sm">
                      <span className="font-semibold">Designer:</span> Absolutely! I'll make that change and update the mockup.
                    </p>
                    <p className="text-xs text-gray-500">1 hour ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* File sharing */}
          <div className="bg-gray-50 rounded-lg p-8 border-4 border-purple-400">
            <h3 className="text-2xl font-bold mb-4">Secure File Sharing</h3>
            <p className="text-gray-600 mb-6">
              Share files, documents, and deliverables with clients in a secure, organized way.
            </p>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-red-500 rounded"></div>
                    <span className="text-sm">Brand Guidelines.pdf</span>
                  </div>
                  <button className="text-blue-600 text-sm">Download</button>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-500 rounded"></div>
                    <span className="text-sm">Homepage Mockup v3.sketch</span>
                  </div>
                  <button className="text-blue-600 text-sm">Download</button>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-green-500 rounded"></div>
                    <span className="text-sm">Project Timeline.xlsx</span>
                  </div>
                  <button className="text-blue-600 text-sm">Download</button>
                </div>
              </div>
            </div>
          </div>

          {/* Approval workflow */}
          <div className="bg-gray-50 rounded-lg p-8 border-4 border-orange-400">
            <h3 className="text-2xl font-bold mb-4">Approval Workflow</h3>
            <p className="text-gray-600 mb-6">
              Clients can review work, provide feedback, and approve deliverables without email back-and-forth.
            </p>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="space-y-4">
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Homepage Design</span>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Pending Review</span>
                  </div>
                </div>
                <div className="p-3 bg-green-50 border border-green-200 rounded">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Logo Design</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Approved</span>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Content Strategy</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">In Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-black mb-4">
            Happy clients, organized projects, better work.
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            When everyone knows what's happening, when it's happening, and why it's happening, projects run smoother and relationships stay strong.
          </p>
          <a href="#" className="inline-block px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-full hover:bg-green-600 transition-colors">
            Start organizing your clients
          </a>
        </div>
      </div>
    </section>
  )
}
