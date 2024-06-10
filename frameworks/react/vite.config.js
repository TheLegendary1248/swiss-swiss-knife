import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sharedViteConfig from '../sharedViteConfig'
// console.log(loadEnv("", process.cwd()))
// if(!process.env.NODE_APP){
//   console.log("You need to set an app path. See DEVELOPERNOTES.md. Defaulting to counter. (ignore this warning for now")
//   process.env.NODE_APP = "counter"
// }
export default defineConfig(() => {
  return {...sharedViteConfig({dirname: __dirname}), ...defineConfig({
    plugins: [react()],
  })}
})