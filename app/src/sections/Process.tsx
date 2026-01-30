import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Rocket, Monitor, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

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
        .fromTo(panelRef.current, 
          { x: '-60vw', opacity: 0 }, 
          { x: 0, opacity: 1, ease: 'none' }, 
          0
        )
        .fromTo(imageRef.current, 
          { x: '55vw', opacity: 0 }, 
          { x: 0, opacity: 1, ease: 'none' }, 
          0
        )
        .fromTo(headlineRef.current, 
          { y: '10vh', opacity: 0 }, 
          { y: 0, opacity: 1, ease: 'none' }, 
          0.05
        )
        .fromTo(bodyRef.current, 
          { y: '8vh', opacity: 0 }, 
          { y: 0, opacity: 1, ease: 'none' }, 
          0.1
        )
        .fromTo(metricsRef.current?.children || [], 
          { y: '6vh', opacity: 0 }, 
          { y: 0, opacity: 1, stagger: 0.03, ease: 'none' }, 
          0.12
        );

      // SETTLE (30% - 70%) - hold

      // EXIT (70% - 100%)
      scrollTl
        .to(panelRef.current, { x: '-12vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to(imageRef.current, { x: '18vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to(headlineRef.current, { y: '6vh', opacity: 0, ease: 'power2.in' }, 0.72)
        .to(bodyRef.current, { y: '4vh', opacity: 0, ease: 'power2.in' }, 0.74)
        .to(metricsRef.current?.children || [], { opacity: 0, stagger: 0.01, ease: 'power2.in' }, 0.75);

    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById('projects');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const metrics = [
    { icon: Rocket, label: '2x', desc: 'Prototype Speed' },
    { icon: Monitor, label: '100%', desc: 'Responsive' },
    { icon: Shield, label: 'WCAG', desc: 'Accessibility' },
    { icon: Clock, label: 'Fast', desc: 'Delivery' }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="section-pinned bg-navy-900 z-[60] flex"
    >
      {/* Left Content Panel */}
      <div 
        ref={panelRef}
        className="absolute left-0 top-0 w-full lg:w-[58vw] h-full bg-navy-800 flex items-center"
      >
        <div className="px-[8vw] lg:px-[5vw] py-16">
          {/* Headline */}
          <h2 
            ref={headlineRef}
            className="font-display text-[clamp(32px,4vw,56px)] font-bold text-text-primary leading-[1.05] tracking-[-0.02em] uppercase mb-6"
          >
            Process & Principles
          </h2>

          {/* Body */}
          <p 
            ref={bodyRef}
            className="text-text-secondary text-lg leading-relaxed max-w-xl mb-10"
          >
            I start with structure, then add polish. Early feedback loops keep the work 
            aligned with real goals. I ship often, measure, and refine. Every project 
            begins with understanding the problem deeply before writing a single line of code.
          </p>

          {/* Metrics */}
          <div ref={metricsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {metrics.map((metric, i) => (
              <div 
                key={i}
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-center"
              >
                <metric.icon className="w-6 h-6 text-lime mx-auto mb-2" />
                <div className="font-display font-bold text-2xl text-text-primary mb-1">
                  {metric.label}
                </div>
                <div className="text-text-secondary text-sm">
                  {metric.desc}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button 
            onClick={scrollToWork}
            className="bg-lime text-navy-900 hover:bg-lime-dark font-semibold px-6 py-6 rounded-xl text-base transition-all duration-300 hover:shadow-glow"
          >
            See Work
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Right Image */}
      <div 
        ref={imageRef}
        className="absolute right-0 top-0 w-[42vw] h-full hidden lg:block"
      >
        <img 
          src="/process-image.jpg" 
          alt="Process"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(270deg, transparent 60%, #0B1022 100%)'
          }}
        />
      </div>
    </section>
  );
}