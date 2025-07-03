/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        slateGray: {
          DEFAULT: '#627A82',
          100: '#14191a',
          200: '#273134',
          300: '#3b4a4e',
          400: '#4f6269',
          500: '#627a82',
          600: '#7f979f',
          700: '#9fb1b7',
          800: '#bfcbcf',
          900: '#dfe5e7'
        },
        lightCyan: {
          DEFAULT: '#E3FCFE',
          100: '#03575d',
          200: '#07adb9',
          300: '#28e9f7',
          400: '#85f3fb',
          500: '#e3fcfe',
          600: '#e7fdfe',
          700: '#edfdfe',
          800: '#f3feff',
          900: '#f9feff'
        },
        cadetGray: {
          DEFAULT: '#A4B4BF',
          100: '#1e252a',
          200: '#3b4a54',
          300: '#596f7d',
          400: '#7c93a2',
          500: '#a4b4bf',
          600: '#b7c4cc',
          700: '#c9d3d9',
          800: '#dbe1e6',
          900: '#edf0f2'
        },
        charcoal: {
          DEFAULT: '#183F51',
          100: '#050d10',
          200: '#0a1a21',
          300: '#0f2631',
          400: '#143342',
          500: '#183f51',
          600: '#2b7091',
          700: '#459ec7',
          800: '#83beda',
          900: '#c1dfec'
        },
        lapisLazuli: {
          DEFAULT: '#3C6282',
          100: '#0c141a',
          200: '#182734',
          300: '#243b4e',
          400: '#304e67',
          500: '#3c6282',
          600: '#5083ad',
          700: '#7ba2c2',
          800: '#a7c1d7',
          900: '#d3e0eb'
        },
        white: {
          DEFAULT: '#FFFFFF',
          100: '#333333',
          200: '#666666',
          300: '#999999',
          400: '#cccccc',
          500: '#ffffff',
          600: '#ffffff',
          700: '#ffffff',
          800: '#ffffff',
          900: '#ffffff'
        },
        verdigris: {
          DEFAULT: '#56BAC1',
          100: '#0f2729',
          200: '#1e4e52',
          300: '#2d767b',
          400: '#3d9da4',
          500: '#56bac1',
          600: '#79c8cd',
          700: '#9ad6da',
          800: '#bce3e6',
          900: '#ddf1f3'
        },
        yaleBlue: {
          DEFAULT: '#123565',
          100: '#040a14',
          200: '#071528',
          300: '#0b1f3c',
          400: '#0e2950',
          500: '#123565',
          600: '#1d56a6',
          700: '#377bdc',
          800: '#79a7e7',
          900: '#bcd3f3'
        },
        robinEggBlue: {
          DEFAULT: '#04C6CD',
          100: '#012829',
          200: '#024f52',
          300: '#03777b',
          400: '#039fa4',
          500: '#04c6cd',
          600: '#13f2fa',
          700: '#4ef6fb',
          800: '#89f9fd',
          900: '#c4fcfe'
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
