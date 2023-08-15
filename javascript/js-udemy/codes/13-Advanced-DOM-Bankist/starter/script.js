'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btbScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// document.querySelectorAll(".nav__link").forEach((el) => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const scrollTarget = document.querySelector(`${this.getAttribute('href')}`);
//     // console.log(scrollTarget);
//     scrollTarget.scrollIntoView({
//       behavior: 'smooth'
//     })
//   })
// })


//event delegation
//1.add event listener to common parent element
//2. determin what element originated the event
document.querySelector(".nav__links").addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(document.querySelectorAll('.nav__link'));
  // console.log(e.target);
  // if ([...document.querySelectorAll('.nav__link')].includes(e.target)) {
  if (e.target.classList.contains("nav__link")) {
    // console.log("right");
    // e.stopPropagation();
    const targetID = e.target.getAttribute('href');
    if (targetID === "#")
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    else {
      document.querySelector(targetID).scrollIntoView({
        behavior: 'smooth'
      });
    }
    // console.log('haha');
  }
})

const operatonsTabBtn = document.querySelector(".operations__tab-container");
// console.log(operatonsTabBtn);
operatonsTabBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const clicked = e.target.closest('.operations__tab');
  // guard clause
  if (!clicked) return;

  this.querySelector(".operations__tab--active").classList.remove("operations__tab--active");
  clicked.classList.add("operations__tab--active");

  this.parentElement.querySelector(".operations__content--active").classList.remove("operations__content--active");
  this.parentElement.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add("operations__content--active");
})


const handleHover = function (e) {
  // console.log(this, e);
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll('.nav__link');
    const logo = link.closest(".nav").querySelector("img");

    // console.log(siblings);
    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
}

//menu fade animation
// document.querySelector('.nav').addEventListener("mouseover", function (e) {
//   handleHover(e, 0.5);
// })

// document.querySelector('.nav').addEventListener("mouseout", function (e) {
//   handleHover(e, 1);
// })

//passing 'argument" into handler
document.querySelector('.nav').addEventListener("mouseover", handleHover.bind(0.5));

document.querySelector('.nav').addEventListener("mouseout", handleHover.bind(1));

//sticky navigation：not a good practice
// const initalCoords = section1.getBoundingClientRect();
// console.log(initalCoords.top);

// window.addEventListener('scroll', function (e) {
//   console.log(initalCoords.top);
//   // console.log(window.scrollY);
//   if (window.scrollY > initalCoords.top)
//     nav.classList.add('sticky')
//   else
//     nav.classList.remove('sticky');
// })

//intersection observer API;
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);
const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
};

const obsCallback = (entires) => {
  entires.forEach(entry => {
    // console.log(entry);
    if (entry.target === header) {
      // if (entry.intersectionRatio < obsOptions.threshold) {
      //   nav.classList.add('sticky')
      // }
      // else if (entry.intersectionRatio > obsOptions.threshold) {
      //   nav.classList.remove('sticky')
      // }
      if (entry.isIntersecting)
        nav.classList.remove('sticky')
      else
        nav.classList.add('sticky')

    }
  })
}
let observer = new IntersectionObserver(obsCallback, obsOptions);

// console.log(section1);
observer.observe(header);

////////////////////////////////////////////////
//selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');

// console.log(document.getElementsByClassName('btn'));

//creating and inserting elements
// .insertAdjacementHTML

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent = 'we use cookied for improved functionality and anlytics.';
// message.innerHTML =
//   'we use cookied for improved functionality and anlytics. <buttton class="btn btn--close-cookie">Got it!</buttton>';

// header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     // message.remove();
//     message.parentElement.removeChild(message);
//   });


//Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.height);
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).height);

// message.style.height = Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

// console.log(getComputedStyle(message).height);

// document.documentElement.style.setProperty('--color-primary', 'orangered');


//attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.src);

// console.log(logo.className);
// console.log(logo.id);

// logo.alt = 'beautiful minimalist logo';

//Non-standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'bankist');

// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

//data atrributes
// console.log(logo.dataset.versionNumber);
// console.log(logo.dataset);

//classes
// logo.classList.add('c');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c');

//do not use this, it will overwrite all the value of class
// logo.className = 'JJ';


//smooth scrollings


btbScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(window.pageYOffset);
  // console.log(s1coords.top + window.pageYOffset);
  // console.log(e.target.getBoundingClientRect());

  // console.log('Current scroll (x/y)', window.pageXOffset, pageYOffset);

  // console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

  //scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );


  //Old scholl. manually cocllate the number
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // })

  section1.scrollIntoView({
    behavior: 'smooth'
  })
})


//Events

// const alertH1 = function (e) {
//   alert('addEventLinstener: Great! you are reading the heading');
//   // h1.removeEventListener('mouseenter', alertH1);
// };

// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', alertH1);
// h1.removeEventListener('mouseenter', alertH1);

//old school
// h1.onmouseenter = function (e) {
//   // alert('addEventLinstener: Great! you are reading the heading');
// };

//bubbling and captureing

//rgb(255,255,255)
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`

// console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   // e.stopPropagation();
//   console.log("child", e.target, e.currentTarget);
//   console.log(e.currentTarget === this);
// })
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   // e.stopPropagation();
//   console.log("parent", e.target, e.currentTarget);
//   console.log(e.currentTarget === this);
// })
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   // e.stopPropagation();
//   console.log("grandparent", e.target, e.currentTarget);
//   console.log(e.currentTarget === this);
// }, true)


// const h1 = document.querySelector('h1');
// // console.log(h1);

// //going downards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.getElementsByTagName('span'));
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log(h1.firstChild);
// console.log(h1.lastChild);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// //going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// console.log(h1.closest('.header'));

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// //going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) {
//     el.style.transform = 'scale(0.5)';
//   }
// })

