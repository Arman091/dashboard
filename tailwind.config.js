/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "2.5em": "2.5em",
      },
      spacing: {
        "11px": "11px",
        "8px": "8px",
      },
      padding: {
        0.75: "0.75rem",
      },
      margin: {
        11: "11px",
        "auto-15": "15px auto",
        25: "25px",
      },
      width: {
        19: "18%",
      },
      boxShadow: {
        right: "4px 0 6px -1px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};

