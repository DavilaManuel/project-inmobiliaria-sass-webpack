import Slider from './slider'
import elements from './elements'

let sliderText = document.getElementById('slider-text')
let sliderTitle = document.getElementById('slider-title')
let sliderSubtitle = document.getElementById('slider-subtitle')
let sliderImage = document.getElementById('slider-image')
let textContent = document.getElementById('slider-text-content')

let leftArrow = document.querySelector('.left-arrow')
let rightArrow = document.querySelector('.right-arrow')

let slider = new Slider({
    elements,
    animationFunc: function(element) {
        textContent.classList.add('hide')
        sliderImage.classList.add('hide')

        setTimeout(function() {
            sliderTitle.innerHTML = element.title
            sliderSubtitle.innerHTML = element.subtitle
            sliderText.innerHTML = element.text
            sliderImage.src = element.image

            textContent.classList.remove('hide')
            sliderImage.classList.remove('hide')
        }, 600)

    },
    speed: 5000
})

slider.play()

leftArrow.addEventListener('click', slider.prev)
rightArrow.addEventListener('click', slider.next)