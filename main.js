anime({
	targets: "div.box",
	translateY: [
		{ value: 200, duration: 500 },
		{ value: 0, duration: 800 },
	],
	delay: function (el, i, l) {
		return i * 1000;
	},
	loop: true,
});