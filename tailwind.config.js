/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,svx,ts}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'Noto Color Emoji', 'sans-serif'],
				rubrik: ['Rubrik', 'Noto Color Emoji', 'sans-serif'],
				roboto: ['Roboto', 'Noto Color Emoji', 'sans-serif'],
				os: ['Open Sans', 'Noto Color Emoji', 'sans-serif']
			}
		}
	}
};
