'use client'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import 'primeicons/primeicons.css';
import Hero from './HERO';

interface HomeClientProps {
  dict: any;
  colors: any;
  lang: string;
}

export default function HomeClient({ dict, colors, lang }: HomeClientProps) {
  
  // Simulation des projets (Tu pourras aussi les mettre dans ton JSON plus tard)
  const projects = [
    {
      id: "01",
      title: dict.projects.p1.title, // "MarketPlace Africaine"
      description: dict.projects.p1.desc,
      tags: ["React", "Node.js", "UI/UX"],
      image: "/projet1.jpg",
      isCompleted: false,
      projectLink: "#"
    },
    {
      id: "02",
      title: dict.projects.p2.title, // "Culture AFRICAINE"
      description: dict.projects.p2.desc,
      tags: ["NextJS", "Tailwind", "Motion"],
      image: "/images/project.png",
      isCompleted: true,
      projectLink: "https://cultureafricaine.vercel.app/"
    },
    {
      id: "03",
      title: dict.projects.p3.title, // "Visual Branding"
      description: dict.projects.p3.desc,
      tags: ["Branding", "Illustration"],
      image: "/projet3.jpg",
      isCompleted: false,
      projectLink: "#"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: colors.dark, color: colors.light }}>
      
      {/* --- HERO SECTION --- */}
      <Hero  />

      {/* --- PROJECTS --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-mono text-[10px] tracking-[0.5em] text-gray-500 uppercase block mb-4"
            >
              ACTIVE_DEPLOYMENTS
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              {dict.projects.heading1} <span style={{ color: colors.primary }}>{dict.projects.heading2}</span>
            </h2>
          </div>
          <p className="max-w-xs text-xs font-mono text-gray-500 leading-relaxed uppercase">
            {dict.projects.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {projects.map((projet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0A0A0A] group relative overflow-hidden flex flex-col h-full"
            >
              {/* Le reste de ton code JSX est identique, utilise dict.status.ready etc... */}
              <div className="p-6 flex justify-between items-start z-10">
                <span className="font-mono text-[10px] text-gray-500">{projet.id}</span>
                <div className="flex gap-1">
                  <div className={`w-1.5 h-1.5 rounded-full ${projet.isCompleted ? 'bg-green-500' : 'bg-orange-500 animate-pulse'}`} />
                  <span className="text-[8px] font-mono uppercase tracking-widest opacity-50">
                    {projet.isCompleted ? dict.status.ready : dict.status.progress}
                  </span>
                </div>
              </div>

              <div className="relative h-64 w-full px-6 grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image
                  src={projet.image}
                  alt={projet.title}
                  fill
                  className="object-cover opacity-40 group-hover:opacity-100 transition-opacity"
                />
              </div>

              <div className="p-8 mt-auto border-t border-white/5">
                <h3 className="text-xl font-black uppercase tracking-tight mb-2" style={{ color: projet.isCompleted ? colors.light : 'gray' }}>
                  {projet.title}
                </h3>
                <p className="text-xs text-gray-500 mb-6 font-mono italic">
                  &rdquo;{projet.description}&rdquo;
                </p>
                <Link
                  href={projet.isCompleted ? projet.projectLink : "#"}
                  className={`flex items-center justify-between text-[10px] font-mono tracking-widest uppercase transition-all ${projet.isCompleted ? 'text-primary' : 'text-gray-700'}`}
                  style={{ color: projet.isCompleted ? colors.primary : '' }}
                >
                  {projet.isCompleted ? dict.actions.access : dict.actions.denied}
                  <i className={`pi ${projet.isCompleted ? 'pi-arrow-right' : 'pi-lock'}`} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CULTURAL FUSION SECTION --- */}
      <section className="relative py-32 overflow-hidden border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
            {dict.mission.title1} <span style={{ color: colors.tertiary }}>{dict.mission.heritage}</span> <br /> 
            {dict.mission.title2} <span style={{ color: colors.primary }}>{dict.mission.future}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-16">
            {dict.mission.desc}
          </p>
          <Link
            href="/CULTURE"
            className="px-12 py-5 text-black text-xs font-black uppercase tracking-[0.2em] inline-block"
            style={{ backgroundColor: colors.primary }}
          >
            {dict.actions.vision}
          </Link>
        </div>
      </section>
    </div>
  );
}