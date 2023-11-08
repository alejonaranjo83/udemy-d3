/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/


const svg = d3.select("#chart-area").append("svg")
    .attr("width", 500)
    .attr("height", 400)

svg.append("rect")
    .attr("x", 100)
    .attr("y", 100)
    .attr("width", 250)
    .attr("height", 100)
    .attr("fill", "yellow")
    .attr("stroke", "gray")

svg.append("line")
    .attr("x1", 50)
    .attr("y1", 180)
    .attr("x2", 100)
    .attr("y2", 40)
    .attr("stroke", "black")

svg.append("ellipse")
    .attr("cx", 75)
    .attr("cy", 190)
    .attr("rx", 15)
    .attr("ry", 35)
    .attr("fill", "gray")

svg.append("circle")
    .attr("cx", 270)
    .attr("cy", 80)
    .attr("r", 8)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 3)

svg.append("circle")
    .attr("cx", 300)
    .attr("cy", 80)
    .attr("r", 8)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 3)

svg.append("circle")
    .attr("cx", 240)
    .attr("cy", 80)
    .attr("r", 8)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 3)