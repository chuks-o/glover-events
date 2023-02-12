/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "glover-black": "#2F2F2F",
        "glover-purple": "#372AA4",
        "glover-gray": {
          100: "#6C757D",
          200: "#EAEDF7",
          300: "#E8E8E8",
        },
        "glover-orange": {
          100: "#FF6A2C",
        },
      },
      borderWidth: {
        1.3: "1.5px",
      },
      borderRadius: {
        10: "10px",
      },
    },
  },
  plugins: [],
};
