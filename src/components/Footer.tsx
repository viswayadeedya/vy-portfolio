export default function Footer() {
    return (
        <footer className="py-20 border-t border-white/5 bg-background">
            <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col gap-2 text-center md:text-left">
                    <p className="text-sm font-bold text-white tracking-widest uppercase">
                        Viswa Yadeedya
                    </p>
                    <p className="text-xs text-muted-foreground font-light">
                        Full-stack Engineer • Impact-Driven Systems
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-end gap-2">
                    <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-bold">
                        Built with Intention
                    </p>
                    <p className="text-[10px] text-white/10 uppercase tracking-[0.2em]">
                        © {new Date().getFullYear()} All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}
