const cities = [
    { name:'Москва', description: 'Москва - столица России', image: 'images/images.jfif'},
    { name:'Санкт-Петербург', description: 'Санкт-Петербург - Культ. ст.', image: 'images/images.(1)jfif'},
    { name:'Казань', description: 'Казань - третья столица России', image: 'images/images.(8)jfif'}
]
const markers = document.querySelectorAll('.marker')
const infoBox = document.getElementById('info-box')
const modal = document.getElementById('modal')
const modalTitle = document.getElementById('modal-title')
const modalDescription = document.getElementById('modal-description')
const modalImg = document.getElementById('modal-img')
