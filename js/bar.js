// Load the data from the JSON file
fetch('data/all_years_data.json')
  .then(response => response.json())
  .then(data => {
    // Create the dropdown options
    const countryDropdown = document.getElementById('countryDropdown');
    const countries = [...new Set(data.map(record => record.Country))];
    countries.forEach(country => {
      const option = document.createElement('option');
      option.value = country;
      option.text = country;
      countryDropdown.add(option);
    });

    // Update the bar chart when the country is selected
    countryDropdown.addEventListener('change', () => {
      updateBarChart(data, countryDropdown.value);
    });

    // Show the initial bar chart for the first country
    updateBarChart(data, countries[0]);
  })
  .catch(error => console.error(error));

let myBarChart;

function updateBarChart(data, selectedCountry) {
  const countryData = data.filter(record => record.Country === selectedCountry);

  // Extract the years and GDP values
  const years = countryData.map(record => record.Year);
  const gdpValues = countryData.map(record => record.GDP);

  // Create the bar chart
  const ctx = document.getElementById('myBarChart');
  ctx.width = 800; // Set the width of the chart
  ctx.height = 500; // Set the height of the chart
  ctx.style.width = '800px'; // Set the container width
  ctx.style.height = '500px'; // Set the container height
  const containerWidth = ctx.parentElement.offsetWidth;
  const containerHeight = ctx.parentElement.offsetHeight;

  if (myBarChart) {
    myBarChart.destroy(); // Destroy the previous chart
  }

  myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: years,
      datasets: [{
        label: `GDP for ${selectedCountry}`,
        data: gdpValues,
        backgroundColor: '#4f47b3',
        borderColor: '#4f47b3',
        borderWidth: 1
      }]
    },
    options: {
      responsive: false, // Disable responsive behavior
      maintainAspectRatio: true,
      plugins: {
        title: {
          display: true,
          text: `GDP Over Time - ${selectedCountry}`,
          font: {
            size: 18, // Increase the font size of the title
            family: 'Georgia, serif' // Change the font-family of the title
          },
          padding: {
            top: 10,
            bottom: 20
          }
        },
        legend: {
          position: 'bottom', // Move the legend to the bottom
          labels: {
            font: {
              size: 12, // Increase the font size of the legend
              family: 'Georgia, serif' // Change the font-family of the legend
            }
          },
          padding: 16
        }
      },
      layout: {
        padding: {
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'GDP',
            font: {
              size: 16,
              family: 'Georgia, serif'
            }
          }
        },
        x: {
          title: {
            display: true,
            text: 'Year',
            font: {
              size: 16,
              family: 'Georgia, serif'
            }
          }
        }
      },
      devicePixelRatio: 4 // Tăng độ phân giải lên 4 lần
    }
  });


}