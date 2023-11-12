/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

// 1. Reading data from directory
d3.json("/2.08.0/data/buildings.json").then(data => {
    console.log(data) //Just in case to check if the data is reading ok
    // 2. converting format of the numbers
    data.forEach(d => {
        d.height = Number(d.height)
    })

    // 3. Creating an SVG "canvas" in the HTML label
    const svg = d3.select("#chart-area").append("svg")
        .attr("width",500)
        .attr("height", 500)
    
    // 4. Adding a rectangle for each element
    const rectangles = svg.selectAll("rect")
        .data(data)

    // 5. Defining the properties of each rectangle
    rectangles.enter().append("rect")
        .attr("x", (d, i) => (i*60)) //separating rectangles in the X axis
        .attr("y", 10)
        .attr("width", 40)
        .attr("height", d => d.height) //assigning the height from the height value
        // .attr("fill", "grey")
        // 6. In case that I want to add a particular color depending on the name of an element
        .attr("fill", d => {
            if (d.name === "Burj Khalifa") {
                return "orange"
            }
            else {
                return "grey"
            }
        })
})