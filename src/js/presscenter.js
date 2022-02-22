import "../presscenter.html"
import "../scss/presscenter.scss"

window.pressShowMore = () => {
	const items = document.querySelectorAll(".press-hidden")
	for (let i = 0; i < items.length; i += 1) {
		items[i].style.display = "block"
	}

	const button = document.querySelector(".press-container").querySelector(".button-container")
	button.style.display = "none"
}
