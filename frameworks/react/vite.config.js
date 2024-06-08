import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
console.log(import.meta,process.env)
if(!process.env.NODE_APP){
  console.log("You need to set an app path. See DEVELOPERNOTES.md. Defaulting to counter")
  process.env.NODE_APP = "counter"
}// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {

    }
  },
  plugins: [react()],
})
