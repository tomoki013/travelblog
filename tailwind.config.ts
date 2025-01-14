import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  	content: [
    	"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/components/**/**/*.{js,ts,jsx,tsx,mdx}",
		"./features/**/components/**/*.{js,ts,jsx,tsx,mdx}",
  	],
  	theme: {
    	extend: {
      		colors: {
        		opacity: "rgba(255, 255, 255, .5)",
      		},
    	},
  	},
  	plugins: [typography],
} satisfies Config;
