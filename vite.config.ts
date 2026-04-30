import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import viteReact from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

const config = defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	const posthogHost = env.VITE_PUBLIC_POSTHOG_HOST;
	const posthogAssetsHost = env.POSTHOG_ASSETS_HOST;

	return {
		resolve: { tsconfigPaths: true },
		plugins: [
			devtools(),
			tailwindcss(),
			tanstackStart(),
			viteReact({
				babel: {
					plugins: ["babel-plugin-react-compiler"],
				},
			}),
		],
		server: {
			proxy: {
				"/ingest/static": {
					target: posthogAssetsHost,
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/ingest/, ""),
					secure: false,
				},
				"/ingest/array": {
					target: posthogAssetsHost,
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/ingest/, ""),
					secure: false,
				},
				"/ingest": {
					target: posthogHost,
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/ingest/, ""),
					secure: false,
				},
			},
		},
	};
});

export default config;
