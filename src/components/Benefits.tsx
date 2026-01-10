import { Smartphone, DollarSign, Clock, Shield } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Monthly Rewards",
      description: "Receive 15GB of premium MTN data absolutely complimentary, delivered to your account every month",
      gradient: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Clock,
      title: "Effortless Automation",
      description: "Set it and forget it. Our sophisticated system handles everything automatically after initial setup",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Smartphone,
      title: "Scalable Partnership",
      description: "Partner with multiple SIM cards (minimum 3) to multiply your monthly data allocation",
      gradient: "from-slate-700 to-slate-900"
    },
    {
      icon: Shield,
      title: "Trusted Platform",
      description: "Join hundreds of satisfied partners across Nigeria who trust our reliable service",
      gradient: "from-yellow-600 to-yellow-700"
    }
  ];

  return (
    <section id="benefits" className="px-6 py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm uppercase tracking-wider font-semibold text-yellow-600">Advantages</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
            Partner Benefits
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-slate-900 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Experience the premium advantages of being a DataBridge MTN partner
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-slate-50 rounded-2xl p-10 border-2 border-slate-200 hover:border-slate-300 transition-all duration-500 hover:shadow-xl"
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <div className={`w-full h-full bg-gradient-to-br ${benefit.gradient} rounded-bl-full`}></div>
                </div>

                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold mb-3 text-xl text-slate-900">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}