/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                "pastel-white": "#E9E2D7",
                "lightest-brown": "#E1B894",
                "light-brown": "#875C36",
                "dark-brown": "#704523",
                "pastel-blue": "#C6D3E3",
                "pastel-dark-blue": "#98BAD5",
                "pastel-darkest-blue": "#304674",
                "pastel-blue-green": "#1A3C40"
            }
        },
    },
    plugins: [],
}

