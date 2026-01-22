import { howIWork } from '@/lib/content';

export default function HowIWork() {
    return (
        <section id="work" className="section-container border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">
                        Philosophy
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        How I Work
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                        I don&apos;t just write code; I own the problem. My approach is centered on
                        creating measurable business value through robust engineering.
                    </p>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-white">Full-Stack Ownership</p>
                            <p className="text-xs text-muted-foreground">Frontend, Backend, and Cloud infra.</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    {howIWork.map((item, idx) => (
                        <div
                            key={idx}
                            className="p-6 rounded-2xl bg-card/40 border border-white/5 hover:border-white/10 transition-colors"
                        >
                            <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
