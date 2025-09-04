$('.owl-carousel').owlCarousel({
    loop:true,
    margin:12,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});


  document.addEventListener('DOMContentLoaded', function() {
    const gridElem = document.querySelector('.grid');

    imagesLoaded(gridElem, function() {
      // init Isotope
      const iso = new Isotope(gridElem, {
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: { columnWidth: '.grid-sizer' }
      });

      // init lightGallery
      const lgInstance = lightGallery(gridElem, {
        selector: 'a',
        plugins: [lgThumbnail, lgZoom],
        speed: 400
      });

      // filter links (only inside .gallery-filters)
      document.querySelector('.gallery-filters').addEventListener('click', function(e) {
        if (!e.target.matches('a')) return;
        e.preventDefault(); // prevent jump
        const filter = e.target.getAttribute('data-filter');
        iso.arrange({ filter: filter });
      });

      // refresh lightGallery when items are filtered
      iso.on('arrangeComplete', function() {
        lgInstance.refresh();
      });
    });
  });
  const lgInstance = lightGallery(gridElem, {
  selector: '.grid-item a', // ✅ only anchors inside grid items
  plugins: [lgThumbnail, lgZoom],
  speed: 400
});
document.querySelector('.gallery-filters').addEventListener('click', function(e) {
  if (!e.target.matches('a')) return;
  e.preventDefault(); // stop navigation
  const filter = e.target.getAttribute('data-filter');
  iso.arrange({ filter });

  // toggle active class
  document.querySelectorAll('.gallery-filters a').forEach(link => link.classList.remove('active'));
  e.target.classList.add('active');
});




