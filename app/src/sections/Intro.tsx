import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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
          { y: '18vh', opacity: 0 }, 
          { y: 0, opacity: 1, ease: 'none' }, 
          0.05
        )
        .fromTo(bodyRef.current, 
          { y: '10vh', opacity: 0 }, 
          { y: 0, opacity: 1, ease: 'none' }, 
          0.1
        )
        .fromTo(ctaRef.current, 
          { scale: 0.92, y: '8vh', opacity: 0 }, 
          { scale: 1, y: 0, opacity: 1, ease: 'none' }, 
          0.15
        );

      // SETTLE (30% - 70%) - elements hold position

      // EXIT (70% - 100%)
      scrollTl
        .to(imageRef.current, { x: '-18vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to(panelRef.current, { x: '12vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to(headlineRef.current, { y: '-10vh', opacity: 0, ease: 'power2.in' }, 0.7)
        .to(bodyRef.current, { y: '6vh', opacity: 0, ease: 'power2.in' }, 0.75)
        .to(ctaRef.current, { scale: 0.96, opacity: 0, ease: 'power2.in' }, 0.75);

    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef} 
      id="intro"
      className="section-pinned bg-navy-900 z-20 flex"
    >
      {/* Left Image Panel */}
      <div 
        ref={imageRef}
        className="absolute left-0 top-0 w-[42vw] h-full hidden lg:block"
      >
        <img 
          src="/intro-closeup.jpg" 
          alt="Jerin working"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, transparent 60%, #0B1022 100%)'
          }}
        />
      </div>

      {/* Right Content Panel */}
      <div 
        ref={panelRef}
        className="absolute right-0 top-0 w-full lg:w-[58vw] h-full bg-navy-800 flex items-center"
      >
        <div className="px-[8vw] lg:px-[5vw] py-16">
          {/* Headline */}
          <h2 
            ref={headlineRef}
            className="font-display text-[clamp(28px,4vw,52px)] font-bold text-text-primary leading-[1.05] tracking-[-0.02em] uppercase mb-8"
          >
            I Build Fast, Accessible, and Expressive Web Experiences.
          </h2>

          {/* Body */}
          <p 
            ref={bodyRef}
            className="text-text-secondary text-lg leading-relaxed max-w-xl mb-10"
          >
            I'm a full-stack developer who cares about performance, clarity, and craft. 
            I turn complex problems into calm, intuitive interfaces—backed by solid architecture. 
            From interactive 3D visualizations to robust data pipelines, I bring ideas to life.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <Button 
              onClick={scrollToContact}
              className="bg-lime text-navy-900 hover:bg-lime-dark font-semibold px-6 py-6 rounded-xl text-base transition-all duration-300 hover:shadow-glow"
            >
              Start a Project
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <a 
              href="mailto:jerinkjoseph27@gmail.com"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-lime transition-colors duration-300 text-base"
            >
              <Mail className="w-4 h-4" />
              jerinkjoseph27@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}