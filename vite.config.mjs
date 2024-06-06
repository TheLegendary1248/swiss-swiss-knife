import { defineConfig } from "vite"
/**@type {Object}*/
import framework from './src/frameworks.json'
import str from './catalog.txt'
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
let transformFramework = Object.entries(framework)
.map(
  x => Object.assign(x[1], {shorthand: x[0]})
)
/**@type {String} */
let transformStr = str.split('//GOAL')[0]
let incrementalZIndex = 1
transformStr = transformStr.split('\n')
transformStr = transformStr.filter(e => e.trim() !== "")
transformStr = transformStr.map(e => {
  let [left, desc] = e.split("//")
  let section, color;
  [left, section] = left.split(":")
  if (section) {
    [section, color] = section.split(" ")
  }
  return {
    name: left.trim(),
    shorthand: left.trim().toLocaleLowerCase().replaceAll(' ', ''),
    section: section,
    color: color,
    desc: desc
  }
})
export default defineConfig({
  apptype: "mpa",
  plugins: [handlebars({
    partialDirectory: resolve(__dirname, 'partials'),
    context: {
      framework: transformFramework,
      app: transformStr
    }
  })],
})