window.showMenu = () => {
	const header = document.getElementsByTagName("header")[0]
	const main = document.getElementsByTagName("main")[0]
	const footer = document.getElementsByTagName("footer")[0]
	const menu = document.getElementById("mobile-menu")

	header.style.display = "none"
	main.style.display = "none"
	footer.style.display = "none"
	menu.style.display = "block"
}

window.hideMenu = () => {
	const header = document.getElementsByTagName("header")[0]
	const main = document.getElementsByTagName("main")[0]
	const footer = document.getElementsByTagName("footer")[0]
	const menu = document.getElementById("mobile-menu")

	header.style.display = "block"
	main.style.display = "block"
	footer.style.display = "block"
	menu.style.display = "none"
}

window.showSearch = () => {
	const button = document.getElementsByClassName("show-search-mobile")[0]
	const catalogContainer = document.getElementsByClassName("catalog-button-container")[0]
	const searchContainer = document.getElementsByClassName("search-container")[0]

	button.style.display = "none"
	catalogContainer.style.display = "none"
	searchContainer.style.display = "flex"
}

window.hideSearch = () => {
	const button = document.getElementsByClassName("show-search-mobile")[0]
	const catalogContainer = document.getElementsByClassName("catalog-button-container")[0]
	const searchContainer = document.getElementsByClassName("search-container")[0]

	button.style.display = "block"
	catalogContainer.style.display = "flex"
	searchContainer.style.display = "none"
}
