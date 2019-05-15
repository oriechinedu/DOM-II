// Your code goes here

const images = document.querySelectorAll('img')
const body = document.querySelector('body')
const logo = document.querySelector('.logo-heading') 
const buttons = document.querySelectorAll('.btn') 
const titles = document.querySelectorAll('h2')
const navLinks = document.querySelectorAll('nav a')
images.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.classList.add('hovered');
    setTimeout(() => {
      image.classList.remove('hovered');
    }, 500);
    image.addEventListener('drag', (evt) => {
      image.animate([
        { transform: 'translateY(0px)' },
        { transform: 'translateY(30px)' }
      ],
      { 
        duration: 2000,
        iterations: 2
      })
    })
  })

})

document.addEventListener('keydown', (event) => {
  alert(`Oops! did you press the ${event.key} key ?`)
})

const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(p => {
  p.addEventListener('wheel', (event) => {
    let fontSize = parseFloat(getComputedStyle(p, null).getPropertyValue('font-size'));
    let newFontSize = fontSize + event.deltaY;
    if (newFontSize > 24 || newFontSize < 10) {
      newFontSize = 16;
    }
    p.style.fontSize = `${newFontSize}px`;
    setTimeout(() => {
      p.style.fontSize = `16px`
    }, 2000)
  })
})

window.addEventListener('load', () => {
  body.setAttribute('style', 'background-color: green; color: white; transition: 1s ease-in-out; opacity: 0.5')
  logo.style.color = 'black'
  setTimeout(() =>{
    body.setAttribute('style', 'background-color: green; color: white; transition: 1s ease-in-out; opacity: 1')
  })
})


navLinks.forEach(navItem => {
  navItem.addEventListener('mouseenter', () => {
    navItem.style.transform = 'scale(1.2)'
  })
  navItem.addEventListener('mouseleave', () => {
    navItem.style.transform = 'scale(1)'
  })
})

logo.addEventListener('mouseenter', () => {
  logo.style = 'transform:scale(1.2); border-bottom: 2px solid black; color: black;'
})
logo.addEventListener('mouseleave', () => {
  logo.style = 'transform:scale(1); border-bottom: 0px; color: black;'
})

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  })
})

titles.forEach(h2 => {
  h2.addEventListener('dblclick', () => {
    h2.animate([
      { transform: 'translateX(0px)' },
      { transform: 'translateX(300px)' }
    ],
    { 
      duration: 1000,
      iterations: 1
    })
  })
})

const contentSection = document.querySelector('.content-section')

const textContent = contentSection.querySelector('.text-content')
const imgContent = contentSection.querySelector('.img-content')


contentSection.addEventListener('click', () => {
  console.log('container')
})

textContent.addEventListener('click', (event) => {
  event.stopPropagation() //prevents the event from reaching the parent contentSection
  console.log('text content')
})
imgContent.addEventListener('click', (event) => {
  event.stopPropagation() //prevents the event from reaching the parent contentSection
  console.log('img content')
})

textContent.addEventListener('mouseenter', (event) => {
  event.stopImmediatePropagation()
  console.log('mouse entered text content ')
})
textContent.addEventListener('click', (event) => {
  event.stopImmediatePropagation() // prevents the rest of the listeners below from executing
  console.log('clicked text content 1 ')
})
textContent.addEventListener('click', (event) => {
  console.log('clicked text content 2 ')
})
textContent.addEventListener('click', (event) => {
  console.log('clicked text content 3 ')
})
textContent.addEventListener('click', (event) => {
  console.log('clicked text content 4 ')
})


 


