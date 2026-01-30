import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const firstNameRef = useRef<HTMLHeadingElement>(null);
  const lastNameRef = useRef<HTMLHeadingElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Initial load animation
      const loadTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      loadTl
        .fromTo(labelRef.current, 
          { opacity: 0, y: -10 }, 
          { opacity: 1, y: 0, duration: 0.6 }
        )
        .fromTo(firstNameRef.current, 
          { opacity: 0, x: -60 }, 
          { opacity: 1, x: 0, duration: 0.8 }, 
          0.1
        )
        .fromTo(lastNameRef.current, 
          { opacity: 0, x: -60 }, 
          { opacity: 1, x: 0, duration: 0.8 }, 
          0.2
        )
        .fromTo(lineRef.current, 
          { scaleX: 0 }, 
          { scaleX: 1, duration: 0.6, transformOrigin: 'left' }, 
          0.4
        )
        .fromTo(subheadRef.current, 
          { opacity: 0, y: 18 }, 
          { opacity: 1, y: 0, duration: 0.6 }, 
          0.5
        )
        .fromTo(ctaRef.current, 
          { opacity: 0, y: 18 }, 
          { opacity: 1, y: 0, duration: 0.6 }, 
          0.6
        )
        .fromTo(imageRef.current, 
          { opacity: 0, x: 20, scale: 1.04 }, 
          { opacity: 1, x: 0, scale: 1, duration: 1 }, 
          0.2
        );

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset all elements to visible when scrolling back to top
            gsap.set([firstNameRef.current, lastNameRef.current, labelRef.current, subheadRef.current, ctaRef.current, imageRef.current], {
              opacity: 1, x: 0, y: 0
            });
            gsap.set(lineRef.current, { scaleX: 1 });
          }
        }
      });

      // Exit animations (70% - 100%)
      scrollTl
        .fromTo(nameRef.current, 
          { x: 0, opacity: 1 }, 
          { x: '-40vw', opacity: 0, ease: 'power2.in' }, 
          0.7
        )
        .fromTo(imageRef.current, 
          { x: 0, opacity: 1 }, 
          { x: '18vw', opacity: 0, ease: 'power2.in' }, 
          0.7
        )
        .fromTo(ctaRef.current, 
          { y: 0, opacity: 1 }, 
          { y: '10vh', opacity: 0, ease: 'power2.in' }, 
          0.75
        );

    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById('projects');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="section-pinned bg-navy-900 z-10 flex items-center"
    >
      {/* Gradient overlay for image blend */}
      <div 
        className="absolute right-0 top-0 h-full w-[60vw] pointer-events-none z-[1]"
        style={{
          background: 'linear-gradient(90deg, #070A12 0%, rgba(7,10,18,0) 35%)'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full px-[7vw]">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          {/* Left Content */}
          <div ref={nameRef} className="w-full lg:w-[40vw] pt-[10vh]">
            {/* Micro Label */}
            <span 
              ref={labelRef}
              className="font-mono text-xs tracking-[0.12em] text-text-secondary uppercase block mb-4"
            >
              Full-Stack Developer
            </span>

            {/* Name */}
            <h1 
              ref={firstNameRef}
              className="font-display text-[clamp(48px,8vw,96px)] font-bold leading-[0.95] tracking-[-0.02em]"
              style={{
                background: 'linear-gradient(135deg, #F4F7FF 0%, #B6FF2E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              JERIN
            </h1>
            <h1 
              ref={lastNameRef}
              className="font-display text-[clamp(48px,8vw,96px)] font-bold text-text-primary leading-[0.95] tracking-[-0.02em] mb-8"
            >
              K JOSEPH
            </h1>

            {/* Hairline */}
            <div 
              ref={lineRef}
              className="hairline w-full max-w-[39vw] mb-6"
            />

            {/* Subheadline */}
            <p 
              ref={subheadRef}
              className="text-text-secondary text-lg mb-10 max-w-md"
            >
              React • TypeScript • Node • Design Systems • 3D & AR
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToWork}
                className="bg-lime text-navy-900 hover:bg-lime-dark font-semibold px-8 py-6 rounded-xl text-base transition-all duration-300 hover:shadow-[0_0_30px_rgba(182,255,46,0.4),0_0_60px_rgba(182,255,46,0.2)] hover:scale-105 active:scale-95 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-lime to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center">
                  View Work
                  <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
              </Button>
              <Button 
                variant="outline"
                className="border-white/20 text-text-primary hover:bg-white/10 hover:border-lime/60 px-8 py-6 rounded-xl text-base transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_25px_rgba(182,255,46,0.15)] group backdrop-blur-sm"
                onClick={() => window.open('https://github.com/JerinKJoseph27', '_blank')}
              >
                <Github className="mr-2 w-4 h-4 group-hover:rotate-[360deg] transition-transform duration-500" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Portrait Image */}
      <div 
        ref={imageRef}
        className="absolute right-0 bottom-0 w-[55vw] h-[100vh] hidden lg:block z-0"
      >
        <img 
          src="/hero-portrait.jpg" 
          alt="Jerin K Joseph"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </section>
  );
}