/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#10B981', // Emerald 500
                'primary-dark': '#059669', // Emerald 600
                'accent': '#F59E0B', // Amber 500
                'background': '#F9FAFB', // Gray 50
                'surface': '#FFFFFF',
                'text-primary': '#1F2937', // Gray 800
                'text-secondary': '#6B7280', // Gray 500
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
