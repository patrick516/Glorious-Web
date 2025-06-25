/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50", // Green
        secondary: "#F4F4F4", // Light grey
        heading: "#1A1A1A", // Deep gray/black

        // Farming-inspired custom colors
        cornGreen1: "rgb(47, 94, 2)",
        cornGold: "rgb(190, 178, 81)",
        cornLime: "rgb(177, 191, 68)",
        cornGreen2: "rgb(66, 128, 0)",
        cornGreen3: "rgb(87, 149, 5)",
        cornGreen4: "rgb(82, 148, 3)",
        fieldGreen1: "rgb(127, 152, 86)",
        fieldGreen2: "rgb(107, 129, 80)",
        fieldGreen3: "rgb(123, 148, 81)",
        fieldGreen4: "rgb(142, 164, 87)",
        fieldGreen5: "rgb(134, 158, 84)",
        fieldGreen6: "rgb(124, 148, 86)",
      },
      fontFamily: {
        sans: ["Poppins", "Open Sans", "sans-serif"],
      },
      keyframes: {
        run: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(15px)" },
        },
      },
      animation: {
        run: "run 0.6s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
