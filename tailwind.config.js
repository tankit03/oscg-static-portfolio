/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			custom: '30px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			custom: '`\n          0px 206px 58px 0px rgba(216, 64, 11, 0),\n          0px 132px 53px 0px rgba(216, 64, 11, 0.01),\n          0px 74px 45px 0px rgba(216, 64, 11, 0.05),\n          0px 33px 33px 0px rgba(216, 64, 11, 0.09),\n          0px 8px 18px 0px rgba(216, 64, 11, 0.10)\n        `'
  		},
  		backdropBlur: {
  			custom: '22.8px'
  		},
  		backgroundColor: {
  			'custom-bg': 'rgba(255, 255, 255, 0.01)'
  		},
  		borderColor: {
  			'custom-border': 'rgba(255, 255, 255, 0.01)'
  		},
  		fontFamily: {
  			satoshiRegular: ['var(--font-satoshi-regular)', 'sans-serif'],
  			satoshiBold: ['var(--font-satoshi-bold)', 'sans-serif'],
  			satoshiBlack: ['var(--font-satoshi-black)', 'sans-serif'],
  			satoshiItalic: ['var(--font-satoshi-italic)', 'sans-serif'],
  			satoshiLight: ['var(--font-satoshi-light)', 'sans-serif'],
  			satoshiMedium: ['var(--font-satoshi-medium)', 'sans-serif']
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primaryOrange: '#FF7517',
			primaryBlack: '#3E3939',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
