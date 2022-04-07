let navBar=document.getElementById("navBar")
let faBars = document.querySelector(".fa-bars");


faBars.addEventListener("click", togglebtn);


function togglebtn() {
    navBar.classList.toggle("hidemenu");
}