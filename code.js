// const myItem=document.querySelector('.item');
// const myBtn = document.querySelector(".btn");
// const myClosed = document.querySelector(".close")
// const myCadre = document.querySelector(".cadre");

// myBtn.addEventListener("click", () => {
//     myCadre.style.border = "7px solid black";
//     myCadre.style.background = "url()";
//     myCadre.style.borderRadius = "50px";
//     myCadre.style.transform = "translateY(-200px)";
//     myCadre.style.transition = "1s";
// });
// ------------------------------------------------------------
// mode somdre
const mySun = document.querySelector(".sun");
const myMoon = document.querySelector(".moon");
const myScrean = document.querySelector(".body");

mySun.addEventListener("click", ()=>{
 myScrean.style.background = "white";
 mySun.style.transform = "translateX(50px)";
 myMoon.style.transform = "translateX(0px)";
 mySun.style.opacity = "0";
 myMoon.style.opacity = "1"
 mySun.style.transition = "0.7s"
});

myMoon.addEventListener("click", ()=>{
myScrean.style.background = "black";
myMoon.style.transform = "translateX(-50px)";
mySun.style.transform = "translateX(0px)";
mySun.style.opacity = "1";
myMoon.style.opacity = "0";
myMoon.style.transition = "0.9s"
});

