let menu=document.querySelector("#bars");
let navbar=document.querySelector(".navbar");
menu.onclick = () =>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
} 
let section=document.querySelectorAll("section");
let navlinks=document.querySelectorAll("header .navbar a");

  window.onscroll= () =>{
      menu.classList.toggle("fa-times");
      navbar.classList.toggle("active");

      section.forEach(sec => {
        let top=window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
          navlinks.forEach(links =>{
            links.classList.remove("active");
            document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
          });
        }
      });
  } 
document.querySelector("#search").onclick = () =>{
    document.querySelector("#search-form").classList.toggle('active');
}
document.querySelector("#close").onclick = () =>{
    document.querySelector("#search-form").classList.remove('active');
}

// HOME SECTION
var swiper = new Swiper(".container", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   loop:true,
  });

  // REVIEW SECTION
var swiper = new Swiper(".review-container", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
 loop:true,
 breakpoints: {
    0: {
       slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
 },
});