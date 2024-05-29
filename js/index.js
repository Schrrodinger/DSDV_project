// Load map data
d3.json("data/avg_life_expectancy.json", function(error, world) {
    if (error) throw error;
  
    // Create SVG container
    var svg = d3.select("body")
      .append("svg")
      .attr("width", 960)
      .attr("height", 600);
  
    // Define projection and path generator
    var projection = d3.geoMercator()
      .scale(160)
      .translate([480, 300]);
  
    var path = d3.geoPath()
      .projection(projection);
  
    // Draw map
    svg.selectAll(".country")
      .data(topojson.feature(world, world.objects.countries).features)
      .enter().append("path")
      .attr("class", "country")
      .attr("d", path)
      .on("click", function(d) {
        // Handle click event
        handleCountryClick(d.properties.name);
      });
  
    // Function to handle country click event
    function handleCountryClick(countryName) {
      // Fetch data for the selected country
      d3.json("data/avg_life_expectancy.json", function(error, data) {
        if (error) throw error;
  
        // Update chart with data for the selected country
        updateChart(data[countryName]);
      });
    }
  
    // Function to update chart
    function updateChart(countryData) {
      // Code to update the chart with the provided country data
      // This could include creating or updating bar charts, line charts, etc.
      console.log("Updating chart with data for:", countryData);
    }
  });