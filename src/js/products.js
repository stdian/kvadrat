import "../products.html"
import "../scss/products.scss"

window.productsShowMore = () => {
	const items = document.querySelectorAll(".products-hidden")
	for (let i = 0; i < items.length; i += 1) {
		items[i].style.display = "flex"
	}

	const button = document.querySelector(".show-more-container")
	button.style.display = "none"
}
