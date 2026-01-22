'use client';

import { useState } from 'react';
import { RoleView } from '@/lib/content';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProofStrip from '@/components/ProofStrip';
import ImpactSection from '@/components/ImpactSection';
import HowIWork from '@/components/HowIWork';
import ResumeSection from '@/components/ResumeSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [view, setView] = useState<RoleView>('fullstack');

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero view={view} setView={setView} />
      <ProofStrip />
      <ImpactSection view={view} />
      <HowIWork />
      <ResumeSection />
      <Contact />
      <Footer />
    </main>
  );
}
