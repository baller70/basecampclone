import Image from 'next/image';

export default function VideoSection() {
  return (
    <section className="bg-[#faf8f3] py-0 px-0 w-full flex flex-col items-start relative" style={{ minHeight: '600px' }}>
      {/* Centered screenshot */}
      <div className="w-full flex justify-center items-center" style={{ minHeight: '600px' }}>
        <div className="bg-[#f9f7f3] rounded-2xl border border-black/10 shadow-md p-0" style={{ maxWidth: '1200px', width: '90%', marginTop: '64px', marginBottom: '64px', position: 'relative' }}>
          {/* Sticky note on the border of the screenshot */}
          <div
            className="absolute left-[-40px] top-[-48px] z-20"
            style={{ transform: 'rotate(-6deg)', width: 'max-content' }}
          >
            <div
              className="bg-yellow-300 px-10 py-4 rounded-md shadow-lg border-2 border-yellow-400"
              style={{ fontFamily: 'Marker Felt, Comic Sans MS, cursive', fontSize: '2rem', fontWeight: 900, letterSpacing: '1px', color: '#111', textTransform: 'uppercase', boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
            >
              HIT PLAY TO SEE HOW BASECAMP IS DIFFERENT
            </div>
          </div>
          <Image
            src="/images/basecamp-dashboard-screenshot.jpeg"
            alt="Basecamp Dashboard Screenshot"
            width={1200}
            height={700}
            className="rounded-2xl border border-black/10 w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
