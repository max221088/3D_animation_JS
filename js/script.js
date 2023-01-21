const $box = document.querySelector(".box");
let startTime = new Date().getTime();
let curentTime = null;
console.log(startTime);
let deg = 0;

function rotate() {
	curentTime = new Date().getTime();
	deg = (((curentTime - startTime) / 1000) * 30) % 360;

	$box.style.cssText =
		"transform: rotateX(" +
		deg +
		"deg) rotateY(" +
		deg +
		"deg) rotateZ(" +
		deg +
		"deg)";
	//console.log(deg);
	requestAnimationFrame(rotate);
}
rotate();
