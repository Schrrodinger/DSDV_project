
// Set the dimensions and margins of the graph
const margin = { top: 200, right: 100, bottom: 30, left: 220 },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

// Set the ranges
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// Define the axes
var xAxis = d3.axisBottom(x);
var yAxis = d3.axisLeft(y);

// Define the line
var valueline = d3.line()
    .x(function(d) { return x(d.Bmi); })
    .y(function(d) { return y(d['Life.expectancy']); });

// Adds the svg canvas
var svg = d3.select("#scatter-plot")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top +  ")");

// Define the div for the tooltip
var tooltip = d3.select("body").append("div") 
    .attr("class", "tooltip")       
    .style("opacity", 0);

// Load the data
var data = [
    {
      "Country": "Afghanistan",
      "Year": "2015",
      "BMI": "19.1",
      "Life.expectancy": "65"
    },
    {
      "Country": "Afghanistan",
      "Year": "2014",
      "BMI": "18.6",
      "Life.expectancy": "59.9"
    },
    {
      "Country": "Afghanistan",
      "Year": "2013",
      "BMI": "18.1",
      "Life.expectancy": "59.9"
    },
    {
      "Country": "Afghanistan",
      "Year": "2012",
      "BMI": "17.6",
      "Life.expectancy": "59.5"
    },
    {
      "Country": "Afghanistan",
      "Year": "2011",
      "BMI": "17.2",
      "Life.expectancy": "59.2"
    },
    {
      "Country": "Afghanistan",
      "Year": "2010",
      "BMI": "16.7",
      "Life.expectancy": "58.8"
    },
    {
      "Country": "Afghanistan",
      "Year": "2009",
      "BMI": "16.2",
      "Life.expectancy": "58.6"
    },
    {
      "Country": "Afghanistan",
      "Year": "2008",
      "BMI": "15.7",
      "Life.expectancy": "58.1"
    },
    {
      "Country": "Afghanistan",
      "Year": "2007",
      "BMI": "15.2",
      "Life.expectancy": "57.5"
    },
    {
      "Country": "Afghanistan",
      "Year": "2006",
      "BMI": "14.7",
      "Life.expectancy": "57.3"
    },
    {
      "Country": "Afghanistan",
      "Year": "2005",
      "BMI": "14.2",
      "Life.expectancy": "57.3"
    },
    {
      "Country": "Afghanistan",
      "Year": "2004",
      "BMI": "13.8",
      "Life.expectancy": "57"
    },
    {
      "Country": "Afghanistan",
      "Year": "2003",
      "BMI": "13.4",
      "Life.expectancy": "56.7"
    },
    {
      "Country": "Afghanistan",
      "Year": "2002",
      "BMI": "13",
      "Life.expectancy": "56.2"
    },
    {
      "Country": "Afghanistan",
      "Year": "2001",
      "BMI": "12.6",
      "Life.expectancy": "55.3"
    },
    {
      "Country": "Afghanistan",
      "Year": "2000",
      "BMI": "12.2",
      "Life.expectancy": "54.8"
    },
    {
      "Country": "Albania",
      "Year": "2015",
      "BMI": "58",
      "Life.expectancy": "77.8"
    },
    {
      "Country": "Albania",
      "Year": "2014",
      "BMI": "57.2",
      "Life.expectancy": "77.5"
    },
    {
      "Country": "Albania",
      "Year": "2013",
      "BMI": "56.5",
      "Life.expectancy": "77.2"
    },
    {
      "Country": "Albania",
      "Year": "2012",
      "BMI": "55.8",
      "Life.expectancy": "76.9"
    },
    {
      "Country": "Albania",
      "Year": "2011",
      "BMI": "55.1",
      "Life.expectancy": "76.6"
    },
    {
      "Country": "Albania",
      "Year": "2010",
      "BMI": "54.3",
      "Life.expectancy": "76.2"
    },
    {
      "Country": "Albania",
      "Year": "2009",
      "BMI": "53.5",
      "Life.expectancy": "76.1"
    },
    {
      "Country": "Albania",
      "Year": "2008",
      "BMI": "52.6",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "Albania",
      "Year": "2007",
      "BMI": "51.7",
      "Life.expectancy": "75.9"
    },
    {
      "Country": "Albania",
      "Year": "2006",
      "BMI": "5.8",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Albania",
      "Year": "2005",
      "BMI": "49.9",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Albania",
      "Year": "2004",
      "BMI": "48.9",
      "Life.expectancy": "73"
    },
    {
      "Country": "Albania",
      "Year": "2003",
      "BMI": "47.9",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Albania",
      "Year": "2002",
      "BMI": "46.9",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Albania",
      "Year": "2001",
      "BMI": "46",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Albania",
      "Year": "2000",
      "BMI": "45",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Algeria",
      "Year": "2015",
      "BMI": "59.5",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "Algeria",
      "Year": "2014",
      "BMI": "58.4",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Algeria",
      "Year": "2013",
      "BMI": "57.2",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "Algeria",
      "Year": "2012",
      "BMI": "56.1",
      "Life.expectancy": "75.1"
    },
    {
      "Country": "Algeria",
      "Year": "2011",
      "BMI": "55",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Algeria",
      "Year": "2010",
      "BMI": "53.9",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Algeria",
      "Year": "2009",
      "BMI": "52.8",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Algeria",
      "Year": "2008",
      "BMI": "51.8",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Algeria",
      "Year": "2007",
      "BMI": "5.8",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Algeria",
      "Year": "2006",
      "BMI": "49.8",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Algeria",
      "Year": "2005",
      "BMI": "48.9",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Algeria",
      "Year": "2004",
      "BMI": "47.9",
      "Life.expectancy": "72.3"
    },
    {
      "Country": "Algeria",
      "Year": "2003",
      "BMI": "47",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "Algeria",
      "Year": "2002",
      "BMI": "46.1",
      "Life.expectancy": "71.6"
    },
    {
      "Country": "Algeria",
      "Year": "2001",
      "BMI": "45.3",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "Algeria",
      "Year": "2000",
      "BMI": "44.4",
      "Life.expectancy": "71.3"
    },
    {
      "Country": "Angola",
      "Year": "2015",
      "BMI": "23.3",
      "Life.expectancy": "52.4"
    },
    {
      "Country": "Angola",
      "Year": "2014",
      "BMI": "22.7",
      "Life.expectancy": "51.7"
    },
    {
      "Country": "Angola",
      "Year": "2013",
      "BMI": "22.1",
      "Life.expectancy": "51.1"
    },
    {
      "Country": "Angola",
      "Year": "2012",
      "BMI": "21.5",
      "Life.expectancy": "56"
    },
    {
      "Country": "Angola",
      "Year": "2011",
      "BMI": "21",
      "Life.expectancy": "51"
    },
    {
      "Country": "Angola",
      "Year": "2010",
      "BMI": "2.4",
      "Life.expectancy": "49.6"
    },
    {
      "Country": "Angola",
      "Year": "2009",
      "BMI": "19.8",
      "Life.expectancy": "49.1"
    },
    {
      "Country": "Angola",
      "Year": "2008",
      "BMI": "19.3",
      "Life.expectancy": "48.7"
    },
    {
      "Country": "Angola",
      "Year": "2007",
      "BMI": "18.8",
      "Life.expectancy": "48.2"
    },
    {
      "Country": "Angola",
      "Year": "2006",
      "BMI": "18.2",
      "Life.expectancy": "47.7"
    },
    {
      "Country": "Angola",
      "Year": "2005",
      "BMI": "17.7",
      "Life.expectancy": "47.4"
    },
    {
      "Country": "Angola",
      "Year": "2004",
      "BMI": "17.2",
      "Life.expectancy": "47.1"
    },
    {
      "Country": "Angola",
      "Year": "2003",
      "BMI": "16.8",
      "Life.expectancy": "46.8"
    },
    {
      "Country": "Angola",
      "Year": "2002",
      "BMI": "16.3",
      "Life.expectancy": "46.5"
    },
    {
      "Country": "Angola",
      "Year": "2001",
      "BMI": "15.8",
      "Life.expectancy": "45.7"
    },
    {
      "Country": "Angola",
      "Year": "2000",
      "BMI": "15.4",
      "Life.expectancy": "45.3"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2015",
      "BMI": "47.7",
      "Life.expectancy": "76.4"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2014",
      "BMI": "47",
      "Life.expectancy": "76.2"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2013",
      "BMI": "46.4",
      "Life.expectancy": "76.1"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2012",
      "BMI": "45.7",
      "Life.expectancy": "75.9"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2011",
      "BMI": "45.1",
      "Life.expectancy": "75.7"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2010",
      "BMI": "44.4",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2009",
      "BMI": "43.8",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2008",
      "BMI": "43.2",
      "Life.expectancy": "75.2"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2007",
      "BMI": "42.6",
      "Life.expectancy": "75"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2006",
      "BMI": "42",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2005",
      "BMI": "41.4",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2004",
      "BMI": "4.8",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2003",
      "BMI": "4.1",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2002",
      "BMI": "39.5",
      "Life.expectancy": "74"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2001",
      "BMI": "38.9",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2000",
      "BMI": "38.2",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Argentina",
      "Year": "2015",
      "BMI": "62.8",
      "Life.expectancy": "76.3"
    },
    {
      "Country": "Argentina",
      "Year": "2014",
      "BMI": "62.2",
      "Life.expectancy": "76.2"
    },
    {
      "Country": "Argentina",
      "Year": "2013",
      "BMI": "61.6",
      "Life.expectancy": "76"
    },
    {
      "Country": "Argentina",
      "Year": "2012",
      "BMI": "61",
      "Life.expectancy": "75.9"
    },
    {
      "Country": "Argentina",
      "Year": "2011",
      "BMI": "6.4",
      "Life.expectancy": "75.7"
    },
    {
      "Country": "Argentina",
      "Year": "2010",
      "BMI": "59.8",
      "Life.expectancy": "75.5"
    },
    {
      "Country": "Argentina",
      "Year": "2009",
      "BMI": "59.2",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "Argentina",
      "Year": "2008",
      "BMI": "58.6",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Argentina",
      "Year": "2007",
      "BMI": "58",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Argentina",
      "Year": "2006",
      "BMI": "57.5",
      "Life.expectancy": "75.2"
    },
    {
      "Country": "Argentina",
      "Year": "2005",
      "BMI": "56.9",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Argentina",
      "Year": "2004",
      "BMI": "56.3",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Argentina",
      "Year": "2003",
      "BMI": "55.7",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Argentina",
      "Year": "2002",
      "BMI": "55.1",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Argentina",
      "Year": "2001",
      "BMI": "54.6",
      "Life.expectancy": "74"
    },
    {
      "Country": "Argentina",
      "Year": "2000",
      "BMI": "54",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Armenia",
      "Year": "2015",
      "BMI": "54.9",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Armenia",
      "Year": "2014",
      "BMI": "54.1",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Armenia",
      "Year": "2013",
      "BMI": "53.3",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Armenia",
      "Year": "2012",
      "BMI": "52.6",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Armenia",
      "Year": "2011",
      "BMI": "51.9",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Armenia",
      "Year": "2010",
      "BMI": "51.2",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Armenia",
      "Year": "2009",
      "BMI": "5.7",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Armenia",
      "Year": "2008",
      "BMI": "5.1",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Armenia",
      "Year": "2007",
      "BMI": "49.7",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Armenia",
      "Year": "2006",
      "BMI": "49.2",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Armenia",
      "Year": "2005",
      "BMI": "48.8",
      "Life.expectancy": "73"
    },
    {
      "Country": "Armenia",
      "Year": "2004",
      "BMI": "48.4",
      "Life.expectancy": "73"
    },
    {
      "Country": "Armenia",
      "Year": "2003",
      "BMI": "48.1",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Armenia",
      "Year": "2002",
      "BMI": "47.8",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Armenia",
      "Year": "2001",
      "BMI": "47.4",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Armenia",
      "Year": "2000",
      "BMI": "47.1",
      "Life.expectancy": "72"
    },
    {
      "Country": "Australia",
      "Year": "2015",
      "BMI": "66.6",
      "Life.expectancy": "82.8"
    },
    {
      "Country": "Australia",
      "Year": "2014",
      "BMI": "66.1",
      "Life.expectancy": "82.7"
    },
    {
      "Country": "Australia",
      "Year": "2013",
      "BMI": "65.5",
      "Life.expectancy": "82.5"
    },
    {
      "Country": "Australia",
      "Year": "2012",
      "BMI": "65",
      "Life.expectancy": "82.3"
    },
    {
      "Country": "Australia",
      "Year": "2011",
      "BMI": "64.4",
      "Life.expectancy": "82"
    },
    {
      "Country": "Australia",
      "Year": "2010",
      "BMI": "63.9",
      "Life.expectancy": "81.9"
    },
    {
      "Country": "Australia",
      "Year": "2009",
      "BMI": "63.4",
      "Life.expectancy": "81.7"
    },
    {
      "Country": "Australia",
      "Year": "2008",
      "BMI": "62.9",
      "Life.expectancy": "81.3"
    },
    {
      "Country": "Australia",
      "Year": "2007",
      "BMI": "62.5",
      "Life.expectancy": "81.3"
    },
    {
      "Country": "Australia",
      "Year": "2006",
      "BMI": "62",
      "Life.expectancy": "81.2"
    },
    {
      "Country": "Australia",
      "Year": "2005",
      "BMI": "61.5",
      "Life.expectancy": "81"
    },
    {
      "Country": "Australia",
      "Year": "2004",
      "BMI": "6.9",
      "Life.expectancy": "86"
    },
    {
      "Country": "Australia",
      "Year": "2003",
      "BMI": "6.3",
      "Life.expectancy": "83"
    },
    {
      "Country": "Australia",
      "Year": "2002",
      "BMI": "59.6",
      "Life.expectancy": "79.9"
    },
    {
      "Country": "Australia",
      "Year": "2001",
      "BMI": "59",
      "Life.expectancy": "79.9"
    },
    {
      "Country": "Australia",
      "Year": "2000",
      "BMI": "58.2",
      "Life.expectancy": "79.5"
    },
    {
      "Country": "Austria",
      "Year": "2015",
      "BMI": "57.6",
      "Life.expectancy": "81.5"
    },
    {
      "Country": "Austria",
      "Year": "2014",
      "BMI": "57.1",
      "Life.expectancy": "81.4"
    },
    {
      "Country": "Austria",
      "Year": "2013",
      "BMI": "56.6",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "Austria",
      "Year": "2012",
      "BMI": "56.1",
      "Life.expectancy": "88"
    },
    {
      "Country": "Austria",
      "Year": "2011",
      "BMI": "55.7",
      "Life.expectancy": "88"
    },
    {
      "Country": "Austria",
      "Year": "2010",
      "BMI": "55.2",
      "Life.expectancy": "84"
    },
    {
      "Country": "Austria",
      "Year": "2009",
      "BMI": "54.7",
      "Life.expectancy": "82"
    },
    {
      "Country": "Austria",
      "Year": "2008",
      "BMI": "54.2",
      "Life.expectancy": "84"
    },
    {
      "Country": "Austria",
      "Year": "2007",
      "BMI": "53.7",
      "Life.expectancy": "81"
    },
    {
      "Country": "Austria",
      "Year": "2006",
      "BMI": "53.2",
      "Life.expectancy": "79.8"
    },
    {
      "Country": "Austria",
      "Year": "2005",
      "BMI": "52.7",
      "Life.expectancy": "79.4"
    },
    {
      "Country": "Austria",
      "Year": "2004",
      "BMI": "52.2",
      "Life.expectancy": "79.3"
    },
    {
      "Country": "Austria",
      "Year": "2003",
      "BMI": "51.7",
      "Life.expectancy": "78.8"
    },
    {
      "Country": "Austria",
      "Year": "2002",
      "BMI": "51.2",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "Austria",
      "Year": "2001",
      "BMI": "5.6",
      "Life.expectancy": "78.6"
    },
    {
      "Country": "Austria",
      "Year": "2000",
      "BMI": "5.1",
      "Life.expectancy": "78.1"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2015",
      "BMI": "52.5",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2014",
      "BMI": "51.5",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2013",
      "BMI": "5.6",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2012",
      "BMI": "49.7",
      "Life.expectancy": "71.9"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2011",
      "BMI": "48.8",
      "Life.expectancy": "71.6"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2010",
      "BMI": "48",
      "Life.expectancy": "71.1"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2009",
      "BMI": "47.3",
      "Life.expectancy": "78"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2008",
      "BMI": "46.6",
      "Life.expectancy": "73"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2007",
      "BMI": "45.9",
      "Life.expectancy": "73"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2006",
      "BMI": "45.3",
      "Life.expectancy": "69.2"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2005",
      "BMI": "44.7",
      "Life.expectancy": "68.4"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2004",
      "BMI": "44.2",
      "Life.expectancy": "68.4"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2003",
      "BMI": "43.6",
      "Life.expectancy": "67.8"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2002",
      "BMI": "43.1",
      "Life.expectancy": "67.8"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2001",
      "BMI": "42.6",
      "Life.expectancy": "67.5"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2000",
      "BMI": "42.1",
      "Life.expectancy": "66.6"
    },
    {
      "Country": "Bahamas",
      "Year": "2015",
      "BMI": "64.5",
      "Life.expectancy": "76.1"
    },
    {
      "Country": "Bahamas",
      "Year": "2014",
      "BMI": "63.8",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Bahamas",
      "Year": "2013",
      "BMI": "63.2",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Bahamas",
      "Year": "2012",
      "BMI": "62.6",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Bahamas",
      "Year": "2011",
      "BMI": "62",
      "Life.expectancy": "75"
    },
    {
      "Country": "Bahamas",
      "Year": "2010",
      "BMI": "61.3",
      "Life.expectancy": "75"
    },
    {
      "Country": "Bahamas",
      "Year": "2009",
      "BMI": "6.7",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Bahamas",
      "Year": "2008",
      "BMI": "6.1",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Bahamas",
      "Year": "2007",
      "BMI": "59.4",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Bahamas",
      "Year": "2006",
      "BMI": "58.7",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Bahamas",
      "Year": "2005",
      "BMI": "58.1",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Bahamas",
      "Year": "2004",
      "BMI": "57.4",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Bahamas",
      "Year": "2003",
      "BMI": "56.7",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Bahamas",
      "Year": "2002",
      "BMI": "56",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Bahamas",
      "Year": "2001",
      "BMI": "55.2",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Bahamas",
      "Year": "2000",
      "BMI": "54.4",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Bahrain",
      "Year": "2015",
      "BMI": "63.6",
      "Life.expectancy": "76.9"
    },
    {
      "Country": "Bahrain",
      "Year": "2014",
      "BMI": "62.9",
      "Life.expectancy": "76.8"
    },
    {
      "Country": "Bahrain",
      "Year": "2013",
      "BMI": "62.2",
      "Life.expectancy": "76.7"
    },
    {
      "Country": "Bahrain",
      "Year": "2012",
      "BMI": "61.5",
      "Life.expectancy": "76.5"
    },
    {
      "Country": "Bahrain",
      "Year": "2011",
      "BMI": "6.8",
      "Life.expectancy": "76.1"
    },
    {
      "Country": "Bahrain",
      "Year": "2010",
      "BMI": "6.1",
      "Life.expectancy": "76.1"
    },
    {
      "Country": "Bahrain",
      "Year": "2009",
      "BMI": "59.3",
      "Life.expectancy": "76"
    },
    {
      "Country": "Bahrain",
      "Year": "2008",
      "BMI": "58.5",
      "Life.expectancy": "75.8"
    },
    {
      "Country": "Bahrain",
      "Year": "2007",
      "BMI": "57.6",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "Bahrain",
      "Year": "2006",
      "BMI": "56.8",
      "Life.expectancy": "75.5"
    },
    {
      "Country": "Bahrain",
      "Year": "2005",
      "BMI": "56.1",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "Bahrain",
      "Year": "2004",
      "BMI": "55.6",
      "Life.expectancy": "75.2"
    },
    {
      "Country": "Bahrain",
      "Year": "2003",
      "BMI": "55.2",
      "Life.expectancy": "75"
    },
    {
      "Country": "Bahrain",
      "Year": "2002",
      "BMI": "55",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Bahrain",
      "Year": "2001",
      "BMI": "54.8",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Bahrain",
      "Year": "2000",
      "BMI": "54.5",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Bangladesh",
      "Year": "2015",
      "BMI": "18.3",
      "Life.expectancy": "71.8"
    },
    {
      "Country": "Bangladesh",
      "Year": "2014",
      "BMI": "17.7",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "Bangladesh",
      "Year": "2013",
      "BMI": "17",
      "Life.expectancy": "71"
    },
    {
      "Country": "Bangladesh",
      "Year": "2012",
      "BMI": "16.4",
      "Life.expectancy": "77"
    },
    {
      "Country": "Bangladesh",
      "Year": "2011",
      "BMI": "15.8",
      "Life.expectancy": "73"
    },
    {
      "Country": "Bangladesh",
      "Year": "2010",
      "BMI": "15.2",
      "Life.expectancy": "69.9"
    },
    {
      "Country": "Bangladesh",
      "Year": "2009",
      "BMI": "14.6",
      "Life.expectancy": "69.5"
    },
    {
      "Country": "Bangladesh",
      "Year": "2008",
      "BMI": "14",
      "Life.expectancy": "69.1"
    },
    {
      "Country": "Bangladesh",
      "Year": "2007",
      "BMI": "13.5",
      "Life.expectancy": "68.6"
    },
    {
      "Country": "Bangladesh",
      "Year": "2006",
      "BMI": "13",
      "Life.expectancy": "68.2"
    },
    {
      "Country": "Bangladesh",
      "Year": "2005",
      "BMI": "12.5",
      "Life.expectancy": "67.8"
    },
    {
      "Country": "Bangladesh",
      "Year": "2004",
      "BMI": "12",
      "Life.expectancy": "67.3"
    },
    {
      "Country": "Bangladesh",
      "Year": "2003",
      "BMI": "11.6",
      "Life.expectancy": "66.8"
    },
    {
      "Country": "Bangladesh",
      "Year": "2002",
      "BMI": "11.2",
      "Life.expectancy": "66.3"
    },
    {
      "Country": "Bangladesh",
      "Year": "2001",
      "BMI": "1.8",
      "Life.expectancy": "65.8"
    },
    {
      "Country": "Bangladesh",
      "Year": "2000",
      "BMI": "1.4",
      "Life.expectancy": "65.3"
    },
    {
      "Country": "Barbados",
      "Year": "2015",
      "BMI": "54.5",
      "Life.expectancy": "75.5"
    },
    {
      "Country": "Barbados",
      "Year": "2014",
      "BMI": "53.7",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Barbados",
      "Year": "2013",
      "BMI": "53",
      "Life.expectancy": "75.2"
    },
    {
      "Country": "Barbados",
      "Year": "2012",
      "BMI": "52.2",
      "Life.expectancy": "75.1"
    },
    {
      "Country": "Barbados",
      "Year": "2011",
      "BMI": "51.4",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Barbados",
      "Year": "2010",
      "BMI": "5.7",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Barbados",
      "Year": "2009",
      "BMI": "49.9",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Barbados",
      "Year": "2008",
      "BMI": "49.2",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Barbados",
      "Year": "2007",
      "BMI": "48.4",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Barbados",
      "Year": "2006",
      "BMI": "47.7",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Barbados",
      "Year": "2005",
      "BMI": "46.9",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Barbados",
      "Year": "2004",
      "BMI": "46.2",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Barbados",
      "Year": "2003",
      "BMI": "45.4",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Barbados",
      "Year": "2002",
      "BMI": "44.6",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Barbados",
      "Year": "2001",
      "BMI": "43.8",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Barbados",
      "Year": "2000",
      "BMI": "43",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Belarus",
      "Year": "2015",
      "BMI": "62.3",
      "Life.expectancy": "72.3"
    },
    {
      "Country": "Belarus",
      "Year": "2014",
      "BMI": "61.7",
      "Life.expectancy": "72"
    },
    {
      "Country": "Belarus",
      "Year": "2013",
      "BMI": "61.1",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "Belarus",
      "Year": "2012",
      "BMI": "6.5",
      "Life.expectancy": "71.9"
    },
    {
      "Country": "Belarus",
      "Year": "2011",
      "BMI": "59.9",
      "Life.expectancy": "72"
    },
    {
      "Country": "Belarus",
      "Year": "2010",
      "BMI": "59.3",
      "Life.expectancy": "73"
    },
    {
      "Country": "Belarus",
      "Year": "2009",
      "BMI": "58.7",
      "Life.expectancy": "70"
    },
    {
      "Country": "Belarus",
      "Year": "2008",
      "BMI": "58.2",
      "Life.expectancy": "70"
    },
    {
      "Country": "Belarus",
      "Year": "2007",
      "BMI": "57.7",
      "Life.expectancy": "69.8"
    },
    {
      "Country": "Belarus",
      "Year": "2006",
      "BMI": "57.2",
      "Life.expectancy": "68.9"
    },
    {
      "Country": "Belarus",
      "Year": "2005",
      "BMI": "56.7",
      "Life.expectancy": "68.1"
    },
    {
      "Country": "Belarus",
      "Year": "2004",
      "BMI": "56.2",
      "Life.expectancy": "68.2"
    },
    {
      "Country": "Belarus",
      "Year": "2003",
      "BMI": "55.8",
      "Life.expectancy": "67.7"
    },
    {
      "Country": "Belarus",
      "Year": "2002",
      "BMI": "55.3",
      "Life.expectancy": "67.2"
    },
    {
      "Country": "Belarus",
      "Year": "2001",
      "BMI": "54.9",
      "Life.expectancy": "67.7"
    },
    {
      "Country": "Belarus",
      "Year": "2000",
      "BMI": "54.4",
      "Life.expectancy": "68"
    },
    {
      "Country": "Belgium",
      "Year": "2015",
      "BMI": "63.7",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "Belgium",
      "Year": "2014",
      "BMI": "63.4",
      "Life.expectancy": "89"
    },
    {
      "Country": "Belgium",
      "Year": "2013",
      "BMI": "63",
      "Life.expectancy": "87"
    },
    {
      "Country": "Belgium",
      "Year": "2012",
      "BMI": "62.6",
      "Life.expectancy": "83"
    },
    {
      "Country": "Belgium",
      "Year": "2011",
      "BMI": "62.3",
      "Life.expectancy": "83"
    },
    {
      "Country": "Belgium",
      "Year": "2010",
      "BMI": "61.9",
      "Life.expectancy": "80"
    },
    {
      "Country": "Belgium",
      "Year": "2009",
      "BMI": "61.6",
      "Life.expectancy": "79.8"
    },
    {
      "Country": "Belgium",
      "Year": "2008",
      "BMI": "61.3",
      "Life.expectancy": "79.5"
    },
    {
      "Country": "Belgium",
      "Year": "2007",
      "BMI": "6.9",
      "Life.expectancy": "79.5"
    },
    {
      "Country": "Belgium",
      "Year": "2006",
      "BMI": "6.6",
      "Life.expectancy": "79.4"
    },
    {
      "Country": "Belgium",
      "Year": "2005",
      "BMI": "6.2",
      "Life.expectancy": "78.9"
    },
    {
      "Country": "Belgium",
      "Year": "2004",
      "BMI": "59.8",
      "Life.expectancy": "78.8"
    },
    {
      "Country": "Belgium",
      "Year": "2003",
      "BMI": "59.4",
      "Life.expectancy": "78.3"
    },
    {
      "Country": "Belgium",
      "Year": "2002",
      "BMI": "59",
      "Life.expectancy": "78"
    },
    {
      "Country": "Belgium",
      "Year": "2001",
      "BMI": "58.5",
      "Life.expectancy": "78"
    },
    {
      "Country": "Belgium",
      "Year": "2000",
      "BMI": "58.1",
      "Life.expectancy": "77.6"
    },
    {
      "Country": "Belize",
      "Year": "2015",
      "BMI": "5.9",
      "Life.expectancy": "71"
    },
    {
      "Country": "Belize",
      "Year": "2014",
      "BMI": "5.1",
      "Life.expectancy": "70"
    },
    {
      "Country": "Belize",
      "Year": "2013",
      "BMI": "49.3",
      "Life.expectancy": "69.8"
    },
    {
      "Country": "Belize",
      "Year": "2012",
      "BMI": "48.5",
      "Life.expectancy": "69.4"
    },
    {
      "Country": "Belize",
      "Year": "2011",
      "BMI": "47.8",
      "Life.expectancy": "69.4"
    },
    {
      "Country": "Belize",
      "Year": "2010",
      "BMI": "47",
      "Life.expectancy": "69.5"
    },
    {
      "Country": "Belize",
      "Year": "2009",
      "BMI": "46.3",
      "Life.expectancy": "69.5"
    },
    {
      "Country": "Belize",
      "Year": "2008",
      "BMI": "45.7",
      "Life.expectancy": "69.6"
    },
    {
      "Country": "Belize",
      "Year": "2007",
      "BMI": "45",
      "Life.expectancy": "69.6"
    },
    {
      "Country": "Belize",
      "Year": "2006",
      "BMI": "44.4",
      "Life.expectancy": "69.4"
    },
    {
      "Country": "Belize",
      "Year": "2005",
      "BMI": "43.8",
      "Life.expectancy": "69"
    },
    {
      "Country": "Belize",
      "Year": "2004",
      "BMI": "43.2",
      "Life.expectancy": "68.7"
    },
    {
      "Country": "Belize",
      "Year": "2003",
      "BMI": "42.6",
      "Life.expectancy": "68.4"
    },
    {
      "Country": "Belize",
      "Year": "2002",
      "BMI": "42",
      "Life.expectancy": "68.5"
    },
    {
      "Country": "Belize",
      "Year": "2001",
      "BMI": "41.4",
      "Life.expectancy": "68.2"
    },
    {
      "Country": "Belize",
      "Year": "2000",
      "BMI": "4.8",
      "Life.expectancy": "68.3"
    },
    {
      "Country": "Benin",
      "Year": "2015",
      "BMI": "25.7",
      "Life.expectancy": "60"
    },
    {
      "Country": "Benin",
      "Year": "2014",
      "BMI": "25.2",
      "Life.expectancy": "59.7"
    },
    {
      "Country": "Benin",
      "Year": "2013",
      "BMI": "24.6",
      "Life.expectancy": "59.5"
    },
    {
      "Country": "Benin",
      "Year": "2012",
      "BMI": "24.1",
      "Life.expectancy": "59.3"
    },
    {
      "Country": "Benin",
      "Year": "2011",
      "BMI": "23.5",
      "Life.expectancy": "59.1"
    },
    {
      "Country": "Benin",
      "Year": "2010",
      "BMI": "23",
      "Life.expectancy": "58.7"
    },
    {
      "Country": "Benin",
      "Year": "2009",
      "BMI": "22.5",
      "Life.expectancy": "58.4"
    },
    {
      "Country": "Benin",
      "Year": "2008",
      "BMI": "22",
      "Life.expectancy": "57.6"
    },
    {
      "Country": "Benin",
      "Year": "2007",
      "BMI": "21.5",
      "Life.expectancy": "57.1"
    },
    {
      "Country": "Benin",
      "Year": "2006",
      "BMI": "21",
      "Life.expectancy": "56.8"
    },
    {
      "Country": "Benin",
      "Year": "2005",
      "BMI": "2.5",
      "Life.expectancy": "56.5"
    },
    {
      "Country": "Benin",
      "Year": "2004",
      "BMI": "2.1",
      "Life.expectancy": "56.1"
    },
    {
      "Country": "Benin",
      "Year": "2003",
      "BMI": "19.7",
      "Life.expectancy": "55.8"
    },
    {
      "Country": "Benin",
      "Year": "2002",
      "BMI": "19.2",
      "Life.expectancy": "55.6"
    },
    {
      "Country": "Benin",
      "Year": "2001",
      "BMI": "18.8",
      "Life.expectancy": "55.5"
    },
    {
      "Country": "Benin",
      "Year": "2000",
      "BMI": "18.4",
      "Life.expectancy": "55.4"
    },
    {
      "Country": "Bhutan",
      "Year": "2015",
      "BMI": "24.5",
      "Life.expectancy": "69.8"
    },
    {
      "Country": "Bhutan",
      "Year": "2014",
      "BMI": "23.6",
      "Life.expectancy": "69.4"
    },
    {
      "Country": "Bhutan",
      "Year": "2013",
      "BMI": "22.7",
      "Life.expectancy": "69.1"
    },
    {
      "Country": "Bhutan",
      "Year": "2012",
      "BMI": "21.9",
      "Life.expectancy": "68.7"
    },
    {
      "Country": "Bhutan",
      "Year": "2011",
      "BMI": "21.1",
      "Life.expectancy": "68.3"
    },
    {
      "Country": "Bhutan",
      "Year": "2010",
      "BMI": "2.3",
      "Life.expectancy": "67.9"
    },
    {
      "Country": "Bhutan",
      "Year": "2009",
      "BMI": "19.5",
      "Life.expectancy": "67.4"
    },
    {
      "Country": "Bhutan",
      "Year": "2008",
      "BMI": "18.8",
      "Life.expectancy": "67"
    },
    {
      "Country": "Bhutan",
      "Year": "2007",
      "BMI": "18",
      "Life.expectancy": "66.5"
    },
    {
      "Country": "Bhutan",
      "Year": "2006",
      "BMI": "17.4",
      "Life.expectancy": "65.8"
    },
    {
      "Country": "Bhutan",
      "Year": "2005",
      "BMI": "16.7",
      "Life.expectancy": "65"
    },
    {
      "Country": "Bhutan",
      "Year": "2004",
      "BMI": "16.1",
      "Life.expectancy": "64.2"
    },
    {
      "Country": "Bhutan",
      "Year": "2003",
      "BMI": "15.5",
      "Life.expectancy": "63.3"
    },
    {
      "Country": "Bhutan",
      "Year": "2002",
      "BMI": "14.9",
      "Life.expectancy": "62.5"
    },
    {
      "Country": "Bhutan",
      "Year": "2001",
      "BMI": "14.4",
      "Life.expectancy": "61.7"
    },
    {
      "Country": "Bhutan",
      "Year": "2000",
      "BMI": "13.9",
      "Life.expectancy": "62"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2015",
      "BMI": "52.6",
      "Life.expectancy": "77"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2014",
      "BMI": "51.9",
      "Life.expectancy": "74"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2013",
      "BMI": "51.2",
      "Life.expectancy": "71"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2012",
      "BMI": "5.6",
      "Life.expectancy": "69.8"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2011",
      "BMI": "49.9",
      "Life.expectancy": "69.3"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2010",
      "BMI": "49.3",
      "Life.expectancy": "68.7"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2009",
      "BMI": "48.6",
      "Life.expectancy": "68"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2008",
      "BMI": "48",
      "Life.expectancy": "67.4"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2007",
      "BMI": "47.3",
      "Life.expectancy": "66.8"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2006",
      "BMI": "46.7",
      "Life.expectancy": "66.2"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2005",
      "BMI": "46",
      "Life.expectancy": "65.7"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2004",
      "BMI": "45.4",
      "Life.expectancy": "65.1"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2003",
      "BMI": "44.7",
      "Life.expectancy": "64.5"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2002",
      "BMI": "44",
      "Life.expectancy": "63.9"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2001",
      "BMI": "43.3",
      "Life.expectancy": "63.3"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2000",
      "BMI": "42.6",
      "Life.expectancy": "62.6"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2015",
      "BMI": "55.8",
      "Life.expectancy": "77.4"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2014",
      "BMI": "55.3",
      "Life.expectancy": "77.2"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2013",
      "BMI": "54.7",
      "Life.expectancy": "77"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2012",
      "BMI": "54.2",
      "Life.expectancy": "76.8"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2011",
      "BMI": "53.7",
      "Life.expectancy": "76.9"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2010",
      "BMI": "53.1",
      "Life.expectancy": "76.4"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2009",
      "BMI": "52.6",
      "Life.expectancy": "76.1"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2008",
      "BMI": "52.1",
      "Life.expectancy": "76"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2007",
      "BMI": "51.5",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2006",
      "BMI": "51",
      "Life.expectancy": "75.7"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2005",
      "BMI": "5.5",
      "Life.expectancy": "75"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2004",
      "BMI": "49.9",
      "Life.expectancy": "75.5"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2003",
      "BMI": "49.4",
      "Life.expectancy": "75.2"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2002",
      "BMI": "48.8",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2001",
      "BMI": "48.2",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2000",
      "BMI": "47.6",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Botswana",
      "Year": "2015",
      "BMI": "37.9",
      "Life.expectancy": "65.7"
    },
    {
      "Country": "Botswana",
      "Year": "2014",
      "BMI": "37.3",
      "Life.expectancy": "65.1"
    },
    {
      "Country": "Botswana",
      "Year": "2013",
      "BMI": "36.8",
      "Life.expectancy": "64.2"
    },
    {
      "Country": "Botswana",
      "Year": "2012",
      "BMI": "36.2",
      "Life.expectancy": "63.4"
    },
    {
      "Country": "Botswana",
      "Year": "2011",
      "BMI": "35.7",
      "Life.expectancy": "62.2"
    },
    {
      "Country": "Botswana",
      "Year": "2010",
      "BMI": "35.2",
      "Life.expectancy": "61.1"
    },
    {
      "Country": "Botswana",
      "Year": "2009",
      "BMI": "34.7",
      "Life.expectancy": "59.2"
    },
    {
      "Country": "Botswana",
      "Year": "2008",
      "BMI": "34.2",
      "Life.expectancy": "57.5"
    },
    {
      "Country": "Botswana",
      "Year": "2007",
      "BMI": "33.7",
      "Life.expectancy": "56.9"
    },
    {
      "Country": "Botswana",
      "Year": "2006",
      "BMI": "33.2",
      "Life.expectancy": "54.8"
    },
    {
      "Country": "Botswana",
      "Year": "2005",
      "BMI": "32.7",
      "Life.expectancy": "51.7"
    },
    {
      "Country": "Botswana",
      "Year": "2004",
      "BMI": "32.2",
      "Life.expectancy": "48.1"
    },
    {
      "Country": "Botswana",
      "Year": "2003",
      "BMI": "31.6",
      "Life.expectancy": "46.4"
    },
    {
      "Country": "Botswana",
      "Year": "2002",
      "BMI": "31.1",
      "Life.expectancy": "46"
    },
    {
      "Country": "Botswana",
      "Year": "2001",
      "BMI": "3.5",
      "Life.expectancy": "46.7"
    },
    {
      "Country": "Botswana",
      "Year": "2000",
      "BMI": "29.9",
      "Life.expectancy": "47.8"
    },
    {
      "Country": "Brazil",
      "Year": "2015",
      "BMI": "56.1",
      "Life.expectancy": "75"
    },
    {
      "Country": "Brazil",
      "Year": "2014",
      "BMI": "55.3",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Brazil",
      "Year": "2013",
      "BMI": "54.5",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Brazil",
      "Year": "2012",
      "BMI": "53.6",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Brazil",
      "Year": "2011",
      "BMI": "52.8",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Brazil",
      "Year": "2010",
      "BMI": "52",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Brazil",
      "Year": "2009",
      "BMI": "51.1",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Brazil",
      "Year": "2008",
      "BMI": "5.3",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Brazil",
      "Year": "2007",
      "BMI": "49.4",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Brazil",
      "Year": "2006",
      "BMI": "48.6",
      "Life.expectancy": "73"
    },
    {
      "Country": "Brazil",
      "Year": "2005",
      "BMI": "47.8",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Brazil",
      "Year": "2004",
      "BMI": "46.9",
      "Life.expectancy": "72"
    },
    {
      "Country": "Brazil",
      "Year": "2003",
      "BMI": "46.1",
      "Life.expectancy": "71.8"
    },
    {
      "Country": "Brazil",
      "Year": "2002",
      "BMI": "45.3",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "Brazil",
      "Year": "2001",
      "BMI": "44.5",
      "Life.expectancy": "71"
    },
    {
      "Country": "Brazil",
      "Year": "2000",
      "BMI": "43.7",
      "Life.expectancy": "75"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2015",
      "BMI": "41.2",
      "Life.expectancy": "77.7"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2014",
      "BMI": "4.2",
      "Life.expectancy": "77.6"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2013",
      "BMI": "39.2",
      "Life.expectancy": "77.1"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2012",
      "BMI": "38.2",
      "Life.expectancy": "78.3"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2011",
      "BMI": "37.2",
      "Life.expectancy": "77.4"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2010",
      "BMI": "36.2",
      "Life.expectancy": "76.9"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2009",
      "BMI": "35.2",
      "Life.expectancy": "76.8"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2008",
      "BMI": "34.2",
      "Life.expectancy": "77.2"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2007",
      "BMI": "33.2",
      "Life.expectancy": "76"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2006",
      "BMI": "32.2",
      "Life.expectancy": "76.3"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2005",
      "BMI": "31.2",
      "Life.expectancy": "76.2"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2004",
      "BMI": "3.1",
      "Life.expectancy": "76.4"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2003",
      "BMI": "29.1",
      "Life.expectancy": "76"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2002",
      "BMI": "28",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2001",
      "BMI": "27",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2000",
      "BMI": "26.1",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Bulgaria",
      "Year": "2015",
      "BMI": "65.7",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Bulgaria",
      "Year": "2014",
      "BMI": "65.1",
      "Life.expectancy": "74.3"
    },
    {
      "Country": "Bulgaria",
      "Year": "2013",
      "BMI": "64.5",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Bulgaria",
      "Year": "2012",
      "BMI": "63.9",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Bulgaria",
      "Year": "2011",
      "BMI": "63.3",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Bulgaria",
      "Year": "2010",
      "BMI": "62.7",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Bulgaria",
      "Year": "2009",
      "BMI": "62.1",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Bulgaria",
      "Year": "2008",
      "BMI": "61.5",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Bulgaria",
      "Year": "2007",
      "BMI": "6.9",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Bulgaria",
      "Year": "2006",
      "BMI": "6.3",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "Bulgaria",
      "Year": "2005",
      "BMI": "59.7",
      "Life.expectancy": "72.1"
    },
    {
      "Country": "Bulgaria",
      "Year": "2004",
      "BMI": "59.1",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "Bulgaria",
      "Year": "2003",
      "BMI": "58.6",
      "Life.expectancy": "72"
    },
    {
      "Country": "Bulgaria",
      "Year": "2002",
      "BMI": "58.1",
      "Life.expectancy": "71.8"
    },
    {
      "Country": "Bulgaria",
      "Year": "2001",
      "BMI": "57.5",
      "Life.expectancy": "71.6"
    },
    {
      "Country": "Bulgaria",
      "Year": "2000",
      "BMI": "57",
      "Life.expectancy": "71.1"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2015",
      "BMI": "19.4",
      "Life.expectancy": "59.9"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2014",
      "BMI": "18.8",
      "Life.expectancy": "59.3"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2013",
      "BMI": "18.2",
      "Life.expectancy": "59"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2012",
      "BMI": "17.7",
      "Life.expectancy": "58.6"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2011",
      "BMI": "17.1",
      "Life.expectancy": "58.1"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2010",
      "BMI": "16.6",
      "Life.expectancy": "57.5"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2009",
      "BMI": "16.1",
      "Life.expectancy": "56.9"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2008",
      "BMI": "15.6",
      "Life.expectancy": "56.1"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2007",
      "BMI": "15.1",
      "Life.expectancy": "55.3"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2006",
      "BMI": "14.6",
      "Life.expectancy": "54.3"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2005",
      "BMI": "14.2",
      "Life.expectancy": "53.3"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2004",
      "BMI": "13.7",
      "Life.expectancy": "52.4"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2003",
      "BMI": "13.3",
      "Life.expectancy": "51.6"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2002",
      "BMI": "12.9",
      "Life.expectancy": "51"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2001",
      "BMI": "12.5",
      "Life.expectancy": "56"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2000",
      "BMI": "12.2",
      "Life.expectancy": "51"
    },
    {
      "Country": "Burundi",
      "Year": "2015",
      "BMI": "18.7",
      "Life.expectancy": "59.6"
    },
    {
      "Country": "Burundi",
      "Year": "2014",
      "BMI": "18.2",
      "Life.expectancy": "59.1"
    },
    {
      "Country": "Burundi",
      "Year": "2013",
      "BMI": "17.6",
      "Life.expectancy": "58.6"
    },
    {
      "Country": "Burundi",
      "Year": "2012",
      "BMI": "17.1",
      "Life.expectancy": "58"
    },
    {
      "Country": "Burundi",
      "Year": "2011",
      "BMI": "16.6",
      "Life.expectancy": "57.4"
    },
    {
      "Country": "Burundi",
      "Year": "2010",
      "BMI": "16.1",
      "Life.expectancy": "56.8"
    },
    {
      "Country": "Burundi",
      "Year": "2009",
      "BMI": "15.7",
      "Life.expectancy": "56.2"
    },
    {
      "Country": "Burundi",
      "Year": "2008",
      "BMI": "15.2",
      "Life.expectancy": "55.3"
    },
    {
      "Country": "Burundi",
      "Year": "2007",
      "BMI": "14.8",
      "Life.expectancy": "54.8"
    },
    {
      "Country": "Burundi",
      "Year": "2006",
      "BMI": "14.5",
      "Life.expectancy": "54.1"
    },
    {
      "Country": "Burundi",
      "Year": "2005",
      "BMI": "14.1",
      "Life.expectancy": "53.4"
    },
    {
      "Country": "Burundi",
      "Year": "2004",
      "BMI": "13.8",
      "Life.expectancy": "52.6"
    },
    {
      "Country": "Burundi",
      "Year": "2003",
      "BMI": "13.5",
      "Life.expectancy": "51.9"
    },
    {
      "Country": "Burundi",
      "Year": "2002",
      "BMI": "13.3",
      "Life.expectancy": "51.5"
    },
    {
      "Country": "Burundi",
      "Year": "2001",
      "BMI": "13",
      "Life.expectancy": "51.3"
    },
    {
      "Country": "Burundi",
      "Year": "2000",
      "BMI": "12.8",
      "Life.expectancy": "58"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2015",
      "BMI": "28",
      "Life.expectancy": "53.3"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2014",
      "BMI": "27.4",
      "Life.expectancy": "52.8"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2013",
      "BMI": "26.8",
      "Life.expectancy": "52.3"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2012",
      "BMI": "26.2",
      "Life.expectancy": "52"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2011",
      "BMI": "25.6",
      "Life.expectancy": "51.7"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2010",
      "BMI": "25",
      "Life.expectancy": "51.5"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2009",
      "BMI": "24.4",
      "Life.expectancy": "51"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2008",
      "BMI": "23.8",
      "Life.expectancy": "54"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2007",
      "BMI": "23.2",
      "Life.expectancy": "49.9"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2006",
      "BMI": "22.6",
      "Life.expectancy": "49.4"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2005",
      "BMI": "22.1",
      "Life.expectancy": "48.7"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2004",
      "BMI": "21.5",
      "Life.expectancy": "48.2"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2003",
      "BMI": "2.9",
      "Life.expectancy": "48"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2002",
      "BMI": "2.4",
      "Life.expectancy": "47.7"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2001",
      "BMI": "19.9",
      "Life.expectancy": "47.8"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2000",
      "BMI": "19.4",
      "Life.expectancy": "47.9"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2015",
      "BMI": "31.3",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2014",
      "BMI": "3.5",
      "Life.expectancy": "73"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2013",
      "BMI": "29.7",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2012",
      "BMI": "29",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2011",
      "BMI": "28.2",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2010",
      "BMI": "27.5",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2009",
      "BMI": "26.8",
      "Life.expectancy": "72.4"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2008",
      "BMI": "26.2",
      "Life.expectancy": "72.4"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2007",
      "BMI": "25.5",
      "Life.expectancy": "72.3"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2006",
      "BMI": "24.9",
      "Life.expectancy": "72.1"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2005",
      "BMI": "24.3",
      "Life.expectancy": "71.8"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2004",
      "BMI": "23.7",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2003",
      "BMI": "23.2",
      "Life.expectancy": "71.1"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2002",
      "BMI": "22.6",
      "Life.expectancy": "77"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2001",
      "BMI": "22.1",
      "Life.expectancy": "73"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2000",
      "BMI": "21.5",
      "Life.expectancy": "69.9"
    },
    {
      "Country": "Cambodia",
      "Year": "2015",
      "BMI": "19.6",
      "Life.expectancy": "68.7"
    },
    {
      "Country": "Cambodia",
      "Year": "2014",
      "BMI": "18.9",
      "Life.expectancy": "68.3"
    },
    {
      "Country": "Cambodia",
      "Year": "2013",
      "BMI": "18.2",
      "Life.expectancy": "67.8"
    },
    {
      "Country": "Cambodia",
      "Year": "2012",
      "BMI": "17.6",
      "Life.expectancy": "67.4"
    },
    {
      "Country": "Cambodia",
      "Year": "2011",
      "BMI": "17",
      "Life.expectancy": "67"
    },
    {
      "Country": "Cambodia",
      "Year": "2010",
      "BMI": "16.4",
      "Life.expectancy": "66.6"
    },
    {
      "Country": "Cambodia",
      "Year": "2009",
      "BMI": "15.9",
      "Life.expectancy": "66.1"
    },
    {
      "Country": "Cambodia",
      "Year": "2008",
      "BMI": "15.3",
      "Life.expectancy": "65.6"
    },
    {
      "Country": "Cambodia",
      "Year": "2007",
      "BMI": "14.8",
      "Life.expectancy": "65"
    },
    {
      "Country": "Cambodia",
      "Year": "2006",
      "BMI": "14.3",
      "Life.expectancy": "64.1"
    },
    {
      "Country": "Cambodia",
      "Year": "2005",
      "BMI": "13.9",
      "Life.expectancy": "62.9"
    },
    {
      "Country": "Cambodia",
      "Year": "2004",
      "BMI": "13.5",
      "Life.expectancy": "61.5"
    },
    {
      "Country": "Cambodia",
      "Year": "2003",
      "BMI": "13.1",
      "Life.expectancy": "63"
    },
    {
      "Country": "Cambodia",
      "Year": "2002",
      "BMI": "12.8",
      "Life.expectancy": "59.3"
    },
    {
      "Country": "Cambodia",
      "Year": "2001",
      "BMI": "12.4",
      "Life.expectancy": "58.5"
    },
    {
      "Country": "Cambodia",
      "Year": "2000",
      "BMI": "12.1",
      "Life.expectancy": "57.7"
    },
    {
      "Country": "Cameroon",
      "Year": "2015",
      "BMI": "29",
      "Life.expectancy": "57.3"
    },
    {
      "Country": "Cameroon",
      "Year": "2014",
      "BMI": "28.4",
      "Life.expectancy": "56.7"
    },
    {
      "Country": "Cameroon",
      "Year": "2013",
      "BMI": "27.8",
      "Life.expectancy": "56.4"
    },
    {
      "Country": "Cameroon",
      "Year": "2012",
      "BMI": "27.2",
      "Life.expectancy": "55.9"
    },
    {
      "Country": "Cameroon",
      "Year": "2011",
      "BMI": "26.6",
      "Life.expectancy": "55.6"
    },
    {
      "Country": "Cameroon",
      "Year": "2010",
      "BMI": "26",
      "Life.expectancy": "55.3"
    },
    {
      "Country": "Cameroon",
      "Year": "2009",
      "BMI": "25.4",
      "Life.expectancy": "54.8"
    },
    {
      "Country": "Cameroon",
      "Year": "2008",
      "BMI": "24.9",
      "Life.expectancy": "54.2"
    },
    {
      "Country": "Cameroon",
      "Year": "2007",
      "BMI": "24.4",
      "Life.expectancy": "53.6"
    },
    {
      "Country": "Cameroon",
      "Year": "2006",
      "BMI": "23.8",
      "Life.expectancy": "53.3"
    },
    {
      "Country": "Cameroon",
      "Year": "2005",
      "BMI": "23.3",
      "Life.expectancy": "52.8"
    },
    {
      "Country": "Cameroon",
      "Year": "2004",
      "BMI": "22.8",
      "Life.expectancy": "52.1"
    },
    {
      "Country": "Cameroon",
      "Year": "2003",
      "BMI": "22.3",
      "Life.expectancy": "51.8"
    },
    {
      "Country": "Cameroon",
      "Year": "2002",
      "BMI": "21.8",
      "Life.expectancy": "51.6"
    },
    {
      "Country": "Cameroon",
      "Year": "2001",
      "BMI": "21.3",
      "Life.expectancy": "51.5"
    },
    {
      "Country": "Cameroon",
      "Year": "2000",
      "BMI": "2.9",
      "Life.expectancy": "51.4"
    },
    {
      "Country": "Canada",
      "Year": "2015",
      "BMI": "67",
      "Life.expectancy": "82.2"
    },
    {
      "Country": "Canada",
      "Year": "2014",
      "BMI": "66.4",
      "Life.expectancy": "82"
    },
    {
      "Country": "Canada",
      "Year": "2013",
      "BMI": "65.8",
      "Life.expectancy": "81.8"
    },
    {
      "Country": "Canada",
      "Year": "2012",
      "BMI": "65.3",
      "Life.expectancy": "81.6"
    },
    {
      "Country": "Canada",
      "Year": "2011",
      "BMI": "64.7",
      "Life.expectancy": "81.5"
    },
    {
      "Country": "Canada",
      "Year": "2010",
      "BMI": "64.1",
      "Life.expectancy": "81.2"
    },
    {
      "Country": "Canada",
      "Year": "2009",
      "BMI": "63.6",
      "Life.expectancy": "81"
    },
    {
      "Country": "Canada",
      "Year": "2008",
      "BMI": "63",
      "Life.expectancy": "87"
    },
    {
      "Country": "Canada",
      "Year": "2007",
      "BMI": "62.5",
      "Life.expectancy": "85"
    },
    {
      "Country": "Canada",
      "Year": "2006",
      "BMI": "61.9",
      "Life.expectancy": "85"
    },
    {
      "Country": "Canada",
      "Year": "2005",
      "BMI": "61.3",
      "Life.expectancy": "81"
    },
    {
      "Country": "Canada",
      "Year": "2004",
      "BMI": "6.6",
      "Life.expectancy": "80"
    },
    {
      "Country": "Canada",
      "Year": "2003",
      "BMI": "6",
      "Life.expectancy": "79.7"
    },
    {
      "Country": "Canada",
      "Year": "2002",
      "BMI": "59.3",
      "Life.expectancy": "79.5"
    },
    {
      "Country": "Canada",
      "Year": "2001",
      "BMI": "58.5",
      "Life.expectancy": "79.4"
    },
    {
      "Country": "Canada",
      "Year": "2000",
      "BMI": "57.8",
      "Life.expectancy": "79.1"
    },
    {
      "Country": "Central African Republic",
      "Year": "2015",
      "BMI": "22.7",
      "Life.expectancy": "52.5"
    },
    {
      "Country": "Central African Republic",
      "Year": "2014",
      "BMI": "22.1",
      "Life.expectancy": "58"
    },
    {
      "Country": "Central African Republic",
      "Year": "2013",
      "BMI": "21.6",
      "Life.expectancy": "49.9"
    },
    {
      "Country": "Central African Republic",
      "Year": "2012",
      "BMI": "21.2",
      "Life.expectancy": "53"
    },
    {
      "Country": "Central African Republic",
      "Year": "2011",
      "BMI": "2.7",
      "Life.expectancy": "49.8"
    },
    {
      "Country": "Central African Republic",
      "Year": "2010",
      "BMI": "2.2",
      "Life.expectancy": "49.2"
    },
    {
      "Country": "Central African Republic",
      "Year": "2009",
      "BMI": "19.8",
      "Life.expectancy": "48.6"
    },
    {
      "Country": "Central African Republic",
      "Year": "2008",
      "BMI": "19.4",
      "Life.expectancy": "47.6"
    },
    {
      "Country": "Central African Republic",
      "Year": "2007",
      "BMI": "19",
      "Life.expectancy": "46.8"
    },
    {
      "Country": "Central African Republic",
      "Year": "2006",
      "BMI": "18.6",
      "Life.expectancy": "46.3"
    },
    {
      "Country": "Central African Republic",
      "Year": "2005",
      "BMI": "18.2",
      "Life.expectancy": "45.9"
    },
    {
      "Country": "Central African Republic",
      "Year": "2004",
      "BMI": "17.9",
      "Life.expectancy": "45.7"
    },
    {
      "Country": "Central African Republic",
      "Year": "2003",
      "BMI": "17.5",
      "Life.expectancy": "45.7"
    },
    {
      "Country": "Central African Republic",
      "Year": "2002",
      "BMI": "17.2",
      "Life.expectancy": "45.6"
    },
    {
      "Country": "Central African Republic",
      "Year": "2001",
      "BMI": "16.8",
      "Life.expectancy": "45.6"
    },
    {
      "Country": "Central African Republic",
      "Year": "2000",
      "BMI": "16.5",
      "Life.expectancy": "46"
    },
    {
      "Country": "Chad",
      "Year": "2015",
      "BMI": "19.1",
      "Life.expectancy": "53.1"
    },
    {
      "Country": "Chad",
      "Year": "2014",
      "BMI": "18.7",
      "Life.expectancy": "52.6"
    },
    {
      "Country": "Chad",
      "Year": "2013",
      "BMI": "18.2",
      "Life.expectancy": "52.2"
    },
    {
      "Country": "Chad",
      "Year": "2012",
      "BMI": "17.9",
      "Life.expectancy": "51.8"
    },
    {
      "Country": "Chad",
      "Year": "2011",
      "BMI": "17.5",
      "Life.expectancy": "51.6"
    },
    {
      "Country": "Chad",
      "Year": "2010",
      "BMI": "17.1",
      "Life.expectancy": "51.2"
    },
    {
      "Country": "Chad",
      "Year": "2009",
      "BMI": "16.7",
      "Life.expectancy": "57"
    },
    {
      "Country": "Chad",
      "Year": "2008",
      "BMI": "16.4",
      "Life.expectancy": "49.6"
    },
    {
      "Country": "Chad",
      "Year": "2007",
      "BMI": "16.1",
      "Life.expectancy": "49.4"
    },
    {
      "Country": "Chad",
      "Year": "2006",
      "BMI": "15.7",
      "Life.expectancy": "48.5"
    },
    {
      "Country": "Chad",
      "Year": "2005",
      "BMI": "15.4",
      "Life.expectancy": "48.6"
    },
    {
      "Country": "Chad",
      "Year": "2004",
      "BMI": "15.1",
      "Life.expectancy": "48.5"
    },
    {
      "Country": "Chad",
      "Year": "2003",
      "BMI": "14.8",
      "Life.expectancy": "48.4"
    },
    {
      "Country": "Chad",
      "Year": "2002",
      "BMI": "14.4",
      "Life.expectancy": "48.1"
    },
    {
      "Country": "Chad",
      "Year": "2001",
      "BMI": "14.1",
      "Life.expectancy": "48"
    },
    {
      "Country": "Chad",
      "Year": "2000",
      "BMI": "13.9",
      "Life.expectancy": "47.6"
    },
    {
      "Country": "Chile",
      "Year": "2015",
      "BMI": "63.8",
      "Life.expectancy": "85"
    },
    {
      "Country": "Chile",
      "Year": "2014",
      "BMI": "63.1",
      "Life.expectancy": "83"
    },
    {
      "Country": "Chile",
      "Year": "2013",
      "BMI": "62.5",
      "Life.expectancy": "81"
    },
    {
      "Country": "Chile",
      "Year": "2012",
      "BMI": "61.8",
      "Life.expectancy": "79.9"
    },
    {
      "Country": "Chile",
      "Year": "2011",
      "BMI": "61.2",
      "Life.expectancy": "79.8"
    },
    {
      "Country": "Chile",
      "Year": "2010",
      "BMI": "6.6",
      "Life.expectancy": "79.1"
    },
    {
      "Country": "Chile",
      "Year": "2009",
      "BMI": "59.9",
      "Life.expectancy": "79.3"
    },
    {
      "Country": "Chile",
      "Year": "2008",
      "BMI": "59.3",
      "Life.expectancy": "79.6"
    },
    {
      "Country": "Chile",
      "Year": "2007",
      "BMI": "58.7",
      "Life.expectancy": "78.9"
    },
    {
      "Country": "Chile",
      "Year": "2006",
      "BMI": "58.1",
      "Life.expectancy": "78.9"
    },
    {
      "Country": "Chile",
      "Year": "2005",
      "BMI": "57.4",
      "Life.expectancy": "78.4"
    },
    {
      "Country": "Chile",
      "Year": "2004",
      "BMI": "56.8",
      "Life.expectancy": "78"
    },
    {
      "Country": "Chile",
      "Year": "2003",
      "BMI": "56.1",
      "Life.expectancy": "77.9"
    },
    {
      "Country": "Chile",
      "Year": "2002",
      "BMI": "55.4",
      "Life.expectancy": "77.8"
    },
    {
      "Country": "Chile",
      "Year": "2001",
      "BMI": "54.7",
      "Life.expectancy": "77.3"
    },
    {
      "Country": "Chile",
      "Year": "2000",
      "BMI": "54",
      "Life.expectancy": "77.3"
    },
    {
      "Country": "China",
      "Year": "2015",
      "BMI": "32.9",
      "Life.expectancy": "76.1"
    },
    {
      "Country": "China",
      "Year": "2014",
      "BMI": "31.9",
      "Life.expectancy": "75.8"
    },
    {
      "Country": "China",
      "Year": "2013",
      "BMI": "3.9",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "China",
      "Year": "2012",
      "BMI": "3",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "China",
      "Year": "2011",
      "BMI": "29",
      "Life.expectancy": "75.2"
    },
    {
      "Country": "China",
      "Year": "2010",
      "BMI": "28.1",
      "Life.expectancy": "75"
    },
    {
      "Country": "China",
      "Year": "2009",
      "BMI": "27.3",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "China",
      "Year": "2008",
      "BMI": "26.5",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "China",
      "Year": "2007",
      "BMI": "25.7",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "China",
      "Year": "2006",
      "BMI": "24.9",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "China",
      "Year": "2005",
      "BMI": "24.1",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "China",
      "Year": "2004",
      "BMI": "23.4",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "China",
      "Year": "2003",
      "BMI": "22.6",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "China",
      "Year": "2002",
      "BMI": "21.9",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "China",
      "Year": "2001",
      "BMI": "21.2",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "China",
      "Year": "2000",
      "BMI": "2.5",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "Colombia",
      "Year": "2015",
      "BMI": "57.9",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Colombia",
      "Year": "2014",
      "BMI": "57.2",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Colombia",
      "Year": "2013",
      "BMI": "56.4",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Colombia",
      "Year": "2012",
      "BMI": "55.7",
      "Life.expectancy": "74.3"
    },
    {
      "Country": "Colombia",
      "Year": "2011",
      "BMI": "55",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Colombia",
      "Year": "2010",
      "BMI": "54.2",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Colombia",
      "Year": "2009",
      "BMI": "53.5",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Colombia",
      "Year": "2008",
      "BMI": "52.8",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Colombia",
      "Year": "2007",
      "BMI": "52",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Colombia",
      "Year": "2006",
      "BMI": "51.3",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Colombia",
      "Year": "2005",
      "BMI": "5.5",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Colombia",
      "Year": "2004",
      "BMI": "49.8",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Colombia",
      "Year": "2003",
      "BMI": "49",
      "Life.expectancy": "72.4"
    },
    {
      "Country": "Colombia",
      "Year": "2002",
      "BMI": "48.2",
      "Life.expectancy": "71.8"
    },
    {
      "Country": "Colombia",
      "Year": "2001",
      "BMI": "47.5",
      "Life.expectancy": "71.5"
    },
    {
      "Country": "Colombia",
      "Year": "2000",
      "BMI": "46.7",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "Comoros",
      "Year": "2015",
      "BMI": "24.2",
      "Life.expectancy": "63.5"
    },
    {
      "Country": "Comoros",
      "Year": "2014",
      "BMI": "23.7",
      "Life.expectancy": "63.2"
    },
    {
      "Country": "Comoros",
      "Year": "2013",
      "BMI": "23.2",
      "Life.expectancy": "62.9"
    },
    {
      "Country": "Comoros",
      "Year": "2012",
      "BMI": "22.6",
      "Life.expectancy": "62.5"
    },
    {
      "Country": "Comoros",
      "Year": "2011",
      "BMI": "22.1",
      "Life.expectancy": "62.2"
    },
    {
      "Country": "Comoros",
      "Year": "2010",
      "BMI": "21.6",
      "Life.expectancy": "61.8"
    },
    {
      "Country": "Comoros",
      "Year": "2009",
      "BMI": "21.1",
      "Life.expectancy": "61.3"
    },
    {
      "Country": "Comoros",
      "Year": "2008",
      "BMI": "2.6",
      "Life.expectancy": "61"
    },
    {
      "Country": "Comoros",
      "Year": "2007",
      "BMI": "2.1",
      "Life.expectancy": "66"
    },
    {
      "Country": "Comoros",
      "Year": "2006",
      "BMI": "19.6",
      "Life.expectancy": "63"
    },
    {
      "Country": "Comoros",
      "Year": "2005",
      "BMI": "19.2",
      "Life.expectancy": "60"
    },
    {
      "Country": "Comoros",
      "Year": "2004",
      "BMI": "18.8",
      "Life.expectancy": "59.8"
    },
    {
      "Country": "Comoros",
      "Year": "2003",
      "BMI": "18.4",
      "Life.expectancy": "59.6"
    },
    {
      "Country": "Comoros",
      "Year": "2002",
      "BMI": "18",
      "Life.expectancy": "59.5"
    },
    {
      "Country": "Comoros",
      "Year": "2001",
      "BMI": "17.6",
      "Life.expectancy": "59.5"
    },
    {
      "Country": "Comoros",
      "Year": "2000",
      "BMI": "17.3",
      "Life.expectancy": "59.5"
    },
    {
      "Country": "Congo",
      "Year": "2015",
      "BMI": "27.4",
      "Life.expectancy": "64.7"
    },
    {
      "Country": "Congo",
      "Year": "2014",
      "BMI": "26.8",
      "Life.expectancy": "64.2"
    },
    {
      "Country": "Congo",
      "Year": "2013",
      "BMI": "26.2",
      "Life.expectancy": "63.9"
    },
    {
      "Country": "Congo",
      "Year": "2012",
      "BMI": "25.6",
      "Life.expectancy": "63.7"
    },
    {
      "Country": "Congo",
      "Year": "2011",
      "BMI": "25",
      "Life.expectancy": "62.9"
    },
    {
      "Country": "Congo",
      "Year": "2010",
      "BMI": "24.5",
      "Life.expectancy": "62"
    },
    {
      "Country": "Congo",
      "Year": "2009",
      "BMI": "23.9",
      "Life.expectancy": "68"
    },
    {
      "Country": "Congo",
      "Year": "2008",
      "BMI": "23.3",
      "Life.expectancy": "59.4"
    },
    {
      "Country": "Congo",
      "Year": "2007",
      "BMI": "22.8",
      "Life.expectancy": "58.2"
    },
    {
      "Country": "Congo",
      "Year": "2006",
      "BMI": "22.3",
      "Life.expectancy": "56.9"
    },
    {
      "Country": "Congo",
      "Year": "2005",
      "BMI": "21.7",
      "Life.expectancy": "55.3"
    },
    {
      "Country": "Congo",
      "Year": "2004",
      "BMI": "21.2",
      "Life.expectancy": "54.1"
    },
    {
      "Country": "Congo",
      "Year": "2003",
      "BMI": "2.7",
      "Life.expectancy": "53.2"
    },
    {
      "Country": "Congo",
      "Year": "2002",
      "BMI": "2.3",
      "Life.expectancy": "52.6"
    },
    {
      "Country": "Congo",
      "Year": "2001",
      "BMI": "19.8",
      "Life.expectancy": "52.7"
    },
    {
      "Country": "Congo",
      "Year": "2000",
      "BMI": "19.3",
      "Life.expectancy": "52.9"
    },
    {
      "Country": "Cook Islands",
      "Year": "2013",
      "BMI": "82.8",
      "Life.expectancy": "0"
    },
    {
      "Country": "Costa Rica",
      "Year": "2015",
      "BMI": "6.5",
      "Life.expectancy": "79.6"
    },
    {
      "Country": "Costa Rica",
      "Year": "2014",
      "BMI": "59.5",
      "Life.expectancy": "79.5"
    },
    {
      "Country": "Costa Rica",
      "Year": "2013",
      "BMI": "58.5",
      "Life.expectancy": "79.4"
    },
    {
      "Country": "Costa Rica",
      "Year": "2012",
      "BMI": "57.5",
      "Life.expectancy": "79.2"
    },
    {
      "Country": "Costa Rica",
      "Year": "2011",
      "BMI": "56.5",
      "Life.expectancy": "79"
    },
    {
      "Country": "Costa Rica",
      "Year": "2010",
      "BMI": "55.5",
      "Life.expectancy": "78.1"
    },
    {
      "Country": "Costa Rica",
      "Year": "2009",
      "BMI": "54.4",
      "Life.expectancy": "79.2"
    },
    {
      "Country": "Costa Rica",
      "Year": "2008",
      "BMI": "53.4",
      "Life.expectancy": "78.9"
    },
    {
      "Country": "Costa Rica",
      "Year": "2007",
      "BMI": "52.4",
      "Life.expectancy": "78.9"
    },
    {
      "Country": "Costa Rica",
      "Year": "2006",
      "BMI": "51.4",
      "Life.expectancy": "78"
    },
    {
      "Country": "Costa Rica",
      "Year": "2005",
      "BMI": "5.3",
      "Life.expectancy": "78.6"
    },
    {
      "Country": "Costa Rica",
      "Year": "2004",
      "BMI": "49.3",
      "Life.expectancy": "77.7"
    },
    {
      "Country": "Costa Rica",
      "Year": "2003",
      "BMI": "48.3",
      "Life.expectancy": "78"
    },
    {
      "Country": "Costa Rica",
      "Year": "2002",
      "BMI": "47.3",
      "Life.expectancy": "78.3"
    },
    {
      "Country": "Costa Rica",
      "Year": "2001",
      "BMI": "46.4",
      "Life.expectancy": "77.5"
    },
    {
      "Country": "Costa Rica",
      "Year": "2000",
      "BMI": "45.4",
      "Life.expectancy": "77.6"
    },
    {
      "Country": "Croatia",
      "Year": "2015",
      "BMI": "63.7",
      "Life.expectancy": "78"
    },
    {
      "Country": "Croatia",
      "Year": "2014",
      "BMI": "63.1",
      "Life.expectancy": "77.8"
    },
    {
      "Country": "Croatia",
      "Year": "2013",
      "BMI": "62.5",
      "Life.expectancy": "77.7"
    },
    {
      "Country": "Croatia",
      "Year": "2012",
      "BMI": "61.9",
      "Life.expectancy": "77.1"
    },
    {
      "Country": "Croatia",
      "Year": "2011",
      "BMI": "61.3",
      "Life.expectancy": "77"
    },
    {
      "Country": "Croatia",
      "Year": "2010",
      "BMI": "6.6",
      "Life.expectancy": "76.6"
    },
    {
      "Country": "Croatia",
      "Year": "2009",
      "BMI": "6",
      "Life.expectancy": "76.3"
    },
    {
      "Country": "Croatia",
      "Year": "2008",
      "BMI": "59.4",
      "Life.expectancy": "76"
    },
    {
      "Country": "Croatia",
      "Year": "2007",
      "BMI": "58.7",
      "Life.expectancy": "75.8"
    },
    {
      "Country": "Croatia",
      "Year": "2006",
      "BMI": "58.1",
      "Life.expectancy": "75.9"
    },
    {
      "Country": "Croatia",
      "Year": "2005",
      "BMI": "57.5",
      "Life.expectancy": "75.2"
    },
    {
      "Country": "Croatia",
      "Year": "2004",
      "BMI": "56.9",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Croatia",
      "Year": "2003",
      "BMI": "56.3",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Croatia",
      "Year": "2002",
      "BMI": "55.8",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Croatia",
      "Year": "2001",
      "BMI": "55.2",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Croatia",
      "Year": "2000",
      "BMI": "54.7",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Cuba",
      "Year": "2015",
      "BMI": "61.4",
      "Life.expectancy": "79.1"
    },
    {
      "Country": "Cuba",
      "Year": "2014",
      "BMI": "6.7",
      "Life.expectancy": "79"
    },
    {
      "Country": "Cuba",
      "Year": "2013",
      "BMI": "59.9",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "Cuba",
      "Year": "2012",
      "BMI": "59.2",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "Cuba",
      "Year": "2011",
      "BMI": "58.4",
      "Life.expectancy": "78.8"
    },
    {
      "Country": "Cuba",
      "Year": "2010",
      "BMI": "57.7",
      "Life.expectancy": "78"
    },
    {
      "Country": "Cuba",
      "Year": "2009",
      "BMI": "56.9",
      "Life.expectancy": "78.1"
    },
    {
      "Country": "Cuba",
      "Year": "2008",
      "BMI": "56.2",
      "Life.expectancy": "77.9"
    },
    {
      "Country": "Cuba",
      "Year": "2007",
      "BMI": "55.4",
      "Life.expectancy": "78.1"
    },
    {
      "Country": "Cuba",
      "Year": "2006",
      "BMI": "54.6",
      "Life.expectancy": "78"
    },
    {
      "Country": "Cuba",
      "Year": "2005",
      "BMI": "53.8",
      "Life.expectancy": "77.2"
    },
    {
      "Country": "Cuba",
      "Year": "2004",
      "BMI": "53",
      "Life.expectancy": "77.3"
    },
    {
      "Country": "Cuba",
      "Year": "2003",
      "BMI": "52.1",
      "Life.expectancy": "77.4"
    },
    {
      "Country": "Cuba",
      "Year": "2002",
      "BMI": "51.3",
      "Life.expectancy": "77.7"
    },
    {
      "Country": "Cuba",
      "Year": "2001",
      "BMI": "5.4",
      "Life.expectancy": "76.7"
    },
    {
      "Country": "Cuba",
      "Year": "2000",
      "BMI": "49.4",
      "Life.expectancy": "76.9"
    },
    {
      "Country": "Cyprus",
      "Year": "2015",
      "BMI": "6.3",
      "Life.expectancy": "85"
    },
    {
      "Country": "Cyprus",
      "Year": "2014",
      "BMI": "59.8",
      "Life.expectancy": "83"
    },
    {
      "Country": "Cyprus",
      "Year": "2013",
      "BMI": "59.2",
      "Life.expectancy": "81"
    },
    {
      "Country": "Cyprus",
      "Year": "2012",
      "BMI": "58.7",
      "Life.expectancy": "80"
    },
    {
      "Country": "Cyprus",
      "Year": "2011",
      "BMI": "58.3",
      "Life.expectancy": "79.7"
    },
    {
      "Country": "Cyprus",
      "Year": "2010",
      "BMI": "57.8",
      "Life.expectancy": "79.5"
    },
    {
      "Country": "Cyprus",
      "Year": "2009",
      "BMI": "57.3",
      "Life.expectancy": "79.3"
    },
    {
      "Country": "Cyprus",
      "Year": "2008",
      "BMI": "56.8",
      "Life.expectancy": "79.1"
    },
    {
      "Country": "Cyprus",
      "Year": "2007",
      "BMI": "56.3",
      "Life.expectancy": "78.9"
    },
    {
      "Country": "Cyprus",
      "Year": "2006",
      "BMI": "55.8",
      "Life.expectancy": "78.8"
    },
    {
      "Country": "Cyprus",
      "Year": "2005",
      "BMI": "55.3",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "Cyprus",
      "Year": "2004",
      "BMI": "54.8",
      "Life.expectancy": "78.6"
    },
    {
      "Country": "Cyprus",
      "Year": "2003",
      "BMI": "54.3",
      "Life.expectancy": "78.5"
    },
    {
      "Country": "Cyprus",
      "Year": "2002",
      "BMI": "53.8",
      "Life.expectancy": "78.4"
    },
    {
      "Country": "Cyprus",
      "Year": "2001",
      "BMI": "53.3",
      "Life.expectancy": "78.2"
    },
    {
      "Country": "Cyprus",
      "Year": "2000",
      "BMI": "52.8",
      "Life.expectancy": "78.1"
    },
    {
      "Country": "Czechia",
      "Year": "2015",
      "BMI": "66.1",
      "Life.expectancy": "78.8"
    },
    {
      "Country": "Czechia",
      "Year": "2014",
      "BMI": "65.6",
      "Life.expectancy": "78.6"
    },
    {
      "Country": "Czechia",
      "Year": "2013",
      "BMI": "65.1",
      "Life.expectancy": "78.2"
    },
    {
      "Country": "Czechia",
      "Year": "2012",
      "BMI": "64.5",
      "Life.expectancy": "78"
    },
    {
      "Country": "Czechia",
      "Year": "2011",
      "BMI": "64",
      "Life.expectancy": "77.8"
    },
    {
      "Country": "Czechia",
      "Year": "2010",
      "BMI": "63.6",
      "Life.expectancy": "77.5"
    },
    {
      "Country": "Czechia",
      "Year": "2009",
      "BMI": "63.1",
      "Life.expectancy": "77.1"
    },
    {
      "Country": "Czechia",
      "Year": "2008",
      "BMI": "62.6",
      "Life.expectancy": "77"
    },
    {
      "Country": "Czechia",
      "Year": "2007",
      "BMI": "62.2",
      "Life.expectancy": "76.8"
    },
    {
      "Country": "Czechia",
      "Year": "2006",
      "BMI": "61.8",
      "Life.expectancy": "76.5"
    },
    {
      "Country": "Czechia",
      "Year": "2005",
      "BMI": "61.3",
      "Life.expectancy": "75.9"
    },
    {
      "Country": "Czechia",
      "Year": "2004",
      "BMI": "6.8",
      "Life.expectancy": "75.8"
    },
    {
      "Country": "Czechia",
      "Year": "2003",
      "BMI": "6.4",
      "Life.expectancy": "75.2"
    },
    {
      "Country": "Czechia",
      "Year": "2002",
      "BMI": "59.9",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "Czechia",
      "Year": "2001",
      "BMI": "59.4",
      "Life.expectancy": "75.1"
    },
    {
      "Country": "Czechia",
      "Year": "2000",
      "BMI": "59",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2015",
      "BMI": "32.9",
      "Life.expectancy": "76"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2014",
      "BMI": "32.4",
      "Life.expectancy": "73"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2013",
      "BMI": "31.8",
      "Life.expectancy": "71"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2012",
      "BMI": "31.3",
      "Life.expectancy": "69.8"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2011",
      "BMI": "3.8",
      "Life.expectancy": "69.4"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2010",
      "BMI": "3.3",
      "Life.expectancy": "69"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2009",
      "BMI": "29.7",
      "Life.expectancy": "68.7"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2008",
      "BMI": "29.2",
      "Life.expectancy": "68.6"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2007",
      "BMI": "28.7",
      "Life.expectancy": "68.5"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2006",
      "BMI": "28.2",
      "Life.expectancy": "68.5"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2005",
      "BMI": "27.7",
      "Life.expectancy": "68.5"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2004",
      "BMI": "27.2",
      "Life.expectancy": "68.4"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2003",
      "BMI": "26.7",
      "Life.expectancy": "68.1"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2002",
      "BMI": "26.2",
      "Life.expectancy": "67.6"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2001",
      "BMI": "25.7",
      "Life.expectancy": "66.6"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2000",
      "BMI": "25.2",
      "Life.expectancy": "65.4"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2015",
      "BMI": "21.6",
      "Life.expectancy": "59.8"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2014",
      "BMI": "21.1",
      "Life.expectancy": "59.3"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2013",
      "BMI": "2.6",
      "Life.expectancy": "58.8"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2012",
      "BMI": "2.1",
      "Life.expectancy": "58.3"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2011",
      "BMI": "19.6",
      "Life.expectancy": "57.9"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2010",
      "BMI": "19.1",
      "Life.expectancy": "57.4"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2009",
      "BMI": "18.6",
      "Life.expectancy": "56.7"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2008",
      "BMI": "18.2",
      "Life.expectancy": "56.3"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2007",
      "BMI": "17.8",
      "Life.expectancy": "55.7"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2006",
      "BMI": "17.3",
      "Life.expectancy": "55"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2005",
      "BMI": "16.9",
      "Life.expectancy": "54.3"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2004",
      "BMI": "16.5",
      "Life.expectancy": "53.5"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2003",
      "BMI": "16.1",
      "Life.expectancy": "52.8"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2002",
      "BMI": "15.7",
      "Life.expectancy": "52.1"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2001",
      "BMI": "15.3",
      "Life.expectancy": "51.8"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2000",
      "BMI": "14.9",
      "Life.expectancy": "51.3"
    },
    {
      "Country": "Denmark",
      "Year": "2015",
      "BMI": "58.8",
      "Life.expectancy": "86"
    },
    {
      "Country": "Denmark",
      "Year": "2014",
      "BMI": "58.4",
      "Life.expectancy": "84"
    },
    {
      "Country": "Denmark",
      "Year": "2013",
      "BMI": "58.1",
      "Life.expectancy": "81"
    },
    {
      "Country": "Denmark",
      "Year": "2012",
      "BMI": "57.7",
      "Life.expectancy": "80"
    },
    {
      "Country": "Denmark",
      "Year": "2011",
      "BMI": "57.4",
      "Life.expectancy": "79.7"
    },
    {
      "Country": "Denmark",
      "Year": "2010",
      "BMI": "57",
      "Life.expectancy": "79.2"
    },
    {
      "Country": "Denmark",
      "Year": "2009",
      "BMI": "56.6",
      "Life.expectancy": "78.9"
    },
    {
      "Country": "Denmark",
      "Year": "2008",
      "BMI": "56.3",
      "Life.expectancy": "78.8"
    },
    {
      "Country": "Denmark",
      "Year": "2007",
      "BMI": "55.9",
      "Life.expectancy": "78.4"
    },
    {
      "Country": "Denmark",
      "Year": "2006",
      "BMI": "55.4",
      "Life.expectancy": "78.1"
    },
    {
      "Country": "Denmark",
      "Year": "2005",
      "BMI": "55",
      "Life.expectancy": "78.1"
    },
    {
      "Country": "Denmark",
      "Year": "2004",
      "BMI": "54.4",
      "Life.expectancy": "77.7"
    },
    {
      "Country": "Denmark",
      "Year": "2003",
      "BMI": "53.9",
      "Life.expectancy": "77.3"
    },
    {
      "Country": "Denmark",
      "Year": "2002",
      "BMI": "53.3",
      "Life.expectancy": "77"
    },
    {
      "Country": "Denmark",
      "Year": "2001",
      "BMI": "52.8",
      "Life.expectancy": "77"
    },
    {
      "Country": "Denmark",
      "Year": "2000",
      "BMI": "52.2",
      "Life.expectancy": "76.9"
    },
    {
      "Country": "Djibouti",
      "Year": "2015",
      "BMI": "35",
      "Life.expectancy": "63.5"
    },
    {
      "Country": "Djibouti",
      "Year": "2014",
      "BMI": "34.4",
      "Life.expectancy": "63"
    },
    {
      "Country": "Djibouti",
      "Year": "2013",
      "BMI": "33.8",
      "Life.expectancy": "62.7"
    },
    {
      "Country": "Djibouti",
      "Year": "2012",
      "BMI": "33.2",
      "Life.expectancy": "62.2"
    },
    {
      "Country": "Djibouti",
      "Year": "2011",
      "BMI": "32.7",
      "Life.expectancy": "61.8"
    },
    {
      "Country": "Djibouti",
      "Year": "2010",
      "BMI": "32.2",
      "Life.expectancy": "61.3"
    },
    {
      "Country": "Djibouti",
      "Year": "2009",
      "BMI": "31.7",
      "Life.expectancy": "69"
    },
    {
      "Country": "Djibouti",
      "Year": "2008",
      "BMI": "31.3",
      "Life.expectancy": "62"
    },
    {
      "Country": "Djibouti",
      "Year": "2007",
      "BMI": "3.9",
      "Life.expectancy": "59.8"
    },
    {
      "Country": "Djibouti",
      "Year": "2006",
      "BMI": "3.6",
      "Life.expectancy": "59.1"
    },
    {
      "Country": "Djibouti",
      "Year": "2005",
      "BMI": "3.2",
      "Life.expectancy": "58.6"
    },
    {
      "Country": "Djibouti",
      "Year": "2004",
      "BMI": "29.8",
      "Life.expectancy": "58.1"
    },
    {
      "Country": "Djibouti",
      "Year": "2003",
      "BMI": "29.4",
      "Life.expectancy": "58"
    },
    {
      "Country": "Djibouti",
      "Year": "2002",
      "BMI": "29",
      "Life.expectancy": "57.9"
    },
    {
      "Country": "Djibouti",
      "Year": "2001",
      "BMI": "28.6",
      "Life.expectancy": "57.7"
    },
    {
      "Country": "Djibouti",
      "Year": "2000",
      "BMI": "28.2",
      "Life.expectancy": "57.4"
    },
    {
      "Country": "Dominica",
      "Year": "2013",
      "BMI": "58.4",
      "Life.expectancy": "0"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2015",
      "BMI": "58.9",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2014",
      "BMI": "57.9",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2013",
      "BMI": "56.8",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2012",
      "BMI": "55.8",
      "Life.expectancy": "72.1"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2011",
      "BMI": "54.7",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2010",
      "BMI": "53.6",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2009",
      "BMI": "52.6",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2008",
      "BMI": "51.5",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2007",
      "BMI": "5.4",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2006",
      "BMI": "49.3",
      "Life.expectancy": "72.3"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2005",
      "BMI": "48.2",
      "Life.expectancy": "69.7"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2004",
      "BMI": "47.2",
      "Life.expectancy": "69.3"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2003",
      "BMI": "46.1",
      "Life.expectancy": "73"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2002",
      "BMI": "45.1",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2001",
      "BMI": "44.1",
      "Life.expectancy": "71.2"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2000",
      "BMI": "43.1",
      "Life.expectancy": "72"
    },
    {
      "Country": "Ecuador",
      "Year": "2015",
      "BMI": "54.2",
      "Life.expectancy": "76.2"
    },
    {
      "Country": "Ecuador",
      "Year": "2014",
      "BMI": "53.5",
      "Life.expectancy": "76"
    },
    {
      "Country": "Ecuador",
      "Year": "2013",
      "BMI": "52.8",
      "Life.expectancy": "76"
    },
    {
      "Country": "Ecuador",
      "Year": "2012",
      "BMI": "52.1",
      "Life.expectancy": "75.5"
    },
    {
      "Country": "Ecuador",
      "Year": "2011",
      "BMI": "51.4",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "Ecuador",
      "Year": "2010",
      "BMI": "5.7",
      "Life.expectancy": "75"
    },
    {
      "Country": "Ecuador",
      "Year": "2009",
      "BMI": "5",
      "Life.expectancy": "75.1"
    },
    {
      "Country": "Ecuador",
      "Year": "2008",
      "BMI": "49.3",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Ecuador",
      "Year": "2007",
      "BMI": "48.6",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Ecuador",
      "Year": "2006",
      "BMI": "47.9",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Ecuador",
      "Year": "2005",
      "BMI": "47.2",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Ecuador",
      "Year": "2004",
      "BMI": "46.5",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Ecuador",
      "Year": "2003",
      "BMI": "45.8",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Ecuador",
      "Year": "2002",
      "BMI": "45.1",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Ecuador",
      "Year": "2001",
      "BMI": "44.3",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Ecuador",
      "Year": "2000",
      "BMI": "43.6",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Egypt",
      "Year": "2015",
      "BMI": "61.1",
      "Life.expectancy": "79"
    },
    {
      "Country": "Egypt",
      "Year": "2014",
      "BMI": "6.2",
      "Life.expectancy": "78"
    },
    {
      "Country": "Egypt",
      "Year": "2013",
      "BMI": "59.4",
      "Life.expectancy": "79"
    },
    {
      "Country": "Egypt",
      "Year": "2012",
      "BMI": "58.6",
      "Life.expectancy": "72"
    },
    {
      "Country": "Egypt",
      "Year": "2011",
      "BMI": "57.8",
      "Life.expectancy": "74"
    },
    {
      "Country": "Egypt",
      "Year": "2010",
      "BMI": "57",
      "Life.expectancy": "70"
    },
    {
      "Country": "Egypt",
      "Year": "2009",
      "BMI": "56.2",
      "Life.expectancy": "69.9"
    },
    {
      "Country": "Egypt",
      "Year": "2008",
      "BMI": "55.5",
      "Life.expectancy": "69.8"
    },
    {
      "Country": "Egypt",
      "Year": "2007",
      "BMI": "54.8",
      "Life.expectancy": "69.7"
    },
    {
      "Country": "Egypt",
      "Year": "2006",
      "BMI": "54.2",
      "Life.expectancy": "69.5"
    },
    {
      "Country": "Egypt",
      "Year": "2005",
      "BMI": "53.5",
      "Life.expectancy": "69.4"
    },
    {
      "Country": "Egypt",
      "Year": "2004",
      "BMI": "52.9",
      "Life.expectancy": "69"
    },
    {
      "Country": "Egypt",
      "Year": "2003",
      "BMI": "52.3",
      "Life.expectancy": "68.6"
    },
    {
      "Country": "Egypt",
      "Year": "2002",
      "BMI": "51.8",
      "Life.expectancy": "68.7"
    },
    {
      "Country": "Egypt",
      "Year": "2001",
      "BMI": "51.2",
      "Life.expectancy": "68.6"
    },
    {
      "Country": "Egypt",
      "Year": "2000",
      "BMI": "5.7",
      "Life.expectancy": "68.8"
    },
    {
      "Country": "El Salvador",
      "Year": "2015",
      "BMI": "56.1",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "El Salvador",
      "Year": "2014",
      "BMI": "55.4",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "El Salvador",
      "Year": "2013",
      "BMI": "54.7",
      "Life.expectancy": "73"
    },
    {
      "Country": "El Salvador",
      "Year": "2012",
      "BMI": "54.1",
      "Life.expectancy": "73"
    },
    {
      "Country": "El Salvador",
      "Year": "2011",
      "BMI": "53.4",
      "Life.expectancy": "72"
    },
    {
      "Country": "El Salvador",
      "Year": "2010",
      "BMI": "52.8",
      "Life.expectancy": "72"
    },
    {
      "Country": "El Salvador",
      "Year": "2009",
      "BMI": "52.1",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "El Salvador",
      "Year": "2008",
      "BMI": "51.4",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "El Salvador",
      "Year": "2007",
      "BMI": "5.8",
      "Life.expectancy": "71.2"
    },
    {
      "Country": "El Salvador",
      "Year": "2006",
      "BMI": "5.1",
      "Life.expectancy": "75"
    },
    {
      "Country": "El Salvador",
      "Year": "2005",
      "BMI": "49.4",
      "Life.expectancy": "71"
    },
    {
      "Country": "El Salvador",
      "Year": "2004",
      "BMI": "48.6",
      "Life.expectancy": "70"
    },
    {
      "Country": "El Salvador",
      "Year": "2003",
      "BMI": "47.8",
      "Life.expectancy": "69.9"
    },
    {
      "Country": "El Salvador",
      "Year": "2002",
      "BMI": "47",
      "Life.expectancy": "73"
    },
    {
      "Country": "El Salvador",
      "Year": "2001",
      "BMI": "46.2",
      "Life.expectancy": "68.9"
    },
    {
      "Country": "El Salvador",
      "Year": "2000",
      "BMI": "45.3",
      "Life.expectancy": "69"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2015",
      "BMI": "24.5",
      "Life.expectancy": "58.2"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2014",
      "BMI": "24",
      "Life.expectancy": "57.9"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2013",
      "BMI": "23.5",
      "Life.expectancy": "57.4"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2012",
      "BMI": "23",
      "Life.expectancy": "56.7"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2011",
      "BMI": "22.6",
      "Life.expectancy": "56.2"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2010",
      "BMI": "22.1",
      "Life.expectancy": "56.1"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2009",
      "BMI": "21.7",
      "Life.expectancy": "55.7"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2008",
      "BMI": "21.3",
      "Life.expectancy": "55.4"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2007",
      "BMI": "2.9",
      "Life.expectancy": "55"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2006",
      "BMI": "2.5",
      "Life.expectancy": "54.8"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2005",
      "BMI": "2.2",
      "Life.expectancy": "54.4"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2004",
      "BMI": "19.8",
      "Life.expectancy": "54.1"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2003",
      "BMI": "19.5",
      "Life.expectancy": "53.8"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2002",
      "BMI": "19.1",
      "Life.expectancy": "53.5"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2001",
      "BMI": "18.7",
      "Life.expectancy": "53.1"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2000",
      "BMI": "18.3",
      "Life.expectancy": "52.7"
    },
    {
      "Country": "Eritrea",
      "Year": "2015",
      "BMI": "18.6",
      "Life.expectancy": "64.7"
    },
    {
      "Country": "Eritrea",
      "Year": "2014",
      "BMI": "18",
      "Life.expectancy": "64.4"
    },
    {
      "Country": "Eritrea",
      "Year": "2013",
      "BMI": "17.5",
      "Life.expectancy": "64"
    },
    {
      "Country": "Eritrea",
      "Year": "2012",
      "BMI": "17",
      "Life.expectancy": "63.6"
    },
    {
      "Country": "Eritrea",
      "Year": "2011",
      "BMI": "16.5",
      "Life.expectancy": "62.9"
    },
    {
      "Country": "Eritrea",
      "Year": "2010",
      "BMI": "16",
      "Life.expectancy": "62.1"
    },
    {
      "Country": "Eritrea",
      "Year": "2009",
      "BMI": "15.5",
      "Life.expectancy": "61.4"
    },
    {
      "Country": "Eritrea",
      "Year": "2008",
      "BMI": "15.1",
      "Life.expectancy": "67"
    },
    {
      "Country": "Eritrea",
      "Year": "2007",
      "BMI": "14.7",
      "Life.expectancy": "62"
    },
    {
      "Country": "Eritrea",
      "Year": "2006",
      "BMI": "14.3",
      "Life.expectancy": "59.7"
    },
    {
      "Country": "Eritrea",
      "Year": "2005",
      "BMI": "13.9",
      "Life.expectancy": "59.4"
    },
    {
      "Country": "Eritrea",
      "Year": "2004",
      "BMI": "13.6",
      "Life.expectancy": "59.1"
    },
    {
      "Country": "Eritrea",
      "Year": "2003",
      "BMI": "13.3",
      "Life.expectancy": "58.8"
    },
    {
      "Country": "Eritrea",
      "Year": "2002",
      "BMI": "13.1",
      "Life.expectancy": "58.5"
    },
    {
      "Country": "Eritrea",
      "Year": "2001",
      "BMI": "12.8",
      "Life.expectancy": "58.1"
    },
    {
      "Country": "Eritrea",
      "Year": "2000",
      "BMI": "12.6",
      "Life.expectancy": "45.3"
    },
    {
      "Country": "Estonia",
      "Year": "2015",
      "BMI": "59.9",
      "Life.expectancy": "77.6"
    },
    {
      "Country": "Estonia",
      "Year": "2014",
      "BMI": "59.4",
      "Life.expectancy": "77.3"
    },
    {
      "Country": "Estonia",
      "Year": "2013",
      "BMI": "59",
      "Life.expectancy": "76.9"
    },
    {
      "Country": "Estonia",
      "Year": "2012",
      "BMI": "58.5",
      "Life.expectancy": "76.3"
    },
    {
      "Country": "Estonia",
      "Year": "2011",
      "BMI": "58",
      "Life.expectancy": "76.1"
    },
    {
      "Country": "Estonia",
      "Year": "2010",
      "BMI": "57.6",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "Estonia",
      "Year": "2009",
      "BMI": "57.1",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Estonia",
      "Year": "2008",
      "BMI": "56.7",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Estonia",
      "Year": "2007",
      "BMI": "56.3",
      "Life.expectancy": "73"
    },
    {
      "Country": "Estonia",
      "Year": "2006",
      "BMI": "55.9",
      "Life.expectancy": "73"
    },
    {
      "Country": "Estonia",
      "Year": "2005",
      "BMI": "55.5",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Estonia",
      "Year": "2004",
      "BMI": "55.2",
      "Life.expectancy": "72.3"
    },
    {
      "Country": "Estonia",
      "Year": "2003",
      "BMI": "54.9",
      "Life.expectancy": "71.9"
    },
    {
      "Country": "Estonia",
      "Year": "2002",
      "BMI": "54.6",
      "Life.expectancy": "71.2"
    },
    {
      "Country": "Estonia",
      "Year": "2001",
      "BMI": "54.3",
      "Life.expectancy": "78"
    },
    {
      "Country": "Estonia",
      "Year": "2000",
      "BMI": "54",
      "Life.expectancy": "78"
    },
    {
      "Country": "Ethiopia",
      "Year": "2015",
      "BMI": "17.6",
      "Life.expectancy": "64.8"
    },
    {
      "Country": "Ethiopia",
      "Year": "2014",
      "BMI": "17.2",
      "Life.expectancy": "64.2"
    },
    {
      "Country": "Ethiopia",
      "Year": "2013",
      "BMI": "16.8",
      "Life.expectancy": "63.7"
    },
    {
      "Country": "Ethiopia",
      "Year": "2012",
      "BMI": "16.4",
      "Life.expectancy": "63.3"
    },
    {
      "Country": "Ethiopia",
      "Year": "2011",
      "BMI": "16",
      "Life.expectancy": "62.6"
    },
    {
      "Country": "Ethiopia",
      "Year": "2010",
      "BMI": "15.6",
      "Life.expectancy": "61.8"
    },
    {
      "Country": "Ethiopia",
      "Year": "2009",
      "BMI": "15.3",
      "Life.expectancy": "68"
    },
    {
      "Country": "Ethiopia",
      "Year": "2008",
      "BMI": "14.9",
      "Life.expectancy": "59.8"
    },
    {
      "Country": "Ethiopia",
      "Year": "2007",
      "BMI": "14.5",
      "Life.expectancy": "58.5"
    },
    {
      "Country": "Ethiopia",
      "Year": "2006",
      "BMI": "14.2",
      "Life.expectancy": "57.2"
    },
    {
      "Country": "Ethiopia",
      "Year": "2005",
      "BMI": "13.8",
      "Life.expectancy": "56"
    },
    {
      "Country": "Ethiopia",
      "Year": "2004",
      "BMI": "13.5",
      "Life.expectancy": "55"
    },
    {
      "Country": "Ethiopia",
      "Year": "2003",
      "BMI": "13.2",
      "Life.expectancy": "54"
    },
    {
      "Country": "Ethiopia",
      "Year": "2002",
      "BMI": "12.9",
      "Life.expectancy": "53.2"
    },
    {
      "Country": "Ethiopia",
      "Year": "2001",
      "BMI": "12.6",
      "Life.expectancy": "52.5"
    },
    {
      "Country": "Ethiopia",
      "Year": "2000",
      "BMI": "12.3",
      "Life.expectancy": "51.2"
    },
    {
      "Country": "Fiji",
      "Year": "2015",
      "BMI": "62.7",
      "Life.expectancy": "69.9"
    },
    {
      "Country": "Fiji",
      "Year": "2014",
      "BMI": "61.9",
      "Life.expectancy": "69.7"
    },
    {
      "Country": "Fiji",
      "Year": "2013",
      "BMI": "61.1",
      "Life.expectancy": "69.6"
    },
    {
      "Country": "Fiji",
      "Year": "2012",
      "BMI": "6.2",
      "Life.expectancy": "69.4"
    },
    {
      "Country": "Fiji",
      "Year": "2011",
      "BMI": "59.5",
      "Life.expectancy": "69.2"
    },
    {
      "Country": "Fiji",
      "Year": "2010",
      "BMI": "58.7",
      "Life.expectancy": "69.1"
    },
    {
      "Country": "Fiji",
      "Year": "2009",
      "BMI": "58",
      "Life.expectancy": "68.9"
    },
    {
      "Country": "Fiji",
      "Year": "2008",
      "BMI": "57.3",
      "Life.expectancy": "68.7"
    },
    {
      "Country": "Fiji",
      "Year": "2007",
      "BMI": "56.6",
      "Life.expectancy": "68.6"
    },
    {
      "Country": "Fiji",
      "Year": "2006",
      "BMI": "55.9",
      "Life.expectancy": "68.5"
    },
    {
      "Country": "Fiji",
      "Year": "2005",
      "BMI": "55.1",
      "Life.expectancy": "68.3"
    },
    {
      "Country": "Fiji",
      "Year": "2004",
      "BMI": "54.2",
      "Life.expectancy": "68.1"
    },
    {
      "Country": "Fiji",
      "Year": "2003",
      "BMI": "53.2",
      "Life.expectancy": "68"
    },
    {
      "Country": "Fiji",
      "Year": "2002",
      "BMI": "52.2",
      "Life.expectancy": "67.9"
    },
    {
      "Country": "Fiji",
      "Year": "2001",
      "BMI": "51.2",
      "Life.expectancy": "67.8"
    },
    {
      "Country": "Fiji",
      "Year": "2000",
      "BMI": "5.2",
      "Life.expectancy": "67.7"
    },
    {
      "Country": "Finland",
      "Year": "2015",
      "BMI": "62.1",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "Finland",
      "Year": "2014",
      "BMI": "61.7",
      "Life.expectancy": "89"
    },
    {
      "Country": "Finland",
      "Year": "2013",
      "BMI": "61.4",
      "Life.expectancy": "87"
    },
    {
      "Country": "Finland",
      "Year": "2012",
      "BMI": "61",
      "Life.expectancy": "84"
    },
    {
      "Country": "Finland",
      "Year": "2011",
      "BMI": "6.6",
      "Life.expectancy": "83"
    },
    {
      "Country": "Finland",
      "Year": "2010",
      "BMI": "6.2",
      "Life.expectancy": "79.9"
    },
    {
      "Country": "Finland",
      "Year": "2009",
      "BMI": "59.8",
      "Life.expectancy": "79.7"
    },
    {
      "Country": "Finland",
      "Year": "2008",
      "BMI": "59.4",
      "Life.expectancy": "79.6"
    },
    {
      "Country": "Finland",
      "Year": "2007",
      "BMI": "59",
      "Life.expectancy": "79.3"
    },
    {
      "Country": "Finland",
      "Year": "2006",
      "BMI": "58.6",
      "Life.expectancy": "79.2"
    },
    {
      "Country": "Finland",
      "Year": "2005",
      "BMI": "58.1",
      "Life.expectancy": "78.9"
    },
    {
      "Country": "Finland",
      "Year": "2004",
      "BMI": "57.6",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "Finland",
      "Year": "2003",
      "BMI": "57.1",
      "Life.expectancy": "78.4"
    },
    {
      "Country": "Finland",
      "Year": "2002",
      "BMI": "56.6",
      "Life.expectancy": "78.1"
    },
    {
      "Country": "Finland",
      "Year": "2001",
      "BMI": "56.1",
      "Life.expectancy": "78"
    },
    {
      "Country": "Finland",
      "Year": "2000",
      "BMI": "55.5",
      "Life.expectancy": "77.5"
    },
    {
      "Country": "France",
      "Year": "2015",
      "BMI": "62.5",
      "Life.expectancy": "82.4"
    },
    {
      "Country": "France",
      "Year": "2014",
      "BMI": "62",
      "Life.expectancy": "82.2"
    },
    {
      "Country": "France",
      "Year": "2013",
      "BMI": "61.6",
      "Life.expectancy": "82"
    },
    {
      "Country": "France",
      "Year": "2012",
      "BMI": "61.1",
      "Life.expectancy": "81.5"
    },
    {
      "Country": "France",
      "Year": "2011",
      "BMI": "6.6",
      "Life.expectancy": "81.7"
    },
    {
      "Country": "France",
      "Year": "2010",
      "BMI": "6.1",
      "Life.expectancy": "81.3"
    },
    {
      "Country": "France",
      "Year": "2009",
      "BMI": "59.6",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "France",
      "Year": "2008",
      "BMI": "59.1",
      "Life.expectancy": "89"
    },
    {
      "Country": "France",
      "Year": "2007",
      "BMI": "58.6",
      "Life.expectancy": "89"
    },
    {
      "Country": "France",
      "Year": "2006",
      "BMI": "58",
      "Life.expectancy": "86"
    },
    {
      "Country": "France",
      "Year": "2005",
      "BMI": "57.5",
      "Life.expectancy": "81"
    },
    {
      "Country": "France",
      "Year": "2004",
      "BMI": "57",
      "Life.expectancy": "82"
    },
    {
      "Country": "France",
      "Year": "2003",
      "BMI": "56.4",
      "Life.expectancy": "79.3"
    },
    {
      "Country": "France",
      "Year": "2002",
      "BMI": "55.8",
      "Life.expectancy": "79.2"
    },
    {
      "Country": "France",
      "Year": "2001",
      "BMI": "55.2",
      "Life.expectancy": "79"
    },
    {
      "Country": "France",
      "Year": "2000",
      "BMI": "54.6",
      "Life.expectancy": "78.8"
    },
    {
      "Country": "Gabon",
      "Year": "2015",
      "BMI": "36.3",
      "Life.expectancy": "66"
    },
    {
      "Country": "Gabon",
      "Year": "2014",
      "BMI": "35.8",
      "Life.expectancy": "65.5"
    },
    {
      "Country": "Gabon",
      "Year": "2013",
      "BMI": "35.2",
      "Life.expectancy": "64.6"
    },
    {
      "Country": "Gabon",
      "Year": "2012",
      "BMI": "34.6",
      "Life.expectancy": "63.5"
    },
    {
      "Country": "Gabon",
      "Year": "2011",
      "BMI": "34.1",
      "Life.expectancy": "62.8"
    },
    {
      "Country": "Gabon",
      "Year": "2010",
      "BMI": "33.5",
      "Life.expectancy": "62.3"
    },
    {
      "Country": "Gabon",
      "Year": "2009",
      "BMI": "33",
      "Life.expectancy": "61.7"
    },
    {
      "Country": "Gabon",
      "Year": "2008",
      "BMI": "32.4",
      "Life.expectancy": "61.6"
    },
    {
      "Country": "Gabon",
      "Year": "2007",
      "BMI": "31.9",
      "Life.expectancy": "61.6"
    },
    {
      "Country": "Gabon",
      "Year": "2006",
      "BMI": "31.4",
      "Life.expectancy": "61.4"
    },
    {
      "Country": "Gabon",
      "Year": "2005",
      "BMI": "3.8",
      "Life.expectancy": "65"
    },
    {
      "Country": "Gabon",
      "Year": "2004",
      "BMI": "3.3",
      "Life.expectancy": "59.7"
    },
    {
      "Country": "Gabon",
      "Year": "2003",
      "BMI": "29.8",
      "Life.expectancy": "59.7"
    },
    {
      "Country": "Gabon",
      "Year": "2002",
      "BMI": "29.2",
      "Life.expectancy": "59.7"
    },
    {
      "Country": "Gabon",
      "Year": "2001",
      "BMI": "28.7",
      "Life.expectancy": "59.8"
    },
    {
      "Country": "Gabon",
      "Year": "2000",
      "BMI": "28.1",
      "Life.expectancy": "61"
    },
    {
      "Country": "Gambia",
      "Year": "2015",
      "BMI": "27.3",
      "Life.expectancy": "61.1"
    },
    {
      "Country": "Gambia",
      "Year": "2014",
      "BMI": "26.7",
      "Life.expectancy": "68"
    },
    {
      "Country": "Gambia",
      "Year": "2013",
      "BMI": "26",
      "Life.expectancy": "66"
    },
    {
      "Country": "Gambia",
      "Year": "2012",
      "BMI": "25.4",
      "Life.expectancy": "62"
    },
    {
      "Country": "Gambia",
      "Year": "2011",
      "BMI": "24.8",
      "Life.expectancy": "59.8"
    },
    {
      "Country": "Gambia",
      "Year": "2010",
      "BMI": "24.1",
      "Life.expectancy": "59.3"
    },
    {
      "Country": "Gambia",
      "Year": "2009",
      "BMI": "23.5",
      "Life.expectancy": "59"
    },
    {
      "Country": "Gambia",
      "Year": "2008",
      "BMI": "22.8",
      "Life.expectancy": "58.7"
    },
    {
      "Country": "Gambia",
      "Year": "2007",
      "BMI": "22.2",
      "Life.expectancy": "58.5"
    },
    {
      "Country": "Gambia",
      "Year": "2006",
      "BMI": "21.5",
      "Life.expectancy": "58.2"
    },
    {
      "Country": "Gambia",
      "Year": "2005",
      "BMI": "2.9",
      "Life.expectancy": "57.7"
    },
    {
      "Country": "Gambia",
      "Year": "2004",
      "BMI": "2.3",
      "Life.expectancy": "57.3"
    },
    {
      "Country": "Gambia",
      "Year": "2003",
      "BMI": "19.7",
      "Life.expectancy": "57"
    },
    {
      "Country": "Gambia",
      "Year": "2002",
      "BMI": "19.1",
      "Life.expectancy": "56.6"
    },
    {
      "Country": "Gambia",
      "Year": "2001",
      "BMI": "18.5",
      "Life.expectancy": "56.3"
    },
    {
      "Country": "Gambia",
      "Year": "2000",
      "BMI": "18",
      "Life.expectancy": "55.9"
    },
    {
      "Country": "Georgia",
      "Year": "2015",
      "BMI": "56.2",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Georgia",
      "Year": "2014",
      "BMI": "55.3",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Georgia",
      "Year": "2013",
      "BMI": "54.4",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Georgia",
      "Year": "2012",
      "BMI": "53.6",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Georgia",
      "Year": "2011",
      "BMI": "52.8",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Georgia",
      "Year": "2010",
      "BMI": "52",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Georgia",
      "Year": "2009",
      "BMI": "51.3",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Georgia",
      "Year": "2008",
      "BMI": "5.5",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Georgia",
      "Year": "2007",
      "BMI": "49.9",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Georgia",
      "Year": "2006",
      "BMI": "49.2",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Georgia",
      "Year": "2005",
      "BMI": "48.6",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Georgia",
      "Year": "2004",
      "BMI": "48.1",
      "Life.expectancy": "72.3"
    },
    {
      "Country": "Georgia",
      "Year": "2003",
      "BMI": "47.5",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Georgia",
      "Year": "2002",
      "BMI": "47",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "Georgia",
      "Year": "2001",
      "BMI": "46.5",
      "Life.expectancy": "73"
    },
    {
      "Country": "Georgia",
      "Year": "2000",
      "BMI": "46",
      "Life.expectancy": "71.8"
    },
    {
      "Country": "Germany",
      "Year": "2015",
      "BMI": "62.3",
      "Life.expectancy": "81"
    },
    {
      "Country": "Germany",
      "Year": "2014",
      "BMI": "61.9",
      "Life.expectancy": "89"
    },
    {
      "Country": "Germany",
      "Year": "2013",
      "BMI": "61.4",
      "Life.expectancy": "86"
    },
    {
      "Country": "Germany",
      "Year": "2012",
      "BMI": "6.9",
      "Life.expectancy": "86"
    },
    {
      "Country": "Germany",
      "Year": "2011",
      "BMI": "6.4",
      "Life.expectancy": "85"
    },
    {
      "Country": "Germany",
      "Year": "2010",
      "BMI": "59.9",
      "Life.expectancy": "81"
    },
    {
      "Country": "Germany",
      "Year": "2009",
      "BMI": "59.5",
      "Life.expectancy": "80"
    },
    {
      "Country": "Germany",
      "Year": "2008",
      "BMI": "59",
      "Life.expectancy": "79.9"
    },
    {
      "Country": "Germany",
      "Year": "2007",
      "BMI": "58.5",
      "Life.expectancy": "79.8"
    },
    {
      "Country": "Germany",
      "Year": "2006",
      "BMI": "58",
      "Life.expectancy": "79.6"
    },
    {
      "Country": "Germany",
      "Year": "2005",
      "BMI": "57.6",
      "Life.expectancy": "79.2"
    },
    {
      "Country": "Germany",
      "Year": "2004",
      "BMI": "57.1",
      "Life.expectancy": "79.1"
    },
    {
      "Country": "Germany",
      "Year": "2003",
      "BMI": "56.6",
      "Life.expectancy": "78.5"
    },
    {
      "Country": "Germany",
      "Year": "2002",
      "BMI": "56.1",
      "Life.expectancy": "78.4"
    },
    {
      "Country": "Germany",
      "Year": "2001",
      "BMI": "55.6",
      "Life.expectancy": "78.3"
    },
    {
      "Country": "Germany",
      "Year": "2000",
      "BMI": "55.1",
      "Life.expectancy": "78"
    },
    {
      "Country": "Ghana",
      "Year": "2015",
      "BMI": "28.6",
      "Life.expectancy": "62.4"
    },
    {
      "Country": "Ghana",
      "Year": "2014",
      "BMI": "28",
      "Life.expectancy": "62.1"
    },
    {
      "Country": "Ghana",
      "Year": "2013",
      "BMI": "27.3",
      "Life.expectancy": "61.9"
    },
    {
      "Country": "Ghana",
      "Year": "2012",
      "BMI": "26.7",
      "Life.expectancy": "61.6"
    },
    {
      "Country": "Ghana",
      "Year": "2011",
      "BMI": "26.1",
      "Life.expectancy": "61.2"
    },
    {
      "Country": "Ghana",
      "Year": "2010",
      "BMI": "25.5",
      "Life.expectancy": "69"
    },
    {
      "Country": "Ghana",
      "Year": "2009",
      "BMI": "24.9",
      "Life.expectancy": "66"
    },
    {
      "Country": "Ghana",
      "Year": "2008",
      "BMI": "24.2",
      "Life.expectancy": "63"
    },
    {
      "Country": "Ghana",
      "Year": "2007",
      "BMI": "23.6",
      "Life.expectancy": "59.9"
    },
    {
      "Country": "Ghana",
      "Year": "2006",
      "BMI": "23",
      "Life.expectancy": "59.4"
    },
    {
      "Country": "Ghana",
      "Year": "2005",
      "BMI": "22.4",
      "Life.expectancy": "58.9"
    },
    {
      "Country": "Ghana",
      "Year": "2004",
      "BMI": "21.8",
      "Life.expectancy": "58.3"
    },
    {
      "Country": "Ghana",
      "Year": "2003",
      "BMI": "21.2",
      "Life.expectancy": "57.9"
    },
    {
      "Country": "Ghana",
      "Year": "2002",
      "BMI": "2.7",
      "Life.expectancy": "57.6"
    },
    {
      "Country": "Ghana",
      "Year": "2001",
      "BMI": "2.1",
      "Life.expectancy": "57.4"
    },
    {
      "Country": "Ghana",
      "Year": "2000",
      "BMI": "19.5",
      "Life.expectancy": "57.2"
    },
    {
      "Country": "Greece",
      "Year": "2015",
      "BMI": "66.5",
      "Life.expectancy": "81"
    },
    {
      "Country": "Greece",
      "Year": "2014",
      "BMI": "66",
      "Life.expectancy": "88"
    },
    {
      "Country": "Greece",
      "Year": "2013",
      "BMI": "65.4",
      "Life.expectancy": "86"
    },
    {
      "Country": "Greece",
      "Year": "2012",
      "BMI": "64.9",
      "Life.expectancy": "84"
    },
    {
      "Country": "Greece",
      "Year": "2011",
      "BMI": "64.3",
      "Life.expectancy": "85"
    },
    {
      "Country": "Greece",
      "Year": "2010",
      "BMI": "63.7",
      "Life.expectancy": "83"
    },
    {
      "Country": "Greece",
      "Year": "2009",
      "BMI": "63.1",
      "Life.expectancy": "80"
    },
    {
      "Country": "Greece",
      "Year": "2008",
      "BMI": "62.4",
      "Life.expectancy": "79.9"
    },
    {
      "Country": "Greece",
      "Year": "2007",
      "BMI": "61.8",
      "Life.expectancy": "79.4"
    },
    {
      "Country": "Greece",
      "Year": "2006",
      "BMI": "61.2",
      "Life.expectancy": "79.7"
    },
    {
      "Country": "Greece",
      "Year": "2005",
      "BMI": "6.5",
      "Life.expectancy": "79.3"
    },
    {
      "Country": "Greece",
      "Year": "2004",
      "BMI": "59.9",
      "Life.expectancy": "79.2"
    },
    {
      "Country": "Greece",
      "Year": "2003",
      "BMI": "59.2",
      "Life.expectancy": "79.1"
    },
    {
      "Country": "Greece",
      "Year": "2002",
      "BMI": "58.6",
      "Life.expectancy": "79"
    },
    {
      "Country": "Greece",
      "Year": "2001",
      "BMI": "58",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "Greece",
      "Year": "2000",
      "BMI": "57.4",
      "Life.expectancy": "78.2"
    },
    {
      "Country": "Grenada",
      "Year": "2015",
      "BMI": "48.4",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Grenada",
      "Year": "2014",
      "BMI": "47.4",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Grenada",
      "Year": "2013",
      "BMI": "46.5",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Grenada",
      "Year": "2012",
      "BMI": "45.6",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Grenada",
      "Year": "2011",
      "BMI": "44.7",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Grenada",
      "Year": "2010",
      "BMI": "43.9",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Grenada",
      "Year": "2009",
      "BMI": "43.1",
      "Life.expectancy": "72.4"
    },
    {
      "Country": "Grenada",
      "Year": "2008",
      "BMI": "42.4",
      "Life.expectancy": "72.1"
    },
    {
      "Country": "Grenada",
      "Year": "2007",
      "BMI": "41.8",
      "Life.expectancy": "71.9"
    },
    {
      "Country": "Grenada",
      "Year": "2006",
      "BMI": "41.1",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "Grenada",
      "Year": "2005",
      "BMI": "4.5",
      "Life.expectancy": "71.5"
    },
    {
      "Country": "Grenada",
      "Year": "2004",
      "BMI": "39.9",
      "Life.expectancy": "73"
    },
    {
      "Country": "Grenada",
      "Year": "2003",
      "BMI": "39.4",
      "Life.expectancy": "71.1"
    },
    {
      "Country": "Grenada",
      "Year": "2002",
      "BMI": "38.8",
      "Life.expectancy": "79"
    },
    {
      "Country": "Grenada",
      "Year": "2001",
      "BMI": "38.2",
      "Life.expectancy": "77"
    },
    {
      "Country": "Grenada",
      "Year": "2000",
      "BMI": "37.7",
      "Life.expectancy": "74"
    },
    {
      "Country": "Guatemala",
      "Year": "2015",
      "BMI": "5.6",
      "Life.expectancy": "71.9"
    },
    {
      "Country": "Guatemala",
      "Year": "2014",
      "BMI": "49.9",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "Guatemala",
      "Year": "2013",
      "BMI": "49.3",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "Guatemala",
      "Year": "2012",
      "BMI": "48.6",
      "Life.expectancy": "71.3"
    },
    {
      "Country": "Guatemala",
      "Year": "2011",
      "BMI": "47.9",
      "Life.expectancy": "71.1"
    },
    {
      "Country": "Guatemala",
      "Year": "2010",
      "BMI": "47.2",
      "Life.expectancy": "77"
    },
    {
      "Country": "Guatemala",
      "Year": "2009",
      "BMI": "46.5",
      "Life.expectancy": "76"
    },
    {
      "Country": "Guatemala",
      "Year": "2008",
      "BMI": "45.9",
      "Life.expectancy": "79"
    },
    {
      "Country": "Guatemala",
      "Year": "2007",
      "BMI": "45.2",
      "Life.expectancy": "75"
    },
    {
      "Country": "Guatemala",
      "Year": "2006",
      "BMI": "44.5",
      "Life.expectancy": "69.7"
    },
    {
      "Country": "Guatemala",
      "Year": "2005",
      "BMI": "43.8",
      "Life.expectancy": "69.2"
    },
    {
      "Country": "Guatemala",
      "Year": "2004",
      "BMI": "43.1",
      "Life.expectancy": "69.6"
    },
    {
      "Country": "Guatemala",
      "Year": "2003",
      "BMI": "42.4",
      "Life.expectancy": "69.4"
    },
    {
      "Country": "Guatemala",
      "Year": "2002",
      "BMI": "41.7",
      "Life.expectancy": "69.3"
    },
    {
      "Country": "Guatemala",
      "Year": "2001",
      "BMI": "41.1",
      "Life.expectancy": "68.4"
    },
    {
      "Country": "Guatemala",
      "Year": "2000",
      "BMI": "4.4",
      "Life.expectancy": "67.7"
    },
    {
      "Country": "Guinea",
      "Year": "2015",
      "BMI": "23.3",
      "Life.expectancy": "59"
    },
    {
      "Country": "Guinea",
      "Year": "2014",
      "BMI": "22.7",
      "Life.expectancy": "58.1"
    },
    {
      "Country": "Guinea",
      "Year": "2013",
      "BMI": "22.2",
      "Life.expectancy": "58.8"
    },
    {
      "Country": "Guinea",
      "Year": "2012",
      "BMI": "21.7",
      "Life.expectancy": "58.4"
    },
    {
      "Country": "Guinea",
      "Year": "2011",
      "BMI": "21.2",
      "Life.expectancy": "58.1"
    },
    {
      "Country": "Guinea",
      "Year": "2010",
      "BMI": "2.8",
      "Life.expectancy": "57.8"
    },
    {
      "Country": "Guinea",
      "Year": "2009",
      "BMI": "2.3",
      "Life.expectancy": "57.3"
    },
    {
      "Country": "Guinea",
      "Year": "2008",
      "BMI": "19.8",
      "Life.expectancy": "56.8"
    },
    {
      "Country": "Guinea",
      "Year": "2007",
      "BMI": "19.4",
      "Life.expectancy": "56.4"
    },
    {
      "Country": "Guinea",
      "Year": "2006",
      "BMI": "19",
      "Life.expectancy": "55.6"
    },
    {
      "Country": "Guinea",
      "Year": "2005",
      "BMI": "18.5",
      "Life.expectancy": "54.7"
    },
    {
      "Country": "Guinea",
      "Year": "2004",
      "BMI": "18.1",
      "Life.expectancy": "54"
    },
    {
      "Country": "Guinea",
      "Year": "2003",
      "BMI": "17.7",
      "Life.expectancy": "53.3"
    },
    {
      "Country": "Guinea",
      "Year": "2002",
      "BMI": "17.3",
      "Life.expectancy": "52.9"
    },
    {
      "Country": "Guinea",
      "Year": "2001",
      "BMI": "16.9",
      "Life.expectancy": "52.5"
    },
    {
      "Country": "Guinea",
      "Year": "2000",
      "BMI": "16.6",
      "Life.expectancy": "52.5"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2015",
      "BMI": "26.3",
      "Life.expectancy": "58.9"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2014",
      "BMI": "25.6",
      "Life.expectancy": "58.4"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2013",
      "BMI": "25",
      "Life.expectancy": "58.1"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2012",
      "BMI": "24.3",
      "Life.expectancy": "57.6"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2011",
      "BMI": "23.7",
      "Life.expectancy": "57.1"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2010",
      "BMI": "23.1",
      "Life.expectancy": "56.7"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2009",
      "BMI": "22.5",
      "Life.expectancy": "56.3"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2008",
      "BMI": "21.9",
      "Life.expectancy": "55.6"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2007",
      "BMI": "21.3",
      "Life.expectancy": "55"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2006",
      "BMI": "2.7",
      "Life.expectancy": "54.4"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2005",
      "BMI": "2.1",
      "Life.expectancy": "53.9"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2004",
      "BMI": "19.6",
      "Life.expectancy": "53.5"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2003",
      "BMI": "19",
      "Life.expectancy": "53"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2002",
      "BMI": "18.5",
      "Life.expectancy": "52.8"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2001",
      "BMI": "17.9",
      "Life.expectancy": "52.5"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2000",
      "BMI": "17.4",
      "Life.expectancy": "52.1"
    },
    {
      "Country": "Guyana",
      "Year": "2015",
      "BMI": "46.7",
      "Life.expectancy": "66.2"
    },
    {
      "Country": "Guyana",
      "Year": "2014",
      "BMI": "45.9",
      "Life.expectancy": "66"
    },
    {
      "Country": "Guyana",
      "Year": "2013",
      "BMI": "45",
      "Life.expectancy": "65.9"
    },
    {
      "Country": "Guyana",
      "Year": "2012",
      "BMI": "44.1",
      "Life.expectancy": "65.8"
    },
    {
      "Country": "Guyana",
      "Year": "2011",
      "BMI": "43.2",
      "Life.expectancy": "65.6"
    },
    {
      "Country": "Guyana",
      "Year": "2010",
      "BMI": "42.4",
      "Life.expectancy": "65.9"
    },
    {
      "Country": "Guyana",
      "Year": "2009",
      "BMI": "41.6",
      "Life.expectancy": "66.1"
    },
    {
      "Country": "Guyana",
      "Year": "2008",
      "BMI": "4.9",
      "Life.expectancy": "66.3"
    },
    {
      "Country": "Guyana",
      "Year": "2007",
      "BMI": "4.3",
      "Life.expectancy": "65.7"
    },
    {
      "Country": "Guyana",
      "Year": "2006",
      "BMI": "39.6",
      "Life.expectancy": "65.2"
    },
    {
      "Country": "Guyana",
      "Year": "2005",
      "BMI": "39",
      "Life.expectancy": "65"
    },
    {
      "Country": "Guyana",
      "Year": "2004",
      "BMI": "38.4",
      "Life.expectancy": "65.1"
    },
    {
      "Country": "Guyana",
      "Year": "2003",
      "BMI": "37.8",
      "Life.expectancy": "65.3"
    },
    {
      "Country": "Guyana",
      "Year": "2002",
      "BMI": "37.1",
      "Life.expectancy": "65.3"
    },
    {
      "Country": "Guyana",
      "Year": "2001",
      "BMI": "36.4",
      "Life.expectancy": "65.4"
    },
    {
      "Country": "Guyana",
      "Year": "2000",
      "BMI": "35.7",
      "Life.expectancy": "65.4"
    },
    {
      "Country": "Haiti",
      "Year": "2015",
      "BMI": "49.9",
      "Life.expectancy": "63.5"
    },
    {
      "Country": "Haiti",
      "Year": "2014",
      "BMI": "48.8",
      "Life.expectancy": "63.1"
    },
    {
      "Country": "Haiti",
      "Year": "2013",
      "BMI": "47.7",
      "Life.expectancy": "62.7"
    },
    {
      "Country": "Haiti",
      "Year": "2012",
      "BMI": "46.5",
      "Life.expectancy": "62.3"
    },
    {
      "Country": "Haiti",
      "Year": "2011",
      "BMI": "45.3",
      "Life.expectancy": "62.3"
    },
    {
      "Country": "Haiti",
      "Year": "2010",
      "BMI": "44.2",
      "Life.expectancy": "36.3"
    },
    {
      "Country": "Haiti",
      "Year": "2009",
      "BMI": "43",
      "Life.expectancy": "62.5"
    },
    {
      "Country": "Haiti",
      "Year": "2008",
      "BMI": "41.8",
      "Life.expectancy": "62.1"
    },
    {
      "Country": "Haiti",
      "Year": "2007",
      "BMI": "4.7",
      "Life.expectancy": "61.8"
    },
    {
      "Country": "Haiti",
      "Year": "2006",
      "BMI": "39.6",
      "Life.expectancy": "61.1"
    },
    {
      "Country": "Haiti",
      "Year": "2005",
      "BMI": "38.5",
      "Life.expectancy": "65"
    },
    {
      "Country": "Haiti",
      "Year": "2004",
      "BMI": "37.5",
      "Life.expectancy": "58.7"
    },
    {
      "Country": "Haiti",
      "Year": "2003",
      "BMI": "36.5",
      "Life.expectancy": "59.7"
    },
    {
      "Country": "Haiti",
      "Year": "2002",
      "BMI": "35.6",
      "Life.expectancy": "59.3"
    },
    {
      "Country": "Haiti",
      "Year": "2001",
      "BMI": "34.8",
      "Life.expectancy": "58.9"
    },
    {
      "Country": "Haiti",
      "Year": "2000",
      "BMI": "34",
      "Life.expectancy": "58.6"
    },
    {
      "Country": "Honduras",
      "Year": "2015",
      "BMI": "51",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Honduras",
      "Year": "2014",
      "BMI": "5.2",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Honduras",
      "Year": "2013",
      "BMI": "49.3",
      "Life.expectancy": "74.3"
    },
    {
      "Country": "Honduras",
      "Year": "2012",
      "BMI": "48.4",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Honduras",
      "Year": "2011",
      "BMI": "47.6",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Honduras",
      "Year": "2010",
      "BMI": "46.8",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Honduras",
      "Year": "2009",
      "BMI": "45.9",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Honduras",
      "Year": "2008",
      "BMI": "45.1",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Honduras",
      "Year": "2007",
      "BMI": "44.3",
      "Life.expectancy": "73"
    },
    {
      "Country": "Honduras",
      "Year": "2006",
      "BMI": "43.5",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Honduras",
      "Year": "2005",
      "BMI": "42.8",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Honduras",
      "Year": "2004",
      "BMI": "42",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "Honduras",
      "Year": "2003",
      "BMI": "41.2",
      "Life.expectancy": "71.9"
    },
    {
      "Country": "Honduras",
      "Year": "2002",
      "BMI": "4.4",
      "Life.expectancy": "71.6"
    },
    {
      "Country": "Honduras",
      "Year": "2001",
      "BMI": "39.6",
      "Life.expectancy": "71.3"
    },
    {
      "Country": "Honduras",
      "Year": "2000",
      "BMI": "38.8",
      "Life.expectancy": "71"
    },
    {
      "Country": "Hungary",
      "Year": "2015",
      "BMI": "64.8",
      "Life.expectancy": "75.8"
    },
    {
      "Country": "Hungary",
      "Year": "2014",
      "BMI": "64.2",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "Hungary",
      "Year": "2013",
      "BMI": "63.6",
      "Life.expectancy": "75.5"
    },
    {
      "Country": "Hungary",
      "Year": "2012",
      "BMI": "63",
      "Life.expectancy": "75"
    },
    {
      "Country": "Hungary",
      "Year": "2011",
      "BMI": "62.4",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Hungary",
      "Year": "2010",
      "BMI": "61.7",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Hungary",
      "Year": "2009",
      "BMI": "61.1",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Hungary",
      "Year": "2008",
      "BMI": "6.5",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Hungary",
      "Year": "2007",
      "BMI": "59.9",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Hungary",
      "Year": "2006",
      "BMI": "59.3",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Hungary",
      "Year": "2005",
      "BMI": "58.8",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Hungary",
      "Year": "2004",
      "BMI": "58.2",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Hungary",
      "Year": "2003",
      "BMI": "57.6",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Hungary",
      "Year": "2002",
      "BMI": "57.1",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Hungary",
      "Year": "2001",
      "BMI": "56.6",
      "Life.expectancy": "72.3"
    },
    {
      "Country": "Hungary",
      "Year": "2000",
      "BMI": "56.1",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "Iceland",
      "Year": "2015",
      "BMI": "61",
      "Life.expectancy": "82.7"
    },
    {
      "Country": "Iceland",
      "Year": "2014",
      "BMI": "6.6",
      "Life.expectancy": "82.5"
    },
    {
      "Country": "Iceland",
      "Year": "2013",
      "BMI": "6.2",
      "Life.expectancy": "82.4"
    },
    {
      "Country": "Iceland",
      "Year": "2012",
      "BMI": "59.7",
      "Life.expectancy": "82.5"
    },
    {
      "Country": "Iceland",
      "Year": "2011",
      "BMI": "59.3",
      "Life.expectancy": "82.1"
    },
    {
      "Country": "Iceland",
      "Year": "2010",
      "BMI": "58.9",
      "Life.expectancy": "81.8"
    },
    {
      "Country": "Iceland",
      "Year": "2009",
      "BMI": "58.5",
      "Life.expectancy": "81.6"
    },
    {
      "Country": "Iceland",
      "Year": "2008",
      "BMI": "58.1",
      "Life.expectancy": "81.4"
    },
    {
      "Country": "Iceland",
      "Year": "2007",
      "BMI": "57.8",
      "Life.expectancy": "81.3"
    },
    {
      "Country": "Iceland",
      "Year": "2006",
      "BMI": "57.4",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "Iceland",
      "Year": "2005",
      "BMI": "56.9",
      "Life.expectancy": "81"
    },
    {
      "Country": "Iceland",
      "Year": "2004",
      "BMI": "56.5",
      "Life.expectancy": "88"
    },
    {
      "Country": "Iceland",
      "Year": "2003",
      "BMI": "55.9",
      "Life.expectancy": "87"
    },
    {
      "Country": "Iceland",
      "Year": "2002",
      "BMI": "55.4",
      "Life.expectancy": "84"
    },
    {
      "Country": "Iceland",
      "Year": "2001",
      "BMI": "54.8",
      "Life.expectancy": "80"
    },
    {
      "Country": "Iceland",
      "Year": "2000",
      "BMI": "54.2",
      "Life.expectancy": "79.7"
    },
    {
      "Country": "India",
      "Year": "2015",
      "BMI": "18.7",
      "Life.expectancy": "68.3"
    },
    {
      "Country": "India",
      "Year": "2014",
      "BMI": "18.1",
      "Life.expectancy": "68"
    },
    {
      "Country": "India",
      "Year": "2013",
      "BMI": "17.5",
      "Life.expectancy": "67.6"
    },
    {
      "Country": "India",
      "Year": "2012",
      "BMI": "17",
      "Life.expectancy": "67.3"
    },
    {
      "Country": "India",
      "Year": "2011",
      "BMI": "16.4",
      "Life.expectancy": "66.8"
    },
    {
      "Country": "India",
      "Year": "2010",
      "BMI": "15.9",
      "Life.expectancy": "66.4"
    },
    {
      "Country": "India",
      "Year": "2009",
      "BMI": "15.4",
      "Life.expectancy": "66"
    },
    {
      "Country": "India",
      "Year": "2008",
      "BMI": "14.9",
      "Life.expectancy": "65.5"
    },
    {
      "Country": "India",
      "Year": "2007",
      "BMI": "14.4",
      "Life.expectancy": "65.2"
    },
    {
      "Country": "India",
      "Year": "2006",
      "BMI": "13.9",
      "Life.expectancy": "64.8"
    },
    {
      "Country": "India",
      "Year": "2005",
      "BMI": "13.5",
      "Life.expectancy": "64.4"
    },
    {
      "Country": "India",
      "Year": "2004",
      "BMI": "13",
      "Life.expectancy": "64"
    },
    {
      "Country": "India",
      "Year": "2003",
      "BMI": "12.6",
      "Life.expectancy": "63.7"
    },
    {
      "Country": "India",
      "Year": "2002",
      "BMI": "12.2",
      "Life.expectancy": "63.3"
    },
    {
      "Country": "India",
      "Year": "2001",
      "BMI": "11.8",
      "Life.expectancy": "62.9"
    },
    {
      "Country": "India",
      "Year": "2000",
      "BMI": "11.4",
      "Life.expectancy": "62.5"
    },
    {
      "Country": "Indonesia",
      "Year": "2015",
      "BMI": "27.4",
      "Life.expectancy": "69.1"
    },
    {
      "Country": "Indonesia",
      "Year": "2014",
      "BMI": "26.5",
      "Life.expectancy": "68.9"
    },
    {
      "Country": "Indonesia",
      "Year": "2013",
      "BMI": "25.6",
      "Life.expectancy": "68.7"
    },
    {
      "Country": "Indonesia",
      "Year": "2012",
      "BMI": "24.7",
      "Life.expectancy": "68.5"
    },
    {
      "Country": "Indonesia",
      "Year": "2011",
      "BMI": "23.8",
      "Life.expectancy": "68.3"
    },
    {
      "Country": "Indonesia",
      "Year": "2010",
      "BMI": "22.9",
      "Life.expectancy": "68.1"
    },
    {
      "Country": "Indonesia",
      "Year": "2009",
      "BMI": "22.1",
      "Life.expectancy": "67.9"
    },
    {
      "Country": "Indonesia",
      "Year": "2008",
      "BMI": "21.3",
      "Life.expectancy": "67.7"
    },
    {
      "Country": "Indonesia",
      "Year": "2007",
      "BMI": "2.5",
      "Life.expectancy": "67.5"
    },
    {
      "Country": "Indonesia",
      "Year": "2006",
      "BMI": "19.7",
      "Life.expectancy": "67.3"
    },
    {
      "Country": "Indonesia",
      "Year": "2005",
      "BMI": "19",
      "Life.expectancy": "67.2"
    },
    {
      "Country": "Indonesia",
      "Year": "2004",
      "BMI": "18.2",
      "Life.expectancy": "65.3"
    },
    {
      "Country": "Indonesia",
      "Year": "2003",
      "BMI": "17.5",
      "Life.expectancy": "66.9"
    },
    {
      "Country": "Indonesia",
      "Year": "2002",
      "BMI": "16.7",
      "Life.expectancy": "66.7"
    },
    {
      "Country": "Indonesia",
      "Year": "2001",
      "BMI": "16",
      "Life.expectancy": "66.5"
    },
    {
      "Country": "Indonesia",
      "Year": "2000",
      "BMI": "15.4",
      "Life.expectancy": "66.3"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2015",
      "BMI": "59.7",
      "Life.expectancy": "75.5"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2014",
      "BMI": "58.5",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2013",
      "BMI": "57.2",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2012",
      "BMI": "56",
      "Life.expectancy": "75.1"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2011",
      "BMI": "54.8",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2010",
      "BMI": "53.6",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2009",
      "BMI": "52.5",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2008",
      "BMI": "51.4",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2007",
      "BMI": "5.4",
      "Life.expectancy": "72.4"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2006",
      "BMI": "49.4",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2005",
      "BMI": "48.5",
      "Life.expectancy": "72"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2004",
      "BMI": "47.6",
      "Life.expectancy": "71.8"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2003",
      "BMI": "46.9",
      "Life.expectancy": "75"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2002",
      "BMI": "46.2",
      "Life.expectancy": "71.2"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2001",
      "BMI": "45.5",
      "Life.expectancy": "78"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2000",
      "BMI": "44.9",
      "Life.expectancy": "73"
    },
    {
      "Country": "Iraq",
      "Year": "2015",
      "BMI": "59.1",
      "Life.expectancy": "68.9"
    },
    {
      "Country": "Iraq",
      "Year": "2014",
      "BMI": "58.5",
      "Life.expectancy": "67.9"
    },
    {
      "Country": "Iraq",
      "Year": "2013",
      "BMI": "57.8",
      "Life.expectancy": "69.5"
    },
    {
      "Country": "Iraq",
      "Year": "2012",
      "BMI": "57.2",
      "Life.expectancy": "76"
    },
    {
      "Country": "Iraq",
      "Year": "2011",
      "BMI": "56.5",
      "Life.expectancy": "77"
    },
    {
      "Country": "Iraq",
      "Year": "2010",
      "BMI": "55.8",
      "Life.expectancy": "76"
    },
    {
      "Country": "Iraq",
      "Year": "2009",
      "BMI": "55.2",
      "Life.expectancy": "74"
    },
    {
      "Country": "Iraq",
      "Year": "2008",
      "BMI": "54.5",
      "Life.expectancy": "69.3"
    },
    {
      "Country": "Iraq",
      "Year": "2007",
      "BMI": "53.8",
      "Life.expectancy": "65.9"
    },
    {
      "Country": "Iraq",
      "Year": "2006",
      "BMI": "53.2",
      "Life.expectancy": "64.7"
    },
    {
      "Country": "Iraq",
      "Year": "2005",
      "BMI": "52.5",
      "Life.expectancy": "66.8"
    },
    {
      "Country": "Iraq",
      "Year": "2004",
      "BMI": "51.9",
      "Life.expectancy": "67.2"
    },
    {
      "Country": "Iraq",
      "Year": "2003",
      "BMI": "51.3",
      "Life.expectancy": "66.5"
    },
    {
      "Country": "Iraq",
      "Year": "2002",
      "BMI": "5.6",
      "Life.expectancy": "74"
    },
    {
      "Country": "Iraq",
      "Year": "2001",
      "BMI": "5.1",
      "Life.expectancy": "72"
    },
    {
      "Country": "Iraq",
      "Year": "2000",
      "BMI": "49.5",
      "Life.expectancy": "70"
    },
    {
      "Country": "Ireland",
      "Year": "2015",
      "BMI": "62.8",
      "Life.expectancy": "81.4"
    },
    {
      "Country": "Ireland",
      "Year": "2014",
      "BMI": "62.1",
      "Life.expectancy": "81.2"
    },
    {
      "Country": "Ireland",
      "Year": "2013",
      "BMI": "61.3",
      "Life.expectancy": "81"
    },
    {
      "Country": "Ireland",
      "Year": "2012",
      "BMI": "6.5",
      "Life.expectancy": "85"
    },
    {
      "Country": "Ireland",
      "Year": "2011",
      "BMI": "59.7",
      "Life.expectancy": "84"
    },
    {
      "Country": "Ireland",
      "Year": "2010",
      "BMI": "58.9",
      "Life.expectancy": "86"
    },
    {
      "Country": "Ireland",
      "Year": "2009",
      "BMI": "58.2",
      "Life.expectancy": "79.7"
    },
    {
      "Country": "Ireland",
      "Year": "2008",
      "BMI": "57.4",
      "Life.expectancy": "79.8"
    },
    {
      "Country": "Ireland",
      "Year": "2007",
      "BMI": "56.6",
      "Life.expectancy": "79.5"
    },
    {
      "Country": "Ireland",
      "Year": "2006",
      "BMI": "55.8",
      "Life.expectancy": "79"
    },
    {
      "Country": "Ireland",
      "Year": "2005",
      "BMI": "55.1",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "Ireland",
      "Year": "2004",
      "BMI": "54.4",
      "Life.expectancy": "78.3"
    },
    {
      "Country": "Ireland",
      "Year": "2003",
      "BMI": "53.6",
      "Life.expectancy": "78"
    },
    {
      "Country": "Ireland",
      "Year": "2002",
      "BMI": "52.9",
      "Life.expectancy": "77.4"
    },
    {
      "Country": "Ireland",
      "Year": "2001",
      "BMI": "52.2",
      "Life.expectancy": "77"
    },
    {
      "Country": "Ireland",
      "Year": "2000",
      "BMI": "51.5",
      "Life.expectancy": "76.4"
    },
    {
      "Country": "Israel",
      "Year": "2015",
      "BMI": "64.9",
      "Life.expectancy": "82.5"
    },
    {
      "Country": "Israel",
      "Year": "2014",
      "BMI": "64.6",
      "Life.expectancy": "82.2"
    },
    {
      "Country": "Israel",
      "Year": "2013",
      "BMI": "64.2",
      "Life.expectancy": "82.1"
    },
    {
      "Country": "Israel",
      "Year": "2012",
      "BMI": "63.8",
      "Life.expectancy": "81.8"
    },
    {
      "Country": "Israel",
      "Year": "2011",
      "BMI": "63.4",
      "Life.expectancy": "81.8"
    },
    {
      "Country": "Israel",
      "Year": "2010",
      "BMI": "63",
      "Life.expectancy": "81.7"
    },
    {
      "Country": "Israel",
      "Year": "2009",
      "BMI": "62.6",
      "Life.expectancy": "81.5"
    },
    {
      "Country": "Israel",
      "Year": "2008",
      "BMI": "62.1",
      "Life.expectancy": "81"
    },
    {
      "Country": "Israel",
      "Year": "2007",
      "BMI": "61.6",
      "Life.expectancy": "84"
    },
    {
      "Country": "Israel",
      "Year": "2006",
      "BMI": "61.1",
      "Life.expectancy": "84"
    },
    {
      "Country": "Israel",
      "Year": "2005",
      "BMI": "6.6",
      "Life.expectancy": "80"
    },
    {
      "Country": "Israel",
      "Year": "2004",
      "BMI": "6.1",
      "Life.expectancy": "81"
    },
    {
      "Country": "Israel",
      "Year": "2003",
      "BMI": "59.6",
      "Life.expectancy": "79.7"
    },
    {
      "Country": "Israel",
      "Year": "2002",
      "BMI": "59.2",
      "Life.expectancy": "79.3"
    },
    {
      "Country": "Israel",
      "Year": "2001",
      "BMI": "58.7",
      "Life.expectancy": "79.3"
    },
    {
      "Country": "Israel",
      "Year": "2000",
      "BMI": "58.3",
      "Life.expectancy": "78.9"
    },
    {
      "Country": "Italy",
      "Year": "2015",
      "BMI": "63.6",
      "Life.expectancy": "82.7"
    },
    {
      "Country": "Italy",
      "Year": "2014",
      "BMI": "63.1",
      "Life.expectancy": "82.5"
    },
    {
      "Country": "Italy",
      "Year": "2013",
      "BMI": "62.6",
      "Life.expectancy": "82.3"
    },
    {
      "Country": "Italy",
      "Year": "2012",
      "BMI": "62.1",
      "Life.expectancy": "82"
    },
    {
      "Country": "Italy",
      "Year": "2011",
      "BMI": "61.5",
      "Life.expectancy": "82"
    },
    {
      "Country": "Italy",
      "Year": "2010",
      "BMI": "61",
      "Life.expectancy": "81.8"
    },
    {
      "Country": "Italy",
      "Year": "2009",
      "BMI": "6.5",
      "Life.expectancy": "81.6"
    },
    {
      "Country": "Italy",
      "Year": "2008",
      "BMI": "59.9",
      "Life.expectancy": "81.5"
    },
    {
      "Country": "Italy",
      "Year": "2007",
      "BMI": "59.4",
      "Life.expectancy": "81.3"
    },
    {
      "Country": "Italy",
      "Year": "2006",
      "BMI": "58.8",
      "Life.expectancy": "81.2"
    },
    {
      "Country": "Italy",
      "Year": "2005",
      "BMI": "58.2",
      "Life.expectancy": "88"
    },
    {
      "Country": "Italy",
      "Year": "2004",
      "BMI": "57.6",
      "Life.expectancy": "89"
    },
    {
      "Country": "Italy",
      "Year": "2003",
      "BMI": "57",
      "Life.expectancy": "79.9"
    },
    {
      "Country": "Italy",
      "Year": "2002",
      "BMI": "56.4",
      "Life.expectancy": "80"
    },
    {
      "Country": "Italy",
      "Year": "2001",
      "BMI": "55.7",
      "Life.expectancy": "79.8"
    },
    {
      "Country": "Italy",
      "Year": "2000",
      "BMI": "55",
      "Life.expectancy": "79.4"
    },
    {
      "Country": "Jamaica",
      "Year": "2015",
      "BMI": "54.2",
      "Life.expectancy": "76.2"
    },
    {
      "Country": "Jamaica",
      "Year": "2014",
      "BMI": "53.5",
      "Life.expectancy": "75.8"
    },
    {
      "Country": "Jamaica",
      "Year": "2013",
      "BMI": "52.7",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "Jamaica",
      "Year": "2012",
      "BMI": "52",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "Jamaica",
      "Year": "2011",
      "BMI": "51.2",
      "Life.expectancy": "75.2"
    },
    {
      "Country": "Jamaica",
      "Year": "2010",
      "BMI": "5.5",
      "Life.expectancy": "75"
    },
    {
      "Country": "Jamaica",
      "Year": "2009",
      "BMI": "49.7",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Jamaica",
      "Year": "2008",
      "BMI": "48.9",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Jamaica",
      "Year": "2007",
      "BMI": "48.1",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Jamaica",
      "Year": "2006",
      "BMI": "47.2",
      "Life.expectancy": "74"
    },
    {
      "Country": "Jamaica",
      "Year": "2005",
      "BMI": "46.3",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Jamaica",
      "Year": "2004",
      "BMI": "45.4",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Jamaica",
      "Year": "2003",
      "BMI": "44.5",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Jamaica",
      "Year": "2002",
      "BMI": "43.5",
      "Life.expectancy": "73"
    },
    {
      "Country": "Jamaica",
      "Year": "2001",
      "BMI": "42.5",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Jamaica",
      "Year": "2000",
      "BMI": "41.6",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Japan",
      "Year": "2015",
      "BMI": "29",
      "Life.expectancy": "83.7"
    },
    {
      "Country": "Japan",
      "Year": "2014",
      "BMI": "28.6",
      "Life.expectancy": "83.5"
    },
    {
      "Country": "Japan",
      "Year": "2013",
      "BMI": "28.2",
      "Life.expectancy": "83.5"
    },
    {
      "Country": "Japan",
      "Year": "2012",
      "BMI": "27.8",
      "Life.expectancy": "83.3"
    },
    {
      "Country": "Japan",
      "Year": "2011",
      "BMI": "27.4",
      "Life.expectancy": "82.5"
    },
    {
      "Country": "Japan",
      "Year": "2010",
      "BMI": "26.9",
      "Life.expectancy": "83"
    },
    {
      "Country": "Japan",
      "Year": "2009",
      "BMI": "26.4",
      "Life.expectancy": "83"
    },
    {
      "Country": "Japan",
      "Year": "2008",
      "BMI": "25.9",
      "Life.expectancy": "82.7"
    },
    {
      "Country": "Japan",
      "Year": "2007",
      "BMI": "25.4",
      "Life.expectancy": "82.6"
    },
    {
      "Country": "Japan",
      "Year": "2006",
      "BMI": "24.9",
      "Life.expectancy": "82.4"
    },
    {
      "Country": "Japan",
      "Year": "2005",
      "BMI": "24.4",
      "Life.expectancy": "82"
    },
    {
      "Country": "Japan",
      "Year": "2004",
      "BMI": "23.8",
      "Life.expectancy": "82.1"
    },
    {
      "Country": "Japan",
      "Year": "2003",
      "BMI": "23.4",
      "Life.expectancy": "81.9"
    },
    {
      "Country": "Japan",
      "Year": "2002",
      "BMI": "22.9",
      "Life.expectancy": "81.8"
    },
    {
      "Country": "Japan",
      "Year": "2001",
      "BMI": "22.5",
      "Life.expectancy": "81.5"
    },
    {
      "Country": "Japan",
      "Year": "2000",
      "BMI": "22.2",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "Jordan",
      "Year": "2015",
      "BMI": "65.6",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Jordan",
      "Year": "2014",
      "BMI": "64.8",
      "Life.expectancy": "74"
    },
    {
      "Country": "Jordan",
      "Year": "2013",
      "BMI": "64",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Jordan",
      "Year": "2012",
      "BMI": "63.2",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Jordan",
      "Year": "2011",
      "BMI": "62.4",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Jordan",
      "Year": "2010",
      "BMI": "61.7",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Jordan",
      "Year": "2009",
      "BMI": "6.9",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Jordan",
      "Year": "2008",
      "BMI": "6.1",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Jordan",
      "Year": "2007",
      "BMI": "59.3",
      "Life.expectancy": "73"
    },
    {
      "Country": "Jordan",
      "Year": "2006",
      "BMI": "58.6",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Jordan",
      "Year": "2005",
      "BMI": "57.8",
      "Life.expectancy": "72.4"
    },
    {
      "Country": "Jordan",
      "Year": "2004",
      "BMI": "57",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Jordan",
      "Year": "2003",
      "BMI": "56.3",
      "Life.expectancy": "72.3"
    },
    {
      "Country": "Jordan",
      "Year": "2002",
      "BMI": "55.5",
      "Life.expectancy": "72.1"
    },
    {
      "Country": "Jordan",
      "Year": "2001",
      "BMI": "54.8",
      "Life.expectancy": "71.9"
    },
    {
      "Country": "Jordan",
      "Year": "2000",
      "BMI": "54",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2015",
      "BMI": "53.1",
      "Life.expectancy": "72"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2014",
      "BMI": "52.3",
      "Life.expectancy": "69.9"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2013",
      "BMI": "51.4",
      "Life.expectancy": "69.5"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2012",
      "BMI": "5.6",
      "Life.expectancy": "69.1"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2011",
      "BMI": "49.9",
      "Life.expectancy": "68.5"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2010",
      "BMI": "49.2",
      "Life.expectancy": "67.8"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2009",
      "BMI": "48.5",
      "Life.expectancy": "67.8"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2008",
      "BMI": "47.9",
      "Life.expectancy": "66.6"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2007",
      "BMI": "47.3",
      "Life.expectancy": "65.3"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2006",
      "BMI": "46.8",
      "Life.expectancy": "65"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2005",
      "BMI": "46.3",
      "Life.expectancy": "64.6"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2004",
      "BMI": "45.8",
      "Life.expectancy": "64.7"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2003",
      "BMI": "45.3",
      "Life.expectancy": "64.4"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2002",
      "BMI": "44.8",
      "Life.expectancy": "64.7"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2001",
      "BMI": "44.4",
      "Life.expectancy": "64.4"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2000",
      "BMI": "43.9",
      "Life.expectancy": "63.9"
    },
    {
      "Country": "Kenya",
      "Year": "2015",
      "BMI": "22",
      "Life.expectancy": "63.4"
    },
    {
      "Country": "Kenya",
      "Year": "2014",
      "BMI": "21.3",
      "Life.expectancy": "62.9"
    },
    {
      "Country": "Kenya",
      "Year": "2013",
      "BMI": "2.7",
      "Life.expectancy": "62.6"
    },
    {
      "Country": "Kenya",
      "Year": "2012",
      "BMI": "2.1",
      "Life.expectancy": "62.1"
    },
    {
      "Country": "Kenya",
      "Year": "2011",
      "BMI": "19.5",
      "Life.expectancy": "61.2"
    },
    {
      "Country": "Kenya",
      "Year": "2010",
      "BMI": "18.9",
      "Life.expectancy": "63"
    },
    {
      "Country": "Kenya",
      "Year": "2009",
      "BMI": "18.4",
      "Life.expectancy": "59.1"
    },
    {
      "Country": "Kenya",
      "Year": "2008",
      "BMI": "17.9",
      "Life.expectancy": "57.9"
    },
    {
      "Country": "Kenya",
      "Year": "2007",
      "BMI": "17.3",
      "Life.expectancy": "56.8"
    },
    {
      "Country": "Kenya",
      "Year": "2006",
      "BMI": "16.9",
      "Life.expectancy": "55.3"
    },
    {
      "Country": "Kenya",
      "Year": "2005",
      "BMI": "16.4",
      "Life.expectancy": "54.1"
    },
    {
      "Country": "Kenya",
      "Year": "2004",
      "BMI": "15.9",
      "Life.expectancy": "53"
    },
    {
      "Country": "Kenya",
      "Year": "2003",
      "BMI": "15.5",
      "Life.expectancy": "52.4"
    },
    {
      "Country": "Kenya",
      "Year": "2002",
      "BMI": "15.1",
      "Life.expectancy": "52.1"
    },
    {
      "Country": "Kenya",
      "Year": "2001",
      "BMI": "14.7",
      "Life.expectancy": "51.9"
    },
    {
      "Country": "Kenya",
      "Year": "2000",
      "BMI": "14.4",
      "Life.expectancy": "51.9"
    },
    {
      "Country": "Kiribati",
      "Year": "2015",
      "BMI": "77.6",
      "Life.expectancy": "66.3"
    },
    {
      "Country": "Kiribati",
      "Year": "2014",
      "BMI": "77.1",
      "Life.expectancy": "66.1"
    },
    {
      "Country": "Kiribati",
      "Year": "2013",
      "BMI": "76.7",
      "Life.expectancy": "65.8"
    },
    {
      "Country": "Kiribati",
      "Year": "2012",
      "BMI": "76.2",
      "Life.expectancy": "65.7"
    },
    {
      "Country": "Kiribati",
      "Year": "2011",
      "BMI": "75.7",
      "Life.expectancy": "65.5"
    },
    {
      "Country": "Kiribati",
      "Year": "2010",
      "BMI": "75.2",
      "Life.expectancy": "65.3"
    },
    {
      "Country": "Kiribati",
      "Year": "2009",
      "BMI": "74.6",
      "Life.expectancy": "65.2"
    },
    {
      "Country": "Kiribati",
      "Year": "2008",
      "BMI": "74.1",
      "Life.expectancy": "65.1"
    },
    {
      "Country": "Kiribati",
      "Year": "2007",
      "BMI": "73.4",
      "Life.expectancy": "65"
    },
    {
      "Country": "Kiribati",
      "Year": "2006",
      "BMI": "72.8",
      "Life.expectancy": "65"
    },
    {
      "Country": "Kiribati",
      "Year": "2005",
      "BMI": "72.1",
      "Life.expectancy": "64.9"
    },
    {
      "Country": "Kiribati",
      "Year": "2004",
      "BMI": "71.4",
      "Life.expectancy": "64.8"
    },
    {
      "Country": "Kiribati",
      "Year": "2003",
      "BMI": "7.6",
      "Life.expectancy": "64.7"
    },
    {
      "Country": "Kiribati",
      "Year": "2002",
      "BMI": "69.7",
      "Life.expectancy": "64.6"
    },
    {
      "Country": "Kiribati",
      "Year": "2001",
      "BMI": "68.8",
      "Life.expectancy": "64.3"
    },
    {
      "Country": "Kiribati",
      "Year": "2000",
      "BMI": "67.9",
      "Life.expectancy": "64.1"
    },
    {
      "Country": "Kuwait",
      "Year": "2015",
      "BMI": "71.4",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Kuwait",
      "Year": "2014",
      "BMI": "7.8",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Kuwait",
      "Year": "2013",
      "BMI": "7.2",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Kuwait",
      "Year": "2012",
      "BMI": "69.5",
      "Life.expectancy": "74.3"
    },
    {
      "Country": "Kuwait",
      "Year": "2011",
      "BMI": "69",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Kuwait",
      "Year": "2010",
      "BMI": "68.4",
      "Life.expectancy": "74"
    },
    {
      "Country": "Kuwait",
      "Year": "2009",
      "BMI": "67.9",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Kuwait",
      "Year": "2008",
      "BMI": "67.5",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Kuwait",
      "Year": "2007",
      "BMI": "67.1",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Kuwait",
      "Year": "2006",
      "BMI": "66.7",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Kuwait",
      "Year": "2005",
      "BMI": "66.3",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Kuwait",
      "Year": "2004",
      "BMI": "65.9",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Kuwait",
      "Year": "2003",
      "BMI": "65.5",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Kuwait",
      "Year": "2002",
      "BMI": "65",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Kuwait",
      "Year": "2001",
      "BMI": "64.5",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Kuwait",
      "Year": "2000",
      "BMI": "64",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2015",
      "BMI": "44.9",
      "Life.expectancy": "71.1"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2014",
      "BMI": "43.9",
      "Life.expectancy": "78"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2013",
      "BMI": "43",
      "Life.expectancy": "77"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2012",
      "BMI": "42.2",
      "Life.expectancy": "69.9"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2011",
      "BMI": "41.4",
      "Life.expectancy": "69.4"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2010",
      "BMI": "4.7",
      "Life.expectancy": "68.8"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2009",
      "BMI": "4.1",
      "Life.expectancy": "68.5"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2008",
      "BMI": "39.5",
      "Life.expectancy": "67.6"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2007",
      "BMI": "39",
      "Life.expectancy": "67.2"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2006",
      "BMI": "38.5",
      "Life.expectancy": "66.7"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2005",
      "BMI": "38",
      "Life.expectancy": "66.9"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2004",
      "BMI": "37.5",
      "Life.expectancy": "67.1"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2003",
      "BMI": "37",
      "Life.expectancy": "66.6"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2002",
      "BMI": "36.5",
      "Life.expectancy": "66.7"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2001",
      "BMI": "36",
      "Life.expectancy": "67.2"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2000",
      "BMI": "35.6",
      "Life.expectancy": "66.6"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2015",
      "BMI": "21.7",
      "Life.expectancy": "65.7"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2014",
      "BMI": "2.9",
      "Life.expectancy": "65.3"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2013",
      "BMI": "2.1",
      "Life.expectancy": "64.9"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2012",
      "BMI": "19.4",
      "Life.expectancy": "64.4"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2011",
      "BMI": "18.7",
      "Life.expectancy": "64"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2010",
      "BMI": "18",
      "Life.expectancy": "63.6"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2009",
      "BMI": "17.3",
      "Life.expectancy": "63.1"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2008",
      "BMI": "16.7",
      "Life.expectancy": "62.6"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2007",
      "BMI": "16.1",
      "Life.expectancy": "62.1"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2006",
      "BMI": "15.5",
      "Life.expectancy": "61.5"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2005",
      "BMI": "14.9",
      "Life.expectancy": "61"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2004",
      "BMI": "14.4",
      "Life.expectancy": "64"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2003",
      "BMI": "13.8",
      "Life.expectancy": "59.8"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2002",
      "BMI": "13.3",
      "Life.expectancy": "59.3"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2001",
      "BMI": "12.7",
      "Life.expectancy": "58.7"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2000",
      "BMI": "12.3",
      "Life.expectancy": "58.1"
    },
    {
      "Country": "Latvia",
      "Year": "2015",
      "BMI": "61.2",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Latvia",
      "Year": "2014",
      "BMI": "6.7",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Latvia",
      "Year": "2013",
      "BMI": "6.2",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Latvia",
      "Year": "2012",
      "BMI": "59.8",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Latvia",
      "Year": "2011",
      "BMI": "59.4",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Latvia",
      "Year": "2010",
      "BMI": "58.9",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Latvia",
      "Year": "2009",
      "BMI": "58.5",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Latvia",
      "Year": "2008",
      "BMI": "58.1",
      "Life.expectancy": "71.9"
    },
    {
      "Country": "Latvia",
      "Year": "2007",
      "BMI": "57.7",
      "Life.expectancy": "78"
    },
    {
      "Country": "Latvia",
      "Year": "2006",
      "BMI": "57.4",
      "Life.expectancy": "75"
    },
    {
      "Country": "Latvia",
      "Year": "2005",
      "BMI": "57",
      "Life.expectancy": "76"
    },
    {
      "Country": "Latvia",
      "Year": "2004",
      "BMI": "56.6",
      "Life.expectancy": "71"
    },
    {
      "Country": "Latvia",
      "Year": "2003",
      "BMI": "56.3",
      "Life.expectancy": "78"
    },
    {
      "Country": "Latvia",
      "Year": "2002",
      "BMI": "56",
      "Life.expectancy": "73"
    },
    {
      "Country": "Latvia",
      "Year": "2001",
      "BMI": "55.7",
      "Life.expectancy": "69.9"
    },
    {
      "Country": "Latvia",
      "Year": "2000",
      "BMI": "55.4",
      "Life.expectancy": "71"
    },
    {
      "Country": "Lebanon",
      "Year": "2015",
      "BMI": "66.1",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Lebanon",
      "Year": "2014",
      "BMI": "65.4",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Lebanon",
      "Year": "2013",
      "BMI": "64.9",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Lebanon",
      "Year": "2012",
      "BMI": "64.4",
      "Life.expectancy": "75"
    },
    {
      "Country": "Lebanon",
      "Year": "2011",
      "BMI": "64",
      "Life.expectancy": "75"
    },
    {
      "Country": "Lebanon",
      "Year": "2010",
      "BMI": "63.5",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Lebanon",
      "Year": "2009",
      "BMI": "63",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Lebanon",
      "Year": "2008",
      "BMI": "62.5",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Lebanon",
      "Year": "2007",
      "BMI": "61.9",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Lebanon",
      "Year": "2006",
      "BMI": "61.4",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Lebanon",
      "Year": "2005",
      "BMI": "6.8",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Lebanon",
      "Year": "2004",
      "BMI": "6.2",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Lebanon",
      "Year": "2003",
      "BMI": "59.7",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Lebanon",
      "Year": "2002",
      "BMI": "59.1",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Lebanon",
      "Year": "2001",
      "BMI": "58.6",
      "Life.expectancy": "73"
    },
    {
      "Country": "Lebanon",
      "Year": "2000",
      "BMI": "57.9",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Lesotho",
      "Year": "2015",
      "BMI": "32.6",
      "Life.expectancy": "53.7"
    },
    {
      "Country": "Lesotho",
      "Year": "2014",
      "BMI": "32",
      "Life.expectancy": "52.1"
    },
    {
      "Country": "Lesotho",
      "Year": "2013",
      "BMI": "31.4",
      "Life.expectancy": "52.1"
    },
    {
      "Country": "Lesotho",
      "Year": "2012",
      "BMI": "3.8",
      "Life.expectancy": "52.2"
    },
    {
      "Country": "Lesotho",
      "Year": "2011",
      "BMI": "3.2",
      "Life.expectancy": "52.3"
    },
    {
      "Country": "Lesotho",
      "Year": "2010",
      "BMI": "29.7",
      "Life.expectancy": "51.1"
    },
    {
      "Country": "Lesotho",
      "Year": "2009",
      "BMI": "29.2",
      "Life.expectancy": "49.4"
    },
    {
      "Country": "Lesotho",
      "Year": "2008",
      "BMI": "28.8",
      "Life.expectancy": "47.8"
    },
    {
      "Country": "Lesotho",
      "Year": "2007",
      "BMI": "28.3",
      "Life.expectancy": "46.2"
    },
    {
      "Country": "Lesotho",
      "Year": "2006",
      "BMI": "27.9",
      "Life.expectancy": "45.3"
    },
    {
      "Country": "Lesotho",
      "Year": "2005",
      "BMI": "27.4",
      "Life.expectancy": "44.5"
    },
    {
      "Country": "Lesotho",
      "Year": "2004",
      "BMI": "26.9",
      "Life.expectancy": "44.8"
    },
    {
      "Country": "Lesotho",
      "Year": "2003",
      "BMI": "26.4",
      "Life.expectancy": "45.5"
    },
    {
      "Country": "Lesotho",
      "Year": "2002",
      "BMI": "25.9",
      "Life.expectancy": "46.4"
    },
    {
      "Country": "Lesotho",
      "Year": "2001",
      "BMI": "25.4",
      "Life.expectancy": "47.8"
    },
    {
      "Country": "Lesotho",
      "Year": "2000",
      "BMI": "24.9",
      "Life.expectancy": "49.3"
    },
    {
      "Country": "Liberia",
      "Year": "2015",
      "BMI": "27.3",
      "Life.expectancy": "61.4"
    },
    {
      "Country": "Liberia",
      "Year": "2014",
      "BMI": "26.7",
      "Life.expectancy": "58.1"
    },
    {
      "Country": "Liberia",
      "Year": "2013",
      "BMI": "26.1",
      "Life.expectancy": "61.1"
    },
    {
      "Country": "Liberia",
      "Year": "2012",
      "BMI": "25.6",
      "Life.expectancy": "67"
    },
    {
      "Country": "Liberia",
      "Year": "2011",
      "BMI": "25",
      "Life.expectancy": "62"
    },
    {
      "Country": "Liberia",
      "Year": "2010",
      "BMI": "24.5",
      "Life.expectancy": "59.7"
    },
    {
      "Country": "Liberia",
      "Year": "2009",
      "BMI": "24",
      "Life.expectancy": "59.2"
    },
    {
      "Country": "Liberia",
      "Year": "2008",
      "BMI": "23.4",
      "Life.expectancy": "58.6"
    },
    {
      "Country": "Liberia",
      "Year": "2007",
      "BMI": "22.9",
      "Life.expectancy": "57.9"
    },
    {
      "Country": "Liberia",
      "Year": "2006",
      "BMI": "22.4",
      "Life.expectancy": "56.7"
    },
    {
      "Country": "Liberia",
      "Year": "2005",
      "BMI": "22",
      "Life.expectancy": "55.3"
    },
    {
      "Country": "Liberia",
      "Year": "2004",
      "BMI": "21.5",
      "Life.expectancy": "54"
    },
    {
      "Country": "Liberia",
      "Year": "2003",
      "BMI": "21.1",
      "Life.expectancy": "50"
    },
    {
      "Country": "Liberia",
      "Year": "2002",
      "BMI": "2.7",
      "Life.expectancy": "56"
    },
    {
      "Country": "Liberia",
      "Year": "2001",
      "BMI": "2.4",
      "Life.expectancy": "51.5"
    },
    {
      "Country": "Liberia",
      "Year": "2000",
      "BMI": "2.2",
      "Life.expectancy": "51.9"
    },
    {
      "Country": "Libya",
      "Year": "2015",
      "BMI": "64.8",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Libya",
      "Year": "2014",
      "BMI": "63.8",
      "Life.expectancy": "72.4"
    },
    {
      "Country": "Libya",
      "Year": "2013",
      "BMI": "62.8",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Libya",
      "Year": "2012",
      "BMI": "61.8",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Libya",
      "Year": "2011",
      "BMI": "6.9",
      "Life.expectancy": "71.3"
    },
    {
      "Country": "Libya",
      "Year": "2010",
      "BMI": "59.9",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Libya",
      "Year": "2009",
      "BMI": "59",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Libya",
      "Year": "2008",
      "BMI": "58.2",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Libya",
      "Year": "2007",
      "BMI": "57.4",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Libya",
      "Year": "2006",
      "BMI": "56.7",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "Libya",
      "Year": "2005",
      "BMI": "56",
      "Life.expectancy": "71.9"
    },
    {
      "Country": "Libya",
      "Year": "2004",
      "BMI": "55.3",
      "Life.expectancy": "71.5"
    },
    {
      "Country": "Libya",
      "Year": "2003",
      "BMI": "54.6",
      "Life.expectancy": "71.3"
    },
    {
      "Country": "Libya",
      "Year": "2002",
      "BMI": "54",
      "Life.expectancy": "71.1"
    },
    {
      "Country": "Libya",
      "Year": "2001",
      "BMI": "53.4",
      "Life.expectancy": "71"
    },
    {
      "Country": "Libya",
      "Year": "2000",
      "BMI": "52.8",
      "Life.expectancy": "78"
    },
    {
      "Country": "Lithuania",
      "Year": "2015",
      "BMI": "62.4",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Lithuania",
      "Year": "2014",
      "BMI": "61.9",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Lithuania",
      "Year": "2013",
      "BMI": "61.4",
      "Life.expectancy": "73"
    },
    {
      "Country": "Lithuania",
      "Year": "2012",
      "BMI": "6.9",
      "Life.expectancy": "73"
    },
    {
      "Country": "Lithuania",
      "Year": "2011",
      "BMI": "6.5",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Lithuania",
      "Year": "2010",
      "BMI": "6",
      "Life.expectancy": "72.4"
    },
    {
      "Country": "Lithuania",
      "Year": "2009",
      "BMI": "59.7",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "Lithuania",
      "Year": "2008",
      "BMI": "59.3",
      "Life.expectancy": "71.1"
    },
    {
      "Country": "Lithuania",
      "Year": "2007",
      "BMI": "59",
      "Life.expectancy": "72"
    },
    {
      "Country": "Lithuania",
      "Year": "2006",
      "BMI": "58.7",
      "Life.expectancy": "76"
    },
    {
      "Country": "Lithuania",
      "Year": "2005",
      "BMI": "58.4",
      "Life.expectancy": "78"
    },
    {
      "Country": "Lithuania",
      "Year": "2004",
      "BMI": "58.1",
      "Life.expectancy": "71.6"
    },
    {
      "Country": "Lithuania",
      "Year": "2003",
      "BMI": "57.8",
      "Life.expectancy": "71.6"
    },
    {
      "Country": "Lithuania",
      "Year": "2002",
      "BMI": "57.5",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "Lithuania",
      "Year": "2001",
      "BMI": "57.2",
      "Life.expectancy": "71.2"
    },
    {
      "Country": "Lithuania",
      "Year": "2000",
      "BMI": "56.9",
      "Life.expectancy": "71.6"
    },
    {
      "Country": "Luxembourg",
      "Year": "2015",
      "BMI": "61.3",
      "Life.expectancy": "82"
    },
    {
      "Country": "Luxembourg",
      "Year": "2014",
      "BMI": "6.9",
      "Life.expectancy": "81.7"
    },
    {
      "Country": "Luxembourg",
      "Year": "2013",
      "BMI": "6.5",
      "Life.expectancy": "81.4"
    },
    {
      "Country": "Luxembourg",
      "Year": "2012",
      "BMI": "6.1",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "Luxembourg",
      "Year": "2011",
      "BMI": "59.6",
      "Life.expectancy": "88"
    },
    {
      "Country": "Luxembourg",
      "Year": "2010",
      "BMI": "59.2",
      "Life.expectancy": "86"
    },
    {
      "Country": "Luxembourg",
      "Year": "2009",
      "BMI": "58.8",
      "Life.expectancy": "83"
    },
    {
      "Country": "Luxembourg",
      "Year": "2008",
      "BMI": "58.4",
      "Life.expectancy": "80"
    },
    {
      "Country": "Luxembourg",
      "Year": "2007",
      "BMI": "57.9",
      "Life.expectancy": "79.7"
    },
    {
      "Country": "Luxembourg",
      "Year": "2006",
      "BMI": "57.5",
      "Life.expectancy": "79.4"
    },
    {
      "Country": "Luxembourg",
      "Year": "2005",
      "BMI": "57",
      "Life.expectancy": "78.8"
    },
    {
      "Country": "Luxembourg",
      "Year": "2004",
      "BMI": "56.4",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "Luxembourg",
      "Year": "2003",
      "BMI": "55.8",
      "Life.expectancy": "78.6"
    },
    {
      "Country": "Luxembourg",
      "Year": "2002",
      "BMI": "55.2",
      "Life.expectancy": "78.3"
    },
    {
      "Country": "Luxembourg",
      "Year": "2001",
      "BMI": "54.6",
      "Life.expectancy": "78"
    },
    {
      "Country": "Luxembourg",
      "Year": "2000",
      "BMI": "54",
      "Life.expectancy": "77.8"
    },
    {
      "Country": "Madagascar",
      "Year": "2015",
      "BMI": "2.5",
      "Life.expectancy": "65.5"
    },
    {
      "Country": "Madagascar",
      "Year": "2014",
      "BMI": "2",
      "Life.expectancy": "65.1"
    },
    {
      "Country": "Madagascar",
      "Year": "2013",
      "BMI": "19.5",
      "Life.expectancy": "64.7"
    },
    {
      "Country": "Madagascar",
      "Year": "2012",
      "BMI": "19",
      "Life.expectancy": "64.3"
    },
    {
      "Country": "Madagascar",
      "Year": "2011",
      "BMI": "18.5",
      "Life.expectancy": "63.8"
    },
    {
      "Country": "Madagascar",
      "Year": "2010",
      "BMI": "18",
      "Life.expectancy": "63.3"
    },
    {
      "Country": "Madagascar",
      "Year": "2009",
      "BMI": "17.6",
      "Life.expectancy": "62.8"
    },
    {
      "Country": "Madagascar",
      "Year": "2008",
      "BMI": "17.1",
      "Life.expectancy": "62.3"
    },
    {
      "Country": "Madagascar",
      "Year": "2007",
      "BMI": "16.7",
      "Life.expectancy": "61.9"
    },
    {
      "Country": "Madagascar",
      "Year": "2006",
      "BMI": "16.3",
      "Life.expectancy": "61.4"
    },
    {
      "Country": "Madagascar",
      "Year": "2005",
      "BMI": "15.8",
      "Life.expectancy": "69"
    },
    {
      "Country": "Madagascar",
      "Year": "2004",
      "BMI": "15.4",
      "Life.expectancy": "64"
    },
    {
      "Country": "Madagascar",
      "Year": "2003",
      "BMI": "15",
      "Life.expectancy": "59.9"
    },
    {
      "Country": "Madagascar",
      "Year": "2002",
      "BMI": "14.7",
      "Life.expectancy": "59.3"
    },
    {
      "Country": "Madagascar",
      "Year": "2001",
      "BMI": "14.3",
      "Life.expectancy": "58.7"
    },
    {
      "Country": "Madagascar",
      "Year": "2000",
      "BMI": "13.9",
      "Life.expectancy": "57.9"
    },
    {
      "Country": "Malawi",
      "Year": "2015",
      "BMI": "19.6",
      "Life.expectancy": "58.3"
    },
    {
      "Country": "Malawi",
      "Year": "2014",
      "BMI": "19.2",
      "Life.expectancy": "57.6"
    },
    {
      "Country": "Malawi",
      "Year": "2013",
      "BMI": "18.8",
      "Life.expectancy": "56.7"
    },
    {
      "Country": "Malawi",
      "Year": "2012",
      "BMI": "18.4",
      "Life.expectancy": "55.3"
    },
    {
      "Country": "Malawi",
      "Year": "2011",
      "BMI": "18",
      "Life.expectancy": "54.1"
    },
    {
      "Country": "Malawi",
      "Year": "2010",
      "BMI": "17.6",
      "Life.expectancy": "52.9"
    },
    {
      "Country": "Malawi",
      "Year": "2009",
      "BMI": "17.3",
      "Life.expectancy": "51.5"
    },
    {
      "Country": "Malawi",
      "Year": "2008",
      "BMI": "16.9",
      "Life.expectancy": "50"
    },
    {
      "Country": "Malawi",
      "Year": "2007",
      "BMI": "16.6",
      "Life.expectancy": "48.5"
    },
    {
      "Country": "Malawi",
      "Year": "2006",
      "BMI": "16.2",
      "Life.expectancy": "47.1"
    },
    {
      "Country": "Malawi",
      "Year": "2005",
      "BMI": "15.9",
      "Life.expectancy": "46"
    },
    {
      "Country": "Malawi",
      "Year": "2004",
      "BMI": "15.5",
      "Life.expectancy": "45.1"
    },
    {
      "Country": "Malawi",
      "Year": "2003",
      "BMI": "15.2",
      "Life.expectancy": "44.6"
    },
    {
      "Country": "Malawi",
      "Year": "2002",
      "BMI": "14.8",
      "Life.expectancy": "44"
    },
    {
      "Country": "Malawi",
      "Year": "2001",
      "BMI": "14.4",
      "Life.expectancy": "43.5"
    },
    {
      "Country": "Malawi",
      "Year": "2000",
      "BMI": "14.1",
      "Life.expectancy": "43.1"
    },
    {
      "Country": "Malaysia",
      "Year": "2015",
      "BMI": "4.6",
      "Life.expectancy": "75"
    },
    {
      "Country": "Malaysia",
      "Year": "2014",
      "BMI": "39.5",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Malaysia",
      "Year": "2013",
      "BMI": "38.5",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Malaysia",
      "Year": "2012",
      "BMI": "37.4",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Malaysia",
      "Year": "2011",
      "BMI": "36.3",
      "Life.expectancy": "74.3"
    },
    {
      "Country": "Malaysia",
      "Year": "2010",
      "BMI": "35.3",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Malaysia",
      "Year": "2009",
      "BMI": "34.4",
      "Life.expectancy": "74"
    },
    {
      "Country": "Malaysia",
      "Year": "2008",
      "BMI": "33.4",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Malaysia",
      "Year": "2007",
      "BMI": "32.5",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Malaysia",
      "Year": "2006",
      "BMI": "31.6",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Malaysia",
      "Year": "2005",
      "BMI": "3.7",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Malaysia",
      "Year": "2004",
      "BMI": "29.8",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Malaysia",
      "Year": "2003",
      "BMI": "28.8",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Malaysia",
      "Year": "2002",
      "BMI": "27.9",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Malaysia",
      "Year": "2001",
      "BMI": "27",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Malaysia",
      "Year": "2000",
      "BMI": "26",
      "Life.expectancy": "72.4"
    },
    {
      "Country": "Maldives",
      "Year": "2015",
      "BMI": "27.4",
      "Life.expectancy": "78.5"
    },
    {
      "Country": "Maldives",
      "Year": "2014",
      "BMI": "26.2",
      "Life.expectancy": "78.2"
    },
    {
      "Country": "Maldives",
      "Year": "2013",
      "BMI": "25.1",
      "Life.expectancy": "77.9"
    },
    {
      "Country": "Maldives",
      "Year": "2012",
      "BMI": "24.1",
      "Life.expectancy": "77.6"
    },
    {
      "Country": "Maldives",
      "Year": "2011",
      "BMI": "23.1",
      "Life.expectancy": "77.3"
    },
    {
      "Country": "Maldives",
      "Year": "2010",
      "BMI": "22.1",
      "Life.expectancy": "76.7"
    },
    {
      "Country": "Maldives",
      "Year": "2009",
      "BMI": "21.2",
      "Life.expectancy": "76.3"
    },
    {
      "Country": "Maldives",
      "Year": "2008",
      "BMI": "2.3",
      "Life.expectancy": "75.9"
    },
    {
      "Country": "Maldives",
      "Year": "2007",
      "BMI": "19.5",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Maldives",
      "Year": "2006",
      "BMI": "18.7",
      "Life.expectancy": "75"
    },
    {
      "Country": "Maldives",
      "Year": "2005",
      "BMI": "18",
      "Life.expectancy": "74.3"
    },
    {
      "Country": "Maldives",
      "Year": "2004",
      "BMI": "17.3",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Maldives",
      "Year": "2003",
      "BMI": "16.7",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Maldives",
      "Year": "2002",
      "BMI": "16.2",
      "Life.expectancy": "71.8"
    },
    {
      "Country": "Maldives",
      "Year": "2001",
      "BMI": "15.6",
      "Life.expectancy": "78"
    },
    {
      "Country": "Maldives",
      "Year": "2000",
      "BMI": "15.2",
      "Life.expectancy": "69.6"
    },
    {
      "Country": "Mali",
      "Year": "2015",
      "BMI": "23.8",
      "Life.expectancy": "58.2"
    },
    {
      "Country": "Mali",
      "Year": "2014",
      "BMI": "23.2",
      "Life.expectancy": "57.8"
    },
    {
      "Country": "Mali",
      "Year": "2013",
      "BMI": "22.5",
      "Life.expectancy": "57.3"
    },
    {
      "Country": "Mali",
      "Year": "2012",
      "BMI": "21.9",
      "Life.expectancy": "57.2"
    },
    {
      "Country": "Mali",
      "Year": "2011",
      "BMI": "21.3",
      "Life.expectancy": "56.8"
    },
    {
      "Country": "Mali",
      "Year": "2010",
      "BMI": "2.7",
      "Life.expectancy": "56.5"
    },
    {
      "Country": "Mali",
      "Year": "2009",
      "BMI": "2.2",
      "Life.expectancy": "56"
    },
    {
      "Country": "Mali",
      "Year": "2008",
      "BMI": "19.6",
      "Life.expectancy": "55.5"
    },
    {
      "Country": "Mali",
      "Year": "2007",
      "BMI": "19",
      "Life.expectancy": "55"
    },
    {
      "Country": "Mali",
      "Year": "2006",
      "BMI": "18.5",
      "Life.expectancy": "54.3"
    },
    {
      "Country": "Mali",
      "Year": "2005",
      "BMI": "18",
      "Life.expectancy": "53.6"
    },
    {
      "Country": "Mali",
      "Year": "2004",
      "BMI": "17.5",
      "Life.expectancy": "52.8"
    },
    {
      "Country": "Mali",
      "Year": "2003",
      "BMI": "17",
      "Life.expectancy": "52"
    },
    {
      "Country": "Mali",
      "Year": "2002",
      "BMI": "16.5",
      "Life.expectancy": "51.2"
    },
    {
      "Country": "Mali",
      "Year": "2001",
      "BMI": "16.1",
      "Life.expectancy": "55"
    },
    {
      "Country": "Mali",
      "Year": "2000",
      "BMI": "15.6",
      "Life.expectancy": "49.8"
    },
    {
      "Country": "Malta",
      "Year": "2015",
      "BMI": "69.6",
      "Life.expectancy": "81.7"
    },
    {
      "Country": "Malta",
      "Year": "2014",
      "BMI": "69.2",
      "Life.expectancy": "81.4"
    },
    {
      "Country": "Malta",
      "Year": "2013",
      "BMI": "68.8",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "Malta",
      "Year": "2012",
      "BMI": "68.4",
      "Life.expectancy": "81"
    },
    {
      "Country": "Malta",
      "Year": "2011",
      "BMI": "68",
      "Life.expectancy": "87"
    },
    {
      "Country": "Malta",
      "Year": "2010",
      "BMI": "67.6",
      "Life.expectancy": "83"
    },
    {
      "Country": "Malta",
      "Year": "2009",
      "BMI": "67.1",
      "Life.expectancy": "82"
    },
    {
      "Country": "Malta",
      "Year": "2008",
      "BMI": "66.6",
      "Life.expectancy": "80"
    },
    {
      "Country": "Malta",
      "Year": "2007",
      "BMI": "66.1",
      "Life.expectancy": "79.6"
    },
    {
      "Country": "Malta",
      "Year": "2006",
      "BMI": "65.6",
      "Life.expectancy": "79.3"
    },
    {
      "Country": "Malta",
      "Year": "2005",
      "BMI": "65",
      "Life.expectancy": "79"
    },
    {
      "Country": "Malta",
      "Year": "2004",
      "BMI": "64.5",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "Malta",
      "Year": "2003",
      "BMI": "63.9",
      "Life.expectancy": "78.5"
    },
    {
      "Country": "Malta",
      "Year": "2002",
      "BMI": "63.4",
      "Life.expectancy": "78.2"
    },
    {
      "Country": "Malta",
      "Year": "2001",
      "BMI": "62.8",
      "Life.expectancy": "77.8"
    },
    {
      "Country": "Malta",
      "Year": "2000",
      "BMI": "62.3",
      "Life.expectancy": "77.5"
    },
    {
      "Country": "Marshall Islands",
      "Year": "2013",
      "BMI": "81.6",
      "Life.expectancy": "0"
    },
    {
      "Country": "Mauritania",
      "Year": "2015",
      "BMI": "3.8",
      "Life.expectancy": "63.1"
    },
    {
      "Country": "Mauritania",
      "Year": "2014",
      "BMI": "3.1",
      "Life.expectancy": "63"
    },
    {
      "Country": "Mauritania",
      "Year": "2013",
      "BMI": "29.4",
      "Life.expectancy": "62.7"
    },
    {
      "Country": "Mauritania",
      "Year": "2012",
      "BMI": "28.8",
      "Life.expectancy": "62.5"
    },
    {
      "Country": "Mauritania",
      "Year": "2011",
      "BMI": "28.1",
      "Life.expectancy": "62.2"
    },
    {
      "Country": "Mauritania",
      "Year": "2010",
      "BMI": "27.4",
      "Life.expectancy": "62"
    },
    {
      "Country": "Mauritania",
      "Year": "2009",
      "BMI": "26.8",
      "Life.expectancy": "61.7"
    },
    {
      "Country": "Mauritania",
      "Year": "2008",
      "BMI": "26.1",
      "Life.expectancy": "61.4"
    },
    {
      "Country": "Mauritania",
      "Year": "2007",
      "BMI": "25.5",
      "Life.expectancy": "61.2"
    },
    {
      "Country": "Mauritania",
      "Year": "2006",
      "BMI": "24.8",
      "Life.expectancy": "69"
    },
    {
      "Country": "Mauritania",
      "Year": "2005",
      "BMI": "24.2",
      "Life.expectancy": "66"
    },
    {
      "Country": "Mauritania",
      "Year": "2004",
      "BMI": "23.6",
      "Life.expectancy": "64"
    },
    {
      "Country": "Mauritania",
      "Year": "2003",
      "BMI": "22.9",
      "Life.expectancy": "63"
    },
    {
      "Country": "Mauritania",
      "Year": "2002",
      "BMI": "22.3",
      "Life.expectancy": "62"
    },
    {
      "Country": "Mauritania",
      "Year": "2001",
      "BMI": "21.7",
      "Life.expectancy": "61"
    },
    {
      "Country": "Mauritania",
      "Year": "2000",
      "BMI": "21.1",
      "Life.expectancy": "60"
    },
    {
      "Country": "Mauritius",
      "Year": "2015",
      "BMI": "33.3",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Mauritius",
      "Year": "2014",
      "BMI": "32.8",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Mauritius",
      "Year": "2013",
      "BMI": "32.3",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Mauritius",
      "Year": "2012",
      "BMI": "31.8",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Mauritius",
      "Year": "2011",
      "BMI": "31.3",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Mauritius",
      "Year": "2010",
      "BMI": "3.7",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Mauritius",
      "Year": "2009",
      "BMI": "3.2",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Mauritius",
      "Year": "2008",
      "BMI": "29.7",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Mauritius",
      "Year": "2007",
      "BMI": "29.1",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Mauritius",
      "Year": "2006",
      "BMI": "28.6",
      "Life.expectancy": "71.8"
    },
    {
      "Country": "Mauritius",
      "Year": "2005",
      "BMI": "28",
      "Life.expectancy": "72.1"
    },
    {
      "Country": "Mauritius",
      "Year": "2004",
      "BMI": "27.5",
      "Life.expectancy": "71.9"
    },
    {
      "Country": "Mauritius",
      "Year": "2003",
      "BMI": "26.9",
      "Life.expectancy": "71.5"
    },
    {
      "Country": "Mauritius",
      "Year": "2002",
      "BMI": "26.4",
      "Life.expectancy": "71.5"
    },
    {
      "Country": "Mauritius",
      "Year": "2001",
      "BMI": "25.8",
      "Life.expectancy": "71.5"
    },
    {
      "Country": "Mauritius",
      "Year": "2000",
      "BMI": "25.3",
      "Life.expectancy": "71"
    },
    {
      "Country": "Mexico",
      "Year": "2015",
      "BMI": "63.5",
      "Life.expectancy": "76.7"
    },
    {
      "Country": "Mexico",
      "Year": "2014",
      "BMI": "62.8",
      "Life.expectancy": "76.6"
    },
    {
      "Country": "Mexico",
      "Year": "2013",
      "BMI": "62.1",
      "Life.expectancy": "76.6"
    },
    {
      "Country": "Mexico",
      "Year": "2012",
      "BMI": "61.5",
      "Life.expectancy": "76.3"
    },
    {
      "Country": "Mexico",
      "Year": "2011",
      "BMI": "6.8",
      "Life.expectancy": "76.1"
    },
    {
      "Country": "Mexico",
      "Year": "2010",
      "BMI": "6.1",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "Mexico",
      "Year": "2009",
      "BMI": "59.4",
      "Life.expectancy": "75.7"
    },
    {
      "Country": "Mexico",
      "Year": "2008",
      "BMI": "58.7",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "Mexico",
      "Year": "2007",
      "BMI": "57.9",
      "Life.expectancy": "76"
    },
    {
      "Country": "Mexico",
      "Year": "2006",
      "BMI": "57.2",
      "Life.expectancy": "75.8"
    },
    {
      "Country": "Mexico",
      "Year": "2005",
      "BMI": "56.4",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "Mexico",
      "Year": "2004",
      "BMI": "55.7",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Mexico",
      "Year": "2003",
      "BMI": "54.9",
      "Life.expectancy": "75"
    },
    {
      "Country": "Mexico",
      "Year": "2002",
      "BMI": "54.1",
      "Life.expectancy": "75"
    },
    {
      "Country": "Mexico",
      "Year": "2001",
      "BMI": "53.2",
      "Life.expectancy": "75"
    },
    {
      "Country": "Mexico",
      "Year": "2000",
      "BMI": "52.4",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2015",
      "BMI": "69.4",
      "Life.expectancy": "69.4"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2014",
      "BMI": "68.7",
      "Life.expectancy": "69.4"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2013",
      "BMI": "68.1",
      "Life.expectancy": "69.2"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2012",
      "BMI": "67.5",
      "Life.expectancy": "69"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2011",
      "BMI": "67",
      "Life.expectancy": "68.9"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2010",
      "BMI": "66.4",
      "Life.expectancy": "68.7"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2009",
      "BMI": "65.8",
      "Life.expectancy": "68.5"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2008",
      "BMI": "65.2",
      "Life.expectancy": "68.4"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2007",
      "BMI": "64.7",
      "Life.expectancy": "68.2"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2006",
      "BMI": "64.1",
      "Life.expectancy": "68"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2005",
      "BMI": "63.6",
      "Life.expectancy": "67.9"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2004",
      "BMI": "63.2",
      "Life.expectancy": "67.7"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2003",
      "BMI": "62.8",
      "Life.expectancy": "67.5"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2002",
      "BMI": "62.4",
      "Life.expectancy": "66.2"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2001",
      "BMI": "62",
      "Life.expectancy": "67.2"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2000",
      "BMI": "61.5",
      "Life.expectancy": "67"
    },
    {
      "Country": "Monaco",
      "Year": "2013",
      "BMI": "0",
      "Life.expectancy": "0"
    },
    {
      "Country": "Mongolia",
      "Year": "2015",
      "BMI": "52.7",
      "Life.expectancy": "68.8"
    },
    {
      "Country": "Mongolia",
      "Year": "2014",
      "BMI": "51.5",
      "Life.expectancy": "68.4"
    },
    {
      "Country": "Mongolia",
      "Year": "2013",
      "BMI": "5.4",
      "Life.expectancy": "68.1"
    },
    {
      "Country": "Mongolia",
      "Year": "2012",
      "BMI": "49.2",
      "Life.expectancy": "67.8"
    },
    {
      "Country": "Mongolia",
      "Year": "2011",
      "BMI": "48",
      "Life.expectancy": "67.3"
    },
    {
      "Country": "Mongolia",
      "Year": "2010",
      "BMI": "46.9",
      "Life.expectancy": "66.3"
    },
    {
      "Country": "Mongolia",
      "Year": "2009",
      "BMI": "45.9",
      "Life.expectancy": "66.9"
    },
    {
      "Country": "Mongolia",
      "Year": "2008",
      "BMI": "44.9",
      "Life.expectancy": "67.4"
    },
    {
      "Country": "Mongolia",
      "Year": "2007",
      "BMI": "43.9",
      "Life.expectancy": "65.9"
    },
    {
      "Country": "Mongolia",
      "Year": "2006",
      "BMI": "43",
      "Life.expectancy": "65"
    },
    {
      "Country": "Mongolia",
      "Year": "2005",
      "BMI": "42.1",
      "Life.expectancy": "64.5"
    },
    {
      "Country": "Mongolia",
      "Year": "2004",
      "BMI": "41.3",
      "Life.expectancy": "64"
    },
    {
      "Country": "Mongolia",
      "Year": "2003",
      "BMI": "4.5",
      "Life.expectancy": "64"
    },
    {
      "Country": "Mongolia",
      "Year": "2002",
      "BMI": "39.8",
      "Life.expectancy": "63.8"
    },
    {
      "Country": "Mongolia",
      "Year": "2001",
      "BMI": "39.1",
      "Life.expectancy": "63.2"
    },
    {
      "Country": "Mongolia",
      "Year": "2000",
      "BMI": "38.5",
      "Life.expectancy": "62.8"
    },
    {
      "Country": "Montenegro",
      "Year": "2015",
      "BMI": "61.8",
      "Life.expectancy": "76.1"
    },
    {
      "Country": "Montenegro",
      "Year": "2014",
      "BMI": "61.3",
      "Life.expectancy": "75.9"
    },
    {
      "Country": "Montenegro",
      "Year": "2013",
      "BMI": "6.7",
      "Life.expectancy": "75.8"
    },
    {
      "Country": "Montenegro",
      "Year": "2012",
      "BMI": "6.2",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "Montenegro",
      "Year": "2011",
      "BMI": "59.7",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Montenegro",
      "Year": "2010",
      "BMI": "59.1",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "Montenegro",
      "Year": "2009",
      "BMI": "58.5",
      "Life.expectancy": "75"
    },
    {
      "Country": "Montenegro",
      "Year": "2008",
      "BMI": "57.8",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Montenegro",
      "Year": "2007",
      "BMI": "57.2",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Montenegro",
      "Year": "2006",
      "BMI": "56.5",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Montenegro",
      "Year": "2005",
      "BMI": "55.7",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Montenegro",
      "Year": "2004",
      "BMI": "55",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Montenegro",
      "Year": "2003",
      "BMI": "54.2",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Montenegro",
      "Year": "2002",
      "BMI": "53.5",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Montenegro",
      "Year": "2001",
      "BMI": "52.7",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Montenegro",
      "Year": "2000",
      "BMI": "51.9",
      "Life.expectancy": "73"
    },
    {
      "Country": "Morocco",
      "Year": "2015",
      "BMI": "58.5",
      "Life.expectancy": "74.3"
    },
    {
      "Country": "Morocco",
      "Year": "2014",
      "BMI": "57.5",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Morocco",
      "Year": "2013",
      "BMI": "56.5",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Morocco",
      "Year": "2012",
      "BMI": "55.5",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Morocco",
      "Year": "2011",
      "BMI": "54.6",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Morocco",
      "Year": "2010",
      "BMI": "53.6",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Morocco",
      "Year": "2009",
      "BMI": "52.7",
      "Life.expectancy": "72.3"
    },
    {
      "Country": "Morocco",
      "Year": "2008",
      "BMI": "51.7",
      "Life.expectancy": "71.8"
    },
    {
      "Country": "Morocco",
      "Year": "2007",
      "BMI": "5.8",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "Morocco",
      "Year": "2006",
      "BMI": "49.9",
      "Life.expectancy": "71"
    },
    {
      "Country": "Morocco",
      "Year": "2005",
      "BMI": "49.1",
      "Life.expectancy": "77"
    },
    {
      "Country": "Morocco",
      "Year": "2004",
      "BMI": "48.2",
      "Life.expectancy": "72"
    },
    {
      "Country": "Morocco",
      "Year": "2003",
      "BMI": "47.3",
      "Life.expectancy": "69.9"
    },
    {
      "Country": "Morocco",
      "Year": "2002",
      "BMI": "46.5",
      "Life.expectancy": "69.5"
    },
    {
      "Country": "Morocco",
      "Year": "2001",
      "BMI": "45.7",
      "Life.expectancy": "69"
    },
    {
      "Country": "Morocco",
      "Year": "2000",
      "BMI": "44.8",
      "Life.expectancy": "68.6"
    },
    {
      "Country": "Mozambique",
      "Year": "2015",
      "BMI": "22.6",
      "Life.expectancy": "57.6"
    },
    {
      "Country": "Mozambique",
      "Year": "2014",
      "BMI": "22.2",
      "Life.expectancy": "56.7"
    },
    {
      "Country": "Mozambique",
      "Year": "2013",
      "BMI": "21.8",
      "Life.expectancy": "55.3"
    },
    {
      "Country": "Mozambique",
      "Year": "2012",
      "BMI": "21.3",
      "Life.expectancy": "54.8"
    },
    {
      "Country": "Mozambique",
      "Year": "2011",
      "BMI": "2.9",
      "Life.expectancy": "54.3"
    },
    {
      "Country": "Mozambique",
      "Year": "2010",
      "BMI": "2.5",
      "Life.expectancy": "54"
    },
    {
      "Country": "Mozambique",
      "Year": "2009",
      "BMI": "2.1",
      "Life.expectancy": "53.8"
    },
    {
      "Country": "Mozambique",
      "Year": "2008",
      "BMI": "19.7",
      "Life.expectancy": "53.2"
    },
    {
      "Country": "Mozambique",
      "Year": "2007",
      "BMI": "19.3",
      "Life.expectancy": "52.1"
    },
    {
      "Country": "Mozambique",
      "Year": "2006",
      "BMI": "18.9",
      "Life.expectancy": "51.2"
    },
    {
      "Country": "Mozambique",
      "Year": "2005",
      "BMI": "18.5",
      "Life.expectancy": "58"
    },
    {
      "Country": "Mozambique",
      "Year": "2004",
      "BMI": "18.1",
      "Life.expectancy": "54"
    },
    {
      "Country": "Mozambique",
      "Year": "2003",
      "BMI": "17.7",
      "Life.expectancy": "51"
    },
    {
      "Country": "Mozambique",
      "Year": "2002",
      "BMI": "17.3",
      "Life.expectancy": "49.8"
    },
    {
      "Country": "Mozambique",
      "Year": "2001",
      "BMI": "16.9",
      "Life.expectancy": "49.5"
    },
    {
      "Country": "Mozambique",
      "Year": "2000",
      "BMI": "16.5",
      "Life.expectancy": "49"
    },
    {
      "Country": "Myanmar",
      "Year": "2015",
      "BMI": "23.8",
      "Life.expectancy": "66.6"
    },
    {
      "Country": "Myanmar",
      "Year": "2014",
      "BMI": "22.9",
      "Life.expectancy": "66.4"
    },
    {
      "Country": "Myanmar",
      "Year": "2013",
      "BMI": "22.1",
      "Life.expectancy": "66.2"
    },
    {
      "Country": "Myanmar",
      "Year": "2012",
      "BMI": "21.3",
      "Life.expectancy": "65.9"
    },
    {
      "Country": "Myanmar",
      "Year": "2011",
      "BMI": "2.5",
      "Life.expectancy": "65.6"
    },
    {
      "Country": "Myanmar",
      "Year": "2010",
      "BMI": "19.8",
      "Life.expectancy": "65.4"
    },
    {
      "Country": "Myanmar",
      "Year": "2009",
      "BMI": "19.1",
      "Life.expectancy": "65.2"
    },
    {
      "Country": "Myanmar",
      "Year": "2008",
      "BMI": "18.3",
      "Life.expectancy": "59.2"
    },
    {
      "Country": "Myanmar",
      "Year": "2007",
      "BMI": "17.6",
      "Life.expectancy": "64.5"
    },
    {
      "Country": "Myanmar",
      "Year": "2006",
      "BMI": "17",
      "Life.expectancy": "64.2"
    },
    {
      "Country": "Myanmar",
      "Year": "2005",
      "BMI": "16.4",
      "Life.expectancy": "63.9"
    },
    {
      "Country": "Myanmar",
      "Year": "2004",
      "BMI": "15.7",
      "Life.expectancy": "63.5"
    },
    {
      "Country": "Myanmar",
      "Year": "2003",
      "BMI": "15.2",
      "Life.expectancy": "63.2"
    },
    {
      "Country": "Myanmar",
      "Year": "2002",
      "BMI": "14.6",
      "Life.expectancy": "62.8"
    },
    {
      "Country": "Myanmar",
      "Year": "2001",
      "BMI": "14.1",
      "Life.expectancy": "62.5"
    },
    {
      "Country": "Myanmar",
      "Year": "2000",
      "BMI": "13.6",
      "Life.expectancy": "62.1"
    },
    {
      "Country": "Namibia",
      "Year": "2015",
      "BMI": "35.7",
      "Life.expectancy": "65.8"
    },
    {
      "Country": "Namibia",
      "Year": "2014",
      "BMI": "34.9",
      "Life.expectancy": "65.9"
    },
    {
      "Country": "Namibia",
      "Year": "2013",
      "BMI": "34.1",
      "Life.expectancy": "66.1"
    },
    {
      "Country": "Namibia",
      "Year": "2012",
      "BMI": "33.3",
      "Life.expectancy": "65.8"
    },
    {
      "Country": "Namibia",
      "Year": "2011",
      "BMI": "32.5",
      "Life.expectancy": "64.3"
    },
    {
      "Country": "Namibia",
      "Year": "2010",
      "BMI": "31.8",
      "Life.expectancy": "63"
    },
    {
      "Country": "Namibia",
      "Year": "2009",
      "BMI": "31",
      "Life.expectancy": "62.4"
    },
    {
      "Country": "Namibia",
      "Year": "2008",
      "BMI": "3.2",
      "Life.expectancy": "61.7"
    },
    {
      "Country": "Namibia",
      "Year": "2007",
      "BMI": "29.4",
      "Life.expectancy": "60"
    },
    {
      "Country": "Namibia",
      "Year": "2006",
      "BMI": "28.7",
      "Life.expectancy": "57"
    },
    {
      "Country": "Namibia",
      "Year": "2005",
      "BMI": "27.9",
      "Life.expectancy": "55.1"
    },
    {
      "Country": "Namibia",
      "Year": "2004",
      "BMI": "27.2",
      "Life.expectancy": "54.7"
    },
    {
      "Country": "Namibia",
      "Year": "2003",
      "BMI": "26.5",
      "Life.expectancy": "55"
    },
    {
      "Country": "Namibia",
      "Year": "2002",
      "BMI": "25.8",
      "Life.expectancy": "55.7"
    },
    {
      "Country": "Namibia",
      "Year": "2001",
      "BMI": "25.1",
      "Life.expectancy": "56.5"
    },
    {
      "Country": "Namibia",
      "Year": "2000",
      "BMI": "24.5",
      "Life.expectancy": "57.4"
    },
    {
      "Country": "Nauru",
      "Year": "2013",
      "BMI": "87.3",
      "Life.expectancy": "0"
    },
    {
      "Country": "Nepal",
      "Year": "2015",
      "BMI": "19.1",
      "Life.expectancy": "69.2"
    },
    {
      "Country": "Nepal",
      "Year": "2014",
      "BMI": "18.5",
      "Life.expectancy": "69.6"
    },
    {
      "Country": "Nepal",
      "Year": "2013",
      "BMI": "18",
      "Life.expectancy": "69.3"
    },
    {
      "Country": "Nepal",
      "Year": "2012",
      "BMI": "17.4",
      "Life.expectancy": "68.9"
    },
    {
      "Country": "Nepal",
      "Year": "2011",
      "BMI": "16.9",
      "Life.expectancy": "68.4"
    },
    {
      "Country": "Nepal",
      "Year": "2010",
      "BMI": "16.4",
      "Life.expectancy": "68"
    },
    {
      "Country": "Nepal",
      "Year": "2009",
      "BMI": "15.9",
      "Life.expectancy": "67.5"
    },
    {
      "Country": "Nepal",
      "Year": "2008",
      "BMI": "15.4",
      "Life.expectancy": "67"
    },
    {
      "Country": "Nepal",
      "Year": "2007",
      "BMI": "14.9",
      "Life.expectancy": "66.6"
    },
    {
      "Country": "Nepal",
      "Year": "2006",
      "BMI": "14.4",
      "Life.expectancy": "66"
    },
    {
      "Country": "Nepal",
      "Year": "2005",
      "BMI": "13.9",
      "Life.expectancy": "65.4"
    },
    {
      "Country": "Nepal",
      "Year": "2004",
      "BMI": "13.4",
      "Life.expectancy": "64.7"
    },
    {
      "Country": "Nepal",
      "Year": "2003",
      "BMI": "12.9",
      "Life.expectancy": "64.3"
    },
    {
      "Country": "Nepal",
      "Year": "2002",
      "BMI": "12.4",
      "Life.expectancy": "63.1"
    },
    {
      "Country": "Nepal",
      "Year": "2001",
      "BMI": "11.9",
      "Life.expectancy": "63.2"
    },
    {
      "Country": "Nepal",
      "Year": "2000",
      "BMI": "11.4",
      "Life.expectancy": "62.5"
    },
    {
      "Country": "Netherlands",
      "Year": "2015",
      "BMI": "62.1",
      "Life.expectancy": "81.9"
    },
    {
      "Country": "Netherlands",
      "Year": "2014",
      "BMI": "61.6",
      "Life.expectancy": "81.7"
    },
    {
      "Country": "Netherlands",
      "Year": "2013",
      "BMI": "61",
      "Life.expectancy": "81.4"
    },
    {
      "Country": "Netherlands",
      "Year": "2012",
      "BMI": "6.5",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "Netherlands",
      "Year": "2011",
      "BMI": "59.9",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "Netherlands",
      "Year": "2010",
      "BMI": "59.3",
      "Life.expectancy": "88"
    },
    {
      "Country": "Netherlands",
      "Year": "2009",
      "BMI": "58.6",
      "Life.expectancy": "86"
    },
    {
      "Country": "Netherlands",
      "Year": "2008",
      "BMI": "57.9",
      "Life.expectancy": "83"
    },
    {
      "Country": "Netherlands",
      "Year": "2007",
      "BMI": "57.3",
      "Life.expectancy": "82"
    },
    {
      "Country": "Netherlands",
      "Year": "2006",
      "BMI": "56.5",
      "Life.expectancy": "79.8"
    },
    {
      "Country": "Netherlands",
      "Year": "2005",
      "BMI": "55.8",
      "Life.expectancy": "79.4"
    },
    {
      "Country": "Netherlands",
      "Year": "2004",
      "BMI": "55",
      "Life.expectancy": "79.2"
    },
    {
      "Country": "Netherlands",
      "Year": "2003",
      "BMI": "54.2",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "Netherlands",
      "Year": "2002",
      "BMI": "53.4",
      "Life.expectancy": "78.4"
    },
    {
      "Country": "Netherlands",
      "Year": "2001",
      "BMI": "52.6",
      "Life.expectancy": "78.3"
    },
    {
      "Country": "Netherlands",
      "Year": "2000",
      "BMI": "51.8",
      "Life.expectancy": "78.1"
    },
    {
      "Country": "New Zealand",
      "Year": "2015",
      "BMI": "67.5",
      "Life.expectancy": "81.6"
    },
    {
      "Country": "New Zealand",
      "Year": "2014",
      "BMI": "66.9",
      "Life.expectancy": "81.5"
    },
    {
      "Country": "New Zealand",
      "Year": "2013",
      "BMI": "66.4",
      "Life.expectancy": "81.3"
    },
    {
      "Country": "New Zealand",
      "Year": "2012",
      "BMI": "65.9",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "New Zealand",
      "Year": "2011",
      "BMI": "65.3",
      "Life.expectancy": "86"
    },
    {
      "Country": "New Zealand",
      "Year": "2010",
      "BMI": "64.8",
      "Life.expectancy": "89"
    },
    {
      "Country": "New Zealand",
      "Year": "2009",
      "BMI": "64.3",
      "Life.expectancy": "85"
    },
    {
      "Country": "New Zealand",
      "Year": "2008",
      "BMI": "63.8",
      "Life.expectancy": "81"
    },
    {
      "Country": "New Zealand",
      "Year": "2007",
      "BMI": "63.2",
      "Life.expectancy": "81"
    },
    {
      "Country": "New Zealand",
      "Year": "2006",
      "BMI": "62.6",
      "Life.expectancy": "79.9"
    },
    {
      "Country": "New Zealand",
      "Year": "2005",
      "BMI": "62.1",
      "Life.expectancy": "79.9"
    },
    {
      "Country": "New Zealand",
      "Year": "2004",
      "BMI": "61.5",
      "Life.expectancy": "79.2"
    },
    {
      "Country": "New Zealand",
      "Year": "2003",
      "BMI": "6.9",
      "Life.expectancy": "79.1"
    },
    {
      "Country": "New Zealand",
      "Year": "2002",
      "BMI": "6.3",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "New Zealand",
      "Year": "2001",
      "BMI": "59.6",
      "Life.expectancy": "78.5"
    },
    {
      "Country": "New Zealand",
      "Year": "2000",
      "BMI": "58.9",
      "Life.expectancy": "78.6"
    },
    {
      "Country": "Nicaragua",
      "Year": "2015",
      "BMI": "54",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Nicaragua",
      "Year": "2014",
      "BMI": "53.2",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Nicaragua",
      "Year": "2013",
      "BMI": "52.4",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Nicaragua",
      "Year": "2012",
      "BMI": "51.7",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Nicaragua",
      "Year": "2011",
      "BMI": "5.9",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Nicaragua",
      "Year": "2010",
      "BMI": "5.2",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Nicaragua",
      "Year": "2009",
      "BMI": "49.4",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Nicaragua",
      "Year": "2008",
      "BMI": "48.6",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Nicaragua",
      "Year": "2007",
      "BMI": "47.9",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Nicaragua",
      "Year": "2006",
      "BMI": "47.1",
      "Life.expectancy": "73"
    },
    {
      "Country": "Nicaragua",
      "Year": "2005",
      "BMI": "46.4",
      "Life.expectancy": "71.2"
    },
    {
      "Country": "Nicaragua",
      "Year": "2004",
      "BMI": "45.7",
      "Life.expectancy": "71"
    },
    {
      "Country": "Nicaragua",
      "Year": "2003",
      "BMI": "44.9",
      "Life.expectancy": "76"
    },
    {
      "Country": "Nicaragua",
      "Year": "2002",
      "BMI": "44.2",
      "Life.expectancy": "75"
    },
    {
      "Country": "Nicaragua",
      "Year": "2001",
      "BMI": "43.5",
      "Life.expectancy": "73"
    },
    {
      "Country": "Nicaragua",
      "Year": "2000",
      "BMI": "42.8",
      "Life.expectancy": "73"
    },
    {
      "Country": "Niger",
      "Year": "2015",
      "BMI": "19.3",
      "Life.expectancy": "61.8"
    },
    {
      "Country": "Niger",
      "Year": "2014",
      "BMI": "18.9",
      "Life.expectancy": "61.4"
    },
    {
      "Country": "Niger",
      "Year": "2013",
      "BMI": "18.5",
      "Life.expectancy": "69"
    },
    {
      "Country": "Niger",
      "Year": "2012",
      "BMI": "18.1",
      "Life.expectancy": "63"
    },
    {
      "Country": "Niger",
      "Year": "2011",
      "BMI": "17.7",
      "Life.expectancy": "59.4"
    },
    {
      "Country": "Niger",
      "Year": "2010",
      "BMI": "17.3",
      "Life.expectancy": "58.2"
    },
    {
      "Country": "Niger",
      "Year": "2009",
      "BMI": "16.9",
      "Life.expectancy": "57.1"
    },
    {
      "Country": "Niger",
      "Year": "2008",
      "BMI": "16.5",
      "Life.expectancy": "56"
    },
    {
      "Country": "Niger",
      "Year": "2007",
      "BMI": "16.1",
      "Life.expectancy": "55.2"
    },
    {
      "Country": "Niger",
      "Year": "2006",
      "BMI": "15.7",
      "Life.expectancy": "54.5"
    },
    {
      "Country": "Niger",
      "Year": "2005",
      "BMI": "15.4",
      "Life.expectancy": "53.7"
    },
    {
      "Country": "Niger",
      "Year": "2004",
      "BMI": "15",
      "Life.expectancy": "52.9"
    },
    {
      "Country": "Niger",
      "Year": "2003",
      "BMI": "14.6",
      "Life.expectancy": "52.1"
    },
    {
      "Country": "Niger",
      "Year": "2002",
      "BMI": "14.3",
      "Life.expectancy": "51.4"
    },
    {
      "Country": "Niger",
      "Year": "2001",
      "BMI": "13.9",
      "Life.expectancy": "56"
    },
    {
      "Country": "Niger",
      "Year": "2000",
      "BMI": "13.6",
      "Life.expectancy": "50"
    },
    {
      "Country": "Nigeria",
      "Year": "2015",
      "BMI": "25.4",
      "Life.expectancy": "54.5"
    },
    {
      "Country": "Nigeria",
      "Year": "2014",
      "BMI": "24.7",
      "Life.expectancy": "53.6"
    },
    {
      "Country": "Nigeria",
      "Year": "2013",
      "BMI": "24.1",
      "Life.expectancy": "53.2"
    },
    {
      "Country": "Nigeria",
      "Year": "2012",
      "BMI": "23.5",
      "Life.expectancy": "52.7"
    },
    {
      "Country": "Nigeria",
      "Year": "2011",
      "BMI": "22.8",
      "Life.expectancy": "52.3"
    },
    {
      "Country": "Nigeria",
      "Year": "2010",
      "BMI": "22.2",
      "Life.expectancy": "52"
    },
    {
      "Country": "Nigeria",
      "Year": "2009",
      "BMI": "21.6",
      "Life.expectancy": "51.6"
    },
    {
      "Country": "Nigeria",
      "Year": "2008",
      "BMI": "21",
      "Life.expectancy": "59"
    },
    {
      "Country": "Nigeria",
      "Year": "2007",
      "BMI": "2.4",
      "Life.expectancy": "55"
    },
    {
      "Country": "Nigeria",
      "Year": "2006",
      "BMI": "19.9",
      "Life.expectancy": "49.8"
    },
    {
      "Country": "Nigeria",
      "Year": "2005",
      "BMI": "19.3",
      "Life.expectancy": "49.2"
    },
    {
      "Country": "Nigeria",
      "Year": "2004",
      "BMI": "18.8",
      "Life.expectancy": "48.5"
    },
    {
      "Country": "Nigeria",
      "Year": "2003",
      "BMI": "18.3",
      "Life.expectancy": "48.1"
    },
    {
      "Country": "Nigeria",
      "Year": "2002",
      "BMI": "17.8",
      "Life.expectancy": "47.7"
    },
    {
      "Country": "Nigeria",
      "Year": "2001",
      "BMI": "17.3",
      "Life.expectancy": "47.4"
    },
    {
      "Country": "Nigeria",
      "Year": "2000",
      "BMI": "16.9",
      "Life.expectancy": "47.1"
    },
    {
      "Country": "Niue",
      "Year": "2013",
      "BMI": "77.3",
      "Life.expectancy": "0"
    },
    {
      "Country": "Norway",
      "Year": "2015",
      "BMI": "61.2",
      "Life.expectancy": "81.8"
    },
    {
      "Country": "Norway",
      "Year": "2014",
      "BMI": "6.8",
      "Life.expectancy": "81.6"
    },
    {
      "Country": "Norway",
      "Year": "2013",
      "BMI": "6.3",
      "Life.expectancy": "81.5"
    },
    {
      "Country": "Norway",
      "Year": "2012",
      "BMI": "59.8",
      "Life.expectancy": "81.3"
    },
    {
      "Country": "Norway",
      "Year": "2011",
      "BMI": "59.4",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "Norway",
      "Year": "2010",
      "BMI": "58.9",
      "Life.expectancy": "81"
    },
    {
      "Country": "Norway",
      "Year": "2009",
      "BMI": "58.5",
      "Life.expectancy": "89"
    },
    {
      "Country": "Norway",
      "Year": "2008",
      "BMI": "58",
      "Life.expectancy": "86"
    },
    {
      "Country": "Norway",
      "Year": "2007",
      "BMI": "57.5",
      "Life.expectancy": "85"
    },
    {
      "Country": "Norway",
      "Year": "2006",
      "BMI": "57",
      "Life.expectancy": "84"
    },
    {
      "Country": "Norway",
      "Year": "2005",
      "BMI": "56.5",
      "Life.expectancy": "81"
    },
    {
      "Country": "Norway",
      "Year": "2004",
      "BMI": "55.9",
      "Life.expectancy": "79.8"
    },
    {
      "Country": "Norway",
      "Year": "2003",
      "BMI": "55.3",
      "Life.expectancy": "79.4"
    },
    {
      "Country": "Norway",
      "Year": "2002",
      "BMI": "54.6",
      "Life.expectancy": "78.9"
    },
    {
      "Country": "Norway",
      "Year": "2001",
      "BMI": "54",
      "Life.expectancy": "78.8"
    },
    {
      "Country": "Norway",
      "Year": "2000",
      "BMI": "53.3",
      "Life.expectancy": "78.5"
    },
    {
      "Country": "Oman",
      "Year": "2015",
      "BMI": "54.6",
      "Life.expectancy": "76.6"
    },
    {
      "Country": "Oman",
      "Year": "2014",
      "BMI": "53.5",
      "Life.expectancy": "76.4"
    },
    {
      "Country": "Oman",
      "Year": "2013",
      "BMI": "52.8",
      "Life.expectancy": "76.2"
    },
    {
      "Country": "Oman",
      "Year": "2012",
      "BMI": "52.3",
      "Life.expectancy": "76"
    },
    {
      "Country": "Oman",
      "Year": "2011",
      "BMI": "52",
      "Life.expectancy": "75.8"
    },
    {
      "Country": "Oman",
      "Year": "2010",
      "BMI": "51.8",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "Oman",
      "Year": "2009",
      "BMI": "51.5",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Oman",
      "Year": "2008",
      "BMI": "51.1",
      "Life.expectancy": "75.2"
    },
    {
      "Country": "Oman",
      "Year": "2007",
      "BMI": "5.6",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Oman",
      "Year": "2006",
      "BMI": "5.1",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Oman",
      "Year": "2005",
      "BMI": "49.5",
      "Life.expectancy": "74.3"
    },
    {
      "Country": "Oman",
      "Year": "2004",
      "BMI": "48.9",
      "Life.expectancy": "74"
    },
    {
      "Country": "Oman",
      "Year": "2003",
      "BMI": "48.1",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Oman",
      "Year": "2002",
      "BMI": "47.3",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Oman",
      "Year": "2001",
      "BMI": "46.5",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Oman",
      "Year": "2000",
      "BMI": "45.9",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Pakistan",
      "Year": "2015",
      "BMI": "25.4",
      "Life.expectancy": "66.4"
    },
    {
      "Country": "Pakistan",
      "Year": "2014",
      "BMI": "24.7",
      "Life.expectancy": "66.2"
    },
    {
      "Country": "Pakistan",
      "Year": "2013",
      "BMI": "23.9",
      "Life.expectancy": "66"
    },
    {
      "Country": "Pakistan",
      "Year": "2012",
      "BMI": "23.2",
      "Life.expectancy": "65.7"
    },
    {
      "Country": "Pakistan",
      "Year": "2011",
      "BMI": "22.5",
      "Life.expectancy": "65.5"
    },
    {
      "Country": "Pakistan",
      "Year": "2010",
      "BMI": "21.9",
      "Life.expectancy": "65.1"
    },
    {
      "Country": "Pakistan",
      "Year": "2009",
      "BMI": "21.3",
      "Life.expectancy": "64.8"
    },
    {
      "Country": "Pakistan",
      "Year": "2008",
      "BMI": "2.6",
      "Life.expectancy": "64.6"
    },
    {
      "Country": "Pakistan",
      "Year": "2007",
      "BMI": "2.1",
      "Life.expectancy": "64.4"
    },
    {
      "Country": "Pakistan",
      "Year": "2006",
      "BMI": "19.5",
      "Life.expectancy": "64.2"
    },
    {
      "Country": "Pakistan",
      "Year": "2005",
      "BMI": "18.9",
      "Life.expectancy": "62.9"
    },
    {
      "Country": "Pakistan",
      "Year": "2004",
      "BMI": "18.4",
      "Life.expectancy": "63.7"
    },
    {
      "Country": "Pakistan",
      "Year": "2003",
      "BMI": "17.9",
      "Life.expectancy": "63.5"
    },
    {
      "Country": "Pakistan",
      "Year": "2002",
      "BMI": "17.4",
      "Life.expectancy": "63.2"
    },
    {
      "Country": "Pakistan",
      "Year": "2001",
      "BMI": "16.9",
      "Life.expectancy": "63"
    },
    {
      "Country": "Pakistan",
      "Year": "2000",
      "BMI": "16.4",
      "Life.expectancy": "62.8"
    },
    {
      "Country": "Palau",
      "Year": "2013",
      "BMI": "83.3",
      "Life.expectancy": "0"
    },
    {
      "Country": "Panama",
      "Year": "2015",
      "BMI": "57.8",
      "Life.expectancy": "77.8"
    },
    {
      "Country": "Panama",
      "Year": "2014",
      "BMI": "57.1",
      "Life.expectancy": "77.6"
    },
    {
      "Country": "Panama",
      "Year": "2013",
      "BMI": "56.3",
      "Life.expectancy": "77.5"
    },
    {
      "Country": "Panama",
      "Year": "2012",
      "BMI": "55.6",
      "Life.expectancy": "77.2"
    },
    {
      "Country": "Panama",
      "Year": "2011",
      "BMI": "54.9",
      "Life.expectancy": "77.3"
    },
    {
      "Country": "Panama",
      "Year": "2010",
      "BMI": "54.2",
      "Life.expectancy": "76.5"
    },
    {
      "Country": "Panama",
      "Year": "2009",
      "BMI": "53.4",
      "Life.expectancy": "76.8"
    },
    {
      "Country": "Panama",
      "Year": "2008",
      "BMI": "52.7",
      "Life.expectancy": "76.5"
    },
    {
      "Country": "Panama",
      "Year": "2007",
      "BMI": "51.9",
      "Life.expectancy": "76.4"
    },
    {
      "Country": "Panama",
      "Year": "2006",
      "BMI": "51.1",
      "Life.expectancy": "76.2"
    },
    {
      "Country": "Panama",
      "Year": "2005",
      "BMI": "5.3",
      "Life.expectancy": "75.8"
    },
    {
      "Country": "Panama",
      "Year": "2004",
      "BMI": "49.5",
      "Life.expectancy": "75.8"
    },
    {
      "Country": "Panama",
      "Year": "2003",
      "BMI": "48.6",
      "Life.expectancy": "75.5"
    },
    {
      "Country": "Panama",
      "Year": "2002",
      "BMI": "47.8",
      "Life.expectancy": "75.7"
    },
    {
      "Country": "Panama",
      "Year": "2001",
      "BMI": "46.9",
      "Life.expectancy": "75.5"
    },
    {
      "Country": "Panama",
      "Year": "2000",
      "BMI": "45.9",
      "Life.expectancy": "75.7"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2015",
      "BMI": "48.6",
      "Life.expectancy": "62.9"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2014",
      "BMI": "47.9",
      "Life.expectancy": "62.7"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2013",
      "BMI": "47.2",
      "Life.expectancy": "62.4"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2012",
      "BMI": "46.4",
      "Life.expectancy": "62.2"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2011",
      "BMI": "45.7",
      "Life.expectancy": "62"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2010",
      "BMI": "44.9",
      "Life.expectancy": "61.8"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2009",
      "BMI": "44.2",
      "Life.expectancy": "61.6"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2008",
      "BMI": "43.4",
      "Life.expectancy": "61.4"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2007",
      "BMI": "42.7",
      "Life.expectancy": "61.1"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2006",
      "BMI": "41.9",
      "Life.expectancy": "68"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2005",
      "BMI": "41.1",
      "Life.expectancy": "64"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2004",
      "BMI": "4.4",
      "Life.expectancy": "59.9"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2003",
      "BMI": "39.6",
      "Life.expectancy": "59.6"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2002",
      "BMI": "38.9",
      "Life.expectancy": "59.3"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2001",
      "BMI": "38.2",
      "Life.expectancy": "59.1"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2000",
      "BMI": "37.5",
      "Life.expectancy": "58.9"
    },
    {
      "Country": "Paraguay",
      "Year": "2015",
      "BMI": "5.2",
      "Life.expectancy": "74"
    },
    {
      "Country": "Paraguay",
      "Year": "2014",
      "BMI": "49.4",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Paraguay",
      "Year": "2013",
      "BMI": "48.6",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Paraguay",
      "Year": "2012",
      "BMI": "47.9",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Paraguay",
      "Year": "2011",
      "BMI": "47.1",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Paraguay",
      "Year": "2010",
      "BMI": "46.4",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Paraguay",
      "Year": "2009",
      "BMI": "45.6",
      "Life.expectancy": "73"
    },
    {
      "Country": "Paraguay",
      "Year": "2008",
      "BMI": "44.9",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Paraguay",
      "Year": "2007",
      "BMI": "44.2",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Paraguay",
      "Year": "2006",
      "BMI": "43.5",
      "Life.expectancy": "72.3"
    },
    {
      "Country": "Paraguay",
      "Year": "2005",
      "BMI": "42.8",
      "Life.expectancy": "72.1"
    },
    {
      "Country": "Paraguay",
      "Year": "2004",
      "BMI": "42",
      "Life.expectancy": "71.9"
    },
    {
      "Country": "Paraguay",
      "Year": "2003",
      "BMI": "41.3",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "Paraguay",
      "Year": "2002",
      "BMI": "4.6",
      "Life.expectancy": "71.5"
    },
    {
      "Country": "Paraguay",
      "Year": "2001",
      "BMI": "39.8",
      "Life.expectancy": "71.2"
    },
    {
      "Country": "Paraguay",
      "Year": "2000",
      "BMI": "39.1",
      "Life.expectancy": "79"
    },
    {
      "Country": "Peru",
      "Year": "2015",
      "BMI": "55.6",
      "Life.expectancy": "75.5"
    },
    {
      "Country": "Peru",
      "Year": "2014",
      "BMI": "54.9",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "Peru",
      "Year": "2013",
      "BMI": "54.2",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "Peru",
      "Year": "2012",
      "BMI": "53.6",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Peru",
      "Year": "2011",
      "BMI": "52.9",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Peru",
      "Year": "2010",
      "BMI": "52.2",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Peru",
      "Year": "2009",
      "BMI": "51.5",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Peru",
      "Year": "2008",
      "BMI": "5.8",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Peru",
      "Year": "2007",
      "BMI": "5.2",
      "Life.expectancy": "74"
    },
    {
      "Country": "Peru",
      "Year": "2006",
      "BMI": "49.5",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Peru",
      "Year": "2005",
      "BMI": "48.8",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Peru",
      "Year": "2004",
      "BMI": "48.1",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "Peru",
      "Year": "2003",
      "BMI": "47.4",
      "Life.expectancy": "72.1"
    },
    {
      "Country": "Peru",
      "Year": "2002",
      "BMI": "46.7",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Peru",
      "Year": "2001",
      "BMI": "46.1",
      "Life.expectancy": "72.4"
    },
    {
      "Country": "Peru",
      "Year": "2000",
      "BMI": "45.4",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "Philippines",
      "Year": "2015",
      "BMI": "25.4",
      "Life.expectancy": "68.5"
    },
    {
      "Country": "Philippines",
      "Year": "2014",
      "BMI": "24.8",
      "Life.expectancy": "68.4"
    },
    {
      "Country": "Philippines",
      "Year": "2013",
      "BMI": "24.3",
      "Life.expectancy": "68.1"
    },
    {
      "Country": "Philippines",
      "Year": "2012",
      "BMI": "23.7",
      "Life.expectancy": "68.1"
    },
    {
      "Country": "Philippines",
      "Year": "2011",
      "BMI": "23.1",
      "Life.expectancy": "68"
    },
    {
      "Country": "Philippines",
      "Year": "2010",
      "BMI": "22.6",
      "Life.expectancy": "67.9"
    },
    {
      "Country": "Philippines",
      "Year": "2009",
      "BMI": "22.1",
      "Life.expectancy": "68"
    },
    {
      "Country": "Philippines",
      "Year": "2008",
      "BMI": "21.6",
      "Life.expectancy": "67.5"
    },
    {
      "Country": "Philippines",
      "Year": "2007",
      "BMI": "21.1",
      "Life.expectancy": "67.5"
    },
    {
      "Country": "Philippines",
      "Year": "2006",
      "BMI": "2.6",
      "Life.expectancy": "67.3"
    },
    {
      "Country": "Philippines",
      "Year": "2005",
      "BMI": "2.1",
      "Life.expectancy": "67"
    },
    {
      "Country": "Philippines",
      "Year": "2004",
      "BMI": "19.6",
      "Life.expectancy": "67.3"
    },
    {
      "Country": "Philippines",
      "Year": "2003",
      "BMI": "19.2",
      "Life.expectancy": "67.2"
    },
    {
      "Country": "Philippines",
      "Year": "2002",
      "BMI": "18.7",
      "Life.expectancy": "66.8"
    },
    {
      "Country": "Philippines",
      "Year": "2001",
      "BMI": "18.3",
      "Life.expectancy": "66.8"
    },
    {
      "Country": "Philippines",
      "Year": "2000",
      "BMI": "17.8",
      "Life.expectancy": "66.8"
    },
    {
      "Country": "Poland",
      "Year": "2015",
      "BMI": "61.7",
      "Life.expectancy": "77.5"
    },
    {
      "Country": "Poland",
      "Year": "2014",
      "BMI": "61.1",
      "Life.expectancy": "77.3"
    },
    {
      "Country": "Poland",
      "Year": "2013",
      "BMI": "6.4",
      "Life.expectancy": "77.1"
    },
    {
      "Country": "Poland",
      "Year": "2012",
      "BMI": "59.7",
      "Life.expectancy": "76.8"
    },
    {
      "Country": "Poland",
      "Year": "2011",
      "BMI": "59.1",
      "Life.expectancy": "76.7"
    },
    {
      "Country": "Poland",
      "Year": "2010",
      "BMI": "58.4",
      "Life.expectancy": "76.3"
    },
    {
      "Country": "Poland",
      "Year": "2009",
      "BMI": "57.8",
      "Life.expectancy": "75.7"
    },
    {
      "Country": "Poland",
      "Year": "2008",
      "BMI": "57.2",
      "Life.expectancy": "75.5"
    },
    {
      "Country": "Poland",
      "Year": "2007",
      "BMI": "56.6",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "Poland",
      "Year": "2006",
      "BMI": "56",
      "Life.expectancy": "75.2"
    },
    {
      "Country": "Poland",
      "Year": "2005",
      "BMI": "55.5",
      "Life.expectancy": "75"
    },
    {
      "Country": "Poland",
      "Year": "2004",
      "BMI": "55",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Poland",
      "Year": "2003",
      "BMI": "54.5",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Poland",
      "Year": "2002",
      "BMI": "54",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Poland",
      "Year": "2001",
      "BMI": "53.6",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Poland",
      "Year": "2000",
      "BMI": "53.1",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Portugal",
      "Year": "2015",
      "BMI": "61.6",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "Portugal",
      "Year": "2014",
      "BMI": "6.9",
      "Life.expectancy": "89"
    },
    {
      "Country": "Portugal",
      "Year": "2013",
      "BMI": "6.2",
      "Life.expectancy": "86"
    },
    {
      "Country": "Portugal",
      "Year": "2012",
      "BMI": "59.5",
      "Life.expectancy": "83"
    },
    {
      "Country": "Portugal",
      "Year": "2011",
      "BMI": "58.8",
      "Life.expectancy": "82"
    },
    {
      "Country": "Portugal",
      "Year": "2010",
      "BMI": "58.1",
      "Life.expectancy": "79.6"
    },
    {
      "Country": "Portugal",
      "Year": "2009",
      "BMI": "57.3",
      "Life.expectancy": "79.3"
    },
    {
      "Country": "Portugal",
      "Year": "2008",
      "BMI": "56.5",
      "Life.expectancy": "79"
    },
    {
      "Country": "Portugal",
      "Year": "2007",
      "BMI": "55.7",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "Portugal",
      "Year": "2006",
      "BMI": "54.9",
      "Life.expectancy": "78.5"
    },
    {
      "Country": "Portugal",
      "Year": "2005",
      "BMI": "54.1",
      "Life.expectancy": "77.7"
    },
    {
      "Country": "Portugal",
      "Year": "2004",
      "BMI": "53.3",
      "Life.expectancy": "78"
    },
    {
      "Country": "Portugal",
      "Year": "2003",
      "BMI": "52.5",
      "Life.expectancy": "77.3"
    },
    {
      "Country": "Portugal",
      "Year": "2002",
      "BMI": "51.7",
      "Life.expectancy": "77.2"
    },
    {
      "Country": "Portugal",
      "Year": "2001",
      "BMI": "5.9",
      "Life.expectancy": "76.9"
    },
    {
      "Country": "Portugal",
      "Year": "2000",
      "BMI": "5.1",
      "Life.expectancy": "76.6"
    },
    {
      "Country": "Qatar",
      "Year": "2015",
      "BMI": "69.3",
      "Life.expectancy": "78.2"
    },
    {
      "Country": "Qatar",
      "Year": "2014",
      "BMI": "68.4",
      "Life.expectancy": "78.1"
    },
    {
      "Country": "Qatar",
      "Year": "2013",
      "BMI": "67.7",
      "Life.expectancy": "77.9"
    },
    {
      "Country": "Qatar",
      "Year": "2012",
      "BMI": "67",
      "Life.expectancy": "77.8"
    },
    {
      "Country": "Qatar",
      "Year": "2011",
      "BMI": "66.5",
      "Life.expectancy": "77.5"
    },
    {
      "Country": "Qatar",
      "Year": "2010",
      "BMI": "66",
      "Life.expectancy": "77.3"
    },
    {
      "Country": "Qatar",
      "Year": "2009",
      "BMI": "65.6",
      "Life.expectancy": "77"
    },
    {
      "Country": "Qatar",
      "Year": "2008",
      "BMI": "65.2",
      "Life.expectancy": "76.8"
    },
    {
      "Country": "Qatar",
      "Year": "2007",
      "BMI": "65.1",
      "Life.expectancy": "76.7"
    },
    {
      "Country": "Qatar",
      "Year": "2006",
      "BMI": "65",
      "Life.expectancy": "76.6"
    },
    {
      "Country": "Qatar",
      "Year": "2005",
      "BMI": "65.1",
      "Life.expectancy": "76.6"
    },
    {
      "Country": "Qatar",
      "Year": "2004",
      "BMI": "65",
      "Life.expectancy": "76.6"
    },
    {
      "Country": "Qatar",
      "Year": "2003",
      "BMI": "64.7",
      "Life.expectancy": "76.5"
    },
    {
      "Country": "Qatar",
      "Year": "2002",
      "BMI": "64.1",
      "Life.expectancy": "76.4"
    },
    {
      "Country": "Qatar",
      "Year": "2001",
      "BMI": "63.3",
      "Life.expectancy": "76.3"
    },
    {
      "Country": "Qatar",
      "Year": "2000",
      "BMI": "62.4",
      "Life.expectancy": "76.2"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2015",
      "BMI": "31.7",
      "Life.expectancy": "82.3"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2014",
      "BMI": "31.2",
      "Life.expectancy": "82"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2013",
      "BMI": "3.8",
      "Life.expectancy": "81.7"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2012",
      "BMI": "3.4",
      "Life.expectancy": "81.2"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2011",
      "BMI": "3",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2010",
      "BMI": "29.5",
      "Life.expectancy": "87"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2009",
      "BMI": "29.1",
      "Life.expectancy": "86"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2008",
      "BMI": "28.6",
      "Life.expectancy": "83"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2007",
      "BMI": "28.2",
      "Life.expectancy": "79.8"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2006",
      "BMI": "27.7",
      "Life.expectancy": "79.4"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2005",
      "BMI": "27.2",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2004",
      "BMI": "26.7",
      "Life.expectancy": "78.2"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2003",
      "BMI": "26.2",
      "Life.expectancy": "77.6"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2002",
      "BMI": "25.7",
      "Life.expectancy": "77.1"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2001",
      "BMI": "25.2",
      "Life.expectancy": "76.7"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2000",
      "BMI": "24.7",
      "Life.expectancy": "76"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2015",
      "BMI": "53.4",
      "Life.expectancy": "72.1"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2014",
      "BMI": "52.7",
      "Life.expectancy": "71.8"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2013",
      "BMI": "52.1",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2012",
      "BMI": "51.5",
      "Life.expectancy": "79"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2011",
      "BMI": "5.9",
      "Life.expectancy": "77"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2010",
      "BMI": "5.4",
      "Life.expectancy": "68.8"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2009",
      "BMI": "49.9",
      "Life.expectancy": "69"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2008",
      "BMI": "49.5",
      "Life.expectancy": "68.9"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2007",
      "BMI": "49.1",
      "Life.expectancy": "68.3"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2006",
      "BMI": "48.7",
      "Life.expectancy": "68"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2005",
      "BMI": "48.3",
      "Life.expectancy": "67.3"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2004",
      "BMI": "47.9",
      "Life.expectancy": "68"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2003",
      "BMI": "47.6",
      "Life.expectancy": "67.6"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2002",
      "BMI": "47.2",
      "Life.expectancy": "67.5"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2001",
      "BMI": "46.8",
      "Life.expectancy": "67.6"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2000",
      "BMI": "46.5",
      "Life.expectancy": "67.1"
    },
    {
      "Country": "Romania",
      "Year": "2015",
      "BMI": "6.7",
      "Life.expectancy": "75"
    },
    {
      "Country": "Romania",
      "Year": "2014",
      "BMI": "59.9",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Romania",
      "Year": "2013",
      "BMI": "59.2",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Romania",
      "Year": "2012",
      "BMI": "58.4",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Romania",
      "Year": "2011",
      "BMI": "57.7",
      "Life.expectancy": "74.3"
    },
    {
      "Country": "Romania",
      "Year": "2010",
      "BMI": "56.9",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Romania",
      "Year": "2009",
      "BMI": "56.3",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Romania",
      "Year": "2008",
      "BMI": "55.6",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Romania",
      "Year": "2007",
      "BMI": "55",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Romania",
      "Year": "2006",
      "BMI": "54.4",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Romania",
      "Year": "2005",
      "BMI": "53.9",
      "Life.expectancy": "71.9"
    },
    {
      "Country": "Romania",
      "Year": "2004",
      "BMI": "53.4",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "Romania",
      "Year": "2003",
      "BMI": "52.9",
      "Life.expectancy": "71.1"
    },
    {
      "Country": "Romania",
      "Year": "2002",
      "BMI": "52.4",
      "Life.expectancy": "77"
    },
    {
      "Country": "Romania",
      "Year": "2001",
      "BMI": "51.9",
      "Life.expectancy": "78"
    },
    {
      "Country": "Romania",
      "Year": "2000",
      "BMI": "51.4",
      "Life.expectancy": "77"
    },
    {
      "Country": "Russian Federation",
      "Year": "2015",
      "BMI": "6.5",
      "Life.expectancy": "75"
    },
    {
      "Country": "Russian Federation",
      "Year": "2014",
      "BMI": "59.9",
      "Life.expectancy": "73"
    },
    {
      "Country": "Russian Federation",
      "Year": "2013",
      "BMI": "59.3",
      "Life.expectancy": "70"
    },
    {
      "Country": "Russian Federation",
      "Year": "2012",
      "BMI": "58.7",
      "Life.expectancy": "69.6"
    },
    {
      "Country": "Russian Federation",
      "Year": "2011",
      "BMI": "58.1",
      "Life.expectancy": "69.4"
    },
    {
      "Country": "Russian Federation",
      "Year": "2010",
      "BMI": "57.5",
      "Life.expectancy": "68.4"
    },
    {
      "Country": "Russian Federation",
      "Year": "2009",
      "BMI": "57",
      "Life.expectancy": "68.2"
    },
    {
      "Country": "Russian Federation",
      "Year": "2008",
      "BMI": "56.6",
      "Life.expectancy": "67.5"
    },
    {
      "Country": "Russian Federation",
      "Year": "2007",
      "BMI": "56.1",
      "Life.expectancy": "67.3"
    },
    {
      "Country": "Russian Federation",
      "Year": "2006",
      "BMI": "55.7",
      "Life.expectancy": "66.4"
    },
    {
      "Country": "Russian Federation",
      "Year": "2005",
      "BMI": "55.3",
      "Life.expectancy": "65"
    },
    {
      "Country": "Russian Federation",
      "Year": "2004",
      "BMI": "55",
      "Life.expectancy": "64.9"
    },
    {
      "Country": "Russian Federation",
      "Year": "2003",
      "BMI": "54.7",
      "Life.expectancy": "64.6"
    },
    {
      "Country": "Russian Federation",
      "Year": "2002",
      "BMI": "54.5",
      "Life.expectancy": "64.8"
    },
    {
      "Country": "Russian Federation",
      "Year": "2001",
      "BMI": "54.2",
      "Life.expectancy": "65.1"
    },
    {
      "Country": "Russian Federation",
      "Year": "2000",
      "BMI": "54",
      "Life.expectancy": "65"
    },
    {
      "Country": "Rwanda",
      "Year": "2015",
      "BMI": "21.4",
      "Life.expectancy": "66.1"
    },
    {
      "Country": "Rwanda",
      "Year": "2014",
      "BMI": "2.8",
      "Life.expectancy": "65.7"
    },
    {
      "Country": "Rwanda",
      "Year": "2013",
      "BMI": "2.1",
      "Life.expectancy": "65.2"
    },
    {
      "Country": "Rwanda",
      "Year": "2012",
      "BMI": "19.5",
      "Life.expectancy": "64.6"
    },
    {
      "Country": "Rwanda",
      "Year": "2011",
      "BMI": "18.9",
      "Life.expectancy": "63.8"
    },
    {
      "Country": "Rwanda",
      "Year": "2010",
      "BMI": "18.3",
      "Life.expectancy": "62.8"
    },
    {
      "Country": "Rwanda",
      "Year": "2009",
      "BMI": "17.7",
      "Life.expectancy": "61"
    },
    {
      "Country": "Rwanda",
      "Year": "2008",
      "BMI": "17.1",
      "Life.expectancy": "68"
    },
    {
      "Country": "Rwanda",
      "Year": "2007",
      "BMI": "16.5",
      "Life.expectancy": "59.6"
    },
    {
      "Country": "Rwanda",
      "Year": "2006",
      "BMI": "15.9",
      "Life.expectancy": "57.6"
    },
    {
      "Country": "Rwanda",
      "Year": "2005",
      "BMI": "15.4",
      "Life.expectancy": "55.3"
    },
    {
      "Country": "Rwanda",
      "Year": "2004",
      "BMI": "14.9",
      "Life.expectancy": "53.4"
    },
    {
      "Country": "Rwanda",
      "Year": "2003",
      "BMI": "14.5",
      "Life.expectancy": "52"
    },
    {
      "Country": "Rwanda",
      "Year": "2002",
      "BMI": "14.1",
      "Life.expectancy": "57"
    },
    {
      "Country": "Rwanda",
      "Year": "2001",
      "BMI": "13.7",
      "Life.expectancy": "48.6"
    },
    {
      "Country": "Rwanda",
      "Year": "2000",
      "BMI": "13.2",
      "Life.expectancy": "48.3"
    },
    {
      "Country": "Saint Kitts and Nevis",
      "Year": "2013",
      "BMI": "5.2",
      "Life.expectancy": "0"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2015",
      "BMI": "47.5",
      "Life.expectancy": "75.2"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2014",
      "BMI": "46.7",
      "Life.expectancy": "75"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2013",
      "BMI": "45.9",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2012",
      "BMI": "45.2",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2011",
      "BMI": "44.5",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2010",
      "BMI": "43.8",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2009",
      "BMI": "43",
      "Life.expectancy": "74.3"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2008",
      "BMI": "42.2",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2007",
      "BMI": "41.3",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2006",
      "BMI": "4.4",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2005",
      "BMI": "39.6",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2004",
      "BMI": "39",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2003",
      "BMI": "38.4",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2002",
      "BMI": "37.9",
      "Life.expectancy": "72"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2001",
      "BMI": "37.3",
      "Life.expectancy": "71.8"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2000",
      "BMI": "36.8",
      "Life.expectancy": "71.6"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2015",
      "BMI": "54.1",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2014",
      "BMI": "53.1",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2013",
      "BMI": "52.2",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2012",
      "BMI": "51.2",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2011",
      "BMI": "5.3",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2010",
      "BMI": "49.3",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2009",
      "BMI": "48.4",
      "Life.expectancy": "72.3"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2008",
      "BMI": "47.5",
      "Life.expectancy": "72.1"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2007",
      "BMI": "46.6",
      "Life.expectancy": "71.9"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2006",
      "BMI": "45.7",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2005",
      "BMI": "44.7",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2004",
      "BMI": "43.8",
      "Life.expectancy": "71.2"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2003",
      "BMI": "42.9",
      "Life.expectancy": "71"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2002",
      "BMI": "42",
      "Life.expectancy": "79"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2001",
      "BMI": "41",
      "Life.expectancy": "79"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2000",
      "BMI": "4.1",
      "Life.expectancy": "79"
    },
    {
      "Country": "Samoa",
      "Year": "2015",
      "BMI": "74.7",
      "Life.expectancy": "74"
    },
    {
      "Country": "Samoa",
      "Year": "2014",
      "BMI": "74.3",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Samoa",
      "Year": "2013",
      "BMI": "73.8",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Samoa",
      "Year": "2012",
      "BMI": "73.4",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Samoa",
      "Year": "2011",
      "BMI": "72.9",
      "Life.expectancy": "73"
    },
    {
      "Country": "Samoa",
      "Year": "2010",
      "BMI": "72.5",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Samoa",
      "Year": "2009",
      "BMI": "72",
      "Life.expectancy": "76"
    },
    {
      "Country": "Samoa",
      "Year": "2008",
      "BMI": "71.4",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Samoa",
      "Year": "2007",
      "BMI": "7.9",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "Samoa",
      "Year": "2006",
      "BMI": "7.3",
      "Life.expectancy": "72"
    },
    {
      "Country": "Samoa",
      "Year": "2005",
      "BMI": "69.7",
      "Life.expectancy": "71.6"
    },
    {
      "Country": "Samoa",
      "Year": "2004",
      "BMI": "68.9",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "Samoa",
      "Year": "2003",
      "BMI": "68.2",
      "Life.expectancy": "79"
    },
    {
      "Country": "Samoa",
      "Year": "2002",
      "BMI": "67.4",
      "Life.expectancy": "76"
    },
    {
      "Country": "Samoa",
      "Year": "2001",
      "BMI": "66.5",
      "Life.expectancy": "75"
    },
    {
      "Country": "Samoa",
      "Year": "2000",
      "BMI": "65.6",
      "Life.expectancy": "72"
    },
    {
      "Country": "San Marino",
      "Year": "2013",
      "BMI": "0",
      "Life.expectancy": "0"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2015",
      "BMI": "3.9",
      "Life.expectancy": "67.5"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2014",
      "BMI": "3.1",
      "Life.expectancy": "67.3"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2013",
      "BMI": "29.3",
      "Life.expectancy": "67.1"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2012",
      "BMI": "28.5",
      "Life.expectancy": "66.9"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2011",
      "BMI": "27.7",
      "Life.expectancy": "66.6"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2010",
      "BMI": "26.9",
      "Life.expectancy": "66.2"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2009",
      "BMI": "26.2",
      "Life.expectancy": "65.8"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2008",
      "BMI": "25.4",
      "Life.expectancy": "65.4"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2007",
      "BMI": "24.7",
      "Life.expectancy": "65.1"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2006",
      "BMI": "24",
      "Life.expectancy": "64.7"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2005",
      "BMI": "23.4",
      "Life.expectancy": "64.3"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2004",
      "BMI": "22.8",
      "Life.expectancy": "63.8"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2003",
      "BMI": "22.2",
      "Life.expectancy": "63.4"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2002",
      "BMI": "21.7",
      "Life.expectancy": "63.1"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2001",
      "BMI": "21.1",
      "Life.expectancy": "62.8"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2000",
      "BMI": "2.7",
      "Life.expectancy": "62.6"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2015",
      "BMI": "68.2",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2014",
      "BMI": "67.3",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2013",
      "BMI": "66.4",
      "Life.expectancy": "74.3"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2012",
      "BMI": "65.6",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2011",
      "BMI": "64.7",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2010",
      "BMI": "63.9",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2009",
      "BMI": "63.1",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2008",
      "BMI": "62.4",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2007",
      "BMI": "61.6",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2006",
      "BMI": "6.9",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2005",
      "BMI": "6.2",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2004",
      "BMI": "59.4",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2003",
      "BMI": "58.5",
      "Life.expectancy": "73"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2002",
      "BMI": "57.7",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2001",
      "BMI": "56.9",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2000",
      "BMI": "56.2",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Senegal",
      "Year": "2015",
      "BMI": "24.3",
      "Life.expectancy": "66.7"
    },
    {
      "Country": "Senegal",
      "Year": "2014",
      "BMI": "23.8",
      "Life.expectancy": "66.4"
    },
    {
      "Country": "Senegal",
      "Year": "2013",
      "BMI": "23.2",
      "Life.expectancy": "66"
    },
    {
      "Country": "Senegal",
      "Year": "2012",
      "BMI": "22.7",
      "Life.expectancy": "65.6"
    },
    {
      "Country": "Senegal",
      "Year": "2011",
      "BMI": "22.2",
      "Life.expectancy": "64.9"
    },
    {
      "Country": "Senegal",
      "Year": "2010",
      "BMI": "21.7",
      "Life.expectancy": "64.3"
    },
    {
      "Country": "Senegal",
      "Year": "2009",
      "BMI": "21.2",
      "Life.expectancy": "63.5"
    },
    {
      "Country": "Senegal",
      "Year": "2008",
      "BMI": "2.8",
      "Life.expectancy": "62.8"
    },
    {
      "Country": "Senegal",
      "Year": "2007",
      "BMI": "2.3",
      "Life.expectancy": "62.1"
    },
    {
      "Country": "Senegal",
      "Year": "2006",
      "BMI": "19.9",
      "Life.expectancy": "61.3"
    },
    {
      "Country": "Senegal",
      "Year": "2005",
      "BMI": "19.5",
      "Life.expectancy": "65"
    },
    {
      "Country": "Senegal",
      "Year": "2004",
      "BMI": "19.1",
      "Life.expectancy": "59.7"
    },
    {
      "Country": "Senegal",
      "Year": "2003",
      "BMI": "18.7",
      "Life.expectancy": "59"
    },
    {
      "Country": "Senegal",
      "Year": "2002",
      "BMI": "18.3",
      "Life.expectancy": "58.4"
    },
    {
      "Country": "Senegal",
      "Year": "2001",
      "BMI": "17.9",
      "Life.expectancy": "57.9"
    },
    {
      "Country": "Senegal",
      "Year": "2000",
      "BMI": "17.5",
      "Life.expectancy": "57.5"
    },
    {
      "Country": "Serbia",
      "Year": "2015",
      "BMI": "6",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "Serbia",
      "Year": "2014",
      "BMI": "59.4",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Serbia",
      "Year": "2013",
      "BMI": "58.9",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "Serbia",
      "Year": "2012",
      "BMI": "58.3",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Serbia",
      "Year": "2011",
      "BMI": "57.7",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Serbia",
      "Year": "2010",
      "BMI": "57",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Serbia",
      "Year": "2009",
      "BMI": "56.4",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Serbia",
      "Year": "2008",
      "BMI": "55.8",
      "Life.expectancy": "74"
    },
    {
      "Country": "Serbia",
      "Year": "2007",
      "BMI": "55.1",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Serbia",
      "Year": "2006",
      "BMI": "54.5",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Serbia",
      "Year": "2005",
      "BMI": "53.9",
      "Life.expectancy": "73"
    },
    {
      "Country": "Serbia",
      "Year": "2004",
      "BMI": "53.3",
      "Life.expectancy": "73"
    },
    {
      "Country": "Serbia",
      "Year": "2003",
      "BMI": "52.8",
      "Life.expectancy": "73"
    },
    {
      "Country": "Serbia",
      "Year": "2002",
      "BMI": "52.2",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Serbia",
      "Year": "2001",
      "BMI": "51.7",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Serbia",
      "Year": "2000",
      "BMI": "51.2",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Seychelles",
      "Year": "2015",
      "BMI": "37.4",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Seychelles",
      "Year": "2014",
      "BMI": "36.2",
      "Life.expectancy": "73"
    },
    {
      "Country": "Seychelles",
      "Year": "2013",
      "BMI": "35.5",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Seychelles",
      "Year": "2012",
      "BMI": "34.8",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Seychelles",
      "Year": "2011",
      "BMI": "34.2",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Seychelles",
      "Year": "2010",
      "BMI": "33.5",
      "Life.expectancy": "72.4"
    },
    {
      "Country": "Seychelles",
      "Year": "2009",
      "BMI": "32.4",
      "Life.expectancy": "72.3"
    },
    {
      "Country": "Seychelles",
      "Year": "2008",
      "BMI": "31.8",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "Seychelles",
      "Year": "2007",
      "BMI": "31.2",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "Seychelles",
      "Year": "2006",
      "BMI": "3.7",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "Seychelles",
      "Year": "2005",
      "BMI": "3.1",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "Seychelles",
      "Year": "2004",
      "BMI": "29.2",
      "Life.expectancy": "72.1"
    },
    {
      "Country": "Seychelles",
      "Year": "2003",
      "BMI": "28.7",
      "Life.expectancy": "72.1"
    },
    {
      "Country": "Seychelles",
      "Year": "2002",
      "BMI": "28.1",
      "Life.expectancy": "72.1"
    },
    {
      "Country": "Seychelles",
      "Year": "2001",
      "BMI": "27.6",
      "Life.expectancy": "72"
    },
    {
      "Country": "Seychelles",
      "Year": "2000",
      "BMI": "27.1",
      "Life.expectancy": "71.8"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2015",
      "BMI": "24.4",
      "Life.expectancy": "51"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2014",
      "BMI": "23.8",
      "Life.expectancy": "48.1"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2013",
      "BMI": "23.3",
      "Life.expectancy": "54"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2012",
      "BMI": "22.7",
      "Life.expectancy": "49.7"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2011",
      "BMI": "22.2",
      "Life.expectancy": "48.9"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2010",
      "BMI": "21.7",
      "Life.expectancy": "48.1"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2009",
      "BMI": "21.2",
      "Life.expectancy": "47.1"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2008",
      "BMI": "2.7",
      "Life.expectancy": "46.2"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2007",
      "BMI": "2.2",
      "Life.expectancy": "45.3"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2006",
      "BMI": "19.7",
      "Life.expectancy": "44.3"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2005",
      "BMI": "19.2",
      "Life.expectancy": "43.3"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2004",
      "BMI": "18.8",
      "Life.expectancy": "42.3"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2003",
      "BMI": "18.4",
      "Life.expectancy": "41.5"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2002",
      "BMI": "17.9",
      "Life.expectancy": "48"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2001",
      "BMI": "17.5",
      "Life.expectancy": "41"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2000",
      "BMI": "17.2",
      "Life.expectancy": "39"
    },
    {
      "Country": "Singapore",
      "Year": "2015",
      "BMI": "33.2",
      "Life.expectancy": "83.1"
    },
    {
      "Country": "Singapore",
      "Year": "2014",
      "BMI": "32.9",
      "Life.expectancy": "82.9"
    },
    {
      "Country": "Singapore",
      "Year": "2013",
      "BMI": "32.7",
      "Life.expectancy": "82.7"
    },
    {
      "Country": "Singapore",
      "Year": "2012",
      "BMI": "32.4",
      "Life.expectancy": "82.5"
    },
    {
      "Country": "Singapore",
      "Year": "2011",
      "BMI": "32.1",
      "Life.expectancy": "82.2"
    },
    {
      "Country": "Singapore",
      "Year": "2010",
      "BMI": "31.8",
      "Life.expectancy": "82"
    },
    {
      "Country": "Singapore",
      "Year": "2009",
      "BMI": "31.5",
      "Life.expectancy": "81.7"
    },
    {
      "Country": "Singapore",
      "Year": "2008",
      "BMI": "31.2",
      "Life.expectancy": "81.4"
    },
    {
      "Country": "Singapore",
      "Year": "2007",
      "BMI": "3.9",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "Singapore",
      "Year": "2006",
      "BMI": "3.5",
      "Life.expectancy": "87"
    },
    {
      "Country": "Singapore",
      "Year": "2005",
      "BMI": "3.2",
      "Life.expectancy": "82"
    },
    {
      "Country": "Singapore",
      "Year": "2004",
      "BMI": "29.9",
      "Life.expectancy": "79.7"
    },
    {
      "Country": "Singapore",
      "Year": "2003",
      "BMI": "29.6",
      "Life.expectancy": "79.3"
    },
    {
      "Country": "Singapore",
      "Year": "2002",
      "BMI": "29.2",
      "Life.expectancy": "79"
    },
    {
      "Country": "Singapore",
      "Year": "2001",
      "BMI": "28.9",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "Singapore",
      "Year": "2000",
      "BMI": "28.5",
      "Life.expectancy": "78.3"
    },
    {
      "Country": "Slovakia",
      "Year": "2015",
      "BMI": "59.1",
      "Life.expectancy": "76.7"
    },
    {
      "Country": "Slovakia",
      "Year": "2014",
      "BMI": "58.4",
      "Life.expectancy": "76.4"
    },
    {
      "Country": "Slovakia",
      "Year": "2013",
      "BMI": "57.8",
      "Life.expectancy": "76.1"
    },
    {
      "Country": "Slovakia",
      "Year": "2012",
      "BMI": "57.2",
      "Life.expectancy": "75.8"
    },
    {
      "Country": "Slovakia",
      "Year": "2011",
      "BMI": "56.5",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "Slovakia",
      "Year": "2010",
      "BMI": "55.9",
      "Life.expectancy": "75.1"
    },
    {
      "Country": "Slovakia",
      "Year": "2009",
      "BMI": "55.3",
      "Life.expectancy": "75"
    },
    {
      "Country": "Slovakia",
      "Year": "2008",
      "BMI": "54.8",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Slovakia",
      "Year": "2007",
      "BMI": "54.2",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Slovakia",
      "Year": "2006",
      "BMI": "53.7",
      "Life.expectancy": "74.3"
    },
    {
      "Country": "Slovakia",
      "Year": "2005",
      "BMI": "53.1",
      "Life.expectancy": "74"
    },
    {
      "Country": "Slovakia",
      "Year": "2004",
      "BMI": "52.6",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Slovakia",
      "Year": "2003",
      "BMI": "52.1",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Slovakia",
      "Year": "2002",
      "BMI": "51.6",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Slovakia",
      "Year": "2001",
      "BMI": "51.1",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Slovakia",
      "Year": "2000",
      "BMI": "5.7",
      "Life.expectancy": "73"
    },
    {
      "Country": "Slovenia",
      "Year": "2015",
      "BMI": "6.1",
      "Life.expectancy": "88"
    },
    {
      "Country": "Slovenia",
      "Year": "2014",
      "BMI": "59.5",
      "Life.expectancy": "87"
    },
    {
      "Country": "Slovenia",
      "Year": "2013",
      "BMI": "58.9",
      "Life.expectancy": "85"
    },
    {
      "Country": "Slovenia",
      "Year": "2012",
      "BMI": "58.2",
      "Life.expectancy": "82"
    },
    {
      "Country": "Slovenia",
      "Year": "2011",
      "BMI": "57.6",
      "Life.expectancy": "79.8"
    },
    {
      "Country": "Slovenia",
      "Year": "2010",
      "BMI": "57",
      "Life.expectancy": "79.5"
    },
    {
      "Country": "Slovenia",
      "Year": "2009",
      "BMI": "56.4",
      "Life.expectancy": "79.1"
    },
    {
      "Country": "Slovenia",
      "Year": "2008",
      "BMI": "55.8",
      "Life.expectancy": "78.9"
    },
    {
      "Country": "Slovenia",
      "Year": "2007",
      "BMI": "55.2",
      "Life.expectancy": "78.3"
    },
    {
      "Country": "Slovenia",
      "Year": "2006",
      "BMI": "54.7",
      "Life.expectancy": "78.1"
    },
    {
      "Country": "Slovenia",
      "Year": "2005",
      "BMI": "54.1",
      "Life.expectancy": "77.5"
    },
    {
      "Country": "Slovenia",
      "Year": "2004",
      "BMI": "53.5",
      "Life.expectancy": "77.2"
    },
    {
      "Country": "Slovenia",
      "Year": "2003",
      "BMI": "52.9",
      "Life.expectancy": "76.5"
    },
    {
      "Country": "Slovenia",
      "Year": "2002",
      "BMI": "52.3",
      "Life.expectancy": "76.6"
    },
    {
      "Country": "Slovenia",
      "Year": "2001",
      "BMI": "51.8",
      "Life.expectancy": "76.2"
    },
    {
      "Country": "Slovenia",
      "Year": "2000",
      "BMI": "51.2",
      "Life.expectancy": "76"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2015",
      "BMI": "5.5",
      "Life.expectancy": "69.2"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2014",
      "BMI": "49.7",
      "Life.expectancy": "68.8"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2013",
      "BMI": "48.9",
      "Life.expectancy": "68.8"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2012",
      "BMI": "48.1",
      "Life.expectancy": "68.7"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2011",
      "BMI": "47.2",
      "Life.expectancy": "68.5"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2010",
      "BMI": "46.4",
      "Life.expectancy": "68.3"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2009",
      "BMI": "45.5",
      "Life.expectancy": "68.1"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2008",
      "BMI": "44.7",
      "Life.expectancy": "68"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2007",
      "BMI": "43.8",
      "Life.expectancy": "67.6"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2006",
      "BMI": "43",
      "Life.expectancy": "67.6"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2005",
      "BMI": "42.1",
      "Life.expectancy": "67.4"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2004",
      "BMI": "41.3",
      "Life.expectancy": "67.1"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2003",
      "BMI": "4.4",
      "Life.expectancy": "66.8"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2002",
      "BMI": "39.6",
      "Life.expectancy": "66.5"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2001",
      "BMI": "38.7",
      "Life.expectancy": "66.2"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2000",
      "BMI": "37.9",
      "Life.expectancy": "65.8"
    },
    {
      "Country": "Somalia",
      "Year": "2015",
      "BMI": "24.3",
      "Life.expectancy": "55"
    },
    {
      "Country": "Somalia",
      "Year": "2014",
      "BMI": "23.8",
      "Life.expectancy": "54.3"
    },
    {
      "Country": "Somalia",
      "Year": "2013",
      "BMI": "23.3",
      "Life.expectancy": "54.2"
    },
    {
      "Country": "Somalia",
      "Year": "2012",
      "BMI": "22.9",
      "Life.expectancy": "53.1"
    },
    {
      "Country": "Somalia",
      "Year": "2011",
      "BMI": "22.4",
      "Life.expectancy": "53.1"
    },
    {
      "Country": "Somalia",
      "Year": "2010",
      "BMI": "22",
      "Life.expectancy": "52.4"
    },
    {
      "Country": "Somalia",
      "Year": "2009",
      "BMI": "21.5",
      "Life.expectancy": "52.2"
    },
    {
      "Country": "Somalia",
      "Year": "2008",
      "BMI": "21.1",
      "Life.expectancy": "51.9"
    },
    {
      "Country": "Somalia",
      "Year": "2007",
      "BMI": "2.7",
      "Life.expectancy": "51.5"
    },
    {
      "Country": "Somalia",
      "Year": "2006",
      "BMI": "2.2",
      "Life.expectancy": "51.5"
    },
    {
      "Country": "Somalia",
      "Year": "2005",
      "BMI": "19.8",
      "Life.expectancy": "51.6"
    },
    {
      "Country": "Somalia",
      "Year": "2004",
      "BMI": "19.4",
      "Life.expectancy": "51.2"
    },
    {
      "Country": "Somalia",
      "Year": "2003",
      "BMI": "19",
      "Life.expectancy": "51.1"
    },
    {
      "Country": "Somalia",
      "Year": "2002",
      "BMI": "18.6",
      "Life.expectancy": "58"
    },
    {
      "Country": "Somalia",
      "Year": "2001",
      "BMI": "18.2",
      "Life.expectancy": "57"
    },
    {
      "Country": "Somalia",
      "Year": "2000",
      "BMI": "17.8",
      "Life.expectancy": "55"
    },
    {
      "Country": "South Africa",
      "Year": "2015",
      "BMI": "51.1",
      "Life.expectancy": "62.9"
    },
    {
      "Country": "South Africa",
      "Year": "2014",
      "BMI": "5.3",
      "Life.expectancy": "62"
    },
    {
      "Country": "South Africa",
      "Year": "2013",
      "BMI": "49.5",
      "Life.expectancy": "69"
    },
    {
      "Country": "South Africa",
      "Year": "2012",
      "BMI": "48.7",
      "Life.expectancy": "59.2"
    },
    {
      "Country": "South Africa",
      "Year": "2011",
      "BMI": "47.9",
      "Life.expectancy": "58.9"
    },
    {
      "Country": "South Africa",
      "Year": "2010",
      "BMI": "47.2",
      "Life.expectancy": "58"
    },
    {
      "Country": "South Africa",
      "Year": "2009",
      "BMI": "46.4",
      "Life.expectancy": "56.5"
    },
    {
      "Country": "South Africa",
      "Year": "2008",
      "BMI": "45.7",
      "Life.expectancy": "55.3"
    },
    {
      "Country": "South Africa",
      "Year": "2007",
      "BMI": "45",
      "Life.expectancy": "54.5"
    },
    {
      "Country": "South Africa",
      "Year": "2006",
      "BMI": "44.3",
      "Life.expectancy": "54"
    },
    {
      "Country": "South Africa",
      "Year": "2005",
      "BMI": "43.6",
      "Life.expectancy": "53.8"
    },
    {
      "Country": "South Africa",
      "Year": "2004",
      "BMI": "42.9",
      "Life.expectancy": "53.7"
    },
    {
      "Country": "South Africa",
      "Year": "2003",
      "BMI": "42.2",
      "Life.expectancy": "54"
    },
    {
      "Country": "South Africa",
      "Year": "2002",
      "BMI": "41.6",
      "Life.expectancy": "54.9"
    },
    {
      "Country": "South Africa",
      "Year": "2001",
      "BMI": "4.9",
      "Life.expectancy": "56"
    },
    {
      "Country": "South Africa",
      "Year": "2000",
      "BMI": "4.1",
      "Life.expectancy": "57.3"
    },
    {
      "Country": "South Sudan",
      "Year": "2015",
      "BMI": "0",
      "Life.expectancy": "57.3"
    },
    {
      "Country": "South Sudan",
      "Year": "2014",
      "BMI": "0",
      "Life.expectancy": "56.6"
    },
    {
      "Country": "South Sudan",
      "Year": "2013",
      "BMI": "0",
      "Life.expectancy": "56.4"
    },
    {
      "Country": "South Sudan",
      "Year": "2012",
      "BMI": "0",
      "Life.expectancy": "56"
    },
    {
      "Country": "South Sudan",
      "Year": "2011",
      "BMI": "0",
      "Life.expectancy": "55.4"
    },
    {
      "Country": "South Sudan",
      "Year": "2010",
      "BMI": "0",
      "Life.expectancy": "55"
    },
    {
      "Country": "South Sudan",
      "Year": "2009",
      "BMI": "0",
      "Life.expectancy": "54.3"
    },
    {
      "Country": "South Sudan",
      "Year": "2008",
      "BMI": "0",
      "Life.expectancy": "53.6"
    },
    {
      "Country": "South Sudan",
      "Year": "2007",
      "BMI": "0",
      "Life.expectancy": "53.1"
    },
    {
      "Country": "South Sudan",
      "Year": "2006",
      "BMI": "0",
      "Life.expectancy": "52.5"
    },
    {
      "Country": "South Sudan",
      "Year": "2005",
      "BMI": "0",
      "Life.expectancy": "51.9"
    },
    {
      "Country": "South Sudan",
      "Year": "2004",
      "BMI": "0",
      "Life.expectancy": "51.4"
    },
    {
      "Country": "South Sudan",
      "Year": "2003",
      "BMI": "0",
      "Life.expectancy": "58"
    },
    {
      "Country": "South Sudan",
      "Year": "2002",
      "BMI": "0",
      "Life.expectancy": "52"
    },
    {
      "Country": "South Sudan",
      "Year": "2001",
      "BMI": "0",
      "Life.expectancy": "49.6"
    },
    {
      "Country": "South Sudan",
      "Year": "2000",
      "BMI": "0",
      "Life.expectancy": "48.9"
    },
    {
      "Country": "Spain",
      "Year": "2015",
      "BMI": "66.6",
      "Life.expectancy": "82.8"
    },
    {
      "Country": "Spain",
      "Year": "2014",
      "BMI": "66",
      "Life.expectancy": "82.6"
    },
    {
      "Country": "Spain",
      "Year": "2013",
      "BMI": "65.4",
      "Life.expectancy": "82.4"
    },
    {
      "Country": "Spain",
      "Year": "2012",
      "BMI": "64.8",
      "Life.expectancy": "82"
    },
    {
      "Country": "Spain",
      "Year": "2011",
      "BMI": "64.1",
      "Life.expectancy": "82.1"
    },
    {
      "Country": "Spain",
      "Year": "2010",
      "BMI": "63.5",
      "Life.expectancy": "81.9"
    },
    {
      "Country": "Spain",
      "Year": "2009",
      "BMI": "62.9",
      "Life.expectancy": "81.6"
    },
    {
      "Country": "Spain",
      "Year": "2008",
      "BMI": "62.3",
      "Life.expectancy": "81.3"
    },
    {
      "Country": "Spain",
      "Year": "2007",
      "BMI": "61.7",
      "Life.expectancy": "89"
    },
    {
      "Country": "Spain",
      "Year": "2006",
      "BMI": "61.1",
      "Life.expectancy": "88"
    },
    {
      "Country": "Spain",
      "Year": "2005",
      "BMI": "6.5",
      "Life.expectancy": "81"
    },
    {
      "Country": "Spain",
      "Year": "2004",
      "BMI": "59.9",
      "Life.expectancy": "81"
    },
    {
      "Country": "Spain",
      "Year": "2003",
      "BMI": "59.3",
      "Life.expectancy": "79.4"
    },
    {
      "Country": "Spain",
      "Year": "2002",
      "BMI": "58.8",
      "Life.expectancy": "79.5"
    },
    {
      "Country": "Spain",
      "Year": "2001",
      "BMI": "58.2",
      "Life.expectancy": "79.4"
    },
    {
      "Country": "Spain",
      "Year": "2000",
      "BMI": "57.6",
      "Life.expectancy": "79.1"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2015",
      "BMI": "23.4",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2014",
      "BMI": "22.7",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2013",
      "BMI": "21.9",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2012",
      "BMI": "21.2",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2011",
      "BMI": "2.5",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2010",
      "BMI": "19.8",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2009",
      "BMI": "19.2",
      "Life.expectancy": "71.8"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2008",
      "BMI": "18.5",
      "Life.expectancy": "72.3"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2007",
      "BMI": "17.9",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2006",
      "BMI": "17.2",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2005",
      "BMI": "16.6",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2004",
      "BMI": "16.1",
      "Life.expectancy": "69.1"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2003",
      "BMI": "15.6",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2002",
      "BMI": "15.1",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2001",
      "BMI": "14.6",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2000",
      "BMI": "14.1",
      "Life.expectancy": "71.5"
    },
    {
      "Country": "Sudan",
      "Year": "2015",
      "BMI": "0",
      "Life.expectancy": "64.1"
    },
    {
      "Country": "Sudan",
      "Year": "2014",
      "BMI": "0",
      "Life.expectancy": "63.8"
    },
    {
      "Country": "Sudan",
      "Year": "2013",
      "BMI": "0",
      "Life.expectancy": "63.5"
    },
    {
      "Country": "Sudan",
      "Year": "2012",
      "BMI": "0",
      "Life.expectancy": "63.2"
    },
    {
      "Country": "Sudan",
      "Year": "2011",
      "BMI": "0",
      "Life.expectancy": "62.7"
    },
    {
      "Country": "Sudan",
      "Year": "2010",
      "BMI": "0",
      "Life.expectancy": "62.5"
    },
    {
      "Country": "Sudan",
      "Year": "2009",
      "BMI": "0",
      "Life.expectancy": "62"
    },
    {
      "Country": "Sudan",
      "Year": "2008",
      "BMI": "0",
      "Life.expectancy": "61.8"
    },
    {
      "Country": "Sudan",
      "Year": "2007",
      "BMI": "0",
      "Life.expectancy": "61.4"
    },
    {
      "Country": "Sudan",
      "Year": "2006",
      "BMI": "0",
      "Life.expectancy": "61"
    },
    {
      "Country": "Sudan",
      "Year": "2005",
      "BMI": "0",
      "Life.expectancy": "67"
    },
    {
      "Country": "Sudan",
      "Year": "2004",
      "BMI": "0",
      "Life.expectancy": "59.7"
    },
    {
      "Country": "Sudan",
      "Year": "2003",
      "BMI": "0",
      "Life.expectancy": "59.6"
    },
    {
      "Country": "Sudan",
      "Year": "2002",
      "BMI": "0",
      "Life.expectancy": "59.4"
    },
    {
      "Country": "Sudan",
      "Year": "2001",
      "BMI": "0",
      "Life.expectancy": "58.9"
    },
    {
      "Country": "Sudan",
      "Year": "2000",
      "BMI": "0",
      "Life.expectancy": "58.6"
    },
    {
      "Country": "Suriname",
      "Year": "2015",
      "BMI": "58.3",
      "Life.expectancy": "71.6"
    },
    {
      "Country": "Suriname",
      "Year": "2014",
      "BMI": "57.7",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "Suriname",
      "Year": "2013",
      "BMI": "57",
      "Life.expectancy": "71.2"
    },
    {
      "Country": "Suriname",
      "Year": "2012",
      "BMI": "56.3",
      "Life.expectancy": "71.3"
    },
    {
      "Country": "Suriname",
      "Year": "2011",
      "BMI": "55.5",
      "Life.expectancy": "76"
    },
    {
      "Country": "Suriname",
      "Year": "2010",
      "BMI": "54.8",
      "Life.expectancy": "73"
    },
    {
      "Country": "Suriname",
      "Year": "2009",
      "BMI": "54.1",
      "Life.expectancy": "70"
    },
    {
      "Country": "Suriname",
      "Year": "2008",
      "BMI": "53.3",
      "Life.expectancy": "69.8"
    },
    {
      "Country": "Suriname",
      "Year": "2007",
      "BMI": "52.6",
      "Life.expectancy": "69.5"
    },
    {
      "Country": "Suriname",
      "Year": "2006",
      "BMI": "51.8",
      "Life.expectancy": "69.3"
    },
    {
      "Country": "Suriname",
      "Year": "2005",
      "BMI": "51.1",
      "Life.expectancy": "68.9"
    },
    {
      "Country": "Suriname",
      "Year": "2004",
      "BMI": "5.4",
      "Life.expectancy": "68.3"
    },
    {
      "Country": "Suriname",
      "Year": "2003",
      "BMI": "49.7",
      "Life.expectancy": "68"
    },
    {
      "Country": "Suriname",
      "Year": "2002",
      "BMI": "49",
      "Life.expectancy": "67.9"
    },
    {
      "Country": "Suriname",
      "Year": "2001",
      "BMI": "48.3",
      "Life.expectancy": "67.7"
    },
    {
      "Country": "Suriname",
      "Year": "2000",
      "BMI": "47.6",
      "Life.expectancy": "67.4"
    },
    {
      "Country": "Swaziland",
      "Year": "2015",
      "BMI": "32.3",
      "Life.expectancy": "58.9"
    },
    {
      "Country": "Swaziland",
      "Year": "2014",
      "BMI": "31.8",
      "Life.expectancy": "58.4"
    },
    {
      "Country": "Swaziland",
      "Year": "2013",
      "BMI": "31.2",
      "Life.expectancy": "57.6"
    },
    {
      "Country": "Swaziland",
      "Year": "2012",
      "BMI": "3.7",
      "Life.expectancy": "56.5"
    },
    {
      "Country": "Swaziland",
      "Year": "2011",
      "BMI": "3.2",
      "Life.expectancy": "55"
    },
    {
      "Country": "Swaziland",
      "Year": "2010",
      "BMI": "29.7",
      "Life.expectancy": "53.6"
    },
    {
      "Country": "Swaziland",
      "Year": "2009",
      "BMI": "29.3",
      "Life.expectancy": "52.6"
    },
    {
      "Country": "Swaziland",
      "Year": "2008",
      "BMI": "28.9",
      "Life.expectancy": "51.4"
    },
    {
      "Country": "Swaziland",
      "Year": "2007",
      "BMI": "28.5",
      "Life.expectancy": "50"
    },
    {
      "Country": "Swaziland",
      "Year": "2006",
      "BMI": "28.2",
      "Life.expectancy": "47.8"
    },
    {
      "Country": "Swaziland",
      "Year": "2005",
      "BMI": "27.8",
      "Life.expectancy": "46"
    },
    {
      "Country": "Swaziland",
      "Year": "2004",
      "BMI": "27.4",
      "Life.expectancy": "45.6"
    },
    {
      "Country": "Swaziland",
      "Year": "2003",
      "BMI": "27.1",
      "Life.expectancy": "45.9"
    },
    {
      "Country": "Swaziland",
      "Year": "2002",
      "BMI": "26.7",
      "Life.expectancy": "46.4"
    },
    {
      "Country": "Swaziland",
      "Year": "2001",
      "BMI": "26.3",
      "Life.expectancy": "47.1"
    },
    {
      "Country": "Swaziland",
      "Year": "2000",
      "BMI": "25.9",
      "Life.expectancy": "48.4"
    },
    {
      "Country": "Sweden",
      "Year": "2015",
      "BMI": "59.5",
      "Life.expectancy": "82.4"
    },
    {
      "Country": "Sweden",
      "Year": "2014",
      "BMI": "59",
      "Life.expectancy": "82.3"
    },
    {
      "Country": "Sweden",
      "Year": "2013",
      "BMI": "58.5",
      "Life.expectancy": "81.9"
    },
    {
      "Country": "Sweden",
      "Year": "2012",
      "BMI": "58.1",
      "Life.expectancy": "81.7"
    },
    {
      "Country": "Sweden",
      "Year": "2011",
      "BMI": "57.7",
      "Life.expectancy": "81.7"
    },
    {
      "Country": "Sweden",
      "Year": "2010",
      "BMI": "57.3",
      "Life.expectancy": "81.5"
    },
    {
      "Country": "Sweden",
      "Year": "2009",
      "BMI": "56.9",
      "Life.expectancy": "81.4"
    },
    {
      "Country": "Sweden",
      "Year": "2008",
      "BMI": "56.5",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "Sweden",
      "Year": "2007",
      "BMI": "56.1",
      "Life.expectancy": "89"
    },
    {
      "Country": "Sweden",
      "Year": "2006",
      "BMI": "55.7",
      "Life.expectancy": "88"
    },
    {
      "Country": "Sweden",
      "Year": "2005",
      "BMI": "55.3",
      "Life.expectancy": "85"
    },
    {
      "Country": "Sweden",
      "Year": "2004",
      "BMI": "54.9",
      "Life.expectancy": "83"
    },
    {
      "Country": "Sweden",
      "Year": "2003",
      "BMI": "54.4",
      "Life.expectancy": "82"
    },
    {
      "Country": "Sweden",
      "Year": "2002",
      "BMI": "53.9",
      "Life.expectancy": "79.9"
    },
    {
      "Country": "Sweden",
      "Year": "2001",
      "BMI": "53.4",
      "Life.expectancy": "79.8"
    },
    {
      "Country": "Sweden",
      "Year": "2000",
      "BMI": "52.8",
      "Life.expectancy": "79.6"
    },
    {
      "Country": "Switzerland",
      "Year": "2015",
      "BMI": "57.4",
      "Life.expectancy": "83.4"
    },
    {
      "Country": "Switzerland",
      "Year": "2014",
      "BMI": "57",
      "Life.expectancy": "83.2"
    },
    {
      "Country": "Switzerland",
      "Year": "2013",
      "BMI": "56.6",
      "Life.expectancy": "83"
    },
    {
      "Country": "Switzerland",
      "Year": "2012",
      "BMI": "56.2",
      "Life.expectancy": "82.7"
    },
    {
      "Country": "Switzerland",
      "Year": "2011",
      "BMI": "55.8",
      "Life.expectancy": "82.6"
    },
    {
      "Country": "Switzerland",
      "Year": "2010",
      "BMI": "55.4",
      "Life.expectancy": "82.3"
    },
    {
      "Country": "Switzerland",
      "Year": "2009",
      "BMI": "55",
      "Life.expectancy": "82.1"
    },
    {
      "Country": "Switzerland",
      "Year": "2008",
      "BMI": "54.6",
      "Life.expectancy": "82"
    },
    {
      "Country": "Switzerland",
      "Year": "2007",
      "BMI": "54.1",
      "Life.expectancy": "81.7"
    },
    {
      "Country": "Switzerland",
      "Year": "2006",
      "BMI": "53.7",
      "Life.expectancy": "81.5"
    },
    {
      "Country": "Switzerland",
      "Year": "2005",
      "BMI": "53.2",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "Switzerland",
      "Year": "2004",
      "BMI": "52.8",
      "Life.expectancy": "81"
    },
    {
      "Country": "Switzerland",
      "Year": "2003",
      "BMI": "52.3",
      "Life.expectancy": "85"
    },
    {
      "Country": "Switzerland",
      "Year": "2002",
      "BMI": "51.8",
      "Life.expectancy": "84"
    },
    {
      "Country": "Switzerland",
      "Year": "2001",
      "BMI": "51.3",
      "Life.expectancy": "82"
    },
    {
      "Country": "Switzerland",
      "Year": "2000",
      "BMI": "5.8",
      "Life.expectancy": "79.7"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2015",
      "BMI": "57.1",
      "Life.expectancy": "64.5"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2014",
      "BMI": "56.2",
      "Life.expectancy": "64.4"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2013",
      "BMI": "55.2",
      "Life.expectancy": "63.6"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2012",
      "BMI": "54.2",
      "Life.expectancy": "62.8"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2011",
      "BMI": "53.2",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2010",
      "BMI": "52.3",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2009",
      "BMI": "51.3",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2008",
      "BMI": "5.4",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2007",
      "BMI": "49.4",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2006",
      "BMI": "48.5",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2005",
      "BMI": "47.6",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2004",
      "BMI": "46.8",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2003",
      "BMI": "46",
      "Life.expectancy": "73"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2002",
      "BMI": "45.3",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2001",
      "BMI": "44.6",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2000",
      "BMI": "43.9",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Tajikistan",
      "Year": "2015",
      "BMI": "4.7",
      "Life.expectancy": "69.7"
    },
    {
      "Country": "Tajikistan",
      "Year": "2014",
      "BMI": "39.9",
      "Life.expectancy": "69.6"
    },
    {
      "Country": "Tajikistan",
      "Year": "2013",
      "BMI": "39",
      "Life.expectancy": "69.3"
    },
    {
      "Country": "Tajikistan",
      "Year": "2012",
      "BMI": "38.2",
      "Life.expectancy": "68.8"
    },
    {
      "Country": "Tajikistan",
      "Year": "2011",
      "BMI": "37.4",
      "Life.expectancy": "68.1"
    },
    {
      "Country": "Tajikistan",
      "Year": "2010",
      "BMI": "36.6",
      "Life.expectancy": "67.3"
    },
    {
      "Country": "Tajikistan",
      "Year": "2009",
      "BMI": "35.9",
      "Life.expectancy": "66.7"
    },
    {
      "Country": "Tajikistan",
      "Year": "2008",
      "BMI": "35.3",
      "Life.expectancy": "66.4"
    },
    {
      "Country": "Tajikistan",
      "Year": "2007",
      "BMI": "34.7",
      "Life.expectancy": "66.1"
    },
    {
      "Country": "Tajikistan",
      "Year": "2006",
      "BMI": "34.1",
      "Life.expectancy": "65.9"
    },
    {
      "Country": "Tajikistan",
      "Year": "2005",
      "BMI": "33.5",
      "Life.expectancy": "65.5"
    },
    {
      "Country": "Tajikistan",
      "Year": "2004",
      "BMI": "33",
      "Life.expectancy": "65.9"
    },
    {
      "Country": "Tajikistan",
      "Year": "2003",
      "BMI": "32.5",
      "Life.expectancy": "65.2"
    },
    {
      "Country": "Tajikistan",
      "Year": "2002",
      "BMI": "32.1",
      "Life.expectancy": "64.3"
    },
    {
      "Country": "Tajikistan",
      "Year": "2001",
      "BMI": "31.6",
      "Life.expectancy": "64"
    },
    {
      "Country": "Tajikistan",
      "Year": "2000",
      "BMI": "31.3",
      "Life.expectancy": "63.7"
    },
    {
      "Country": "Thailand",
      "Year": "2015",
      "BMI": "33.6",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Thailand",
      "Year": "2014",
      "BMI": "32.4",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Thailand",
      "Year": "2013",
      "BMI": "31.3",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Thailand",
      "Year": "2012",
      "BMI": "3.1",
      "Life.expectancy": "74.3"
    },
    {
      "Country": "Thailand",
      "Year": "2011",
      "BMI": "29",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Thailand",
      "Year": "2010",
      "BMI": "27.9",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Thailand",
      "Year": "2009",
      "BMI": "26.8",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Thailand",
      "Year": "2008",
      "BMI": "25.7",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Thailand",
      "Year": "2007",
      "BMI": "24.6",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Thailand",
      "Year": "2006",
      "BMI": "23.6",
      "Life.expectancy": "73"
    },
    {
      "Country": "Thailand",
      "Year": "2005",
      "BMI": "22.6",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Thailand",
      "Year": "2004",
      "BMI": "21.7",
      "Life.expectancy": "71.6"
    },
    {
      "Country": "Thailand",
      "Year": "2003",
      "BMI": "2.9",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "Thailand",
      "Year": "2002",
      "BMI": "2.2",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "Thailand",
      "Year": "2001",
      "BMI": "19.4",
      "Life.expectancy": "71.2"
    },
    {
      "Country": "Thailand",
      "Year": "2000",
      "BMI": "18.7",
      "Life.expectancy": "71.1"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2015",
      "BMI": "6.3",
      "Life.expectancy": "75.7"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2014",
      "BMI": "59.7",
      "Life.expectancy": "75.5"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2013",
      "BMI": "59.1",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2012",
      "BMI": "58.5",
      "Life.expectancy": "75.1"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2011",
      "BMI": "57.9",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2010",
      "BMI": "57.4",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2009",
      "BMI": "56.9",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2008",
      "BMI": "56.4",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2007",
      "BMI": "55.9",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2006",
      "BMI": "55.4",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2005",
      "BMI": "54.9",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2004",
      "BMI": "54.5",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2003",
      "BMI": "54.1",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2002",
      "BMI": "53.6",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2001",
      "BMI": "53.2",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2000",
      "BMI": "52.7",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2015",
      "BMI": "17.4",
      "Life.expectancy": "68.3"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2014",
      "BMI": "17",
      "Life.expectancy": "68"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2013",
      "BMI": "16.6",
      "Life.expectancy": "67.7"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2012",
      "BMI": "16.2",
      "Life.expectancy": "67.4"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2011",
      "BMI": "15.8",
      "Life.expectancy": "67.2"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2010",
      "BMI": "15.5",
      "Life.expectancy": "66.9"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2009",
      "BMI": "15.1",
      "Life.expectancy": "66.6"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2008",
      "BMI": "14.7",
      "Life.expectancy": "66.2"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2007",
      "BMI": "14.2",
      "Life.expectancy": "65.8"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2006",
      "BMI": "13.9",
      "Life.expectancy": "64.9"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2005",
      "BMI": "13.5",
      "Life.expectancy": "63.7"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2004",
      "BMI": "13.2",
      "Life.expectancy": "62.3"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2003",
      "BMI": "12.9",
      "Life.expectancy": "61"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2002",
      "BMI": "12.6",
      "Life.expectancy": "62"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2001",
      "BMI": "12.3",
      "Life.expectancy": "59.4"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2000",
      "BMI": "11.9",
      "Life.expectancy": "58.7"
    },
    {
      "Country": "Togo",
      "Year": "2015",
      "BMI": "24.3",
      "Life.expectancy": "59.9"
    },
    {
      "Country": "Togo",
      "Year": "2014",
      "BMI": "23.7",
      "Life.expectancy": "59.7"
    },
    {
      "Country": "Togo",
      "Year": "2013",
      "BMI": "23.1",
      "Life.expectancy": "59.4"
    },
    {
      "Country": "Togo",
      "Year": "2012",
      "BMI": "22.6",
      "Life.expectancy": "58.9"
    },
    {
      "Country": "Togo",
      "Year": "2011",
      "BMI": "22",
      "Life.expectancy": "58.3"
    },
    {
      "Country": "Togo",
      "Year": "2010",
      "BMI": "21.4",
      "Life.expectancy": "57.4"
    },
    {
      "Country": "Togo",
      "Year": "2009",
      "BMI": "2.9",
      "Life.expectancy": "56.7"
    },
    {
      "Country": "Togo",
      "Year": "2008",
      "BMI": "2.4",
      "Life.expectancy": "56.2"
    },
    {
      "Country": "Togo",
      "Year": "2007",
      "BMI": "19.8",
      "Life.expectancy": "55.9"
    },
    {
      "Country": "Togo",
      "Year": "2006",
      "BMI": "19.3",
      "Life.expectancy": "55.7"
    },
    {
      "Country": "Togo",
      "Year": "2005",
      "BMI": "18.9",
      "Life.expectancy": "55"
    },
    {
      "Country": "Togo",
      "Year": "2004",
      "BMI": "18.4",
      "Life.expectancy": "54.9"
    },
    {
      "Country": "Togo",
      "Year": "2003",
      "BMI": "17.9",
      "Life.expectancy": "54.7"
    },
    {
      "Country": "Togo",
      "Year": "2002",
      "BMI": "17.5",
      "Life.expectancy": "54.7"
    },
    {
      "Country": "Togo",
      "Year": "2001",
      "BMI": "17.1",
      "Life.expectancy": "54.6"
    },
    {
      "Country": "Togo",
      "Year": "2000",
      "BMI": "16.6",
      "Life.expectancy": "54.6"
    },
    {
      "Country": "Tonga",
      "Year": "2015",
      "BMI": "75.2",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Tonga",
      "Year": "2014",
      "BMI": "74.8",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Tonga",
      "Year": "2013",
      "BMI": "74.3",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Tonga",
      "Year": "2012",
      "BMI": "73.8",
      "Life.expectancy": "73"
    },
    {
      "Country": "Tonga",
      "Year": "2011",
      "BMI": "73.3",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Tonga",
      "Year": "2010",
      "BMI": "72.7",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Tonga",
      "Year": "2009",
      "BMI": "72.1",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Tonga",
      "Year": "2008",
      "BMI": "71.5",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Tonga",
      "Year": "2007",
      "BMI": "7.8",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Tonga",
      "Year": "2006",
      "BMI": "7.1",
      "Life.expectancy": "72.4"
    },
    {
      "Country": "Tonga",
      "Year": "2005",
      "BMI": "69.4",
      "Life.expectancy": "72.3"
    },
    {
      "Country": "Tonga",
      "Year": "2004",
      "BMI": "68.6",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "Tonga",
      "Year": "2003",
      "BMI": "67.8",
      "Life.expectancy": "72"
    },
    {
      "Country": "Tonga",
      "Year": "2002",
      "BMI": "67",
      "Life.expectancy": "71.9"
    },
    {
      "Country": "Tonga",
      "Year": "2001",
      "BMI": "66.2",
      "Life.expectancy": "71.8"
    },
    {
      "Country": "Tonga",
      "Year": "2000",
      "BMI": "65.5",
      "Life.expectancy": "71.6"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2015",
      "BMI": "47.1",
      "Life.expectancy": "71.2"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2014",
      "BMI": "46",
      "Life.expectancy": "71.1"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2013",
      "BMI": "45",
      "Life.expectancy": "71"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2012",
      "BMI": "44",
      "Life.expectancy": "78"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2011",
      "BMI": "43",
      "Life.expectancy": "76"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2010",
      "BMI": "42",
      "Life.expectancy": "74"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2009",
      "BMI": "41.1",
      "Life.expectancy": "71"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2008",
      "BMI": "4.2",
      "Life.expectancy": "69.9"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2007",
      "BMI": "39.3",
      "Life.expectancy": "69.7"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2006",
      "BMI": "38.4",
      "Life.expectancy": "69.6"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2005",
      "BMI": "37.6",
      "Life.expectancy": "69.5"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2004",
      "BMI": "36.8",
      "Life.expectancy": "69.4"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2003",
      "BMI": "36",
      "Life.expectancy": "69.3"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2002",
      "BMI": "35.2",
      "Life.expectancy": "69.2"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2001",
      "BMI": "34.4",
      "Life.expectancy": "69.1"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2000",
      "BMI": "33.6",
      "Life.expectancy": "69.1"
    },
    {
      "Country": "Tunisia",
      "Year": "2015",
      "BMI": "61.2",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "Tunisia",
      "Year": "2014",
      "BMI": "6.2",
      "Life.expectancy": "75.1"
    },
    {
      "Country": "Tunisia",
      "Year": "2013",
      "BMI": "59.3",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Tunisia",
      "Year": "2012",
      "BMI": "58.3",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Tunisia",
      "Year": "2011",
      "BMI": "57.4",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Tunisia",
      "Year": "2010",
      "BMI": "56.5",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Tunisia",
      "Year": "2009",
      "BMI": "55.6",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Tunisia",
      "Year": "2008",
      "BMI": "54.7",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Tunisia",
      "Year": "2007",
      "BMI": "53.9",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Tunisia",
      "Year": "2006",
      "BMI": "53.1",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Tunisia",
      "Year": "2005",
      "BMI": "52.2",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Tunisia",
      "Year": "2004",
      "BMI": "51.4",
      "Life.expectancy": "74"
    },
    {
      "Country": "Tunisia",
      "Year": "2003",
      "BMI": "5.6",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Tunisia",
      "Year": "2002",
      "BMI": "49.7",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Tunisia",
      "Year": "2001",
      "BMI": "48.9",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Tunisia",
      "Year": "2000",
      "BMI": "48.1",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Turkey",
      "Year": "2015",
      "BMI": "66.1",
      "Life.expectancy": "75.8"
    },
    {
      "Country": "Turkey",
      "Year": "2014",
      "BMI": "65.3",
      "Life.expectancy": "75.5"
    },
    {
      "Country": "Turkey",
      "Year": "2013",
      "BMI": "64.5",
      "Life.expectancy": "75.2"
    },
    {
      "Country": "Turkey",
      "Year": "2012",
      "BMI": "63.7",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Turkey",
      "Year": "2011",
      "BMI": "62.8",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Turkey",
      "Year": "2010",
      "BMI": "61.9",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Turkey",
      "Year": "2009",
      "BMI": "61.1",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Turkey",
      "Year": "2008",
      "BMI": "6.2",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Turkey",
      "Year": "2007",
      "BMI": "59.3",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Turkey",
      "Year": "2006",
      "BMI": "58.5",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Turkey",
      "Year": "2005",
      "BMI": "57.6",
      "Life.expectancy": "72.4"
    },
    {
      "Country": "Turkey",
      "Year": "2004",
      "BMI": "56.8",
      "Life.expectancy": "72"
    },
    {
      "Country": "Turkey",
      "Year": "2003",
      "BMI": "55.9",
      "Life.expectancy": "71.6"
    },
    {
      "Country": "Turkey",
      "Year": "2002",
      "BMI": "55.1",
      "Life.expectancy": "71.2"
    },
    {
      "Country": "Turkey",
      "Year": "2001",
      "BMI": "54.3",
      "Life.expectancy": "78"
    },
    {
      "Country": "Turkey",
      "Year": "2000",
      "BMI": "53.5",
      "Life.expectancy": "74"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2015",
      "BMI": "48.6",
      "Life.expectancy": "66.3"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2014",
      "BMI": "47.7",
      "Life.expectancy": "66"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2013",
      "BMI": "46.7",
      "Life.expectancy": "65.4"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2012",
      "BMI": "45.9",
      "Life.expectancy": "65.6"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2011",
      "BMI": "45",
      "Life.expectancy": "65.6"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2010",
      "BMI": "44.2",
      "Life.expectancy": "65.8"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2009",
      "BMI": "43.4",
      "Life.expectancy": "65.6"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2008",
      "BMI": "42.7",
      "Life.expectancy": "64.5"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2007",
      "BMI": "42",
      "Life.expectancy": "64.1"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2006",
      "BMI": "41.3",
      "Life.expectancy": "63.7"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2005",
      "BMI": "4.7",
      "Life.expectancy": "63.3"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2004",
      "BMI": "4",
      "Life.expectancy": "63.5"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2003",
      "BMI": "39.4",
      "Life.expectancy": "63.4"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2002",
      "BMI": "38.7",
      "Life.expectancy": "63.3"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2001",
      "BMI": "38.1",
      "Life.expectancy": "64"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2000",
      "BMI": "37.5",
      "Life.expectancy": "63.8"
    },
    {
      "Country": "Tuvalu",
      "Year": "2013",
      "BMI": "79.3",
      "Life.expectancy": "0"
    },
    {
      "Country": "Uganda",
      "Year": "2015",
      "BMI": "18.5",
      "Life.expectancy": "62.3"
    },
    {
      "Country": "Uganda",
      "Year": "2014",
      "BMI": "18.1",
      "Life.expectancy": "61.5"
    },
    {
      "Country": "Uganda",
      "Year": "2013",
      "BMI": "17.6",
      "Life.expectancy": "67"
    },
    {
      "Country": "Uganda",
      "Year": "2012",
      "BMI": "17.2",
      "Life.expectancy": "60"
    },
    {
      "Country": "Uganda",
      "Year": "2011",
      "BMI": "16.7",
      "Life.expectancy": "59.3"
    },
    {
      "Country": "Uganda",
      "Year": "2010",
      "BMI": "16.3",
      "Life.expectancy": "58.4"
    },
    {
      "Country": "Uganda",
      "Year": "2009",
      "BMI": "15.9",
      "Life.expectancy": "57.5"
    },
    {
      "Country": "Uganda",
      "Year": "2008",
      "BMI": "15.6",
      "Life.expectancy": "56.3"
    },
    {
      "Country": "Uganda",
      "Year": "2007",
      "BMI": "15.2",
      "Life.expectancy": "55.5"
    },
    {
      "Country": "Uganda",
      "Year": "2006",
      "BMI": "14.8",
      "Life.expectancy": "54.9"
    },
    {
      "Country": "Uganda",
      "Year": "2005",
      "BMI": "14.5",
      "Life.expectancy": "53.2"
    },
    {
      "Country": "Uganda",
      "Year": "2004",
      "BMI": "14.2",
      "Life.expectancy": "51.3"
    },
    {
      "Country": "Uganda",
      "Year": "2003",
      "BMI": "13.9",
      "Life.expectancy": "51"
    },
    {
      "Country": "Uganda",
      "Year": "2002",
      "BMI": "13.6",
      "Life.expectancy": "48.8"
    },
    {
      "Country": "Uganda",
      "Year": "2001",
      "BMI": "13.3",
      "Life.expectancy": "47.7"
    },
    {
      "Country": "Uganda",
      "Year": "2000",
      "BMI": "13",
      "Life.expectancy": "46.6"
    },
    {
      "Country": "Ukraine",
      "Year": "2015",
      "BMI": "61.3",
      "Life.expectancy": "71.3"
    },
    {
      "Country": "Ukraine",
      "Year": "2014",
      "BMI": "6.7",
      "Life.expectancy": "78"
    },
    {
      "Country": "Ukraine",
      "Year": "2013",
      "BMI": "6.1",
      "Life.expectancy": "71"
    },
    {
      "Country": "Ukraine",
      "Year": "2012",
      "BMI": "59.6",
      "Life.expectancy": "77"
    },
    {
      "Country": "Ukraine",
      "Year": "2011",
      "BMI": "59",
      "Life.expectancy": "75"
    },
    {
      "Country": "Ukraine",
      "Year": "2010",
      "BMI": "58.5",
      "Life.expectancy": "69.8"
    },
    {
      "Country": "Ukraine",
      "Year": "2009",
      "BMI": "58",
      "Life.expectancy": "69.2"
    },
    {
      "Country": "Ukraine",
      "Year": "2008",
      "BMI": "57.6",
      "Life.expectancy": "67.7"
    },
    {
      "Country": "Ukraine",
      "Year": "2007",
      "BMI": "57.2",
      "Life.expectancy": "67.5"
    },
    {
      "Country": "Ukraine",
      "Year": "2006",
      "BMI": "56.8",
      "Life.expectancy": "67.7"
    },
    {
      "Country": "Ukraine",
      "Year": "2005",
      "BMI": "56.4",
      "Life.expectancy": "67"
    },
    {
      "Country": "Ukraine",
      "Year": "2004",
      "BMI": "56.1",
      "Life.expectancy": "67.4"
    },
    {
      "Country": "Ukraine",
      "Year": "2003",
      "BMI": "55.7",
      "Life.expectancy": "67.6"
    },
    {
      "Country": "Ukraine",
      "Year": "2002",
      "BMI": "55.4",
      "Life.expectancy": "67.6"
    },
    {
      "Country": "Ukraine",
      "Year": "2001",
      "BMI": "55.1",
      "Life.expectancy": "67.7"
    },
    {
      "Country": "Ukraine",
      "Year": "2000",
      "BMI": "54.8",
      "Life.expectancy": "67.5"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2015",
      "BMI": "64.2",
      "Life.expectancy": "77.1"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2014",
      "BMI": "62.4",
      "Life.expectancy": "76.9"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2013",
      "BMI": "6.5",
      "Life.expectancy": "76.7"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2012",
      "BMI": "58.6",
      "Life.expectancy": "76.5"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2011",
      "BMI": "57.1",
      "Life.expectancy": "76.3"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2010",
      "BMI": "55.8",
      "Life.expectancy": "76.2"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2009",
      "BMI": "55.1",
      "Life.expectancy": "76"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2008",
      "BMI": "54.8",
      "Life.expectancy": "75.8"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2007",
      "BMI": "55.1",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2006",
      "BMI": "55.8",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2005",
      "BMI": "56.6",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2004",
      "BMI": "57",
      "Life.expectancy": "75.1"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2003",
      "BMI": "56.8",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2002",
      "BMI": "56",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2001",
      "BMI": "55",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2000",
      "BMI": "54.1",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2015",
      "BMI": "66.6",
      "Life.expectancy": "81.2"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2014",
      "BMI": "66",
      "Life.expectancy": "81"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2013",
      "BMI": "65.4",
      "Life.expectancy": "87"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2012",
      "BMI": "64.8",
      "Life.expectancy": "86"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2011",
      "BMI": "64.2",
      "Life.expectancy": "86"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2010",
      "BMI": "63.6",
      "Life.expectancy": "82"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2009",
      "BMI": "63.1",
      "Life.expectancy": "81"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2008",
      "BMI": "62.5",
      "Life.expectancy": "79.6"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2007",
      "BMI": "61.9",
      "Life.expectancy": "79.5"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2006",
      "BMI": "61.3",
      "Life.expectancy": "79.3"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2005",
      "BMI": "6.7",
      "Life.expectancy": "79"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2004",
      "BMI": "6.1",
      "Life.expectancy": "78.8"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2003",
      "BMI": "59.5",
      "Life.expectancy": "78.3"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2002",
      "BMI": "58.8",
      "Life.expectancy": "78.2"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2001",
      "BMI": "58.2",
      "Life.expectancy": "78"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2000",
      "BMI": "57.5",
      "Life.expectancy": "77.8"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2015",
      "BMI": "23.8",
      "Life.expectancy": "61.8"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2014",
      "BMI": "23.2",
      "Life.expectancy": "67"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2013",
      "BMI": "22.5",
      "Life.expectancy": "59.7"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2012",
      "BMI": "21.9",
      "Life.expectancy": "58.6"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2011",
      "BMI": "21.3",
      "Life.expectancy": "58.3"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2010",
      "BMI": "2.7",
      "Life.expectancy": "57.5"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2009",
      "BMI": "2.2",
      "Life.expectancy": "56.9"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2008",
      "BMI": "19.6",
      "Life.expectancy": "56.2"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2007",
      "BMI": "19.1",
      "Life.expectancy": "54.5"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2006",
      "BMI": "18.6",
      "Life.expectancy": "53.1"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2005",
      "BMI": "18.1",
      "Life.expectancy": "52.2"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2004",
      "BMI": "17.7",
      "Life.expectancy": "51.5"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2003",
      "BMI": "17.2",
      "Life.expectancy": "58"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2002",
      "BMI": "16.8",
      "Life.expectancy": "52"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2001",
      "BMI": "16.4",
      "Life.expectancy": "49.6"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2000",
      "BMI": "16",
      "Life.expectancy": "49.2"
    },
    {
      "Country": "United States of America",
      "Year": "2015",
      "BMI": "69.6",
      "Life.expectancy": "79.3"
    },
    {
      "Country": "United States of America",
      "Year": "2014",
      "BMI": "69.1",
      "Life.expectancy": "79.1"
    },
    {
      "Country": "United States of America",
      "Year": "2013",
      "BMI": "68.6",
      "Life.expectancy": "78.9"
    },
    {
      "Country": "United States of America",
      "Year": "2012",
      "BMI": "68",
      "Life.expectancy": "78.8"
    },
    {
      "Country": "United States of America",
      "Year": "2011",
      "BMI": "67.5",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "United States of America",
      "Year": "2010",
      "BMI": "66.9",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "United States of America",
      "Year": "2009",
      "BMI": "66.3",
      "Life.expectancy": "78.5"
    },
    {
      "Country": "United States of America",
      "Year": "2008",
      "BMI": "65.7",
      "Life.expectancy": "78.2"
    },
    {
      "Country": "United States of America",
      "Year": "2007",
      "BMI": "65.1",
      "Life.expectancy": "78.1"
    },
    {
      "Country": "United States of America",
      "Year": "2006",
      "BMI": "64.4",
      "Life.expectancy": "77.8"
    },
    {
      "Country": "United States of America",
      "Year": "2005",
      "BMI": "63.8",
      "Life.expectancy": "77.5"
    },
    {
      "Country": "United States of America",
      "Year": "2004",
      "BMI": "63.1",
      "Life.expectancy": "77.5"
    },
    {
      "Country": "United States of America",
      "Year": "2003",
      "BMI": "62.4",
      "Life.expectancy": "77.2"
    },
    {
      "Country": "United States of America",
      "Year": "2002",
      "BMI": "61.7",
      "Life.expectancy": "77"
    },
    {
      "Country": "United States of America",
      "Year": "2001",
      "BMI": "6.9",
      "Life.expectancy": "76.9"
    },
    {
      "Country": "United States of America",
      "Year": "2000",
      "BMI": "6.1",
      "Life.expectancy": "76.8"
    },
    {
      "Country": "Uruguay",
      "Year": "2015",
      "BMI": "64",
      "Life.expectancy": "77"
    },
    {
      "Country": "Uruguay",
      "Year": "2014",
      "BMI": "63.4",
      "Life.expectancy": "76.8"
    },
    {
      "Country": "Uruguay",
      "Year": "2013",
      "BMI": "62.9",
      "Life.expectancy": "76.8"
    },
    {
      "Country": "Uruguay",
      "Year": "2012",
      "BMI": "62.3",
      "Life.expectancy": "76.5"
    },
    {
      "Country": "Uruguay",
      "Year": "2011",
      "BMI": "61.8",
      "Life.expectancy": "77"
    },
    {
      "Country": "Uruguay",
      "Year": "2010",
      "BMI": "61.2",
      "Life.expectancy": "76.3"
    },
    {
      "Country": "Uruguay",
      "Year": "2009",
      "BMI": "6.7",
      "Life.expectancy": "76.6"
    },
    {
      "Country": "Uruguay",
      "Year": "2008",
      "BMI": "6.1",
      "Life.expectancy": "76.4"
    },
    {
      "Country": "Uruguay",
      "Year": "2007",
      "BMI": "59.5",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Uruguay",
      "Year": "2006",
      "BMI": "58.9",
      "Life.expectancy": "76.2"
    },
    {
      "Country": "Uruguay",
      "Year": "2005",
      "BMI": "58.3",
      "Life.expectancy": "75.7"
    },
    {
      "Country": "Uruguay",
      "Year": "2004",
      "BMI": "57.7",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Uruguay",
      "Year": "2003",
      "BMI": "57",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Uruguay",
      "Year": "2002",
      "BMI": "56.3",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Uruguay",
      "Year": "2001",
      "BMI": "55.7",
      "Life.expectancy": "75.2"
    },
    {
      "Country": "Uruguay",
      "Year": "2000",
      "BMI": "55",
      "Life.expectancy": "75.1"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2015",
      "BMI": "44.7",
      "Life.expectancy": "69.4"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2014",
      "BMI": "43.9",
      "Life.expectancy": "69.2"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2013",
      "BMI": "43",
      "Life.expectancy": "69.1"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2012",
      "BMI": "42.2",
      "Life.expectancy": "68.8"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2011",
      "BMI": "41.4",
      "Life.expectancy": "68.5"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2010",
      "BMI": "4.7",
      "Life.expectancy": "68.3"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2009",
      "BMI": "4",
      "Life.expectancy": "68"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2008",
      "BMI": "39.3",
      "Life.expectancy": "67.9"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2007",
      "BMI": "38.7",
      "Life.expectancy": "67.8"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2006",
      "BMI": "38.1",
      "Life.expectancy": "67.6"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2005",
      "BMI": "37.5",
      "Life.expectancy": "67.3"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2004",
      "BMI": "37",
      "Life.expectancy": "67.8"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2003",
      "BMI": "36.4",
      "Life.expectancy": "67.2"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2002",
      "BMI": "35.9",
      "Life.expectancy": "67.1"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2001",
      "BMI": "35.3",
      "Life.expectancy": "67.4"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2000",
      "BMI": "34.8",
      "Life.expectancy": "67.1"
    },
    {
      "Country": "Vanuatu",
      "Year": "2015",
      "BMI": "53.3",
      "Life.expectancy": "72"
    },
    {
      "Country": "Vanuatu",
      "Year": "2014",
      "BMI": "52.5",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "Vanuatu",
      "Year": "2013",
      "BMI": "51.7",
      "Life.expectancy": "71.6"
    },
    {
      "Country": "Vanuatu",
      "Year": "2012",
      "BMI": "5.8",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "Vanuatu",
      "Year": "2011",
      "BMI": "49.9",
      "Life.expectancy": "71.2"
    },
    {
      "Country": "Vanuatu",
      "Year": "2010",
      "BMI": "49.1",
      "Life.expectancy": "71"
    },
    {
      "Country": "Vanuatu",
      "Year": "2009",
      "BMI": "48.2",
      "Life.expectancy": "78"
    },
    {
      "Country": "Vanuatu",
      "Year": "2008",
      "BMI": "47.4",
      "Life.expectancy": "75"
    },
    {
      "Country": "Vanuatu",
      "Year": "2007",
      "BMI": "46.6",
      "Life.expectancy": "73"
    },
    {
      "Country": "Vanuatu",
      "Year": "2006",
      "BMI": "45.7",
      "Life.expectancy": "71"
    },
    {
      "Country": "Vanuatu",
      "Year": "2005",
      "BMI": "44.9",
      "Life.expectancy": "69.9"
    },
    {
      "Country": "Vanuatu",
      "Year": "2004",
      "BMI": "44.1",
      "Life.expectancy": "69.6"
    },
    {
      "Country": "Vanuatu",
      "Year": "2003",
      "BMI": "43.3",
      "Life.expectancy": "69.4"
    },
    {
      "Country": "Vanuatu",
      "Year": "2002",
      "BMI": "42.6",
      "Life.expectancy": "69.3"
    },
    {
      "Country": "Vanuatu",
      "Year": "2001",
      "BMI": "41.9",
      "Life.expectancy": "69.1"
    },
    {
      "Country": "Vanuatu",
      "Year": "2000",
      "BMI": "41.1",
      "Life.expectancy": "69"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2015",
      "BMI": "62.1",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2014",
      "BMI": "61.5",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2013",
      "BMI": "61",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2012",
      "BMI": "6.4",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2011",
      "BMI": "59.9",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2010",
      "BMI": "59.3",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2009",
      "BMI": "58.8",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2008",
      "BMI": "58.2",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2007",
      "BMI": "57.6",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2006",
      "BMI": "57.1",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2005",
      "BMI": "56.5",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2004",
      "BMI": "55.9",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2003",
      "BMI": "55.3",
      "Life.expectancy": "72.4"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2002",
      "BMI": "54.7",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2001",
      "BMI": "54.1",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2000",
      "BMI": "53.4",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Viet Nam",
      "Year": "2015",
      "BMI": "17.5",
      "Life.expectancy": "76"
    },
    {
      "Country": "Viet Nam",
      "Year": "2014",
      "BMI": "16.7",
      "Life.expectancy": "75.9"
    },
    {
      "Country": "Viet Nam",
      "Year": "2013",
      "BMI": "16",
      "Life.expectancy": "75.7"
    },
    {
      "Country": "Viet Nam",
      "Year": "2012",
      "BMI": "15.3",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "Viet Nam",
      "Year": "2011",
      "BMI": "14.7",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Viet Nam",
      "Year": "2010",
      "BMI": "14",
      "Life.expectancy": "75.2"
    },
    {
      "Country": "Viet Nam",
      "Year": "2009",
      "BMI": "13.4",
      "Life.expectancy": "75"
    },
    {
      "Country": "Viet Nam",
      "Year": "2008",
      "BMI": "12.9",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Viet Nam",
      "Year": "2007",
      "BMI": "12.3",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Viet Nam",
      "Year": "2006",
      "BMI": "11.8",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Viet Nam",
      "Year": "2005",
      "BMI": "11.3",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Viet Nam",
      "Year": "2004",
      "BMI": "1.9",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Viet Nam",
      "Year": "2003",
      "BMI": "1.4",
      "Life.expectancy": "74"
    },
    {
      "Country": "Viet Nam",
      "Year": "2002",
      "BMI": "1",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Viet Nam",
      "Year": "2001",
      "BMI": "9.6",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Viet Nam",
      "Year": "2000",
      "BMI": "9.2",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Yemen",
      "Year": "2015",
      "BMI": "41.3",
      "Life.expectancy": "65.7"
    },
    {
      "Country": "Yemen",
      "Year": "2014",
      "BMI": "4.4",
      "Life.expectancy": "65.4"
    },
    {
      "Country": "Yemen",
      "Year": "2013",
      "BMI": "39.6",
      "Life.expectancy": "65.4"
    },
    {
      "Country": "Yemen",
      "Year": "2012",
      "BMI": "38.7",
      "Life.expectancy": "64.7"
    },
    {
      "Country": "Yemen",
      "Year": "2011",
      "BMI": "37.9",
      "Life.expectancy": "64.6"
    },
    {
      "Country": "Yemen",
      "Year": "2010",
      "BMI": "37.2",
      "Life.expectancy": "64.4"
    },
    {
      "Country": "Yemen",
      "Year": "2009",
      "BMI": "36.4",
      "Life.expectancy": "64.1"
    },
    {
      "Country": "Yemen",
      "Year": "2008",
      "BMI": "35.7",
      "Life.expectancy": "63.8"
    },
    {
      "Country": "Yemen",
      "Year": "2007",
      "BMI": "35.1",
      "Life.expectancy": "63.4"
    },
    {
      "Country": "Yemen",
      "Year": "2006",
      "BMI": "34.5",
      "Life.expectancy": "63"
    },
    {
      "Country": "Yemen",
      "Year": "2005",
      "BMI": "33.9",
      "Life.expectancy": "62.6"
    },
    {
      "Country": "Yemen",
      "Year": "2004",
      "BMI": "33.3",
      "Life.expectancy": "62.2"
    },
    {
      "Country": "Yemen",
      "Year": "2003",
      "BMI": "32.7",
      "Life.expectancy": "61.9"
    },
    {
      "Country": "Yemen",
      "Year": "2002",
      "BMI": "32.2",
      "Life.expectancy": "61.5"
    },
    {
      "Country": "Yemen",
      "Year": "2001",
      "BMI": "31.7",
      "Life.expectancy": "61.1"
    },
    {
      "Country": "Yemen",
      "Year": "2000",
      "BMI": "31.2",
      "Life.expectancy": "68"
    },
    {
      "Country": "Zambia",
      "Year": "2015",
      "BMI": "23.4",
      "Life.expectancy": "61.8"
    },
    {
      "Country": "Zambia",
      "Year": "2014",
      "BMI": "22.8",
      "Life.expectancy": "61.1"
    },
    {
      "Country": "Zambia",
      "Year": "2013",
      "BMI": "22.3",
      "Life.expectancy": "63"
    },
    {
      "Country": "Zambia",
      "Year": "2012",
      "BMI": "21.7",
      "Life.expectancy": "59.2"
    },
    {
      "Country": "Zambia",
      "Year": "2011",
      "BMI": "21.2",
      "Life.expectancy": "58.2"
    },
    {
      "Country": "Zambia",
      "Year": "2010",
      "BMI": "2.7",
      "Life.expectancy": "58"
    },
    {
      "Country": "Zambia",
      "Year": "2009",
      "BMI": "2.2",
      "Life.expectancy": "57.4"
    },
    {
      "Country": "Zambia",
      "Year": "2008",
      "BMI": "19.7",
      "Life.expectancy": "55.7"
    },
    {
      "Country": "Zambia",
      "Year": "2007",
      "BMI": "19.2",
      "Life.expectancy": "52.6"
    },
    {
      "Country": "Zambia",
      "Year": "2006",
      "BMI": "18.8",
      "Life.expectancy": "58"
    },
    {
      "Country": "Zambia",
      "Year": "2005",
      "BMI": "18.4",
      "Life.expectancy": "49.3"
    },
    {
      "Country": "Zambia",
      "Year": "2004",
      "BMI": "18",
      "Life.expectancy": "47.9"
    },
    {
      "Country": "Zambia",
      "Year": "2003",
      "BMI": "17.6",
      "Life.expectancy": "46.4"
    },
    {
      "Country": "Zambia",
      "Year": "2002",
      "BMI": "17.3",
      "Life.expectancy": "45.5"
    },
    {
      "Country": "Zambia",
      "Year": "2001",
      "BMI": "17.1",
      "Life.expectancy": "44.6"
    },
    {
      "Country": "Zambia",
      "Year": "2000",
      "BMI": "16.8",
      "Life.expectancy": "43.8"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2015",
      "BMI": "31.8",
      "Life.expectancy": "67"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2014",
      "BMI": "31.3",
      "Life.expectancy": "59.2"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2013",
      "BMI": "3.8",
      "Life.expectancy": "58"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2012",
      "BMI": "3.3",
      "Life.expectancy": "56.6"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2011",
      "BMI": "29.9",
      "Life.expectancy": "54.9"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2010",
      "BMI": "29.4",
      "Life.expectancy": "52.4"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2009",
      "BMI": "29",
      "Life.expectancy": "50"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2008",
      "BMI": "28.6",
      "Life.expectancy": "48.2"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2007",
      "BMI": "28.2",
      "Life.expectancy": "46.6"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2006",
      "BMI": "27.9",
      "Life.expectancy": "45.4"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2005",
      "BMI": "27.5",
      "Life.expectancy": "44.6"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2004",
      "BMI": "27.1",
      "Life.expectancy": "44.3"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2003",
      "BMI": "26.7",
      "Life.expectancy": "44.5"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2002",
      "BMI": "26.3",
      "Life.expectancy": "44.8"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2001",
      "BMI": "25.9",
      "Life.expectancy": "45.3"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2000",
      "BMI": "25.5",
      "Life.expectancy": "46"
    }
  ]



// Rest of the code will go here...
// Process the data
data.forEach(function(d) {
    d.BMI = +d.BMI; // Convert population to number
    d['Life.expectancy'] = +d['Life.expectancy']; // Convert life expectancy to number
    d.Year = +d.Year; // Convert year to number
});

// Scale the range of the data
x.domain(d3.extent(data, function(d) { return d.BMI; }));
y.domain(d3.extent(data, function(d) { return d['Life.expectancy']; }));

// Nest the entries by country
var dataNest = d3.group(data, d => d.Country);

// Set the dropdown menu
var select = d3.select("body")
  .append("select")
    .attr("class","select")
    .on("change", function(d) {
        var selectedOption = d3.select(this).property("value")
        update(selectedOption)
    });

// Add the options to the dropdown
select.selectAll("option")
    .data(dataNest.keys())
    .enter()
      .append("option")
      .text(function (d) { return d; }) // Text in the menu
      .attr("value", function (d) { return d; }); // Corresponding value returned by the menu

// Function to create the initial plot
function initialPlot() {
    var country = dataNest.keys().next().value; // Get the first country in the dataset
    update(country); // Call update function to create the initial plot
}

// Function to update the plot based on the country selection
function update(country) {
    // Filter the data to include only the selected country
    var selectCountry = Array.from(dataNest.get(country));

    // Make the changes to the scatter plot
    svg.selectAll(".dot").remove(); // Remove old dots
    svg.selectAll(".line").remove(); // Remove old lines

    // Add the valueline path for the selected country
    svg.append("path")
        .datum(selectCountry)
        .attr("class", "line")
        .attr("d", valueline);

    // Add the scatterplot points for the selected country
    svg.selectAll("dot")
        .data(selectCountry)
      .enter().append("circle")
        .attr("class", "dot")
        .attr("r", 5)
        .attr("cx", function(d) { return x(d.BMI); })
        .attr("cy", function(d) { return y(d['Life.expectancy']); })
        .on("mouseover", function(event, d) {
            tooltip.transition()
                .duration(200)
                .style("opacity", .9);
            tooltip.html(d.Country + "<br/>" + d.Year + "<br/>Life expectancy: " 
                + d['Life.expectancy'] + "<br/>BMI: " + d.BMI)
                .style("left", (event.pageX) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function(d) {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });

// Assuming you've already defined your x scale as d3.scaleLinear()

// Set the domain of the x scale from 0 to 100
x.domain([0, 90]);

// Define tick values explicitly for intervals of 20 from 0 to 100
var tickValues = d3.range(0, 91, 30); // 101 is used to include the end value 100

// Add the X Axis with specified tick values
svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x)
        .tickValues(tickValues) // Use the array of tick values
        // Optional: format ticks if needed
    );


    // Add the Y Axis
    svg.append("g")
        .call(yAxis);
}

// Call initial plot function
initialPlot();

// Add graph title with enhanced style
svg.append("text")
  .attr("text-anchor", "middle")
  .attr("x", width / 2)
  .attr("y", -margin.top / 2 + 20) // Adjust this value to position the title
  .text("Country over 15 years")
  .style("font-family", "Arial, sans-serif") // Choose a font family
  .style("font-size", "24px") // Increase the font size
  .style("fill", "#4E79A7") // Use a hex color code for a specific shade
  .style("font-weight", "bold"); // Make the title bold

// Add Y axis label at the top of the axis
svg.append("text")
  .attr("text-anchor", "middle")
  .attr("transform", "rotate(0)")
  .attr("y", -margin.left + 200) // adjust this to move the label further from the axis if needed
  .attr("x", - 50) // this may need to be adjusted based on the length of your y-axis
  .text("Life Expectancy")
  .style("font-family", "Arial, sans-serif") // Choose a font family
  .style("font-size", "18px") // Set a specific font size
  .style("fill", "#6C757D") // Use a hex color code for a specific shade
  .style("font-weight", "bold"); // Make the label bold

// Add X axis label at the top of the axis
  svg.append("text")
  .attr("text-anchor", "end") // end will align the text's end to the given x position
  .attr("x", width - margin.right + 200) // place the label at the end of the x-axis
  .attr("y", height + margin.bottom - 5)
  .text("BMI")
  .style("font-family", "Arial, sans-serif") // Choose a font family
  .style("font-size", "18px") // Set a specific font size
  .style("fill", "#6C757D") // Use a hex color code for a specific shade
  .style("font-weight", "bold"); // Make the label bold
