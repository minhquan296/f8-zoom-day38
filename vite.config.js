/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
	plugins: [react()],
	base: "/f8-zoom-day38/", // Tên repo của bạn
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
			"@components": path.resolve(__dirname, "src/components"),
			"@layouts": path.resolve(__dirname, "src/layouts"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@hooks": path.resolve(__dirname, "src/hooks"),
			"@hoc": path.resolve(__dirname, "src/hoc"),
		},
	},
});
