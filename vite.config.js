import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import flowbiteReact from "flowbite-react/plugin/vite";

// import daisyui from "daisyui";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(), flowbiteReact()],
});