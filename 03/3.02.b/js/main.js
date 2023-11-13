/*
*    main.js
*    Mastering Data Visualization with D3.js
*    3.2 - Linear scales
*/

// Personal attempt to parametrize the height as a function of the total document height

// 1. Create a constant to define the maximum height
const dh = ($(document).height())/2

const svg = d3.select("#chart-area").append("svg")
  .attr("width", 400)
  .attr("height", dh) //2. using the const to define the height of the SVG canvas

d3.json("data/buildings.json").then(data => {
  data.forEach(d => {
    d.height = Number(d.height)
  })

  const y = d3.scaleLinear() //3. Creating a constant to scale values
    .domain([0, 828]) //the limits of real data
    .range([0, dh]) //limits proportional to the space set in D3

  const rects = svg.selectAll("rect")
    .data(data)
  
  rects.enter().append("rect")
    .attr("y", 0)
    .attr("x", (d, i) => (i * 60))
    .attr("width", 40)
    .attr("height", d => y(d.height)) //using the const "y" to scale values in the screen
    .attr("fill", "grey")
})