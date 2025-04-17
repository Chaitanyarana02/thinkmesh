import { type Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['FaunaThin', 'sans-serif'],     
        robot: ['"Roboto Mono"', 'monospace'], 
      },
    },
  },
  plugins: [],
}

export default config;
