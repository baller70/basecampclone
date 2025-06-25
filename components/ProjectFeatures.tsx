import Image from 'next/image';

export default function ProjectFeatures() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Walkthrough text block, left-aligned as in screenshot */}
        <div className="mb-16 text-left max-w-3xl">
          <h2 className="text-6xl font-black tracking-tight text-black mb-4" style={{lineHeight: 1.1}}>
            Let's walk through it.
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-3 whitespace-nowrap" style={{lineHeight: 1.15, whiteSpace: 'nowrap'}}>
            10 seconds after you sign up, clarity sets in.
          </h3>
          <p className="text-xl md:text-2xl text-black">
            <span className="whitespace-nowrap">The home screen organizes your projects, assignments, and upcoming events together on one screen.</span><br />
            <span className="whitespace-nowrap">It's your calm, comfortable, simple starting point every morning.</span>
          </p>
        </div>
        {/* Screenshot section: pixel-perfect match to provided screenshot */}
        <div className="flex justify-center items-start w-full mt-12 mb-16">
          {/* Left column: two stacked images (3 on top, 5 below) */}
          <div className="flex flex-col gap-8 relative" style={{ width: 700 }}>
            {/* Top card: 3.jpeg with sticky note */}
            <div className="relative mb-2">
              <div className="absolute -top-8 left-2 z-10" style={{ transform: 'rotate(-4deg)' }}>
                <div className="bg-yellow-300 px-5 py-2 rounded-md shadow-lg border-2 border-yellow-400 w-fit">
                  <span className="text-lg font-bold text-black uppercase font-handwriting tracking-tight">WHAT'S MY WEEK LOOK LIKE?</span>
                </div>
              </div>
              <Image src="/images/3.jpeg" alt="What's My Week Look Like?" width={680} height={340} className="rounded-xl shadow-md border border-neutral-200" />
            </div>
            {/* Bottom card: 5.jpeg with sticky note */}
            <div className="relative mt-2">
              <div className="absolute -top-8 left-2 z-10" style={{ transform: 'rotate(-2deg)' }}>
                <div className="bg-yellow-300 px-5 py-2 rounded-md shadow-lg border-2 border-yellow-400 w-fit">
                  <span className="text-lg font-bold text-black uppercase font-handwriting tracking-tight">WHICH PROJECTS AM I ON?</span>
                </div>
              </div>
              <Image src="/images/5.jpeg" alt="Which Projects Am I On?" width={680} height={340} className="rounded-xl shadow-md border border-neutral-200" />
            </div>
          </div>
          {/* Right column: one large image (4.jpeg) with sticky note */}
          <div className="relative ml-16" style={{ width: 1400 }}>
            <div className="absolute -top-8 left-2 z-10" style={{ transform: 'rotate(-4deg)' }}>
              <div className="bg-yellow-300 px-5 py-2 rounded-md shadow-lg border-2 border-yellow-400 w-fit">
                <span className="text-lg font-bold text-black uppercase font-handwriting tracking-tight">WHAT'S ON MY PLATE TODAY?</span>
              </div>
            </div>
            <Image src="/images/4.jpeg" alt="What's On My Plate Today?" width={1380} height={520} className="rounded-xl shadow-md border border-gray-200" />
          </div>
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
            <div className="bg-[#faf8f3] rounded-2xl border border-black/10 p-8 pt-16 min-h-[320px] flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-bold mb-2">Company Meetup: Austin, TX</h4>
                <p className="text-gray-700 mb-4">December 2nd-6th</p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold">+15</span>
                  <span className="text-green-600 font-bold">On track</span>
                </div>
                <ul className="text-sm text-gray-800 space-y-1">
                  <li>✓ Venue booking confirmed</li>
                  <li>✓ Catering arranged</li>
                  <li>◐ Presentation prep</li>
                </ul>
              </div>
              <div className="mt-6">
                <span className="text-xs font-semibold text-gray-500">WHAT'S MY WEEK LOOK LIKE?</span>
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
