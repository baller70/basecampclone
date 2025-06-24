export default function TestimonialsTicker() {
  const testimonials = [
    { text: "Extremely user friendly", stars: 5 },
    { text: "Truly amazing!", stars: 5 },
    { text: "A godsend for our org", stars: 5 },
    { text: "Best project management tool", stars: 5 },
    { text: "Simple and effective", stars: 5 },
    { text: "Changed how we work", stars: 5 },
    { text: "Love the clean interface", stars: 5 },
    { text: "Perfect for our team", stars: 5 }
  ]

  return (
    <section className="bg-slate-800 py-8 overflow-hidden">
      <div className="relative">
        {/* Scrolling testimonials */}
        <div className="flex animate-scroll whitespace-nowrap">
          {/* First set */}
          {testimonials.map((testimonial, index) => (
            <div key={index} className="inline-flex items-center mx-8 text-white">
              <div className="flex space-x-1 mr-3">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <span className="text-lg font-medium">"{testimonial.text}"</span>
            </div>
          ))}
          {/* Duplicate set for seamless scrolling */}
          {testimonials.map((testimonial, index) => (
            <div key={`duplicate-${index}`} className="inline-flex items-center mx-8 text-white">
              <div className="flex space-x-1 mr-3">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <span className="text-lg font-medium">"{testimonial.text}"</span>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
