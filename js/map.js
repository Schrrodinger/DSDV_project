// Asynchronously load and process the life expectancy data
fetch('data/avg_life_expectancy.json') // Adjust the path to your JSON file as necessary
.then(response => response.json()) // Parse the JSON from the response
.then(data => {
    // Process the data into a more convenient format
    const lifeExpectancyData = data.reduce((acc, item) => {
        acc[item.Country] = item['Life.expectancy'];
        return acc;
    }, {});

    // Initialize the map with the processed life expectancy data
    initializeMap(lifeExpectancyData);
})
.catch(error => console.error('Error loading or processing the JSON data:', error));

// Function to initialize the map
function initializeMap(lifeExpectancyData) {
const svg = d3.select("#worldmap").append("svg")
    .attr("width", "100%")
    .attr("height", "100%");

const projection = d3.geoMercator()
    .scale(150)
    .translate([window.innerWidth / 2, window.innerHeight / 1.5]);
const path = d3.geoPath().projection(projection);

const zoom = d3.zoom()
    .scaleExtent([1, 8])
    .on('zoom', (event) => {
        svg.selectAll('path').attr('transform', event.transform);
    });
svg.call(zoom);


// Load and display the world map
d3.json("https://unpkg.com/world-atlas@2/countries-110m.json")
    .then(data => {
        svg.selectAll("path")
            .data(topojson.feature(data, data.objects.countries).features)
            .enter().append("path")
            .attr("d", path)
            .attr("fill", "#7f7f7f") // Original darker color
            .attr("stroke", "white") // Borders between countries
            .attr("stroke-width", 0.5) // Border width
            .on("mouseover", function(event, d) {
                const countryName = d.properties.name;
                const lifeExpectancy = lifeExpectancyData[countryName] ? lifeExpectancyData[countryName] : "No data";
                d3.select(this).attr("fill", "#9dc9ac"); // Lighter color on hover
                d3.select("#tooltip")
                    .style("left", (event.pageX + 15) + "px")
                    .style("top", (event.pageY + 15) + "px")
                    .style("display", "inline")
                    .html(`Country: ${countryName}<br>Life Expectancy: ${lifeExpectancy}`);
            })
            .on("mouseout", function() {
                d3.select(this).attr("fill", "#7f7f7f"); // Revert to original color
                d3.select("#tooltip").style("display", "none");
            });
    })
    .catch(error => console.error("Error loading or processing the world map data:", error));
}