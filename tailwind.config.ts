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
      },
      colors: {
        'main-text': 'rgba(77, 77, 77, 1)',
        'soft-gray': 'rgba(175, 175, 175, 1)',
        'softer-gray': 'rgba(178, 178, 178, 1)',
        'woovi-green': 'rgba(3, 214, 157, 1)',
        'woovi-border': 'rgba(229, 229, 229, 1)',
        'woovi-blue': 'rgba(19, 58, 111, 1)',
      },

      borderRadius: {
        woovi: '10px',
      },
    },
  },
  plugins: [],
}
export default config
