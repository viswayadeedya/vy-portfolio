'use client';

import { RoleView, contactInfo } from '@/lib/content';

interface HeroProps {
    view: RoleView;
    setView: (view: RoleView) => void;
}

export default function Hero({ view, setView }: HeroProps) {
    const views: { id: RoleView; label: string }[] = [
        { id: 'fullstack', label: 'Full-stack' },
        { id: 'backend', label: 'Backend' },
        { id: 'frontend', label: 'Frontend' },
    ];

    return (
        <section className="section-container pt-32 pb-20 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                AVAILABLE FOR NEW OPPORTUNITIES
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-balance leading-tight">
                I build production systems and ship <span className="text-primary italic">measurable outcomes.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 text-balance leading-relaxed">
                Full-stack engineer with fintech and enterprise experience. I own features end-to-end across frontend, backend, and cloud.
            </p>

            {/* View Toggle */}
            <div className="bg-secondary/50 p-1 rounded-xl border border-white/5 inline-flex mb-12">
                {views.map((v) => (
                    <button
                        key={v.id}
                        onClick={() => setView(v.id)}
                        className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${view === v.id
                                ? 'bg-primary text-white shadow-lg'
                                : 'text-muted-foreground hover:text-white'
                            }`}
                    >
                        {v.label}
                    </button>
                ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                    href="#impact"
                    className="px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-all text-center"
                >
                    View Impact
                </a>
                <a
                    href={contactInfo.resumeUrl}
                    className="px-8 py-4 rounded-xl bg-secondary text-white font-semibold border border-white/10 hover:bg-secondary/80 transition-all text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download Resume
                </a>
            </div>
        </section>
    );
}
