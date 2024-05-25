// Load the data from the JSON file
d3.json("data/all_years_data.json").then(function(data) {
        // Map data by country
        const countryData = {};
        data.forEach(d => {
            if (!countryData[d.Country]) {
                countryData[d.Country] = [];
            }
            countryData[d.Country].push({ year: d3.timeParse("%Y")(d.Year), value: +d["Life expectancy "] });
        });

        // Populate the dropdown menu
        const countries = Object.keys(countryData);
        const select = d3.select("#countrySelector");
        select.selectAll("option")
              .data(countries)
              .enter()
              .append("option")
              .text(d => d)
              .attr("value", d => d);

        // Initial graph setup
        const margin = { top: 20, right: 30, bottom: 50, left: 70 },
              width = 800 - margin.left - margin.right,
              height = 500 - margin.top - margin.bottom;
        const svg = d3.select("svg")
                      .attr("width", width + margin.left + margin.right)
                      .attr("height", height + margin.top + margin.bottom)
                      .append("g")
                      .attr("transform", `translate(${margin.left},${margin.top})`);
        const x = d3.scaleTime().range([0, width]);
        const y = d3.scaleLinear().range([height, 0]);
        const xAxis = svg.append("g").attr("transform", `translate(0,${height})`);
        const yAxis = svg.append("g");
        const line = d3.line().x(d => x(d.year)).y(d => y(d.value));
        const path = svg.append("path").attr("class", "line");

        // Add X axis label
        svg.append("text")
           .attr("text-anchor", "end")
           .attr("x", width / 2 + margin.left)
           .attr("y", height + margin.top + 20)
           .text("Year");

        // Add Y axis label
        svg.append("text")
           .attr("text-anchor", "end")
           .attr("transform", "rotate(-90)")
           .attr("y", -margin.left + 20)
           .attr("x", -margin.top - height / 2 + 20)
           .text("Life Expectancy");

        // Function to update the graph
        function updateGraph(country) {
            const data = countryData[country];
            x.domain(d3.extent(data, d => d.year));
            y.domain([0, d3.max(data, d => d.value)]);
            xAxis.call(d3.axisBottom(x));
            yAxis.call(d3.axisLeft(y));
            path.datum(data)
                .attr("d", line)
                .attr("stroke", "blue");
        }

        // Handle change event
        select.on("change", function() {
            updateGraph(this.value);
        });

        // Initial update
        updateGraph(countries[0]);
    });
