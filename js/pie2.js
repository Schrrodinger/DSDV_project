const dataByCountry = {
    Afghanistan: [39.07, 29.27, 31.66],
    Albania: [33.31, 33.35, 33.33],
    Algeria: [30.01, 34.97, 35.02],
    Angola: [44.40, 27.34, 28.26],
    Antigua: [33.23, 33.15, 33.62],
    Argentina: [30.43, 34.97, 34.60],
    Armenia: [33.16, 33.75, 33.09],
    Australia: [34.79, 32.58, 32.63],
    Austria: [31.94, 33.88, 34.18],
    Azerbaijan: [28.14, 34.45, 37.41],
    Bahamas: [30.43, 34.65, 34.92],
    Bahrain: [33.35, 33.31, 33.33],
    Bangladesh: [30.27, 33.85, 35.88],
    Barbados: [33.00, 31.60, 35.39],
    Belarus: [32.82, 33.16, 34.02],
    Belgium: [27.64, 36.26, 36.10],
    Belize: [33.19, 33.46, 33.35],
    Benin: [32.35, 33.76, 33.89],
    Bhutan: [33.93, 32.22, 33.84],
    Bolivia: [32.90, 32.42, 34.68],
    Bosnia: [32.06, 33.93, 34.01],
    Botswana: [31.26, 34.44, 34.30],
    Brazil: [32.89, 33.62, 33.49],
    Brunei: [33.50, 33.37, 33.13],
    Bulgaria: [33.42, 33.33, 33.24],
    Burkina: [35.65, 30.35, 34.01],
    Burundi: [34.36, 32.99, 32.65],
    "Cabo Verde": [33.06, 34.57, 32.37],
    Cambodia: [35.39, 32.78, 31.84],
    Cameroon: [35.50, 32.95, 31.56],
    Canada: [17.96, 39.68, 42.36],
    "Central African Republic": [43.38, 27.93, 28.69],
    Chad: [48.14, 28.56, 23.30],
    Chile: [31.31, 33.31, 35.38],
    China: [30.08, 35.03, 34.89],
    Colombia: [32.59, 34.75, 32.66],
    Comoros: [36.45, 31.98, 31.57],
    Congo: [37.27, 30.55, 32.19],
    "Cook Islands": [33.33, 33.33, 33.33],
    "Costa Rica": [34.63, 30.54, 34.83],
    Croatia: [31.93, 34.06, 34.01],
    Cuba: [33.32, 34.16, 32.52],
    Cyprus: [32.09, 33.95, 33.95],
    Czechia: [32.69, 33.63, 33.68],
    "Côte d'Ivoire": [32.52, 32.99, 34.49],
    "Democratic People's Republic of Korea": [32.49, 36.54, 30.96],
    "Democratic Republic of the Congo": [39.74, 34.38, 25.88],
    Denmark: [31.50, 34.25, 34.25],
    Djibouti: [34.58, 32.66, 32.76],
    Dominica: [33.33, 33.33, 33.33],
    "Dominican Republic": [29.08, 33.77, 37.15],
    Ecuador: [31.73, 32.01, 36.26],
    Egypt: [33.33, 33.33, 33.33],
    "El Salvador": [33.68, 32.19, 34.12],
    "Equatorial Guinea": [51.85, 26.57, 21.57],
    Eritrea: [33.52, 34.33, 32.15],
    Estonia: [31.18, 34.43, 34.39],
    Ethiopia: [42.35, 30.29, 27.36],
    Fiji: [34.37, 33.76, 31.87],
    Finland: [29.29, 35.16, 35.55],
    France: [20.70, 39.69, 39.61],
    Gabon: [36.75, 32.41, 30.85],
    Gambia: [34.48, 33.53, 31.99],
    Georgia: [31.93, 33.56, 34.51],
    Germany: [29.54, 36.17, 34.29],
    Ghana: [31.16, 35.56, 33.28],
    Greece: [32.11, 33.01, 34.88],
    Grenada: [33.14, 33.34, 33.52],
    Guatemala: [35.17, 29.50, 35.33],
    Guinea: [40.55, 31.08, 28.37],
    "Guinea-Bissau": [35.88, 34.24, 29.88],
    Guyana: [33.28, 33.28, 33.44],
    Haiti: [41.89, 30.71, 27.40],
    Honduras: [33.23, 33.34, 33.43],
    Hungary: [29.02, 35.48, 35.50],
    Iceland: [31.08, 34.46, 34.46],
    India: [25.38, 38.01, 36.61],
    Indonesia: [35.35, 29.88, 34.77],
    Iran: [33.21, 33.38, 33.42],
    Iraq: [34.83, 29.87, 35.30],
    Ireland: [32.56, 33.72, 33.72],
    Israel: [34.71, 33.58, 31.71],
    Italy: [33.35, 33.57, 33.09],
    Jamaica: [31.62, 34.25, 34.13],
    Japan: [29.63, 35.14, 35.23],
    Jordan: [33.32, 33.36, 33.32],
    Kazakhstan: [33.41, 33.48, 33.11],
    Kenya: [34.88, 32.49, 32.63],
    Kiribati: [33.36, 33.39, 33.25],
    Kuwait: [33.30, 33.30, 33.40],
    Kyrgyzstan: [30.78, 34.49, 34.73],
    "Lao People's Democratic Republic": [34.79, 31.88, 33.34],
    Latvia: [31.88, 34.07, 34.05],
    Lebanon: [33.22, 33.57, 33.22],
    Lesotho: [33.63, 30.60, 35.77],
    Liberia: [39.38, 35.99, 24.64],
    Libya: [33.29, 33.35, 33.35],
    Lithuania: [34.11, 31.97, 33.93],
    Luxembourg: [31.92, 33.89, 34.19],
    Madagascar: [35.10, 32.10, 32.80],
    Malawi: [33.88, 34.10, 32.02],
    Malaysia: [33.24, 33.37, 33.39],
    Maldives: [33.33, 33.33, 33.33],
    Mali: [35.00, 31.37, 33.63],
    Malta: [31.08, 34.48, 34.44],
    "Marshall Islands": [4.82, 47.59, 47.59],
    Mauritania: [34.51, 33.52, 31.96],
    Mauritius: [33.28, 33.39, 33.33],
    Mexico: [33.19, 33.41, 33.39],
    Micronesia: [31.47, 34.37, 34.16],
    Monaco: [33.33, 33.33, 33.33],
    Mongolia: [33.33, 33.37, 33.30],
    Montenegro: [26.61, 36.69, 36.70],
    Morocco: [31.01, 34.45, 34.54],
    Mozambique: [34.04, 34.20, 31.75],
    Myanmar: [32.33, 33.43, 34.23],
    Namibia: [33.87, 32.05, 34.09],
    Nauru: [33.33, 33.33, 33.33],
    Nepal: [32.35, 32.74, 34.90],
    Netherlands: [26.75, 36.63, 36.63],
    "New Zealand": [30.52, 38.76, 30.71],
    Nicaragua: [33.79, 32.43, 33.79],
    Niger: [40.63, 29.86, 29.51],
    Nigeria: [40.46, 30.51, 29.03],
    Niue: [33.33, 33.33, 33.33],
    Norway: [30.90, 35.53, 33.57],
    Oman: [33.38, 33.27, 33.35],
    Pakistan: [34.09, 31.32, 34.59],
    Palau: [33.33, 33.33, 33.33],
    Panama: [32.37, 34.78, 32.85],
    "Papua New Guinea": [30.33, 33.29, 36.38],
    Paraguay: [32.84, 31.24, 35.92],
    Peru: [33.68, 33.53, 32.80],
    Philippines: [28.31, 35.63, 36.06],
    Poland: [33.25, 33.03, 33.72],
    Portugal: [31.17, 34.33, 34.50],
    Qatar: [33.88, 34.16, 31.96],
    "Republic of Korea": [33.68, 32.31, 34.01],
    "Republic of Moldova": [36.16, 36.13, 27.71],
    Romania: [32.61, 33.65, 33.74],
    "Russian Federation": [32.00, 34.08, 33.92],
    Rwanda: [34.60, 32.54, 32.86],
    "Saint Kitts and Nevis": [33.56, 33.22, 33.22],
    "Saint Lucia": [34.34, 33.03, 32.62],
    "Saint Vincent and the Grenadines": [31.62, 34.11, 34.26],
    Samoa: [31.37, 32.69, 35.94],
    "San Marino": [33.33, 33.33, 33.33],
    "Sao Tome and Principe": [30.86, 33.72, 35.42],
    "Saudi Arabia": [33.33, 33.33, 33.35],
    Senegal: [35.61, 31.59, 32.79],
    Serbia: [31.96, 34.26, 33.78],
    Seychelles: [33.38, 33.31, 33.31],
    "Sierra Leone": [36.40, 31.72, 31.88],
    Singapore: [33.27, 33.36, 33.38],
    Slovakia: [33.34, 33.30, 33.36],
    Slovenia: [29.85, 35.11, 35.04],
    "Solomon Islands": [32.52, 36.30, 31.18],
    Somalia: [55.47, 22.46, 22.08],
    "South Africa": [32.92, 32.33, 34.75],
    "South Sudan": [35.44, 32.10, 32.46],
    Spain: [32.34, 33.83, 33.83],
    "Sri Lanka": [31.09, 34.44, 34.47],
    Sudan: [34.16, 32.89, 32.95],
    Suriname: [34.29, 31.97, 33.74],
    Swaziland: [30.55, 35.78, 33.67],
    Sweden: [27.38, 36.31, 36.31],
    Switzerland: [29.88, 35.21, 34.91],
    "Syrian Arab Republic": [36.15, 36.54, 27.31],
    Tajikistan: [32.11, 33.76, 34.12],
    Thailand: [33.05, 33.50, 33.45],
    "The former Yugoslav republic of Macedonia": [30.29, 34.97, 34.74],
    "Timor-Leste": [37.26, 31.17, 31.57],
    Togo: [35.76, 30.50, 33.74],
    Tonga: [33.90, 34.52, 31.57],
    "Trinidad and Tobago": [28.93, 38.01, 33.07],
    Tunisia: [33.12, 33.44, 33.44],
    Turkey: [35.02, 32.50, 32.48],
    Turkmenistan: [33.16, 33.28, 33.56],
    Tuvalu: [33.33, 33.33, 33.33],
    Uganda: [33.49, 33.40, 33.11],
    Ukraine: [26.51, 39.52, 33.97],
    "United Arab Emirates": [33.11, 33.52, 33.37],
    "United Kingdom of Great Britain and Northern Ireland": [30.35, 34.83, 34.83],
    "United Republic of Tanzania": [32.01, 35.86, 32.12],
    "United States of America": [31.46, 31.75, 36.78],
    Uruguay: [33.96, 33.94, 32.10],
    Uzbekistan: [32.26, 33.89, 33.85],
    Vanuatu: [30.94, 36.49, 32.56],
    Venezuela: [31.63, 35.66, 32.71],
    "Viet Nam": [31.61, 34.78, 33.61],
    Yemen: [28.49, 34.35, 37.16],
    Zambia: [34.59, 30.38, 35.04],
    Zimbabwe: [31.87, 34.16, 33.96],



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
                labels: ["Hepatitis B", "Polio", "Diphtheria"],
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
                       text: 'Immunization Coverage Among 1-year-old - ' + currentCountry,
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
