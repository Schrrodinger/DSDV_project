let parsedData = {}; // This will hold the mapping of countries to their life expectancy data

        function loadCSV(event) {
            const file = event.target.files[0];
            Papa.parse(file, {
                header: true,
                dynamicTyping: true,
                complete: function(results) {
                    processData(results.data);
                }
            });
        }

        function processData(data) {
            data.forEach(row => {
                if (!parsedData[row.Country]) {
                    parsedData[row.Country] = {};
                }
                parsedData[row.Country][row.Year] = row['Life expectancy ']; // Adjust the property name based on your CSV headers
            });
            populateDropdown();
            updateChart();
        }

        function populateDropdown() {
            const select = document.getElementById('countrySelect');
            select.innerHTML = ''; // Clear existing options
            for (const country in parsedData) {
                let option = document.createElement('option');
                option.value = country;
                option.text = country;
                select.appendChild(option);
            }
        }

        function updateChart() {
            const selectedCountry = document.getElementById('countrySelect').value;
            const years = Object.keys(parsedData[selectedCountry]).sort((a, b) => a - b);
            const lifeExpectancies = years.map(year => parsedData[selectedCountry][year]);

            const ctx = document.getElementById('lifeExpectancyChart').getContext('2d');
            if (window.lifeExpectancyChart) {
                lifeExpectancyChart.destroy();
            }
            window.lifeExpectancyChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: years,
                    datasets: [{
                        label: 'Life Expectancy in ' + selectedCountry,
                        data: lifeExpectancies,
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: false
                        }
                    }
                }
            });
        }