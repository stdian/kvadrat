/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import "../index.html"
import "../scss/index.scss"

const swiper = new Swiper(".first-swiper", {
	// Optional parameters
	loop: true,
	slidesPerView: 1,
	navigation: {
		nextEl: ".slider-go-next",
		prevEl: ".slider-go-back",
	},
	pagination: {
		el: ".slider-progress-text",
		type: "custom",
		clickable: true,
		// eslint-disable-next-line object-shorthand
		renderCustom: function(_swiper, current, total) {
			const slides = document.getElementsByClassName(`first-slider-progress-bar-${current}`)
			for (let i = 0; i < slides.length; i++) {
				slides[i].style.background = `linear-gradient(to right, #FF0000 ${(current / total) * 100}%, #FFFFFF ${(current / total) * 100}%, #FFFFFF 100%)`
			}
			// document.getElementById(`first-slider-progress-bar-${current}`).style.background = `linear-gradient(to right, #FF0000 ${(current / total) * 100}%, #FFFFFF ${(current / total) * 100}%, #FFFFFF 100%)`
			// return `${current}/${total}`
		},
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
		rotate: 0,
		stretch: 100,
		depth: 300,
		modifier: 1,
		slideShadows: true,
	},
	pagination: {
		el: ".second-slider-progress-text",
		type: "custom",
		clickable: true,
		// eslint-disable-next-line object-shorthand
		renderCustom: function(_swiper, current, total) {
			document.getElementById("second-slider-progress-bar").style.background = `linear-gradient(to right, #FF0000 ${(current / total) * 100}%, #FFFFFF ${(current / total) * 100}%, #FFFFFF 75%, #FFFFFF 100%)`
			return `${current}/${total}`
		},
	},
})

window.secondSliderGoNext = () => {
	secondSwiper.slideNext()
}

window.secondSliderGoBack = () => {
	secondSwiper.slidePrev()
}

const thirdBreakpoints = {
	0: {
		slidesPerView: 1,
	},
	601: {
		slidesPerView: 3,
	},
}

const thirdSwiper = new Swiper(".third-swiper", {
	loop: false,
	slidesPerView: 3,
	pagination: {
		el: ".third-slider-progress-text",
		type: "custom",
		clickable: true,
		// eslint-disable-next-line object-shorthand
		renderCustom: function(_swiper, current, total) {
			document.getElementById("third-slider-progress-bar").style.background = `linear-gradient(to right, #FF0000 ${(current / total) * 100}%, #000000 ${(current / total) * 100}%, #000000 75%, #000000 100%)`
			return `${current}/${total}`
		},
	},
	breakpoints: thirdBreakpoints,
})

window.thirdSliderGoNext = () => {
	thirdSwiper.slideNext()
}

window.thirdSliderGoBack = () => {
	thirdSwiper.slidePrev()
}

const mobileContragentsSlider = new Swiper(".mobile-contragents-slider", {
	loop: true,
	slidesPerView: 2,
	centeredSlides: true,
})
