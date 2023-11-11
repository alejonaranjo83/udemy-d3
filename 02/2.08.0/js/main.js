/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

d3.json("/2.08.0/data/buildings.json").then(data => {
    console.log(data)
    data.forEach(d => {
        d.height = Number(d.height)
    })

    const svg = d3.select("#chart-area").append("svg")
        .attr("width",500)
        .attr("height", 500)
    
    const rectangles = svg.selectAll("rect")
        .data(data)

    rectangles.enter().append("rect")
        .attr("x", (d, i) => (i*60))
        .attr("y", 10)
        .attr("width", 40)
        .attr("height", d => d.height)
        .attr("fill", "grey")
})