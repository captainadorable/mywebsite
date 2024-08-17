/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			sans: ["ui-sans-serif", "system-ui"],
			serif: ["ui-serif", "Georgia"],
			mono: ["ui-monospace", "SFMono-Regular"],
			poppins: ["poppins", "ui-sans-serif", "system-ui"],
			righteous: ["righteous", "ui-sans-serif", "system-ui"],
			amsterdam: ["New Amsterdam", "ui-sans-serif", "system-ui"],
		},
		extend: {},
	},
	plugins: [],
};
