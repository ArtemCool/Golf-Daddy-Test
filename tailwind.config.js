/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.liquid"],
  theme: {
    extend: {
			colors: {
				accent: '#008060',
				textColor: '#1d1d1d',
        gray_text: "#B6B6B6",
        lite_gray_text: "#E6E6E6",
        green_custom: "#BADE2F",
        secondary_gray: "#6D6D6D",
        custom_green: "#53E28D"
			},
			container: {
				center: true,
				padding: '20px'
			},
			animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      fontFamily: {
        'helvetica': ['HelveticaNeue'],
        'scania': ['ScaniaSans'],
        'scania_normal': ['ScaniaSansNormal'],
        'grace': ["Covered By Your Grace"]
      }
		},
  },
  plugins: [],
}
