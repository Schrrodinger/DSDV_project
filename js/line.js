// Set dimensions and margins of the graph
const margin = { top: 10, right: 30, bottom: 30, left: 60 },
width = 800 - margin.left - margin.right,
height = 500 - margin.top - margin.bottom;

// Append the svg object to the body of the page
const svg = d3.select("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

// Read the data from the CSV file
d3.csv("F:\Onedrive\Documents\GitHub\DSDV_project\data\all_years_data.csv").then(function(data) {
// Format the data
const sumstat = d3.group(data, d => d.country);
const years = data.columns.slice(1); // assuming years are in columns after the first

// Add X axis
const x = d3.scaleLinear()
          .domain(d3.extent(years))
          .range([0, width]);
svg.append("g")
 .attr("transform", `translate(0,${height})`)
 .call(d3.axisBottom(x));

// Add Y axis
const y = d3.scaleLinear()
          .domain([0, d3.max(data, d => d3.max(years, year => +d[year]))])
          .range([height, 0]);
svg.append("g")
 .call(d3.axisLeft(y));

// Color palette
const color = d3.scaleOrdinal()
              .domain(sumstat.keys())
              .range(d3.schemeCategory10);

// Draw the line
svg.selectAll(".line")
 .data(sumstat)
 .enter()
 .append("path")
  .attr("fill", "none")
  .attr("stroke", d => color(d[0]))
  .attr("stroke-width", 1.5)
  .attr("d", function(d) {
      return d3.line()
               .x(d => x(d.year))
               .y(d => y(d.value))
               (d[1])
  });
});