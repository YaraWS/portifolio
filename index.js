const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const form = document.querySelector("#form")
let thankYou = document.getElementById("thank-you")

// Hamburger Menu
hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))




function formMessage(fname){
  thankYou.innerHTML = `<div class="user-message"> <span>${fname}</span> thanks for your message<br>
  I will get in touch shortly</div>`

}

// form.addEventListener('submit',function(e){
//   e.preventDefault();
//   let fname = document.forms["form"]["fname"].value
//   document.getElementById("form").style.display="none"
//   formMessage(fname)
// })









