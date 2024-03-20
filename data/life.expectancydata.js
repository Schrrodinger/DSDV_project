let lifeExpectancyData = {};

fetch('path_to/all_years_data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            if (!lifeExpectancyData[item.Country]) {
                lifeExpectancyData[item.Country] = {};
            }
            lifeExpectancyData[item.Country][item.Year] = item['Life expectancy '];
        });
        console.log(lifeExpectancyData); // For debugging
        // Here you can call a function to update the map with this data
    })
    .catch(error => console.error('Error loading the life expectancy data:', error));
