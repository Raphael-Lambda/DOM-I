const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


// MVP 
// Create selectors by using any of the DOM element's methods
const docHeaderNav = document.querySelector("header nav");
const docSections = document.querySelectorAll("section");

//Note that IDs have been used on all images. Use the IDs to update src path content
const imgTop = document.getElementById("cta-img");
imgTop.setAttribute("src", "https://unsplash.com/photos/4hbJ-eymZ1o" );

const imgMiddle = document.getElementsByClassName("middle-img")[0];
imgMiddle.src = "https://unsplash.com/photos/4hbJ-eymZ1o";

// Using your selectors, update the content to match the example file.
const toChange = Array.from(docHeaderNav.children);
toChange.forEach((elt, index) => elt.innerText = Object.values(siteContent["nav"])[index]);

// Remember to update the src attributes on images
document.getElementById("cta-img").src = siteContent['cta']['img-src'];
document.getElementById("logo-img").src = siteContent['nav']['img-src'];
document.getElementById("middle-img").src = siteContent['main-content']['middle-img-src'];

// Change the color of the navigation text to be green.
const navs = document.querySelectorAll("a");
navs.forEach(i => i.style.color = "green");

// Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
// create the elements
const elt1 = document.createElement("a");
const elt2 = document.createElement("a");
elt1.href = "#";
elt1.innerText = "Newnav1";
elt1.style.color = "pink";
elt2.href = "#";
elt2.innerText = "Newnav2";
elt2.style.color = "pink";



const navbar = document.getElementsByTagName('nav');
navbar[0].prepend(elt2);
navbar[0].appendChild(elt1);

// add texts
// contact
const address = document.querySelectorAll(".contact > *");
address.forEach((elt, index) => elt.innerText = Object.values(siteContent['contact'])[index]);

// text content
const mainText = document.querySelectorAll(".text-content > *");
mainText.forEach((elt, index) => elt.innerText = Object.values(siteContent["main-content"])[index]);

// footer
document.querySelector('footer p').innerText = siteContent['footer']["copyright"];

// cta
const ctaText = document.querySelectorAll(".cta-text > *");
ctaText.forEach((elt, index) => elt.innerText = Object.values(siteContent["cta"])[index])
