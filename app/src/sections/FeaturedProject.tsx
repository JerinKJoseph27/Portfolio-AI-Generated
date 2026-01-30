import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, FileText, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProject() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const project = projects[0]; // OSVERSE

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      // ENTRANCE (0% - 30%)
      scrollTl
        .fromTo(imageRef.current, 
          { x: '-60vw', opacity: 0 }, 
          { x: 0, opacity: 1, ease: 'none' }, 
          0
        )
        .fromTo(panelRef.current, 
          { x: '60vw', opacity: 0 }, 
          { x: 0, opacity: 1, ease: 'none' }, 
          0
        )
        .fromTo(titleRef.current, 
          { y: '14vh', opacity: 0 }, 
          { y: 0, opacity: 1, ease: 'none' }, 
          0.05
        )
        .fromTo(tagsRef.current, 
          { x: '6vw', opacity: 0 }, 
          { x: 0, opacity: 1, ease: 'none' }, 
          0.1
        )
        .fromTo(descRef.current, 
          { y: '8vh', opacity: 0 }, 
          { y: 0, opacity: 1, ease: 'none' }, 
          0.12
        )
        .fromTo(ctaRef.current, 
          { y: '10vh', opacity: 0 }, 
          { y: 0, opacity: 1, ease: 'none' }, 
          0.15
        );

      // SETTLE (30% - 70%) - hold

      // EXIT (70% - 100%)
      scrollTl
        .to(imageRef.current, { x: '-18vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to(panelRef.current, { x: '12vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to(titleRef.current, { y: '-8vh', opacity: 0, ease: 'power2.in' }, 0.72)
        .to(tagsRef.current, { opacity: 0, ease: 'power2.in' }, 0.74)
        .to(descRef.current, { y: '6vh', opacity: 0, ease: 'power2.in' }, 0.75)
        .to(ctaRef.current, { y: '8vh', opacity: 0, ease: 'power2.in' }, 0.76);

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="section-pinned bg-navy-900 z-40 flex"
    >
      {/* Left Featured Image */}
      <div 
        ref={imageRef}
        className="absolute left-0 top-0 w-full lg:w-[52vw] h-[40vh] lg:h-full"
      >
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0 lg:hidden"
          style={{
            background: 'linear-gradient(180deg, transparent 40%, #0B1022 100%)'
          }}
        />
        <div 
          className="absolute inset-0 hidden lg:block"
          style={{
            background: 'linear-gradient(90deg, transparent 50%, #0B1022 100%)'
          }}
        />
      </div>

      {/* Right Panel */}
      <div 
        ref={panelRef}
        className="absolute right-0 bottom-0 lg:top-0 w-full lg:w-[48vw] h-[60vh] lg:h-full bg-navy-800 flex items-center"
      >
        <div className="px-[8vw] lg:px-[4vw] py-8 lg:py-0">
          {/* Title */}
          <div ref={titleRef}>
            <span className="font-mono text-xs tracking-[0.12em] text-text-secondary uppercase block mb-3">
              Featured Project
            </span>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] font-bold text-text-primary leading-[1.05] tracking-[-0.02em] uppercase mb-6">
              {project.name}
            </h2>
          </div>

          {/* Tags */}
          <div ref={tagsRef} className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 4).map((tech, i) => (
              <span 
                key={i}
                className="px-3 py-1 bg-lime/10 border border-lime/30 rounded-full text-sm text-lime"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          <p 
            ref={descRef}
            className="text-text-secondary text-base lg:text-lg leading-relaxed max-w-lg mb-8"
          >
            {project.description}
          </p>

          {/* Highlights */}
          <div className="space-y-2 mb-8">
            {project.highlights.slice(0, 3).map((highlight, i) => (
              <div key={i} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-lime mt-1 flex-shrink-0" />
                <span className="text-text-secondary text-sm">{highlight}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <Button 
                className="bg-lime text-navy-900 hover:bg-lime-dark font-semibold px-6 py-6 rounded-xl text-base transition-all duration-300 hover:shadow-glow"
                onClick={() => window.open(project.liveUrl!, '_blank')}
              >
                <ExternalLink className="mr-2 w-4 h-4" />
                View Live Site
              </Button>
            )}
            <Button 
              variant="outline"
              className="border-white/20 text-text-primary hover:bg-white/5 hover:border-white/30 px-6 py-6 rounded-xl text-base transition-all duration-300"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              <FileText className="mr-2 w-4 h-4" />
              View Code
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}