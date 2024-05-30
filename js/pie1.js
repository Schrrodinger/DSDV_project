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

    // Update the pie chart when the country is selected
    countryDropdown.addEventListener('change', () => {
      updatePieChart(data, countryDropdown.value);
    });

    // Show the initial pie chart for the first country
    updatePieChart(data, countries[0]);
  })
  .catch(error => console.error(error));

let myPie1Chart;

function updatePieChart(data, selectedCountry) {
  const countryData = data.filter(record => record.Country === selectedCountry);

  // Calculate the averages for the selected country
  const averages = {
    'Adult Mortality': 0,
    'infant deaths': 0,
    'under-five deaths ': 0
  };
  let totalRecords = 0;

  countryData.forEach(record => {
    averages['Adult Mortality'] += record['Adult Mortality'];
    averages['infant deaths'] += record['infant deaths'];
    averages['under-five deaths '] += record['under-five deaths '];
    totalRecords++;
  });

  averages['Adult Mortality'] /= totalRecords;
  averages['infant deaths'] /= totalRecords;
  averages['under-five deaths '] /= totalRecords;

  // Calculate the percentages for the pie chart
  const total = averages['Adult Mortality'] + averages['infant deaths'] + averages['under-five deaths '];
  const percentages = {
    'Adult Mortality': (averages['Adult Mortality'] / total) * 100,
    'infant deaths': (averages['infant deaths'] / total) * 100,
    'under-five deaths ': (averages['under-five deaths '] / total) * 100
  };

  // Update the pie chart
  const ctx = document.getElementById('myPie1Chart');
  ctx.style.width = '300px'; 
  ctx.style.height = '300px'; 
  ctx.width = 300; // Set the width of the chart
  ctx.height = 300; // Set the height of the chart
  const containerWidth = ctx.parentElement.offsetWidth;
  const containerHeight = ctx.parentElement.offsetHeight;

  if (myPie1Chart) {
    myPie1Chart.destroy(); // Destroy the previous chart
  }

  myPie1Chart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Adult Mortality', 'Infant Deaths', 'Under-five Deaths'],
      datasets: [{
        label: `Averages for ${selectedCountry}`,
        data: [percentages['Adult Mortality'], percentages['infant deaths'], percentages['under-five deaths ']],
        backgroundColor: [
          '#b22222',
          '#2eabf9',
          '#4f47b3'
        ],
        borderWidth: 2, // Increase the border width for better visibility
        borderColor: '#ffffff' // Set the border color to white for better contrast
      }]
    },
    options: {
      responsive: false, // Disable responsive behavior
      maintainAspectRatio: true, // Maintain aspect ratio
      plugins: {
        title: {
          display: true,
          text: `Top Three Primary Factors Influencing Life Expectancy - ${selectedCountry}`,
          font: {
            size: 30, // Increase the font size of the title
            family: 'Georgia, serif' // Change the font-family of the title
          }
        },
        legend: {
            position: 'bottom', // Move the legend to the bottom
            labels: {
              font: {
                size: 14, // Increase the font size of the legend
                family: 'Georgia, serif' // Change the font-family of the legend
              }
            }
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
      elements: {
        arc: {
          borderWidth: 2, // Increase the border width for better visibility
          borderColor: '#ffffff' // Set the border color to white for better contrast
        }
      },
      devicePixelRatio: 4 // Tăng độ phân giải lên 4 lần
      }
  });
}