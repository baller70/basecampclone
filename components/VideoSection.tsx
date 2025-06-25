import Image from 'next/image';

export default function VideoSection() {
  return (
    <section className="bg-[#faf8f3] py-0 px-0 w-full flex flex-col items-start relative" style={{ minHeight: '600px' }}>
      {/* Sticky note in the top left, absolutely positioned */}
      <div
        className="absolute left-0 top-0 z-10"
        style={{ transform: 'rotate(-3deg)', marginTop: '32px', marginLeft: '32px' }}
      >
        <div
          className="bg-yellow-300 px-6 py-3 rounded-md shadow-lg border-2 border-yellow-400"
          style={{ fontFamily: 'Marker Felt, Comic Sans MS, cursive', fontSize: '1.75rem', fontWeight: 700, letterSpacing: '0.5px', color: '#111' }}
        >
          HIT PLAY TO SEE HOW BASECAMP IS DIFFERENT
        </div>
      </div>
      {/* Centered screenshot */}
      <div className="w-full flex justify-center items-center" style={{ minHeight: '600px' }}>
        <div className="bg-[#f9f7f3] rounded-2xl border border-black/10 shadow-md p-0" style={{ maxWidth: '1200px', width: '90%', marginTop: '64px', marginBottom: '64px', position: 'relative' }}>
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
