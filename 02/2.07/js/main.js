/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.7 - Loading external data
*/


// d3.csv("/2.07/data/ages.csv").then(data => {
// 	console.log(data)
// 	})

d3.json("/2.07/data/ages.json").then(data => {
	console.log(data)
	data.forEach(d => { //converting age format to "Number"
		d.age = Number(d.age)
	})
	
	const svg = d3.select("#chart-area").append("svg") //creating canvas for locating shapes that are going to be created
		.attr("width", 400)
		.attr("height", 400)

	const circles = svg.selectAll("circle")
		.data(data)

	circles.enter().append("circle")
		.attr("cx", (d, i) => (i * 50) + 50) //defining position on X axis
		.attr("cy", 250) //defining position on Y axis
		.attr("r", (d) => 2 * d.age) //radius based on age value times 2
		.attr("fill", d => {
			if (d.name === "Emily") { //assigning colors based on names
				return "blue"
			}
			else {
				return "red"
			}
		})
}).catch(error => { //if there's an error, show it on console
	console.log(error)
})
