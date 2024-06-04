let appContainer = document.getElementById("mini-app-container")
let frameworkLink = document.querySelector("#framework-link")
let frameworkRepo = document.querySelector("#framework-repo")
function switchSelectedFramework() {
    
}

  
document
.querySelectorAll("#select-framework > menu > button")
.forEach(e => e.onclick = () => 
    { 
        //TODO: Probably replace those links and add a no-script 
        e.firstElementChild.checked = true
        appContainer.style.cssText = e.style.cssText
        let selectedFrameworkData = frameworkInfo[e.firstElementChild.value]
        appContainer.style.setProperty('--sel-link-char-count', selectedFrameworkData.link.length)
        let cutLink = selectedFrameworkData.link.replace(/https?:\/\//,"")
        frameworkLink.lastElementChild.textContent = cutLink
        appContainer.style.setProperty('--sel-repo-char-count', selectedFrameworkData.repo.length)
        frameworkRepo.firstElementChild.textContent = selectedFrameworkData.repo
    })
/** @type {HTMLIFrameElement} */
const iframe = document.getElementById("iframe");
iframe.contentWindow.helloworld = () => {alert('hey this works')}
const content = document.getElementById("mini-app-container");
document.addEventListener(
    "keydown",
    (e) => {
      if (e.key === "Enter") {
        toggleFullScreen();
      }
    },
    false,
  );
  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      content.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
let frameworkInfo = {
    "react": {
        desc: "A framework by Facebook",
        motto: "The library for web and native user interfaces",
        link: "https://react.dev/",
        repo: "https://github.com/facebook/react"
    },
    "jquery": {
        desc: "A framework by Facebook",
        motto: "Write less, do more",
        link: "https://jquery.com/",
        repo: "https://github.com/jquery/jquery"
    },
    "html": {
        desc: "A framework by Facebook",
        motto: "Write less, do more",
        link: "https://html.spec.whatwg.org/",
        repo: "https://github.com/whatwg/html"
    },
    "angular": {
        desc: "A framework by Facebook",
        motto: "Write less, do more",
        link: "https://angular.dev/",
        repo: "https://github.com/angular/angular"
    },
    "vue": {
        desc: "A framework by Facebook",
        motto: "The Progressive JavaScript Framework",
        link: "https://vuejs.org/",
        repo: "https://github.com/vuejs/core"
    },
    "preact": {
        desc: "A react copy cat with a strict package size",
        motto: "Fast 3kB alternative to React with the same modern API",
        link: "https://preactjs.com/",
        repo: "https://github.com/preactjs/preact"
    },
    "svelte": {
        desc: "A framework by Facebook",
        motto: "Cybernetically enhanced web apps",
        link: "https://svelte.dev/",
        repo: "https://github.com/sveltejs/svelte"
    },
    "mithril": {
        desc: "A framework by Facebook",
        link: "https://mithril.js.org/",
        repo: "https://github.com/MithrilJS/mithril.js"
    },
    "ember": {
        desc: "A framework by Facebook",
        motto: "A framework for ambitious web developers",
        link: "https://emberjs.com/",
        repo: "https://github.com/emberjs/ember.js"
    },
    "vanilla": {
        desc: "A messy, multiple personality language that was soo accessible, it had an abundance of offspring, which is why you, I and we are here",
        link: "http://vanilla-js.com/",
        repo: "https://chromium.googlesource.com/v8/v8.git"
    },
    "alpine": {
        desc: "A framework by Facebook",
        motto: "Your new, lightweight, JavaScript framework",
        link: "https://alpinejs.dev/",
        repo: "https://github.com/alpinejs/alpine"
    },
    "vanjs": {
        desc: "A framework by Facebook",
        motto: "A 1.0kB Grab 'n Go Reactive UI Framework without React/JSX",
        link: "https://vanjs.org/",
        repo: "https://github.com/vanjs-org/van"
    },
}
document.getElementById("hidden-meow").innerHTML = "&nbsp&nbsp／l、<br>（ﾟ､ ｡ ７   Meow<br>⠀ l、ﾞ ~ヽ<br>  じしf_, )ノ"
//Grab source folder for each framework
//There should be a singular script for getting each mini-app
// Clear the existing HTML content
// document.body.innerHTML = '<div id="app"></div>';
console.log("hello world")
// Render your React component instead
// const root = createRoot(document.getElementById('app'));
// root.render(<h1>Hello, world</h1>);