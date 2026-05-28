import { enhancedImages } from "@sveltejs/enhanced-img";
import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig, type Plugin } from "vite";
import fg from "fast-glob";

function blogRawSourcePlugin(): Plugin {
	const VIRTUAL = "virtual:blog-raw";
	const RESOLVED = `\0${VIRTUAL}`;
	const root = process.cwd();

	return {
		name: "blog-raw-source",
		resolveId(id) {
			if (id === VIRTUAL) return RESOLVED;
		},
		load(id) {
			if (id !== RESOLVED) return;
			const files = fg.sync("src/content/blog/**/*.{svx,md}", { cwd: root });
			const entries = files.map((file: string) => [
				`/${file}`,
				readFileSync(resolve(root, file), "utf8"),
			]);
			return `export default ${JSON.stringify(Object.fromEntries(entries))};`;
		},
	};
}

export default defineConfig({
	plugins: [
		blogRawSourcePlugin(),
		enhancedImages(),
		tailwindcss(),
		sveltekit(),
	],
});
