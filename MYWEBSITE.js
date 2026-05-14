const navigation = document.querySelector('#cs-navigation');

window.addEventListener('scroll', () => {

  if(window.scrollY > 50){

    navigation.classList.add('cs-active');

  }

  else{

    navigation.classList.remove('cs-active');

  }

});

/* MOBILE MENU */

const toggle = document.querySelector('.cs-toggle');

const nav = document.querySelector('.cs-nav');

toggle.addEventListener('click', () => {

  nav.classList.toggle('cs-open');

});

/* FADE ANIMATION */

const cards = document.querySelectorAll(
  '.service-card, .gallery-item, .review-card'
);

const observer = new IntersectionObserver((entries)=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      entry.target.classList.add('show');

      observer.unobserve(entry.target);

    }

  });

},{
  threshold:0.2
});

cards.forEach(card=>{

  card.classList.add('hidden');

  observer.observe(card);

});

/* SMOOTH BUTTON EFFECT */

const buttons = document.querySelectorAll(
  '.hero-btn, .review-btn, .cs-button-solid'
);

buttons.forEach(button => {

  button.addEventListener('mouseenter', () => {

    button.style.transition = '0.3s';

  });

});