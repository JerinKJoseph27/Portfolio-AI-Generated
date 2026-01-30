import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, ExternalLink, Github } from 'lucide-react';
import { featuredProjects } from '@/data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=140%',
          pin: true,
          scrub: 0.7,
        }
      });

      // ENTRANCE (0% - 30%)
      scrollTl
        .fromTo(headingRef.current, 
          { x: '-40vw', opacity: 0 }, 
          { x: 0, opacity: 1, ease: 'none' }, 
          0
        )
        .fromTo(card3Ref.current, 
          { x: '60vw', rotateZ: 6, opacity: 0 }, 
          { x: 0, rotateZ: 2, opacity: 0.55, ease: 'none' }, 
          0
        )
        .fromTo(card2Ref.current, 
          { x: '70vw', rotateZ: 4, opacity: 0 }, 
          { x: 0, rotateZ: 1, opacity: 0.85, ease: 'none' }, 
          0.05
        )
        .fromTo(card1Ref.current, 
          { x: '80vw', rotateZ: 2, opacity: 0 }, 
          { x: 0, rotateZ: 0, opacity: 1, ease: 'none' }, 
          0.1
        );

      // SETTLE (30% - 70%) - cards hold position

      // EXIT (70% - 100%)
      scrollTl
        .to(headingRef.current, { x: '-18vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to(card3Ref.current, { x: '30vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to(card2Ref.current, { x: '40vw', opacity: 0, ease: 'power2.in' }, 0.72)
        .to(card1Ref.current, { x: '55vw', opacity: 0, ease: 'power2.in' }, 0.74);

    }, section);

    return () => ctx.revert();
  }, []);

  const projects = featuredProjects.slice(0, 3);

  return (
    <section 
      ref={sectionRef} 
      id="projects"
      className="section-pinned bg-navy-900 z-30 flex items-center"
    >
      <div className="w-full px-[7vw] flex flex-col lg:flex-row items-start justify-between">
        {/* Left Heading */}
        <div ref={headingRef} className="w-full lg:w-[28vw] mb-8 lg:mb-0">
          <h2 className="font-display text-[clamp(32px,4vw,56px)] font-bold text-text-primary leading-[1.05] tracking-[-0.02em] uppercase mb-4">
            Selected Work
          </h2>
          <p className="text-text-secondary text-lg">
            A few recent builds—frontend, backend, and everything in between.
          </p>
        </div>

        {/* Right Cards Stack */}
        <div className="relative w-full lg:w-[50vw] h-[500px] lg:h-[64vh]">
          {/* Card 3 (Back) */}
          <div 
            ref={card3Ref}
            className="absolute left-[12vw] lg:left-[12vw] top-[2vh] w-[80vw] lg:w-[38vw] h-[45vh] lg:h-[64vh] rounded-3xl overflow-hidden card-dark opacity-55"
            style={{ zIndex: 1 }}
          >
            <ProjectCard project={projects[2]} compact />
          </div>

          {/* Card 2 (Mid) */}
          <div 
            ref={card2Ref}
            className="absolute left-[6vw] lg:left-[6vw] top-[4vh] w-[85vw] lg:w-[42vw] h-[48vh] lg:h-[64vh] rounded-3xl overflow-hidden card-dark opacity-85"
            style={{ zIndex: 2 }}
          >
            <ProjectCard project={projects[1]} compact />
          </div>

          {/* Card 1 (Front) */}
          <div 
            ref={card1Ref}
            className="absolute left-0 lg:left-0 top-[6vh] w-[90vw] lg:w-[46vw] h-[50vh] lg:h-[64vh] rounded-3xl overflow-hidden card-dark"
            style={{ zIndex: 3 }}
          >
            <ProjectCard project={projects[0]} />
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: typeof featuredProjects[0];
  compact?: boolean;
}

function ProjectCard({ project, compact }: ProjectCardProps) {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Image */}
      <div className={`relative ${compact ? 'h-[55%]' : 'h-[65%]'} overflow-hidden group`}>
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-800/90 to-transparent group-hover:from-navy-800/70 transition-all duration-500" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-navy-900/80 backdrop-blur-sm rounded-full text-xs font-mono text-lime tracking-wider uppercase">
            {project.category}
          </span>
        </div>

        {/* Stars */}
        {project.stars > 0 && (
          <div className="absolute top-4 right-4 flex items-center gap-1">
            <Star className="w-4 h-4 fill-lime text-lime" />
            <span className="text-sm text-text-primary">{project.stars}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`flex-1 p-5 lg:p-6 flex flex-col justify-between ${compact ? 'p-4' : ''}`}>
        <div>
          <h3 className={`font-display font-bold text-text-primary mb-2 ${compact ? 'text-lg' : 'text-xl lg:text-2xl'}`}>
            {project.name}
          </h3>
          <p className={`text-text-secondary line-clamp-2 ${compact ? 'text-sm' : 'text-base'}`}>
            {project.tagline}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.technologies.slice(0, compact ? 3 : 4).map((tech, i) => (
            <span 
              key={i}
              className="px-2 py-1 bg-white/5 rounded-md text-xs text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-4">
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-lime hover:text-lime-dark transition-all duration-200 hover:gap-2 group"
            >
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              Live
            </a>
          )}
          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-text-primary transition-all duration-200 hover:gap-2 group"
          >
            <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
}