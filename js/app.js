$('.owl-carousel').owlCarousel({
    loop:true,
    margin:12,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1024:{
            items:3
        }
    }
})

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});


/* ****************************isotopes++++++++++++++++++++++ */


const grid = document.querySelector('.grid');
const iso = new Isotope(grid, {
  itemSelector: '.grid-item',
  percentPosition: true,
  layoutMode: 'masonry',
  masonry: { columnWidth: '.grid-sizer' },
  getSortData: {
    title: '[data-title]',
    price: '[data-price] parseInt'
  }
});

// Layout after each image loads
imagesLoaded(grid, () => iso.layout());

// Init LightGallery
lightGallery(grid, {
  selector: 'a',
  plugins: [lgZoom, lgThumbnail],
  speed: 400
});

// Filter buttons
const filterButtons = document.querySelectorAll('.filter-button');
filterButtons.forEach(button => {
  button.addEventListener('click', function () {
    // Remove active class
    filterButtons.forEach(btn => btn.classList.remove('is-checked'));
    // Add active class to clicked button
    this.classList.add('is-checked');
    // Apply filter
    const filterValue = this.getAttribute('data-filter');
    iso.arrange({ filter: filterValue });
  });
});
 
              
   /* ********************************8 BEFORE AND AFTER SLIDER ******************************* */ 


$(function(){
  $("#container1").twentytwenty();
});

/* ************************** navs and tabs ******************************* */ 
// const navItems = document.querySelectorAll('.departments-faculty .nav-item');

// navItems.forEach(item => {
//   item.addEventListener('click', () => {
//     // remove active from all
//     navItems.forEach(el => el.classList.remove('active'));
//     // add active to clicked one
//     item.classList.add('active');
//   });
// });

// const navItems = document.querySelectorAll('.departments-faculty .nav-item');

// navItems.forEach(item => {
//   item.addEventListener('click', () => {
//     // remove active from all
//     navItems.forEach(el => el.classList.remove('active'));
//     // add active to the clicked one
//     item.classList.add('active');
//   });
// });

const navItems = document.querySelectorAll('.departments-faculty .nav-item');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    // remove active from all
    navItems.forEach(el => el.classList.remove('active'));
    // add active to the clicked one
    item.classList.add('active');
  });
});
