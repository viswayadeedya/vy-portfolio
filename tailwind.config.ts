import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#070A10",
                foreground: "#f9fafb",
                primary: {
                    DEFAULT: "#6366f1",
                    foreground: "#ffffff",
                },
                secondary: {
                    DEFAULT: "#1f2937",
                    foreground: "#f9fafb",
                },
                accent: {
                    DEFAULT: "#6366f1",
                    foreground: "#ffffff",
                },
                card: {
                    DEFAULT: "#111827",
                    foreground: "#f9fafb",
                },
                muted: {
                    DEFAULT: "#1f2937",
                    foreground: "#9ca3af",
                },
                border: "#1f2937",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
            },
        },
    },
    plugins: [],
};
export default config;
