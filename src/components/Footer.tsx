export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/5 text-center">
            <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-4">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Viswa. Built with Next.js & Tailwind CSS.
                </p>
                <p className="text-[10px] text-muted-foreground/50 uppercase tracking-[0.3em]">
                    Impact First • Production Ready
                </p>
            </div>
        </footer>
    );
}
