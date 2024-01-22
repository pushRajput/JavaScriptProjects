/** @format */

// type of onclick

function animator(classValue) {
  let title = document.getElementById("title");
  title.className = classValue;
}

// type of event

let menu = document.getElementsByClassName("menu");

for (let i = 0; i < menu.length; i++) {
  menu[i].onclick = function () {
    let title = document.getElementById("title");
    title.className = this.value;
  };
}
