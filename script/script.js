document.addEventListener("DOMContentLoaded", function() {
    typeWriter();

    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add active class to menu items
    const menuItems = document.querySelectorAll('.menu a');
    const sections = document.querySelectorAll('article, aside');

    function makeActive() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        menuItems.forEach((link) => link.classList.remove('active'));
        menuItems[index].classList.add('active');
    }

    window.addEventListener('scroll', makeActive);
    makeActive(); 

    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            menuItems.forEach(function(item) {
                item.classList.remove('active');
            });

            this.classList.add('active');

            menu.classList.remove("show");
        });
    });

    // Add click event listener to burger menu
    const burgerMenu = document.querySelector(".burger-menu");
    const menu = document.querySelector(".menu");

    burgerMenu.addEventListener("click", function() {
        menu.classList.toggle("show");
    });

    // Add scroll event listener to change header background color
    window.addEventListener('scroll', function() {
        var header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 100);
    });

});

// Typewriter effect
var words = ['Welcome to My Portfolio Website          ', 'UI/UX Designer | Web Developer | College Student          ', 'I Like Playing Games          ', 'Also Like Reading Novels, Especially Light Novels          '];
var currentWordIndex = 0;
var currentWord = words[currentWordIndex];
var i = 0;
var speed = 70;

function typeWriter() {
    if (i < currentWord.length) {
        document.getElementById("initial-word").innerHTML += currentWord.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseWord, speed); 
    }
}

function eraseWord() {
    if (i > 0) {
        var partialWord = currentWord.substring(0, i - 1);
        document.getElementById("initial-word").innerHTML = partialWord;
        i--;
        setTimeout(eraseWord, speed);
    } else {
        currentWordIndex = (currentWordIndex + 1) % words.length; 
        currentWord = words[currentWordIndex]; 
        setTimeout(typeWriter, speed); 
    }
}