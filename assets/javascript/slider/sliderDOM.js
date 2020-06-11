import Slider from './slider'

let sliderText = document.getElementById('slider-text')
let sliderTitle = document.getElementById('slider-title')
let sliderSubtitle = document.getElementById('slider-subtitle')
let sliderImage = document.getElementById('slider-image')
let textContent = document.getElementById('slider-text-content')

let slider = new Slider({
    elements: [
        {
            title: 'lorem Impsum',
            subtitle: 'Lorem',
            image: './public/images/image6.jpg',
            text: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem'
        },
        {
            title: 'Impsum Impsum',
            subtitle: 'Medium',
            image: './public/images/image5.jpg',
            text: 'Impsum Impsum Impsum Impsum Impsum Impsum Impsum Impsum Impsum Impsum Impsum Impsum'
        },
        {
            title: 'Impsum Lorem',
            subtitle: 'Krafka',
            image: './public/images/image4.jpg',
            text: 'Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum Lorem'
        }
    ],
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