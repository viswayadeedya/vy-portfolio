import Link from 'next/link';
import { contactInfo } from '@/lib/content';

export default function Navbar() {
    const navLinks = [
        { name: 'Impact', href: '#impact' },
        { name: 'Philosophy', href: '#work' },
        { name: 'Resume', href: '#resume' },
    ];

    return (
        <nav className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
                <Link href="/" className="group flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                    <span className="font-bold text-lg tracking-tighter text-white">
                        Viswa Yadeedya
                    </span>
                </Link>

                <div className="flex items-center gap-10">
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="h-6 w-[1px] bg-white/10 hidden md:block" />

                    <div className="flex items-center gap-4">
                        <a
                            href={`mailto:${contactInfo.email}`}
                            className="text-white bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
