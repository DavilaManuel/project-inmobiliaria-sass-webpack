import '../css/app.scss'
import './slider/sliderDOM'
import './maps'
import './menu'


// Service Worker
if(navigator.serviceWorker) {
    navigator.serviceWorker.register('../sw.js')
}