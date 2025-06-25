"use client"

import Image from 'next/image';
import { useRef } from 'react';

export default function ProjectFeatures() {
  const projectSectionRef = useRef<HTMLDivElement>(null);

  const handleClone = () => {
    if (projectSectionRef.current) {
      const clonedElement = projectSectionRef.current.cloneNode(true); // true for deep clone (includes children)
      projectSectionRef.current.parentElement?.appendChild(clonedElement);
      const data = {
        clonedSuccess: true
      };
      // Optionally, you could use this data for further logic
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clone button for demo */}
        <div className="mb-8 text-right">
          <button onClick={handleClone} className="px-4 py-2 bg-yellow-400 text-black font-bold rounded shadow hover:bg-yellow-300 transition-colors">
            Clone Project Section
          </button>
        </div>
        <div className="mb-12 text-left max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-black mb-2" style={{lineHeight: 1.1, textAlign: 'left'}}>Let's walk through it.</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-2" style={{textAlign: 'left'}}>10 seconds after you sign up, clarity sets in.</h3>
          <div className="text-2xl text-black font-normal leading-snug mb-8" style={{textAlign: 'left'}}>
            <span className="block whitespace-nowrap">The home screen organizes your projects, assignments, and upcoming events together on</span>
            <span className="block whitespace-nowrap">one screen. It's your calm, comfortable, simple starting point every morning.</span>
          </div>
        </div>
        {/* Screenshot section: pixel-perfect match to provided screenshot */}
        <div className="grid grid-cols-3 gap-8 items-start">
          {/* Left Card */}
          <div className="relative col-span-2">
            {/* Sticky Note Overlapping the Card */}
            <div className="sticky-note" style={{ position: 'absolute', top: '8px', left: '24px', transform: 'rotate(-4deg)', zIndex: 2, fontSize: '1.5rem', fontWeight: 'bold', background: '#ffe600', padding: '8px 24px', borderRadius: '6px', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', fontFamily: 'Marker Felt, Comic Sans MS, cursive' }}>
              A PROJECT PAGE ORGANIZES EVERYTHING
            </div>
            <img src="/images/3.jpeg" alt="Project Page" className="w-full rounded-2xl shadow-lg" style={{ marginTop: '32px' }} />
          </div>
          {/* Right Cards */}
          <div className="flex flex-col gap-8">
            {/* Top Right Card */}
            <div className="relative">
              <div className="sticky-note" style={{ position: 'absolute', top: '8px', left: '16px', transform: 'rotate(-3deg)', zIndex: 2, fontSize: '1.25rem', fontWeight: 'bold', background: '#ffe600', padding: '6px 18px', borderRadius: '6px', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', fontFamily: 'Marker Felt, Comic Sans MS, cursive' }}>
                WHAT TO DO + WHO'S DOING?
              </div>
              <img src="/images/4.jpeg" alt="To-dos" className="w-full rounded-2xl shadow-lg" style={{ marginTop: '28px' }} />
            </div>
            {/* Middle Right Card */}
            <div className="relative">
              <div className="sticky-note" style={{ position: 'absolute', top: '8px', left: '16px', transform: 'rotate(2deg)', zIndex: 2, fontSize: '1.25rem', fontWeight: 'bold', background: '#ffe600', padding: '6px 18px', borderRadius: '6px', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', fontFamily: 'Marker Felt, Comic Sans MS, cursive' }}>
                WHO SAID WHAT WHEN?
              </div>
              <img src="/images/5.jpeg" alt="Reminders" className="w-full rounded-2xl shadow-lg" style={{ marginTop: '28px' }} />
            </div>
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
            <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 flex-1 relative" style={{ minWidth: 420 }}>
              {/* Insert the text block here, under the sticky note */}
              <div className="project-text-block" style={{ marginTop: '0', marginBottom: '24px' }}>
                <div style={{ fontWeight: 'bold', fontSize: '2rem', lineHeight: 1.1 }}>
                  Projects get teams — and keep teams — organized.
                </div>
                <div style={{ fontSize: '1.25rem', marginTop: '8px' }}>
                  A project is where the tasks, discussions, deliverables, and decisions happen. Projects hold everything — and everyone — together in one tidy, predictably structured place.
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
