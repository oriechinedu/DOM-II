// Your code goes here

const images = document.querySelectorAll('img')
const body = document.querySelector('body')
const logo = document.querySelector('.logo-heading') 
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



