'use client';

import { useState } from 'react';
import { ImpactStory, RoleView } from '@/lib/content';

interface ImpactStoryCardProps {
    story: ImpactStory;
    view: RoleView;
}

export default function ImpactStoryCard({ story, view }: ImpactStoryCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const perspective = story.perspectives[view];
    const summary = story.oneLiner[view];

    return (
        <div
            className={`group border-b border-white/10 transition-all duration-500 overflow-hidden ${isExpanded ? 'bg-card/30' : 'hover:bg-card/10'
                }`}
        >
            {/* Header / Clickable Area */}
            <div
                onClick={() => setIsExpanded(!isExpanded)}
                className="px-8 py-10 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-8"
            >
                <div className="flex-grow max-w-2xl">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] bg-accent/10 px-2 py-0.5 rounded">
                            {perspective.roleTitle}
                        </span>
                        <span className="h-[1px] w-8 bg-white/10" />
                        <h3 className="text-xl font-bold text-white tracking-tight">
                            {story.title}
                        </h3>
                    </div>

                    <p className="text-lg text-white/90 font-light leading-relaxed">
                        {summary}
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <div className="hidden md:flex flex-col items-end gap-1">
                        {perspective.focusMetrics.map((metric, idx) => (
                            <span key={idx} className="text-xs font-bold text-accent italic">
                                {metric}
                            </span>
                        ))}
                    </div>

                    <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all">
                        <svg
                            className={`w-4 h-4 text-white transition-transform duration-500 ${isExpanded ? 'rotate-45' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Expanded Content */}
            <div
                className={`transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-8 pb-16 grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-white/5 pt-12">
                    {/* Left Column: Context & Reframing */}
                    <div className="md:col-span-4 space-y-10">
                        <div>
                            <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-4">
                                The Thinking
                            </h4>
                            <p className="text-sm text-accent font-medium italic leading-relaxed">
                                "{perspective.reframe}"
                            </p>
                        </div>

                        <div>
                            <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-4">
                                Problem
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {story.problem}
                            </p>
                        </div>

                        <div>
                            <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-4">
                                Constraints
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {story.constraints}
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Execution & Logic */}
                    <div className="md:col-span-8 space-y-10">
                        <div>
                            <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-6">
                                Technical Decisions
                            </h4>
                            <ul className="space-y-6">
                                {perspective.decisions.map((decision, idx) => (
                                    <li key={idx} className="flex gap-4 group/item">
                                        <span className="text-accent font-bold mt-[-2px] tracking-tighter shrink-0 opacity-40 group-hover/item:opacity-100 transition-opacity">
                                            0{idx + 1}
                                        </span>
                                        <p className="text-base text-white/80 font-light leading-relaxed group-hover/item:text-white transition-colors">
                                            {decision}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-white/5">
                            <div>
                                <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-4">
                                    Trade-offs
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed italic">
                                    {story.tradeOffs}
                                </p>
                            </div>

                            <div>
                                <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-4">
                                    Outcome
                                </h4>
                                <p className="text-xl font-bold text-white tracking-tight leading-snug">
                                    {story.result}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
