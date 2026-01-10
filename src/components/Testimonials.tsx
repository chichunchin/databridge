import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Chukwuemeka O.",
      location: "Lagos",
      sims: 5,
      text: "I've been a partner for 6 months now. Getting 75GB free data monthly across my 5 SIMs is incredible! The process is completely automated and hassle-free.",
      rating: 5
    },
    {
      name: "Aisha M.",
      location: "Abuja",
      sims: 3,
      text: "Initially skeptical, but DataBridge delivered exactly as promised. 45GB monthly for doing absolutely nothing! Best decision I made this year.",
      rating: 5
    },
    {
      name: "Oluwaseun K.",
      location: "Port Harcourt",
      sims: 4,
      text: "The registration took less than 2 minutes via Telegram. Now I enjoy 60GB monthly without any effort. Highly recommend to anyone with spare MTN lines!",
      rating: 5
    }
  ];

  return (
    <section className="px-6 py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm uppercase tracking-wider font-semibold text-yellow-600">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
            What Our Partners Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-slate-900 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of satisfied MTN partners earning free data monthly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-200 hover:border-yellow-400 hover:shadow-2xl transition-all duration-300 relative group"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Quote className="w-6 h-6 text-slate-900" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-slate-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author info */}
              <div className="border-t border-slate-200 pt-4">
                <p className="font-bold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-600">{testimonial.location}</p>
                <div className="mt-2 inline-block px-3 py-1 bg-yellow-100 rounded-full">
                  <span className="text-xs font-semibold text-yellow-700">
                    {testimonial.sims} MTN SIMs • {testimonial.sims * 15}GB/month
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
