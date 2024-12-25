/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'dark-color': '#081735',
				'dark-color-3': '#E6E8F0',
				'secondary-color': '#0049C6',
			}
		},
		plugins: [],
	}
}