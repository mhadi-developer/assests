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

  // Init Isotope
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

  // Init LightGallery on the grid (so all <a> inside work)
  lightGallery(grid, {
    selector: 'a', // every anchor in grid
    plugins: [lgZoom, lgThumbnail],
    speed: 400
  });
 
              
   /* ********************************8 BEFORE AND AFTER SLIDER ******************************* */ 


$(function(){
  $("#container1").twentytwenty();
});

