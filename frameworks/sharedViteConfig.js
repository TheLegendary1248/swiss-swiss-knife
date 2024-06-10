import { defineConfig } from 'vite'
import {resolve, sep} from 'path'
export default ({dirname}) => {
    let framework = dirname.split(sep); framework = framework[framework.length - 1]
    console.log("Using shared vite config. Build directory set to ", `../../public/app-builds/${framework}`)
    return defineConfig({
    //Static assets like images and such should be fetched from the ~/public/common folder, and disabled for production to avoid duping it
    publicDir: "../../src/common",
    build: {
        copyPublicDir: false,
        //i might just use dirname instead
        outDir: `../../public/app-builds/${framework}`,
        rollupOptions: {
          input: {
            counter: resolve(dirname, 'src/counter/index.html'),
          },
        }
      }
})}