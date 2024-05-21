// Select the SVG element in the DOM, set the margins, width, and height for the graph.
var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

// Define the scales. The x-scale will be linear based on the year.
// The y-scale will be linear based on the life expectancy values.
var x = d3.scaleLinear().rangeRound([0, width]),
    y = d3.scaleLinear().rangeRound([height, 0]);

// Define the color scale to differentiate between countries.
var z = d3.scaleOrdinal(d3.schemeCategory10);

// Define the line generator. Each line will use the year for the x-coordinate and the life expectancy for the y-coordinate.
var line = d3.line()
    .curve(d3.curveBasis)
    .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.lifeExp); });

// Load the data from a CSV file
d3.csv("F:\Onedrive\Documents\GitHub\DSDV_project\data\cleandata_fixed.xlsx").then(function(data) {
    // Format the data by parsing the year to integer and life expectancy to float.
    data.forEach(function(d) {
        d.Year = +d.Year;
        for (var k in d) if (k !== "Year") d[k] = +d[k];
    });

    // Prepare the data structure for plotting. Each country's data will be an array of points (year, lifeExp).
    var countries = data.columns.slice(1).map(function(id) {
        return {
            id: id,
            values: data.map(function(d) {
                return {year: d.Year, lifeExp: d[id]};
            })
        };
    });

    // Set the domain of the x-scale to the extent of years and the y-scale to the extent of life expectancy values.
    x.domain(d3.extent(data, function(d) { return d.Year; }));
    y.domain([
        d3.min(countries, function(c) { return d3.min(c.values, function(d) { return d.lifeExp; }); }),
        d3.max(countries, function(c) { return d3.max(c.values, function(d) { return d.lifeExp; }); })
    ]);

    // Set the domain of the color scale to the list of country names.
    z.domain(countries.map(function(c) { return c.id; }));

    // Append the x-axis to the graph
    g.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

    // Append the y-axis to the graph
    g.append("g")
        .call(d3.axisLeft(y))
      .append("text")
        .attr("fill", "#000")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Life expectancy (years)");

    // Append the lines for each country to the graph.
    var country = g.selectAll(".country")
        .data(countries)
        .enter().append("g")
        .attr("class", "country");

    country.append("path")
        .attr("class", "line")
        .attr("d", function(d) { return line(d.values); })
        .style("stroke", function(d) { return z(d.id); });
});
