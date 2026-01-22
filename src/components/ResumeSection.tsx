import { contactInfo } from '@/lib/content';

export default function ResumeSection() {
    return (
        <section id="resume" className="section-container border-t border-white/5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-card/20 rounded-3xl p-8 md:p-12 border border-white/5 hover:border-white/10 transition-all">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-4">Detailed Career History</h2>
                    <p className="text-muted-foreground max-w-md">
                        Looking for the full technical breakdown? Download my latest resume to see
                        my experience with Node.js, FastAPI, AWS, and modern frontend frameworks.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <a
                        href={contactInfo.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-4 rounded-xl bg-white text-black font-bold hover:bg-white/90 transition-all flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download Resume (PDF)
                    </a>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                        Replace resume.pdf with your latest file in the /public folder.
                    </p>
                </div>
            </div>
        </section>
    );
}
