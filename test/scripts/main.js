// document.querySelector("html").onclick = function () {
//   alert("Ouch!Stop poking me!");
// };

var myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/1.jpg") myImage.setAttribute("src", "images/2.jpg");
  else myImage.setAttribute("src", "images/1.jpg");
};

//取得新按鈕、標題的參考，並把它們存在變數
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName || myName === null) setUserName();
  else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "heart is cool, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.innerHTML = "Mozilla is cool, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};
