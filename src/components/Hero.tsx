'use client';

import { RoleView } from '@/lib/content';

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
        <section className="section-container pt-32 pb-24 text-center relative overflow-hidden">
            {/* Design Thinker Geometric Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-20 left-[10%] w-64 h-64 bg-accent/5 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-10 right-[10%] w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

                {/* Abstract 3D Wireframes */}
                <svg className="absolute top-40 right-[15%] w-32 h-32 text-accent/10 opacity-40 rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                    <path d="M50 5L95 27.5V72.5L50 95L5 72.5V27.5L50 5Z" strokeWidth="0.5" />
                    <path d="M50 5V50L95 72.5M50 50L5 72.5" strokeWidth="0.5" />
                    <path d="M50 95V50" strokeWidth="0.5" />
                </svg>

                <svg className="absolute bottom-20 left-[15%] w-48 h-48 text-accent/5 opacity-30 -rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                    <path d="M30 10L90 30L70 90L10 70L30 10Z" strokeWidth="0.5" />
                    <path d="M30 10L50 50L90 30M50 50L70 90M50 50L10 70" strokeWidth="0.5" />
                </svg>
            </div>

            <div className="flex flex-col items-center">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-white">
                    I build production systems <br />
                    and ship <span className="text-accent italic font-medium">measurable outcomes.</span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 font-light leading-relaxed">
                    Full-stack engineer owning systems end-to-end <br className="hidden md:block" />
                    across frontend, backend, and cloud.
                </p>

                {/* Role Lens Toggle */}
                <div className="flex flex-col items-center gap-6">
                    <p className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase">
                        View impact as
                    </p>
                    <div className="bg-secondary/30 p-1.5 rounded-2xl border border-white/5 backdrop-blur-sm inline-flex shadow-2xl">
                        {views.map((v) => (
                            <button
                                key={v.id}
                                onClick={() => setView(v.id)}
                                className={`relative px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${view === v.id
                                    ? 'bg-accent text-white shadow-xl scale-[1.02]'
                                    : 'text-muted-foreground hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {v.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-16 flex flex-col sm:flex-row gap-6">
                    <a
                        href="#impact"
                        className="px-10 py-4 rounded-xl bg-white text-black font-bold hover:bg-white/90 transition-all shadow-lg active:scale-95"
                    >
                        View Impact
                    </a>
                    <a
                        href="#resume"
                        className="px-10 py-4 rounded-xl bg-secondary text-white font-bold border border-white/10 hover:bg-secondary/80 transition-all active:scale-95"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
