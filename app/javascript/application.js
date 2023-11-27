// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

$(document).on('turbolinks:load', function() {
    $('a[href*="#"]').on('click', function(event) {
      if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;
  
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top
          },
          800,
          function() {
            window.location.hash = hash;
          }
        );
      }
    });
  });
  