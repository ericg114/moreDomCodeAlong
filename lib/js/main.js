let firstImg = document.getElementById("first");
firstImg.remove();

let newImg = document.createElement("img");
//creates a new img element
newImg.src = "assets/cry.png";

 let maincontainer = document.querySelector(".main-container");
//let mainContainer = document.querySelector("div");

//element.appendChild(mainContainer);
maincontainer.appendChild(newImg);

