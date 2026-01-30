import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart } from 'lucide-react';
import { metadata } from '@/data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(nameRef.current,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      ref={sectionRef} 
      className="relative bg-navy-900 z-[90] py-16 lg:py-24"
    >
      <div className="px-[7vw]">
        {/* Large Name */}
        <h2 
          ref={nameRef}
          className="font-display text-[clamp(40px,10vw,120px)] font-bold text-text-primary leading-[0.95] tracking-[-0.02em] uppercase text-center mb-8"
        >
          Jerin K Joseph
        </h2>

        {/* Tagline */}
        <p className="text-text-secondary text-center text-lg mb-12 max-w-xl mx-auto">
          Full-Stack Developer crafting fast, accessible, and expressive web experiences.
        </p>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <a 
            href="#projects"
            className="text-text-secondary hover:text-lime transition-colors duration-300"
          >
            Work
          </a>
          <a 
            href="#skills"
            className="text-text-secondary hover:text-lime transition-colors duration-300"
          >
            Skills
          </a>
          <a 
            href="#contact"
            className="text-text-secondary hover:text-lime transition-colors duration-300"
          >
            Contact
          </a>
          <a 
            href={`https://github.com/${metadata.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-lime transition-colors duration-300"
          >
            GitHub
          </a>
          <a 
            href={metadata.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-lime transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>

        {/* Divider */}
        <div className="hairline max-w-md mx-auto mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-text-secondary text-sm">
          <span>&copy; {currentYear} Jerin K Joseph</span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-lime fill-lime" /> using React + GSAP
          </span>
        </div>
      </div>
    </footer>
  );
}