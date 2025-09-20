$(document).ready(function() {
    const $track = $('.carousel-track');
    const $slides = $('.carousel-track img');
    const $pagination = $('#pagination button');
    const $title = $('#slide-title');
    const $status = $('#slide-status');
    
    const totalSlides = $slides.length;
    let currentSlide = 0;
    let isAnimating = false;

    $track.append($slides.first().clone().addClass('cloned'));
    $track.prepend($slides.last().clone().addClass('cloned'));

    $track.css('transform', `translateX(-${100 / totalSlides}%)`);

    function updateSlide(slideId, animate = true) {
        if (isAnimating) return;
        isAnimating = true;

        $pagination.removeClass('active');
        $pagination.eq(slideId).addClass('active');

        const position = (slideId + 1) * (100 / totalSlides);
        
        $track.css('transition', animate ? 'transform 0.7s ease-in-out' : 'none');
        $track.css('transform', `translateX(-${position}%)`);

        $title.fadeOut(300, function() {
            $(this).html($(`[data-slide-title="${slideId}"]`).html()).fadeIn(300);
        });

        $status.fadeOut(300, function() {
            $(this).html($(`[data-slide-status="${slideId}"]`).html()).fadeIn(300);
        });

        currentSlide = slideId;
        
        setTimeout(() => {
            if (slideId >= totalSlides) {
                currentSlide = 0;
                $track.css('transition', 'none');
                $track.css('transform', `translateX(-${100 / totalSlides}%)`);
            } else if (slideId < 0) {
                currentSlide = totalSlides - 1;
                $track.css('transition', 'none');
                $track.css('transform', `translateX(-${totalSlides * (100 / totalSlides)}%)`);
            }
            isAnimating = false;
        }, 700);
    }

    $pagination.on('click', function() {
        const slideId = $(this).data('slide');
        updateSlide(slideId);
    });

    setInterval(() => {
        if (!isAnimating) {
            updateSlide((currentSlide + 1) % totalSlides);
        }
    }, 5000);

    $track.on('transitionend', function() {
        isAnimating = false;
    });
});


// Card featured (rotator)
const $rotatorHolder = $('#album-rotator-holder');
$rotatorHolder.html($rotatorHolder.html() + $rotatorHolder.html()); // Duplicate content

let scrollSpeed = 0.5;
let position = 0;

let isDragging = false;
let dragStartX = 0;
let dragStartPosition = 0;

function animate() {
  if (!isDragging) {
    position -= scrollSpeed;
    if (Math.abs(position) >= $rotatorHolder[0].scrollWidth / 2) {
      position = 0;
    }
    $rotatorHolder.css('transform', `translateX(${position}px)`);
  }
  requestAnimationFrame(animate);
}

animate();

$rotatorHolder.on('mousedown', function(e) {
  isDragging = true;
  dragStartX = e.pageX;
  dragStartPosition = position;
  $rotatorHolder.css('cursor', 'grabbing');
});

$rotatorHolder.on('mouseleave mouseup', function() {
  isDragging = false;
  $rotatorHolder.css('cursor', 'grab');
});

$rotatorHolder.on('mousemove', function(e) {
  if (!isDragging) return;
  const x = e.pageX;
  const walk = x - dragStartX;
  position = dragStartPosition + walk;
  $rotatorHolder.css('transform', `translateX(${position}px)`);
});

document.addEventListener("DOMContentLoaded", function () {
        const featuredMap = {
          featured1: 4,
          featured2: 3,
          featured3: 13,
          featured4: 10,
          featured5: 5
        };
        Object.keys(featuredMap).forEach(function(cardId) {
  const el = document.getElementById(cardId);
  if (el) {
    el.style.cursor = "pointer";
    el.addEventListener("click", function () {
      const fullPath = window.location.pathname;
      const pathParts = fullPath.split('/');
      const currentPage = pathParts[pathParts.length - 1];
      sessionStorage.setItem("cg_lastPage", currentPage);
      window.location.href = "sd.html?id=" + featuredMap[cardId];
    });
  }
});  
       });