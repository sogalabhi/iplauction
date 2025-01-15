// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'custom-pulse': 'customPulse 1s ease-in-out infinite',
      },
      keyframes: {
        customPulse: {
          '0%, 100%': { transform: 'scale(1)', backgroundColor: 'transparent' },
          '50%': { transform: 'scale(1.1)', backgroundColor: 'rgba(34, 197, 94, 0.5)' }, // Light green pulse
        },
      },
    },
  },
  plugins: [],
};
