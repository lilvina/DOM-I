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
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
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
logo.setAttribute('src', siteContent["nav"]["img-src"])

let imgCta = document.getElementById("cta-img")
imgCta.setAttribute('src', siteContent["cta"]["img-src"])

let imgMiddle = document.getElementById("middle-img")
imgMiddle.setAttribute('src', siteContent["main-content"]["img-src"])
//
// //update content
const namesForNavLinks = Object.entries(siteContent.nav)
.filter(element => element[0].includes('nav-item'))
.map(element => element[1])

const contentArrays = Object.entries(siteContent['main-content'])
.filter(element => element[0].includes('h4'))
.map(element => element[1])

const textArrays = Object.entries(siteContent['main-content'])
.filter(element => element[0].includes('content'))
.map(element => element[1])

const fillInNav = () => {
  let links = document.querySelectorAll('nav a')
  let i = 0
  links.forEach(element => {
    element.textContent = links[i]
    i++
  })
}
fillInNav()

const fillInContentCards = () => {
  let titlesContent = document.querySelectorAll('.text-content h4')
  let i = 0
  titlesContent.forEach(element => {
    element.textContent = contentArrays[i]
    i++
  })

  let textForContent = document.querySelectorAll('.text-content p')
  i = 0
  textForContent.forEach(element => {
    element.textContent = textArrays[i]
    i++
  })
}
fillInContentCards()

document.querySelector('.cta-text h1').textContent = siteContent.cta.h1
document.querySelector('.cta-text button').textContent = siteContent.cta.button

const contactBottom = document.querySelector(".contact h4")
contactBottom.textContent = siteContent["contact"]["contact-h4"]

const contactBottom2 = document.querySelectorAll(".contact p")
contactBottom2[0].textContent = siteContent["contact"]["address"]
contactBottom2[1].textContent = siteContent["contact"]["phone"]
contactBottom2[2].textContent = siteContent["contact"]["email"]

//Copyright
const copy = document.querySelector("footer p")
copy.textContent = siteContent["footer"]["copyright"]
