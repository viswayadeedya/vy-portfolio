'use client';

import { useState } from 'react';
import { ImpactStory, RoleView } from '@/lib/content';

interface ImpactStoryCardProps {
    story: ImpactStory;
    view: RoleView;
}

export default function ImpactStoryCard({ story, view }: ImpactStoryCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className="group relative bg-card/40 border border-white/5 rounded-2xl p-8 hover:bg-card/60 transition-all duration-300 flex flex-col h-full cursor-pointer"
                onClick={() => setIsOpen(true)}
            >
                <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                        {story.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        {story.summary}
                    </p>
                </div>

                <div className="space-y-3 mb-8 flex-grow">
                    {story.outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span className="text-sm font-medium text-white/90">{outcome}</span>
                        </div>
                    ))}
                </div>

                <button
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                    View details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Basic Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="relative glass w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl p-8 md:p-12 animate-in fade-in zoom-in duration-300">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 text-muted-foreground hover:text-white transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{story.title}</h2>
                        <p className="text-muted-foreground mb-8">{story.summary}</p>

                        <div className="space-y-8">
                            {/* Conditional Rendering based on RoleView */}
                            {(view === 'fullstack' || view === 'backend') && (
                                <div className={`${view === 'backend' ? 'order-first' : ''}`}>
                                    <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Backend Ownership</h4>
                                    <ul className="space-y-4">
                                        {story.backendOwnership.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm text-white/80 leading-relaxed">
                                                <span className="text-primary font-bold mt-[-2px]">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {(view === 'fullstack' || view === 'frontend') && (
                                <div className={`${view === 'frontend' ? 'order-first' : ''}`}>
                                    <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Frontend Ownership</h4>
                                    <ul className="space-y-4">
                                        {story.frontendOwnership.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm text-white/80 leading-relaxed">
                                                <span className="text-primary font-bold mt-[-2px]">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* If one is collapsed, show a way to see it? User said "deemphasized or collapsed". 
                  Let's show it but with a "Show more" or just a smaller title if deemphasized. 
                  Actually, the prompt says "frontend ownership collapsed or deemphasized" in Backend view.
                  Let's make it a toggle or just a faded section. 
              */}
                            {view === 'backend' && (
                                <details className="group">
                                    <summary className="text-xs font-bold text-muted-foreground uppercase tracking-widest cursor-pointer hover:text-white transition-colors list-none flex items-center gap-2">
                                        <svg className="w-3 h-3 group-open:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                        </svg>
                                        Frontend Ownership (Collapsed)
                                    </summary>
                                    <ul className="mt-4 space-y-4 border-l border-white/5 pl-4 ml-1.5">
                                        {story.frontendOwnership.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            )}

                            {view === 'frontend' && (
                                <details className="group">
                                    <summary className="text-xs font-bold text-muted-foreground uppercase tracking-widest cursor-pointer hover:text-white transition-colors list-none flex items-center gap-2">
                                        <svg className="w-3 h-3 group-open:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                        </svg>
                                        Backend Ownership (Collapsed)
                                    </summary>
                                    <ul className="mt-4 space-y-4 border-l border-white/5 pl-4 ml-1.5">
                                        {story.backendOwnership.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
