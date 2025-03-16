module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        colors: {
          'street-black': '#1a1a1a',
          'street-accent': '#ff4f4f',
        },
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
          inter: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };