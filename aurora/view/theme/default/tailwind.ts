function Extend(Color: any, Plugins: [any]) {
  return {
    content: [
      './app/**/**/**/**/**/*.{js,ts,jsx,tsx}',
      './global/**/**/**/**/*.{js,ts,jsx,tsx}',
      './aurora/**/**/**/**/**/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1440px',
        el: '1920px',
        eel: '2560px',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        prompt: ['var(--font-prompt)'],
      },
      letterSpacing: {
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.25em',
        wider: '.5em',
        widest: '2.5em',
      },
      container: {
        center: true,
      },
      extend: {
        fontSize: {
          '2xs': '.5rem',
          '1xs': '.65rem',
          '10xl': '10rem',
        },
        zIndex: {
          60: '60',
          70: '70',
          80: '80',
          90: '90',
          100: '100',
        },
        colors: { ...Color },
      },
    },
    plugins: Plugins,
  }
}

const TailwindDefaultConfig = { Extend }
export { TailwindDefaultConfig }
