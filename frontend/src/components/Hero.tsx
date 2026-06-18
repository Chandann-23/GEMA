import { Cpu, Terminal, ArrowRight, Star, Bot, Sparkles } from 'lucide-react';

interface HeroProps {
  onEnrollClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onEnrollClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white py-16 lg:py-24">
      {/* Background Decorative Blobs */}
      <div className="absolute left-1/4 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-200 opacity-40 blur-3xl filter" />
      <div className="absolute right-1/4 bottom-10 h-80 w-80 translate-x-1/2 rounded-full bg-accent-200 opacity-35 blur-3xl filter" />

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Hero Left Content */}
          <div className="text-center lg:col-span-7 lg:text-left">
            {/* Banner/Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700 mb-6 animate-pulse-slow">
              <Sparkles className="h-4 w-4 text-accent-500" />
              <span>GEMA Summer Camp 2026</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl mb-6 leading-tight">
              AI & Robotics <br />
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                Summer Workshop
              </span>
            </h1>

            {/* Short Description */}
            <p className="text-lg text-slate-600 sm:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Spark your child's curiosity this summer! A hands-on, interactive 4-week online adventure designed for kids aged 8–14 to build, program, and bring virtual robots to life. No prior experience required.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <button
                onClick={onEnrollClick}
                className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-xl bg-accent-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-accent-500/20 transition-all hover:bg-accent-600 hover:shadow-xl hover:shadow-accent-500/30 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 active:scale-[0.98]"
              >
                Enroll Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <a
                href="#details"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-8 py-4 text-lg font-semibold text-slate-700 transition-all hover:border-primary-500 hover:bg-primary-50 hover:text-primary-600 focus:outline-none"
              >
                Learn More
              </a>
            </div>

            {/* Hero Quick Stats */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 border-t border-slate-100 pt-6">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-primary-100 flex items-center justify-center text-[10px] font-bold text-primary-700">
                      Kid
                    </div>
                  ))}
                </div>
                <span className="text-sm font-medium text-slate-600">
                  <strong className="text-slate-900">1,200+</strong> Kids registered
                </span>
              </div>

              <div className="h-4 w-px bg-slate-200 hidden sm:block" />

              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-sm font-medium text-slate-600 ml-1">
                  <strong className="text-slate-900">4.9/5</strong> Parent Rating
                </span>
              </div>
            </div>
          </div>

          {/* Hero Right Visuals (Interactive Programming Mockup) */}
          <div className="lg:col-span-5 relative flex justify-center w-full">
            <div className="relative w-full max-w-md lg:max-w-none animate-float">
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary-400 to-accent-400 opacity-20 blur-xl" />
              
              {/* Main Mockup Card */}
              <div className="relative rounded-2xl border border-slate-200 bg-slate-900 p-4 shadow-2xl text-slate-200 font-mono text-xs overflow-hidden">
                {/* Editor Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-rose-500" />
                    <span className="h-3 w-3 rounded-full bg-amber-500" />
                    <span className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <div className="rounded bg-slate-800 px-3 py-1 text-[10px] text-slate-400 font-sans flex items-center gap-1">
                    <Terminal className="h-3 w-3 text-primary-400" />
                    <span>robot_controller.py</span>
                  </div>
                  <div className="w-12" />
                </div>

                {/* Editor Content Area */}
                <div className="space-y-3">
                  <div className="text-slate-500"># Import GEMA AI & Robotics Libraries</div>
                  <div>
                    <span className="text-pink-400 font-bold">from</span> gema_robotics <span className="text-pink-400 font-bold">import</span> AI_Agent, Robot
                  </div>
                  
                  <div className="mt-2 text-slate-500"># Create a new intelligent robot</div>
                  <div>
                    robot = Robot(<span className="text-emerald-400">"RoboSpark_2026"</span>)
                  </div>
                  <div>
                    ai = AI_Agent(model=<span className="text-emerald-400">"gemini-vision-kid"</span>)
                  </div>

                  <div className="mt-2 text-slate-500"># Define summer camp challenge behavior</div>
                  <div>
                    <span className="text-pink-400 font-bold">def</span> <span className="text-blue-400 font-bold">on_detect_obstacle</span>(distance):
                  </div>
                  <div className="pl-4">
                    <span className="text-pink-400 font-bold">if</span> distance &lt; <span className="text-purple-400">10</span>:
                  </div>
                  <div className="pl-8 text-slate-400">
                    robot.stop()
                  </div>
                  <div className="pl-8">
                    ai.analyze_path()
                  </div>
                  <div className="pl-8 text-slate-400">
                    robot.turn(<span className="text-purple-400">90</span>) <span className="text-slate-500"># Pivot right</span>
                  </div>
                  <div className="pl-4 text-pink-400 font-bold">else</div>
                  <div className="pl-8 text-slate-400">
                    robot.move_forward(speed=<span className="text-purple-400">80</span>)
                  </div>
                </div>

                {/* Floating Preview Card inside mockup */}
                <div className="mt-6 rounded-xl bg-slate-800/80 p-3 border border-slate-700/50 flex items-center justify-between font-sans">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary-500/10 border border-primary-500/30 flex items-center justify-center">
                      <Bot className="h-6 w-6 text-primary-400" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Virtual Obstacle Course</div>
                      <div className="text-[10px] text-slate-400">Task: Autonomous Navigation</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="inline-flex items-center gap-1 rounded bg-green-500/10 px-1.5 py-0.5 text-[9px] font-semibold text-green-400 border border-green-500/20">
                      Active
                    </span>
                    <span className="text-[9px] text-slate-400 mt-1">Accuracy: 98%</span>
                  </div>
                </div>
              </div>

              {/* Smaller floating widget behind main card */}
              <div className="absolute -bottom-6 -left-6 rounded-xl border border-slate-200 bg-white p-4 shadow-xl flex items-center gap-3 max-w-[180px] hidden sm:flex">
                <div className="h-8 w-8 rounded-full bg-accent-100 flex items-center justify-center">
                  <Cpu className="h-4 w-4 text-accent-600" />
                </div>
                <div className="font-sans">
                  <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Mode</div>
                  <div className="text-sm font-bold text-slate-800">100% Online</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
