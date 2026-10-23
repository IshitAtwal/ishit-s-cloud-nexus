import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

/**
 * Dev only: serve netlify/functions/<name>.ts at /.netlify/functions/<name>, the same URL Netlify
 * uses in production, so the contact form works with `npm run dev`. Reads secrets from .env.
 */
const netlifyFunctionsDev = (mode: string): Plugin => ({
  name: "netlify-functions-dev",
  apply: "serve",
  configureServer(server) {
    Object.assign(process.env, loadEnv(mode, process.cwd(), ""));
    server.middlewares.use("/.netlify/functions", async (req, res) => {
      try {
        const name = (req.url ?? "").split("?")[0].replace(/^\//, "");
        const mod = await server.ssrLoadModule(`/netlify/functions/${name}.ts`);
        const chunks: Buffer[] = [];
        for await (const chunk of req) chunks.push(chunk as Buffer);
        const request = new Request(`http://localhost${req.originalUrl}`, {
          method: req.method,
          headers: req.headers as Record<string, string>,
          body: req.method === "GET" || req.method === "HEAD" ? undefined : Buffer.concat(chunks),
        });
        const response: Response = await mod.default(request);
        res.statusCode = response.status;
        response.headers.forEach((value, key) => res.setHeader(key, value));
        res.end(await response.text());
      } catch (error) {
        console.error(error);
        res.statusCode = 500;
        res.end(JSON.stringify({ error: "Function failed" }));
      }
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger(), netlifyFunctionsDev(mode)].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
  build: {
    rollupOptions: {
      output: {
        // Long-lived vendor chunks so redeploys only bust the app chunk.
        manualChunks: {
          react: ["react", "react-dom"],
          motion: ["framer-motion"],
        },
      },
    },
  },
}));
