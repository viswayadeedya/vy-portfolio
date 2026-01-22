import { proofStrip } from '@/lib/content';

export default function ProofStrip() {
    return (
        <div className="w-full border-y border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 py-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {proofStrip.map((metric, index) => (
                        <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left">
                            <span className="text-2xl md:text-3xl font-bold text-white mb-1">
                                {metric.value}
                            </span>
                            <span className="text-[10px] md:text-xs font-medium text-muted-foreground uppercase tracking-widest leading-tight">
                                {metric.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
