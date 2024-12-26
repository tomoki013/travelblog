import type { Config } from "tailwindcss";

export default {
  	content: [
    	"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/components/**/**/*.{js,ts,jsx,tsx,mdx}",
  	],
  	theme: {
    	extend: {
      		colors: {
        		opacity: "rgba(255, 255, 255, .5)",
      		},
    	},
  	},
  	plugins: [],
} satisfies Config;
