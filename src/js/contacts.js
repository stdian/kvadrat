/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import "../contacts.html"
import "../scss/contacts.scss"
import "../img/contacts/placemark.svg"

ymaps.ready(init)
function init() {
	const myMap = new ymaps.Map("map", {
		center: [59.891, 30.324],
		zoom: 16,
	})

	myMap.geoObjects.add(new ymaps.Placemark([59.891200, 30.324555], {
		hintContent: "КВАДРАТ СГ",
		balloonContent: "КВАДРАТ СГ",
	}, {
		iconColor: "#FF0000",
	}))
}
