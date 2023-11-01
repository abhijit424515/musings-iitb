/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,svx,ts}'],
	theme: {
		extend: {
			// LIGHT
			colors: {
				l_text: '#130e01',
				l_background: '#fffaeb',
				l_primary: '#ff8400',
				l_secondary: '#fff5d6',
				l_accent: '#cf4307'
			},
			fontFamily: {
				inter: ['Inter', 'Noto Color Emoji', 'sans-serif'],
				rubrik: ['Rubrik', 'Noto Color Emoji', 'sans-serif'],
				roboto: ['Roboto', 'Noto Color Emoji', 'sans-serif'],
				os: ['Open Sans', 'Noto Color Emoji', 'sans-serif']
			}
		}
	}
};
