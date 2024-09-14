// carousel.js

document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.querySelector('#carouselExample');
    var carouselInstance = new bootstrap.Carousel(carousel, {
        interval: 2000,
        wrap: true
    });
});
//Validation
(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()