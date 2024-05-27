const dataByCountry = {
    Afghanistan: [59.15, 17.20, 23.65],
    Albania: [96.52, 1.47, 2.01],
    Algeria: [71.18, 13.36, 15.46],
    Angola: [60.29, 15.37, 24.34],
    Antigua: [100.0, 0.0, 0.0],
    Argentina: [83.14, 7.94, 8.92],
    Armenia: [98.32, 0.84, 0.84],
    Australia: [96.38, 1.53, 2.1],
    Austria: [100.0, 0.0, 0.0],
    Azerbaijan: [89.68, 4.72, 5.6],
    Bahamas: [100.0, 0.0, 0.0],
    Bahrain: [100.0, 0.0, 0.0],
    Bangladesh: [28.47, 30.94, 40.59],
    Barbados: [100.0, 0.0, 0.0],
    Belarus: [99.35, 0.26, 0.4],
    Belgium: [98.25, 0.35, 1.4],
    Belize: [100.0, 0.0, 0.0],
    Benin: [80.74, 7.49, 11.76],
    Bhutan: [99.3, 0.3, 0.4],
    Bolivia: [87.76, 5.32, 6.92],
    Bosnia: [100.0, 0.0, 0.0],
    Botswana: [98.87, 0.44, 0.69],
    Brazil: [50.88, 23.04, 26.08],
    Brunei: [100.0, 0.0, 0.0],
    Bulgaria: [98.48, 0.74, 0.78],
    Burkina: [66.94, 11.86, 21.19],
    Burundi: [83.21, 6.64, 10.15],
    "Côte d’Ivoire": [73.78, 10.87, 15.35],
    "Cabo Verde": [100.0, 0.0, 0.0],
    Cameroon: [67.63, 12.6, 19.77],
    Canada: [94.17, 2.91, 2.91],
    "Central African Republic": [89.04, 4.41, 6.55],
    Chad: [64.93, 12.79, 22.27],
    Chile: [93.82, 2.95, 3.23],
    China: [10.26, 41.03, 48.7],
    Colombia : [80.42, 8.98, 10.6],
    Comoros: [98.49, 0.69, 0.82],
    Congo: [94.29, 2.3, 3.41],
    "Cook Islands": [0.0, 0.0, 0.0],
    "Costa Rica": [97.2, 1.4, 1.4],
    Croatia: [100.0, 0.0, 0.0],
    Cuba: [96.64, 1.68, 1.68],
    Cyprus: [100.0, 0.0, 0.0],
    Czechia: [100.0, 0.0, 0.0],
    "Democratic People's Republic of Korea": [87.61, 5.41, 6.98],
    "Democratic Republic of the Congo": [32.23, 28.48, 39.29],
    Denmark: [100.0, 0.0, 0.0],
    Djibouti: [98.81, 0.52, 0.67],
    Dominica: [0.0, 0.0, 0.0],
    "Dominican Republic": [90.97, 4.08, 4.95],
    Ecuador: [89.12, 4.97, 5.9],
    Egypt: [57.94, 19.1, 22.96],
    "El Salvador": [96.61, 1.6, 1.79],
    "Equatorial Guinea": [97.56, 1.05, 1.4],
    Eritrea: [95.29, 1.95, 2.76],
    Estonia: [100.0, 0.0, 0.0],
    Ethiopia: [37.48, 24.65, 37.87],
    Fiji: [100.0, 0.0, 0.0],
    Finland: [100.0, 0.0, 0.0],
    France: [91.98, 3.69, 4.32],
    Gabon: [97.78, 0.89, 1.33],
    Gambia: [96.64, 1.16, 2.2],
    Georgia: [97.92, 1.01, 1.06],
    Germany: [92.53, 3.25, 4.22],
    Ghana: [64.27, 14.39, 21.35],
    Greece: [99.16, 0.25, 0.59],
    Grenada: [100.0, 0.0, 0.0],
    Guatemala: [81.77, 8.18, 10.05],
    Guinea: [76.65, 9.09, 14.27],
    "Guinea-Bissau": [93.02, 2.68, 4.3],
    Guyana: [99.24, 0.27, 0.49],
    Haiti: [80.1, 8.09, 11.81],
    Honduras: [93.23, 3.04, 3.73],
    Hungary: [99.03, 0.38, 0.59],
    Iceland: [100.0, 0.0, 0.0],
    India: [4.41, 41.09, 54.5],
    Indonesia: [33.02, 29.98, 37.0],
    Iran: [66.1, 15.56, 18.34],
    Iraq: [66.4, 15.14, 18.45],
    Ireland: [100.0, 0.0, 0.0],
    Israel: [96.85, 1.53, 1.63],
    Italy: [92.63, 3.42, 3.95],
    Jamaica: [98.6, 0.7, 0.7],
    Japan: [89.26, 4.49, 6.25],
    Jordan: [93.46, 3.27, 3.27],
    Kazakhstan: [93.86, 2.88, 3.26],
    Kenya: [67.94, 12.84, 19.22],
    Kiribati: [100.0, 0.0, 0.0],
    Kuwait: [98.23, 0.59, 1.18],
    Kyrgyzstan: [95.66, 2.07, 2.27],
    "Lao People's Democratic Republic": [88.6, 4.77, 6.63],
    Latvia: [100.0, 0.0, 0.0],
    Lebanon: [97.03, 1.49, 1.49],
    Lesotho: [98.07, 0.8, 1.13],
    Liberia: [90.66, 3.92, 5.42],
    Libya: [96.75, 1.52, 1.73],
    Lithuania: [100.0, 0.0, 0.0],
    Luxembourg: [100.0, 0.0, 0.0],
    Madagascar: [72.67, 11.1, 16.24],
    Malawi: [81.57, 7.14, 11.29],
    Malaysia: [94.1, 2.63, 3.27],
    Maldives: [100.0, 0.0, 0.0],
    Mali: [57.01, 15.78, 27.22],
    Malta: [100.0, 0.0, 0.0],
    "Marshall Islands": [0.0, 0.0, 0.0],
    Mauritania: [89.01, 4.35, 6.64],
    Mauritius: [100.0, 0.0, 0.0],
    Mexico: [56.32, 20.1, 23.58],
    Micronesia: [100.0, 0.0, 0.0],
    Monaco: [0.0, 0.0, 0.0],
    Mongolia: [98.45, 0.69, 0.86],
    Montenegro: [100.0, 0.0, 0.0],
    Morocco: [67.3, 15.11, 17.59],
    Mozambique: [55.44, 18.27, 26.28],
    Myanmar: [53.6, 19.67, 26.73],
    Namibia: [97.91, 0.9, 1.19],
    Nauru: [0.0, 0.0, 0.0],
    Nepal: [68.65, 13.58, 17.77],
    Netherlands: [96.86, 1.57, 1.57],
    "New Zealand": [100.0, 0.0, 0.0],
    Nicaragua: [96.01, 1.81, 2.18],
    Niger: [59.46, 13.51, 27.03],
    Nigeria: [15.19, 32.74, 52.07],
    Niue: [0.0, 0.0, 0.0],
    Norway: [100.0, 0.0, 0.0],
    Oman: [97.13, 1.43, 1.43],
    Pakistan: [15.67, 37.43, 46.9],
    Palau: [0.0, 0.0, 0.0],
    Panama: [97.63, 0.95, 1.42],
    "Papua New Guinea": [91.62, 3.65, 4.73],
    Paraguay: [95.32, 2.17, 2.51],
    Peru: [81.97, 7.91, 10.13],
    Philippines: [60.89, 17.09, 22.02],
    Poland: [95.61, 2.0, 2.39],
    Portugal: [99.05, 0.32, 0.63],
    Qatar: [100.0, 0.0, 0.0],
    "Republic of Korea": [94.2, 2.63, 3.17],
    "Republic of Moldova": [99.03, 0.47, 0.5],
    Romania: [96.26, 1.73, 2.0],
    "Russian Federation": [86.18, 6.4, 7.41],
    Rwanda: [82.37, 6.93, 10.7],
    "Saint Kitts and Nevis": [0.0, 0.0, 0.0],
    "Saint Lucia": [100.0, 0.0, 0.0],
    "Saint Vincent and the Grenadines": [100.0, 0.0, 0.0],
    Samoa: [100.0, 0.0, 0.0],
    "San Marino": [0.0, 0.0, 0.0],
    "Sao Tome and Principe": [100.0, 0.0, 0.0],
    "Saudi Arabia": [73.67, 12.19, 14.13],
    Senegal: [74.72, 9.57, 15.71],
    Serbia: [98.44, 0.75, 0.8],
    Seychelles: [100.0, 0.0, 0.0],
    "Sierra Leone": [83.75, 6.45, 9.8],
    Singapore: [100.0, 0.0, 0.0],
    Slovakia: [99.89, 0.0, 0.11],
    Slovenia: [100.0, 0.0, 0.0],
    "Solomon Islands": [100.0, 0.0, 0.0],
    Somalia: [70.83, 11.15, 18.02],
    "South Africa": [77.69, 9.16, 13.14],
    "South Sudan": [82.99, 6.65, 10.36],
    Spain: [94.79, 2.42, 2.79],
    "Sri Lanka": [94.29, 2.61, 3.1],
    Sudan: [59.84, 16.09, 24.06],
    Suriname: [100.0, 0.0, 0.0],
    Swaziland: [98.17, 0.76, 1.07],
    Sweden: [100.0, 0.0, 0.0],
    Switzerland: [100.0, 0.0, 0.0],
    "Syrian Arab Republic": [88.83, 5.09, 6.08],
    Tajikistan: [88.34, 5.32, 6.34],
    Thailand: [85.93, 6.5, 7.57],
    "The former Yugoslav republic of Macedonia": [100.0, 0.0, 0.0],
    "Timor-Leste": [96.94, 1.35, 1.71],
    Togo: [89.73, 4.09, 6.18],
    Tonga: [100.0, 0.0, 0.0],
    "Trinidad and Tobago": [99.85, 0.0, 0.15],
    Tunisia: [72.99, 12.65, 14.36],
    Turkey: [62.44, 17.1, 20.47],
    Turkmenistan: [93.63, 2.86, 3.51],
    Tuvalu: [0.0, 0.0, 0.0],
    Uganda: [56.77, 16.96, 26.26],
    Ukraine: [94.93, 2.34, 2.74],
    "United Arab Emirates": [97.1, 1.45, 1.45],
    "United Kingdom of Great Britain and Northern Ireland": [90.15, 4.64, 5.2],
    "United Republic of Tanzania": [56.08, 17.55, 26.38],
    "United States of America": [50.54, 22.75, 26.71],
    Uruguay: [98.92, 0.46, 0.62],
    Uzbekistan: [79.51, 9.44, 11.05],
    Vanuatu: [100.0, 0.0, 0.0],
    Venezuela: [89.01, 5.12, 5.87],
    "Viet Nam": [65.83, 15.18, 18.99],
    Yemen: [69.95, 13.0, 17.05],
    Zambia: [80.5, 7.6, 11.9],
    Zimbabwe: [87.28, 5.01, 7.7],



    // Add more countries and data arrays here
};

let currentCountry = Object.keys(dataByCountry)[0];
let chart;

function updatePieChart() {
    const selectElement = document.getElementById("country-select");
    currentCountry = selectElement.value;
    drawPieChart();
}

function drawPieChart() {
    const chartData = dataByCountry[currentCountry];

    if (chart) {
        chart.data.datasets[0].data = chartData;
        chart.update();
    } else {
        chart = new Chart(document.getElementById("pie-chart"), {
            type: 'pie',
            data: {
                labels: ["Adult Mortality", "Infant Deaths", "Under-five Deaths"],
                datasets: [{
                    backgroundColor: ["#b22222", "#2eabf9", "#4f47b3"],
                    data: chartData
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                       text: 'Top Three Primary Factors Influencing Life Expectancy - ' + currentCountry,
                        font: {
                            size: 18 // Adjust the font size as needed
                        }
                    },
                    legend: {
                        position: 'bottom',
                        labels: {
                            align: 'start',
                            padding: 10,
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label;
                                const value = context.parsed.toFixed(2) + '%';
                                return label + ': ' + value;
                            }
                        }
                    }
                }
            }
        });
    }
}
// Initial chart rendering
drawPieChart();