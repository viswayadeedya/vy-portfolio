import { impactStories, RoleView } from '@/lib/content';
import ImpactStoryCard from './ImpactStoryCard';

interface ImpactSectionProps {
    view: RoleView;
}

export default function ImpactSection({ view }: ImpactSectionProps) {
    return (
        <section id="impact" className="section-container">
            <div className="flex flex-col items-center mb-16 text-center">
                <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">
                    Evidence of Impact
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    3 Impact Stories
                </h3>
                <p className="text-muted-foreground max-w-xl">
                    Real-world outcomes delivered across fintech, enterprise, and AI domains.
                    Toggle the "View as" filter above to see technical ownership from different perspectives.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {impactStories.map((story) => (
                    <ImpactStoryCard key={story.id} story={story} view={view} />
                ))}
            </div>
        </section>
    );
}
