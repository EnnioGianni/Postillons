/*livre*/

document.querySelector(
	"header > date"
).innerText = new Date().toLocaleDateString("en-US", {
	weekday: "long",
	year: "numeric",
	month: "long",
	day: "numeric"
});