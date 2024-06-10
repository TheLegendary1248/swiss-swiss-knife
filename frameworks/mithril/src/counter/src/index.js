import m from "mithril";
const App = () => {
    let count = 1240
    return {
      view: () => {
        return m("button", {onclick: function() {count++}}, count == 1248 ? '(⌐■_■)∠"you have some patience being here"' : `This button has been clicked ${count} times!`);
      },
    };
  };
const mountNode = document.getElementById('mini-app')
m.mount(mountNode, App);
