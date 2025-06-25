import Image from 'next/image'

export default function WalkthroughSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top text block */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-black mb-6" style={{ lineHeight: 1.1 }}>
            Let's walk through it.
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
            10 seconds after you sign up, clarity sets in.
          </h3>
          <p className="text-xl text-gray-700">
            The home screen organizes your projects, assignments, and upcoming events together on one screen. It's your calm, comfortable, simple starting point every morning.
          </p>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left column (two stacked images) */}
          <div className="space-y-8 lg:col-span-1">
            <div className="w-full rounded-2xl overflow-hidden shadow-lg">
              {/* Top-left image (3.jpeg) */}
              <Image
                src="/images/3.jpeg"
                alt="Home screen cards"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="w-full rounded-2xl overflow-hidden shadow-lg">
              {/* Bottom-left image (5.jpeg) */}
              <Image
                src="/images/5.jpeg"
                alt="Home screen list"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right dominant image (4.jpeg) spanning two rows */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/4.jpeg"
              alt="Home screen overview"
              width={1600}
              height={1200}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 