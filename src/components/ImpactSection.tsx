'use client';

import { impactStories, RoleView } from '@/lib/content';
import ImpactStoryCard from './ImpactStoryCard';

interface ImpactSectionProps {
    view: RoleView;
}

export default function ImpactSection({ view }: ImpactSectionProps) {
    return (
        <section id="impact" className="section-container !max-w-6xl">
            <div className="mb-20">
                <div className="flex items-center gap-4 mb-6">
                    <span className="h-[2px] w-12 bg-accent" />
                    <h2 className="text-xs font-bold text-white uppercase tracking-[0.4em]">
                        Evidence of Impact
                    </h2>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">
                    Systems at Scale
                </h3>

                <p className="text-muted-foreground text-lg max-w-2xl font-light leading-relaxed">
                    Deep dives into technical decisions and their measurable outcomes. <br className="hidden md:block" />
                    Toggle the lens above to reframe my involvement across the stack.
                </p>
            </div>

            <div className="border-t border-white/10">
                {impactStories.map((story) => (
                    <ImpactStoryCard key={story.id} story={story} view={view} />
                ))}
            </div>
        </section>
    );
}
