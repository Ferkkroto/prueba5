/*carrucel*/
window.addEventListener('load', function() {
    var glider = new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        },
        responsive: [
            {
                // screens greater than >= 775px
                breakpoint: 450,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },{
                // screens greater than >= 1024px
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 4
                }
            }
        ]
    });

    // Función personalizada para actualizar los indicadores
    function updateCustomDots(glider) {
        let dots = document.querySelectorAll('.glider-dot');
        dots.forEach(dot => dot.style.display = 'none'); // Oculta todos los puntos
        
        // Muestra solo tres puntos
        if(dots.length > 3) {
            dots[0].style.display = 'inline-block';
            dots[Math.floor((dots.length - 1) / 2)].style.display = 'inline-block'; // Punto medio
            dots[dots.length - 1].style.display = 'inline-block';
        } else {
            dots.forEach(dot => dot.style.display = 'inline-block'); // Muestra todos si hay 3 o menos
        }
    }

    // Llama a updateCustomDots después de inicializar Glider y en cada evento de "glider-slide-visible"
    updateCustomDots(glider);
    document.querySelector('.carousel__lista').addEventListener('glider-slide-visible', function(event) {
        updateCustomDots(event.detail.slider);
    });
});


/*preguntas*/
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-toggle').forEach(toggle => {
      toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        let answer = toggle.closest('.faq-item').querySelector('.faq-answer');
        if (toggle.classList.contains('active')) {
          answer.style.display = 'block';
          toggle.textContent = '−';
        } else {
          answer.style.display = 'none';
          toggle.textContent = '+';
        }
      });
    });
  });
  


