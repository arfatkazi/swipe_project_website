const daynight = document.querySelector(".day-night")
const navbar = document.querySelectorAll(".nav")
const swipelogo = document.querySelector(".swipe-logo")
const signIn = document.querySelector(".sign-in")

// console.log(list)
// console.log(menu)
// console.log(daynight)
// console.log(navbar);

// Darkmode Lightmode

function changeNavBlackNav() {
	navbar[0].style.color = "black"
	navbar[1].style.color = "black"
	navbar[2].style.color = "black"
	navbar[3].style.color = "black"
	navbar[4].style.color = "black"
}

function changeNavWhiteNav() {
	navbar[0].style.color = "whitesmoke"
	navbar[1].style.color = "whitesmoke"
	navbar[2].style.color = "whitesmoke"
	navbar[3].style.color = "whitesmoke"
	navbar[4].style.color = "whitesmoke"
}

const blackWhite = () => {
	if (document.body.style.backgroundColor === "black") {
		document.body.style.backgroundColor = "whitesmoke"
		document.body.style.color = "black"
		changeNavBlackNav()
	} else {
		document.body.style.backgroundColor = "black"
		document.body.style.color = "whitesmoke"
		changeNavWhiteNav()
	}
}

daynight.addEventListener("click", () => {
	blackWhite()
	signin()
})

const signin = () => {
	if (document.body.style.backgroundColor === "whitesmoke") {
		signIn.style.backgroundColor = "deeppink"
		signIn.style.color = "white"
	} else if (document.body.style.backgroundColor === "black") {
		// signIn.style.backgroundColor = "grey"
		signIn.style.backgroundColor = "#fafafa40"
		signIn.style.color = "whitesmoke"
	}
}

// Darkmode Lightmode

//colorchange

// const colorChangeBlackMode = () => {
// 	navbar.forEach((nav) => {
// 		nav.addEventListener("mouseenter", () => {

// 					nav = navbar[0].style.color = "red"
// 					nav = navbar[1].style.color = "cyan"
// 					nav = navbar[2].style.color = "#00f752"
// 					nav = navbar[3].style.color = "#ff00ff"
// 					nav = navbar[4].style.color = "#ff7b00"

// 		})

// 		nav.addEventListener("mouseleave", () => {
// 			nav = navbar[0].style.color = "white"
// 			nav = navbar[1].style.color = "white"
// 			nav = navbar[2].style.color = "white"
// 			nav = navbar[3].style.color = "white"
// 			nav = navbar[4].style.color = "white"
// 		})
// 	})
// }

colorChangeBlackMode()
// end of colorchange
