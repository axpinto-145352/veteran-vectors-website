/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'vv-teal': '#00D4AA',
        'vv-cyan': '#00E5FF',
        'vv-dark': '#0A0A0A',
        'vv-gray': '#1A1A1A',
        'vv-light-gray': '#2A2A2A',
      },
      fontFamily: {
        'military': ['Orbitron', 'monospace'],
      },
      backgroundImage: {
        'geometric': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%2300D4AA\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M30 30l15-15v30l-15-15zm-15 0l15 15H0l15-15z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      }
    },
  },
  plugins: [],
};
