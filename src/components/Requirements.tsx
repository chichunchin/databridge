import { CheckCircle2, XCircle, AlertTriangle, ShieldAlert, Ban } from 'lucide-react';

export function Requirements() {
  const requirements = [
    {
      text: "Only MTN Nigeria lines are accepted into the partnership program",
      icon: CheckCircle2,
      type: 'required'
    },
    {
      text: "A minimum of three (3) active MTN SIM cards is required to participate",
      icon: CheckCircle2,
      type: 'required'
    }
  ];

  const strictRules = [
    {
      text: "DO NOT share or send data from your partnered MTN lines to anyone",
      icon: XCircle,
      consequence: "Instant account termination"
    },
    {
      text: "DO NOT exceed your allocated 15GB monthly personal usage limit",
      icon: XCircle,
      consequence: "Permanent ban from the program"
    },
    {
      text: "DO NOT use data-sharing apps or features on these lines",
      icon: XCircle,
      consequence: "Immediate suspension without warning"
    },
    {
      text: "DO NOT modify, tamper with, or attempt to bypass the system",
      icon: XCircle,
      consequence: "Legal action may be taken"
    }
  ];

  return (
    <section id="requirements" className="px-6 py-24 bg-slate-900 relative">
      {/* MTN Yellow accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 text-yellow-300 rounded-full mb-6">
            <ShieldAlert className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Important - Read Carefully</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Rules & Requirements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-red-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Please read and understand these requirements before joining our partnership program
          </p>
        </div>

        {/* Basic Requirements */}
        <div className="bg-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-yellow-500/30 mb-8">
          <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8" />
            Basic Requirements
          </h3>
          <div className="space-y-4">
            {requirements.map((requirement, index) => {
              const Icon = requirement.icon;
              return (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-5 rounded-xl bg-slate-700/50 border border-slate-600"
                >
                  <div className="flex-shrink-0 mt-0.5 text-green-400">
                    <Icon className="w-6 h-6" strokeWidth={2.5} />
                  </div>
                  <p className="text-lg text-slate-200 flex-1 leading-relaxed">
                    {requirement.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Strict Rules - PROMINENT WARNING SECTION */}
        <div className="bg-gradient-to-br from-red-950 to-red-900 rounded-3xl p-8 md:p-10 shadow-2xl border-4 border-red-500 relative overflow-hidden mb-8">
          {/* Warning pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`
            }}></div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-red-500 flex items-center justify-center animate-pulse">
                <Ban className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                STRICT RULES - VIOLATIONS WILL RESULT IN PERMANENT BAN
              </h3>
            </div>

            <div className="bg-red-950/50 rounded-xl p-6 mb-6 border-2 border-red-400">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-yellow-300 font-bold text-lg mb-2">
                    ⚠️ ZERO TOLERANCE POLICY IN EFFECT
                  </p>
                  <p className="text-red-100 leading-relaxed">
                    Breaking any of the rules below will result in <span className="font-bold text-white">immediate and permanent termination</span> of your partnership. 
                    There are <span className="font-bold text-white">NO warnings, NO appeals, and NO second chances</span>. Your account and all benefits will be lost forever.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {strictRules.map((rule, index) => {
                const Icon = rule.icon;
                return (
                  <div 
                    key={index} 
                    className="p-6 rounded-xl bg-slate-900/80 border-2 border-red-400/50 hover:border-red-400 transition-all"
                  >
                    <div className="flex items-start gap-4 mb-3">
                      <div className="flex-shrink-0 mt-0.5 text-red-400">
                        <Icon className="w-7 h-7" strokeWidth={2.5} />
                      </div>
                      <p className="text-xl font-bold text-white flex-1 leading-relaxed">
                        {rule.text}
                      </p>
                    </div>
                    <div className="ml-11 flex items-center gap-2 text-red-300">
                      <Ban className="w-4 h-4" />
                      <span className="text-sm font-semibold">
                        Consequence: {rule.consequence}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Terms Acceptance Notice */}
        <div className="bg-slate-800 rounded-2xl p-8 border-2 border-yellow-500/30">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-yellow-500 flex items-center justify-center flex-shrink-0">
              <ShieldAlert className="w-8 h-8 text-slate-900" />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold text-yellow-400 mb-2">
                By Registering, You Agree to These Terms
              </h4>
              <p className="text-slate-300 leading-relaxed">
                Registration through our Telegram bot constitutes your full acceptance of all rules, requirements, and consequences outlined above. 
                Ignorance of these terms will not be accepted as an excuse for violations. Complete terms and conditions are available in the bot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}