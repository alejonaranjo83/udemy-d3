/*
*    main.js
*    Mastering Data Visualization with D3.js
*    3.2 - Linear scales
*/

const svg = d3.select("#chart-area").append("svg")
  .attr("width", 400)
  .attr("height", 400)

d3.json("data/buildings.json").then(data => {
  data.forEach(d => {
    d.height = Number(d.height)
  })

  const y = d3.scaleLinear() //Creating a constant to scale values
    .domain([0, 828]) //the limits of real data
    .range([0, 400]) //limits proportional to the space set in D3

  const rects = svg.selectAll("rect")
    .data(data)
  
  rects.enter().append("rect")
    .attr("y", 0)
    .attr("x", (d, i) => (i * 60))
    .attr("width", 40)
    .attr("height", d => y(d.height)) //using the const "y" to scale values in the screen
    .attr("fill", "grey")
})