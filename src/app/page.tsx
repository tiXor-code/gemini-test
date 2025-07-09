import { Hero, About, Projects, Contact, ScrollIndicator } from '@/components';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div id="hero" className="relative w-full">
        <Hero />
        <ScrollIndicator />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}
