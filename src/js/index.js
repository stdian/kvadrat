import "../index.html"
import "../scss/index.scss"

import Swiper from "swiper"

const swiper = new Swiper(".swiper", {
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
