// Your code goes here

const images = document.querySelectorAll('img')

images.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.classList.add('hovered');
    setTimeout(() => {
      image.classList.remove('hovered');
    }, 500);
  })

  
})

