var rawData = `Country,Year,Life expectancy
Afghanistan,2000,54.8
Afghanistan,2001,55.3

Zimbabwe,2018,60.7
Zimbabwe,2019,61.2`;

        var ctx = document.getElementById('lifeExpectancyChart').getContext('2d');
        var chart;
        var parsedData = {};

        function parseData() {
            var lines = rawData.split('\n');
            lines.forEach(line => {
                var parts = line.split(',');
                var country = parts[0];
                var year = parts[1];
                var lifeExp = parts[2];
                if (!parsedData[country]) {
                    parsedData[country] = [];
                }
                parsedData[country].push({ x: parseInt(year), y: parseFloat(lifeExp) });
            });
        }
        var x = d3.scaleBand()
    .range([0, width])
    .domain(data.map(function(d) { return d.year; }))
    .padding(0.1);

svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));


        function populateCountries() {
            var countrySelect = document.getElementById('countrySelect');
            Object.keys(parsedData).forEach(country => {
                var option = document.createElement('option');
                option.value = country;
                option.text = country;
                countrySelect.appendChild(option);
            });
        }

        function updateChart() {
            var selectedCountry = document.getElementById('countrySelect').value;
            if (chart) {
                chart.destroy();
            }
            chart = new Chart(ctx, {
                type: 'line',
                data: {
                    datasets: [{
                        label: 'Life Expectancy',
                        data: parsedData[selectedCountry],
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
                },
                options: {
                    scales: {
                        x: {
                            type: 'linear',
                            position: 'bottom'
                        }
                    }
                }
            });
        }

        window.onload = function() {
            parseData();
            populateCountries();
            updateChart();
        };