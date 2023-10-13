import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        header: "url('/img/first_background.png')",
        logo: "url('/img/logo-agdv.png')",
        secondBackground: "url('/img/second_background.png')",
        thirdBackground: "url('/img/third_background.png')",
        fourthBackground: "url('/img/fourth_background.png')",
      },
      colors: {
        'standard': '#FFDE59',
        'easy': '#E158C3',
        'medium': '#678D07',
        'hardcore': '#862A26',
      },
      fontFamily: {
        spacemono: ['Space Mono'],
      }
    },
  },
  plugins: [],
}
export default config
