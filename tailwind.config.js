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
				manjari: ['Manjari', 'Noto Color Emoji', 'sans-serif'],
				calligraffitti: ['Calligraffitti', 'Noto Color Emoji', 'sans-serif'],
				ribeye: ['Ribeye', 'Noto Color Emoji', 'sans-serif'],
				dynapuff: ['DynaPuff', 'Noto Color Emoji', 'sans-serif']
			}
		}
	}
};
