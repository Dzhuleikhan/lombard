let center = [55.75409080802758,37.62552622753906];


function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 10
	});

  let dinamo = new ymaps.Placemark([55.7905500689469,37.54738699999998], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../../img/map-pin.svg',
    iconImageSize: [47, 47]
  })

  let tushino = new ymaps.Placemark([55.83672106888657,37.445949499999884], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../../img/map-pin.svg',
    iconImageSize: [47, 47]
  })
  let marino = new ymaps.Placemark([55.658809569055215,37.7341285], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../../img/map-pin.svg',
    iconImageSize: [47, 47]
  })
  let rumyancevo = new ymaps.Placemark([55.63474556911239,37.439077000000005], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../../img/map-pin.svg',
    iconImageSize: [47, 47]
  })
  let mosfilm = new ymaps.Placemark([55.71785256902825,37.51219999999998], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../../img/map-pin.svg',
    iconImageSize: [47, 47]
  })

	map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)


  const mediaQuery = window.matchMedia('(max-width: 500px)')

  function handleTabletChange(e) {
    if (e.matches) {
      map.behaviors.disable(['drag']);
    }
  }

  // Register event listener
  mediaQuery.addListener(handleTabletChange)

  // Initial check
  handleTabletChange(mediaQuery)

  map.geoObjects.add(dinamo)
  map.geoObjects.add(tushino)
  map.geoObjects.add(marino)
  map.geoObjects.add(rumyancevo)
  map.geoObjects.add(mosfilm)

  let address = document.getElementById('address')
  let geo = document.getElementById('geo')
  let phone = document.getElementById('phone')
  let title = document.getElementById('title')

  dinamo.events.add(['click'],  function (e) {
    address.textContent = 'Москва, Ленинградский проспект, 37, к. 9 Бизнес-отель «Аэростар», офис 604, 4 подъезд'
    geo.textContent = '55.7905500689469 / 37.54738699999998'
    phone.textContent = '+7 (495) 518 80 81'
    title.textContent = 'Филиал Динамо'
  })
  tushino.events.add(['click'],  function (e) {
    address.textContent = 'Москва, ул. Лодочная, д.3, с.1А.'
    geo.textContent = '55.83672106888657 / 37.445949499999884'
    phone.textContent = '+7 (985) 222 89 19'
    title.textContent = 'Филиал Тушино'
  })
  marino.events.add(['click'],  function (e) {
    address.textContent = 'Москва, ул. Нижние поля, 27, с. 11'
    geo.textContent = '55.658809569055215 / 37.7341285'
    phone.textContent = '+7 (495) 506 17 77'
    title.textContent = 'Филиал Марьино'
  })
  rumyancevo.events.add(['click'],  function (e) {
    address.textContent = 'Москва, Киевское ш., 4с2в, БЦ "Румянцево"'
    geo.textContent = '55.63474556911239 / 37.439077000000005'
    phone.textContent = '+7 (985) 222 92 97'
    title.textContent = 'Филиал Румянцево'
  })
  mosfilm.events.add(['click'],  function (e) {
    address.textContent = 'улица Улофа Пальме, 1'
    geo.textContent = '55.63474556911239 / 37.439077000000005'
    phone.textContent = '+7 (925) 257 77 11'
    title.textContent = 'Филиал Мосфильмовская'
  })
}

ymaps.ready(init);

