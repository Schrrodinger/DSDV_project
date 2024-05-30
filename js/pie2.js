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

let myPie2Chart;

function updatePieChart(data, selectedCountry) {
  const countryData = data.filter(record => record.Country === selectedCountry);

  // Calculate the averages for the selected country
  const averages = {
    'Hepatitis B': 0,
    'Polio': 0,
    'Diphtheria ': 0
  };
  let totalRecords = 0;

  countryData.forEach(record => {
    averages['Hepatitis B'] += record['Hepatitis B'];
    averages['Polio'] += record['Polio'];
    averages['Diphtheria '] += record['Diphtheria '];
    totalRecords++;
  });

  averages['Hepatitis B'] /= totalRecords;
  averages['Polio'] /= totalRecords;
  averages['Diphtheria '] /= totalRecords;

  // Calculate the percentages for the pie chart
  const total = averages['Hepatitis B'] + averages['Polio'] + averages['Diphtheria '];
  const percentages = {
    'Hepatitis B': (averages['Hepatitis B'] / total) * 100,
    'Polio': (averages['Polio'] / total) * 100,
    'Diphtheria ': (averages['Diphtheria '] / total) * 100
  };

  // Update the pie chart
  const ctx = document.getElementById('myPie2Chart');
  ctx.style.width = '300px'; 
  ctx.style.height = '300px'; 
  ctx.width = 300; // Set the width of the chart
  ctx.height = 300; // Set the height of the chart
  const containerWidth = ctx.parentElement.offsetWidth;
  const containerHeight = ctx.parentElement.offsetHeight;

  if (myPie2Chart) {
    myPie2Chart.destroy(); // Destroy the previous chart
  }

  myPie2Chart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Hepatitis B', 'Polio', 'Diphtheria '],
      datasets: [{
        label: `Averages for ${selectedCountry}`,
        data: [percentages['Hepatitis B'], percentages['Polio'], percentages['Diphtheria ']],
        backgroundColor: [
          '#ff8c00',
          '#008080',
          '#ba55d3'
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
          text: `Immunization Coverage Among 1-year-old - ${selectedCountry}`,
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
      devicePixelRatio: 4 
      }
  });
}