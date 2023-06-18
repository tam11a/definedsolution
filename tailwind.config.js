/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/HOC/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#24ecf1",
				secondary: "#fd5ec4",
				background: "#0d141c",
			},
			fontFamily: {
				sans: ["Jura", "sans-serif"],
				serif: ["Titillium Web", "serif"],
				koulen: ["Koulen", "cursive"],
			},
		},
	},
	plugins: [],
};
