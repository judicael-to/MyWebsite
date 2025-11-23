/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            colors: {
                mint: { 100: '#d4f5dd', 200: '#bbf0c8', 900: '#1a4a2b' },
                sky: { 100: '#cbecfd', 200: '#a8defc', 900: '#1e3a8a' },
                indigo: { 100: '#e0e7ff', 200: '#c7d2fe', 900: '#312e81' },
                peach: { 100: '#fcedd0', 200: '#f9dbc0', 900: '#7c2d12' },
                rose: { 100: '#fce7f3', 200: '#fbcfe8', 900: '#831843' },
                card: 'rgba(255, 255, 255, 0.6)',
            },
            animation: {
                'drop-bounce': 'drop 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                drop: {
                    '0%': { transform: 'translateY(-120vh) rotate(-5deg)', opacity: '0' },
                    '100%': { transform: 'translateY(0) rotate(0deg)', opacity: '1' }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        }
    },
    plugins: [],
}
