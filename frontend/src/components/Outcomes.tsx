import { Award, Code2, Bot, BrainCircuit, Lightbulb, Compass } from 'lucide-react';

export const Outcomes = () => {
  const outcomes = [
    {
      icon: <Bot className="h-6 w-6 text-primary-500" />,
      title: 'Build & Program Virtual Robots',
      desc: 'Kids will construct simulated rovers, code pathfinding paths, and utilize ultrasonic sensors to navigate virtual mazes.',
    },
    {
      icon: <BrainCircuit className="h-6 w-6 text-accent-500" />,
      title: 'Understand AI & Machine Learning',
      desc: 'Learn the principles of artificial intelligence by training custom ML models that respond to user voices, drawings, and gestures.',
    },
    {
      icon: <Code2 className="h-6 w-6 text-emerald-500" />,
      title: 'Develop Computational Logic',
      desc: 'Master key logic concepts like variables, loops, conditional statements, and functions, building solid problem-solving skills.',
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-amber-500" />,
      title: '3+ Portfolio Graduation Projects',
      desc: 'Build projects including an autonomous delivery rover, an interactive image classifier, and a smart-home automated lock system.',
    },
    {
      icon: <Award className="h-6 w-6 text-indigo-500" />,
      title: 'Earn GEMA Industry Certificate',
      desc: 'Receive a verifiable digital certificate recognized by global edtech councils, perfect for displaying in future academic portfolios.',
    },
    {
      icon: <Compass className="h-6 w-6 text-rose-500" />,
      title: 'Explore Future Tech Pathways',
      desc: 'Expose children to real-world applications of IoT, neural networks, and self-driving cars to fuel interest in high-paying engineering paths.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-primary-600 uppercase tracking-widest bg-primary-50 px-3 py-1 rounded-full">
            Key Learning Outcomes
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mt-4 mb-4">
            What Will Your Child Achieve?
          </h2>
          <p className="text-lg text-slate-600">
            This workshop blends logical thinking with design thinking. Here are the core outcomes parents can expect from our curriculum:
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-200 flex gap-4 items-start"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-primary-50 group-hover:border-primary-100 transition-colors">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Graduation/Certificate Highlight banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-primary-600 to-indigo-700 p-8 lg:p-12 text-white relative overflow-hidden shadow-lg shadow-indigo-600/10">
          <div className="absolute right-0 top-0 h-40 w-40 bg-white opacity-5 rounded-full translate-x-10 -translate-y-10" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left space-y-4">
              <h3 className="text-2xl lg:text-3xl font-black">
                Endorsed by GEMA Educational Standards
              </h3>
              <p className="text-primary-100 text-sm leading-relaxed">
                Every child who completes the course requirements and presents their graduation project will receive a personalized digital Certificate of Achievement. This certificate can be shared online or added to school files.
              </p>
            </div>
            <div className="shrink-0 flex items-center justify-center h-28 w-28 bg-white/10 rounded-full border border-white/20 animate-pulse-slow">
              <Award className="h-16 w-16 text-accent-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
