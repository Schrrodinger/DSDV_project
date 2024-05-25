// Dynamically inserting calculated data
const years = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015];
const lifeExpectancyDeveloped = [76.8, 77.13, 77.55, 77.94, 78.38, 78.59, 79.13, 79.3, 78.93, 79.58, 80.15, 80.71, 80.44, 80.68, 81.14, 80.71];
const lifeExpectancyDeveloping = [64.62, 65.01, 65.19, 65.21, 65.37, 66.01, 66.45, 66.86, 67.41, 67.89, 67.91, 68.52, 68.9, 69.23, 69.5, 69.69];

const ctx = document.getElementById('lifeExpectancyChart').getContext('2d');
const lifeExpectancyChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: years,
        datasets: [{
            label: 'Developed Countries',
            data: lifeExpectancyDeveloped,
            borderColor: 'blue',
            borderWidth: 2,
            fill: false
        }, {
            label: 'Developing Countries',
            data: lifeExpectancyDeveloping,
            borderColor: 'red',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false,
                title: {
                    display: true,
                    text: 'Average Life Expectancy'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Year'
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Average Life Expectancy Over Years: Developed vs Developing Countries (2000-2015)'
            },
            legend: {
                display: true,
                position: 'top',
            },
        }
    }
});