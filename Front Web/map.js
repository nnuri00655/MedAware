  function init() {
            var map = new ymaps.Map("map", {
                center: [43.23446357451562,76.91006249999992], 
                zoom: 15,
                controls: ['zoomControl', 'fullscreenControl']
            });

            var placemark = new ymaps.Placemark([43.23446357451562,76.91006249999992], {
                balloonContent: '<strong>Office</strong><br>Manasa street 34'
            });

            map.geoObjects.add(placemark);
        }

        ymaps.ready(init);