import frameworkInfo from './frameworks.json'
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
        document.getElementById('framework-motto').textContent = `- ${selectedFrameworkData.motto}`
        document.getElementById('framework-desc').textContent = selectedFrameworkData.desc
    })
/** @type {HTMLIFrameElement} */
const iframe = document.getElementById("iframe");
iframe.contentWindow.helloworld = () => {alert('hey this works')}
const content = document.getElementById("mini-app-container");
//TODO: full screen snippet; adapt later
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
document.getElementById("hidden-meow").innerHTML = "&nbsp&nbsp／l、<br>（ﾟ､ ｡ ７   Meow<br>⠀ l、ﾞ ~ヽ<br>  じしf_, )ノ"
