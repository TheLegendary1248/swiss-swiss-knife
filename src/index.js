// import { createRoot } from 'react-dom/client';
// import React from 'react';

let appContainer = document.getElementById("mini-app-container")
document
.querySelectorAll("button")
.forEach(e => e.onclick = () => 
    { 
        e.firstElementChild.checked = true
        appContainer.style.cssText = e.style.cssText 
        console.log(e, appContainer.style, e.style)
    })
let frameworkInfo = {
    "react": {
        desc: "A framework by Facebook",
        url: "The library for web and native user interfaces",
        repo: "https://react.dev/"
    },
    "vue": {
        desc: "A framework by Facebook",
        motto: "",
        url: "",
        repo: ""
    },
    "preact": {
        desc: "A react copy cat with a strict package size",
        motto: "Fast 3kB alternative to React with the same modern API",
        url: "https://preactjs.com/",
        repo: ""
    },
    "svelte": {
        desc: "A framework by Facebook",
        motto: "Cybernetically enhanced web apps",
        url: "https://svelte.dev/",
        repo: ""
    },
    "mithril": {
        desc: "A framework by Facebook",
        url: "https://mithril.js.org/",
        repo: "https://github.com/MithrilJS/mithril.js"
    },
    "ember": {
        desc: "A framework by Facebook",
        motto: "A framework for ambitious web developers",
        url: "https://emberjs.com/",
        repo: ""
    },
    "vanilla": {
        desc: "A messy, multiple personality language that was soo accessible, it had an abundance of offspring, which is why you, I and we are here",
        url: "http://vanilla-js.com/",
        repo: "https://chromium.googlesource.com/v8/v8.git"
    },
    "alpine": {
        desc: "A framework by Facebook",
        motto: "Your new, lightweight, JavaScript framework",
        url: "https://alpinejs.dev/",
        repo: "https://github.com/alpinejs/alpine"
    },
    "react": {
        desc: "A framework by Facebook",
        url: "",
        repo: ""
    },
    "react": {
        desc: "A framework by Facebook",
        url: "",
        repo: ""
    },
    "react": {
        desc: "A framework by Facebook",
        url: "",
        repo: ""
    },
}
// Clear the existing HTML content
// document.body.innerHTML = '<div id="app"></div>';
console.log("hello world")
// Render your React component instead
// const root = createRoot(document.getElementById('app'));
// root.render(<h1>Hello, world</h1>);