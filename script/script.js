document.addEventListener("DOMContentLoaded", function() {
    typeWriter();

    const menuItems = document.querySelectorAll('.menu a');

    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // Remove 'active' class from all menu items
            menuItems.forEach(function(item) {
                item.classList.remove('active');
            });

            // Add 'active' class to the clicked menu item
            this.classList.add('active');
        });
    });

    window.addEventListener('scroll', function() {
        var header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 100);
    });

    // burger menu
    const burgerMenu = document.querySelector('.burger-menu');
    const mainMenu = document.querySelector('.menu');

    // Toggle menu on burger menu click
    burgerMenu.addEventListener('click', function() {
        mainMenu.classList.toggle('show-menu');
    });

    // Close menu when a menu item is clicked (for small screens)
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            mainMenu.classList.remove('show-menu');
        });
    });

    // Add scroll event listener to change header background color
    window.addEventListener('scroll', function() {
        var header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 100);
    });

});

var i = 0;
var txt = '';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
      document.getElementById("initial-word").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
