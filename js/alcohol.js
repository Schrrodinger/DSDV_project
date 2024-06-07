function createScatterPlotAlcohol() {

// Set the dimensions and margins of the graph
const margin = { top: 200, right: 80, bottom: 100, left: 30 },
    width = 750 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// Set the ranges
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);


// Define the axes
var xAxis = d3.axisBottom(x);
var yAxis = d3.axisLeft(y);

// Adds the svg canvas
var svg = d3.select("#alcohol-scatter-plot")
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
            d.Alcohol = parseFloat(d.Alcohol);
            d['Life expectancy '] = parseFloat(d['Life expectancy ']);
            d.Year = +d.Year;
        });

        // Scale the range of the data
        x.domain([0, d3.max(data, function(d) { return d.Alcohol; })/0.8]);
        y.domain([0, d3.max(data, function(d) { return d['Life expectancy ']; })]);

        

        // Add the scatterplot points
        svg.selectAll("dot")
            .data(data)
            .enter().append("circle")
            .attr("class", function(d) { return "dot " + d.Status; })
            .attr("r", 5)
            .attr("cx", function(d) { return x(d.Alcohol); })
            .attr("cy", function(d) { return y(d['Life expectancy ']); })
            .on("mouseover", function(event, d) {
                tooltip.transition()
                    .duration(200)
                    .style("opacity", 1.5);
                tooltip.html(d.Country + "<br/>" + d.Year + "<br/>Life expectancy: " +
                        d['Life expectancy '] + "<br/>Alcohol: " + d.Alcohol)
                    .style("left", (event.pageX) + 5+ "px")
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
        // svg.append("text")
        //     .attr("text-anchor", "middle")
        //     .attr("x", width / 2)
        //     .attr("y", -margin.top / 2 +25)
        //     .text("Country over 15 years")
        //     .style("font-family", "Arial, sans-serif")
        //    .style("font-size", "15px")
        //     .style("fill", "#4E79A7")
        //     .style("font-weight", "bold");

        // Add Y axis label
        svg.append("text")
            .attr("text-anchor", "middle")
            .attr("transform", "rotate(0)")
            .attr("y", -margin.left +20)
            .attr("x", 50)
            .text("Life Expectancy")
            .style("font-family", "Arial, sans-serif")
            .style("font-size", "15px")
            .style("fill", "#6C757D")
            .style("font-weight", "bold");

        // Add X axis label
        svg.append("text")
            .attr("text-anchor", "end")
            .attr("x", width - margin.right + 100)
            .attr("y", height + margin.bottom - 60)
            .text("Alcohol")
            .style("font-family", "Arial, sans-serif")
            .style("font-size", "15px")
            .style("fill", "#6C757D")
            .style("font-weight", "bold");

    })
    .catch(error => console.error('Error fetching JSON:', error));
}
createScatterPlotAlcohol();