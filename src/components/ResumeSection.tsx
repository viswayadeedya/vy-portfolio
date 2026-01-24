import { contactInfo } from '@/lib/content';

export default function ResumeSection() {
    return (
        <section id="resume" className="section-container border-t border-white/5 !max-w-6xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-16 bg-white/[0.02] rounded-[2rem] p-12 md:p-20 border border-white/5">
                <div className="max-w-xl text-center md:text-left">
                    <h2 className="text-4xl font-bold text-white tracking-tight mb-6">
                        Detailed Career History
                    </h2>
                    <p className="text-muted-foreground text-lg font-light leading-relaxed">
                        For a full technical breakdown of my journey across fintech, enterprise,
                        and AI domains, download my latest resume.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-6">
                    <a
                        href={contactInfo.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-12 py-5 rounded-2xl bg-white text-black font-bold hover:bg-white/90 transition-all flex items-center gap-3 shadow-2xl active:scale-95"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download Resume
                    </a>
                    <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold">
                        Updated Jan 2024
                    </p>
                </div>
            </div>
        </section>
    );
}
