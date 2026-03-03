module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mob: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      laptopl: "1440px",
    },
    extend: {
      colors: {
        neutral: {
          50:  "#F6F8FB",
          100: "#EAECF0",
          200: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          700: "#374151",
          900: "#0A0F1C",
        },
        accent: {
          DEFAULT: "#635BFF",
          hover:   "#574FE6",
          muted:   "#EEF0FF",
          ring:    "#C7C4FF",
        },
      },
    },
  },
  plugins: [],
};
