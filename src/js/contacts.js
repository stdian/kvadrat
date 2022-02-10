/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import "../contacts.html"
import "../scss/contacts.scss"

ymaps.ready(init)
function init() {
	const myMap = new ymaps.Map("map", {
		center: [55.76, 37.64],
		zoom: 7,
	})
}
