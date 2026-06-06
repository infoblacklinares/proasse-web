import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Tokens de marca Proasse — verde como color principal
        bg: "#F4FAF4",
        "bg-2": "#E8F5E8",
        paper: "#FFFFFF",
        ink: "#0F1A0F",
        "ink-soft": "#4A6B4A",
        line: "#C8E0C8",
        accent: {
          DEFAULT: "#2D8B3C",
          deep: "#1F6B2C",
          light: "#5DB86A"
        },
        sage: {
          DEFAULT: "#A8D4A8",
          deep: "#72B472"
        },
        whatsapp: {
          DEFAULT: "#25D366",
          hover: "#1ebe5b"
        }
      },
      fontFamily: {
        sans: ["var(--font-bricolage)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "16px",
        lg: "28px"
      },
      letterSpacing: {
        tightest: "-0.045em",
        tighter: "-0.03em"
      },
      maxWidth: {
        site: "1400px"
      },
      keyframes: {
        rise: {
          "0%": { transform: "translateY(110%)" },
          "100%": { transform: "translateY(0)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        ping: {
          "75%, 100%": { transform: "scale(2.4)", opacity: "0" }
        },
        floatProduct: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        },
        floatCircle: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(2%, -2%) scale(1.02)" }
        },
        scrollLine: {
          "0%, 100%": { transform: "scaleY(0.3)", transformOrigin: "top" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top" }
        }
      },
      animation: {
        rise: "rise 1s cubic-bezier(0.65, 0, 0.35, 1) forwards",
        marquee: "marquee 32s linear infinite",
        ping: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        "float-product": "floatProduct 8s ease-in-out infinite",
        "float-circle": "floatCircle 12s ease-in-out infinite",
        "scroll-line": "scrollLine 2s infinite ease-in-out"
      }
    }
  },
  plugins: []
};

export default config;
