import { Calendar, Clock, Globe, CreditCard, Users, ShieldCheck } from 'lucide-react';

export const CourseDetails = () => {
  const details = [
    {
      icon: <Users className="h-6 w-6 text-primary-500" />,
      label: 'Age Group',
      value: '8–14 Years',
      subtext: 'Designed specifically for young minds',
      bg: 'bg-primary-50 border-primary-100',
    },
    {
      icon: <Clock className="h-6 w-6 text-accent-500" />,
      label: 'Duration',
      value: '4 Weeks',
      subtext: '8 live sessions + interactive tasks',
      bg: 'bg-accent-50 border-accent-100',
    },
    {
      icon: <Globe className="h-6 w-6 text-emerald-500" />,
      label: 'Learning Mode',
      value: '100% Online',
      subtext: 'Live classes via Zoom with recordings',
      bg: 'bg-emerald-50 border-emerald-100',
    },
    {
      icon: <Calendar className="h-6 w-6 text-indigo-500" />,
      label: 'Start Date',
      value: '15 July 2026',
      subtext: 'Registrations close on 12 July',
      bg: 'bg-indigo-50 border-indigo-100',
    },
    {
      icon: <CreditCard className="h-6 w-6 text-rose-500" />,
      label: 'Workshop Fee',
      value: '₹2,999',
      subtext: 'All inclusive, zero hidden charges',
      bg: 'bg-rose-50 border-rose-100',
    },
  ];

  const syllabus = [
    {
      week: 'Week 1',
      title: 'Robotics Core Foundations',
      description: 'Understanding gears, actuators, sensors, and basic block coding structures. Building first virtual simulation.',
    },
    {
      week: 'Week 2',
      title: 'Introduction to AI & Machine Learning',
      description: 'How do computers see and think? Train custom image and voice classification models using Scratch/Python integrations.',
    },
    {
      week: 'Week 3',
      title: 'Autonomous Systems & Sensors',
      description: 'Coding ultrasonic distance sensors, line followers, and obstacle-avoidance logic inside virtual simulation software.',
    },
    {
      week: 'Week 4',
      title: 'Graduation Project Showcase',
      description: 'Design, build and present an autonomous smart-city or space-rover robot. Receive certificate & evaluation feedback.',
    },
  ];

  return (
    <section id="details" className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-4">
            Workshop Quick Overview
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about the AI & Robotics Summer Workshop. Structured to fit summer schedules.
          </p>
        </div>

        {/* Details Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 mb-16">
          {details.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.03] hover:shadow-lg bg-white ${item.bg}`}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm border border-slate-100">
                {item.icon}
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  {item.label}
                </span>
                <span className="text-2xl font-black text-slate-800 block mb-2">
                  {item.value}
                </span>
                <p className="text-xs text-slate-500 leading-normal">
                  {item.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Weekly Syllabus Roadmap */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 lg:p-12 shadow-sm">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left roadmap header */}
            <div className="lg:col-span-4 space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-100">
                <ShieldCheck className="h-4 w-4" />
                Certificate Course
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 leading-snug">
                Syllabus Built for Hands-on Learners
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We focus on active creation, not passive watching. Over 4 weeks, kids progress from basic instructions to compiling AI models that drive simulated rover units.
              </p>
              
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">Included Materials</div>
                <ul className="text-xs text-slate-600 mt-2 space-y-1.5 list-disc list-inside">
                  <li>Lifetime access to Simulator Software</li>
                  <li>Weekly worksheets and cheat sheets</li>
                  <li>Live session class recordings</li>
                  <li>Direct Discord mentorship support</li>
                </ul>
              </div>
            </div>

            {/* Right roadmap timeline */}
            <div className="lg:col-span-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                {syllabus.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative rounded-2xl border border-slate-100 bg-slate-50/50 p-6 transition-all hover:bg-slate-50 hover:border-primary-100 group"
                  >
                    <span className="absolute -top-3 left-6 inline-flex rounded-full bg-primary-600 px-3 py-0.5 text-xs font-bold text-white shadow-sm">
                      {item.week}
                    </span>
                    <h4 className="text-base font-bold text-slate-800 mt-2 mb-2 group-hover:text-primary-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
