import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ArrowUpRight, Maximize2, Eye, Zap } from 'lucide-react';
import { Marquee, BrutalButton, BrutalCard } from './components/BrutalComponents';
import { ChatSection } from './components/ChatSection';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);

  // Smooth scroll hack for anchor links
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-neo-bg text-neo-black selection:bg-neo-black selection:text-neo-lime font-display">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-4 mix-blend-difference text-white">
        <div className="text-3xl font-black tracking-tighter">LOU VICIOUS</div>
        <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 border-2 border-white hover:bg-white hover:text-black transition-colors"
        >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* Fullscreen Menu Overlay */}
      {isMenuOpen && (
        <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed inset-0 z-40 bg-neo-pink flex flex-col items-center justify-center space-y-8 border-l-8 border-black"
        >
            {['MANIFESTO', 'WORKS', 'ORACLE', 'CONTACT'].map((item) => (
                <button 
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-6xl md:text-8xl font-black text-black hover:text-white hover:italic transition-all hover:scale-110"
                >
                    {item}
                </button>
            ))}
        </motion.div>
      )}

      {/* Sticky Decorations */}
      <motion.div style={{ rotate }} className="fixed bottom-8 right-8 z-30 hidden md:block">
        <div className="w-24 h-24 bg-neo-cyan border-4 border-black flex items-center justify-center shadow-hard rounded-full">
            <Zap size={40} />
        </div>
      </motion.div>

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden border-b-4 border-black bg-neo-bg">
        <motion.div 
            style={{ scale }}
            className="relative z-10 text-center p-4"
        >
            <h1 className="text-[15vw] leading-[0.8] font-black tracking-tighter text-neo-black drop-shadow-[10px_10px_0px_rgba(204,255,0,1)]">
                LOU<br/>VICIOUS
            </h1>
            <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
                <BrutalButton onClick={() => scrollToSection('oracle')} className="text-xl">
                    ENTER THE VOID
                </BrutalButton>
                <div className="bg-black text-white px-4 py-4 font-mono font-bold border-4 border-neo-lime rotate-3">
                    EST. 2024 // NO REGRETS
                </div>
            </div>
        </motion.div>

        {/* Abstract background elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 border-8 border-neo-pink rotate-12 opacity-50"></div>
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-neo-lime border-4 border-black rounded-full mix-blend-multiply opacity-80"></div>
        <div className="absolute top-10 right-1/3 w-20 h-20 bg-neo-cyan border-4 border-black transform rotate-45"></div>
      </header>

      <Marquee text="CREATIVITY IS VIOLENCE // DESIGN IS CHAOS // CODE IS POETRY // " />

      {/* Manifesto Section */}
      <section id="manifesto" className="py-24 px-4 bg-white border-b-4 border-black relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-7xl font-black mb-8 leading-none">THE <span className="bg-neo-lime px-2">UGLY</span> TRUTH</h2>
                <p className="font-mono text-xl leading-relaxed mb-6 border-l-8 border-neo-pink pl-6">
                    We are tired of polished rounded corners. We reject the soft shadows of modernism. 
                    Lou Vicious is a statement against the bland. We build things that scream.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-neo-black text-white p-4 font-mono font-bold text-center">
                        RAW
                    </div>
                    <div className="bg-neo-black text-white p-4 font-mono font-bold text-center">
                        UNFILTERED
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="aspect-square border-4 border-black bg-neo-orange shadow-hard-xl overflow-hidden relative group">
                     <img 
                        src="https://picsum.photos/800/800?grayscale" 
                        alt="Abstract Art" 
                        className="object-cover w-full h-full mix-blend-hard-light group-hover:scale-110 transition-transform duration-500"
                     />
                     <div className="absolute inset-0 bg-neo-cyan mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                     <div className="absolute bottom-0 left-0 bg-black text-white p-2 font-mono text-xs">
                        FIGURE 01: CHAOS
                     </div>
                </div>
            </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-24 bg-neo-lime border-b-4 border-black">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12 border-b-4 border-black pb-4">
                <h2 className="text-6xl md:text-9xl font-black">WORKS</h2>
                <span className="font-mono font-bold text-xl hidden md:block">SELECTED PROJECTS (2023-2025)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <BrutalCard key={item} title={`PROJECT_0${item}`} className="h-96 group hover:-translate-y-2 transition-transform duration-200">
                        <div className="w-full h-full relative overflow-hidden border-2 border-black bg-gray-200">
                            <img 
                                src={`https://picsum.photos/600/600?random=${item}`} 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                                alt="Project"
                            />
                            <div className="absolute inset-0 bg-neo-pink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <BrutalButton variant="secondary">
                                    <Maximize2 size={20} />
                                </BrutalButton>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-between items-center font-mono font-bold">
                            <span>UI/UX DESIGN</span>
                            <ArrowUpRight />
                        </div>
                    </BrutalCard>
                ))}
            </div>
        </div>
      </section>

      <Marquee text="ASK THE ORACLE // YOUR FUTURE IS DIGITAL // NO COOKIES JUST BYTES // " direction="right" className="bg-neo-pink border-b-4 border-black" />

      {/* Oracle / Chat Section */}
      <section id="oracle" className="py-24 bg-neo-bg border-b-4 border-black min-h-screen flex flex-col items-center justify-center">
        <div className="text-center mb-12">
            <h2 className="text-6xl md:text-8xl font-black mb-4">THE ORACLE</h2>
            <p className="font-mono text-xl bg-neo-black text-white inline-block px-4 py-2 transform -rotate-2">
                POWERED BY GEMINI 2.5 FLASH
            </p>
        </div>
        <ChatSection />
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-neo-black text-white py-24 px-4 overflow-hidden relative">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div>
                <h2 className="text-8xl font-black leading-none mb-8 hover:text-neo-lime transition-colors cursor-default">
                    STAY<br/>VICIOUS
                </h2>
                <div className="flex gap-4">
                    <a href="#" className="w-16 h-16 border-2 border-white flex items-center justify-center rounded-full hover:bg-neo-pink hover:border-neo-pink transition-colors">
                        <span className="sr-only">Twitter</span>
                        X
                    </a>
                    <a href="#" className="w-16 h-16 border-2 border-white flex items-center justify-center rounded-full hover:bg-neo-cyan hover:border-neo-cyan transition-colors">
                        <span className="sr-only">Instagram</span>
                        IG
                    </a>
                    <a href="#" className="w-16 h-16 border-2 border-white flex items-center justify-center rounded-full hover:bg-neo-lime hover:border-neo-lime hover:text-black transition-colors">
                        <span className="sr-only">Email</span>
                        @
                    </a>
                </div>
            </div>
            <div className="font-mono flex flex-col justify-between text-right">
                <p className="text-2xl">
                    1234 BRUTALIST AVE.<br/>
                    NOWHERE, CYBERSPACE
                </p>
                <p className="mt-12 text-gray-500">
                    © 2025 LOU VICIOUS.<br/>
                    ALL RIGHTS RESERVED.<br/>
                    BUILT WITH REACT & TAILWIND.
                </p>
            </div>
        </div>
        
        {/* Footer Decoration */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-neo-purple rounded-full blur-3xl opacity-20"></div>
      </footer>
    </div>
  );
};

export default App;