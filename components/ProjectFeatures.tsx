"use client"

import Image from 'next/image';

export default function ProjectFeatures() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          {/* Deleted the card matching the screenshot as requested */}
        </div>

        
