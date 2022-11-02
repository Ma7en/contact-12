

let upLeft = document.getElementById("up-left"),
    menuOne = document.getElementById("menu-one"),
    closeTwo = document.getElementById("close-two"),
    toggleMenu = document.getElementById("nav-toggle");
    // closeMenu = document.getElementById("nav_close"),
    // navMenuUl = document.getElementById("nav-menu-ul");


// show
menuOne.addEventListener("click", () => {
    upLeft.style.display = "block";
    upLeft.style.zIndex = "1";
    upLeft.style.position = "absolute";
    upLeft.style.left = "0";
    upLeft.style.backgroundColor = "transparent";
    upLeft.style.width = "40%";
    menuOne.style.display = "none";
    closeTwo.style.display = "block";
})


// hidedn
closeTwo.addEventListener("click", () => {
    upLeft.style.display = "none";
    menuOne.style.display = "block";
    closeTwo.style.display = "none";
})

// .sect .container .aws .left {
//     height: 100%;
//     display: block;
//     z-index: 1;
//     position: absolute;
//     left: 0;
//     background-color: transparent;
//     width: 40%;
// }













