function createScatterPlotBMI() {

// Set the dimensions and margins of the graph
const margin = { top: 200, right: 100, bottom: 100, left: 220 },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// Set the ranges
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// Define the axes
var xAxis = d3.axisBottom(x);
var yAxis = d3.axisLeft(y);

// Adds the svg canvas
var svg = d3.select("#bmi-scatter-plot")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

// Define the div for the tooltip
var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

fetch('data/all_years_data.json')
    .then(response => response.json())
    .then(data => {
        // Process the data
        data.forEach(function(d) {
            d.BMI = parseFloat(d[' BMI ']); // Fix the space in the key
            d.LifeExpectancy = parseFloat(d['Life expectancy ']);
            d.Year = +d.Year;
        });

        // Scale the range of the data
        x.domain([0, d3.max(data, function(d) { return d.BMI; })]);
        y.domain([0, d3.max(data, function(d) { return d.LifeExpectancy; })]);

        // Add the scatterplot points
        svg.selectAll("dot")
            .data(data)
            .enter().append("circle")
            .attr("class", function(d) { return "dot " + d.Status; })
            .attr("r", 5)
            .attr("cx", function(d) { return x(d.BMI); })
            .attr("cy", function(d) { return y(d.LifeExpectancy); })
            .on("mouseover", function(event, d) {
                tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
                tooltip.html(d.Country + "<br/>" + d.Year + "<br/>Life Expectancy: " +
                        d.LifeExpectancy + "<br/>BMI: " + d.BMI)
                    .style("left", (event.pageX) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", function(d) {
                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

        // Add the X Axis
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        // Add the Y Axis
        svg.append("g")
            .call(yAxis);

        // Add graph title
        svg.append("text")
            .attr("text-anchor", "middle")
            .attr("x", width / 2)
            .attr("y", -margin.top / 2 + 20)
            .text("Country over 15 years")
            .style("font-family", "Arial, sans-serif")
           .style("font-size", "24px")
            .style("fill", "#4E79A7")
            .style("font-weight", "bold");

        // Add Y axis label
        svg.append("text")
            .attr("text-anchor", "middle")
            .attr("transform", "rotate(0)")
            .attr("y", -margin.left + 200)
            .attr("x", -50)
            .text("Life Expectancy")
            .style("font-family", "Arial, sans-serif")
            .style("font-size", "18px")
            .style("fill", "#6C757D")
            .style("font-weight", "bold");

        // Add X axis label
        svg.append("text")
            .attr("text-anchor", "end")
            .attr("x", width - margin.right + 200)
            .attr("y", height + margin.bottom - 50)
            .text("BMI")
            .style("font-family", "Arial, sans-serif")
            .style("font-size", "18px")
            .style("fill", "#6C757D")
            .style("font-weight", "bold");

    })
    .catch(error => console.error('Error fetching JSON:', error));
}
createScatterPlotBMI();