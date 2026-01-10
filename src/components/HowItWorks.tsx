import { Database, Users, RefreshCw, Gift } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Database,
      title: "Bundle Acquisition",
      description: "We purchase a premium 65GB MTN bundle on each of your registered SIM cards monthly",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Gift,
      title: "Your Allocation",
      description: "Enjoy 15GB of complimentary data for your personal use each month",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Network Service",
      description: "Up to 50GB powers our customer network, creating value for everyone",
      color: "from-slate-700 to-slate-900"
    },
    {
      icon: RefreshCw,
      title: "Seamless Renewal",
      description: "Automatic monthly renewal ensures uninterrupted service without any action required",
      color: "from-yellow-600 to-yellow-700"
    }
  ];

  return (
    <section id="how-it-works" className="px-6 py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm uppercase tracking-wider font-semibold text-yellow-600">The Process</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
            How It Works
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-slate-900 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A transparent partnership model built on trust and mutual benefit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="group relative">
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-slate-300 to-transparent z-0"></div>
                )}
                
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 h-full hover:-translate-y-2">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                  
                  <h3 className="font-bold mb-3 text-xl text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}