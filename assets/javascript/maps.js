function initMap() {
    const coords = {
        lat: -12.125470,
        lng: -77.029450
    }

    let map = new google.maps.Map(document.getElementById('map'), {
        center: coords,
        zoom: 16
    })

    let marker = new google.maps.Marker({
        position: coords,
        map,
        title: 'Inmobiliaria SAC'
    })
}

initMap()