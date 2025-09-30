/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#4CAF50',
                'secondary': '#FFC107',
                'custom-blue': '#2196F3',
            },
        },
    },
    plugins: [],
}