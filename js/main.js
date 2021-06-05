
const menuBtn=document.querySelector(".btn-menu");
const hamburger = document.querySelector(".btn-menu__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".nav-menu");
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
  if(!showMenu){
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    showMenu = true;

  }else{
    hamburger.classList.remove('open');
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    showMenu=false;
  }

  
}