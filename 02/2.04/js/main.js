/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.4 - Adding SVGs with D3
*/

const svg = d3.select("#chart-area").append("svg")
  .attr("width", 400)
  .attr("height", 400)


svg.append("rect")
  .attr("x", 10)
  .attr("y", 230)
  .attr("width", 250)
  .attr("height", 100)
  .attr("fill", "grey")

svg.append("circle")
  .attr("cx", 100)
  .attr("cy", 250)
  .attr("r", 70)
  .attr("fill", "red")

svg.append("line")
  .attr("x1", 65)
  .attr("y1", 270)
  .attr("x2", 230)
  .attr("y2", 150)  
  .attr("stroke", "black")
  .attr("stroke-width", 7)