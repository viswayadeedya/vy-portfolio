'use client';

import { proofStrip, RoleView } from '@/lib/content';

interface ProofStripProps {
    view: RoleView;
}

export default function ProofStrip({ view }: ProofStripProps) {
    return (
        <div className="w-full border-y border-white/5 bg-black/40 backdrop-blur-xl overflow-hidden relative">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
                    {proofStrip.map((metric) => {
                        const isEmphasized = metric.emphasis.includes(view);

                        return (
                            <div
                                key={metric.id}
                                className={`group flex flex-col transition-all duration-500 ${isEmphasized ? 'opacity-100 scale-100' : 'opacity-30 grayscale'
                                    }`}
                            >
                                <div className="mb-2 flex items-center gap-2">
                                    <span className="text-sm font-bold text-accent">→</span>
                                    <span className="text-2xl font-bold text-white tracking-tight">
                                        {metric.outcome}
                                    </span>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest leading-normal">
                                        {metric.systemChange}
                                    </span>

                                    {/* Subtle reveal "how" */}
                                    <div className="h-4 overflow-hidden">
                                        <p className="text-[10px] text-muted-foreground font-medium italic transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                            {metric.technicalAction}
                                        </p>
                                        <p className="text-[10px] text-muted-foreground/40 font-medium uppercase tracking-tighter transition-all duration-500 group-hover:-translate-y-4">
                                            How?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
