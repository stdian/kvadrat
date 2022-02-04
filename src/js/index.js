import "../index.html"
import "../scss/index.scss"

import Swiper from "https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js"

const swiper = new Swiper(".first-swiper", {
	// Optional parameters
	loop: true,
	slidesPerView: 1,
	navigation: {
		nextEl: ".slider-go-next",
		prevEl: ".slider-go-back",
	},
})

window.firstSliderGoNext = () => {
	swiper.slideNext()
}

window.firstSliderGoBack = () => {
	swiper.slidePrev()
}

const secondSwiper = new Swiper(".second-swiper", {
	loop: true,
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	parallax: true,
	coverflowEffect: {
		rotate: 0, // Slide rotate in degrees
		stretch: 100, // Stretch space between slides (in px)
		depth: 300, // Depth offset in px (slides translate in Z axis)
		modifier: 1, // Effect multipler
		slideShadows: true, // Enables slides shadows
	},
	pagination: {
		el: ".second-slider-progress-text",
		type: "custom",
		clickable: true,
		// eslint-disable-next-line object-shorthand
		renderCustom: function(_swiper, current, total) {
			document.getElementById("second-slider-progress-bar").style.background = `linear-gradient(to right, #FF0000 ${(current / total) * 100}%, #FFFFFF ${(current / total) * 100}%, #FFFFFF 75%, #FFFFFF 100%)`
			return current + "/" + total
		},
	},
})

window.secondSliderGoNext = () => {
	secondSwiper.slideNext()
}

window.secondSliderGoBack = () => {
	secondSwiper.slidePrev()
}
