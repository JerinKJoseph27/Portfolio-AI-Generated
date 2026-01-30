import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Star, Calendar, Check } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { Badge } from '@/components/ui/badge';

gsap.registerPlugin(ScrollTrigger);

export default function AllProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        
        gsap.fromTo(card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            delay: i * 0.1
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="all-projects"
      className="relative bg-navy-900 z-[70] py-24 lg:py-32"
    >
      <div className="px-[7vw]">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-display text-[clamp(32px,4vw,56px)] font-bold text-text-primary leading-[1.05] tracking-[-0.02em] uppercase mb-4">
            All Projects
          </h2>
          <p className="text-text-secondary text-lg">
            A complete collection of my work— from AR educational platforms to data pipelines.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.id}
              ref={el => { cardsRef.current[i] = el; }}
              className="group rounded-3xl overflow-hidden card-dark hover:border-lime/20 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-[250px] lg:h-[300px] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-800 via-navy-800/50 to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-navy-900/80 backdrop-blur-sm text-lime border-0">
                    {project.category}
                  </Badge>
                  <Badge className="bg-navy-900/80 backdrop-blur-sm text-text-secondary border-0">
                    {project.status}
                  </Badge>
                </div>

                {/* Stars */}
                {project.stars > 0 && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-navy-900/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 fill-lime text-lime" />
                    <span className="text-sm text-text-primary">{project.stars}</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-text-primary group-hover:text-lime transition-colors duration-300">
                    {project.name}
                  </h3>
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-lime/20 hover:text-lime transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-lime/20 hover:text-lime transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-text-secondary mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.slice(0, 3).map((highlight, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-lime mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary text-sm line-clamp-1">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 5).map((tech, j) => (
                    <span 
                      key={j}
                      className="px-3 py-1 bg-white/5 rounded-full text-xs text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-text-secondary text-sm">
                  <Calendar className="w-4 h-4" />
                  {project.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}