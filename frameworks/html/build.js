//This takes care of simply minifying our HTML version and putting each in their folder. Minification is definitely fair game
//Sure, we could just copy them over with their original names, but for the sake of sticking to standard, we're doing this
const fs = require('fs')
const { Buffer } = require('node:buffer')
const { minify } = require('@minify-html/node')
const { resolve } = require('path')
const srcDir = './src'
const pathToBuild = resolve("../../public/app-builds/html/") + '/'
console.log('path to build', pathToBuild)
if (!fs.existsSync(pathToBuild)){
    fs.mkdirSync(pathToBuild, { recursive: true });
}

let files = fs.readdirSync(srcDir)
files.forEach(f => 
    {
        let shorthand = f.replace('.html','')
        console.log('shorthand', shorthand)
        // console.log('File is',f,'\n',
        //     minify(
        //         fs.readFileSync(`${srcDir}/${f}`), 
        //         {
        //             minify_css: true,
        //             minify_js:true
        //         }).toString())
        
        let shorthandDir = resolve(pathToBuild + shorthand)
        console.log('shorthandDir', shorthandDir)
        if (!fs.existsSync(shorthandDir))
            fs.mkdirSync(shorthandDir);
        fs.createWriteStream(resolve(shorthandDir + '/index.html')).write(
            minify(
                fs.readFileSync(`${srcDir}/${f}`), 
                {
                    minify_css: true,
                    minify_js:true
                }))
})