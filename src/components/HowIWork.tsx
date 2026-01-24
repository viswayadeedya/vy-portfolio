import { howIWork } from '@/lib/content';

export default function HowIWork() {
    return (
        <section id="work" className="section-container border-t border-white/5 !max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
                <div className="md:col-span-5">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="h-[2px] w-12 bg-accent" />
                        <h2 className="text-xs font-bold text-white uppercase tracking-[0.4em]">
                            Philosophy
                        </h2>
                    </div>

                    <h3 className="text-4xl font-bold text-white tracking-tight mb-8">
                        The Thinking <br /> Behind the Code
                    </h3>

                    <p className="text-muted-foreground text-lg font-light leading-relaxed">
                        I don&apos;t just write code; I own the problem. My approach is centered on
                        creating measurable business value through robust engineering and
                        intentional system design.
                    </p>
                </div>

                <div className="md:col-span-7 space-y-12">
                    {howIWork.map((item, idx) => (
                        <div
                            key={idx}
                            className="group flex gap-8"
                        >
                            <span className="text-3xl font-bold text-white/10 group-hover:text-accent/20 transition-colors">
                                0{idx + 1}
                            </span>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-3 tracking-tight">
                                    {item.title}
                                </h4>
                                <p className="text-base text-muted-foreground font-light leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
