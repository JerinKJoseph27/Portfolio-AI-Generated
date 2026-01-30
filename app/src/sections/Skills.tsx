import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download, Code, Database, Layers, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { skillsData } from '@/data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=125%',
          pin: true,
          scrub: 0.6,
        }
      });

      // ENTRANCE (0% - 30%)
      scrollTl
        .fromTo(imageRef.current, 
          { x: '-55vw', opacity: 0 }, 
          { x: 0, opacity: 1, ease: 'none' }, 
          0
        )
        .fromTo(panelRef.current, 
          { x: '60vw', opacity: 0 }, 
          { x: 0, opacity: 1, ease: 'none' }, 
          0
        )
        .fromTo(headlineRef.current, 
          { y: '12vh', opacity: 0 }, 
          { y: 0, opacity: 1, ease: 'none' }, 
          0.05
        )
        .fromTo(underlineRef.current, 
          { scaleX: 0 }, 
          { scaleX: 1, ease: 'none', transformOrigin: 'left' }, 
          0.1
        )
        .fromTo(skillsRef.current?.children || [], 
          { y: '6vh', opacity: 0 }, 
          { y: 0, opacity: 1, stagger: 0.02, ease: 'none' }, 
          0.1
        );

      // SETTLE (30% - 70%) - hold

      // EXIT (70% - 100%)
      scrollTl
        .to(imageRef.current, { x: '-18vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to(panelRef.current, { x: '12vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to(headlineRef.current, { y: '-8vh', opacity: 0, ease: 'power2.in' }, 0.72)
        .to(skillsRef.current?.children || [], { opacity: 0, stagger: 0.01, ease: 'power2.in' }, 0.74);

    }, section);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Engineering',
      skills: skillsData.frameworks.frontend
    },
    {
      icon: Database,
      title: 'Backend & Databases',
      skills: [...skillsData.frameworks.backend, ...skillsData.databases]
    },
    {
      icon: Layers,
      title: 'Languages',
      skills: skillsData.languages
    },
    {
      icon: Zap,
      title: 'Specialized Tools',
      skills: skillsData.tools.slice(0, 4)
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      id="skills"
      className="section-pinned bg-navy-900 z-50 flex"
    >
      {/* Left Image */}
      <div 
        ref={imageRef}
        className="absolute left-0 top-0 w-[42vw] h-full hidden lg:block"
      >
        <img 
          src="/skills-image.jpg" 
          alt="Skills"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, transparent 60%, #0B1022 100%)'
          }}
        />
      </div>

      {/* Right Panel */}
      <div 
        ref={panelRef}
        className="absolute right-0 top-0 w-full lg:w-[58vw] h-full bg-navy-800 flex items-center"
      >
        <div className="px-[8vw] lg:px-[5vw] py-16 w-full">
          {/* Headline */}
          <div ref={headlineRef}>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] font-bold text-text-primary leading-[1.05] tracking-[-0.02em] uppercase mb-2">
              Skills & Services
            </h2>
            <div ref={underlineRef} className="h-[2px] w-24 bg-lime mb-10" />
          </div>

          {/* Skills Grid */}
          <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {skillCategories.map((category, i) => (
              <div 
                key={i}
                className="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-lime/30 hover:bg-white/[0.05] transition-all duration-300 hover:shadow-[0_0_30px_rgba(182,255,46,0.1)] hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-lime/10 flex items-center justify-center group-hover:bg-lime/20 transition-colors duration-300">
                    <category.icon className="w-5 h-5 text-lime" />
                  </div>
                  <h3 className="font-display font-semibold text-text-primary">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <span 
                      key={j}
                      className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-full text-sm text-text-secondary hover:text-text-primary transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Specializations */}
          <div className="mb-8">
            <h3 className="font-mono text-xs tracking-[0.12em] text-text-secondary uppercase mb-4">
              Specializations
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillsData.specializations.map((spec, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 bg-lime/10 border border-lime/20 rounded-xl text-sm text-lime hover:bg-lime/20 hover:border-lime/40 transition-all duration-200 cursor-default hover:scale-105 active:scale-95"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Button 
            variant="outline"
            className="border-white/20 text-text-primary hover:bg-white/10 hover:border-lime/40 px-8 py-6 rounded-xl text-base transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(182,255,46,0.1)] group"
            onClick={() => window.open('https://linkedin.com/in/jerin-k-joseph-80447021b/', '_blank')}
          >
            <Download className="mr-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            View LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
}