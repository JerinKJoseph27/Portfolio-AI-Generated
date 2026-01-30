import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Github, Linkedin, Send, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { metadata } from '@/data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo(rightRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section 
      ref={sectionRef} 
      id="contact"
      className="relative bg-navy-800 z-[80] py-24 lg:py-32"
    >
      <div className="px-[7vw]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column */}
          <div ref={leftRef} className="w-full lg:w-[40%]">
            <h2 className="font-display text-[clamp(32px,4vw,56px)] font-bold text-text-primary leading-[1.05] tracking-[-0.02em] uppercase mb-6">
              Let's Build Something Great.
            </h2>
            
            <p className="text-text-secondary text-lg mb-10">
              Tell me what you're making. I'll reply within 2 business days. 
              Whether it's a full-stack application, AR experience, or data pipeline—let's talk.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-10">
              <a 
                href="mailto:jerinkjoseph27@gmail.com"
                className="flex items-center gap-4 group hover:translate-x-2 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center group-hover:bg-lime/20 group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-5 h-5 text-lime" />
                </div>
                <div>
                  <div className="text-text-secondary text-sm">Email</div>
                  <div className="text-text-primary group-hover:text-lime transition-colors font-medium">
                    jerinkjoseph27@gmail.com
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 group hover:translate-x-2 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-lime" />
                </div>
                <div>
                  <div className="text-text-secondary text-sm">Location</div>
                  <div className="text-text-primary font-medium">India</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group hover:translate-x-2 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <Calendar className="w-5 h-5 text-lime" />
                </div>
                <div>
                  <div className="text-text-secondary text-sm">Availability</div>
                  <div className="text-text-primary font-medium">Open to opportunities</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href={`https://github.com/${metadata.githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-lime/20 hover:text-lime transition-all duration-300 hover:scale-110 hover:rotate-12 active:scale-95"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href={metadata.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-lime/20 hover:text-lime transition-all duration-300 hover:scale-110 hover:rotate-12 active:scale-95"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:jerinkjoseph27@gmail.com"
                className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-lime/20 hover:text-lime transition-all duration-300 hover:scale-110 hover:rotate-12 active:scale-95"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div ref={rightRef} className="w-full lg:w-[60%]">
            <div className="p-6 lg:p-10 rounded-3xl card-dark">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-lime/20 flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-lime" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-text-primary mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-text-secondary">
                    Thanks for reaching out. I'll get back to you within 2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-text-secondary">Name</Label>
                      <Input 
                        id="name"
                        placeholder="Your name"
                        required
                        className="bg-white/5 border-white/10 text-text-primary placeholder:text-text-secondary/50 focus:border-lime/50 focus:ring-2 focus:ring-lime/20 h-12 rounded-xl transition-all duration-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-text-secondary">Email</Label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="bg-white/5 border-white/10 text-text-primary placeholder:text-text-secondary/50 focus:border-lime/50 focus:ring-2 focus:ring-lime/20 h-12 rounded-xl transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-text-secondary">Project Budget</Label>
                    <Select>
                      <SelectTrigger className="bg-white/5 border-white/10 text-text-primary h-12 rounded-xl">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent className="bg-navy-800 border-white/10">
                        <SelectItem value="small">$1,000 - $5,000</SelectItem>
                        <SelectItem value="medium">$5,000 - $15,000</SelectItem>
                        <SelectItem value="large">$15,000+</SelectItem>
                        <SelectItem value="discuss">Let's discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-text-secondary">Message</Label>
                    <Textarea 
                      id="message"
                      placeholder="Tell me about your project..."
                      required
                      rows={5}
                      className="bg-white/5 border-white/10 text-text-primary placeholder:text-text-secondary/50 focus:border-lime/50 focus:ring-2 focus:ring-lime/20 rounded-xl resize-none transition-all duration-200"
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-lime text-navy-900 hover:bg-lime-dark font-semibold py-6 rounded-xl text-base transition-all duration-300 hover:shadow-glow hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:hover:scale-100 group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}