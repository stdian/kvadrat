import "../company.html"
import "../scss/company.scss"

// eslint-disable-next-line no-undef
const swiper = new Swiper(".swiper", {
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
		el: ".slider-progress-text",
		type: "custom",
		clickable: true,
		// eslint-disable-next-line object-shorthand
		renderCustom: function(_swiper, current, total) {
			document.getElementById("slider-progress-bar").style.background = `linear-gradient(to right, #FF0000 ${(current / total) * 100}%, #FFFFFF ${(current / total) * 100}%, #FFFFFF 75%, #FFFFFF 100%)`
			return `${current}/${total}`
		},
	},
})

window.sliderGoNext = () => {
	swiper.slideNext()
}

window.sliderGoBack = () => {
	swiper.slidePrev()
}
