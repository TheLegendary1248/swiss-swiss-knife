import { defineConfig } from "vite";
import sharedViteConfig from "../sharedViteConfig";

export default defineConfig(() => {
  return {...sharedViteConfig({dirname: __dirname}), ...defineConfig({
    esbuild: {
        jsx: "transform",
        jsxFactory: "m",
        jsxFragment: "'['",
    }
    })}
});