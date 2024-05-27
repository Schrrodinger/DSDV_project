
// Set the dimensions and margins of the graph
const margin = { top: 200, right: 100, bottom: 100, left: 220 },
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
var data =
 [
    
 {
      "Country": "Afghanistan",
      "Year": "2015",
      "Alcohol": "0.01",
      "Life.expectancy": "65"
    },
    {
      "Country": "Afghanistan",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "59.9"
    },
    {
      "Country": "Afghanistan",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "59.9"
    },
    {
      "Country": "Afghanistan",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "59.5"
    },
    {
      "Country": "Afghanistan",
      "Year": "2011",
      "Alcohol": "0.01",
      "Life.expectancy": "59.2"
    },
    {
      "Country": "Afghanistan",
      "Year": "2010",
      "Alcohol": "0.01",
      "Life.expectancy": "58.8"
    },
    {
      "Country": "Afghanistan",
      "Year": "2009",
      "Alcohol": "0.01",
      "Life.expectancy": "58.6"
    },
    {
      "Country": "Afghanistan",
      "Year": "2008",
      "Alcohol": "0.03",
      "Life.expectancy": "58.1"
    },
    {
      "Country": "Afghanistan",
      "Year": "2007",
      "Alcohol": "0.02",
      "Life.expectancy": "57.5"
    },
    {
      "Country": "Afghanistan",
      "Year": "2006",
      "Alcohol": "0.03",
      "Life.expectancy": "57.3"
    },
    {
      "Country": "Afghanistan",
      "Year": "2005",
      "Alcohol": "0.02",
      "Life.expectancy": "57.3"
    },
    {
      "Country": "Afghanistan",
      "Year": "2004",
      "Alcohol": "0.02",
      "Life.expectancy": "57"
    },
    {
      "Country": "Afghanistan",
      "Year": "2003",
      "Alcohol": "0.01",
      "Life.expectancy": "56.7"
    },
    {
      "Country": "Afghanistan",
      "Year": "2002",
      "Alcohol": "0.01",
      "Life.expectancy": "56.2"
    },
    {
      "Country": "Afghanistan",
      "Year": "2001",
      "Alcohol": "0.01",
      "Life.expectancy": "55.3"
    },
    {
      "Country": "Afghanistan",
      "Year": "2000",
      "Alcohol": "0.01",
      "Life.expectancy": "54.8"
    },
    {
      "Country": "Albania",
      "Year": "2015",
      "Alcohol": "4.6",
      "Life.expectancy": "77.8"
    },
    {
      "Country": "Albania",
      "Year": "2014",
      "Alcohol": "4.51",
      "Life.expectancy": "77.5"
    },
    {
      "Country": "Albania",
      "Year": "2013",
      "Alcohol": "4.76",
      "Life.expectancy": "77.2"
    },
    {
      "Country": "Albania",
      "Year": "2012",
      "Alcohol": "5.14",
      "Life.expectancy": "76.9"
    },
    {
      "Country": "Albania",
      "Year": "2011",
      "Alcohol": "5.37",
      "Life.expectancy": "76.6"
    },
    {
      "Country": "Albania",
      "Year": "2010",
      "Alcohol": "5.28",
      "Life.expectancy": "76.2"
    },
    {
      "Country": "Albania",
      "Year": "2009",
      "Alcohol": "5.79",
      "Life.expectancy": "76.1"
    },
    {
      "Country": "Albania",
      "Year": "2008",
      "Alcohol": "5.61",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "Albania",
      "Year": "2007",
      "Alcohol": "5.58",
      "Life.expectancy": "75.9"
    },
    {
      "Country": "Albania",
      "Year": "2006",
      "Alcohol": "5.31",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Albania",
      "Year": "2005",
      "Alcohol": "5.16",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Albania",
      "Year": "2004",
      "Alcohol": "4.54",
      "Life.expectancy": "73"
    },
    {
      "Country": "Albania",
      "Year": "2003",
      "Alcohol": "4.29",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Albania",
      "Year": "2002",
      "Alcohol": "3.73",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Albania",
      "Year": "2001",
      "Alcohol": "4.25",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Albania",
      "Year": "2000",
      "Alcohol": "3.66",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Algeria",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "Algeria",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Algeria",
      "Year": "2013",
      "Alcohol": "0.53",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "Algeria",
      "Year": "2012",
      "Alcohol": "0.66",
      "Life.expectancy": "75.1"
    },
    {
      "Country": "Algeria",
      "Year": "2011",
      "Alcohol": "0.56",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Algeria",
      "Year": "2010",
      "Alcohol": "0.45",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Algeria",
      "Year": "2009",
      "Alcohol": "0.5",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Algeria",
      "Year": "2008",
      "Alcohol": "0.46",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Algeria",
      "Year": "2007",
      "Alcohol": "0.44",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Algeria",
      "Year": "2006",
      "Alcohol": "0.36",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Algeria",
      "Year": "2005",
      "Alcohol": "0.5",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Algeria",
      "Year": "2004",
      "Alcohol": "0.45",
      "Life.expectancy": "72.3"
    },
    {
      "Country": "Algeria",
      "Year": "2003",
      "Alcohol": "0.34",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "Algeria",
      "Year": "2002",
      "Alcohol": "0.36",
      "Life.expectancy": "71.6"
    },
    {
      "Country": "Algeria",
      "Year": "2001",
      "Alcohol": "0.23",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "Algeria",
      "Year": "2000",
      "Alcohol": "0.25",
      "Life.expectancy": "71.3"
    },
    {
      "Country": "Angola",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "52.4"
    },
    {
      "Country": "Angola",
      "Year": "2014",
      "Alcohol": "8.33",
      "Life.expectancy": "51.7"
    },
    {
      "Country": "Angola",
      "Year": "2013",
      "Alcohol": "8.1",
      "Life.expectancy": "51.1"
    },
    {
      "Country": "Angola",
      "Year": "2012",
      "Alcohol": "8.24",
      "Life.expectancy": "56"
    },
    {
      "Country": "Angola",
      "Year": "2011",
      "Alcohol": "8.06",
      "Life.expectancy": "51"
    },
    {
      "Country": "Angola",
      "Year": "2010",
      "Alcohol": "7.8",
      "Life.expectancy": "49.6"
    },
    {
      "Country": "Angola",
      "Year": "2009",
      "Alcohol": "7.01",
      "Life.expectancy": "49.1"
    },
    {
      "Country": "Angola",
      "Year": "2008",
      "Alcohol": "7.07",
      "Life.expectancy": "48.7"
    },
    {
      "Country": "Angola",
      "Year": "2007",
      "Alcohol": "6.35",
      "Life.expectancy": "48.2"
    },
    {
      "Country": "Angola",
      "Year": "2006",
      "Alcohol": "5.84",
      "Life.expectancy": "47.7"
    },
    {
      "Country": "Angola",
      "Year": "2005",
      "Alcohol": "5.04",
      "Life.expectancy": "47.4"
    },
    {
      "Country": "Angola",
      "Year": "2004",
      "Alcohol": "3.53",
      "Life.expectancy": "47.1"
    },
    {
      "Country": "Angola",
      "Year": "2003",
      "Alcohol": "3.49",
      "Life.expectancy": "46.8"
    },
    {
      "Country": "Angola",
      "Year": "2002",
      "Alcohol": "2.82",
      "Life.expectancy": "46.5"
    },
    {
      "Country": "Angola",
      "Year": "2001",
      "Alcohol": "2.58",
      "Life.expectancy": "45.7"
    },
    {
      "Country": "Angola",
      "Year": "2000",
      "Alcohol": "1.85",
      "Life.expectancy": "45.3"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "76.4"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2014",
      "Alcohol": "8.56",
      "Life.expectancy": "76.2"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2013",
      "Alcohol": "8.58",
      "Life.expectancy": "76.1"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2012",
      "Alcohol": "8.18",
      "Life.expectancy": "75.9"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2011",
      "Alcohol": "7.84",
      "Life.expectancy": "75.7"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2010",
      "Alcohol": "7.84",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2009",
      "Alcohol": "7.82",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2008",
      "Alcohol": "8.27",
      "Life.expectancy": "75.2"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2007",
      "Alcohol": "8.64",
      "Life.expectancy": "75"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2006",
      "Alcohol": "8.93",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2005",
      "Alcohol": "8.15",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2004",
      "Alcohol": "7.28",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2003",
      "Alcohol": "7.16",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2002",
      "Alcohol": "7.21",
      "Life.expectancy": "74"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2001",
      "Alcohol": "7.51",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Antigua and Barbuda",
      "Year": "2000",
      "Alcohol": "7.27",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Argentina",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "76.3"
    },
    {
      "Country": "Argentina",
      "Year": "2014",
      "Alcohol": "7.93",
      "Life.expectancy": "76.2"
    },
    {
      "Country": "Argentina",
      "Year": "2013",
      "Alcohol": "8.28",
      "Life.expectancy": "76"
    },
    {
      "Country": "Argentina",
      "Year": "2012",
      "Alcohol": "8.35",
      "Life.expectancy": "75.9"
    },
    {
      "Country": "Argentina",
      "Year": "2011",
      "Alcohol": "8.11",
      "Life.expectancy": "75.7"
    },
    {
      "Country": "Argentina",
      "Year": "2010",
      "Alcohol": "8.15",
      "Life.expectancy": "75.5"
    },
    {
      "Country": "Argentina",
      "Year": "2009",
      "Alcohol": "8.33",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "Argentina",
      "Year": "2008",
      "Alcohol": "8.41",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Argentina",
      "Year": "2007",
      "Alcohol": "8.16",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Argentina",
      "Year": "2006",
      "Alcohol": "7.75",
      "Life.expectancy": "75.2"
    },
    {
      "Country": "Argentina",
      "Year": "2005",
      "Alcohol": "7.53",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Argentina",
      "Year": "2004",
      "Alcohol": "7.63",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Argentina",
      "Year": "2003",
      "Alcohol": "7.62",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Argentina",
      "Year": "2002",
      "Alcohol": "7.81",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Argentina",
      "Year": "2001",
      "Alcohol": "7.76",
      "Life.expectancy": "74"
    },
    {
      "Country": "Argentina",
      "Year": "2000",
      "Alcohol": "7.68",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Armenia",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Armenia",
      "Year": "2014",
      "Alcohol": "3.91",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Armenia",
      "Year": "2013",
      "Alcohol": "3.79",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Armenia",
      "Year": "2012",
      "Alcohol": "3.89",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Armenia",
      "Year": "2011",
      "Alcohol": "4.09",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Armenia",
      "Year": "2010",
      "Alcohol": "4.23",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Armenia",
      "Year": "2009",
      "Alcohol": "3.96",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Armenia",
      "Year": "2008",
      "Alcohol": "3.96",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Armenia",
      "Year": "2007",
      "Alcohol": "3.99",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Armenia",
      "Year": "2006",
      "Alcohol": "4.01",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Armenia",
      "Year": "2005",
      "Alcohol": "4.25",
      "Life.expectancy": "73"
    },
    {
      "Country": "Armenia",
      "Year": "2004",
      "Alcohol": "3.81",
      "Life.expectancy": "73"
    },
    {
      "Country": "Armenia",
      "Year": "2003",
      "Alcohol": "3.03",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Armenia",
      "Year": "2002",
      "Alcohol": "2.86",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Armenia",
      "Year": "2001",
      "Alcohol": "2.86",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Armenia",
      "Year": "2000",
      "Alcohol": "2.9",
      "Life.expectancy": "72"
    },
    {
      "Country": "Australia",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "82.8"
    },
    {
      "Country": "Australia",
      "Year": "2014",
      "Alcohol": "9.71",
      "Life.expectancy": "82.7"
    },
    {
      "Country": "Australia",
      "Year": "2013",
      "Alcohol": "9.87",
      "Life.expectancy": "82.5"
    },
    {
      "Country": "Australia",
      "Year": "2012",
      "Alcohol": "10.03",
      "Life.expectancy": "82.3"
    },
    {
      "Country": "Australia",
      "Year": "2011",
      "Alcohol": "10.3",
      "Life.expectancy": "82"
    },
    {
      "Country": "Australia",
      "Year": "2010",
      "Alcohol": "10.52",
      "Life.expectancy": "81.9"
    },
    {
      "Country": "Australia",
      "Year": "2009",
      "Alcohol": "10.62",
      "Life.expectancy": "81.7"
    },
    {
      "Country": "Australia",
      "Year": "2008",
      "Alcohol": "10.76",
      "Life.expectancy": "81.3"
    },
    {
      "Country": "Australia",
      "Year": "2007",
      "Alcohol": "10.56",
      "Life.expectancy": "81.3"
    },
    {
      "Country": "Australia",
      "Year": "2006",
      "Alcohol": "10.31",
      "Life.expectancy": "81.2"
    },
    {
      "Country": "Australia",
      "Year": "2005",
      "Alcohol": "10.3",
      "Life.expectancy": "81"
    },
    {
      "Country": "Australia",
      "Year": "2004",
      "Alcohol": "9.84",
      "Life.expectancy": "86"
    },
    {
      "Country": "Australia",
      "Year": "2003",
      "Alcohol": "9.97",
      "Life.expectancy": "83"
    },
    {
      "Country": "Australia",
      "Year": "2002",
      "Alcohol": "9.84",
      "Life.expectancy": "79.9"
    },
    {
      "Country": "Australia",
      "Year": "2001",
      "Alcohol": "9.53",
      "Life.expectancy": "79.9"
    },
    {
      "Country": "Australia",
      "Year": "2000",
      "Alcohol": "10.17",
      "Life.expectancy": "79.5"
    },
    {
      "Country": "Austria",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "81.5"
    },
    {
      "Country": "Austria",
      "Year": "2014",
      "Alcohol": "12.32",
      "Life.expectancy": "81.4"
    },
    {
      "Country": "Austria",
      "Year": "2013",
      "Alcohol": "11.82",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "Austria",
      "Year": "2012",
      "Alcohol": "12.26",
      "Life.expectancy": "88"
    },
    {
      "Country": "Austria",
      "Year": "2011",
      "Alcohol": "12.04",
      "Life.expectancy": "88"
    },
    {
      "Country": "Austria",
      "Year": "2010",
      "Alcohol": "12.1",
      "Life.expectancy": "84"
    },
    {
      "Country": "Austria",
      "Year": "2009",
      "Alcohol": "11.3",
      "Life.expectancy": "82"
    },
    {
      "Country": "Austria",
      "Year": "2008",
      "Alcohol": "12",
      "Life.expectancy": "84"
    },
    {
      "Country": "Austria",
      "Year": "2007",
      "Alcohol": "12.5",
      "Life.expectancy": "81"
    },
    {
      "Country": "Austria",
      "Year": "2006",
      "Alcohol": "12.4",
      "Life.expectancy": "79.8"
    },
    {
      "Country": "Austria",
      "Year": "2005",
      "Alcohol": "12.4",
      "Life.expectancy": "79.4"
    },
    {
      "Country": "Austria",
      "Year": "2004",
      "Alcohol": "12.1",
      "Life.expectancy": "79.3"
    },
    {
      "Country": "Austria",
      "Year": "2003",
      "Alcohol": "12.2",
      "Life.expectancy": "78.8"
    },
    {
      "Country": "Austria",
      "Year": "2002",
      "Alcohol": "12.5",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "Austria",
      "Year": "2001",
      "Alcohol": "12.4",
      "Life.expectancy": "78.6"
    },
    {
      "Country": "Austria",
      "Year": "2000",
      "Alcohol": "13.2",
      "Life.expectancy": "78.1"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2013",
      "Alcohol": "2.14",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "71.9"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2011",
      "Alcohol": "1.98",
      "Life.expectancy": "71.6"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2010",
      "Alcohol": "1.98",
      "Life.expectancy": "71.1"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2009",
      "Alcohol": "2.1",
      "Life.expectancy": "78"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2008",
      "Alcohol": "1.18",
      "Life.expectancy": "73"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2007",
      "Alcohol": "1.02",
      "Life.expectancy": "73"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2006",
      "Alcohol": "0.85",
      "Life.expectancy": "69.2"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2005",
      "Alcohol": "0.73",
      "Life.expectancy": "68.4"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2004",
      "Alcohol": "0.62",
      "Life.expectancy": "68.4"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2003",
      "Alcohol": "0.55",
      "Life.expectancy": "67.8"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2002",
      "Alcohol": "0.55",
      "Life.expectancy": "67.8"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2001",
      "Alcohol": "0.51",
      "Life.expectancy": "67.5"
    },
    {
      "Country": "Azerbaijan",
      "Year": "2000",
      "Alcohol": "0.65",
      "Life.expectancy": "66.6"
    },
    {
      "Country": "Bahamas",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "76.1"
    },
    {
      "Country": "Bahamas",
      "Year": "2014",
      "Alcohol": "9.45",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Bahamas",
      "Year": "2013",
      "Alcohol": "9.42",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Bahamas",
      "Year": "2012",
      "Alcohol": "9.5",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Bahamas",
      "Year": "2011",
      "Alcohol": "9.34",
      "Life.expectancy": "75"
    },
    {
      "Country": "Bahamas",
      "Year": "2010",
      "Alcohol": "9.19",
      "Life.expectancy": "75"
    },
    {
      "Country": "Bahamas",
      "Year": "2009",
      "Alcohol": "9.29",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Bahamas",
      "Year": "2008",
      "Alcohol": "10.15",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Bahamas",
      "Year": "2007",
      "Alcohol": "10.75",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Bahamas",
      "Year": "2006",
      "Alcohol": "11.07",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Bahamas",
      "Year": "2005",
      "Alcohol": "10.49",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Bahamas",
      "Year": "2004",
      "Alcohol": "10.1",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Bahamas",
      "Year": "2003",
      "Alcohol": "10.68",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Bahamas",
      "Year": "2002",
      "Alcohol": "10.85",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Bahamas",
      "Year": "2001",
      "Alcohol": "11.64",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Bahamas",
      "Year": "2000",
      "Alcohol": "12.15",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Bahrain",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "76.9"
    },
    {
      "Country": "Bahrain",
      "Year": "2014",
      "Alcohol": "1.57",
      "Life.expectancy": "76.8"
    },
    {
      "Country": "Bahrain",
      "Year": "2013",
      "Alcohol": "1.65",
      "Life.expectancy": "76.7"
    },
    {
      "Country": "Bahrain",
      "Year": "2012",
      "Alcohol": "1.7",
      "Life.expectancy": "76.5"
    },
    {
      "Country": "Bahrain",
      "Year": "2011",
      "Alcohol": "1.66",
      "Life.expectancy": "76.1"
    },
    {
      "Country": "Bahrain",
      "Year": "2010",
      "Alcohol": "1.93",
      "Life.expectancy": "76.1"
    },
    {
      "Country": "Bahrain",
      "Year": "2009",
      "Alcohol": "1.95",
      "Life.expectancy": "76"
    },
    {
      "Country": "Bahrain",
      "Year": "2008",
      "Alcohol": "2",
      "Life.expectancy": "75.8"
    },
    {
      "Country": "Bahrain",
      "Year": "2007",
      "Alcohol": "2",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "Bahrain",
      "Year": "2006",
      "Alcohol": "2.1",
      "Life.expectancy": "75.5"
    },
    {
      "Country": "Bahrain",
      "Year": "2005",
      "Alcohol": "2.05",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "Bahrain",
      "Year": "2004",
      "Alcohol": "2.16",
      "Life.expectancy": "75.2"
    },
    {
      "Country": "Bahrain",
      "Year": "2003",
      "Alcohol": "2.16",
      "Life.expectancy": "75"
    },
    {
      "Country": "Bahrain",
      "Year": "2002",
      "Alcohol": "1.99",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Bahrain",
      "Year": "2001",
      "Alcohol": "1.95",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Bahrain",
      "Year": "2000",
      "Alcohol": "2.15",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Bangladesh",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "71.8"
    },
    {
      "Country": "Bangladesh",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "Bangladesh",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "71"
    },
    {
      "Country": "Bangladesh",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "77"
    },
    {
      "Country": "Bangladesh",
      "Year": "2011",
      "Alcohol": "0.01",
      "Life.expectancy": "73"
    },
    {
      "Country": "Bangladesh",
      "Year": "2010",
      "Alcohol": "0.01",
      "Life.expectancy": "69.9"
    },
    {
      "Country": "Bangladesh",
      "Year": "2009",
      "Alcohol": "0.01",
      "Life.expectancy": "69.5"
    },
    {
      "Country": "Bangladesh",
      "Year": "2008",
      "Alcohol": "0.01",
      "Life.expectancy": "69.1"
    },
    {
      "Country": "Bangladesh",
      "Year": "2007",
      "Alcohol": "0.01",
      "Life.expectancy": "68.6"
    },
    {
      "Country": "Bangladesh",
      "Year": "2006",
      "Alcohol": "0.01",
      "Life.expectancy": "68.2"
    },
    {
      "Country": "Bangladesh",
      "Year": "2005",
      "Alcohol": "0.01",
      "Life.expectancy": "67.8"
    },
    {
      "Country": "Bangladesh",
      "Year": "2004",
      "Alcohol": "0.01",
      "Life.expectancy": "67.3"
    },
    {
      "Country": "Bangladesh",
      "Year": "2003",
      "Alcohol": "0.01",
      "Life.expectancy": "66.8"
    },
    {
      "Country": "Bangladesh",
      "Year": "2002",
      "Alcohol": "0.01",
      "Life.expectancy": "66.3"
    },
    {
      "Country": "Bangladesh",
      "Year": "2001",
      "Alcohol": "0.01",
      "Life.expectancy": "65.8"
    },
    {
      "Country": "Bangladesh",
      "Year": "2000",
      "Alcohol": "0.01",
      "Life.expectancy": "65.3"
    },
    {
      "Country": "Barbados",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "75.5"
    },
    {
      "Country": "Barbados",
      "Year": "2014",
      "Alcohol": "8.82",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Barbados",
      "Year": "2013",
      "Alcohol": "8.74",
      "Life.expectancy": "75.2"
    },
    {
      "Country": "Barbados",
      "Year": "2012",
      "Alcohol": "8.61",
      "Life.expectancy": "75.1"
    },
    {
      "Country": "Barbados",
      "Year": "2011",
      "Alcohol": "8.51",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Barbados",
      "Year": "2010",
      "Alcohol": "8.41",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Barbados",
      "Year": "2009",
      "Alcohol": "8.46",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Barbados",
      "Year": "2008",
      "Alcohol": "8.95",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Barbados",
      "Year": "2007",
      "Alcohol": "8.47",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Barbados",
      "Year": "2006",
      "Alcohol": "8.39",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Barbados",
      "Year": "2005",
      "Alcohol": "8.01",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Barbados",
      "Year": "2004",
      "Alcohol": "7.68",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Barbados",
      "Year": "2003",
      "Alcohol": "7.65",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Barbados",
      "Year": "2002",
      "Alcohol": "7.59",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Barbados",
      "Year": "2001",
      "Alcohol": "7.38",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Barbados",
      "Year": "2000",
      "Alcohol": "7.43",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Belarus",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "72.3"
    },
    {
      "Country": "Belarus",
      "Year": "2014",
      "Alcohol": "13.94",
      "Life.expectancy": "72"
    },
    {
      "Country": "Belarus",
      "Year": "2013",
      "Alcohol": "14.66",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "Belarus",
      "Year": "2012",
      "Alcohol": "16.35",
      "Life.expectancy": "71.9"
    },
    {
      "Country": "Belarus",
      "Year": "2011",
      "Alcohol": "17.31",
      "Life.expectancy": "72"
    },
    {
      "Country": "Belarus",
      "Year": "2010",
      "Alcohol": "14.44",
      "Life.expectancy": "73"
    },
    {
      "Country": "Belarus",
      "Year": "2009",
      "Alcohol": "14.09",
      "Life.expectancy": "70"
    },
    {
      "Country": "Belarus",
      "Year": "2008",
      "Alcohol": "14.67",
      "Life.expectancy": "70"
    },
    {
      "Country": "Belarus",
      "Year": "2007",
      "Alcohol": "14.22",
      "Life.expectancy": "69.8"
    },
    {
      "Country": "Belarus",
      "Year": "2006",
      "Alcohol": "12.6",
      "Life.expectancy": "68.9"
    },
    {
      "Country": "Belarus",
      "Year": "2005",
      "Alcohol": "11.01",
      "Life.expectancy": "68.1"
    },
    {
      "Country": "Belarus",
      "Year": "2004",
      "Alcohol": "12.05",
      "Life.expectancy": "68.2"
    },
    {
      "Country": "Belarus",
      "Year": "2003",
      "Alcohol": "11.17",
      "Life.expectancy": "67.7"
    },
    {
      "Country": "Belarus",
      "Year": "2002",
      "Alcohol": "12.23",
      "Life.expectancy": "67.2"
    },
    {
      "Country": "Belarus",
      "Year": "2001",
      "Alcohol": "10.74",
      "Life.expectancy": "67.7"
    },
    {
      "Country": "Belarus",
      "Year": "2000",
      "Alcohol": "12.98",
      "Life.expectancy": "68"
    },
    {
      "Country": "Belgium",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "Belgium",
      "Year": "2014",
      "Alcohol": "12.6",
      "Life.expectancy": "89"
    },
    {
      "Country": "Belgium",
      "Year": "2013",
      "Alcohol": "11.77",
      "Life.expectancy": "87"
    },
    {
      "Country": "Belgium",
      "Year": "2012",
      "Alcohol": "10.08",
      "Life.expectancy": "83"
    },
    {
      "Country": "Belgium",
      "Year": "2011",
      "Alcohol": "10.11",
      "Life.expectancy": "83"
    },
    {
      "Country": "Belgium",
      "Year": "2010",
      "Alcohol": "10.22",
      "Life.expectancy": "80"
    },
    {
      "Country": "Belgium",
      "Year": "2009",
      "Alcohol": "10.05",
      "Life.expectancy": "79.8"
    },
    {
      "Country": "Belgium",
      "Year": "2008",
      "Alcohol": "10.47",
      "Life.expectancy": "79.5"
    },
    {
      "Country": "Belgium",
      "Year": "2007",
      "Alcohol": "10.25",
      "Life.expectancy": "79.5"
    },
    {
      "Country": "Belgium",
      "Year": "2006",
      "Alcohol": "10.98",
      "Life.expectancy": "79.4"
    },
    {
      "Country": "Belgium",
      "Year": "2005",
      "Alcohol": "12.27",
      "Life.expectancy": "78.9"
    },
    {
      "Country": "Belgium",
      "Year": "2004",
      "Alcohol": "12.05",
      "Life.expectancy": "78.8"
    },
    {
      "Country": "Belgium",
      "Year": "2003",
      "Alcohol": "11.28",
      "Life.expectancy": "78.3"
    },
    {
      "Country": "Belgium",
      "Year": "2002",
      "Alcohol": "11.29",
      "Life.expectancy": "78"
    },
    {
      "Country": "Belgium",
      "Year": "2001",
      "Alcohol": "11.01",
      "Life.expectancy": "78"
    },
    {
      "Country": "Belgium",
      "Year": "2000",
      "Alcohol": "11.21",
      "Life.expectancy": "77.6"
    },
    {
      "Country": "Belize",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "71"
    },
    {
      "Country": "Belize",
      "Year": "2014",
      "Alcohol": "6.58",
      "Life.expectancy": "70"
    },
    {
      "Country": "Belize",
      "Year": "2013",
      "Alcohol": "6.56",
      "Life.expectancy": "69.8"
    },
    {
      "Country": "Belize",
      "Year": "2012",
      "Alcohol": "6.66",
      "Life.expectancy": "69.4"
    },
    {
      "Country": "Belize",
      "Year": "2011",
      "Alcohol": "6.64",
      "Life.expectancy": "69.4"
    },
    {
      "Country": "Belize",
      "Year": "2010",
      "Alcohol": "6.76",
      "Life.expectancy": "69.5"
    },
    {
      "Country": "Belize",
      "Year": "2009",
      "Alcohol": "6.85",
      "Life.expectancy": "69.5"
    },
    {
      "Country": "Belize",
      "Year": "2008",
      "Alcohol": "7.22",
      "Life.expectancy": "69.6"
    },
    {
      "Country": "Belize",
      "Year": "2007",
      "Alcohol": "7.24",
      "Life.expectancy": "69.6"
    },
    {
      "Country": "Belize",
      "Year": "2006",
      "Alcohol": "6.48",
      "Life.expectancy": "69.4"
    },
    {
      "Country": "Belize",
      "Year": "2005",
      "Alcohol": "6.25",
      "Life.expectancy": "69"
    },
    {
      "Country": "Belize",
      "Year": "2004",
      "Alcohol": "6.2",
      "Life.expectancy": "68.7"
    },
    {
      "Country": "Belize",
      "Year": "2003",
      "Alcohol": "5.67",
      "Life.expectancy": "68.4"
    },
    {
      "Country": "Belize",
      "Year": "2002",
      "Alcohol": "4.99",
      "Life.expectancy": "68.5"
    },
    {
      "Country": "Belize",
      "Year": "2001",
      "Alcohol": "4.9",
      "Life.expectancy": "68.2"
    },
    {
      "Country": "Belize",
      "Year": "2000",
      "Alcohol": "4.79",
      "Life.expectancy": "68.3"
    },
    {
      "Country": "Benin",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "60"
    },
    {
      "Country": "Benin",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "59.7"
    },
    {
      "Country": "Benin",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "59.5"
    },
    {
      "Country": "Benin",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "59.3"
    },
    {
      "Country": "Benin",
      "Year": "2011",
      "Alcohol": "1.4",
      "Life.expectancy": "59.1"
    },
    {
      "Country": "Benin",
      "Year": "2010",
      "Alcohol": "1.33",
      "Life.expectancy": "58.7"
    },
    {
      "Country": "Benin",
      "Year": "2009",
      "Alcohol": "1.16",
      "Life.expectancy": "58.4"
    },
    {
      "Country": "Benin",
      "Year": "2008",
      "Alcohol": "1.28",
      "Life.expectancy": "57.6"
    },
    {
      "Country": "Benin",
      "Year": "2007",
      "Alcohol": "1.12",
      "Life.expectancy": "57.1"
    },
    {
      "Country": "Benin",
      "Year": "2006",
      "Alcohol": "1.19",
      "Life.expectancy": "56.8"
    },
    {
      "Country": "Benin",
      "Year": "2005",
      "Alcohol": "1.13",
      "Life.expectancy": "56.5"
    },
    {
      "Country": "Benin",
      "Year": "2004",
      "Alcohol": "1.15",
      "Life.expectancy": "56.1"
    },
    {
      "Country": "Benin",
      "Year": "2003",
      "Alcohol": "1.35",
      "Life.expectancy": "55.8"
    },
    {
      "Country": "Benin",
      "Year": "2002",
      "Alcohol": "1.23",
      "Life.expectancy": "55.6"
    },
    {
      "Country": "Benin",
      "Year": "2001",
      "Alcohol": "1.29",
      "Life.expectancy": "55.5"
    },
    {
      "Country": "Benin",
      "Year": "2000",
      "Alcohol": "1.34",
      "Life.expectancy": "55.4"
    },
    {
      "Country": "Bhutan",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "69.8"
    },
    {
      "Country": "Bhutan",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "69.4"
    },
    {
      "Country": "Bhutan",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "69.1"
    },
    {
      "Country": "Bhutan",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "68.7"
    },
    {
      "Country": "Bhutan",
      "Year": "2011",
      "Alcohol": "0.23",
      "Life.expectancy": "68.3"
    },
    {
      "Country": "Bhutan",
      "Year": "2010",
      "Alcohol": "0.28",
      "Life.expectancy": "67.9"
    },
    {
      "Country": "Bhutan",
      "Year": "2009",
      "Alcohol": "0.17",
      "Life.expectancy": "67.4"
    },
    {
      "Country": "Bhutan",
      "Year": "2008",
      "Alcohol": "0.21",
      "Life.expectancy": "67"
    },
    {
      "Country": "Bhutan",
      "Year": "2007",
      "Alcohol": "0.16",
      "Life.expectancy": "66.5"
    },
    {
      "Country": "Bhutan",
      "Year": "2006",
      "Alcohol": "0.29",
      "Life.expectancy": "65.8"
    },
    {
      "Country": "Bhutan",
      "Year": "2005",
      "Alcohol": "0.73",
      "Life.expectancy": "65"
    },
    {
      "Country": "Bhutan",
      "Year": "2004",
      "Alcohol": "0.96",
      "Life.expectancy": "64.2"
    },
    {
      "Country": "Bhutan",
      "Year": "2003",
      "Alcohol": "0.52",
      "Life.expectancy": "63.3"
    },
    {
      "Country": "Bhutan",
      "Year": "2002",
      "Alcohol": "0.29",
      "Life.expectancy": "62.5"
    },
    {
      "Country": "Bhutan",
      "Year": "2001",
      "Alcohol": "0.14",
      "Life.expectancy": "61.7"
    },
    {
      "Country": "Bhutan",
      "Year": "2000",
      "Alcohol": "0.17",
      "Life.expectancy": "62"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "77"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2014",
      "Alcohol": "3.62",
      "Life.expectancy": "74"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2013",
      "Alcohol": "3.78",
      "Life.expectancy": "71"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2012",
      "Alcohol": "3.89",
      "Life.expectancy": "69.8"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2011",
      "Alcohol": "3.93",
      "Life.expectancy": "69.3"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2010",
      "Alcohol": "3.95",
      "Life.expectancy": "68.7"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2009",
      "Alcohol": "3.87",
      "Life.expectancy": "68"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2008",
      "Alcohol": "3.77",
      "Life.expectancy": "67.4"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2007",
      "Alcohol": "3.47",
      "Life.expectancy": "66.8"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2006",
      "Alcohol": "3.23",
      "Life.expectancy": "66.2"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2005",
      "Alcohol": "2.86",
      "Life.expectancy": "65.7"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2004",
      "Alcohol": "2.66",
      "Life.expectancy": "65.1"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2003",
      "Alcohol": "2.37",
      "Life.expectancy": "64.5"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2002",
      "Alcohol": "2.26",
      "Life.expectancy": "63.9"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2001",
      "Alcohol": "2.2",
      "Life.expectancy": "63.3"
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "Year": "2000",
      "Alcohol": "2.32",
      "Life.expectancy": "62.6"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "77.4"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2014",
      "Alcohol": "4.03",
      "Life.expectancy": "77.2"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2013",
      "Alcohol": "4.12",
      "Life.expectancy": "77"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2012",
      "Alcohol": "4.61",
      "Life.expectancy": "76.8"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2011",
      "Alcohol": "4.64",
      "Life.expectancy": "76.9"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2010",
      "Alcohol": "4.54",
      "Life.expectancy": "76.4"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2009",
      "Alcohol": "4.75",
      "Life.expectancy": "76.1"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2008",
      "Alcohol": "5.13",
      "Life.expectancy": "76"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2007",
      "Alcohol": "5.16",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2006",
      "Alcohol": "4.82",
      "Life.expectancy": "75.7"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2005",
      "Alcohol": "4.56",
      "Life.expectancy": "75"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2004",
      "Alcohol": "4.25",
      "Life.expectancy": "75.5"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2003",
      "Alcohol": "4.14",
      "Life.expectancy": "75.2"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2002",
      "Alcohol": "3.84",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2001",
      "Alcohol": "3.85",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Year": "2000",
      "Alcohol": "3.64",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Botswana",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "65.7"
    },
    {
      "Country": "Botswana",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "65.1"
    },
    {
      "Country": "Botswana",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "64.2"
    },
    {
      "Country": "Botswana",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "63.4"
    },
    {
      "Country": "Botswana",
      "Year": "2011",
      "Alcohol": "5.76",
      "Life.expectancy": "62.2"
    },
    {
      "Country": "Botswana",
      "Year": "2010",
      "Alcohol": "5.99",
      "Life.expectancy": "61.1"
    },
    {
      "Country": "Botswana",
      "Year": "2009",
      "Alcohol": "5.01",
      "Life.expectancy": "59.2"
    },
    {
      "Country": "Botswana",
      "Year": "2008",
      "Alcohol": "6.56",
      "Life.expectancy": "57.5"
    },
    {
      "Country": "Botswana",
      "Year": "2007",
      "Alcohol": "6.21",
      "Life.expectancy": "56.9"
    },
    {
      "Country": "Botswana",
      "Year": "2006",
      "Alcohol": "6.45",
      "Life.expectancy": "54.8"
    },
    {
      "Country": "Botswana",
      "Year": "2005",
      "Alcohol": "6.37",
      "Life.expectancy": "51.7"
    },
    {
      "Country": "Botswana",
      "Year": "2004",
      "Alcohol": "4.9",
      "Life.expectancy": "48.1"
    },
    {
      "Country": "Botswana",
      "Year": "2003",
      "Alcohol": "5.51",
      "Life.expectancy": "46.4"
    },
    {
      "Country": "Botswana",
      "Year": "2002",
      "Alcohol": "6.41",
      "Life.expectancy": "46"
    },
    {
      "Country": "Botswana",
      "Year": "2001",
      "Alcohol": "5.48",
      "Life.expectancy": "46.7"
    },
    {
      "Country": "Botswana",
      "Year": "2000",
      "Alcohol": "5.37",
      "Life.expectancy": "47.8"
    },
    {
      "Country": "Brazil",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "75"
    },
    {
      "Country": "Brazil",
      "Year": "2014",
      "Alcohol": "7.32",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Brazil",
      "Year": "2013",
      "Alcohol": "7.24",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Brazil",
      "Year": "2012",
      "Alcohol": "7.55",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Brazil",
      "Year": "2011",
      "Alcohol": "7.58",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Brazil",
      "Year": "2010",
      "Alcohol": "7.52",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Brazil",
      "Year": "2009",
      "Alcohol": "7.33",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Brazil",
      "Year": "2008",
      "Alcohol": "7.21",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Brazil",
      "Year": "2007",
      "Alcohol": "7.19",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Brazil",
      "Year": "2006",
      "Alcohol": "7.1",
      "Life.expectancy": "73"
    },
    {
      "Country": "Brazil",
      "Year": "2005",
      "Alcohol": "6.97",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Brazil",
      "Year": "2004",
      "Alcohol": "6.85",
      "Life.expectancy": "72"
    },
    {
      "Country": "Brazil",
      "Year": "2003",
      "Alcohol": "6.95",
      "Life.expectancy": "71.8"
    },
    {
      "Country": "Brazil",
      "Year": "2002",
      "Alcohol": "7",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "Brazil",
      "Year": "2001",
      "Alcohol": "7.13",
      "Life.expectancy": "71"
    },
    {
      "Country": "Brazil",
      "Year": "2000",
      "Alcohol": "7.26",
      "Life.expectancy": "75"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "77.7"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "77.6"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "77.1"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "78.3"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2011",
      "Alcohol": "0.97",
      "Life.expectancy": "77.4"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2010",
      "Alcohol": "0.88",
      "Life.expectancy": "76.9"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2009",
      "Alcohol": "0.25",
      "Life.expectancy": "76.8"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2008",
      "Alcohol": "0.67",
      "Life.expectancy": "77.2"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2007",
      "Alcohol": "0.85",
      "Life.expectancy": "76"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2006",
      "Alcohol": "0.67",
      "Life.expectancy": "76.3"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2005",
      "Alcohol": "0.16",
      "Life.expectancy": "76.2"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2004",
      "Alcohol": "0.11",
      "Life.expectancy": "76.4"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2003",
      "Alcohol": "0.12",
      "Life.expectancy": "76"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2002",
      "Alcohol": "0.13",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2001",
      "Alcohol": "0.47",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Brunei Darussalam",
      "Year": "2000",
      "Alcohol": "0.37",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Bulgaria",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Bulgaria",
      "Year": "2014",
      "Alcohol": "12.03",
      "Life.expectancy": "74.3"
    },
    {
      "Country": "Bulgaria",
      "Year": "2013",
      "Alcohol": "12.06",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Bulgaria",
      "Year": "2012",
      "Alcohol": "10.99",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Bulgaria",
      "Year": "2011",
      "Alcohol": "10.67",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Bulgaria",
      "Year": "2010",
      "Alcohol": "10.8",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Bulgaria",
      "Year": "2009",
      "Alcohol": "10.93",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Bulgaria",
      "Year": "2008",
      "Alcohol": "10.98",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Bulgaria",
      "Year": "2007",
      "Alcohol": "10.89",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Bulgaria",
      "Year": "2006",
      "Alcohol": "10.39",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "Bulgaria",
      "Year": "2005",
      "Alcohol": "10.48",
      "Life.expectancy": "72.1"
    },
    {
      "Country": "Bulgaria",
      "Year": "2004",
      "Alcohol": "10.96",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "Bulgaria",
      "Year": "2003",
      "Alcohol": "11.19",
      "Life.expectancy": "72"
    },
    {
      "Country": "Bulgaria",
      "Year": "2002",
      "Alcohol": "10.2",
      "Life.expectancy": "71.8"
    },
    {
      "Country": "Bulgaria",
      "Year": "2001",
      "Alcohol": "10.72",
      "Life.expectancy": "71.6"
    },
    {
      "Country": "Bulgaria",
      "Year": "2000",
      "Alcohol": "9.69",
      "Life.expectancy": "71.1"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "59.9"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "59.3"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2013",
      "Alcohol": "4.64",
      "Life.expectancy": "59"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2012",
      "Alcohol": "4.75",
      "Life.expectancy": "58.6"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2011",
      "Alcohol": "4.51",
      "Life.expectancy": "58.1"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2010",
      "Alcohol": "4.55",
      "Life.expectancy": "57.5"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2009",
      "Alcohol": "4.55",
      "Life.expectancy": "56.9"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2008",
      "Alcohol": "4.5",
      "Life.expectancy": "56.1"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2007",
      "Alcohol": "4.58",
      "Life.expectancy": "55.3"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2006",
      "Alcohol": "4.73",
      "Life.expectancy": "54.3"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2005",
      "Alcohol": "4.88",
      "Life.expectancy": "53.3"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2004",
      "Alcohol": "4.54",
      "Life.expectancy": "52.4"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2003",
      "Alcohol": "4.58",
      "Life.expectancy": "51.6"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2002",
      "Alcohol": "4.53",
      "Life.expectancy": "51"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2001",
      "Alcohol": "4.56",
      "Life.expectancy": "56"
    },
    {
      "Country": "Burkina Faso",
      "Year": "2000",
      "Alcohol": "3.71",
      "Life.expectancy": "51"
    },
    {
      "Country": "Burundi",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "59.6"
    },
    {
      "Country": "Burundi",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "59.1"
    },
    {
      "Country": "Burundi",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "58.6"
    },
    {
      "Country": "Burundi",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "58"
    },
    {
      "Country": "Burundi",
      "Year": "2011",
      "Alcohol": "4.16",
      "Life.expectancy": "57.4"
    },
    {
      "Country": "Burundi",
      "Year": "2010",
      "Alcohol": "4.16",
      "Life.expectancy": "56.8"
    },
    {
      "Country": "Burundi",
      "Year": "2009",
      "Alcohol": "4.05",
      "Life.expectancy": "56.2"
    },
    {
      "Country": "Burundi",
      "Year": "2008",
      "Alcohol": "4.33",
      "Life.expectancy": "55.3"
    },
    {
      "Country": "Burundi",
      "Year": "2007",
      "Alcohol": "4.54",
      "Life.expectancy": "54.8"
    },
    {
      "Country": "Burundi",
      "Year": "2006",
      "Alcohol": "4.5",
      "Life.expectancy": "54.1"
    },
    {
      "Country": "Burundi",
      "Year": "2005",
      "Alcohol": "5.54",
      "Life.expectancy": "53.4"
    },
    {
      "Country": "Burundi",
      "Year": "2004",
      "Alcohol": "5.72",
      "Life.expectancy": "52.6"
    },
    {
      "Country": "Burundi",
      "Year": "2003",
      "Alcohol": "5.84",
      "Life.expectancy": "51.9"
    },
    {
      "Country": "Burundi",
      "Year": "2002",
      "Alcohol": "5.98",
      "Life.expectancy": "51.5"
    },
    {
      "Country": "Burundi",
      "Year": "2001",
      "Alcohol": "6.09",
      "Life.expectancy": "51.3"
    },
    {
      "Country": "Burundi",
      "Year": "2000",
      "Alcohol": "6.61",
      "Life.expectancy": "58"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "53.3"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "52.8"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2013",
      "Alcohol": "3.15",
      "Life.expectancy": "52.3"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2012",
      "Alcohol": "3.24",
      "Life.expectancy": "52"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2011",
      "Alcohol": "3.13",
      "Life.expectancy": "51.7"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2010",
      "Alcohol": "3.15",
      "Life.expectancy": "51.5"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2009",
      "Alcohol": "2.92",
      "Life.expectancy": "51"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2008",
      "Alcohol": "2.69",
      "Life.expectancy": "54"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2007",
      "Alcohol": "2.58",
      "Life.expectancy": "49.9"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2006",
      "Alcohol": "2.65",
      "Life.expectancy": "49.4"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2005",
      "Alcohol": "3.11",
      "Life.expectancy": "48.7"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2004",
      "Alcohol": "3.08",
      "Life.expectancy": "48.2"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2003",
      "Alcohol": "3.12",
      "Life.expectancy": "48"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2002",
      "Alcohol": "3.13",
      "Life.expectancy": "47.7"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2001",
      "Alcohol": "3.15",
      "Life.expectancy": "47.8"
    },
    {
      "Country": "CÃ´te d'Ivoire",
      "Year": "2000",
      "Alcohol": "3.45",
      "Life.expectancy": "47.9"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "73"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2011",
      "Alcohol": "5.07",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2010",
      "Alcohol": "4.75",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2009",
      "Alcohol": "4.45",
      "Life.expectancy": "72.4"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2008",
      "Alcohol": "4.16",
      "Life.expectancy": "72.4"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2007",
      "Alcohol": "5.28",
      "Life.expectancy": "72.3"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2006",
      "Alcohol": "4.25",
      "Life.expectancy": "72.1"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2005",
      "Alcohol": "4.26",
      "Life.expectancy": "71.8"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2004",
      "Alcohol": "4.19",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2003",
      "Alcohol": "4.16",
      "Life.expectancy": "71.1"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2002",
      "Alcohol": "3.82",
      "Life.expectancy": "77"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2001",
      "Alcohol": "3.81",
      "Life.expectancy": "73"
    },
    {
      "Country": "Cabo Verde",
      "Year": "2000",
      "Alcohol": "3.49",
      "Life.expectancy": "69.9"
    },
    {
      "Country": "Cambodia",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "68.7"
    },
    {
      "Country": "Cambodia",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "68.3"
    },
    {
      "Country": "Cambodia",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "67.8"
    },
    {
      "Country": "Cambodia",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "67.4"
    },
    {
      "Country": "Cambodia",
      "Year": "2011",
      "Alcohol": "2.12",
      "Life.expectancy": "67"
    },
    {
      "Country": "Cambodia",
      "Year": "2010",
      "Alcohol": "2.2",
      "Life.expectancy": "66.6"
    },
    {
      "Country": "Cambodia",
      "Year": "2009",
      "Alcohol": "2.13",
      "Life.expectancy": "66.1"
    },
    {
      "Country": "Cambodia",
      "Year": "2008",
      "Alcohol": "2.24",
      "Life.expectancy": "65.6"
    },
    {
      "Country": "Cambodia",
      "Year": "2007",
      "Alcohol": "2.08",
      "Life.expectancy": "65"
    },
    {
      "Country": "Cambodia",
      "Year": "2006",
      "Alcohol": "2.03",
      "Life.expectancy": "64.1"
    },
    {
      "Country": "Cambodia",
      "Year": "2005",
      "Alcohol": "1.99",
      "Life.expectancy": "62.9"
    },
    {
      "Country": "Cambodia",
      "Year": "2004",
      "Alcohol": "1.38",
      "Life.expectancy": "61.5"
    },
    {
      "Country": "Cambodia",
      "Year": "2003",
      "Alcohol": "1.44",
      "Life.expectancy": "63"
    },
    {
      "Country": "Cambodia",
      "Year": "2002",
      "Alcohol": "1.43",
      "Life.expectancy": "59.3"
    },
    {
      "Country": "Cambodia",
      "Year": "2001",
      "Alcohol": "1.71",
      "Life.expectancy": "58.5"
    },
    {
      "Country": "Cambodia",
      "Year": "2000",
      "Alcohol": "1.51",
      "Life.expectancy": "57.7"
    },
    {
      "Country": "Cameroon",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "57.3"
    },
    {
      "Country": "Cameroon",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "56.7"
    },
    {
      "Country": "Cameroon",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "56.4"
    },
    {
      "Country": "Cameroon",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "55.9"
    },
    {
      "Country": "Cameroon",
      "Year": "2011",
      "Alcohol": "6.19",
      "Life.expectancy": "55.6"
    },
    {
      "Country": "Cameroon",
      "Year": "2010",
      "Alcohol": "6.15",
      "Life.expectancy": "55.3"
    },
    {
      "Country": "Cameroon",
      "Year": "2009",
      "Alcohol": "5.89",
      "Life.expectancy": "54.8"
    },
    {
      "Country": "Cameroon",
      "Year": "2008",
      "Alcohol": "5.9",
      "Life.expectancy": "54.2"
    },
    {
      "Country": "Cameroon",
      "Year": "2007",
      "Alcohol": "5.44",
      "Life.expectancy": "53.6"
    },
    {
      "Country": "Cameroon",
      "Year": "2006",
      "Alcohol": "5.22",
      "Life.expectancy": "53.3"
    },
    {
      "Country": "Cameroon",
      "Year": "2005",
      "Alcohol": "5.03",
      "Life.expectancy": "52.8"
    },
    {
      "Country": "Cameroon",
      "Year": "2004",
      "Alcohol": "4.71",
      "Life.expectancy": "52.1"
    },
    {
      "Country": "Cameroon",
      "Year": "2003",
      "Alcohol": "4.64",
      "Life.expectancy": "51.8"
    },
    {
      "Country": "Cameroon",
      "Year": "2002",
      "Alcohol": "4.58",
      "Life.expectancy": "51.6"
    },
    {
      "Country": "Cameroon",
      "Year": "2001",
      "Alcohol": "4.43",
      "Life.expectancy": "51.5"
    },
    {
      "Country": "Cameroon",
      "Year": "2000",
      "Alcohol": "3.91",
      "Life.expectancy": "51.4"
    },
    {
      "Country": "Canada",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "82.2"
    },
    {
      "Country": "Canada",
      "Year": "2014",
      "Alcohol": "8.1",
      "Life.expectancy": "82"
    },
    {
      "Country": "Canada",
      "Year": "2013",
      "Alcohol": "8.2",
      "Life.expectancy": "81.8"
    },
    {
      "Country": "Canada",
      "Year": "2012",
      "Alcohol": "8.3",
      "Life.expectancy": "81.6"
    },
    {
      "Country": "Canada",
      "Year": "2011",
      "Alcohol": "8.2",
      "Life.expectancy": "81.5"
    },
    {
      "Country": "Canada",
      "Year": "2010",
      "Alcohol": "8.4",
      "Life.expectancy": "81.2"
    },
    {
      "Country": "Canada",
      "Year": "2009",
      "Alcohol": "8.4",
      "Life.expectancy": "81"
    },
    {
      "Country": "Canada",
      "Year": "2008",
      "Alcohol": "8.3",
      "Life.expectancy": "87"
    },
    {
      "Country": "Canada",
      "Year": "2007",
      "Alcohol": "8.3",
      "Life.expectancy": "85"
    },
    {
      "Country": "Canada",
      "Year": "2006",
      "Alcohol": "8.2",
      "Life.expectancy": "85"
    },
    {
      "Country": "Canada",
      "Year": "2005",
      "Alcohol": "8",
      "Life.expectancy": "81"
    },
    {
      "Country": "Canada",
      "Year": "2004",
      "Alcohol": "7.8",
      "Life.expectancy": "80"
    },
    {
      "Country": "Canada",
      "Year": "2003",
      "Alcohol": "7.7",
      "Life.expectancy": "79.7"
    },
    {
      "Country": "Canada",
      "Year": "2002",
      "Alcohol": "7.7",
      "Life.expectancy": "79.5"
    },
    {
      "Country": "Canada",
      "Year": "2001",
      "Alcohol": "7.6",
      "Life.expectancy": "79.4"
    },
    {
      "Country": "Canada",
      "Year": "2000",
      "Alcohol": "7.6",
      "Life.expectancy": "79.1"
    },
    {
      "Country": "Central African Republic",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "52.5"
    },
    {
      "Country": "Central African Republic",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "58"
    },
    {
      "Country": "Central African Republic",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "49.9"
    },
    {
      "Country": "Central African Republic",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "53"
    },
    {
      "Country": "Central African Republic",
      "Year": "2011",
      "Alcohol": "1.66",
      "Life.expectancy": "49.8"
    },
    {
      "Country": "Central African Republic",
      "Year": "2010",
      "Alcohol": "1.67",
      "Life.expectancy": "49.2"
    },
    {
      "Country": "Central African Republic",
      "Year": "2009",
      "Alcohol": "1.56",
      "Life.expectancy": "48.6"
    },
    {
      "Country": "Central African Republic",
      "Year": "2008",
      "Alcohol": "1.52",
      "Life.expectancy": "47.6"
    },
    {
      "Country": "Central African Republic",
      "Year": "2007",
      "Alcohol": "1.5",
      "Life.expectancy": "46.8"
    },
    {
      "Country": "Central African Republic",
      "Year": "2006",
      "Alcohol": "1.54",
      "Life.expectancy": "46.3"
    },
    {
      "Country": "Central African Republic",
      "Year": "2005",
      "Alcohol": "1.5",
      "Life.expectancy": "45.9"
    },
    {
      "Country": "Central African Republic",
      "Year": "2004",
      "Alcohol": "1.5",
      "Life.expectancy": "45.7"
    },
    {
      "Country": "Central African Republic",
      "Year": "2003",
      "Alcohol": "1.49",
      "Life.expectancy": "45.7"
    },
    {
      "Country": "Central African Republic",
      "Year": "2002",
      "Alcohol": "1.47",
      "Life.expectancy": "45.6"
    },
    {
      "Country": "Central African Republic",
      "Year": "2001",
      "Alcohol": "1.52",
      "Life.expectancy": "45.6"
    },
    {
      "Country": "Central African Republic",
      "Year": "2000",
      "Alcohol": "1.51",
      "Life.expectancy": "46"
    },
    {
      "Country": "Chad",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "53.1"
    },
    {
      "Country": "Chad",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "52.6"
    },
    {
      "Country": "Chad",
      "Year": "2013",
      "Alcohol": "0.64",
      "Life.expectancy": "52.2"
    },
    {
      "Country": "Chad",
      "Year": "2012",
      "Alcohol": "0.62",
      "Life.expectancy": "51.8"
    },
    {
      "Country": "Chad",
      "Year": "2011",
      "Alcohol": "0.56",
      "Life.expectancy": "51.6"
    },
    {
      "Country": "Chad",
      "Year": "2010",
      "Alcohol": "0.5",
      "Life.expectancy": "51.2"
    },
    {
      "Country": "Chad",
      "Year": "2009",
      "Alcohol": "0.47",
      "Life.expectancy": "57"
    },
    {
      "Country": "Chad",
      "Year": "2008",
      "Alcohol": "0.45",
      "Life.expectancy": "49.6"
    },
    {
      "Country": "Chad",
      "Year": "2007",
      "Alcohol": "0.42",
      "Life.expectancy": "49.4"
    },
    {
      "Country": "Chad",
      "Year": "2006",
      "Alcohol": "0.41",
      "Life.expectancy": "48.5"
    },
    {
      "Country": "Chad",
      "Year": "2005",
      "Alcohol": "0.42",
      "Life.expectancy": "48.6"
    },
    {
      "Country": "Chad",
      "Year": "2004",
      "Alcohol": "0.34",
      "Life.expectancy": "48.5"
    },
    {
      "Country": "Chad",
      "Year": "2003",
      "Alcohol": "0.42",
      "Life.expectancy": "48.4"
    },
    {
      "Country": "Chad",
      "Year": "2002",
      "Alcohol": "0.36",
      "Life.expectancy": "48.1"
    },
    {
      "Country": "Chad",
      "Year": "2001",
      "Alcohol": "0.3",
      "Life.expectancy": "48"
    },
    {
      "Country": "Chad",
      "Year": "2000",
      "Alcohol": "0.25",
      "Life.expectancy": "47.6"
    },
    {
      "Country": "Chile",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "85"
    },
    {
      "Country": "Chile",
      "Year": "2014",
      "Alcohol": "7.16",
      "Life.expectancy": "83"
    },
    {
      "Country": "Chile",
      "Year": "2013",
      "Alcohol": "7.2",
      "Life.expectancy": "81"
    },
    {
      "Country": "Chile",
      "Year": "2012",
      "Alcohol": "6.76",
      "Life.expectancy": "79.9"
    },
    {
      "Country": "Chile",
      "Year": "2011",
      "Alcohol": "7.26",
      "Life.expectancy": "79.8"
    },
    {
      "Country": "Chile",
      "Year": "2010",
      "Alcohol": "7.93",
      "Life.expectancy": "79.1"
    },
    {
      "Country": "Chile",
      "Year": "2009",
      "Alcohol": "7.67",
      "Life.expectancy": "79.3"
    },
    {
      "Country": "Chile",
      "Year": "2008",
      "Alcohol": "7.31",
      "Life.expectancy": "79.6"
    },
    {
      "Country": "Chile",
      "Year": "2007",
      "Alcohol": "7.39",
      "Life.expectancy": "78.9"
    },
    {
      "Country": "Chile",
      "Year": "2006",
      "Alcohol": "7.33",
      "Life.expectancy": "78.9"
    },
    {
      "Country": "Chile",
      "Year": "2005",
      "Alcohol": "7.57",
      "Life.expectancy": "78.4"
    },
    {
      "Country": "Chile",
      "Year": "2004",
      "Alcohol": "6.32",
      "Life.expectancy": "78"
    },
    {
      "Country": "Chile",
      "Year": "2003",
      "Alcohol": "6.37",
      "Life.expectancy": "77.9"
    },
    {
      "Country": "Chile",
      "Year": "2002",
      "Alcohol": "6.06",
      "Life.expectancy": "77.8"
    },
    {
      "Country": "Chile",
      "Year": "2001",
      "Alcohol": "6.1",
      "Life.expectancy": "77.3"
    },
    {
      "Country": "Chile",
      "Year": "2000",
      "Alcohol": "6.24",
      "Life.expectancy": "77.3"
    },
    {
      "Country": "China",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "76.1"
    },
    {
      "Country": "China",
      "Year": "2014",
      "Alcohol": "5.78",
      "Life.expectancy": "75.8"
    },
    {
      "Country": "China",
      "Year": "2013",
      "Alcohol": "5.79",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "China",
      "Year": "2012",
      "Alcohol": "5.74",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "China",
      "Year": "2011",
      "Alcohol": "5.63",
      "Life.expectancy": "75.2"
    },
    {
      "Country": "China",
      "Year": "2010",
      "Alcohol": "5.75",
      "Life.expectancy": "75"
    },
    {
      "Country": "China",
      "Year": "2009",
      "Alcohol": "4.88",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "China",
      "Year": "2008",
      "Alcohol": "4.27",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "China",
      "Year": "2007",
      "Alcohol": "3.88",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "China",
      "Year": "2006",
      "Alcohol": "3.28",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "China",
      "Year": "2005",
      "Alcohol": "2.92",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "China",
      "Year": "2004",
      "Alcohol": "3.04",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "China",
      "Year": "2003",
      "Alcohol": "2.96",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "China",
      "Year": "2002",
      "Alcohol": "2.91",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "China",
      "Year": "2001",
      "Alcohol": "2.84",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "China",
      "Year": "2000",
      "Alcohol": "3.06",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "Colombia",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Colombia",
      "Year": "2014",
      "Alcohol": "4.38",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Colombia",
      "Year": "2013",
      "Alcohol": "4.41",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Colombia",
      "Year": "2012",
      "Alcohol": "4.44",
      "Life.expectancy": "74.3"
    },
    {
      "Country": "Colombia",
      "Year": "2011",
      "Alcohol": "4.37",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Colombia",
      "Year": "2010",
      "Alcohol": "4.28",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Colombia",
      "Year": "2009",
      "Alcohol": "4.34",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Colombia",
      "Year": "2008",
      "Alcohol": "4.45",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Colombia",
      "Year": "2007",
      "Alcohol": "4.66",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Colombia",
      "Year": "2006",
      "Alcohol": "4.53",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Colombia",
      "Year": "2005",
      "Alcohol": "4.38",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Colombia",
      "Year": "2004",
      "Alcohol": "4.26",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Colombia",
      "Year": "2003",
      "Alcohol": "4.25",
      "Life.expectancy": "72.4"
    },
    {
      "Country": "Colombia",
      "Year": "2002",
      "Alcohol": "4.45",
      "Life.expectancy": "71.8"
    },
    {
      "Country": "Colombia",
      "Year": "2001",
      "Alcohol": "4.43",
      "Life.expectancy": "71.5"
    },
    {
      "Country": "Colombia",
      "Year": "2000",
      "Alcohol": "4.66",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "Comoros",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "63.5"
    },
    {
      "Country": "Comoros",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "63.2"
    },
    {
      "Country": "Comoros",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "62.9"
    },
    {
      "Country": "Comoros",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "62.5"
    },
    {
      "Country": "Comoros",
      "Year": "2011",
      "Alcohol": "0.12",
      "Life.expectancy": "62.2"
    },
    {
      "Country": "Comoros",
      "Year": "2010",
      "Alcohol": "0.15",
      "Life.expectancy": "61.8"
    },
    {
      "Country": "Comoros",
      "Year": "2009",
      "Alcohol": "0.17",
      "Life.expectancy": "61.3"
    },
    {
      "Country": "Comoros",
      "Year": "2008",
      "Alcohol": "0.12",
      "Life.expectancy": "61"
    },
    {
      "Country": "Comoros",
      "Year": "2007",
      "Alcohol": "0.16",
      "Life.expectancy": "66"
    },
    {
      "Country": "Comoros",
      "Year": "2006",
      "Alcohol": "0.25",
      "Life.expectancy": "63"
    },
    {
      "Country": "Comoros",
      "Year": "2005",
      "Alcohol": "0.24",
      "Life.expectancy": "60"
    },
    {
      "Country": "Comoros",
      "Year": "2004",
      "Alcohol": "0.27",
      "Life.expectancy": "59.8"
    },
    {
      "Country": "Comoros",
      "Year": "2003",
      "Alcohol": "0.26",
      "Life.expectancy": "59.6"
    },
    {
      "Country": "Comoros",
      "Year": "2002",
      "Alcohol": "0.08",
      "Life.expectancy": "59.5"
    },
    {
      "Country": "Comoros",
      "Year": "2001",
      "Alcohol": "0.08",
      "Life.expectancy": "59.5"
    },
    {
      "Country": "Comoros",
      "Year": "2000",
      "Alcohol": "0.09",
      "Life.expectancy": "59.5"
    },
    {
      "Country": "Congo",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "64.7"
    },
    {
      "Country": "Congo",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "64.2"
    },
    {
      "Country": "Congo",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "63.9"
    },
    {
      "Country": "Congo",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "63.7"
    },
    {
      "Country": "Congo",
      "Year": "2011",
      "Alcohol": "3.82",
      "Life.expectancy": "62.9"
    },
    {
      "Country": "Congo",
      "Year": "2010",
      "Alcohol": "3.53",
      "Life.expectancy": "62"
    },
    {
      "Country": "Congo",
      "Year": "2009",
      "Alcohol": "3.47",
      "Life.expectancy": "68"
    },
    {
      "Country": "Congo",
      "Year": "2008",
      "Alcohol": "2.58",
      "Life.expectancy": "59.4"
    },
    {
      "Country": "Congo",
      "Year": "2007",
      "Alcohol": "2.75",
      "Life.expectancy": "58.2"
    },
    {
      "Country": "Congo",
      "Year": "2006",
      "Alcohol": "2.25",
      "Life.expectancy": "56.9"
    },
    {
      "Country": "Congo",
      "Year": "2005",
      "Alcohol": "2.03",
      "Life.expectancy": "55.3"
    },
    {
      "Country": "Congo",
      "Year": "2004",
      "Alcohol": "2.58",
      "Life.expectancy": "54.1"
    },
    {
      "Country": "Congo",
      "Year": "2003",
      "Alcohol": "2.45",
      "Life.expectancy": "53.2"
    },
    {
      "Country": "Congo",
      "Year": "2002",
      "Alcohol": "2.55",
      "Life.expectancy": "52.6"
    },
    {
      "Country": "Congo",
      "Year": "2001",
      "Alcohol": "2.3",
      "Life.expectancy": "52.7"
    },
    {
      "Country": "Congo",
      "Year": "2000",
      "Alcohol": "2.26",
      "Life.expectancy": "52.9"
    },
    {
      "Country": "Cook Islands",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "0"
    },
    {
      "Country": "Costa Rica",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "79.6"
    },
    {
      "Country": "Costa Rica",
      "Year": "2014",
      "Alcohol": "3.45",
      "Life.expectancy": "79.5"
    },
    {
      "Country": "Costa Rica",
      "Year": "2013",
      "Alcohol": "3.42",
      "Life.expectancy": "79.4"
    },
    {
      "Country": "Costa Rica",
      "Year": "2012",
      "Alcohol": "3.34",
      "Life.expectancy": "79.2"
    },
    {
      "Country": "Costa Rica",
      "Year": "2011",
      "Alcohol": "3.41",
      "Life.expectancy": "79"
    },
    {
      "Country": "Costa Rica",
      "Year": "2010",
      "Alcohol": "3.58",
      "Life.expectancy": "78.1"
    },
    {
      "Country": "Costa Rica",
      "Year": "2009",
      "Alcohol": "4.07",
      "Life.expectancy": "79.2"
    },
    {
      "Country": "Costa Rica",
      "Year": "2008",
      "Alcohol": "4.22",
      "Life.expectancy": "78.9"
    },
    {
      "Country": "Costa Rica",
      "Year": "2007",
      "Alcohol": "4.2",
      "Life.expectancy": "78.9"
    },
    {
      "Country": "Costa Rica",
      "Year": "2006",
      "Alcohol": "4.15",
      "Life.expectancy": "78"
    },
    {
      "Country": "Costa Rica",
      "Year": "2005",
      "Alcohol": "4.1",
      "Life.expectancy": "78.6"
    },
    {
      "Country": "Costa Rica",
      "Year": "2004",
      "Alcohol": "4.09",
      "Life.expectancy": "77.7"
    },
    {
      "Country": "Costa Rica",
      "Year": "2003",
      "Alcohol": "4.04",
      "Life.expectancy": "78"
    },
    {
      "Country": "Costa Rica",
      "Year": "2002",
      "Alcohol": "4.17",
      "Life.expectancy": "78.3"
    },
    {
      "Country": "Costa Rica",
      "Year": "2001",
      "Alcohol": "4.29",
      "Life.expectancy": "77.5"
    },
    {
      "Country": "Costa Rica",
      "Year": "2000",
      "Alcohol": "4.34",
      "Life.expectancy": "77.6"
    },
    {
      "Country": "Croatia",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "78"
    },
    {
      "Country": "Croatia",
      "Year": "2014",
      "Alcohol": "12.14",
      "Life.expectancy": "77.8"
    },
    {
      "Country": "Croatia",
      "Year": "2013",
      "Alcohol": "12.39",
      "Life.expectancy": "77.7"
    },
    {
      "Country": "Croatia",
      "Year": "2012",
      "Alcohol": "11.49",
      "Life.expectancy": "77.1"
    },
    {
      "Country": "Croatia",
      "Year": "2011",
      "Alcohol": "12.19",
      "Life.expectancy": "77"
    },
    {
      "Country": "Croatia",
      "Year": "2010",
      "Alcohol": "12.1",
      "Life.expectancy": "76.6"
    },
    {
      "Country": "Croatia",
      "Year": "2009",
      "Alcohol": "12.21",
      "Life.expectancy": "76.3"
    },
    {
      "Country": "Croatia",
      "Year": "2008",
      "Alcohol": "12.06",
      "Life.expectancy": "76"
    },
    {
      "Country": "Croatia",
      "Year": "2007",
      "Alcohol": "12.56",
      "Life.expectancy": "75.8"
    },
    {
      "Country": "Croatia",
      "Year": "2006",
      "Alcohol": "11.83",
      "Life.expectancy": "75.9"
    },
    {
      "Country": "Croatia",
      "Year": "2005",
      "Alcohol": "11.59",
      "Life.expectancy": "75.2"
    },
    {
      "Country": "Croatia",
      "Year": "2004",
      "Alcohol": "13.11",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Croatia",
      "Year": "2003",
      "Alcohol": "13.78",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Croatia",
      "Year": "2002",
      "Alcohol": "13.39",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Croatia",
      "Year": "2001",
      "Alcohol": "13.15",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Croatia",
      "Year": "2000",
      "Alcohol": "12.73",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Cuba",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "79.1"
    },
    {
      "Country": "Cuba",
      "Year": "2014",
      "Alcohol": "4.37",
      "Life.expectancy": "79"
    },
    {
      "Country": "Cuba",
      "Year": "2013",
      "Alcohol": "4.18",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "Cuba",
      "Year": "2012",
      "Alcohol": "4.16",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "Cuba",
      "Year": "2011",
      "Alcohol": "4.14",
      "Life.expectancy": "78.8"
    },
    {
      "Country": "Cuba",
      "Year": "2010",
      "Alcohol": "4.13",
      "Life.expectancy": "78"
    },
    {
      "Country": "Cuba",
      "Year": "2009",
      "Alcohol": "4.01",
      "Life.expectancy": "78.1"
    },
    {
      "Country": "Cuba",
      "Year": "2008",
      "Alcohol": "4.26",
      "Life.expectancy": "77.9"
    },
    {
      "Country": "Cuba",
      "Year": "2007",
      "Alcohol": "4.13",
      "Life.expectancy": "78.1"
    },
    {
      "Country": "Cuba",
      "Year": "2006",
      "Alcohol": "4.17",
      "Life.expectancy": "78"
    },
    {
      "Country": "Cuba",
      "Year": "2005",
      "Alcohol": "4.48",
      "Life.expectancy": "77.2"
    },
    {
      "Country": "Cuba",
      "Year": "2004",
      "Alcohol": "4.38",
      "Life.expectancy": "77.3"
    },
    {
      "Country": "Cuba",
      "Year": "2003",
      "Alcohol": "4.39",
      "Life.expectancy": "77.4"
    },
    {
      "Country": "Cuba",
      "Year": "2002",
      "Alcohol": "4.1",
      "Life.expectancy": "77.7"
    },
    {
      "Country": "Cuba",
      "Year": "2001",
      "Alcohol": "4.04",
      "Life.expectancy": "76.7"
    },
    {
      "Country": "Cuba",
      "Year": "2000",
      "Alcohol": "3.92",
      "Life.expectancy": "76.9"
    },
    {
      "Country": "Cyprus",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "85"
    },
    {
      "Country": "Cyprus",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "83"
    },
    {
      "Country": "Cyprus",
      "Year": "2013",
      "Alcohol": "9.04",
      "Life.expectancy": "81"
    },
    {
      "Country": "Cyprus",
      "Year": "2012",
      "Alcohol": "10.55",
      "Life.expectancy": "80"
    },
    {
      "Country": "Cyprus",
      "Year": "2011",
      "Alcohol": "10.69",
      "Life.expectancy": "79.7"
    },
    {
      "Country": "Cyprus",
      "Year": "2010",
      "Alcohol": "11.32",
      "Life.expectancy": "79.5"
    },
    {
      "Country": "Cyprus",
      "Year": "2009",
      "Alcohol": "10.8",
      "Life.expectancy": "79.3"
    },
    {
      "Country": "Cyprus",
      "Year": "2008",
      "Alcohol": "12.01",
      "Life.expectancy": "79.1"
    },
    {
      "Country": "Cyprus",
      "Year": "2007",
      "Alcohol": "11.56",
      "Life.expectancy": "78.9"
    },
    {
      "Country": "Cyprus",
      "Year": "2006",
      "Alcohol": "11.47",
      "Life.expectancy": "78.8"
    },
    {
      "Country": "Cyprus",
      "Year": "2005",
      "Alcohol": "11.41",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "Cyprus",
      "Year": "2004",
      "Alcohol": "13.03",
      "Life.expectancy": "78.6"
    },
    {
      "Country": "Cyprus",
      "Year": "2003",
      "Alcohol": "10.62",
      "Life.expectancy": "78.5"
    },
    {
      "Country": "Cyprus",
      "Year": "2002",
      "Alcohol": "11.68",
      "Life.expectancy": "78.4"
    },
    {
      "Country": "Cyprus",
      "Year": "2001",
      "Alcohol": "10.16",
      "Life.expectancy": "78.2"
    },
    {
      "Country": "Cyprus",
      "Year": "2000",
      "Alcohol": "9.56",
      "Life.expectancy": "78.1"
    },
    {
      "Country": "Czechia",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "78.8"
    },
    {
      "Country": "Czechia",
      "Year": "2014",
      "Alcohol": "12.68",
      "Life.expectancy": "78.6"
    },
    {
      "Country": "Czechia",
      "Year": "2013",
      "Alcohol": "12.45",
      "Life.expectancy": "78.2"
    },
    {
      "Country": "Czechia",
      "Year": "2012",
      "Alcohol": "12.71",
      "Life.expectancy": "78"
    },
    {
      "Country": "Czechia",
      "Year": "2011",
      "Alcohol": "12.43",
      "Life.expectancy": "77.8"
    },
    {
      "Country": "Czechia",
      "Year": "2010",
      "Alcohol": "12.69",
      "Life.expectancy": "77.5"
    },
    {
      "Country": "Czechia",
      "Year": "2009",
      "Alcohol": "13.23",
      "Life.expectancy": "77.1"
    },
    {
      "Country": "Czechia",
      "Year": "2008",
      "Alcohol": "13.25",
      "Life.expectancy": "77"
    },
    {
      "Country": "Czechia",
      "Year": "2007",
      "Alcohol": "13.43",
      "Life.expectancy": "76.8"
    },
    {
      "Country": "Czechia",
      "Year": "2006",
      "Alcohol": "13.03",
      "Life.expectancy": "76.5"
    },
    {
      "Country": "Czechia",
      "Year": "2005",
      "Alcohol": "13.19",
      "Life.expectancy": "75.9"
    },
    {
      "Country": "Czechia",
      "Year": "2004",
      "Alcohol": "13.24",
      "Life.expectancy": "75.8"
    },
    {
      "Country": "Czechia",
      "Year": "2003",
      "Alcohol": "13.01",
      "Life.expectancy": "75.2"
    },
    {
      "Country": "Czechia",
      "Year": "2002",
      "Alcohol": "13.47",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "Czechia",
      "Year": "2001",
      "Alcohol": "13.36",
      "Life.expectancy": "75.1"
    },
    {
      "Country": "Czechia",
      "Year": "2000",
      "Alcohol": "13.22",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "76"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "73"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2013",
      "Alcohol": "3.35",
      "Life.expectancy": "71"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2012",
      "Alcohol": "3.61",
      "Life.expectancy": "69.8"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2011",
      "Alcohol": "3.39",
      "Life.expectancy": "69.4"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2010",
      "Alcohol": "3.12",
      "Life.expectancy": "69"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2009",
      "Alcohol": "3.35",
      "Life.expectancy": "68.7"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2008",
      "Alcohol": "3.16",
      "Life.expectancy": "68.6"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2007",
      "Alcohol": "3.13",
      "Life.expectancy": "68.5"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2006",
      "Alcohol": "3.28",
      "Life.expectancy": "68.5"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2005",
      "Alcohol": "3.21",
      "Life.expectancy": "68.5"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2004",
      "Alcohol": "3.13",
      "Life.expectancy": "68.4"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2003",
      "Alcohol": "3.13",
      "Life.expectancy": "68.1"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2002",
      "Alcohol": "3.08",
      "Life.expectancy": "67.6"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2001",
      "Alcohol": "2.53",
      "Life.expectancy": "66.6"
    },
    {
      "Country": "Democratic People's Republic of Korea",
      "Year": "2000",
      "Alcohol": "3.52",
      "Life.expectancy": "65.4"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "59.8"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "59.3"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "58.8"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "58.3"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2011",
      "Alcohol": "1.82",
      "Life.expectancy": "57.9"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2010",
      "Alcohol": "1.81",
      "Life.expectancy": "57.4"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2009",
      "Alcohol": "2.13",
      "Life.expectancy": "56.7"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2008",
      "Alcohol": "2.09",
      "Life.expectancy": "56.3"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2007",
      "Alcohol": "1.52",
      "Life.expectancy": "55.7"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2006",
      "Alcohol": "1.53",
      "Life.expectancy": "55"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2005",
      "Alcohol": "1.43",
      "Life.expectancy": "54.3"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2004",
      "Alcohol": "1.44",
      "Life.expectancy": "53.5"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2003",
      "Alcohol": "1.83",
      "Life.expectancy": "52.8"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2002",
      "Alcohol": "1.85",
      "Life.expectancy": "52.1"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2001",
      "Alcohol": "1.9",
      "Life.expectancy": "51.8"
    },
    {
      "Country": "Democratic Republic of the Congo",
      "Year": "2000",
      "Alcohol": "1.98",
      "Life.expectancy": "51.3"
    },
    {
      "Country": "Denmark",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "86"
    },
    {
      "Country": "Denmark",
      "Year": "2014",
      "Alcohol": "9.64",
      "Life.expectancy": "84"
    },
    {
      "Country": "Denmark",
      "Year": "2013",
      "Alcohol": "9.5",
      "Life.expectancy": "81"
    },
    {
      "Country": "Denmark",
      "Year": "2012",
      "Alcohol": "9.26",
      "Life.expectancy": "80"
    },
    {
      "Country": "Denmark",
      "Year": "2011",
      "Alcohol": "10.47",
      "Life.expectancy": "79.7"
    },
    {
      "Country": "Denmark",
      "Year": "2010",
      "Alcohol": "10.28",
      "Life.expectancy": "79.2"
    },
    {
      "Country": "Denmark",
      "Year": "2009",
      "Alcohol": "10.08",
      "Life.expectancy": "78.9"
    },
    {
      "Country": "Denmark",
      "Year": "2008",
      "Alcohol": "10.7",
      "Life.expectancy": "78.8"
    },
    {
      "Country": "Denmark",
      "Year": "2007",
      "Alcohol": "10.99",
      "Life.expectancy": "78.4"
    },
    {
      "Country": "Denmark",
      "Year": "2006",
      "Alcohol": "11.02",
      "Life.expectancy": "78.1"
    },
    {
      "Country": "Denmark",
      "Year": "2005",
      "Alcohol": "11.28",
      "Life.expectancy": "78.1"
    },
    {
      "Country": "Denmark",
      "Year": "2004",
      "Alcohol": "11.27",
      "Life.expectancy": "77.7"
    },
    {
      "Country": "Denmark",
      "Year": "2003",
      "Alcohol": "11.54",
      "Life.expectancy": "77.3"
    },
    {
      "Country": "Denmark",
      "Year": "2002",
      "Alcohol": "11.34",
      "Life.expectancy": "77"
    },
    {
      "Country": "Denmark",
      "Year": "2001",
      "Alcohol": "11.56",
      "Life.expectancy": "77"
    },
    {
      "Country": "Denmark",
      "Year": "2000",
      "Alcohol": "11.69",
      "Life.expectancy": "76.9"
    },
    {
      "Country": "Djibouti",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "63.5"
    },
    {
      "Country": "Djibouti",
      "Year": "2014",
      "Alcohol": "0.38",
      "Life.expectancy": "63"
    },
    {
      "Country": "Djibouti",
      "Year": "2013",
      "Alcohol": "0.53",
      "Life.expectancy": "62.7"
    },
    {
      "Country": "Djibouti",
      "Year": "2012",
      "Alcohol": "0.52",
      "Life.expectancy": "62.2"
    },
    {
      "Country": "Djibouti",
      "Year": "2011",
      "Alcohol": "0.39",
      "Life.expectancy": "61.8"
    },
    {
      "Country": "Djibouti",
      "Year": "2010",
      "Alcohol": "0.44",
      "Life.expectancy": "61.3"
    },
    {
      "Country": "Djibouti",
      "Year": "2009",
      "Alcohol": "0.49",
      "Life.expectancy": "69"
    },
    {
      "Country": "Djibouti",
      "Year": "2008",
      "Alcohol": "0.49",
      "Life.expectancy": "62"
    },
    {
      "Country": "Djibouti",
      "Year": "2007",
      "Alcohol": "0.45",
      "Life.expectancy": "59.8"
    },
    {
      "Country": "Djibouti",
      "Year": "2006",
      "Alcohol": "1.02",
      "Life.expectancy": "59.1"
    },
    {
      "Country": "Djibouti",
      "Year": "2005",
      "Alcohol": "1.23",
      "Life.expectancy": "58.6"
    },
    {
      "Country": "Djibouti",
      "Year": "2004",
      "Alcohol": "1.18",
      "Life.expectancy": "58.1"
    },
    {
      "Country": "Djibouti",
      "Year": "2003",
      "Alcohol": "1.02",
      "Life.expectancy": "58"
    },
    {
      "Country": "Djibouti",
      "Year": "2002",
      "Alcohol": "1.03",
      "Life.expectancy": "57.9"
    },
    {
      "Country": "Djibouti",
      "Year": "2001",
      "Alcohol": "0.95",
      "Life.expectancy": "57.7"
    },
    {
      "Country": "Djibouti",
      "Year": "2000",
      "Alcohol": "1.34",
      "Life.expectancy": "57.4"
    },
    {
      "Country": "Dominica",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "0"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2014",
      "Alcohol": "5.92",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2013",
      "Alcohol": "5.93",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2012",
      "Alcohol": "5.93",
      "Life.expectancy": "72.1"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2011",
      "Alcohol": "5.91",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2010",
      "Alcohol": "6.02",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2009",
      "Alcohol": "6.05",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2008",
      "Alcohol": "6.12",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2007",
      "Alcohol": "6.05",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2006",
      "Alcohol": "6.2",
      "Life.expectancy": "72.3"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2005",
      "Alcohol": "5.71",
      "Life.expectancy": "69.7"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2004",
      "Alcohol": "5.16",
      "Life.expectancy": "69.3"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2003",
      "Alcohol": "6.32",
      "Life.expectancy": "73"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2002",
      "Alcohol": "6.43",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2001",
      "Alcohol": "6.13",
      "Life.expectancy": "71.2"
    },
    {
      "Country": "Dominican Republic",
      "Year": "2000",
      "Alcohol": "6.58",
      "Life.expectancy": "72"
    },
    {
      "Country": "Ecuador",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "76.2"
    },
    {
      "Country": "Ecuador",
      "Year": "2014",
      "Alcohol": "3.82",
      "Life.expectancy": "76"
    },
    {
      "Country": "Ecuador",
      "Year": "2013",
      "Alcohol": "3.77",
      "Life.expectancy": "76"
    },
    {
      "Country": "Ecuador",
      "Year": "2012",
      "Alcohol": "3.92",
      "Life.expectancy": "75.5"
    },
    {
      "Country": "Ecuador",
      "Year": "2011",
      "Alcohol": "3.99",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "Ecuador",
      "Year": "2010",
      "Alcohol": "3.95",
      "Life.expectancy": "75"
    },
    {
      "Country": "Ecuador",
      "Year": "2009",
      "Alcohol": "3.87",
      "Life.expectancy": "75.1"
    },
    {
      "Country": "Ecuador",
      "Year": "2008",
      "Alcohol": "3.76",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Ecuador",
      "Year": "2007",
      "Alcohol": "3.63",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Ecuador",
      "Year": "2006",
      "Alcohol": "3.52",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Ecuador",
      "Year": "2005",
      "Alcohol": "3.54",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Ecuador",
      "Year": "2004",
      "Alcohol": "3.65",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Ecuador",
      "Year": "2003",
      "Alcohol": "3.69",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Ecuador",
      "Year": "2002",
      "Alcohol": "3.88",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Ecuador",
      "Year": "2001",
      "Alcohol": "4.13",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Ecuador",
      "Year": "2000",
      "Alcohol": "3.99",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Egypt",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "79"
    },
    {
      "Country": "Egypt",
      "Year": "2014",
      "Alcohol": "0.21",
      "Life.expectancy": "78"
    },
    {
      "Country": "Egypt",
      "Year": "2013",
      "Alcohol": "0.21",
      "Life.expectancy": "79"
    },
    {
      "Country": "Egypt",
      "Year": "2012",
      "Alcohol": "0.23",
      "Life.expectancy": "72"
    },
    {
      "Country": "Egypt",
      "Year": "2011",
      "Alcohol": "0.22",
      "Life.expectancy": "74"
    },
    {
      "Country": "Egypt",
      "Year": "2010",
      "Alcohol": "0.22",
      "Life.expectancy": "70"
    },
    {
      "Country": "Egypt",
      "Year": "2009",
      "Alcohol": "0.21",
      "Life.expectancy": "69.9"
    },
    {
      "Country": "Egypt",
      "Year": "2008",
      "Alcohol": "0.24",
      "Life.expectancy": "69.8"
    },
    {
      "Country": "Egypt",
      "Year": "2007",
      "Alcohol": "0.21",
      "Life.expectancy": "69.7"
    },
    {
      "Country": "Egypt",
      "Year": "2006",
      "Alcohol": "0.18",
      "Life.expectancy": "69.5"
    },
    {
      "Country": "Egypt",
      "Year": "2005",
      "Alcohol": "0.16",
      "Life.expectancy": "69.4"
    },
    {
      "Country": "Egypt",
      "Year": "2004",
      "Alcohol": "0.16",
      "Life.expectancy": "69"
    },
    {
      "Country": "Egypt",
      "Year": "2003",
      "Alcohol": "0.15",
      "Life.expectancy": "68.6"
    },
    {
      "Country": "Egypt",
      "Year": "2002",
      "Alcohol": "0.15",
      "Life.expectancy": "68.7"
    },
    {
      "Country": "Egypt",
      "Year": "2001",
      "Alcohol": "0.14",
      "Life.expectancy": "68.6"
    },
    {
      "Country": "Egypt",
      "Year": "2000",
      "Alcohol": "0.14",
      "Life.expectancy": "68.8"
    },
    {
      "Country": "El Salvador",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "El Salvador",
      "Year": "2014",
      "Alcohol": "2.52",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "El Salvador",
      "Year": "2013",
      "Alcohol": "2.42",
      "Life.expectancy": "73"
    },
    {
      "Country": "El Salvador",
      "Year": "2012",
      "Alcohol": "2.48",
      "Life.expectancy": "73"
    },
    {
      "Country": "El Salvador",
      "Year": "2011",
      "Alcohol": "2.37",
      "Life.expectancy": "72"
    },
    {
      "Country": "El Salvador",
      "Year": "2010",
      "Alcohol": "2.36",
      "Life.expectancy": "72"
    },
    {
      "Country": "El Salvador",
      "Year": "2009",
      "Alcohol": "2.55",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "El Salvador",
      "Year": "2008",
      "Alcohol": "2.68",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "El Salvador",
      "Year": "2007",
      "Alcohol": "2.83",
      "Life.expectancy": "71.2"
    },
    {
      "Country": "El Salvador",
      "Year": "2006",
      "Alcohol": "2.77",
      "Life.expectancy": "75"
    },
    {
      "Country": "El Salvador",
      "Year": "2005",
      "Alcohol": "2.77",
      "Life.expectancy": "71"
    },
    {
      "Country": "El Salvador",
      "Year": "2004",
      "Alcohol": "2.9",
      "Life.expectancy": "70"
    },
    {
      "Country": "El Salvador",
      "Year": "2003",
      "Alcohol": "3.1",
      "Life.expectancy": "69.9"
    },
    {
      "Country": "El Salvador",
      "Year": "2002",
      "Alcohol": "2.97",
      "Life.expectancy": "73"
    },
    {
      "Country": "El Salvador",
      "Year": "2001",
      "Alcohol": "2.88",
      "Life.expectancy": "68.9"
    },
    {
      "Country": "El Salvador",
      "Year": "2000",
      "Alcohol": "2.79",
      "Life.expectancy": "69"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "58.2"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "57.9"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2013",
      "Alcohol": "10.72",
      "Life.expectancy": "57.4"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2012",
      "Alcohol": "11.89",
      "Life.expectancy": "56.7"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2011",
      "Alcohol": "10.99",
      "Life.expectancy": "56.2"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2010",
      "Alcohol": "9.93",
      "Life.expectancy": "56.1"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2009",
      "Alcohol": "7.97",
      "Life.expectancy": "55.7"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2008",
      "Alcohol": "8.34",
      "Life.expectancy": "55.4"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2007",
      "Alcohol": "6.86",
      "Life.expectancy": "55"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2006",
      "Alcohol": "7.28",
      "Life.expectancy": "54.8"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2005",
      "Alcohol": "7.19",
      "Life.expectancy": "54.4"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2004",
      "Alcohol": "6.28",
      "Life.expectancy": "54.1"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2003",
      "Alcohol": "7.13",
      "Life.expectancy": "53.8"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2002",
      "Alcohol": "6.01",
      "Life.expectancy": "53.5"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2001",
      "Alcohol": "5.07",
      "Life.expectancy": "53.1"
    },
    {
      "Country": "Equatorial Guinea",
      "Year": "2000",
      "Alcohol": "4.46",
      "Life.expectancy": "52.7"
    },
    {
      "Country": "Eritrea",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "64.7"
    },
    {
      "Country": "Eritrea",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "64.4"
    },
    {
      "Country": "Eritrea",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "64"
    },
    {
      "Country": "Eritrea",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "63.6"
    },
    {
      "Country": "Eritrea",
      "Year": "2011",
      "Alcohol": "0.62",
      "Life.expectancy": "62.9"
    },
    {
      "Country": "Eritrea",
      "Year": "2010",
      "Alcohol": "0.61",
      "Life.expectancy": "62.1"
    },
    {
      "Country": "Eritrea",
      "Year": "2009",
      "Alcohol": "0.63",
      "Life.expectancy": "61.4"
    },
    {
      "Country": "Eritrea",
      "Year": "2008",
      "Alcohol": "0.49",
      "Life.expectancy": "67"
    },
    {
      "Country": "Eritrea",
      "Year": "2007",
      "Alcohol": "1.23",
      "Life.expectancy": "62"
    },
    {
      "Country": "Eritrea",
      "Year": "2006",
      "Alcohol": "0.97",
      "Life.expectancy": "59.7"
    },
    {
      "Country": "Eritrea",
      "Year": "2005",
      "Alcohol": "1.07",
      "Life.expectancy": "59.4"
    },
    {
      "Country": "Eritrea",
      "Year": "2004",
      "Alcohol": "0.64",
      "Life.expectancy": "59.1"
    },
    {
      "Country": "Eritrea",
      "Year": "2003",
      "Alcohol": "0.56",
      "Life.expectancy": "58.8"
    },
    {
      "Country": "Eritrea",
      "Year": "2002",
      "Alcohol": "0.83",
      "Life.expectancy": "58.5"
    },
    {
      "Country": "Eritrea",
      "Year": "2001",
      "Alcohol": "0.61",
      "Life.expectancy": "58.1"
    },
    {
      "Country": "Eritrea",
      "Year": "2000",
      "Alcohol": "0.83",
      "Life.expectancy": "45.3"
    },
    {
      "Country": "Estonia",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "77.6"
    },
    {
      "Country": "Estonia",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "77.3"
    },
    {
      "Country": "Estonia",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "76.9"
    },
    {
      "Country": "Estonia",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "76.3"
    },
    {
      "Country": "Estonia",
      "Year": "2011",
      "Alcohol": "0.01",
      "Life.expectancy": "76.1"
    },
    {
      "Country": "Estonia",
      "Year": "2010",
      "Alcohol": "14.97",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "Estonia",
      "Year": "2009",
      "Alcohol": "15.04",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Estonia",
      "Year": "2008",
      "Alcohol": "16.99",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Estonia",
      "Year": "2007",
      "Alcohol": "17.87",
      "Life.expectancy": "73"
    },
    {
      "Country": "Estonia",
      "Year": "2006",
      "Alcohol": "16.58",
      "Life.expectancy": "73"
    },
    {
      "Country": "Estonia",
      "Year": "2005",
      "Alcohol": "15.52",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Estonia",
      "Year": "2004",
      "Alcohol": "15.07",
      "Life.expectancy": "72.3"
    },
    {
      "Country": "Estonia",
      "Year": "2003",
      "Alcohol": "11.64",
      "Life.expectancy": "71.9"
    },
    {
      "Country": "Estonia",
      "Year": "2002",
      "Alcohol": "11.48",
      "Life.expectancy": "71.2"
    },
    {
      "Country": "Estonia",
      "Year": "2001",
      "Alcohol": "0.01",
      "Life.expectancy": "78"
    },
    {
      "Country": "Estonia",
      "Year": "2000",
      "Alcohol": "0.01",
      "Life.expectancy": "78"
    },
    {
      "Country": "Ethiopia",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "64.8"
    },
    {
      "Country": "Ethiopia",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "64.2"
    },
    {
      "Country": "Ethiopia",
      "Year": "2013",
      "Alcohol": "1.86",
      "Life.expectancy": "63.7"
    },
    {
      "Country": "Ethiopia",
      "Year": "2012",
      "Alcohol": "1.84",
      "Life.expectancy": "63.3"
    },
    {
      "Country": "Ethiopia",
      "Year": "2011",
      "Alcohol": "1.32",
      "Life.expectancy": "62.6"
    },
    {
      "Country": "Ethiopia",
      "Year": "2010",
      "Alcohol": "1.34",
      "Life.expectancy": "61.8"
    },
    {
      "Country": "Ethiopia",
      "Year": "2009",
      "Alcohol": "1.17",
      "Life.expectancy": "68"
    },
    {
      "Country": "Ethiopia",
      "Year": "2008",
      "Alcohol": "1.13",
      "Life.expectancy": "59.8"
    },
    {
      "Country": "Ethiopia",
      "Year": "2007",
      "Alcohol": "1.06",
      "Life.expectancy": "58.5"
    },
    {
      "Country": "Ethiopia",
      "Year": "2006",
      "Alcohol": "1.22",
      "Life.expectancy": "57.2"
    },
    {
      "Country": "Ethiopia",
      "Year": "2005",
      "Alcohol": "0.99",
      "Life.expectancy": "56"
    },
    {
      "Country": "Ethiopia",
      "Year": "2004",
      "Alcohol": "0.86",
      "Life.expectancy": "55"
    },
    {
      "Country": "Ethiopia",
      "Year": "2003",
      "Alcohol": "0.79",
      "Life.expectancy": "54"
    },
    {
      "Country": "Ethiopia",
      "Year": "2002",
      "Alcohol": "0.8",
      "Life.expectancy": "53.2"
    },
    {
      "Country": "Ethiopia",
      "Year": "2001",
      "Alcohol": "0.85",
      "Life.expectancy": "52.5"
    },
    {
      "Country": "Ethiopia",
      "Year": "2000",
      "Alcohol": "0.88",
      "Life.expectancy": "51.2"
    },
    {
      "Country": "Fiji",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "69.9"
    },
    {
      "Country": "Fiji",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "69.7"
    },
    {
      "Country": "Fiji",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "69.6"
    },
    {
      "Country": "Fiji",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "69.4"
    },
    {
      "Country": "Fiji",
      "Year": "2011",
      "Alcohol": "0.01",
      "Life.expectancy": "69.2"
    },
    {
      "Country": "Fiji",
      "Year": "2010",
      "Alcohol": "2.25",
      "Life.expectancy": "69.1"
    },
    {
      "Country": "Fiji",
      "Year": "2009",
      "Alcohol": "2.31",
      "Life.expectancy": "68.9"
    },
    {
      "Country": "Fiji",
      "Year": "2008",
      "Alcohol": "1.95",
      "Life.expectancy": "68.7"
    },
    {
      "Country": "Fiji",
      "Year": "2007",
      "Alcohol": "2.09",
      "Life.expectancy": "68.6"
    },
    {
      "Country": "Fiji",
      "Year": "2006",
      "Alcohol": "2.06",
      "Life.expectancy": "68.5"
    },
    {
      "Country": "Fiji",
      "Year": "2005",
      "Alcohol": "2.02",
      "Life.expectancy": "68.3"
    },
    {
      "Country": "Fiji",
      "Year": "2004",
      "Alcohol": "1.63",
      "Life.expectancy": "68.1"
    },
    {
      "Country": "Fiji",
      "Year": "2003",
      "Alcohol": "1.76",
      "Life.expectancy": "68"
    },
    {
      "Country": "Fiji",
      "Year": "2002",
      "Alcohol": "1.85",
      "Life.expectancy": "67.9"
    },
    {
      "Country": "Fiji",
      "Year": "2001",
      "Alcohol": "1.93",
      "Life.expectancy": "67.8"
    },
    {
      "Country": "Fiji",
      "Year": "2000",
      "Alcohol": "2.05",
      "Life.expectancy": "67.7"
    },
    {
      "Country": "Finland",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "Finland",
      "Year": "2014",
      "Alcohol": "8.8",
      "Life.expectancy": "89"
    },
    {
      "Country": "Finland",
      "Year": "2013",
      "Alcohol": "8.97",
      "Life.expectancy": "87"
    },
    {
      "Country": "Finland",
      "Year": "2012",
      "Alcohol": "9.24",
      "Life.expectancy": "84"
    },
    {
      "Country": "Finland",
      "Year": "2011",
      "Alcohol": "9.81",
      "Life.expectancy": "83"
    },
    {
      "Country": "Finland",
      "Year": "2010",
      "Alcohol": "9.72",
      "Life.expectancy": "79.9"
    },
    {
      "Country": "Finland",
      "Year": "2009",
      "Alcohol": "9.96",
      "Life.expectancy": "79.7"
    },
    {
      "Country": "Finland",
      "Year": "2008",
      "Alcohol": "10.26",
      "Life.expectancy": "79.6"
    },
    {
      "Country": "Finland",
      "Year": "2007",
      "Alcohol": "10.45",
      "Life.expectancy": "79.3"
    },
    {
      "Country": "Finland",
      "Year": "2006",
      "Alcohol": "10.15",
      "Life.expectancy": "79.2"
    },
    {
      "Country": "Finland",
      "Year": "2005",
      "Alcohol": "9.95",
      "Life.expectancy": "78.9"
    },
    {
      "Country": "Finland",
      "Year": "2004",
      "Alcohol": "9.89",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "Finland",
      "Year": "2003",
      "Alcohol": "9.31",
      "Life.expectancy": "78.4"
    },
    {
      "Country": "Finland",
      "Year": "2002",
      "Alcohol": "9.25",
      "Life.expectancy": "78.1"
    },
    {
      "Country": "Finland",
      "Year": "2001",
      "Alcohol": "8.94",
      "Life.expectancy": "78"
    },
    {
      "Country": "Finland",
      "Year": "2000",
      "Alcohol": "8.59",
      "Life.expectancy": "77.5"
    },
    {
      "Country": "France",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "82.4"
    },
    {
      "Country": "France",
      "Year": "2014",
      "Alcohol": "11.5",
      "Life.expectancy": "82.2"
    },
    {
      "Country": "France",
      "Year": "2013",
      "Alcohol": "11.1",
      "Life.expectancy": "82"
    },
    {
      "Country": "France",
      "Year": "2012",
      "Alcohol": "11.5",
      "Life.expectancy": "81.5"
    },
    {
      "Country": "France",
      "Year": "2011",
      "Alcohol": "11.8",
      "Life.expectancy": "81.7"
    },
    {
      "Country": "France",
      "Year": "2010",
      "Alcohol": "11.7",
      "Life.expectancy": "81.3"
    },
    {
      "Country": "France",
      "Year": "2009",
      "Alcohol": "11.8",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "France",
      "Year": "2008",
      "Alcohol": "11.9",
      "Life.expectancy": "89"
    },
    {
      "Country": "France",
      "Year": "2007",
      "Alcohol": "12.2",
      "Life.expectancy": "89"
    },
    {
      "Country": "France",
      "Year": "2006",
      "Alcohol": "12.4",
      "Life.expectancy": "86"
    },
    {
      "Country": "France",
      "Year": "2005",
      "Alcohol": "12.2",
      "Life.expectancy": "81"
    },
    {
      "Country": "France",
      "Year": "2004",
      "Alcohol": "13.18",
      "Life.expectancy": "82"
    },
    {
      "Country": "France",
      "Year": "2003",
      "Alcohol": "13.49",
      "Life.expectancy": "79.3"
    },
    {
      "Country": "France",
      "Year": "2002",
      "Alcohol": "13.78",
      "Life.expectancy": "79.2"
    },
    {
      "Country": "France",
      "Year": "2001",
      "Alcohol": "13.89",
      "Life.expectancy": "79"
    },
    {
      "Country": "France",
      "Year": "2000",
      "Alcohol": "13.63",
      "Life.expectancy": "78.8"
    },
    {
      "Country": "Gabon",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "66"
    },
    {
      "Country": "Gabon",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "65.5"
    },
    {
      "Country": "Gabon",
      "Year": "2013",
      "Alcohol": "8.86",
      "Life.expectancy": "64.6"
    },
    {
      "Country": "Gabon",
      "Year": "2012",
      "Alcohol": "8.3",
      "Life.expectancy": "63.5"
    },
    {
      "Country": "Gabon",
      "Year": "2011",
      "Alcohol": "8.9",
      "Life.expectancy": "62.8"
    },
    {
      "Country": "Gabon",
      "Year": "2010",
      "Alcohol": "8.85",
      "Life.expectancy": "62.3"
    },
    {
      "Country": "Gabon",
      "Year": "2009",
      "Alcohol": "8.64",
      "Life.expectancy": "61.7"
    },
    {
      "Country": "Gabon",
      "Year": "2008",
      "Alcohol": "8.75",
      "Life.expectancy": "61.6"
    },
    {
      "Country": "Gabon",
      "Year": "2007",
      "Alcohol": "9.02",
      "Life.expectancy": "61.6"
    },
    {
      "Country": "Gabon",
      "Year": "2006",
      "Alcohol": "8.01",
      "Life.expectancy": "61.4"
    },
    {
      "Country": "Gabon",
      "Year": "2005",
      "Alcohol": "7.72",
      "Life.expectancy": "65"
    },
    {
      "Country": "Gabon",
      "Year": "2004",
      "Alcohol": "8.13",
      "Life.expectancy": "59.7"
    },
    {
      "Country": "Gabon",
      "Year": "2003",
      "Alcohol": "6.47",
      "Life.expectancy": "59.7"
    },
    {
      "Country": "Gabon",
      "Year": "2002",
      "Alcohol": "8.34",
      "Life.expectancy": "59.7"
    },
    {
      "Country": "Gabon",
      "Year": "2001",
      "Alcohol": "9.29",
      "Life.expectancy": "59.8"
    },
    {
      "Country": "Gabon",
      "Year": "2000",
      "Alcohol": "8.87",
      "Life.expectancy": "61"
    },
    {
      "Country": "Gambia",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "61.1"
    },
    {
      "Country": "Gambia",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "68"
    },
    {
      "Country": "Gambia",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "66"
    },
    {
      "Country": "Gambia",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "62"
    },
    {
      "Country": "Gambia",
      "Year": "2011",
      "Alcohol": "3.41",
      "Life.expectancy": "59.8"
    },
    {
      "Country": "Gambia",
      "Year": "2010",
      "Alcohol": "3.48",
      "Life.expectancy": "59.3"
    },
    {
      "Country": "Gambia",
      "Year": "2009",
      "Alcohol": "2.99",
      "Life.expectancy": "59"
    },
    {
      "Country": "Gambia",
      "Year": "2008",
      "Alcohol": "2.79",
      "Life.expectancy": "58.7"
    },
    {
      "Country": "Gambia",
      "Year": "2007",
      "Alcohol": "2.64",
      "Life.expectancy": "58.5"
    },
    {
      "Country": "Gambia",
      "Year": "2006",
      "Alcohol": "2.93",
      "Life.expectancy": "58.2"
    },
    {
      "Country": "Gambia",
      "Year": "2005",
      "Alcohol": "2.26",
      "Life.expectancy": "57.7"
    },
    {
      "Country": "Gambia",
      "Year": "2004",
      "Alcohol": "2.51",
      "Life.expectancy": "57.3"
    },
    {
      "Country": "Gambia",
      "Year": "2003",
      "Alcohol": "2.47",
      "Life.expectancy": "57"
    },
    {
      "Country": "Gambia",
      "Year": "2002",
      "Alcohol": "2.08",
      "Life.expectancy": "56.6"
    },
    {
      "Country": "Gambia",
      "Year": "2001",
      "Alcohol": "2.25",
      "Life.expectancy": "56.3"
    },
    {
      "Country": "Gambia",
      "Year": "2000",
      "Alcohol": "2.18",
      "Life.expectancy": "55.9"
    },
    {
      "Country": "Georgia",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Georgia",
      "Year": "2014",
      "Alcohol": "6.13",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Georgia",
      "Year": "2013",
      "Alcohol": "5.91",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Georgia",
      "Year": "2012",
      "Alcohol": "7.71",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Georgia",
      "Year": "2011",
      "Alcohol": "8.14",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Georgia",
      "Year": "2010",
      "Alcohol": "7.24",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Georgia",
      "Year": "2009",
      "Alcohol": "6.66",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Georgia",
      "Year": "2008",
      "Alcohol": "7.17",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Georgia",
      "Year": "2007",
      "Alcohol": "8.65",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Georgia",
      "Year": "2006",
      "Alcohol": "6.18",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Georgia",
      "Year": "2005",
      "Alcohol": "4.7",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Georgia",
      "Year": "2004",
      "Alcohol": "3.74",
      "Life.expectancy": "72.3"
    },
    {
      "Country": "Georgia",
      "Year": "2003",
      "Alcohol": "3.36",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Georgia",
      "Year": "2002",
      "Alcohol": "2.72",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "Georgia",
      "Year": "2001",
      "Alcohol": "2.76",
      "Life.expectancy": "73"
    },
    {
      "Country": "Georgia",
      "Year": "2000",
      "Alcohol": "3.28",
      "Life.expectancy": "71.8"
    },
    {
      "Country": "Germany",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "81"
    },
    {
      "Country": "Germany",
      "Year": "2014",
      "Alcohol": "11.03",
      "Life.expectancy": "89"
    },
    {
      "Country": "Germany",
      "Year": "2013",
      "Alcohol": "10.94",
      "Life.expectancy": "86"
    },
    {
      "Country": "Germany",
      "Year": "2012",
      "Alcohol": "11.18",
      "Life.expectancy": "86"
    },
    {
      "Country": "Germany",
      "Year": "2011",
      "Alcohol": "11.2",
      "Life.expectancy": "85"
    },
    {
      "Country": "Germany",
      "Year": "2010",
      "Alcohol": "11.2",
      "Life.expectancy": "81"
    },
    {
      "Country": "Germany",
      "Year": "2009",
      "Alcohol": "11.22",
      "Life.expectancy": "80"
    },
    {
      "Country": "Germany",
      "Year": "2008",
      "Alcohol": "11.36",
      "Life.expectancy": "79.9"
    },
    {
      "Country": "Germany",
      "Year": "2007",
      "Alcohol": "11.5",
      "Life.expectancy": "79.8"
    },
    {
      "Country": "Germany",
      "Year": "2006",
      "Alcohol": "11.76",
      "Life.expectancy": "79.6"
    },
    {
      "Country": "Germany",
      "Year": "2005",
      "Alcohol": "11.67",
      "Life.expectancy": "79.2"
    },
    {
      "Country": "Germany",
      "Year": "2004",
      "Alcohol": "11.83",
      "Life.expectancy": "79.1"
    },
    {
      "Country": "Germany",
      "Year": "2003",
      "Alcohol": "11.92",
      "Life.expectancy": "78.5"
    },
    {
      "Country": "Germany",
      "Year": "2002",
      "Alcohol": "12.25",
      "Life.expectancy": "78.4"
    },
    {
      "Country": "Germany",
      "Year": "2001",
      "Alcohol": "12.46",
      "Life.expectancy": "78.3"
    },
    {
      "Country": "Germany",
      "Year": "2000",
      "Alcohol": "12.91",
      "Life.expectancy": "78"
    },
    {
      "Country": "Ghana",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "62.4"
    },
    {
      "Country": "Ghana",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "62.1"
    },
    {
      "Country": "Ghana",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "61.9"
    },
    {
      "Country": "Ghana",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "61.6"
    },
    {
      "Country": "Ghana",
      "Year": "2011",
      "Alcohol": "1.64",
      "Life.expectancy": "61.2"
    },
    {
      "Country": "Ghana",
      "Year": "2010",
      "Alcohol": "1.69",
      "Life.expectancy": "69"
    },
    {
      "Country": "Ghana",
      "Year": "2009",
      "Alcohol": "1.76",
      "Life.expectancy": "66"
    },
    {
      "Country": "Ghana",
      "Year": "2008",
      "Alcohol": "1.78",
      "Life.expectancy": "63"
    },
    {
      "Country": "Ghana",
      "Year": "2007",
      "Alcohol": "1.25",
      "Life.expectancy": "59.9"
    },
    {
      "Country": "Ghana",
      "Year": "2006",
      "Alcohol": "1.7",
      "Life.expectancy": "59.4"
    },
    {
      "Country": "Ghana",
      "Year": "2005",
      "Alcohol": "1.5",
      "Life.expectancy": "58.9"
    },
    {
      "Country": "Ghana",
      "Year": "2004",
      "Alcohol": "1.46",
      "Life.expectancy": "58.3"
    },
    {
      "Country": "Ghana",
      "Year": "2003",
      "Alcohol": "1.53",
      "Life.expectancy": "57.9"
    },
    {
      "Country": "Ghana",
      "Year": "2002",
      "Alcohol": "1.6",
      "Life.expectancy": "57.6"
    },
    {
      "Country": "Ghana",
      "Year": "2001",
      "Alcohol": "1.49",
      "Life.expectancy": "57.4"
    },
    {
      "Country": "Ghana",
      "Year": "2000",
      "Alcohol": "1.6",
      "Life.expectancy": "57.2"
    },
    {
      "Country": "Greece",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "81"
    },
    {
      "Country": "Greece",
      "Year": "2014",
      "Alcohol": "7.53",
      "Life.expectancy": "88"
    },
    {
      "Country": "Greece",
      "Year": "2013",
      "Alcohol": "7.46",
      "Life.expectancy": "86"
    },
    {
      "Country": "Greece",
      "Year": "2012",
      "Alcohol": "8.2",
      "Life.expectancy": "84"
    },
    {
      "Country": "Greece",
      "Year": "2011",
      "Alcohol": "8.02",
      "Life.expectancy": "85"
    },
    {
      "Country": "Greece",
      "Year": "2010",
      "Alcohol": "9",
      "Life.expectancy": "83"
    },
    {
      "Country": "Greece",
      "Year": "2009",
      "Alcohol": "9.08",
      "Life.expectancy": "80"
    },
    {
      "Country": "Greece",
      "Year": "2008",
      "Alcohol": "9.51",
      "Life.expectancy": "79.9"
    },
    {
      "Country": "Greece",
      "Year": "2007",
      "Alcohol": "9.67",
      "Life.expectancy": "79.4"
    },
    {
      "Country": "Greece",
      "Year": "2006",
      "Alcohol": "9.42",
      "Life.expectancy": "79.7"
    },
    {
      "Country": "Greece",
      "Year": "2005",
      "Alcohol": "9.95",
      "Life.expectancy": "79.3"
    },
    {
      "Country": "Greece",
      "Year": "2004",
      "Alcohol": "9.56",
      "Life.expectancy": "79.2"
    },
    {
      "Country": "Greece",
      "Year": "2003",
      "Alcohol": "9.46",
      "Life.expectancy": "79.1"
    },
    {
      "Country": "Greece",
      "Year": "2002",
      "Alcohol": "8.09",
      "Life.expectancy": "79"
    },
    {
      "Country": "Greece",
      "Year": "2001",
      "Alcohol": "8.62",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "Greece",
      "Year": "2000",
      "Alcohol": "8.48",
      "Life.expectancy": "78.2"
    },
    {
      "Country": "Grenada",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Grenada",
      "Year": "2014",
      "Alcohol": "8.42",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Grenada",
      "Year": "2013",
      "Alcohol": "8.25",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Grenada",
      "Year": "2012",
      "Alcohol": "8.07",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Grenada",
      "Year": "2011",
      "Alcohol": "7.84",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Grenada",
      "Year": "2010",
      "Alcohol": "7.91",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Grenada",
      "Year": "2009",
      "Alcohol": "8.42",
      "Life.expectancy": "72.4"
    },
    {
      "Country": "Grenada",
      "Year": "2008",
      "Alcohol": "8.92",
      "Life.expectancy": "72.1"
    },
    {
      "Country": "Grenada",
      "Year": "2007",
      "Alcohol": "9.06",
      "Life.expectancy": "71.9"
    },
    {
      "Country": "Grenada",
      "Year": "2006",
      "Alcohol": "9.06",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "Grenada",
      "Year": "2005",
      "Alcohol": "8.8",
      "Life.expectancy": "71.5"
    },
    {
      "Country": "Grenada",
      "Year": "2004",
      "Alcohol": "8.43",
      "Life.expectancy": "73"
    },
    {
      "Country": "Grenada",
      "Year": "2003",
      "Alcohol": "9.75",
      "Life.expectancy": "71.1"
    },
    {
      "Country": "Grenada",
      "Year": "2002",
      "Alcohol": "10.71",
      "Life.expectancy": "79"
    },
    {
      "Country": "Grenada",
      "Year": "2001",
      "Alcohol": "9.61",
      "Life.expectancy": "77"
    },
    {
      "Country": "Grenada",
      "Year": "2000",
      "Alcohol": "9.4",
      "Life.expectancy": "74"
    },
    {
      "Country": "Guatemala",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "71.9"
    },
    {
      "Country": "Guatemala",
      "Year": "2014",
      "Alcohol": "1.88",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "Guatemala",
      "Year": "2013",
      "Alcohol": "1.93",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "Guatemala",
      "Year": "2012",
      "Alcohol": "2.02",
      "Life.expectancy": "71.3"
    },
    {
      "Country": "Guatemala",
      "Year": "2011",
      "Alcohol": "2.16",
      "Life.expectancy": "71.1"
    },
    {
      "Country": "Guatemala",
      "Year": "2010",
      "Alcohol": "2.14",
      "Life.expectancy": "77"
    },
    {
      "Country": "Guatemala",
      "Year": "2009",
      "Alcohol": "2.14",
      "Life.expectancy": "76"
    },
    {
      "Country": "Guatemala",
      "Year": "2008",
      "Alcohol": "2.21",
      "Life.expectancy": "79"
    },
    {
      "Country": "Guatemala",
      "Year": "2007",
      "Alcohol": "2.4",
      "Life.expectancy": "75"
    },
    {
      "Country": "Guatemala",
      "Year": "2006",
      "Alcohol": "2.38",
      "Life.expectancy": "69.7"
    },
    {
      "Country": "Guatemala",
      "Year": "2005",
      "Alcohol": "2.35",
      "Life.expectancy": "69.2"
    },
    {
      "Country": "Guatemala",
      "Year": "2004",
      "Alcohol": "2.4",
      "Life.expectancy": "69.6"
    },
    {
      "Country": "Guatemala",
      "Year": "2003",
      "Alcohol": "2.45",
      "Life.expectancy": "69.4"
    },
    {
      "Country": "Guatemala",
      "Year": "2002",
      "Alcohol": "2.41",
      "Life.expectancy": "69.3"
    },
    {
      "Country": "Guatemala",
      "Year": "2001",
      "Alcohol": "2.53",
      "Life.expectancy": "68.4"
    },
    {
      "Country": "Guatemala",
      "Year": "2000",
      "Alcohol": "2.63",
      "Life.expectancy": "67.7"
    },
    {
      "Country": "Guinea",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "59"
    },
    {
      "Country": "Guinea",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "58.1"
    },
    {
      "Country": "Guinea",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "58.8"
    },
    {
      "Country": "Guinea",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "58.4"
    },
    {
      "Country": "Guinea",
      "Year": "2011",
      "Alcohol": "0.22",
      "Life.expectancy": "58.1"
    },
    {
      "Country": "Guinea",
      "Year": "2010",
      "Alcohol": "0.2",
      "Life.expectancy": "57.8"
    },
    {
      "Country": "Guinea",
      "Year": "2009",
      "Alcohol": "0.18",
      "Life.expectancy": "57.3"
    },
    {
      "Country": "Guinea",
      "Year": "2008",
      "Alcohol": "0.21",
      "Life.expectancy": "56.8"
    },
    {
      "Country": "Guinea",
      "Year": "2007",
      "Alcohol": "0.19",
      "Life.expectancy": "56.4"
    },
    {
      "Country": "Guinea",
      "Year": "2006",
      "Alcohol": "0.16",
      "Life.expectancy": "55.6"
    },
    {
      "Country": "Guinea",
      "Year": "2005",
      "Alcohol": "0.21",
      "Life.expectancy": "54.7"
    },
    {
      "Country": "Guinea",
      "Year": "2004",
      "Alcohol": "0.34",
      "Life.expectancy": "54"
    },
    {
      "Country": "Guinea",
      "Year": "2003",
      "Alcohol": "0.18",
      "Life.expectancy": "53.3"
    },
    {
      "Country": "Guinea",
      "Year": "2002",
      "Alcohol": "0.21",
      "Life.expectancy": "52.9"
    },
    {
      "Country": "Guinea",
      "Year": "2001",
      "Alcohol": "0.17",
      "Life.expectancy": "52.5"
    },
    {
      "Country": "Guinea",
      "Year": "2000",
      "Alcohol": "0.17",
      "Life.expectancy": "52.5"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "58.9"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "58.4"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "58.1"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "57.6"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2011",
      "Alcohol": "3.57",
      "Life.expectancy": "57.1"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2010",
      "Alcohol": "3.21",
      "Life.expectancy": "56.7"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2009",
      "Alcohol": "2.55",
      "Life.expectancy": "56.3"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2008",
      "Alcohol": "2.64",
      "Life.expectancy": "55.6"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2007",
      "Alcohol": "2.98",
      "Life.expectancy": "55"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2006",
      "Alcohol": "3.22",
      "Life.expectancy": "54.4"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2005",
      "Alcohol": "3.1",
      "Life.expectancy": "53.9"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2004",
      "Alcohol": "2.58",
      "Life.expectancy": "53.5"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2003",
      "Alcohol": "2.16",
      "Life.expectancy": "53"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2002",
      "Alcohol": "2.47",
      "Life.expectancy": "52.8"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2001",
      "Alcohol": "2.55",
      "Life.expectancy": "52.5"
    },
    {
      "Country": "Guinea-Bissau",
      "Year": "2000",
      "Alcohol": "2.84",
      "Life.expectancy": "52.1"
    },
    {
      "Country": "Guyana",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "66.2"
    },
    {
      "Country": "Guyana",
      "Year": "2014",
      "Alcohol": "7.64",
      "Life.expectancy": "66"
    },
    {
      "Country": "Guyana",
      "Year": "2013",
      "Alcohol": "7.56",
      "Life.expectancy": "65.9"
    },
    {
      "Country": "Guyana",
      "Year": "2012",
      "Alcohol": "7.57",
      "Life.expectancy": "65.8"
    },
    {
      "Country": "Guyana",
      "Year": "2011",
      "Alcohol": "7.56",
      "Life.expectancy": "65.6"
    },
    {
      "Country": "Guyana",
      "Year": "2010",
      "Alcohol": "7.52",
      "Life.expectancy": "65.9"
    },
    {
      "Country": "Guyana",
      "Year": "2009",
      "Alcohol": "7.49",
      "Life.expectancy": "66.1"
    },
    {
      "Country": "Guyana",
      "Year": "2008",
      "Alcohol": "7.32",
      "Life.expectancy": "66.3"
    },
    {
      "Country": "Guyana",
      "Year": "2007",
      "Alcohol": "7.2",
      "Life.expectancy": "65.7"
    },
    {
      "Country": "Guyana",
      "Year": "2006",
      "Alcohol": "7.04",
      "Life.expectancy": "65.2"
    },
    {
      "Country": "Guyana",
      "Year": "2005",
      "Alcohol": "7.35",
      "Life.expectancy": "65"
    },
    {
      "Country": "Guyana",
      "Year": "2004",
      "Alcohol": "7.84",
      "Life.expectancy": "65.1"
    },
    {
      "Country": "Guyana",
      "Year": "2003",
      "Alcohol": "7.93",
      "Life.expectancy": "65.3"
    },
    {
      "Country": "Guyana",
      "Year": "2002",
      "Alcohol": "7.73",
      "Life.expectancy": "65.3"
    },
    {
      "Country": "Guyana",
      "Year": "2001",
      "Alcohol": "6.71",
      "Life.expectancy": "65.4"
    },
    {
      "Country": "Guyana",
      "Year": "2000",
      "Alcohol": "6.63",
      "Life.expectancy": "65.4"
    },
    {
      "Country": "Haiti",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "63.5"
    },
    {
      "Country": "Haiti",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "63.1"
    },
    {
      "Country": "Haiti",
      "Year": "2013",
      "Alcohol": "5.68",
      "Life.expectancy": "62.7"
    },
    {
      "Country": "Haiti",
      "Year": "2012",
      "Alcohol": "5.68",
      "Life.expectancy": "62.3"
    },
    {
      "Country": "Haiti",
      "Year": "2011",
      "Alcohol": "5.68",
      "Life.expectancy": "62.3"
    },
    {
      "Country": "Haiti",
      "Year": "2010",
      "Alcohol": "5.76",
      "Life.expectancy": "36.3"
    },
    {
      "Country": "Haiti",
      "Year": "2009",
      "Alcohol": "5.85",
      "Life.expectancy": "62.5"
    },
    {
      "Country": "Haiti",
      "Year": "2008",
      "Alcohol": "5.95",
      "Life.expectancy": "62.1"
    },
    {
      "Country": "Haiti",
      "Year": "2007",
      "Alcohol": "6.08",
      "Life.expectancy": "61.8"
    },
    {
      "Country": "Haiti",
      "Year": "2006",
      "Alcohol": "6.18",
      "Life.expectancy": "61.1"
    },
    {
      "Country": "Haiti",
      "Year": "2005",
      "Alcohol": "5.57",
      "Life.expectancy": "65"
    },
    {
      "Country": "Haiti",
      "Year": "2004",
      "Alcohol": "6.1",
      "Life.expectancy": "58.7"
    },
    {
      "Country": "Haiti",
      "Year": "2003",
      "Alcohol": "6.64",
      "Life.expectancy": "59.7"
    },
    {
      "Country": "Haiti",
      "Year": "2002",
      "Alcohol": "6.1",
      "Life.expectancy": "59.3"
    },
    {
      "Country": "Haiti",
      "Year": "2001",
      "Alcohol": "6.22",
      "Life.expectancy": "58.9"
    },
    {
      "Country": "Haiti",
      "Year": "2000",
      "Alcohol": "4.79",
      "Life.expectancy": "58.6"
    },
    {
      "Country": "Honduras",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Honduras",
      "Year": "2014",
      "Alcohol": "2.87",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Honduras",
      "Year": "2013",
      "Alcohol": "3.11",
      "Life.expectancy": "74.3"
    },
    {
      "Country": "Honduras",
      "Year": "2012",
      "Alcohol": "3.11",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Honduras",
      "Year": "2011",
      "Alcohol": "3.1",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Honduras",
      "Year": "2010",
      "Alcohol": "3.1",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Honduras",
      "Year": "2009",
      "Alcohol": "3.08",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Honduras",
      "Year": "2008",
      "Alcohol": "3.14",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Honduras",
      "Year": "2007",
      "Alcohol": "3.16",
      "Life.expectancy": "73"
    },
    {
      "Country": "Honduras",
      "Year": "2006",
      "Alcohol": "3.23",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Honduras",
      "Year": "2005",
      "Alcohol": "3.23",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Honduras",
      "Year": "2004",
      "Alcohol": "3.02",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "Honduras",
      "Year": "2003",
      "Alcohol": "3.04",
      "Life.expectancy": "71.9"
    },
    {
      "Country": "Honduras",
      "Year": "2002",
      "Alcohol": "3.09",
      "Life.expectancy": "71.6"
    },
    {
      "Country": "Honduras",
      "Year": "2001",
      "Alcohol": "2.74",
      "Life.expectancy": "71.3"
    },
    {
      "Country": "Honduras",
      "Year": "2000",
      "Alcohol": "2.61",
      "Life.expectancy": "71"
    },
    {
      "Country": "Hungary",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "75.8"
    },
    {
      "Country": "Hungary",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "Hungary",
      "Year": "2013",
      "Alcohol": "10.88",
      "Life.expectancy": "75.5"
    },
    {
      "Country": "Hungary",
      "Year": "2012",
      "Alcohol": "11.27",
      "Life.expectancy": "75"
    },
    {
      "Country": "Hungary",
      "Year": "2011",
      "Alcohol": "11.51",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Hungary",
      "Year": "2010",
      "Alcohol": "10.78",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Hungary",
      "Year": "2009",
      "Alcohol": "11.46",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Hungary",
      "Year": "2008",
      "Alcohol": "11.64",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Hungary",
      "Year": "2007",
      "Alcohol": "12.55",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Hungary",
      "Year": "2006",
      "Alcohol": "13.16",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Hungary",
      "Year": "2005",
      "Alcohol": "12.94",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Hungary",
      "Year": "2004",
      "Alcohol": "13.28",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Hungary",
      "Year": "2003",
      "Alcohol": "13.24",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Hungary",
      "Year": "2002",
      "Alcohol": "13.29",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Hungary",
      "Year": "2001",
      "Alcohol": "13.18",
      "Life.expectancy": "72.3"
    },
    {
      "Country": "Hungary",
      "Year": "2000",
      "Alcohol": "12.22",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "Iceland",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "82.7"
    },
    {
      "Country": "Iceland",
      "Year": "2014",
      "Alcohol": "7.45",
      "Life.expectancy": "82.5"
    },
    {
      "Country": "Iceland",
      "Year": "2013",
      "Alcohol": "7.31",
      "Life.expectancy": "82.4"
    },
    {
      "Country": "Iceland",
      "Year": "2012",
      "Alcohol": "7.81",
      "Life.expectancy": "82.5"
    },
    {
      "Country": "Iceland",
      "Year": "2011",
      "Alcohol": "8.13",
      "Life.expectancy": "82.1"
    },
    {
      "Country": "Iceland",
      "Year": "2010",
      "Alcohol": "8.25",
      "Life.expectancy": "81.8"
    },
    {
      "Country": "Iceland",
      "Year": "2009",
      "Alcohol": "10.22",
      "Life.expectancy": "81.6"
    },
    {
      "Country": "Iceland",
      "Year": "2008",
      "Alcohol": "8.49",
      "Life.expectancy": "81.4"
    },
    {
      "Country": "Iceland",
      "Year": "2007",
      "Alcohol": "7.53",
      "Life.expectancy": "81.3"
    },
    {
      "Country": "Iceland",
      "Year": "2006",
      "Alcohol": "7.2",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "Iceland",
      "Year": "2005",
      "Alcohol": "7.05",
      "Life.expectancy": "81"
    },
    {
      "Country": "Iceland",
      "Year": "2004",
      "Alcohol": "6.79",
      "Life.expectancy": "88"
    },
    {
      "Country": "Iceland",
      "Year": "2003",
      "Alcohol": "6.61",
      "Life.expectancy": "87"
    },
    {
      "Country": "Iceland",
      "Year": "2002",
      "Alcohol": "6.61",
      "Life.expectancy": "84"
    },
    {
      "Country": "Iceland",
      "Year": "2001",
      "Alcohol": "6.37",
      "Life.expectancy": "80"
    },
    {
      "Country": "Iceland",
      "Year": "2000",
      "Alcohol": "6.17",
      "Life.expectancy": "79.7"
    },
    {
      "Country": "India",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "68.3"
    },
    {
      "Country": "India",
      "Year": "2014",
      "Alcohol": "3.07",
      "Life.expectancy": "68"
    },
    {
      "Country": "India",
      "Year": "2013",
      "Alcohol": "3.11",
      "Life.expectancy": "67.6"
    },
    {
      "Country": "India",
      "Year": "2012",
      "Alcohol": "3.1",
      "Life.expectancy": "67.3"
    },
    {
      "Country": "India",
      "Year": "2011",
      "Alcohol": "3",
      "Life.expectancy": "66.8"
    },
    {
      "Country": "India",
      "Year": "2010",
      "Alcohol": "2.77",
      "Life.expectancy": "66.4"
    },
    {
      "Country": "India",
      "Year": "2009",
      "Alcohol": "2.5",
      "Life.expectancy": "66"
    },
    {
      "Country": "India",
      "Year": "2008",
      "Alcohol": "1.93",
      "Life.expectancy": "65.5"
    },
    {
      "Country": "India",
      "Year": "2007",
      "Alcohol": "1.59",
      "Life.expectancy": "65.2"
    },
    {
      "Country": "India",
      "Year": "2006",
      "Alcohol": "1.37",
      "Life.expectancy": "64.8"
    },
    {
      "Country": "India",
      "Year": "2005",
      "Alcohol": "1.27",
      "Life.expectancy": "64.4"
    },
    {
      "Country": "India",
      "Year": "2004",
      "Alcohol": "1.2",
      "Life.expectancy": "64"
    },
    {
      "Country": "India",
      "Year": "2003",
      "Alcohol": "1.19",
      "Life.expectancy": "63.7"
    },
    {
      "Country": "India",
      "Year": "2002",
      "Alcohol": "1.1",
      "Life.expectancy": "63.3"
    },
    {
      "Country": "India",
      "Year": "2001",
      "Alcohol": "1",
      "Life.expectancy": "62.9"
    },
    {
      "Country": "India",
      "Year": "2000",
      "Alcohol": "0.93",
      "Life.expectancy": "62.5"
    },
    {
      "Country": "Indonesia",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "69.1"
    },
    {
      "Country": "Indonesia",
      "Year": "2014",
      "Alcohol": "0.09",
      "Life.expectancy": "68.9"
    },
    {
      "Country": "Indonesia",
      "Year": "2013",
      "Alcohol": "0.09",
      "Life.expectancy": "68.7"
    },
    {
      "Country": "Indonesia",
      "Year": "2012",
      "Alcohol": "0.08",
      "Life.expectancy": "68.5"
    },
    {
      "Country": "Indonesia",
      "Year": "2011",
      "Alcohol": "0.08",
      "Life.expectancy": "68.3"
    },
    {
      "Country": "Indonesia",
      "Year": "2010",
      "Alcohol": "0.08",
      "Life.expectancy": "68.1"
    },
    {
      "Country": "Indonesia",
      "Year": "2009",
      "Alcohol": "0.08",
      "Life.expectancy": "67.9"
    },
    {
      "Country": "Indonesia",
      "Year": "2008",
      "Alcohol": "0.07",
      "Life.expectancy": "67.7"
    },
    {
      "Country": "Indonesia",
      "Year": "2007",
      "Alcohol": "0.06",
      "Life.expectancy": "67.5"
    },
    {
      "Country": "Indonesia",
      "Year": "2006",
      "Alcohol": "0.06",
      "Life.expectancy": "67.3"
    },
    {
      "Country": "Indonesia",
      "Year": "2005",
      "Alcohol": "0.06",
      "Life.expectancy": "67.2"
    },
    {
      "Country": "Indonesia",
      "Year": "2004",
      "Alcohol": "0.06",
      "Life.expectancy": "65.3"
    },
    {
      "Country": "Indonesia",
      "Year": "2003",
      "Alcohol": "0.05",
      "Life.expectancy": "66.9"
    },
    {
      "Country": "Indonesia",
      "Year": "2002",
      "Alcohol": "0.05",
      "Life.expectancy": "66.7"
    },
    {
      "Country": "Indonesia",
      "Year": "2001",
      "Alcohol": "0.06",
      "Life.expectancy": "66.5"
    },
    {
      "Country": "Indonesia",
      "Year": "2000",
      "Alcohol": "0.06",
      "Life.expectancy": "66.3"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "75.5"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "75.1"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2011",
      "Alcohol": "0.03",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2010",
      "Alcohol": "0.03",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2009",
      "Alcohol": "0.03",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2008",
      "Alcohol": "0.02",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2007",
      "Alcohol": "0.02",
      "Life.expectancy": "72.4"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2006",
      "Alcohol": "0.02",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2005",
      "Alcohol": "0.01",
      "Life.expectancy": "72"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2004",
      "Alcohol": "0.01",
      "Life.expectancy": "71.8"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2003",
      "Alcohol": "0.01",
      "Life.expectancy": "75"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2002",
      "Alcohol": "0.01",
      "Life.expectancy": "71.2"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2001",
      "Alcohol": "0.01",
      "Life.expectancy": "78"
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "Year": "2000",
      "Alcohol": "0.01",
      "Life.expectancy": "73"
    },
    {
      "Country": "Iraq",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "68.9"
    },
    {
      "Country": "Iraq",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "67.9"
    },
    {
      "Country": "Iraq",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "69.5"
    },
    {
      "Country": "Iraq",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "76"
    },
    {
      "Country": "Iraq",
      "Year": "2011",
      "Alcohol": "0.17",
      "Life.expectancy": "77"
    },
    {
      "Country": "Iraq",
      "Year": "2010",
      "Alcohol": "0.19",
      "Life.expectancy": "76"
    },
    {
      "Country": "Iraq",
      "Year": "2009",
      "Alcohol": "0.2",
      "Life.expectancy": "74"
    },
    {
      "Country": "Iraq",
      "Year": "2008",
      "Alcohol": "0.17",
      "Life.expectancy": "69.3"
    },
    {
      "Country": "Iraq",
      "Year": "2007",
      "Alcohol": "0.14",
      "Life.expectancy": "65.9"
    },
    {
      "Country": "Iraq",
      "Year": "2006",
      "Alcohol": "0.03",
      "Life.expectancy": "64.7"
    },
    {
      "Country": "Iraq",
      "Year": "2005",
      "Alcohol": "0.18",
      "Life.expectancy": "66.8"
    },
    {
      "Country": "Iraq",
      "Year": "2004",
      "Alcohol": "0.32",
      "Life.expectancy": "67.2"
    },
    {
      "Country": "Iraq",
      "Year": "2003",
      "Alcohol": "0.07",
      "Life.expectancy": "66.5"
    },
    {
      "Country": "Iraq",
      "Year": "2002",
      "Alcohol": "0.15",
      "Life.expectancy": "74"
    },
    {
      "Country": "Iraq",
      "Year": "2001",
      "Alcohol": "0.17",
      "Life.expectancy": "72"
    },
    {
      "Country": "Iraq",
      "Year": "2000",
      "Alcohol": "0.2",
      "Life.expectancy": "70"
    },
    {
      "Country": "Ireland",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "81.4"
    },
    {
      "Country": "Ireland",
      "Year": "2014",
      "Alcohol": "10.75",
      "Life.expectancy": "81.2"
    },
    {
      "Country": "Ireland",
      "Year": "2013",
      "Alcohol": "10.49",
      "Life.expectancy": "81"
    },
    {
      "Country": "Ireland",
      "Year": "2012",
      "Alcohol": "11.49",
      "Life.expectancy": "85"
    },
    {
      "Country": "Ireland",
      "Year": "2011",
      "Alcohol": "11.72",
      "Life.expectancy": "84"
    },
    {
      "Country": "Ireland",
      "Year": "2010",
      "Alcohol": "11.88",
      "Life.expectancy": "86"
    },
    {
      "Country": "Ireland",
      "Year": "2009",
      "Alcohol": "11.41",
      "Life.expectancy": "79.7"
    },
    {
      "Country": "Ireland",
      "Year": "2008",
      "Alcohol": "12.66",
      "Life.expectancy": "79.8"
    },
    {
      "Country": "Ireland",
      "Year": "2007",
      "Alcohol": "13.59",
      "Life.expectancy": "79.5"
    },
    {
      "Country": "Ireland",
      "Year": "2006",
      "Alcohol": "13.44",
      "Life.expectancy": "79"
    },
    {
      "Country": "Ireland",
      "Year": "2005",
      "Alcohol": "13.31",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "Ireland",
      "Year": "2004",
      "Alcohol": "13.32",
      "Life.expectancy": "78.3"
    },
    {
      "Country": "Ireland",
      "Year": "2003",
      "Alcohol": "13.24",
      "Life.expectancy": "78"
    },
    {
      "Country": "Ireland",
      "Year": "2002",
      "Alcohol": "14.17",
      "Life.expectancy": "77.4"
    },
    {
      "Country": "Ireland",
      "Year": "2001",
      "Alcohol": "14.27",
      "Life.expectancy": "77"
    },
    {
      "Country": "Ireland",
      "Year": "2000",
      "Alcohol": "14.07",
      "Life.expectancy": "76.4"
    },
    {
      "Country": "Israel",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "82.5"
    },
    {
      "Country": "Israel",
      "Year": "2014",
      "Alcohol": "2.62",
      "Life.expectancy": "82.2"
    },
    {
      "Country": "Israel",
      "Year": "2013",
      "Alcohol": "2.69",
      "Life.expectancy": "82.1"
    },
    {
      "Country": "Israel",
      "Year": "2012",
      "Alcohol": "2.78",
      "Life.expectancy": "81.8"
    },
    {
      "Country": "Israel",
      "Year": "2011",
      "Alcohol": "2.67",
      "Life.expectancy": "81.8"
    },
    {
      "Country": "Israel",
      "Year": "2010",
      "Alcohol": "2.63",
      "Life.expectancy": "81.7"
    },
    {
      "Country": "Israel",
      "Year": "2009",
      "Alcohol": "2.55",
      "Life.expectancy": "81.5"
    },
    {
      "Country": "Israel",
      "Year": "2008",
      "Alcohol": "2.47",
      "Life.expectancy": "81"
    },
    {
      "Country": "Israel",
      "Year": "2007",
      "Alcohol": "2.33",
      "Life.expectancy": "84"
    },
    {
      "Country": "Israel",
      "Year": "2006",
      "Alcohol": "2.23",
      "Life.expectancy": "84"
    },
    {
      "Country": "Israel",
      "Year": "2005",
      "Alcohol": "2.41",
      "Life.expectancy": "80"
    },
    {
      "Country": "Israel",
      "Year": "2004",
      "Alcohol": "2.23",
      "Life.expectancy": "81"
    },
    {
      "Country": "Israel",
      "Year": "2003",
      "Alcohol": "2.32",
      "Life.expectancy": "79.7"
    },
    {
      "Country": "Israel",
      "Year": "2002",
      "Alcohol": "2.47",
      "Life.expectancy": "79.3"
    },
    {
      "Country": "Israel",
      "Year": "2001",
      "Alcohol": "2.53",
      "Life.expectancy": "79.3"
    },
    {
      "Country": "Israel",
      "Year": "2000",
      "Alcohol": "2.53",
      "Life.expectancy": "78.9"
    },
    {
      "Country": "Italy",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "82.7"
    },
    {
      "Country": "Italy",
      "Year": "2014",
      "Alcohol": "7.56",
      "Life.expectancy": "82.5"
    },
    {
      "Country": "Italy",
      "Year": "2013",
      "Alcohol": "7.35",
      "Life.expectancy": "82.3"
    },
    {
      "Country": "Italy",
      "Year": "2012",
      "Alcohol": "7.49",
      "Life.expectancy": "82"
    },
    {
      "Country": "Italy",
      "Year": "2011",
      "Alcohol": "6.98",
      "Life.expectancy": "82"
    },
    {
      "Country": "Italy",
      "Year": "2010",
      "Alcohol": "6.95",
      "Life.expectancy": "81.8"
    },
    {
      "Country": "Italy",
      "Year": "2009",
      "Alcohol": "7.25",
      "Life.expectancy": "81.6"
    },
    {
      "Country": "Italy",
      "Year": "2008",
      "Alcohol": "7.96",
      "Life.expectancy": "81.5"
    },
    {
      "Country": "Italy",
      "Year": "2007",
      "Alcohol": "8.37",
      "Life.expectancy": "81.3"
    },
    {
      "Country": "Italy",
      "Year": "2006",
      "Alcohol": "8.44",
      "Life.expectancy": "81.2"
    },
    {
      "Country": "Italy",
      "Year": "2005",
      "Alcohol": "8.65",
      "Life.expectancy": "88"
    },
    {
      "Country": "Italy",
      "Year": "2004",
      "Alcohol": "8.98",
      "Life.expectancy": "89"
    },
    {
      "Country": "Italy",
      "Year": "2003",
      "Alcohol": "9.3",
      "Life.expectancy": "79.9"
    },
    {
      "Country": "Italy",
      "Year": "2002",
      "Alcohol": "9.25",
      "Life.expectancy": "80"
    },
    {
      "Country": "Italy",
      "Year": "2001",
      "Alcohol": "9.69",
      "Life.expectancy": "79.8"
    },
    {
      "Country": "Italy",
      "Year": "2000",
      "Alcohol": "9.78",
      "Life.expectancy": "79.4"
    },
    {
      "Country": "Jamaica",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "76.2"
    },
    {
      "Country": "Jamaica",
      "Year": "2014",
      "Alcohol": "3.83",
      "Life.expectancy": "75.8"
    },
    {
      "Country": "Jamaica",
      "Year": "2013",
      "Alcohol": "3.79",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "Jamaica",
      "Year": "2012",
      "Alcohol": "3.65",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "Jamaica",
      "Year": "2011",
      "Alcohol": "3.58",
      "Life.expectancy": "75.2"
    },
    {
      "Country": "Jamaica",
      "Year": "2010",
      "Alcohol": "3.55",
      "Life.expectancy": "75"
    },
    {
      "Country": "Jamaica",
      "Year": "2009",
      "Alcohol": "3.33",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Jamaica",
      "Year": "2008",
      "Alcohol": "3.51",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Jamaica",
      "Year": "2007",
      "Alcohol": "3.64",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Jamaica",
      "Year": "2006",
      "Alcohol": "3.63",
      "Life.expectancy": "74"
    },
    {
      "Country": "Jamaica",
      "Year": "2005",
      "Alcohol": "3.59",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Jamaica",
      "Year": "2004",
      "Alcohol": "3.67",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Jamaica",
      "Year": "2003",
      "Alcohol": "3.48",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Jamaica",
      "Year": "2002",
      "Alcohol": "3.76",
      "Life.expectancy": "73"
    },
    {
      "Country": "Jamaica",
      "Year": "2001",
      "Alcohol": "3.89",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Jamaica",
      "Year": "2000",
      "Alcohol": "3.46",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Japan",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "83.7"
    },
    {
      "Country": "Japan",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "83.5"
    },
    {
      "Country": "Japan",
      "Year": "2013",
      "Alcohol": "7.55",
      "Life.expectancy": "83.5"
    },
    {
      "Country": "Japan",
      "Year": "2012",
      "Alcohol": "7.39",
      "Life.expectancy": "83.3"
    },
    {
      "Country": "Japan",
      "Year": "2011",
      "Alcohol": "7.39",
      "Life.expectancy": "82.5"
    },
    {
      "Country": "Japan",
      "Year": "2010",
      "Alcohol": "6.9",
      "Life.expectancy": "83"
    },
    {
      "Country": "Japan",
      "Year": "2009",
      "Alcohol": "7.09",
      "Life.expectancy": "83"
    },
    {
      "Country": "Japan",
      "Year": "2008",
      "Alcohol": "7.11",
      "Life.expectancy": "82.7"
    },
    {
      "Country": "Japan",
      "Year": "2007",
      "Alcohol": "7.29",
      "Life.expectancy": "82.6"
    },
    {
      "Country": "Japan",
      "Year": "2006",
      "Alcohol": "7.49",
      "Life.expectancy": "82.4"
    },
    {
      "Country": "Japan",
      "Year": "2005",
      "Alcohol": "7.99",
      "Life.expectancy": "82"
    },
    {
      "Country": "Japan",
      "Year": "2004",
      "Alcohol": "7.7",
      "Life.expectancy": "82.1"
    },
    {
      "Country": "Japan",
      "Year": "2003",
      "Alcohol": "7.83",
      "Life.expectancy": "81.9"
    },
    {
      "Country": "Japan",
      "Year": "2002",
      "Alcohol": "7.87",
      "Life.expectancy": "81.8"
    },
    {
      "Country": "Japan",
      "Year": "2001",
      "Alcohol": "8.03",
      "Life.expectancy": "81.5"
    },
    {
      "Country": "Japan",
      "Year": "2000",
      "Alcohol": "7.97",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "Jordan",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Jordan",
      "Year": "2014",
      "Alcohol": "0.41",
      "Life.expectancy": "74"
    },
    {
      "Country": "Jordan",
      "Year": "2013",
      "Alcohol": "0.4",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Jordan",
      "Year": "2012",
      "Alcohol": "0.41",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Jordan",
      "Year": "2011",
      "Alcohol": "0.43",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Jordan",
      "Year": "2010",
      "Alcohol": "0.51",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Jordan",
      "Year": "2009",
      "Alcohol": "0.59",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Jordan",
      "Year": "2008",
      "Alcohol": "0.61",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Jordan",
      "Year": "2007",
      "Alcohol": "0.6",
      "Life.expectancy": "73"
    },
    {
      "Country": "Jordan",
      "Year": "2006",
      "Alcohol": "0.59",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Jordan",
      "Year": "2005",
      "Alcohol": "0.55",
      "Life.expectancy": "72.4"
    },
    {
      "Country": "Jordan",
      "Year": "2004",
      "Alcohol": "0.54",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Jordan",
      "Year": "2003",
      "Alcohol": "0.54",
      "Life.expectancy": "72.3"
    },
    {
      "Country": "Jordan",
      "Year": "2002",
      "Alcohol": "0.54",
      "Life.expectancy": "72.1"
    },
    {
      "Country": "Jordan",
      "Year": "2001",
      "Alcohol": "0.55",
      "Life.expectancy": "71.9"
    },
    {
      "Country": "Jordan",
      "Year": "2000",
      "Alcohol": "0.49",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "72"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2014",
      "Alcohol": "6.29",
      "Life.expectancy": "69.9"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2013",
      "Alcohol": "6.48",
      "Life.expectancy": "69.5"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2012",
      "Alcohol": "6.82",
      "Life.expectancy": "69.1"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2011",
      "Alcohol": "6.63",
      "Life.expectancy": "68.5"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2010",
      "Alcohol": "6.83",
      "Life.expectancy": "67.8"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2009",
      "Alcohol": "6.64",
      "Life.expectancy": "67.8"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2008",
      "Alcohol": "7.6",
      "Life.expectancy": "66.6"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2007",
      "Alcohol": "7.44",
      "Life.expectancy": "65.3"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2006",
      "Alcohol": "7.08",
      "Life.expectancy": "65"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2005",
      "Alcohol": "6.94",
      "Life.expectancy": "64.6"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2004",
      "Alcohol": "6.55",
      "Life.expectancy": "64.7"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2003",
      "Alcohol": "6.58",
      "Life.expectancy": "64.4"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2002",
      "Alcohol": "5.99",
      "Life.expectancy": "64.7"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2001",
      "Alcohol": "5.75",
      "Life.expectancy": "64.4"
    },
    {
      "Country": "Kazakhstan",
      "Year": "2000",
      "Alcohol": "6",
      "Life.expectancy": "63.9"
    },
    {
      "Country": "Kenya",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "63.4"
    },
    {
      "Country": "Kenya",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "62.9"
    },
    {
      "Country": "Kenya",
      "Year": "2013",
      "Alcohol": "1.84",
      "Life.expectancy": "62.6"
    },
    {
      "Country": "Kenya",
      "Year": "2012",
      "Alcohol": "1.81",
      "Life.expectancy": "62.1"
    },
    {
      "Country": "Kenya",
      "Year": "2011",
      "Alcohol": "1.8",
      "Life.expectancy": "61.2"
    },
    {
      "Country": "Kenya",
      "Year": "2010",
      "Alcohol": "1.73",
      "Life.expectancy": "63"
    },
    {
      "Country": "Kenya",
      "Year": "2009",
      "Alcohol": "1.86",
      "Life.expectancy": "59.1"
    },
    {
      "Country": "Kenya",
      "Year": "2008",
      "Alcohol": "1.71",
      "Life.expectancy": "57.9"
    },
    {
      "Country": "Kenya",
      "Year": "2007",
      "Alcohol": "1.97",
      "Life.expectancy": "56.8"
    },
    {
      "Country": "Kenya",
      "Year": "2006",
      "Alcohol": "1.76",
      "Life.expectancy": "55.3"
    },
    {
      "Country": "Kenya",
      "Year": "2005",
      "Alcohol": "1.82",
      "Life.expectancy": "54.1"
    },
    {
      "Country": "Kenya",
      "Year": "2004",
      "Alcohol": "1.43",
      "Life.expectancy": "53"
    },
    {
      "Country": "Kenya",
      "Year": "2003",
      "Alcohol": "1.49",
      "Life.expectancy": "52.4"
    },
    {
      "Country": "Kenya",
      "Year": "2002",
      "Alcohol": "1.66",
      "Life.expectancy": "52.1"
    },
    {
      "Country": "Kenya",
      "Year": "2001",
      "Alcohol": "1.63",
      "Life.expectancy": "51.9"
    },
    {
      "Country": "Kenya",
      "Year": "2000",
      "Alcohol": "1.51",
      "Life.expectancy": "51.9"
    },
    {
      "Country": "Kiribati",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "66.3"
    },
    {
      "Country": "Kiribati",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "66.1"
    },
    {
      "Country": "Kiribati",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "65.8"
    },
    {
      "Country": "Kiribati",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "65.7"
    },
    {
      "Country": "Kiribati",
      "Year": "2011",
      "Alcohol": "0.53",
      "Life.expectancy": "65.5"
    },
    {
      "Country": "Kiribati",
      "Year": "2010",
      "Alcohol": "0.48",
      "Life.expectancy": "65.3"
    },
    {
      "Country": "Kiribati",
      "Year": "2009",
      "Alcohol": "0.54",
      "Life.expectancy": "65.2"
    },
    {
      "Country": "Kiribati",
      "Year": "2008",
      "Alcohol": "0.46",
      "Life.expectancy": "65.1"
    },
    {
      "Country": "Kiribati",
      "Year": "2007",
      "Alcohol": "0.68",
      "Life.expectancy": "65"
    },
    {
      "Country": "Kiribati",
      "Year": "2006",
      "Alcohol": "0.76",
      "Life.expectancy": "65"
    },
    {
      "Country": "Kiribati",
      "Year": "2005",
      "Alcohol": "0.6",
      "Life.expectancy": "64.9"
    },
    {
      "Country": "Kiribati",
      "Year": "2004",
      "Alcohol": "0.48",
      "Life.expectancy": "64.8"
    },
    {
      "Country": "Kiribati",
      "Year": "2003",
      "Alcohol": "0.5",
      "Life.expectancy": "64.7"
    },
    {
      "Country": "Kiribati",
      "Year": "2002",
      "Alcohol": "0.49",
      "Life.expectancy": "64.6"
    },
    {
      "Country": "Kiribati",
      "Year": "2001",
      "Alcohol": "0.6",
      "Life.expectancy": "64.3"
    },
    {
      "Country": "Kiribati",
      "Year": "2000",
      "Alcohol": "0.46",
      "Life.expectancy": "64.1"
    },
    {
      "Country": "Kuwait",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Kuwait",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Kuwait",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Kuwait",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "74.3"
    },
    {
      "Country": "Kuwait",
      "Year": "2011",
      "Alcohol": "0.02",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Kuwait",
      "Year": "2010",
      "Alcohol": "0.01",
      "Life.expectancy": "74"
    },
    {
      "Country": "Kuwait",
      "Year": "2009",
      "Alcohol": "0.1",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Kuwait",
      "Year": "2008",
      "Alcohol": "0.03",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Kuwait",
      "Year": "2007",
      "Alcohol": "0.03",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Kuwait",
      "Year": "2006",
      "Alcohol": "0.01",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Kuwait",
      "Year": "2005",
      "Alcohol": "0.01",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Kuwait",
      "Year": "2004",
      "Alcohol": "0.02",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Kuwait",
      "Year": "2003",
      "Alcohol": "0.03",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Kuwait",
      "Year": "2002",
      "Alcohol": "0.01",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Kuwait",
      "Year": "2001",
      "Alcohol": "0.01",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Kuwait",
      "Year": "2000",
      "Alcohol": "0.01",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "71.1"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "78"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "77"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "69.9"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2011",
      "Alcohol": "3.28",
      "Life.expectancy": "69.4"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2010",
      "Alcohol": "2.73",
      "Life.expectancy": "68.8"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2009",
      "Alcohol": "2.39",
      "Life.expectancy": "68.5"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2008",
      "Alcohol": "2.53",
      "Life.expectancy": "67.6"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2007",
      "Alcohol": "2.77",
      "Life.expectancy": "67.2"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2006",
      "Alcohol": "2.48",
      "Life.expectancy": "66.7"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2005",
      "Alcohol": "2.81",
      "Life.expectancy": "66.9"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2004",
      "Alcohol": "3.41",
      "Life.expectancy": "67.1"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2003",
      "Alcohol": "3.52",
      "Life.expectancy": "66.6"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2002",
      "Alcohol": "3.31",
      "Life.expectancy": "66.7"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2001",
      "Alcohol": "2.62",
      "Life.expectancy": "67.2"
    },
    {
      "Country": "Kyrgyzstan",
      "Year": "2000",
      "Alcohol": "2.13",
      "Life.expectancy": "66.6"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "65.7"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "65.3"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "64.9"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "64.4"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2011",
      "Alcohol": "5.39",
      "Life.expectancy": "64"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2010",
      "Alcohol": "5.95",
      "Life.expectancy": "63.6"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2009",
      "Alcohol": "5.18",
      "Life.expectancy": "63.1"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2008",
      "Alcohol": "5.1",
      "Life.expectancy": "62.6"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2007",
      "Alcohol": "5",
      "Life.expectancy": "62.1"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2006",
      "Alcohol": "3.69",
      "Life.expectancy": "61.5"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2005",
      "Alcohol": "3.68",
      "Life.expectancy": "61"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2004",
      "Alcohol": "3.53",
      "Life.expectancy": "64"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2003",
      "Alcohol": "3.41",
      "Life.expectancy": "59.8"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2002",
      "Alcohol": "3.33",
      "Life.expectancy": "59.3"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2001",
      "Alcohol": "3.13",
      "Life.expectancy": "58.7"
    },
    {
      "Country": "Lao People's Democratic Republic",
      "Year": "2000",
      "Alcohol": "5.16",
      "Life.expectancy": "58.1"
    },
    {
      "Country": "Latvia",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Latvia",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Latvia",
      "Year": "2013",
      "Alcohol": "10.37",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Latvia",
      "Year": "2012",
      "Alcohol": "10.21",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Latvia",
      "Year": "2011",
      "Alcohol": "10.14",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Latvia",
      "Year": "2010",
      "Alcohol": "9.8",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Latvia",
      "Year": "2009",
      "Alcohol": "9.85",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Latvia",
      "Year": "2008",
      "Alcohol": "11.84",
      "Life.expectancy": "71.9"
    },
    {
      "Country": "Latvia",
      "Year": "2007",
      "Alcohol": "12.12",
      "Life.expectancy": "78"
    },
    {
      "Country": "Latvia",
      "Year": "2006",
      "Alcohol": "10.4",
      "Life.expectancy": "75"
    },
    {
      "Country": "Latvia",
      "Year": "2005",
      "Alcohol": "9.92",
      "Life.expectancy": "76"
    },
    {
      "Country": "Latvia",
      "Year": "2004",
      "Alcohol": "8.81",
      "Life.expectancy": "71"
    },
    {
      "Country": "Latvia",
      "Year": "2003",
      "Alcohol": "8.24",
      "Life.expectancy": "78"
    },
    {
      "Country": "Latvia",
      "Year": "2002",
      "Alcohol": "7.44",
      "Life.expectancy": "73"
    },
    {
      "Country": "Latvia",
      "Year": "2001",
      "Alcohol": "6.68",
      "Life.expectancy": "69.9"
    },
    {
      "Country": "Latvia",
      "Year": "2000",
      "Alcohol": "7.13",
      "Life.expectancy": "71"
    },
    {
      "Country": "Lebanon",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Lebanon",
      "Year": "2014",
      "Alcohol": "1.32",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Lebanon",
      "Year": "2013",
      "Alcohol": "1.29",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Lebanon",
      "Year": "2012",
      "Alcohol": "1.53",
      "Life.expectancy": "75"
    },
    {
      "Country": "Lebanon",
      "Year": "2011",
      "Alcohol": "1.57",
      "Life.expectancy": "75"
    },
    {
      "Country": "Lebanon",
      "Year": "2010",
      "Alcohol": "1.58",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Lebanon",
      "Year": "2009",
      "Alcohol": "1.62",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Lebanon",
      "Year": "2008",
      "Alcohol": "1.67",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Lebanon",
      "Year": "2007",
      "Alcohol": "1.72",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Lebanon",
      "Year": "2006",
      "Alcohol": "1.82",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Lebanon",
      "Year": "2005",
      "Alcohol": "1.94",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Lebanon",
      "Year": "2004",
      "Alcohol": "2.1",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Lebanon",
      "Year": "2003",
      "Alcohol": "2.19",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Lebanon",
      "Year": "2002",
      "Alcohol": "1.98",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Lebanon",
      "Year": "2001",
      "Alcohol": "2.19",
      "Life.expectancy": "73"
    },
    {
      "Country": "Lebanon",
      "Year": "2000",
      "Alcohol": "2.26",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Lesotho",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "53.7"
    },
    {
      "Country": "Lesotho",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "52.1"
    },
    {
      "Country": "Lesotho",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "52.1"
    },
    {
      "Country": "Lesotho",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "52.2"
    },
    {
      "Country": "Lesotho",
      "Year": "2011",
      "Alcohol": "2.39",
      "Life.expectancy": "52.3"
    },
    {
      "Country": "Lesotho",
      "Year": "2010",
      "Alcohol": "2.71",
      "Life.expectancy": "51.1"
    },
    {
      "Country": "Lesotho",
      "Year": "2009",
      "Alcohol": "2.75",
      "Life.expectancy": "49.4"
    },
    {
      "Country": "Lesotho",
      "Year": "2008",
      "Alcohol": "2.75",
      "Life.expectancy": "47.8"
    },
    {
      "Country": "Lesotho",
      "Year": "2007",
      "Alcohol": "2.69",
      "Life.expectancy": "46.2"
    },
    {
      "Country": "Lesotho",
      "Year": "2006",
      "Alcohol": "2.61",
      "Life.expectancy": "45.3"
    },
    {
      "Country": "Lesotho",
      "Year": "2005",
      "Alcohol": "2.67",
      "Life.expectancy": "44.5"
    },
    {
      "Country": "Lesotho",
      "Year": "2004",
      "Alcohol": "1.8",
      "Life.expectancy": "44.8"
    },
    {
      "Country": "Lesotho",
      "Year": "2003",
      "Alcohol": "1.99",
      "Life.expectancy": "45.5"
    },
    {
      "Country": "Lesotho",
      "Year": "2002",
      "Alcohol": "2.95",
      "Life.expectancy": "46.4"
    },
    {
      "Country": "Lesotho",
      "Year": "2001",
      "Alcohol": "2.86",
      "Life.expectancy": "47.8"
    },
    {
      "Country": "Lesotho",
      "Year": "2000",
      "Alcohol": "3.1",
      "Life.expectancy": "49.3"
    },
    {
      "Country": "Liberia",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "61.4"
    },
    {
      "Country": "Liberia",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "58.1"
    },
    {
      "Country": "Liberia",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "61.1"
    },
    {
      "Country": "Liberia",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "67"
    },
    {
      "Country": "Liberia",
      "Year": "2011",
      "Alcohol": "3.72",
      "Life.expectancy": "62"
    },
    {
      "Country": "Liberia",
      "Year": "2010",
      "Alcohol": "3.64",
      "Life.expectancy": "59.7"
    },
    {
      "Country": "Liberia",
      "Year": "2009",
      "Alcohol": "3.75",
      "Life.expectancy": "59.2"
    },
    {
      "Country": "Liberia",
      "Year": "2008",
      "Alcohol": "3.88",
      "Life.expectancy": "58.6"
    },
    {
      "Country": "Liberia",
      "Year": "2007",
      "Alcohol": "4.03",
      "Life.expectancy": "57.9"
    },
    {
      "Country": "Liberia",
      "Year": "2006",
      "Alcohol": "4.05",
      "Life.expectancy": "56.7"
    },
    {
      "Country": "Liberia",
      "Year": "2005",
      "Alcohol": "4.19",
      "Life.expectancy": "55.3"
    },
    {
      "Country": "Liberia",
      "Year": "2004",
      "Alcohol": "4.24",
      "Life.expectancy": "54"
    },
    {
      "Country": "Liberia",
      "Year": "2003",
      "Alcohol": "4.21",
      "Life.expectancy": "50"
    },
    {
      "Country": "Liberia",
      "Year": "2002",
      "Alcohol": "4.27",
      "Life.expectancy": "56"
    },
    {
      "Country": "Liberia",
      "Year": "2001",
      "Alcohol": "4.4",
      "Life.expectancy": "51.5"
    },
    {
      "Country": "Liberia",
      "Year": "2000",
      "Alcohol": "4.46",
      "Life.expectancy": "51.9"
    },
    {
      "Country": "Libya",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Libya",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "72.4"
    },
    {
      "Country": "Libya",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Libya",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Libya",
      "Year": "2011",
      "Alcohol": "0.01",
      "Life.expectancy": "71.3"
    },
    {
      "Country": "Libya",
      "Year": "2010",
      "Alcohol": "0.01",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Libya",
      "Year": "2009",
      "Alcohol": "0.01",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Libya",
      "Year": "2008",
      "Alcohol": "0.01",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Libya",
      "Year": "2007",
      "Alcohol": "0.01",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Libya",
      "Year": "2006",
      "Alcohol": "0.01",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "Libya",
      "Year": "2005",
      "Alcohol": "0.01",
      "Life.expectancy": "71.9"
    },
    {
      "Country": "Libya",
      "Year": "2004",
      "Alcohol": "0.01",
      "Life.expectancy": "71.5"
    },
    {
      "Country": "Libya",
      "Year": "2003",
      "Alcohol": "0.01",
      "Life.expectancy": "71.3"
    },
    {
      "Country": "Libya",
      "Year": "2002",
      "Alcohol": "0.01",
      "Life.expectancy": "71.1"
    },
    {
      "Country": "Libya",
      "Year": "2001",
      "Alcohol": "0.01",
      "Life.expectancy": "71"
    },
    {
      "Country": "Libya",
      "Year": "2000",
      "Alcohol": "0.01",
      "Life.expectancy": "78"
    },
    {
      "Country": "Lithuania",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Lithuania",
      "Year": "2014",
      "Alcohol": "15.19",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Lithuania",
      "Year": "2013",
      "Alcohol": "15.04",
      "Life.expectancy": "73"
    },
    {
      "Country": "Lithuania",
      "Year": "2012",
      "Alcohol": "15.14",
      "Life.expectancy": "73"
    },
    {
      "Country": "Lithuania",
      "Year": "2011",
      "Alcohol": "12.66",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Lithuania",
      "Year": "2010",
      "Alcohol": "12.9",
      "Life.expectancy": "72.4"
    },
    {
      "Country": "Lithuania",
      "Year": "2009",
      "Alcohol": "12.4",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "Lithuania",
      "Year": "2008",
      "Alcohol": "13.3",
      "Life.expectancy": "71.1"
    },
    {
      "Country": "Lithuania",
      "Year": "2007",
      "Alcohol": "13.4",
      "Life.expectancy": "72"
    },
    {
      "Country": "Lithuania",
      "Year": "2006",
      "Alcohol": "12.7",
      "Life.expectancy": "76"
    },
    {
      "Country": "Lithuania",
      "Year": "2005",
      "Alcohol": "12.3",
      "Life.expectancy": "78"
    },
    {
      "Country": "Lithuania",
      "Year": "2004",
      "Alcohol": "12.1",
      "Life.expectancy": "71.6"
    },
    {
      "Country": "Lithuania",
      "Year": "2003",
      "Alcohol": "11.29",
      "Life.expectancy": "71.6"
    },
    {
      "Country": "Lithuania",
      "Year": "2002",
      "Alcohol": "11",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "Lithuania",
      "Year": "2001",
      "Alcohol": "10.2",
      "Life.expectancy": "71.2"
    },
    {
      "Country": "Lithuania",
      "Year": "2000",
      "Alcohol": "9.87",
      "Life.expectancy": "71.6"
    },
    {
      "Country": "Luxembourg",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "82"
    },
    {
      "Country": "Luxembourg",
      "Year": "2014",
      "Alcohol": "11.12",
      "Life.expectancy": "81.7"
    },
    {
      "Country": "Luxembourg",
      "Year": "2013",
      "Alcohol": "11.02",
      "Life.expectancy": "81.4"
    },
    {
      "Country": "Luxembourg",
      "Year": "2012",
      "Alcohol": "11.34",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "Luxembourg",
      "Year": "2011",
      "Alcohol": "11.5",
      "Life.expectancy": "88"
    },
    {
      "Country": "Luxembourg",
      "Year": "2010",
      "Alcohol": "11.36",
      "Life.expectancy": "86"
    },
    {
      "Country": "Luxembourg",
      "Year": "2009",
      "Alcohol": "11.42",
      "Life.expectancy": "83"
    },
    {
      "Country": "Luxembourg",
      "Year": "2008",
      "Alcohol": "11.53",
      "Life.expectancy": "80"
    },
    {
      "Country": "Luxembourg",
      "Year": "2007",
      "Alcohol": "11.75",
      "Life.expectancy": "79.7"
    },
    {
      "Country": "Luxembourg",
      "Year": "2006",
      "Alcohol": "11.98",
      "Life.expectancy": "79.4"
    },
    {
      "Country": "Luxembourg",
      "Year": "2005",
      "Alcohol": "11.84",
      "Life.expectancy": "78.8"
    },
    {
      "Country": "Luxembourg",
      "Year": "2004",
      "Alcohol": "12.42",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "Luxembourg",
      "Year": "2003",
      "Alcohol": "12.61",
      "Life.expectancy": "78.6"
    },
    {
      "Country": "Luxembourg",
      "Year": "2002",
      "Alcohol": "12.91",
      "Life.expectancy": "78.3"
    },
    {
      "Country": "Luxembourg",
      "Year": "2001",
      "Alcohol": "12.89",
      "Life.expectancy": "78"
    },
    {
      "Country": "Luxembourg",
      "Year": "2000",
      "Alcohol": "13.14",
      "Life.expectancy": "77.8"
    },
    {
      "Country": "Madagascar",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "65.5"
    },
    {
      "Country": "Madagascar",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "65.1"
    },
    {
      "Country": "Madagascar",
      "Year": "2013",
      "Alcohol": "0.87",
      "Life.expectancy": "64.7"
    },
    {
      "Country": "Madagascar",
      "Year": "2012",
      "Alcohol": "0.87",
      "Life.expectancy": "64.3"
    },
    {
      "Country": "Madagascar",
      "Year": "2011",
      "Alcohol": "0.97",
      "Life.expectancy": "63.8"
    },
    {
      "Country": "Madagascar",
      "Year": "2010",
      "Alcohol": "1.03",
      "Life.expectancy": "63.3"
    },
    {
      "Country": "Madagascar",
      "Year": "2009",
      "Alcohol": "0.91",
      "Life.expectancy": "62.8"
    },
    {
      "Country": "Madagascar",
      "Year": "2008",
      "Alcohol": "0.68",
      "Life.expectancy": "62.3"
    },
    {
      "Country": "Madagascar",
      "Year": "2007",
      "Alcohol": "0.71",
      "Life.expectancy": "61.9"
    },
    {
      "Country": "Madagascar",
      "Year": "2006",
      "Alcohol": "0.68",
      "Life.expectancy": "61.4"
    },
    {
      "Country": "Madagascar",
      "Year": "2005",
      "Alcohol": "0.72",
      "Life.expectancy": "69"
    },
    {
      "Country": "Madagascar",
      "Year": "2004",
      "Alcohol": "0.81",
      "Life.expectancy": "64"
    },
    {
      "Country": "Madagascar",
      "Year": "2003",
      "Alcohol": "0.93",
      "Life.expectancy": "59.9"
    },
    {
      "Country": "Madagascar",
      "Year": "2002",
      "Alcohol": "0.9",
      "Life.expectancy": "59.3"
    },
    {
      "Country": "Madagascar",
      "Year": "2001",
      "Alcohol": "1.05",
      "Life.expectancy": "58.7"
    },
    {
      "Country": "Madagascar",
      "Year": "2000",
      "Alcohol": "1.16",
      "Life.expectancy": "57.9"
    },
    {
      "Country": "Malawi",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "58.3"
    },
    {
      "Country": "Malawi",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "57.6"
    },
    {
      "Country": "Malawi",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "56.7"
    },
    {
      "Country": "Malawi",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "55.3"
    },
    {
      "Country": "Malawi",
      "Year": "2011",
      "Alcohol": "1.23",
      "Life.expectancy": "54.1"
    },
    {
      "Country": "Malawi",
      "Year": "2010",
      "Alcohol": "1.08",
      "Life.expectancy": "52.9"
    },
    {
      "Country": "Malawi",
      "Year": "2009",
      "Alcohol": "1.16",
      "Life.expectancy": "51.5"
    },
    {
      "Country": "Malawi",
      "Year": "2008",
      "Alcohol": "1.27",
      "Life.expectancy": "50"
    },
    {
      "Country": "Malawi",
      "Year": "2007",
      "Alcohol": "1.18",
      "Life.expectancy": "48.5"
    },
    {
      "Country": "Malawi",
      "Year": "2006",
      "Alcohol": "1.18",
      "Life.expectancy": "47.1"
    },
    {
      "Country": "Malawi",
      "Year": "2005",
      "Alcohol": "1.04",
      "Life.expectancy": "46"
    },
    {
      "Country": "Malawi",
      "Year": "2004",
      "Alcohol": "1.11",
      "Life.expectancy": "45.1"
    },
    {
      "Country": "Malawi",
      "Year": "2003",
      "Alcohol": "1.08",
      "Life.expectancy": "44.6"
    },
    {
      "Country": "Malawi",
      "Year": "2002",
      "Alcohol": "1.1",
      "Life.expectancy": "44"
    },
    {
      "Country": "Malawi",
      "Year": "2001",
      "Alcohol": "1.15",
      "Life.expectancy": "43.5"
    },
    {
      "Country": "Malawi",
      "Year": "2000",
      "Alcohol": "1.18",
      "Life.expectancy": "43.1"
    },
    {
      "Country": "Malaysia",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "75"
    },
    {
      "Country": "Malaysia",
      "Year": "2014",
      "Alcohol": "0.52",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Malaysia",
      "Year": "2013",
      "Alcohol": "0.53",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Malaysia",
      "Year": "2012",
      "Alcohol": "0.53",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Malaysia",
      "Year": "2011",
      "Alcohol": "0.51",
      "Life.expectancy": "74.3"
    },
    {
      "Country": "Malaysia",
      "Year": "2010",
      "Alcohol": "0.49",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Malaysia",
      "Year": "2009",
      "Alcohol": "0.47",
      "Life.expectancy": "74"
    },
    {
      "Country": "Malaysia",
      "Year": "2008",
      "Alcohol": "0.47",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Malaysia",
      "Year": "2007",
      "Alcohol": "0.43",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Malaysia",
      "Year": "2006",
      "Alcohol": "0.42",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Malaysia",
      "Year": "2005",
      "Alcohol": "0.46",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Malaysia",
      "Year": "2004",
      "Alcohol": "0.49",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Malaysia",
      "Year": "2003",
      "Alcohol": "0.48",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Malaysia",
      "Year": "2002",
      "Alcohol": "0.49",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Malaysia",
      "Year": "2001",
      "Alcohol": "0.53",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Malaysia",
      "Year": "2000",
      "Alcohol": "0.54",
      "Life.expectancy": "72.4"
    },
    {
      "Country": "Maldives",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "78.5"
    },
    {
      "Country": "Maldives",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "78.2"
    },
    {
      "Country": "Maldives",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "77.9"
    },
    {
      "Country": "Maldives",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "77.6"
    },
    {
      "Country": "Maldives",
      "Year": "2011",
      "Alcohol": "1.92",
      "Life.expectancy": "77.3"
    },
    {
      "Country": "Maldives",
      "Year": "2010",
      "Alcohol": "1.83",
      "Life.expectancy": "76.7"
    },
    {
      "Country": "Maldives",
      "Year": "2009",
      "Alcohol": "1.59",
      "Life.expectancy": "76.3"
    },
    {
      "Country": "Maldives",
      "Year": "2008",
      "Alcohol": "1.76",
      "Life.expectancy": "75.9"
    },
    {
      "Country": "Maldives",
      "Year": "2007",
      "Alcohol": "1.78",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Maldives",
      "Year": "2006",
      "Alcohol": "1.62",
      "Life.expectancy": "75"
    },
    {
      "Country": "Maldives",
      "Year": "2005",
      "Alcohol": "1.47",
      "Life.expectancy": "74.3"
    },
    {
      "Country": "Maldives",
      "Year": "2004",
      "Alcohol": "1.6",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Maldives",
      "Year": "2003",
      "Alcohol": "1.75",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Maldives",
      "Year": "2002",
      "Alcohol": "1.95",
      "Life.expectancy": "71.8"
    },
    {
      "Country": "Maldives",
      "Year": "2001",
      "Alcohol": "1.98",
      "Life.expectancy": "78"
    },
    {
      "Country": "Maldives",
      "Year": "2000",
      "Alcohol": "1.83",
      "Life.expectancy": "69.6"
    },
    {
      "Country": "Mali",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "58.2"
    },
    {
      "Country": "Mali",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "57.8"
    },
    {
      "Country": "Mali",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "57.3"
    },
    {
      "Country": "Mali",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "57.2"
    },
    {
      "Country": "Mali",
      "Year": "2011",
      "Alcohol": "0.61",
      "Life.expectancy": "56.8"
    },
    {
      "Country": "Mali",
      "Year": "2010",
      "Alcohol": "0.6",
      "Life.expectancy": "56.5"
    },
    {
      "Country": "Mali",
      "Year": "2009",
      "Alcohol": "0.59",
      "Life.expectancy": "56"
    },
    {
      "Country": "Mali",
      "Year": "2008",
      "Alcohol": "0.57",
      "Life.expectancy": "55.5"
    },
    {
      "Country": "Mali",
      "Year": "2007",
      "Alcohol": "0.55",
      "Life.expectancy": "55"
    },
    {
      "Country": "Mali",
      "Year": "2006",
      "Alcohol": "0.53",
      "Life.expectancy": "54.3"
    },
    {
      "Country": "Mali",
      "Year": "2005",
      "Alcohol": "0.55",
      "Life.expectancy": "53.6"
    },
    {
      "Country": "Mali",
      "Year": "2004",
      "Alcohol": "0.49",
      "Life.expectancy": "52.8"
    },
    {
      "Country": "Mali",
      "Year": "2003",
      "Alcohol": "0.54",
      "Life.expectancy": "52"
    },
    {
      "Country": "Mali",
      "Year": "2002",
      "Alcohol": "0.53",
      "Life.expectancy": "51.2"
    },
    {
      "Country": "Mali",
      "Year": "2001",
      "Alcohol": "0.51",
      "Life.expectancy": "55"
    },
    {
      "Country": "Mali",
      "Year": "2000",
      "Alcohol": "0.47",
      "Life.expectancy": "49.8"
    },
    {
      "Country": "Malta",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "81.7"
    },
    {
      "Country": "Malta",
      "Year": "2014",
      "Alcohol": "8.49",
      "Life.expectancy": "81.4"
    },
    {
      "Country": "Malta",
      "Year": "2013",
      "Alcohol": "8.58",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "Malta",
      "Year": "2012",
      "Alcohol": "7.67",
      "Life.expectancy": "81"
    },
    {
      "Country": "Malta",
      "Year": "2011",
      "Alcohol": "6.91",
      "Life.expectancy": "87"
    },
    {
      "Country": "Malta",
      "Year": "2010",
      "Alcohol": "7.91",
      "Life.expectancy": "83"
    },
    {
      "Country": "Malta",
      "Year": "2009",
      "Alcohol": "7.38",
      "Life.expectancy": "82"
    },
    {
      "Country": "Malta",
      "Year": "2008",
      "Alcohol": "7.14",
      "Life.expectancy": "80"
    },
    {
      "Country": "Malta",
      "Year": "2007",
      "Alcohol": "7.45",
      "Life.expectancy": "79.6"
    },
    {
      "Country": "Malta",
      "Year": "2006",
      "Alcohol": "8.84",
      "Life.expectancy": "79.3"
    },
    {
      "Country": "Malta",
      "Year": "2005",
      "Alcohol": "6.41",
      "Life.expectancy": "79"
    },
    {
      "Country": "Malta",
      "Year": "2004",
      "Alcohol": "6.53",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "Malta",
      "Year": "2003",
      "Alcohol": "6.7",
      "Life.expectancy": "78.5"
    },
    {
      "Country": "Malta",
      "Year": "2002",
      "Alcohol": "5.73",
      "Life.expectancy": "78.2"
    },
    {
      "Country": "Malta",
      "Year": "2001",
      "Alcohol": "5.62",
      "Life.expectancy": "77.8"
    },
    {
      "Country": "Malta",
      "Year": "2000",
      "Alcohol": "5.59",
      "Life.expectancy": "77.5"
    },
    {
      "Country": "Marshall Islands",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "0"
    },
    {
      "Country": "Mauritania",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "63.1"
    },
    {
      "Country": "Mauritania",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "63"
    },
    {
      "Country": "Mauritania",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "62.7"
    },
    {
      "Country": "Mauritania",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "62.5"
    },
    {
      "Country": "Mauritania",
      "Year": "2011",
      "Alcohol": "0.01",
      "Life.expectancy": "62.2"
    },
    {
      "Country": "Mauritania",
      "Year": "2010",
      "Alcohol": "0.01",
      "Life.expectancy": "62"
    },
    {
      "Country": "Mauritania",
      "Year": "2009",
      "Alcohol": "0.01",
      "Life.expectancy": "61.7"
    },
    {
      "Country": "Mauritania",
      "Year": "2008",
      "Alcohol": "0.02",
      "Life.expectancy": "61.4"
    },
    {
      "Country": "Mauritania",
      "Year": "2007",
      "Alcohol": "0.02",
      "Life.expectancy": "61.2"
    },
    {
      "Country": "Mauritania",
      "Year": "2006",
      "Alcohol": "0.01",
      "Life.expectancy": "69"
    },
    {
      "Country": "Mauritania",
      "Year": "2005",
      "Alcohol": "0.01",
      "Life.expectancy": "66"
    },
    {
      "Country": "Mauritania",
      "Year": "2004",
      "Alcohol": "0.01",
      "Life.expectancy": "64"
    },
    {
      "Country": "Mauritania",
      "Year": "2003",
      "Alcohol": "0.01",
      "Life.expectancy": "63"
    },
    {
      "Country": "Mauritania",
      "Year": "2002",
      "Alcohol": "0.02",
      "Life.expectancy": "62"
    },
    {
      "Country": "Mauritania",
      "Year": "2001",
      "Alcohol": "0.01",
      "Life.expectancy": "61"
    },
    {
      "Country": "Mauritania",
      "Year": "2000",
      "Alcohol": "0.03",
      "Life.expectancy": "60"
    },
    {
      "Country": "Mauritius",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Mauritius",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Mauritius",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Mauritius",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Mauritius",
      "Year": "2011",
      "Alcohol": "3.03",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Mauritius",
      "Year": "2010",
      "Alcohol": "2.95",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Mauritius",
      "Year": "2009",
      "Alcohol": "2.83",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Mauritius",
      "Year": "2008",
      "Alcohol": "2.49",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Mauritius",
      "Year": "2007",
      "Alcohol": "3.24",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Mauritius",
      "Year": "2006",
      "Alcohol": "3.73",
      "Life.expectancy": "71.8"
    },
    {
      "Country": "Mauritius",
      "Year": "2005",
      "Alcohol": "3.94",
      "Life.expectancy": "72.1"
    },
    {
      "Country": "Mauritius",
      "Year": "2004",
      "Alcohol": "4.16",
      "Life.expectancy": "71.9"
    },
    {
      "Country": "Mauritius",
      "Year": "2003",
      "Alcohol": "4.08",
      "Life.expectancy": "71.5"
    },
    {
      "Country": "Mauritius",
      "Year": "2002",
      "Alcohol": "4.14",
      "Life.expectancy": "71.5"
    },
    {
      "Country": "Mauritius",
      "Year": "2001",
      "Alcohol": "4.38",
      "Life.expectancy": "71.5"
    },
    {
      "Country": "Mauritius",
      "Year": "2000",
      "Alcohol": "4.6",
      "Life.expectancy": "71"
    },
    {
      "Country": "Mexico",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "76.7"
    },
    {
      "Country": "Mexico",
      "Year": "2014",
      "Alcohol": "5.26",
      "Life.expectancy": "76.6"
    },
    {
      "Country": "Mexico",
      "Year": "2013",
      "Alcohol": "5.23",
      "Life.expectancy": "76.6"
    },
    {
      "Country": "Mexico",
      "Year": "2012",
      "Alcohol": "5.29",
      "Life.expectancy": "76.3"
    },
    {
      "Country": "Mexico",
      "Year": "2011",
      "Alcohol": "5.3",
      "Life.expectancy": "76.1"
    },
    {
      "Country": "Mexico",
      "Year": "2010",
      "Alcohol": "5.21",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "Mexico",
      "Year": "2009",
      "Alcohol": "5.27",
      "Life.expectancy": "75.7"
    },
    {
      "Country": "Mexico",
      "Year": "2008",
      "Alcohol": "5.36",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "Mexico",
      "Year": "2007",
      "Alcohol": "5.35",
      "Life.expectancy": "76"
    },
    {
      "Country": "Mexico",
      "Year": "2006",
      "Alcohol": "5.11",
      "Life.expectancy": "75.8"
    },
    {
      "Country": "Mexico",
      "Year": "2005",
      "Alcohol": "4.93",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "Mexico",
      "Year": "2004",
      "Alcohol": "4.9",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Mexico",
      "Year": "2003",
      "Alcohol": "4.88",
      "Life.expectancy": "75"
    },
    {
      "Country": "Mexico",
      "Year": "2002",
      "Alcohol": "4.77",
      "Life.expectancy": "75"
    },
    {
      "Country": "Mexico",
      "Year": "2001",
      "Alcohol": "4.86",
      "Life.expectancy": "75"
    },
    {
      "Country": "Mexico",
      "Year": "2000",
      "Alcohol": "4.99",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "69.4"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2014",
      "Alcohol": "1.58",
      "Life.expectancy": "69.4"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2013",
      "Alcohol": "1.67",
      "Life.expectancy": "69.2"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2012",
      "Alcohol": "2.98",
      "Life.expectancy": "69"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2011",
      "Alcohol": "1.89",
      "Life.expectancy": "68.9"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2010",
      "Alcohol": "1.76",
      "Life.expectancy": "68.7"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2009",
      "Alcohol": "2.06",
      "Life.expectancy": "68.5"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2008",
      "Alcohol": "1.97",
      "Life.expectancy": "68.4"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2007",
      "Alcohol": "1.64",
      "Life.expectancy": "68.2"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2006",
      "Alcohol": "1.73",
      "Life.expectancy": "68"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2005",
      "Alcohol": "1.9",
      "Life.expectancy": "67.9"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2004",
      "Alcohol": "2.02",
      "Life.expectancy": "67.7"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2003",
      "Alcohol": "3.15",
      "Life.expectancy": "67.5"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2002",
      "Alcohol": "2.78",
      "Life.expectancy": "66.2"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2001",
      "Alcohol": "2.82",
      "Life.expectancy": "67.2"
    },
    {
      "Country": "Micronesia (Federated States of)",
      "Year": "2000",
      "Alcohol": "2.23",
      "Life.expectancy": "67"
    },
    {
      "Country": "Monaco",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "0"
    },
    {
      "Country": "Mongolia",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "68.8"
    },
    {
      "Country": "Mongolia",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "68.4"
    },
    {
      "Country": "Mongolia",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "68.1"
    },
    {
      "Country": "Mongolia",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "67.8"
    },
    {
      "Country": "Mongolia",
      "Year": "2011",
      "Alcohol": "0.01",
      "Life.expectancy": "67.3"
    },
    {
      "Country": "Mongolia",
      "Year": "2010",
      "Alcohol": "5.8",
      "Life.expectancy": "66.3"
    },
    {
      "Country": "Mongolia",
      "Year": "2009",
      "Alcohol": "4.61",
      "Life.expectancy": "66.9"
    },
    {
      "Country": "Mongolia",
      "Year": "2008",
      "Alcohol": "4.26",
      "Life.expectancy": "67.4"
    },
    {
      "Country": "Mongolia",
      "Year": "2007",
      "Alcohol": "3.79",
      "Life.expectancy": "65.9"
    },
    {
      "Country": "Mongolia",
      "Year": "2006",
      "Alcohol": "2.91",
      "Life.expectancy": "65"
    },
    {
      "Country": "Mongolia",
      "Year": "2005",
      "Alcohol": "2.75",
      "Life.expectancy": "64.5"
    },
    {
      "Country": "Mongolia",
      "Year": "2004",
      "Alcohol": "1.75",
      "Life.expectancy": "64"
    },
    {
      "Country": "Mongolia",
      "Year": "2003",
      "Alcohol": "1.31",
      "Life.expectancy": "64"
    },
    {
      "Country": "Mongolia",
      "Year": "2002",
      "Alcohol": "2.43",
      "Life.expectancy": "63.8"
    },
    {
      "Country": "Mongolia",
      "Year": "2001",
      "Alcohol": "2.87",
      "Life.expectancy": "63.2"
    },
    {
      "Country": "Mongolia",
      "Year": "2000",
      "Alcohol": "2.79",
      "Life.expectancy": "62.8"
    },
    {
      "Country": "Montenegro",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "76.1"
    },
    {
      "Country": "Montenegro",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "75.9"
    },
    {
      "Country": "Montenegro",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "75.8"
    },
    {
      "Country": "Montenegro",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "Montenegro",
      "Year": "2011",
      "Alcohol": "6.56",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Montenegro",
      "Year": "2010",
      "Alcohol": "6.56",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "Montenegro",
      "Year": "2009",
      "Alcohol": "6.45",
      "Life.expectancy": "75"
    },
    {
      "Country": "Montenegro",
      "Year": "2008",
      "Alcohol": "6.17",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Montenegro",
      "Year": "2007",
      "Alcohol": "4.98",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Montenegro",
      "Year": "2006",
      "Alcohol": "5.38",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Montenegro",
      "Year": "2005",
      "Alcohol": "0",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Montenegro",
      "Year": "2004",
      "Alcohol": "0.01",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Montenegro",
      "Year": "2003",
      "Alcohol": "0.01",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Montenegro",
      "Year": "2002",
      "Alcohol": "0.01",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Montenegro",
      "Year": "2001",
      "Alcohol": "0.01",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Montenegro",
      "Year": "2000",
      "Alcohol": "0.01",
      "Life.expectancy": "73"
    },
    {
      "Country": "Morocco",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "74.3"
    },
    {
      "Country": "Morocco",
      "Year": "2014",
      "Alcohol": "0.43",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Morocco",
      "Year": "2013",
      "Alcohol": "0.45",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Morocco",
      "Year": "2012",
      "Alcohol": "0.55",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Morocco",
      "Year": "2011",
      "Alcohol": "0.54",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Morocco",
      "Year": "2010",
      "Alcohol": "0.56",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Morocco",
      "Year": "2009",
      "Alcohol": "0.62",
      "Life.expectancy": "72.3"
    },
    {
      "Country": "Morocco",
      "Year": "2008",
      "Alcohol": "0.51",
      "Life.expectancy": "71.8"
    },
    {
      "Country": "Morocco",
      "Year": "2007",
      "Alcohol": "0.56",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "Morocco",
      "Year": "2006",
      "Alcohol": "0.58",
      "Life.expectancy": "71"
    },
    {
      "Country": "Morocco",
      "Year": "2005",
      "Alcohol": "0.47",
      "Life.expectancy": "77"
    },
    {
      "Country": "Morocco",
      "Year": "2004",
      "Alcohol": "0.56",
      "Life.expectancy": "72"
    },
    {
      "Country": "Morocco",
      "Year": "2003",
      "Alcohol": "0.58",
      "Life.expectancy": "69.9"
    },
    {
      "Country": "Morocco",
      "Year": "2002",
      "Alcohol": "0.46",
      "Life.expectancy": "69.5"
    },
    {
      "Country": "Morocco",
      "Year": "2001",
      "Alcohol": "0.46",
      "Life.expectancy": "69"
    },
    {
      "Country": "Morocco",
      "Year": "2000",
      "Alcohol": "0.45",
      "Life.expectancy": "68.6"
    },
    {
      "Country": "Mozambique",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "57.6"
    },
    {
      "Country": "Mozambique",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "56.7"
    },
    {
      "Country": "Mozambique",
      "Year": "2013",
      "Alcohol": "1.16",
      "Life.expectancy": "55.3"
    },
    {
      "Country": "Mozambique",
      "Year": "2012",
      "Alcohol": "1.19",
      "Life.expectancy": "54.8"
    },
    {
      "Country": "Mozambique",
      "Year": "2011",
      "Alcohol": "0.94",
      "Life.expectancy": "54.3"
    },
    {
      "Country": "Mozambique",
      "Year": "2010",
      "Alcohol": "0.96",
      "Life.expectancy": "54"
    },
    {
      "Country": "Mozambique",
      "Year": "2009",
      "Alcohol": "1.18",
      "Life.expectancy": "53.8"
    },
    {
      "Country": "Mozambique",
      "Year": "2008",
      "Alcohol": "1.48",
      "Life.expectancy": "53.2"
    },
    {
      "Country": "Mozambique",
      "Year": "2007",
      "Alcohol": "1.03",
      "Life.expectancy": "52.1"
    },
    {
      "Country": "Mozambique",
      "Year": "2006",
      "Alcohol": "1.2",
      "Life.expectancy": "51.2"
    },
    {
      "Country": "Mozambique",
      "Year": "2005",
      "Alcohol": "1.23",
      "Life.expectancy": "58"
    },
    {
      "Country": "Mozambique",
      "Year": "2004",
      "Alcohol": "1.54",
      "Life.expectancy": "54"
    },
    {
      "Country": "Mozambique",
      "Year": "2003",
      "Alcohol": "1.68",
      "Life.expectancy": "51"
    },
    {
      "Country": "Mozambique",
      "Year": "2002",
      "Alcohol": "2.16",
      "Life.expectancy": "49.8"
    },
    {
      "Country": "Mozambique",
      "Year": "2001",
      "Alcohol": "2.09",
      "Life.expectancy": "49.5"
    },
    {
      "Country": "Mozambique",
      "Year": "2000",
      "Alcohol": "1.14",
      "Life.expectancy": "49"
    },
    {
      "Country": "Myanmar",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "66.6"
    },
    {
      "Country": "Myanmar",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "66.4"
    },
    {
      "Country": "Myanmar",
      "Year": "2013",
      "Alcohol": "0.7",
      "Life.expectancy": "66.2"
    },
    {
      "Country": "Myanmar",
      "Year": "2012",
      "Alcohol": "0.55",
      "Life.expectancy": "65.9"
    },
    {
      "Country": "Myanmar",
      "Year": "2011",
      "Alcohol": "0.33",
      "Life.expectancy": "65.6"
    },
    {
      "Country": "Myanmar",
      "Year": "2010",
      "Alcohol": "0.3",
      "Life.expectancy": "65.4"
    },
    {
      "Country": "Myanmar",
      "Year": "2009",
      "Alcohol": "0.28",
      "Life.expectancy": "65.2"
    },
    {
      "Country": "Myanmar",
      "Year": "2008",
      "Alcohol": "0.3",
      "Life.expectancy": "59.2"
    },
    {
      "Country": "Myanmar",
      "Year": "2007",
      "Alcohol": "0.26",
      "Life.expectancy": "64.5"
    },
    {
      "Country": "Myanmar",
      "Year": "2006",
      "Alcohol": "0.28",
      "Life.expectancy": "64.2"
    },
    {
      "Country": "Myanmar",
      "Year": "2005",
      "Alcohol": "0.28",
      "Life.expectancy": "63.9"
    },
    {
      "Country": "Myanmar",
      "Year": "2004",
      "Alcohol": "0.44",
      "Life.expectancy": "63.5"
    },
    {
      "Country": "Myanmar",
      "Year": "2003",
      "Alcohol": "0.4",
      "Life.expectancy": "63.2"
    },
    {
      "Country": "Myanmar",
      "Year": "2002",
      "Alcohol": "0.41",
      "Life.expectancy": "62.8"
    },
    {
      "Country": "Myanmar",
      "Year": "2001",
      "Alcohol": "0.38",
      "Life.expectancy": "62.5"
    },
    {
      "Country": "Myanmar",
      "Year": "2000",
      "Alcohol": "0.35",
      "Life.expectancy": "62.1"
    },
    {
      "Country": "Namibia",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "65.8"
    },
    {
      "Country": "Namibia",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "65.9"
    },
    {
      "Country": "Namibia",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "66.1"
    },
    {
      "Country": "Namibia",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "65.8"
    },
    {
      "Country": "Namibia",
      "Year": "2011",
      "Alcohol": "7.84",
      "Life.expectancy": "64.3"
    },
    {
      "Country": "Namibia",
      "Year": "2010",
      "Alcohol": "7.58",
      "Life.expectancy": "63"
    },
    {
      "Country": "Namibia",
      "Year": "2009",
      "Alcohol": "7.99",
      "Life.expectancy": "62.4"
    },
    {
      "Country": "Namibia",
      "Year": "2008",
      "Alcohol": "6.28",
      "Life.expectancy": "61.7"
    },
    {
      "Country": "Namibia",
      "Year": "2007",
      "Alcohol": "5.12",
      "Life.expectancy": "60"
    },
    {
      "Country": "Namibia",
      "Year": "2006",
      "Alcohol": "4.94",
      "Life.expectancy": "57"
    },
    {
      "Country": "Namibia",
      "Year": "2005",
      "Alcohol": "4.89",
      "Life.expectancy": "55.1"
    },
    {
      "Country": "Namibia",
      "Year": "2004",
      "Alcohol": "4.8",
      "Life.expectancy": "54.7"
    },
    {
      "Country": "Namibia",
      "Year": "2003",
      "Alcohol": "5.28",
      "Life.expectancy": "55"
    },
    {
      "Country": "Namibia",
      "Year": "2002",
      "Alcohol": "5.09",
      "Life.expectancy": "55.7"
    },
    {
      "Country": "Namibia",
      "Year": "2001",
      "Alcohol": "5.09",
      "Life.expectancy": "56.5"
    },
    {
      "Country": "Namibia",
      "Year": "2000",
      "Alcohol": "5.73",
      "Life.expectancy": "57.4"
    },
    {
      "Country": "Nauru",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "0"
    },
    {
      "Country": "Nepal",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "69.2"
    },
    {
      "Country": "Nepal",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "69.6"
    },
    {
      "Country": "Nepal",
      "Year": "2013",
      "Alcohol": "0.27",
      "Life.expectancy": "69.3"
    },
    {
      "Country": "Nepal",
      "Year": "2012",
      "Alcohol": "0.26",
      "Life.expectancy": "68.9"
    },
    {
      "Country": "Nepal",
      "Year": "2011",
      "Alcohol": "0.27",
      "Life.expectancy": "68.4"
    },
    {
      "Country": "Nepal",
      "Year": "2010",
      "Alcohol": "0.24",
      "Life.expectancy": "68"
    },
    {
      "Country": "Nepal",
      "Year": "2009",
      "Alcohol": "0.22",
      "Life.expectancy": "67.5"
    },
    {
      "Country": "Nepal",
      "Year": "2008",
      "Alcohol": "0.21",
      "Life.expectancy": "67"
    },
    {
      "Country": "Nepal",
      "Year": "2007",
      "Alcohol": "0.2",
      "Life.expectancy": "66.6"
    },
    {
      "Country": "Nepal",
      "Year": "2006",
      "Alcohol": "0.2",
      "Life.expectancy": "66"
    },
    {
      "Country": "Nepal",
      "Year": "2005",
      "Alcohol": "0.2",
      "Life.expectancy": "65.4"
    },
    {
      "Country": "Nepal",
      "Year": "2004",
      "Alcohol": "0.21",
      "Life.expectancy": "64.7"
    },
    {
      "Country": "Nepal",
      "Year": "2003",
      "Alcohol": "0.2",
      "Life.expectancy": "64.3"
    },
    {
      "Country": "Nepal",
      "Year": "2002",
      "Alcohol": "0.19",
      "Life.expectancy": "63.1"
    },
    {
      "Country": "Nepal",
      "Year": "2001",
      "Alcohol": "0.09",
      "Life.expectancy": "63.2"
    },
    {
      "Country": "Nepal",
      "Year": "2000",
      "Alcohol": "0.08",
      "Life.expectancy": "62.5"
    },
    {
      "Country": "Netherlands",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "81.9"
    },
    {
      "Country": "Netherlands",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "81.7"
    },
    {
      "Country": "Netherlands",
      "Year": "2013",
      "Alcohol": "8.68",
      "Life.expectancy": "81.4"
    },
    {
      "Country": "Netherlands",
      "Year": "2012",
      "Alcohol": "9.05",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "Netherlands",
      "Year": "2011",
      "Alcohol": "8.96",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "Netherlands",
      "Year": "2010",
      "Alcohol": "9.33",
      "Life.expectancy": "88"
    },
    {
      "Country": "Netherlands",
      "Year": "2009",
      "Alcohol": "9.23",
      "Life.expectancy": "86"
    },
    {
      "Country": "Netherlands",
      "Year": "2008",
      "Alcohol": "9.62",
      "Life.expectancy": "83"
    },
    {
      "Country": "Netherlands",
      "Year": "2007",
      "Alcohol": "9.53",
      "Life.expectancy": "82"
    },
    {
      "Country": "Netherlands",
      "Year": "2006",
      "Alcohol": "9.79",
      "Life.expectancy": "79.8"
    },
    {
      "Country": "Netherlands",
      "Year": "2005",
      "Alcohol": "9.69",
      "Life.expectancy": "79.4"
    },
    {
      "Country": "Netherlands",
      "Year": "2004",
      "Alcohol": "9.56",
      "Life.expectancy": "79.2"
    },
    {
      "Country": "Netherlands",
      "Year": "2003",
      "Alcohol": "9.56",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "Netherlands",
      "Year": "2002",
      "Alcohol": "9.68",
      "Life.expectancy": "78.4"
    },
    {
      "Country": "Netherlands",
      "Year": "2001",
      "Alcohol": "9.95",
      "Life.expectancy": "78.3"
    },
    {
      "Country": "Netherlands",
      "Year": "2000",
      "Alcohol": "10.06",
      "Life.expectancy": "78.1"
    },
    {
      "Country": "New Zealand",
      "Year": "2015",
      "Alcohol": "8.7",
      "Life.expectancy": "81.6"
    },
    {
      "Country": "New Zealand",
      "Year": "2014",
      "Alcohol": "9.07",
      "Life.expectancy": "81.5"
    },
    {
      "Country": "New Zealand",
      "Year": "2013",
      "Alcohol": "9.18",
      "Life.expectancy": "81.3"
    },
    {
      "Country": "New Zealand",
      "Year": "2012",
      "Alcohol": "9.2",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "New Zealand",
      "Year": "2011",
      "Alcohol": "9.47",
      "Life.expectancy": "86"
    },
    {
      "Country": "New Zealand",
      "Year": "2010",
      "Alcohol": "9.62",
      "Life.expectancy": "89"
    },
    {
      "Country": "New Zealand",
      "Year": "2009",
      "Alcohol": "9.24",
      "Life.expectancy": "85"
    },
    {
      "Country": "New Zealand",
      "Year": "2008",
      "Alcohol": "9.49",
      "Life.expectancy": "81"
    },
    {
      "Country": "New Zealand",
      "Year": "2007",
      "Alcohol": "9.19",
      "Life.expectancy": "81"
    },
    {
      "Country": "New Zealand",
      "Year": "2006",
      "Alcohol": "9.34",
      "Life.expectancy": "79.9"
    },
    {
      "Country": "New Zealand",
      "Year": "2005",
      "Alcohol": "9.31",
      "Life.expectancy": "79.9"
    },
    {
      "Country": "New Zealand",
      "Year": "2004",
      "Alcohol": "9.15",
      "Life.expectancy": "79.2"
    },
    {
      "Country": "New Zealand",
      "Year": "2003",
      "Alcohol": "8.91",
      "Life.expectancy": "79.1"
    },
    {
      "Country": "New Zealand",
      "Year": "2002",
      "Alcohol": "9.13",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "New Zealand",
      "Year": "2001",
      "Alcohol": "8.75",
      "Life.expectancy": "78.5"
    },
    {
      "Country": "New Zealand",
      "Year": "2000",
      "Alcohol": "8.91",
      "Life.expectancy": "78.6"
    },
    {
      "Country": "Nicaragua",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Nicaragua",
      "Year": "2014",
      "Alcohol": "3.55",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Nicaragua",
      "Year": "2013",
      "Alcohol": "3.58",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Nicaragua",
      "Year": "2012",
      "Alcohol": "3.63",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Nicaragua",
      "Year": "2011",
      "Alcohol": "3.39",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Nicaragua",
      "Year": "2010",
      "Alcohol": "3.38",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Nicaragua",
      "Year": "2009",
      "Alcohol": "3.36",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Nicaragua",
      "Year": "2008",
      "Alcohol": "3.64",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Nicaragua",
      "Year": "2007",
      "Alcohol": "3.83",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Nicaragua",
      "Year": "2006",
      "Alcohol": "3.69",
      "Life.expectancy": "73"
    },
    {
      "Country": "Nicaragua",
      "Year": "2005",
      "Alcohol": "3.7",
      "Life.expectancy": "71.2"
    },
    {
      "Country": "Nicaragua",
      "Year": "2004",
      "Alcohol": "3.81",
      "Life.expectancy": "71"
    },
    {
      "Country": "Nicaragua",
      "Year": "2003",
      "Alcohol": "3.77",
      "Life.expectancy": "76"
    },
    {
      "Country": "Nicaragua",
      "Year": "2002",
      "Alcohol": "3.5",
      "Life.expectancy": "75"
    },
    {
      "Country": "Nicaragua",
      "Year": "2001",
      "Alcohol": "3.51",
      "Life.expectancy": "73"
    },
    {
      "Country": "Nicaragua",
      "Year": "2000",
      "Alcohol": "3.61",
      "Life.expectancy": "73"
    },
    {
      "Country": "Niger",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "61.8"
    },
    {
      "Country": "Niger",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "61.4"
    },
    {
      "Country": "Niger",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "69"
    },
    {
      "Country": "Niger",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "63"
    },
    {
      "Country": "Niger",
      "Year": "2011",
      "Alcohol": "0.15",
      "Life.expectancy": "59.4"
    },
    {
      "Country": "Niger",
      "Year": "2010",
      "Alcohol": "0.12",
      "Life.expectancy": "58.2"
    },
    {
      "Country": "Niger",
      "Year": "2009",
      "Alcohol": "0.11",
      "Life.expectancy": "57.1"
    },
    {
      "Country": "Niger",
      "Year": "2008",
      "Alcohol": "0.12",
      "Life.expectancy": "56"
    },
    {
      "Country": "Niger",
      "Year": "2007",
      "Alcohol": "0.1",
      "Life.expectancy": "55.2"
    },
    {
      "Country": "Niger",
      "Year": "2006",
      "Alcohol": "0.11",
      "Life.expectancy": "54.5"
    },
    {
      "Country": "Niger",
      "Year": "2005",
      "Alcohol": "0.11",
      "Life.expectancy": "53.7"
    },
    {
      "Country": "Niger",
      "Year": "2004",
      "Alcohol": "0.11",
      "Life.expectancy": "52.9"
    },
    {
      "Country": "Niger",
      "Year": "2003",
      "Alcohol": "0.1",
      "Life.expectancy": "52.1"
    },
    {
      "Country": "Niger",
      "Year": "2002",
      "Alcohol": "0.1",
      "Life.expectancy": "51.4"
    },
    {
      "Country": "Niger",
      "Year": "2001",
      "Alcohol": "0.11",
      "Life.expectancy": "56"
    },
    {
      "Country": "Niger",
      "Year": "2000",
      "Alcohol": "0.1",
      "Life.expectancy": "50"
    },
    {
      "Country": "Nigeria",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "54.5"
    },
    {
      "Country": "Nigeria",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "53.6"
    },
    {
      "Country": "Nigeria",
      "Year": "2013",
      "Alcohol": "8.3",
      "Life.expectancy": "53.2"
    },
    {
      "Country": "Nigeria",
      "Year": "2012",
      "Alcohol": "8.54",
      "Life.expectancy": "52.7"
    },
    {
      "Country": "Nigeria",
      "Year": "2011",
      "Alcohol": "8.75",
      "Life.expectancy": "52.3"
    },
    {
      "Country": "Nigeria",
      "Year": "2010",
      "Alcohol": "8.9",
      "Life.expectancy": "52"
    },
    {
      "Country": "Nigeria",
      "Year": "2009",
      "Alcohol": "9.05",
      "Life.expectancy": "51.6"
    },
    {
      "Country": "Nigeria",
      "Year": "2008",
      "Alcohol": "9.3",
      "Life.expectancy": "59"
    },
    {
      "Country": "Nigeria",
      "Year": "2007",
      "Alcohol": "9.55",
      "Life.expectancy": "55"
    },
    {
      "Country": "Nigeria",
      "Year": "2006",
      "Alcohol": "9.66",
      "Life.expectancy": "49.8"
    },
    {
      "Country": "Nigeria",
      "Year": "2005",
      "Alcohol": "9.71",
      "Life.expectancy": "49.2"
    },
    {
      "Country": "Nigeria",
      "Year": "2004",
      "Alcohol": "9.76",
      "Life.expectancy": "48.5"
    },
    {
      "Country": "Nigeria",
      "Year": "2003",
      "Alcohol": "9.75",
      "Life.expectancy": "48.1"
    },
    {
      "Country": "Nigeria",
      "Year": "2002",
      "Alcohol": "9.61",
      "Life.expectancy": "47.7"
    },
    {
      "Country": "Nigeria",
      "Year": "2001",
      "Alcohol": "9.58",
      "Life.expectancy": "47.4"
    },
    {
      "Country": "Nigeria",
      "Year": "2000",
      "Alcohol": "9.23",
      "Life.expectancy": "47.1"
    },
    {
      "Country": "Niue",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "0"
    },
    {
      "Country": "Norway",
      "Year": "2015",
      "Alcohol": "5.97",
      "Life.expectancy": "81.8"
    },
    {
      "Country": "Norway",
      "Year": "2014",
      "Alcohol": "6.06",
      "Life.expectancy": "81.6"
    },
    {
      "Country": "Norway",
      "Year": "2013",
      "Alcohol": "6.21",
      "Life.expectancy": "81.5"
    },
    {
      "Country": "Norway",
      "Year": "2012",
      "Alcohol": "6.21",
      "Life.expectancy": "81.3"
    },
    {
      "Country": "Norway",
      "Year": "2011",
      "Alcohol": "6.53",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "Norway",
      "Year": "2010",
      "Alcohol": "6.59",
      "Life.expectancy": "81"
    },
    {
      "Country": "Norway",
      "Year": "2009",
      "Alcohol": "6.68",
      "Life.expectancy": "89"
    },
    {
      "Country": "Norway",
      "Year": "2008",
      "Alcohol": "6.75",
      "Life.expectancy": "86"
    },
    {
      "Country": "Norway",
      "Year": "2007",
      "Alcohol": "6.6",
      "Life.expectancy": "85"
    },
    {
      "Country": "Norway",
      "Year": "2006",
      "Alcohol": "6.47",
      "Life.expectancy": "84"
    },
    {
      "Country": "Norway",
      "Year": "2005",
      "Alcohol": "6.37",
      "Life.expectancy": "81"
    },
    {
      "Country": "Norway",
      "Year": "2004",
      "Alcohol": "6.22",
      "Life.expectancy": "79.8"
    },
    {
      "Country": "Norway",
      "Year": "2003",
      "Alcohol": "6.04",
      "Life.expectancy": "79.4"
    },
    {
      "Country": "Norway",
      "Year": "2002",
      "Alcohol": "5.89",
      "Life.expectancy": "78.9"
    },
    {
      "Country": "Norway",
      "Year": "2001",
      "Alcohol": "5.49",
      "Life.expectancy": "78.8"
    },
    {
      "Country": "Norway",
      "Year": "2000",
      "Alcohol": "5.67",
      "Life.expectancy": "78.5"
    },
    {
      "Country": "Oman",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "76.6"
    },
    {
      "Country": "Oman",
      "Year": "2014",
      "Alcohol": "0.4",
      "Life.expectancy": "76.4"
    },
    {
      "Country": "Oman",
      "Year": "2013",
      "Alcohol": "0.46",
      "Life.expectancy": "76.2"
    },
    {
      "Country": "Oman",
      "Year": "2012",
      "Alcohol": "0.51",
      "Life.expectancy": "76"
    },
    {
      "Country": "Oman",
      "Year": "2011",
      "Alcohol": "0.54",
      "Life.expectancy": "75.8"
    },
    {
      "Country": "Oman",
      "Year": "2010",
      "Alcohol": "0.56",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "Oman",
      "Year": "2009",
      "Alcohol": "0.56",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Oman",
      "Year": "2008",
      "Alcohol": "0.57",
      "Life.expectancy": "75.2"
    },
    {
      "Country": "Oman",
      "Year": "2007",
      "Alcohol": "0.57",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Oman",
      "Year": "2006",
      "Alcohol": "0.58",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Oman",
      "Year": "2005",
      "Alcohol": "0.63",
      "Life.expectancy": "74.3"
    },
    {
      "Country": "Oman",
      "Year": "2004",
      "Alcohol": "0.61",
      "Life.expectancy": "74"
    },
    {
      "Country": "Oman",
      "Year": "2003",
      "Alcohol": "0.56",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Oman",
      "Year": "2002",
      "Alcohol": "0.54",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Oman",
      "Year": "2001",
      "Alcohol": "0.55",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Oman",
      "Year": "2000",
      "Alcohol": "0.38",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Pakistan",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "66.4"
    },
    {
      "Country": "Pakistan",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "66.2"
    },
    {
      "Country": "Pakistan",
      "Year": "2013",
      "Alcohol": "0.04",
      "Life.expectancy": "66"
    },
    {
      "Country": "Pakistan",
      "Year": "2012",
      "Alcohol": "0.04",
      "Life.expectancy": "65.7"
    },
    {
      "Country": "Pakistan",
      "Year": "2011",
      "Alcohol": "0.04",
      "Life.expectancy": "65.5"
    },
    {
      "Country": "Pakistan",
      "Year": "2010",
      "Alcohol": "0.04",
      "Life.expectancy": "65.1"
    },
    {
      "Country": "Pakistan",
      "Year": "2009",
      "Alcohol": "0.03",
      "Life.expectancy": "64.8"
    },
    {
      "Country": "Pakistan",
      "Year": "2008",
      "Alcohol": "0.03",
      "Life.expectancy": "64.6"
    },
    {
      "Country": "Pakistan",
      "Year": "2007",
      "Alcohol": "0.03",
      "Life.expectancy": "64.4"
    },
    {
      "Country": "Pakistan",
      "Year": "2006",
      "Alcohol": "0.03",
      "Life.expectancy": "64.2"
    },
    {
      "Country": "Pakistan",
      "Year": "2005",
      "Alcohol": "0.04",
      "Life.expectancy": "62.9"
    },
    {
      "Country": "Pakistan",
      "Year": "2004",
      "Alcohol": "0.01",
      "Life.expectancy": "63.7"
    },
    {
      "Country": "Pakistan",
      "Year": "2003",
      "Alcohol": "0.01",
      "Life.expectancy": "63.5"
    },
    {
      "Country": "Pakistan",
      "Year": "2002",
      "Alcohol": "0.01",
      "Life.expectancy": "63.2"
    },
    {
      "Country": "Pakistan",
      "Year": "2001",
      "Alcohol": "0.01",
      "Life.expectancy": "63"
    },
    {
      "Country": "Pakistan",
      "Year": "2000",
      "Alcohol": "0.02",
      "Life.expectancy": "62.8"
    },
    {
      "Country": "Palau",
      "Year": "2013",
      "Alcohol": "0",
      "Life.expectancy": "0"
    },
    {
      "Country": "Panama",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "77.8"
    },
    {
      "Country": "Panama",
      "Year": "2014",
      "Alcohol": "6.74",
      "Life.expectancy": "77.6"
    },
    {
      "Country": "Panama",
      "Year": "2013",
      "Alcohol": "6.89",
      "Life.expectancy": "77.5"
    },
    {
      "Country": "Panama",
      "Year": "2012",
      "Alcohol": "6.95",
      "Life.expectancy": "77.2"
    },
    {
      "Country": "Panama",
      "Year": "2011",
      "Alcohol": "6.9",
      "Life.expectancy": "77.3"
    },
    {
      "Country": "Panama",
      "Year": "2010",
      "Alcohol": "6.94",
      "Life.expectancy": "76.5"
    },
    {
      "Country": "Panama",
      "Year": "2009",
      "Alcohol": "6.87",
      "Life.expectancy": "76.8"
    },
    {
      "Country": "Panama",
      "Year": "2008",
      "Alcohol": "6.74",
      "Life.expectancy": "76.5"
    },
    {
      "Country": "Panama",
      "Year": "2007",
      "Alcohol": "6.16",
      "Life.expectancy": "76.4"
    },
    {
      "Country": "Panama",
      "Year": "2006",
      "Alcohol": "5.72",
      "Life.expectancy": "76.2"
    },
    {
      "Country": "Panama",
      "Year": "2005",
      "Alcohol": "5.53",
      "Life.expectancy": "75.8"
    },
    {
      "Country": "Panama",
      "Year": "2004",
      "Alcohol": "5.69",
      "Life.expectancy": "75.8"
    },
    {
      "Country": "Panama",
      "Year": "2003",
      "Alcohol": "5.52",
      "Life.expectancy": "75.5"
    },
    {
      "Country": "Panama",
      "Year": "2002",
      "Alcohol": "5.52",
      "Life.expectancy": "75.7"
    },
    {
      "Country": "Panama",
      "Year": "2001",
      "Alcohol": "5.43",
      "Life.expectancy": "75.5"
    },
    {
      "Country": "Panama",
      "Year": "2000",
      "Alcohol": "5.58",
      "Life.expectancy": "75.7"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "62.9"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "62.7"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "62.4"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "62.2"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2011",
      "Alcohol": "0.88",
      "Life.expectancy": "62"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2010",
      "Alcohol": "0.79",
      "Life.expectancy": "61.8"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2009",
      "Alcohol": "0.82",
      "Life.expectancy": "61.6"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2008",
      "Alcohol": "0.81",
      "Life.expectancy": "61.4"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2007",
      "Alcohol": "0.71",
      "Life.expectancy": "61.1"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2006",
      "Alcohol": "0.64",
      "Life.expectancy": "68"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2005",
      "Alcohol": "0.84",
      "Life.expectancy": "64"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2004",
      "Alcohol": "0.58",
      "Life.expectancy": "59.9"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2003",
      "Alcohol": "0.59",
      "Life.expectancy": "59.6"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2002",
      "Alcohol": "0.61",
      "Life.expectancy": "59.3"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2001",
      "Alcohol": "0.68",
      "Life.expectancy": "59.1"
    },
    {
      "Country": "Papua New Guinea",
      "Year": "2000",
      "Alcohol": "0.73",
      "Life.expectancy": "58.9"
    },
    {
      "Country": "Paraguay",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "74"
    },
    {
      "Country": "Paraguay",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Paraguay",
      "Year": "2013",
      "Alcohol": "5.03",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Paraguay",
      "Year": "2012",
      "Alcohol": "5.36",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Paraguay",
      "Year": "2011",
      "Alcohol": "5.79",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Paraguay",
      "Year": "2010",
      "Alcohol": "5.65",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Paraguay",
      "Year": "2009",
      "Alcohol": "5.39",
      "Life.expectancy": "73"
    },
    {
      "Country": "Paraguay",
      "Year": "2008",
      "Alcohol": "6.14",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Paraguay",
      "Year": "2007",
      "Alcohol": "5.61",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Paraguay",
      "Year": "2006",
      "Alcohol": "5.61",
      "Life.expectancy": "72.3"
    },
    {
      "Country": "Paraguay",
      "Year": "2005",
      "Alcohol": "6.38",
      "Life.expectancy": "72.1"
    },
    {
      "Country": "Paraguay",
      "Year": "2004",
      "Alcohol": "6.2",
      "Life.expectancy": "71.9"
    },
    {
      "Country": "Paraguay",
      "Year": "2003",
      "Alcohol": "6.64",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "Paraguay",
      "Year": "2002",
      "Alcohol": "5.66",
      "Life.expectancy": "71.5"
    },
    {
      "Country": "Paraguay",
      "Year": "2001",
      "Alcohol": "6.66",
      "Life.expectancy": "71.2"
    },
    {
      "Country": "Paraguay",
      "Year": "2000",
      "Alcohol": "6.78",
      "Life.expectancy": "79"
    },
    {
      "Country": "Peru",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "75.5"
    },
    {
      "Country": "Peru",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "Peru",
      "Year": "2013",
      "Alcohol": "5.38",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "Peru",
      "Year": "2012",
      "Alcohol": "5.14",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Peru",
      "Year": "2011",
      "Alcohol": "4.83",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Peru",
      "Year": "2010",
      "Alcohol": "4.72",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Peru",
      "Year": "2009",
      "Alcohol": "4.69",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Peru",
      "Year": "2008",
      "Alcohol": "4.85",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Peru",
      "Year": "2007",
      "Alcohol": "4.29",
      "Life.expectancy": "74"
    },
    {
      "Country": "Peru",
      "Year": "2006",
      "Alcohol": "4.22",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Peru",
      "Year": "2005",
      "Alcohol": "4.44",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Peru",
      "Year": "2004",
      "Alcohol": "4.27",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "Peru",
      "Year": "2003",
      "Alcohol": "4.5",
      "Life.expectancy": "72.1"
    },
    {
      "Country": "Peru",
      "Year": "2002",
      "Alcohol": "4.03",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Peru",
      "Year": "2001",
      "Alcohol": "4.22",
      "Life.expectancy": "72.4"
    },
    {
      "Country": "Peru",
      "Year": "2000",
      "Alcohol": "4.59",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "Philippines",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "68.5"
    },
    {
      "Country": "Philippines",
      "Year": "2014",
      "Alcohol": "4.52",
      "Life.expectancy": "68.4"
    },
    {
      "Country": "Philippines",
      "Year": "2013",
      "Alcohol": "4.61",
      "Life.expectancy": "68.1"
    },
    {
      "Country": "Philippines",
      "Year": "2012",
      "Alcohol": "5.02",
      "Life.expectancy": "68.1"
    },
    {
      "Country": "Philippines",
      "Year": "2011",
      "Alcohol": "4.96",
      "Life.expectancy": "68"
    },
    {
      "Country": "Philippines",
      "Year": "2010",
      "Alcohol": "4.85",
      "Life.expectancy": "67.9"
    },
    {
      "Country": "Philippines",
      "Year": "2009",
      "Alcohol": "4.42",
      "Life.expectancy": "68"
    },
    {
      "Country": "Philippines",
      "Year": "2008",
      "Alcohol": "4.21",
      "Life.expectancy": "67.5"
    },
    {
      "Country": "Philippines",
      "Year": "2007",
      "Alcohol": "4.19",
      "Life.expectancy": "67.5"
    },
    {
      "Country": "Philippines",
      "Year": "2006",
      "Alcohol": "4.08",
      "Life.expectancy": "67.3"
    },
    {
      "Country": "Philippines",
      "Year": "2005",
      "Alcohol": "4.22",
      "Life.expectancy": "67"
    },
    {
      "Country": "Philippines",
      "Year": "2004",
      "Alcohol": "4.45",
      "Life.expectancy": "67.3"
    },
    {
      "Country": "Philippines",
      "Year": "2003",
      "Alcohol": "4.44",
      "Life.expectancy": "67.2"
    },
    {
      "Country": "Philippines",
      "Year": "2002",
      "Alcohol": "4.42",
      "Life.expectancy": "66.8"
    },
    {
      "Country": "Philippines",
      "Year": "2001",
      "Alcohol": "4.54",
      "Life.expectancy": "66.8"
    },
    {
      "Country": "Philippines",
      "Year": "2000",
      "Alcohol": "4.73",
      "Life.expectancy": "66.8"
    },
    {
      "Country": "Poland",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "77.5"
    },
    {
      "Country": "Poland",
      "Year": "2014",
      "Alcohol": "10.71",
      "Life.expectancy": "77.3"
    },
    {
      "Country": "Poland",
      "Year": "2013",
      "Alcohol": "11.63",
      "Life.expectancy": "77.1"
    },
    {
      "Country": "Poland",
      "Year": "2012",
      "Alcohol": "10.81",
      "Life.expectancy": "76.8"
    },
    {
      "Country": "Poland",
      "Year": "2011",
      "Alcohol": "10.93",
      "Life.expectancy": "76.7"
    },
    {
      "Country": "Poland",
      "Year": "2010",
      "Alcohol": "10.59",
      "Life.expectancy": "76.3"
    },
    {
      "Country": "Poland",
      "Year": "2009",
      "Alcohol": "10.7",
      "Life.expectancy": "75.7"
    },
    {
      "Country": "Poland",
      "Year": "2008",
      "Alcohol": "11.4",
      "Life.expectancy": "75.5"
    },
    {
      "Country": "Poland",
      "Year": "2007",
      "Alcohol": "10.9",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "Poland",
      "Year": "2006",
      "Alcohol": "10.4",
      "Life.expectancy": "75.2"
    },
    {
      "Country": "Poland",
      "Year": "2005",
      "Alcohol": "9.5",
      "Life.expectancy": "75"
    },
    {
      "Country": "Poland",
      "Year": "2004",
      "Alcohol": "9.19",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Poland",
      "Year": "2003",
      "Alcohol": "9.06",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Poland",
      "Year": "2002",
      "Alcohol": "8.02",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Poland",
      "Year": "2001",
      "Alcohol": "7.74",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Poland",
      "Year": "2000",
      "Alcohol": "8.4",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Portugal",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "Portugal",
      "Year": "2014",
      "Alcohol": "9.88",
      "Life.expectancy": "89"
    },
    {
      "Country": "Portugal",
      "Year": "2013",
      "Alcohol": "10",
      "Life.expectancy": "86"
    },
    {
      "Country": "Portugal",
      "Year": "2012",
      "Alcohol": "11.96",
      "Life.expectancy": "83"
    },
    {
      "Country": "Portugal",
      "Year": "2011",
      "Alcohol": "11.92",
      "Life.expectancy": "82"
    },
    {
      "Country": "Portugal",
      "Year": "2010",
      "Alcohol": "12.25",
      "Life.expectancy": "79.6"
    },
    {
      "Country": "Portugal",
      "Year": "2009",
      "Alcohol": "12.03",
      "Life.expectancy": "79.3"
    },
    {
      "Country": "Portugal",
      "Year": "2008",
      "Alcohol": "12.35",
      "Life.expectancy": "79"
    },
    {
      "Country": "Portugal",
      "Year": "2007",
      "Alcohol": "12.57",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "Portugal",
      "Year": "2006",
      "Alcohol": "13.11",
      "Life.expectancy": "78.5"
    },
    {
      "Country": "Portugal",
      "Year": "2005",
      "Alcohol": "13.33",
      "Life.expectancy": "77.7"
    },
    {
      "Country": "Portugal",
      "Year": "2004",
      "Alcohol": "13.45",
      "Life.expectancy": "78"
    },
    {
      "Country": "Portugal",
      "Year": "2003",
      "Alcohol": "14.21",
      "Life.expectancy": "77.3"
    },
    {
      "Country": "Portugal",
      "Year": "2002",
      "Alcohol": "12",
      "Life.expectancy": "77.2"
    },
    {
      "Country": "Portugal",
      "Year": "2001",
      "Alcohol": "12.22",
      "Life.expectancy": "76.9"
    },
    {
      "Country": "Portugal",
      "Year": "2000",
      "Alcohol": "11.89",
      "Life.expectancy": "76.6"
    },
    {
      "Country": "Qatar",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "78.2"
    },
    {
      "Country": "Qatar",
      "Year": "2014",
      "Alcohol": "1.15",
      "Life.expectancy": "78.1"
    },
    {
      "Country": "Qatar",
      "Year": "2013",
      "Alcohol": "1.2",
      "Life.expectancy": "77.9"
    },
    {
      "Country": "Qatar",
      "Year": "2012",
      "Alcohol": "1.13",
      "Life.expectancy": "77.8"
    },
    {
      "Country": "Qatar",
      "Year": "2011",
      "Alcohol": "1.16",
      "Life.expectancy": "77.5"
    },
    {
      "Country": "Qatar",
      "Year": "2010",
      "Alcohol": "1.16",
      "Life.expectancy": "77.3"
    },
    {
      "Country": "Qatar",
      "Year": "2009",
      "Alcohol": "1.11",
      "Life.expectancy": "77"
    },
    {
      "Country": "Qatar",
      "Year": "2008",
      "Alcohol": "1.37",
      "Life.expectancy": "76.8"
    },
    {
      "Country": "Qatar",
      "Year": "2007",
      "Alcohol": "1.24",
      "Life.expectancy": "76.7"
    },
    {
      "Country": "Qatar",
      "Year": "2006",
      "Alcohol": "1.28",
      "Life.expectancy": "76.6"
    },
    {
      "Country": "Qatar",
      "Year": "2005",
      "Alcohol": "1.18",
      "Life.expectancy": "76.6"
    },
    {
      "Country": "Qatar",
      "Year": "2004",
      "Alcohol": "1.11",
      "Life.expectancy": "76.6"
    },
    {
      "Country": "Qatar",
      "Year": "2003",
      "Alcohol": "1",
      "Life.expectancy": "76.5"
    },
    {
      "Country": "Qatar",
      "Year": "2002",
      "Alcohol": "0.87",
      "Life.expectancy": "76.4"
    },
    {
      "Country": "Qatar",
      "Year": "2001",
      "Alcohol": "0.76",
      "Life.expectancy": "76.3"
    },
    {
      "Country": "Qatar",
      "Year": "2000",
      "Alcohol": "0.5",
      "Life.expectancy": "76.2"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "82.3"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "82"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2013",
      "Alcohol": "9.33",
      "Life.expectancy": "81.7"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2012",
      "Alcohol": "9.56",
      "Life.expectancy": "81.2"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2011",
      "Alcohol": "9.34",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2010",
      "Alcohol": "9.23",
      "Life.expectancy": "87"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2009",
      "Alcohol": "8.97",
      "Life.expectancy": "86"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2008",
      "Alcohol": "9.31",
      "Life.expectancy": "83"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2007",
      "Alcohol": "9.05",
      "Life.expectancy": "79.8"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2006",
      "Alcohol": "8.83",
      "Life.expectancy": "79.4"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2005",
      "Alcohol": "9.03",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2004",
      "Alcohol": "9.18",
      "Life.expectancy": "78.2"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2003",
      "Alcohol": "9.66",
      "Life.expectancy": "77.6"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2002",
      "Alcohol": "9.55",
      "Life.expectancy": "77.1"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2001",
      "Alcohol": "11.45",
      "Life.expectancy": "76.7"
    },
    {
      "Country": "Republic of Korea",
      "Year": "2000",
      "Alcohol": "10.33",
      "Life.expectancy": "76"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "72.1"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2014",
      "Alcohol": "9.99",
      "Life.expectancy": "71.8"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2013",
      "Alcohol": "10.49",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2012",
      "Alcohol": "10.68",
      "Life.expectancy": "79"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2011",
      "Alcohol": "9.45",
      "Life.expectancy": "77"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2010",
      "Alcohol": "8.25",
      "Life.expectancy": "68.8"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2009",
      "Alcohol": "8.45",
      "Life.expectancy": "69"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2008",
      "Alcohol": "9.07",
      "Life.expectancy": "68.9"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2007",
      "Alcohol": "9.66",
      "Life.expectancy": "68.3"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2006",
      "Alcohol": "8.36",
      "Life.expectancy": "68"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2005",
      "Alcohol": "10.78",
      "Life.expectancy": "67.3"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2004",
      "Alcohol": "12.27",
      "Life.expectancy": "68"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2003",
      "Alcohol": "8.15",
      "Life.expectancy": "67.6"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2002",
      "Alcohol": "6.71",
      "Life.expectancy": "67.5"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2001",
      "Alcohol": "10.98",
      "Life.expectancy": "67.6"
    },
    {
      "Country": "Republic of Moldova",
      "Year": "2000",
      "Alcohol": "9.89",
      "Life.expectancy": "67.1"
    },
    {
      "Country": "Romania",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "75"
    },
    {
      "Country": "Romania",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Romania",
      "Year": "2013",
      "Alcohol": "9.59",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Romania",
      "Year": "2012",
      "Alcohol": "9.58",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Romania",
      "Year": "2011",
      "Alcohol": "9.1",
      "Life.expectancy": "74.3"
    },
    {
      "Country": "Romania",
      "Year": "2010",
      "Alcohol": "9",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Romania",
      "Year": "2009",
      "Alcohol": "10.4",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Romania",
      "Year": "2008",
      "Alcohol": "11.9",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Romania",
      "Year": "2007",
      "Alcohol": "10.6",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Romania",
      "Year": "2006",
      "Alcohol": "8.51",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Romania",
      "Year": "2005",
      "Alcohol": "7.68",
      "Life.expectancy": "71.9"
    },
    {
      "Country": "Romania",
      "Year": "2004",
      "Alcohol": "9.82",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "Romania",
      "Year": "2003",
      "Alcohol": "8.78",
      "Life.expectancy": "71.1"
    },
    {
      "Country": "Romania",
      "Year": "2002",
      "Alcohol": "9.62",
      "Life.expectancy": "77"
    },
    {
      "Country": "Romania",
      "Year": "2001",
      "Alcohol": "9.78",
      "Life.expectancy": "78"
    },
    {
      "Country": "Romania",
      "Year": "2000",
      "Alcohol": "10.16",
      "Life.expectancy": "77"
    },
    {
      "Country": "Russian Federation",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "75"
    },
    {
      "Country": "Russian Federation",
      "Year": "2014",
      "Alcohol": "10.12",
      "Life.expectancy": "73"
    },
    {
      "Country": "Russian Federation",
      "Year": "2013",
      "Alcohol": "10.58",
      "Life.expectancy": "70"
    },
    {
      "Country": "Russian Federation",
      "Year": "2012",
      "Alcohol": "10.99",
      "Life.expectancy": "69.6"
    },
    {
      "Country": "Russian Federation",
      "Year": "2011",
      "Alcohol": "11.04",
      "Life.expectancy": "69.4"
    },
    {
      "Country": "Russian Federation",
      "Year": "2010",
      "Alcohol": "11.05",
      "Life.expectancy": "68.4"
    },
    {
      "Country": "Russian Federation",
      "Year": "2009",
      "Alcohol": "11.21",
      "Life.expectancy": "68.2"
    },
    {
      "Country": "Russian Federation",
      "Year": "2008",
      "Alcohol": "12.04",
      "Life.expectancy": "67.5"
    },
    {
      "Country": "Russian Federation",
      "Year": "2007",
      "Alcohol": "12.19",
      "Life.expectancy": "67.3"
    },
    {
      "Country": "Russian Federation",
      "Year": "2006",
      "Alcohol": "11.79",
      "Life.expectancy": "66.4"
    },
    {
      "Country": "Russian Federation",
      "Year": "2005",
      "Alcohol": "11.57",
      "Life.expectancy": "65"
    },
    {
      "Country": "Russian Federation",
      "Year": "2004",
      "Alcohol": "11.5",
      "Life.expectancy": "64.9"
    },
    {
      "Country": "Russian Federation",
      "Year": "2003",
      "Alcohol": "11.32",
      "Life.expectancy": "64.6"
    },
    {
      "Country": "Russian Federation",
      "Year": "2002",
      "Alcohol": "10.87",
      "Life.expectancy": "64.8"
    },
    {
      "Country": "Russian Federation",
      "Year": "2001",
      "Alcohol": "10.47",
      "Life.expectancy": "65.1"
    },
    {
      "Country": "Russian Federation",
      "Year": "2000",
      "Alcohol": "10.18",
      "Life.expectancy": "65"
    },
    {
      "Country": "Rwanda",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "66.1"
    },
    {
      "Country": "Rwanda",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "65.7"
    },
    {
      "Country": "Rwanda",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "65.2"
    },
    {
      "Country": "Rwanda",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "64.6"
    },
    {
      "Country": "Rwanda",
      "Year": "2011",
      "Alcohol": "8.34",
      "Life.expectancy": "63.8"
    },
    {
      "Country": "Rwanda",
      "Year": "2010",
      "Alcohol": "7.92",
      "Life.expectancy": "62.8"
    },
    {
      "Country": "Rwanda",
      "Year": "2009",
      "Alcohol": "7.11",
      "Life.expectancy": "61"
    },
    {
      "Country": "Rwanda",
      "Year": "2008",
      "Alcohol": "6.39",
      "Life.expectancy": "68"
    },
    {
      "Country": "Rwanda",
      "Year": "2007",
      "Alcohol": "6.78",
      "Life.expectancy": "59.6"
    },
    {
      "Country": "Rwanda",
      "Year": "2006",
      "Alcohol": "6.88",
      "Life.expectancy": "57.6"
    },
    {
      "Country": "Rwanda",
      "Year": "2005",
      "Alcohol": "7.01",
      "Life.expectancy": "55.3"
    },
    {
      "Country": "Rwanda",
      "Year": "2004",
      "Alcohol": "6.75",
      "Life.expectancy": "53.4"
    },
    {
      "Country": "Rwanda",
      "Year": "2003",
      "Alcohol": "6.66",
      "Life.expectancy": "52"
    },
    {
      "Country": "Rwanda",
      "Year": "2002",
      "Alcohol": "7.82",
      "Life.expectancy": "57"
    },
    {
      "Country": "Rwanda",
      "Year": "2001",
      "Alcohol": "5.72",
      "Life.expectancy": "48.6"
    },
    {
      "Country": "Rwanda",
      "Year": "2000",
      "Alcohol": "7.13",
      "Life.expectancy": "48.3"
    },
    {
      "Country": "Saint Kitts and Nevis",
      "Year": "2013",
      "Alcohol": "8.54",
      "Life.expectancy": "0"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "75.2"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2014",
      "Alcohol": "9.97",
      "Life.expectancy": "75"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2013",
      "Alcohol": "9.73",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2012",
      "Alcohol": "9.99",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2011",
      "Alcohol": "10.43",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2010",
      "Alcohol": "10.87",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2009",
      "Alcohol": "11.09",
      "Life.expectancy": "74.3"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2008",
      "Alcohol": "12.09",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2007",
      "Alcohol": "12.68",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2006",
      "Alcohol": "13.45",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2005",
      "Alcohol": "12.32",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2004",
      "Alcohol": "11.93",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2003",
      "Alcohol": "12.55",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2002",
      "Alcohol": "11.85",
      "Life.expectancy": "72"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2001",
      "Alcohol": "12.03",
      "Life.expectancy": "71.8"
    },
    {
      "Country": "Saint Lucia",
      "Year": "2000",
      "Alcohol": "11.69",
      "Life.expectancy": "71.6"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2014",
      "Alcohol": "7.01",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2013",
      "Alcohol": "7.07",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2012",
      "Alcohol": "6.93",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2011",
      "Alcohol": "7.02",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2010",
      "Alcohol": "7",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2009",
      "Alcohol": "6.85",
      "Life.expectancy": "72.3"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2008",
      "Alcohol": "6.92",
      "Life.expectancy": "72.1"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2007",
      "Alcohol": "5.89",
      "Life.expectancy": "71.9"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2006",
      "Alcohol": "5.93",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2005",
      "Alcohol": "6.04",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2004",
      "Alcohol": "5.42",
      "Life.expectancy": "71.2"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2003",
      "Alcohol": "5.1",
      "Life.expectancy": "71"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2002",
      "Alcohol": "4.94",
      "Life.expectancy": "79"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2001",
      "Alcohol": "4.73",
      "Life.expectancy": "79"
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "Year": "2000",
      "Alcohol": "4.8",
      "Life.expectancy": "79"
    },
    {
      "Country": "Samoa",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "74"
    },
    {
      "Country": "Samoa",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Samoa",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Samoa",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Samoa",
      "Year": "2011",
      "Alcohol": "2.15",
      "Life.expectancy": "73"
    },
    {
      "Country": "Samoa",
      "Year": "2010",
      "Alcohol": "3.01",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Samoa",
      "Year": "2009",
      "Alcohol": "2.88",
      "Life.expectancy": "76"
    },
    {
      "Country": "Samoa",
      "Year": "2008",
      "Alcohol": "3.97",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Samoa",
      "Year": "2007",
      "Alcohol": "3.85",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "Samoa",
      "Year": "2006",
      "Alcohol": "3.52",
      "Life.expectancy": "72"
    },
    {
      "Country": "Samoa",
      "Year": "2005",
      "Alcohol": "3.63",
      "Life.expectancy": "71.6"
    },
    {
      "Country": "Samoa",
      "Year": "2004",
      "Alcohol": "3.62",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "Samoa",
      "Year": "2003",
      "Alcohol": "4.17",
      "Life.expectancy": "79"
    },
    {
      "Country": "Samoa",
      "Year": "2002",
      "Alcohol": "3.3",
      "Life.expectancy": "76"
    },
    {
      "Country": "Samoa",
      "Year": "2001",
      "Alcohol": "3.43",
      "Life.expectancy": "75"
    },
    {
      "Country": "Samoa",
      "Year": "2000",
      "Alcohol": "3",
      "Life.expectancy": "72"
    },
    {
      "Country": "San Marino",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "0"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "67.5"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "67.3"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "67.1"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "66.9"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2011",
      "Alcohol": "5.69",
      "Life.expectancy": "66.6"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2010",
      "Alcohol": "5.58",
      "Life.expectancy": "66.2"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2009",
      "Alcohol": "4.13",
      "Life.expectancy": "65.8"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2008",
      "Alcohol": "4.36",
      "Life.expectancy": "65.4"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2007",
      "Alcohol": "4.14",
      "Life.expectancy": "65.1"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2006",
      "Alcohol": "5.46",
      "Life.expectancy": "64.7"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2005",
      "Alcohol": "5.27",
      "Life.expectancy": "64.3"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2004",
      "Alcohol": "5.78",
      "Life.expectancy": "63.8"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2003",
      "Alcohol": "6.54",
      "Life.expectancy": "63.4"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2002",
      "Alcohol": "5.8",
      "Life.expectancy": "63.1"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2001",
      "Alcohol": "5.02",
      "Life.expectancy": "62.8"
    },
    {
      "Country": "Sao Tome and Principe",
      "Year": "2000",
      "Alcohol": "5.07",
      "Life.expectancy": "62.6"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2014",
      "Alcohol": "0.09",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2013",
      "Alcohol": "0.09",
      "Life.expectancy": "74.3"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2012",
      "Alcohol": "0.09",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2011",
      "Alcohol": "0.09",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2010",
      "Alcohol": "0.09",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2009",
      "Alcohol": "0.09",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2008",
      "Alcohol": "0.09",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2007",
      "Alcohol": "0.1",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2006",
      "Alcohol": "0.08",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2005",
      "Alcohol": "0.05",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2004",
      "Alcohol": "0.06",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2003",
      "Alcohol": "0.05",
      "Life.expectancy": "73"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2002",
      "Alcohol": "0.05",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2001",
      "Alcohol": "0.05",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Saudi Arabia",
      "Year": "2000",
      "Alcohol": "0.05",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Senegal",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "66.7"
    },
    {
      "Country": "Senegal",
      "Year": "2014",
      "Alcohol": "0.26",
      "Life.expectancy": "66.4"
    },
    {
      "Country": "Senegal",
      "Year": "2013",
      "Alcohol": "0.26",
      "Life.expectancy": "66"
    },
    {
      "Country": "Senegal",
      "Year": "2012",
      "Alcohol": "0.28",
      "Life.expectancy": "65.6"
    },
    {
      "Country": "Senegal",
      "Year": "2011",
      "Alcohol": "0.32",
      "Life.expectancy": "64.9"
    },
    {
      "Country": "Senegal",
      "Year": "2010",
      "Alcohol": "0.28",
      "Life.expectancy": "64.3"
    },
    {
      "Country": "Senegal",
      "Year": "2009",
      "Alcohol": "0.3",
      "Life.expectancy": "63.5"
    },
    {
      "Country": "Senegal",
      "Year": "2008",
      "Alcohol": "0.28",
      "Life.expectancy": "62.8"
    },
    {
      "Country": "Senegal",
      "Year": "2007",
      "Alcohol": "0.32",
      "Life.expectancy": "62.1"
    },
    {
      "Country": "Senegal",
      "Year": "2006",
      "Alcohol": "0.34",
      "Life.expectancy": "61.3"
    },
    {
      "Country": "Senegal",
      "Year": "2005",
      "Alcohol": "0.33",
      "Life.expectancy": "65"
    },
    {
      "Country": "Senegal",
      "Year": "2004",
      "Alcohol": "0.35",
      "Life.expectancy": "59.7"
    },
    {
      "Country": "Senegal",
      "Year": "2003",
      "Alcohol": "0.33",
      "Life.expectancy": "59"
    },
    {
      "Country": "Senegal",
      "Year": "2002",
      "Alcohol": "0.36",
      "Life.expectancy": "58.4"
    },
    {
      "Country": "Senegal",
      "Year": "2001",
      "Alcohol": "0.34",
      "Life.expectancy": "57.9"
    },
    {
      "Country": "Senegal",
      "Year": "2000",
      "Alcohol": "0.29",
      "Life.expectancy": "57.5"
    },
    {
      "Country": "Serbia",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "Serbia",
      "Year": "2014",
      "Alcohol": "9.09",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Serbia",
      "Year": "2013",
      "Alcohol": "9.16",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "Serbia",
      "Year": "2012",
      "Alcohol": "9.38",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Serbia",
      "Year": "2011",
      "Alcohol": "9.56",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Serbia",
      "Year": "2010",
      "Alcohol": "9.65",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Serbia",
      "Year": "2009",
      "Alcohol": "9.85",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Serbia",
      "Year": "2008",
      "Alcohol": "9.54",
      "Life.expectancy": "74"
    },
    {
      "Country": "Serbia",
      "Year": "2007",
      "Alcohol": "9.3",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Serbia",
      "Year": "2006",
      "Alcohol": "8.58",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Serbia",
      "Year": "2005",
      "Alcohol": "9.6",
      "Life.expectancy": "73"
    },
    {
      "Country": "Serbia",
      "Year": "2004",
      "Alcohol": "7.42",
      "Life.expectancy": "73"
    },
    {
      "Country": "Serbia",
      "Year": "2003",
      "Alcohol": "7.25",
      "Life.expectancy": "73"
    },
    {
      "Country": "Serbia",
      "Year": "2002",
      "Alcohol": "6.95",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Serbia",
      "Year": "2001",
      "Alcohol": "7.53",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Serbia",
      "Year": "2000",
      "Alcohol": "7.38",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Seychelles",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Seychelles",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "73"
    },
    {
      "Country": "Seychelles",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Seychelles",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Seychelles",
      "Year": "2011",
      "Alcohol": "9.72",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Seychelles",
      "Year": "2010",
      "Alcohol": "6.51",
      "Life.expectancy": "72.4"
    },
    {
      "Country": "Seychelles",
      "Year": "2009",
      "Alcohol": "4.94",
      "Life.expectancy": "72.3"
    },
    {
      "Country": "Seychelles",
      "Year": "2008",
      "Alcohol": "6.33",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "Seychelles",
      "Year": "2007",
      "Alcohol": "8.12",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "Seychelles",
      "Year": "2006",
      "Alcohol": "8.12",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "Seychelles",
      "Year": "2005",
      "Alcohol": "7.82",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "Seychelles",
      "Year": "2004",
      "Alcohol": "7.91",
      "Life.expectancy": "72.1"
    },
    {
      "Country": "Seychelles",
      "Year": "2003",
      "Alcohol": "7.41",
      "Life.expectancy": "72.1"
    },
    {
      "Country": "Seychelles",
      "Year": "2002",
      "Alcohol": "11.15",
      "Life.expectancy": "72.1"
    },
    {
      "Country": "Seychelles",
      "Year": "2001",
      "Alcohol": "6.72",
      "Life.expectancy": "72"
    },
    {
      "Country": "Seychelles",
      "Year": "2000",
      "Alcohol": "8.24",
      "Life.expectancy": "71.8"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "51"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "48.1"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "54"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "49.7"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2011",
      "Alcohol": "3.78",
      "Life.expectancy": "48.9"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2010",
      "Alcohol": "3.84",
      "Life.expectancy": "48.1"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2009",
      "Alcohol": "3.97",
      "Life.expectancy": "47.1"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2008",
      "Alcohol": "3.91",
      "Life.expectancy": "46.2"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2007",
      "Alcohol": "3.86",
      "Life.expectancy": "45.3"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2006",
      "Alcohol": "3.8",
      "Life.expectancy": "44.3"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2005",
      "Alcohol": "3.83",
      "Life.expectancy": "43.3"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2004",
      "Alcohol": "3.99",
      "Life.expectancy": "42.3"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2003",
      "Alcohol": "4.07",
      "Life.expectancy": "41.5"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2002",
      "Alcohol": "4.06",
      "Life.expectancy": "48"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2001",
      "Alcohol": "4.21",
      "Life.expectancy": "41"
    },
    {
      "Country": "Sierra Leone",
      "Year": "2000",
      "Alcohol": "3.97",
      "Life.expectancy": "39"
    },
    {
      "Country": "Singapore",
      "Year": "2015",
      "Alcohol": "1.79",
      "Life.expectancy": "83.1"
    },
    {
      "Country": "Singapore",
      "Year": "2014",
      "Alcohol": "1.83",
      "Life.expectancy": "82.9"
    },
    {
      "Country": "Singapore",
      "Year": "2013",
      "Alcohol": "1.83",
      "Life.expectancy": "82.7"
    },
    {
      "Country": "Singapore",
      "Year": "2012",
      "Alcohol": "1.89",
      "Life.expectancy": "82.5"
    },
    {
      "Country": "Singapore",
      "Year": "2011",
      "Alcohol": "1.8",
      "Life.expectancy": "82.2"
    },
    {
      "Country": "Singapore",
      "Year": "2010",
      "Alcohol": "1.84",
      "Life.expectancy": "82"
    },
    {
      "Country": "Singapore",
      "Year": "2009",
      "Alcohol": "1.73",
      "Life.expectancy": "81.7"
    },
    {
      "Country": "Singapore",
      "Year": "2008",
      "Alcohol": "1.7",
      "Life.expectancy": "81.4"
    },
    {
      "Country": "Singapore",
      "Year": "2007",
      "Alcohol": "1.6",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "Singapore",
      "Year": "2006",
      "Alcohol": "1.55",
      "Life.expectancy": "87"
    },
    {
      "Country": "Singapore",
      "Year": "2005",
      "Alcohol": "1.49",
      "Life.expectancy": "82"
    },
    {
      "Country": "Singapore",
      "Year": "2004",
      "Alcohol": "1.45",
      "Life.expectancy": "79.7"
    },
    {
      "Country": "Singapore",
      "Year": "2003",
      "Alcohol": "1.43",
      "Life.expectancy": "79.3"
    },
    {
      "Country": "Singapore",
      "Year": "2002",
      "Alcohol": "2.16",
      "Life.expectancy": "79"
    },
    {
      "Country": "Singapore",
      "Year": "2001",
      "Alcohol": "2.08",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "Singapore",
      "Year": "2000",
      "Alcohol": "2.03",
      "Life.expectancy": "78.3"
    },
    {
      "Country": "Slovakia",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "76.7"
    },
    {
      "Country": "Slovakia",
      "Year": "2014",
      "Alcohol": "10.6",
      "Life.expectancy": "76.4"
    },
    {
      "Country": "Slovakia",
      "Year": "2013",
      "Alcohol": "9.89",
      "Life.expectancy": "76.1"
    },
    {
      "Country": "Slovakia",
      "Year": "2012",
      "Alcohol": "10.12",
      "Life.expectancy": "75.8"
    },
    {
      "Country": "Slovakia",
      "Year": "2011",
      "Alcohol": "10.24",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "Slovakia",
      "Year": "2010",
      "Alcohol": "10.13",
      "Life.expectancy": "75.1"
    },
    {
      "Country": "Slovakia",
      "Year": "2009",
      "Alcohol": "10.63",
      "Life.expectancy": "75"
    },
    {
      "Country": "Slovakia",
      "Year": "2008",
      "Alcohol": "11.37",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Slovakia",
      "Year": "2007",
      "Alcohol": "10.58",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Slovakia",
      "Year": "2006",
      "Alcohol": "10.28",
      "Life.expectancy": "74.3"
    },
    {
      "Country": "Slovakia",
      "Year": "2005",
      "Alcohol": "10.81",
      "Life.expectancy": "74"
    },
    {
      "Country": "Slovakia",
      "Year": "2004",
      "Alcohol": "10.03",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Slovakia",
      "Year": "2003",
      "Alcohol": "9.85",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Slovakia",
      "Year": "2002",
      "Alcohol": "10.78",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Slovakia",
      "Year": "2001",
      "Alcohol": "10.73",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Slovakia",
      "Year": "2000",
      "Alcohol": "11.06",
      "Life.expectancy": "73"
    },
    {
      "Country": "Slovenia",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "88"
    },
    {
      "Country": "Slovenia",
      "Year": "2014",
      "Alcohol": "10.46",
      "Life.expectancy": "87"
    },
    {
      "Country": "Slovenia",
      "Year": "2013",
      "Alcohol": "9.53",
      "Life.expectancy": "85"
    },
    {
      "Country": "Slovenia",
      "Year": "2012",
      "Alcohol": "10.95",
      "Life.expectancy": "82"
    },
    {
      "Country": "Slovenia",
      "Year": "2011",
      "Alcohol": "10.61",
      "Life.expectancy": "79.8"
    },
    {
      "Country": "Slovenia",
      "Year": "2010",
      "Alcohol": "10.32",
      "Life.expectancy": "79.5"
    },
    {
      "Country": "Slovenia",
      "Year": "2009",
      "Alcohol": "10.52",
      "Life.expectancy": "79.1"
    },
    {
      "Country": "Slovenia",
      "Year": "2008",
      "Alcohol": "10.94",
      "Life.expectancy": "78.9"
    },
    {
      "Country": "Slovenia",
      "Year": "2007",
      "Alcohol": "11.02",
      "Life.expectancy": "78.3"
    },
    {
      "Country": "Slovenia",
      "Year": "2006",
      "Alcohol": "12.26",
      "Life.expectancy": "78.1"
    },
    {
      "Country": "Slovenia",
      "Year": "2005",
      "Alcohol": "11.14",
      "Life.expectancy": "77.5"
    },
    {
      "Country": "Slovenia",
      "Year": "2004",
      "Alcohol": "10",
      "Life.expectancy": "77.2"
    },
    {
      "Country": "Slovenia",
      "Year": "2003",
      "Alcohol": "11.58",
      "Life.expectancy": "76.5"
    },
    {
      "Country": "Slovenia",
      "Year": "2002",
      "Alcohol": "9.29",
      "Life.expectancy": "76.6"
    },
    {
      "Country": "Slovenia",
      "Year": "2001",
      "Alcohol": "10.8",
      "Life.expectancy": "76.2"
    },
    {
      "Country": "Slovenia",
      "Year": "2000",
      "Alcohol": "11.9",
      "Life.expectancy": "76"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "69.2"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "68.8"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "68.8"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "68.7"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2011",
      "Alcohol": "0.99",
      "Life.expectancy": "68.5"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2010",
      "Alcohol": "1.1",
      "Life.expectancy": "68.3"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2009",
      "Alcohol": "1.21",
      "Life.expectancy": "68.1"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2008",
      "Alcohol": "1.09",
      "Life.expectancy": "68"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2007",
      "Alcohol": "0.85",
      "Life.expectancy": "67.6"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2006",
      "Alcohol": "0.99",
      "Life.expectancy": "67.6"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2005",
      "Alcohol": "0.9",
      "Life.expectancy": "67.4"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2004",
      "Alcohol": "1.18",
      "Life.expectancy": "67.1"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2003",
      "Alcohol": "1.18",
      "Life.expectancy": "66.8"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2002",
      "Alcohol": "1.08",
      "Life.expectancy": "66.5"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2001",
      "Alcohol": "0.7",
      "Life.expectancy": "66.2"
    },
    {
      "Country": "Solomon Islands",
      "Year": "2000",
      "Alcohol": "0.71",
      "Life.expectancy": "65.8"
    },
    {
      "Country": "Somalia",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "55"
    },
    {
      "Country": "Somalia",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "54.3"
    },
    {
      "Country": "Somalia",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "54.2"
    },
    {
      "Country": "Somalia",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "53.1"
    },
    {
      "Country": "Somalia",
      "Year": "2011",
      "Alcohol": "0.01",
      "Life.expectancy": "53.1"
    },
    {
      "Country": "Somalia",
      "Year": "2010",
      "Alcohol": "0.01",
      "Life.expectancy": "52.4"
    },
    {
      "Country": "Somalia",
      "Year": "2009",
      "Alcohol": "0.01",
      "Life.expectancy": "52.2"
    },
    {
      "Country": "Somalia",
      "Year": "2008",
      "Alcohol": "0.01",
      "Life.expectancy": "51.9"
    },
    {
      "Country": "Somalia",
      "Year": "2007",
      "Alcohol": "0.01",
      "Life.expectancy": "51.5"
    },
    {
      "Country": "Somalia",
      "Year": "2006",
      "Alcohol": "0.01",
      "Life.expectancy": "51.5"
    },
    {
      "Country": "Somalia",
      "Year": "2005",
      "Alcohol": "0.01",
      "Life.expectancy": "51.6"
    },
    {
      "Country": "Somalia",
      "Year": "2004",
      "Alcohol": "0.01",
      "Life.expectancy": "51.2"
    },
    {
      "Country": "Somalia",
      "Year": "2003",
      "Alcohol": "0.01",
      "Life.expectancy": "51.1"
    },
    {
      "Country": "Somalia",
      "Year": "2002",
      "Alcohol": "0.01",
      "Life.expectancy": "58"
    },
    {
      "Country": "Somalia",
      "Year": "2001",
      "Alcohol": "0.01",
      "Life.expectancy": "57"
    },
    {
      "Country": "Somalia",
      "Year": "2000",
      "Alcohol": "0.01",
      "Life.expectancy": "55"
    },
    {
      "Country": "South Africa",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "62.9"
    },
    {
      "Country": "South Africa",
      "Year": "2014",
      "Alcohol": "7.38",
      "Life.expectancy": "62"
    },
    {
      "Country": "South Africa",
      "Year": "2013",
      "Alcohol": "7.34",
      "Life.expectancy": "69"
    },
    {
      "Country": "South Africa",
      "Year": "2012",
      "Alcohol": "7.38",
      "Life.expectancy": "59.2"
    },
    {
      "Country": "South Africa",
      "Year": "2011",
      "Alcohol": "7.38",
      "Life.expectancy": "58.9"
    },
    {
      "Country": "South Africa",
      "Year": "2010",
      "Alcohol": "7.28",
      "Life.expectancy": "58"
    },
    {
      "Country": "South Africa",
      "Year": "2009",
      "Alcohol": "7.6",
      "Life.expectancy": "56.5"
    },
    {
      "Country": "South Africa",
      "Year": "2008",
      "Alcohol": "8.19",
      "Life.expectancy": "55.3"
    },
    {
      "Country": "South Africa",
      "Year": "2007",
      "Alcohol": "8.48",
      "Life.expectancy": "54.5"
    },
    {
      "Country": "South Africa",
      "Year": "2006",
      "Alcohol": "8.5",
      "Life.expectancy": "54"
    },
    {
      "Country": "South Africa",
      "Year": "2005",
      "Alcohol": "8.69",
      "Life.expectancy": "53.8"
    },
    {
      "Country": "South Africa",
      "Year": "2004",
      "Alcohol": "6.96",
      "Life.expectancy": "53.7"
    },
    {
      "Country": "South Africa",
      "Year": "2003",
      "Alcohol": "6.93",
      "Life.expectancy": "54"
    },
    {
      "Country": "South Africa",
      "Year": "2002",
      "Alcohol": "7.04",
      "Life.expectancy": "54.9"
    },
    {
      "Country": "South Africa",
      "Year": "2001",
      "Alcohol": "7.38",
      "Life.expectancy": "56"
    },
    {
      "Country": "South Africa",
      "Year": "2000",
      "Alcohol": "7.3",
      "Life.expectancy": "57.3"
    },
    {
      "Country": "South Sudan",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "57.3"
    },
    {
      "Country": "South Sudan",
      "Year": "2014",
      "Alcohol": "0",
      "Life.expectancy": "56.6"
    },
    {
      "Country": "South Sudan",
      "Year": "2013",
      "Alcohol": "0",
      "Life.expectancy": "56.4"
    },
    {
      "Country": "South Sudan",
      "Year": "2012",
      "Alcohol": "0",
      "Life.expectancy": "56"
    },
    {
      "Country": "South Sudan",
      "Year": "2011",
      "Alcohol": "0",
      "Life.expectancy": "55.4"
    },
    {
      "Country": "South Sudan",
      "Year": "2010",
      "Alcohol": "0",
      "Life.expectancy": "55"
    },
    {
      "Country": "South Sudan",
      "Year": "2009",
      "Alcohol": "0",
      "Life.expectancy": "54.3"
    },
    {
      "Country": "South Sudan",
      "Year": "2008",
      "Alcohol": "0",
      "Life.expectancy": "53.6"
    },
    {
      "Country": "South Sudan",
      "Year": "2007",
      "Alcohol": "0",
      "Life.expectancy": "53.1"
    },
    {
      "Country": "South Sudan",
      "Year": "2006",
      "Alcohol": "0",
      "Life.expectancy": "52.5"
    },
    {
      "Country": "South Sudan",
      "Year": "2005",
      "Alcohol": "0",
      "Life.expectancy": "51.9"
    },
    {
      "Country": "South Sudan",
      "Year": "2004",
      "Alcohol": "0",
      "Life.expectancy": "51.4"
    },
    {
      "Country": "South Sudan",
      "Year": "2003",
      "Alcohol": "0",
      "Life.expectancy": "58"
    },
    {
      "Country": "South Sudan",
      "Year": "2002",
      "Alcohol": "0",
      "Life.expectancy": "52"
    },
    {
      "Country": "South Sudan",
      "Year": "2001",
      "Alcohol": "0",
      "Life.expectancy": "49.6"
    },
    {
      "Country": "South Sudan",
      "Year": "2000",
      "Alcohol": "0",
      "Life.expectancy": "48.9"
    },
    {
      "Country": "Spain",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "82.8"
    },
    {
      "Country": "Spain",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "82.6"
    },
    {
      "Country": "Spain",
      "Year": "2013",
      "Alcohol": "9.25",
      "Life.expectancy": "82.4"
    },
    {
      "Country": "Spain",
      "Year": "2012",
      "Alcohol": "9.35",
      "Life.expectancy": "82"
    },
    {
      "Country": "Spain",
      "Year": "2011",
      "Alcohol": "9.62",
      "Life.expectancy": "82.1"
    },
    {
      "Country": "Spain",
      "Year": "2010",
      "Alcohol": "9.78",
      "Life.expectancy": "81.9"
    },
    {
      "Country": "Spain",
      "Year": "2009",
      "Alcohol": "9.99",
      "Life.expectancy": "81.6"
    },
    {
      "Country": "Spain",
      "Year": "2008",
      "Alcohol": "10.24",
      "Life.expectancy": "81.3"
    },
    {
      "Country": "Spain",
      "Year": "2007",
      "Alcohol": "11.05",
      "Life.expectancy": "89"
    },
    {
      "Country": "Spain",
      "Year": "2006",
      "Alcohol": "11.86",
      "Life.expectancy": "88"
    },
    {
      "Country": "Spain",
      "Year": "2005",
      "Alcohol": "11.92",
      "Life.expectancy": "81"
    },
    {
      "Country": "Spain",
      "Year": "2004",
      "Alcohol": "11.96",
      "Life.expectancy": "81"
    },
    {
      "Country": "Spain",
      "Year": "2003",
      "Alcohol": "12.09",
      "Life.expectancy": "79.4"
    },
    {
      "Country": "Spain",
      "Year": "2002",
      "Alcohol": "12.26",
      "Life.expectancy": "79.5"
    },
    {
      "Country": "Spain",
      "Year": "2001",
      "Alcohol": "9.86",
      "Life.expectancy": "79.4"
    },
    {
      "Country": "Spain",
      "Year": "2000",
      "Alcohol": "11.12",
      "Life.expectancy": "79.1"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2014",
      "Alcohol": "2.37",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2013",
      "Alcohol": "2.56",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2012",
      "Alcohol": "2.8",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2011",
      "Alcohol": "3.03",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2010",
      "Alcohol": "2.31",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2009",
      "Alcohol": "2.05",
      "Life.expectancy": "71.8"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2008",
      "Alcohol": "2.1",
      "Life.expectancy": "72.3"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2007",
      "Alcohol": "2.29",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2006",
      "Alcohol": "1.96",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2005",
      "Alcohol": "1.97",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2004",
      "Alcohol": "1.56",
      "Life.expectancy": "69.1"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2003",
      "Alcohol": "1.69",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2002",
      "Alcohol": "1.62",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2001",
      "Alcohol": "1.68",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Sri Lanka",
      "Year": "2000",
      "Alcohol": "1.45",
      "Life.expectancy": "71.5"
    },
    {
      "Country": "Sudan",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "64.1"
    },
    {
      "Country": "Sudan",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "63.8"
    },
    {
      "Country": "Sudan",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "63.5"
    },
    {
      "Country": "Sudan",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "63.2"
    },
    {
      "Country": "Sudan",
      "Year": "2011",
      "Alcohol": "2.12",
      "Life.expectancy": "62.7"
    },
    {
      "Country": "Sudan",
      "Year": "2010",
      "Alcohol": "1.77",
      "Life.expectancy": "62.5"
    },
    {
      "Country": "Sudan",
      "Year": "2009",
      "Alcohol": "1.99",
      "Life.expectancy": "62"
    },
    {
      "Country": "Sudan",
      "Year": "2008",
      "Alcohol": "2.01",
      "Life.expectancy": "61.8"
    },
    {
      "Country": "Sudan",
      "Year": "2007",
      "Alcohol": "2.01",
      "Life.expectancy": "61.4"
    },
    {
      "Country": "Sudan",
      "Year": "2006",
      "Alcohol": "1.9",
      "Life.expectancy": "61"
    },
    {
      "Country": "Sudan",
      "Year": "2005",
      "Alcohol": "1.55",
      "Life.expectancy": "67"
    },
    {
      "Country": "Sudan",
      "Year": "2004",
      "Alcohol": "1.59",
      "Life.expectancy": "59.7"
    },
    {
      "Country": "Sudan",
      "Year": "2003",
      "Alcohol": "1.74",
      "Life.expectancy": "59.6"
    },
    {
      "Country": "Sudan",
      "Year": "2002",
      "Alcohol": "1.59",
      "Life.expectancy": "59.4"
    },
    {
      "Country": "Sudan",
      "Year": "2001",
      "Alcohol": "1.81",
      "Life.expectancy": "58.9"
    },
    {
      "Country": "Sudan",
      "Year": "2000",
      "Alcohol": "1.76",
      "Life.expectancy": "58.6"
    },
    {
      "Country": "Suriname",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "71.6"
    },
    {
      "Country": "Suriname",
      "Year": "2014",
      "Alcohol": "6.32",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "Suriname",
      "Year": "2013",
      "Alcohol": "6.02",
      "Life.expectancy": "71.2"
    },
    {
      "Country": "Suriname",
      "Year": "2012",
      "Alcohol": "5.73",
      "Life.expectancy": "71.3"
    },
    {
      "Country": "Suriname",
      "Year": "2011",
      "Alcohol": "5.64",
      "Life.expectancy": "76"
    },
    {
      "Country": "Suriname",
      "Year": "2010",
      "Alcohol": "5.26",
      "Life.expectancy": "73"
    },
    {
      "Country": "Suriname",
      "Year": "2009",
      "Alcohol": "5.13",
      "Life.expectancy": "70"
    },
    {
      "Country": "Suriname",
      "Year": "2008",
      "Alcohol": "4.94",
      "Life.expectancy": "69.8"
    },
    {
      "Country": "Suriname",
      "Year": "2007",
      "Alcohol": "4.72",
      "Life.expectancy": "69.5"
    },
    {
      "Country": "Suriname",
      "Year": "2006",
      "Alcohol": "4.52",
      "Life.expectancy": "69.3"
    },
    {
      "Country": "Suriname",
      "Year": "2005",
      "Alcohol": "4.47",
      "Life.expectancy": "68.9"
    },
    {
      "Country": "Suriname",
      "Year": "2004",
      "Alcohol": "4.55",
      "Life.expectancy": "68.3"
    },
    {
      "Country": "Suriname",
      "Year": "2003",
      "Alcohol": "4.53",
      "Life.expectancy": "68"
    },
    {
      "Country": "Suriname",
      "Year": "2002",
      "Alcohol": "4.41",
      "Life.expectancy": "67.9"
    },
    {
      "Country": "Suriname",
      "Year": "2001",
      "Alcohol": "4.23",
      "Life.expectancy": "67.7"
    },
    {
      "Country": "Suriname",
      "Year": "2000",
      "Alcohol": "4.29",
      "Life.expectancy": "67.4"
    },
    {
      "Country": "Swaziland",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "58.9"
    },
    {
      "Country": "Swaziland",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "58.4"
    },
    {
      "Country": "Swaziland",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "57.6"
    },
    {
      "Country": "Swaziland",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "56.5"
    },
    {
      "Country": "Swaziland",
      "Year": "2011",
      "Alcohol": "5.2",
      "Life.expectancy": "55"
    },
    {
      "Country": "Swaziland",
      "Year": "2010",
      "Alcohol": "4.93",
      "Life.expectancy": "53.6"
    },
    {
      "Country": "Swaziland",
      "Year": "2009",
      "Alcohol": "4.9",
      "Life.expectancy": "52.6"
    },
    {
      "Country": "Swaziland",
      "Year": "2008",
      "Alcohol": "4.87",
      "Life.expectancy": "51.4"
    },
    {
      "Country": "Swaziland",
      "Year": "2007",
      "Alcohol": "5.55",
      "Life.expectancy": "50"
    },
    {
      "Country": "Swaziland",
      "Year": "2006",
      "Alcohol": "5.53",
      "Life.expectancy": "47.8"
    },
    {
      "Country": "Swaziland",
      "Year": "2005",
      "Alcohol": "5.08",
      "Life.expectancy": "46"
    },
    {
      "Country": "Swaziland",
      "Year": "2004",
      "Alcohol": "5.78",
      "Life.expectancy": "45.6"
    },
    {
      "Country": "Swaziland",
      "Year": "2003",
      "Alcohol": "5.65",
      "Life.expectancy": "45.9"
    },
    {
      "Country": "Swaziland",
      "Year": "2002",
      "Alcohol": "5.52",
      "Life.expectancy": "46.4"
    },
    {
      "Country": "Swaziland",
      "Year": "2001",
      "Alcohol": "6.72",
      "Life.expectancy": "47.1"
    },
    {
      "Country": "Swaziland",
      "Year": "2000",
      "Alcohol": "7.19",
      "Life.expectancy": "48.4"
    },
    {
      "Country": "Sweden",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "82.4"
    },
    {
      "Country": "Sweden",
      "Year": "2014",
      "Alcohol": "7.3",
      "Life.expectancy": "82.3"
    },
    {
      "Country": "Sweden",
      "Year": "2013",
      "Alcohol": "7.3",
      "Life.expectancy": "81.9"
    },
    {
      "Country": "Sweden",
      "Year": "2012",
      "Alcohol": "7.4",
      "Life.expectancy": "81.7"
    },
    {
      "Country": "Sweden",
      "Year": "2011",
      "Alcohol": "7.4",
      "Life.expectancy": "81.7"
    },
    {
      "Country": "Sweden",
      "Year": "2010",
      "Alcohol": "7.2",
      "Life.expectancy": "81.5"
    },
    {
      "Country": "Sweden",
      "Year": "2009",
      "Alcohol": "7.3",
      "Life.expectancy": "81.4"
    },
    {
      "Country": "Sweden",
      "Year": "2008",
      "Alcohol": "6.9",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "Sweden",
      "Year": "2007",
      "Alcohol": "6.9",
      "Life.expectancy": "89"
    },
    {
      "Country": "Sweden",
      "Year": "2006",
      "Alcohol": "6.5",
      "Life.expectancy": "88"
    },
    {
      "Country": "Sweden",
      "Year": "2005",
      "Alcohol": "6.5",
      "Life.expectancy": "85"
    },
    {
      "Country": "Sweden",
      "Year": "2004",
      "Alcohol": "6.6",
      "Life.expectancy": "83"
    },
    {
      "Country": "Sweden",
      "Year": "2003",
      "Alcohol": "6.9",
      "Life.expectancy": "82"
    },
    {
      "Country": "Sweden",
      "Year": "2002",
      "Alcohol": "6.9",
      "Life.expectancy": "79.9"
    },
    {
      "Country": "Sweden",
      "Year": "2001",
      "Alcohol": "6.6",
      "Life.expectancy": "79.8"
    },
    {
      "Country": "Sweden",
      "Year": "2000",
      "Alcohol": "6.2",
      "Life.expectancy": "79.6"
    },
    {
      "Country": "Switzerland",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "83.4"
    },
    {
      "Country": "Switzerland",
      "Year": "2014",
      "Alcohol": "9.61",
      "Life.expectancy": "83.2"
    },
    {
      "Country": "Switzerland",
      "Year": "2013",
      "Alcohol": "9.73",
      "Life.expectancy": "83"
    },
    {
      "Country": "Switzerland",
      "Year": "2012",
      "Alcohol": "9.86",
      "Life.expectancy": "82.7"
    },
    {
      "Country": "Switzerland",
      "Year": "2011",
      "Alcohol": "9.99",
      "Life.expectancy": "82.6"
    },
    {
      "Country": "Switzerland",
      "Year": "2010",
      "Alcohol": "10.01",
      "Life.expectancy": "82.3"
    },
    {
      "Country": "Switzerland",
      "Year": "2009",
      "Alcohol": "10.15",
      "Life.expectancy": "82.1"
    },
    {
      "Country": "Switzerland",
      "Year": "2008",
      "Alcohol": "10.29",
      "Life.expectancy": "82"
    },
    {
      "Country": "Switzerland",
      "Year": "2007",
      "Alcohol": "10.44",
      "Life.expectancy": "81.7"
    },
    {
      "Country": "Switzerland",
      "Year": "2006",
      "Alcohol": "10.24",
      "Life.expectancy": "81.5"
    },
    {
      "Country": "Switzerland",
      "Year": "2005",
      "Alcohol": "10.15",
      "Life.expectancy": "81.1"
    },
    {
      "Country": "Switzerland",
      "Year": "2004",
      "Alcohol": "10.55",
      "Life.expectancy": "81"
    },
    {
      "Country": "Switzerland",
      "Year": "2003",
      "Alcohol": "10.82",
      "Life.expectancy": "85"
    },
    {
      "Country": "Switzerland",
      "Year": "2002",
      "Alcohol": "10.85",
      "Life.expectancy": "84"
    },
    {
      "Country": "Switzerland",
      "Year": "2001",
      "Alcohol": "11.12",
      "Life.expectancy": "82"
    },
    {
      "Country": "Switzerland",
      "Year": "2000",
      "Alcohol": "11.26",
      "Life.expectancy": "79.7"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "64.5"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "64.4"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "63.6"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "62.8"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2011",
      "Alcohol": "0.76",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2010",
      "Alcohol": "0.78",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2009",
      "Alcohol": "0.81",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2008",
      "Alcohol": "0.8",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2007",
      "Alcohol": "0.83",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2006",
      "Alcohol": "0.97",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2005",
      "Alcohol": "0.92",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2004",
      "Alcohol": "0.93",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2003",
      "Alcohol": "1.29",
      "Life.expectancy": "73"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2002",
      "Alcohol": "1.25",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2001",
      "Alcohol": "1.29",
      "Life.expectancy": "72.7"
    },
    {
      "Country": "Syrian Arab Republic",
      "Year": "2000",
      "Alcohol": "1.41",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Tajikistan",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "69.7"
    },
    {
      "Country": "Tajikistan",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "69.6"
    },
    {
      "Country": "Tajikistan",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "69.3"
    },
    {
      "Country": "Tajikistan",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "68.8"
    },
    {
      "Country": "Tajikistan",
      "Year": "2011",
      "Alcohol": "0.32",
      "Life.expectancy": "68.1"
    },
    {
      "Country": "Tajikistan",
      "Year": "2010",
      "Alcohol": "0.32",
      "Life.expectancy": "67.3"
    },
    {
      "Country": "Tajikistan",
      "Year": "2009",
      "Alcohol": "0.3",
      "Life.expectancy": "66.7"
    },
    {
      "Country": "Tajikistan",
      "Year": "2008",
      "Alcohol": "0.32",
      "Life.expectancy": "66.4"
    },
    {
      "Country": "Tajikistan",
      "Year": "2007",
      "Alcohol": "0.35",
      "Life.expectancy": "66.1"
    },
    {
      "Country": "Tajikistan",
      "Year": "2006",
      "Alcohol": "0.38",
      "Life.expectancy": "65.9"
    },
    {
      "Country": "Tajikistan",
      "Year": "2005",
      "Alcohol": "0.37",
      "Life.expectancy": "65.5"
    },
    {
      "Country": "Tajikistan",
      "Year": "2004",
      "Alcohol": "0.38",
      "Life.expectancy": "65.9"
    },
    {
      "Country": "Tajikistan",
      "Year": "2003",
      "Alcohol": "0.36",
      "Life.expectancy": "65.2"
    },
    {
      "Country": "Tajikistan",
      "Year": "2002",
      "Alcohol": "0.6",
      "Life.expectancy": "64.3"
    },
    {
      "Country": "Tajikistan",
      "Year": "2001",
      "Alcohol": "0.86",
      "Life.expectancy": "64"
    },
    {
      "Country": "Tajikistan",
      "Year": "2000",
      "Alcohol": "0.37",
      "Life.expectancy": "63.7"
    },
    {
      "Country": "Thailand",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Thailand",
      "Year": "2014",
      "Alcohol": "6.41",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Thailand",
      "Year": "2013",
      "Alcohol": "6.5",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Thailand",
      "Year": "2012",
      "Alcohol": "6.56",
      "Life.expectancy": "74.3"
    },
    {
      "Country": "Thailand",
      "Year": "2011",
      "Alcohol": "6.07",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Thailand",
      "Year": "2010",
      "Alcohol": "5.95",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Thailand",
      "Year": "2009",
      "Alcohol": "5.88",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Thailand",
      "Year": "2008",
      "Alcohol": "5.92",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Thailand",
      "Year": "2007",
      "Alcohol": "6.2",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Thailand",
      "Year": "2006",
      "Alcohol": "6.18",
      "Life.expectancy": "73"
    },
    {
      "Country": "Thailand",
      "Year": "2005",
      "Alcohol": "6.26",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Thailand",
      "Year": "2004",
      "Alcohol": "6.17",
      "Life.expectancy": "71.6"
    },
    {
      "Country": "Thailand",
      "Year": "2003",
      "Alcohol": "6.14",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "Thailand",
      "Year": "2002",
      "Alcohol": "5.93",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "Thailand",
      "Year": "2001",
      "Alcohol": "5.92",
      "Life.expectancy": "71.2"
    },
    {
      "Country": "Thailand",
      "Year": "2000",
      "Alcohol": "5.88",
      "Life.expectancy": "71.1"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "75.7"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2014",
      "Alcohol": "1.13",
      "Life.expectancy": "75.5"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2013",
      "Alcohol": "1.03",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2012",
      "Alcohol": "1.23",
      "Life.expectancy": "75.1"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2011",
      "Alcohol": "1.16",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2010",
      "Alcohol": "1.47",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2009",
      "Alcohol": "1.77",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2008",
      "Alcohol": "1.72",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2007",
      "Alcohol": "1.75",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2006",
      "Alcohol": "1.74",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2005",
      "Alcohol": "1.75",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2004",
      "Alcohol": "2.07",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2003",
      "Alcohol": "2.4",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2002",
      "Alcohol": "2.53",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2001",
      "Alcohol": "3.27",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "The former Yugoslav republic of Macedonia",
      "Year": "2000",
      "Alcohol": "2.86",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "68.3"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "68"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "67.7"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "67.4"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2011",
      "Alcohol": "0.5",
      "Life.expectancy": "67.2"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2010",
      "Alcohol": "0.1",
      "Life.expectancy": "66.9"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2009",
      "Alcohol": "0.09",
      "Life.expectancy": "66.6"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2008",
      "Alcohol": "0.06",
      "Life.expectancy": "66.2"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2007",
      "Alcohol": "0.05",
      "Life.expectancy": "65.8"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2006",
      "Alcohol": "0.04",
      "Life.expectancy": "64.9"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2005",
      "Alcohol": "0.36",
      "Life.expectancy": "63.7"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2004",
      "Alcohol": "0.38",
      "Life.expectancy": "62.3"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2003",
      "Alcohol": "0.44",
      "Life.expectancy": "61"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2002",
      "Alcohol": "0.48",
      "Life.expectancy": "62"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2001",
      "Alcohol": "0.5",
      "Life.expectancy": "59.4"
    },
    {
      "Country": "Timor-Leste",
      "Year": "2000",
      "Alcohol": "0.5",
      "Life.expectancy": "58.7"
    },
    {
      "Country": "Togo",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "59.9"
    },
    {
      "Country": "Togo",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "59.7"
    },
    {
      "Country": "Togo",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "59.4"
    },
    {
      "Country": "Togo",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "58.9"
    },
    {
      "Country": "Togo",
      "Year": "2011",
      "Alcohol": "1.44",
      "Life.expectancy": "58.3"
    },
    {
      "Country": "Togo",
      "Year": "2010",
      "Alcohol": "1.21",
      "Life.expectancy": "57.4"
    },
    {
      "Country": "Togo",
      "Year": "2009",
      "Alcohol": "1.24",
      "Life.expectancy": "56.7"
    },
    {
      "Country": "Togo",
      "Year": "2008",
      "Alcohol": "1.33",
      "Life.expectancy": "56.2"
    },
    {
      "Country": "Togo",
      "Year": "2007",
      "Alcohol": "1.37",
      "Life.expectancy": "55.9"
    },
    {
      "Country": "Togo",
      "Year": "2006",
      "Alcohol": "1.37",
      "Life.expectancy": "55.7"
    },
    {
      "Country": "Togo",
      "Year": "2005",
      "Alcohol": "1.14",
      "Life.expectancy": "55"
    },
    {
      "Country": "Togo",
      "Year": "2004",
      "Alcohol": "1.01",
      "Life.expectancy": "54.9"
    },
    {
      "Country": "Togo",
      "Year": "2003",
      "Alcohol": "1.02",
      "Life.expectancy": "54.7"
    },
    {
      "Country": "Togo",
      "Year": "2002",
      "Alcohol": "1",
      "Life.expectancy": "54.7"
    },
    {
      "Country": "Togo",
      "Year": "2001",
      "Alcohol": "0.95",
      "Life.expectancy": "54.6"
    },
    {
      "Country": "Togo",
      "Year": "2000",
      "Alcohol": "1.1",
      "Life.expectancy": "54.6"
    },
    {
      "Country": "Tonga",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Tonga",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Tonga",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Tonga",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "73"
    },
    {
      "Country": "Tonga",
      "Year": "2011",
      "Alcohol": "0.96",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Tonga",
      "Year": "2010",
      "Alcohol": "1.24",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Tonga",
      "Year": "2009",
      "Alcohol": "1.08",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Tonga",
      "Year": "2008",
      "Alcohol": "1.1",
      "Life.expectancy": "72.6"
    },
    {
      "Country": "Tonga",
      "Year": "2007",
      "Alcohol": "2.05",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Tonga",
      "Year": "2006",
      "Alcohol": "1.79",
      "Life.expectancy": "72.4"
    },
    {
      "Country": "Tonga",
      "Year": "2005",
      "Alcohol": "1.57",
      "Life.expectancy": "72.3"
    },
    {
      "Country": "Tonga",
      "Year": "2004",
      "Alcohol": "1.8",
      "Life.expectancy": "72.2"
    },
    {
      "Country": "Tonga",
      "Year": "2003",
      "Alcohol": "1.79",
      "Life.expectancy": "72"
    },
    {
      "Country": "Tonga",
      "Year": "2002",
      "Alcohol": "1.51",
      "Life.expectancy": "71.9"
    },
    {
      "Country": "Tonga",
      "Year": "2001",
      "Alcohol": "1.35",
      "Life.expectancy": "71.8"
    },
    {
      "Country": "Tonga",
      "Year": "2000",
      "Alcohol": "1.24",
      "Life.expectancy": "71.6"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "71.2"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2014",
      "Alcohol": "6.94",
      "Life.expectancy": "71.1"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2013",
      "Alcohol": "6.71",
      "Life.expectancy": "71"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2012",
      "Alcohol": "6.7",
      "Life.expectancy": "78"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2011",
      "Alcohol": "6.5",
      "Life.expectancy": "76"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2010",
      "Alcohol": "6.5",
      "Life.expectancy": "74"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2009",
      "Alcohol": "6.37",
      "Life.expectancy": "71"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2008",
      "Alcohol": "6.41",
      "Life.expectancy": "69.9"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2007",
      "Alcohol": "6.37",
      "Life.expectancy": "69.7"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2006",
      "Alcohol": "6.35",
      "Life.expectancy": "69.6"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2005",
      "Alcohol": "6.12",
      "Life.expectancy": "69.5"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2004",
      "Alcohol": "5.82",
      "Life.expectancy": "69.4"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2003",
      "Alcohol": "5.53",
      "Life.expectancy": "69.3"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2002",
      "Alcohol": "5.12",
      "Life.expectancy": "69.2"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2001",
      "Alcohol": "4.55",
      "Life.expectancy": "69.1"
    },
    {
      "Country": "Trinidad and Tobago",
      "Year": "2000",
      "Alcohol": "4.68",
      "Life.expectancy": "69.1"
    },
    {
      "Country": "Tunisia",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "Tunisia",
      "Year": "2014",
      "Alcohol": "1.39",
      "Life.expectancy": "75.1"
    },
    {
      "Country": "Tunisia",
      "Year": "2013",
      "Alcohol": "1.29",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Tunisia",
      "Year": "2012",
      "Alcohol": "1.3",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Tunisia",
      "Year": "2011",
      "Alcohol": "1.29",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Tunisia",
      "Year": "2010",
      "Alcohol": "1.28",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Tunisia",
      "Year": "2009",
      "Alcohol": "1.4",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Tunisia",
      "Year": "2008",
      "Alcohol": "1.37",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Tunisia",
      "Year": "2007",
      "Alcohol": "1.24",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Tunisia",
      "Year": "2006",
      "Alcohol": "1.46",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Tunisia",
      "Year": "2005",
      "Alcohol": "1.37",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Tunisia",
      "Year": "2004",
      "Alcohol": "1.36",
      "Life.expectancy": "74"
    },
    {
      "Country": "Tunisia",
      "Year": "2003",
      "Alcohol": "1.34",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Tunisia",
      "Year": "2002",
      "Alcohol": "1.17",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Tunisia",
      "Year": "2001",
      "Alcohol": "1.19",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Tunisia",
      "Year": "2000",
      "Alcohol": "1.21",
      "Life.expectancy": "72.9"
    },
    {
      "Country": "Turkey",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "75.8"
    },
    {
      "Country": "Turkey",
      "Year": "2014",
      "Alcohol": "1.45",
      "Life.expectancy": "75.5"
    },
    {
      "Country": "Turkey",
      "Year": "2013",
      "Alcohol": "1.41",
      "Life.expectancy": "75.2"
    },
    {
      "Country": "Turkey",
      "Year": "2012",
      "Alcohol": "1.54",
      "Life.expectancy": "74.8"
    },
    {
      "Country": "Turkey",
      "Year": "2011",
      "Alcohol": "1.53",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "Turkey",
      "Year": "2010",
      "Alcohol": "1.49",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Turkey",
      "Year": "2009",
      "Alcohol": "1.4",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Turkey",
      "Year": "2008",
      "Alcohol": "1.39",
      "Life.expectancy": "73.5"
    },
    {
      "Country": "Turkey",
      "Year": "2007",
      "Alcohol": "1.26",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Turkey",
      "Year": "2006",
      "Alcohol": "1.29",
      "Life.expectancy": "72.8"
    },
    {
      "Country": "Turkey",
      "Year": "2005",
      "Alcohol": "1.29",
      "Life.expectancy": "72.4"
    },
    {
      "Country": "Turkey",
      "Year": "2004",
      "Alcohol": "1.35",
      "Life.expectancy": "72"
    },
    {
      "Country": "Turkey",
      "Year": "2003",
      "Alcohol": "1.42",
      "Life.expectancy": "71.6"
    },
    {
      "Country": "Turkey",
      "Year": "2002",
      "Alcohol": "1.47",
      "Life.expectancy": "71.2"
    },
    {
      "Country": "Turkey",
      "Year": "2001",
      "Alcohol": "1.49",
      "Life.expectancy": "78"
    },
    {
      "Country": "Turkey",
      "Year": "2000",
      "Alcohol": "1.54",
      "Life.expectancy": "74"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "66.3"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2014",
      "Alcohol": "2.9",
      "Life.expectancy": "66"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2013",
      "Alcohol": "2.93",
      "Life.expectancy": "65.4"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2012",
      "Alcohol": "2.75",
      "Life.expectancy": "65.6"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2011",
      "Alcohol": "2.55",
      "Life.expectancy": "65.6"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2010",
      "Alcohol": "2.48",
      "Life.expectancy": "65.8"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2009",
      "Alcohol": "2.35",
      "Life.expectancy": "65.6"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2008",
      "Alcohol": "2.4",
      "Life.expectancy": "64.5"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2007",
      "Alcohol": "2.58",
      "Life.expectancy": "64.1"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2006",
      "Alcohol": "2.71",
      "Life.expectancy": "63.7"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2005",
      "Alcohol": "2.85",
      "Life.expectancy": "63.3"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2004",
      "Alcohol": "2.86",
      "Life.expectancy": "63.5"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2003",
      "Alcohol": "2.88",
      "Life.expectancy": "63.4"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2002",
      "Alcohol": "2.33",
      "Life.expectancy": "63.3"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2001",
      "Alcohol": "2.35",
      "Life.expectancy": "64"
    },
    {
      "Country": "Turkmenistan",
      "Year": "2000",
      "Alcohol": "2.9",
      "Life.expectancy": "63.8"
    },
    {
      "Country": "Tuvalu",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "0"
    },
    {
      "Country": "Uganda",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "62.3"
    },
    {
      "Country": "Uganda",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "61.5"
    },
    {
      "Country": "Uganda",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "67"
    },
    {
      "Country": "Uganda",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "60"
    },
    {
      "Country": "Uganda",
      "Year": "2011",
      "Alcohol": "10.22",
      "Life.expectancy": "59.3"
    },
    {
      "Country": "Uganda",
      "Year": "2010",
      "Alcohol": "10.03",
      "Life.expectancy": "58.4"
    },
    {
      "Country": "Uganda",
      "Year": "2009",
      "Alcohol": "9.63",
      "Life.expectancy": "57.5"
    },
    {
      "Country": "Uganda",
      "Year": "2008",
      "Alcohol": "9.79",
      "Life.expectancy": "56.3"
    },
    {
      "Country": "Uganda",
      "Year": "2007",
      "Alcohol": "9.65",
      "Life.expectancy": "55.5"
    },
    {
      "Country": "Uganda",
      "Year": "2006",
      "Alcohol": "9.81",
      "Life.expectancy": "54.9"
    },
    {
      "Country": "Uganda",
      "Year": "2005",
      "Alcohol": "10.09",
      "Life.expectancy": "53.2"
    },
    {
      "Country": "Uganda",
      "Year": "2004",
      "Alcohol": "9.89",
      "Life.expectancy": "51.3"
    },
    {
      "Country": "Uganda",
      "Year": "2003",
      "Alcohol": "10.16",
      "Life.expectancy": "51"
    },
    {
      "Country": "Uganda",
      "Year": "2002",
      "Alcohol": "10.42",
      "Life.expectancy": "48.8"
    },
    {
      "Country": "Uganda",
      "Year": "2001",
      "Alcohol": "10.57",
      "Life.expectancy": "47.7"
    },
    {
      "Country": "Uganda",
      "Year": "2000",
      "Alcohol": "10.47",
      "Life.expectancy": "46.6"
    },
    {
      "Country": "Ukraine",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "71.3"
    },
    {
      "Country": "Ukraine",
      "Year": "2014",
      "Alcohol": "8.06",
      "Life.expectancy": "78"
    },
    {
      "Country": "Ukraine",
      "Year": "2013",
      "Alcohol": "8.44",
      "Life.expectancy": "71"
    },
    {
      "Country": "Ukraine",
      "Year": "2012",
      "Alcohol": "8.44",
      "Life.expectancy": "77"
    },
    {
      "Country": "Ukraine",
      "Year": "2011",
      "Alcohol": "8.48",
      "Life.expectancy": "75"
    },
    {
      "Country": "Ukraine",
      "Year": "2010",
      "Alcohol": "8.39",
      "Life.expectancy": "69.8"
    },
    {
      "Country": "Ukraine",
      "Year": "2009",
      "Alcohol": "8.71",
      "Life.expectancy": "69.2"
    },
    {
      "Country": "Ukraine",
      "Year": "2008",
      "Alcohol": "9.46",
      "Life.expectancy": "67.7"
    },
    {
      "Country": "Ukraine",
      "Year": "2007",
      "Alcohol": "8.86",
      "Life.expectancy": "67.5"
    },
    {
      "Country": "Ukraine",
      "Year": "2006",
      "Alcohol": "7.99",
      "Life.expectancy": "67.7"
    },
    {
      "Country": "Ukraine",
      "Year": "2005",
      "Alcohol": "7.31",
      "Life.expectancy": "67"
    },
    {
      "Country": "Ukraine",
      "Year": "2004",
      "Alcohol": "6.79",
      "Life.expectancy": "67.4"
    },
    {
      "Country": "Ukraine",
      "Year": "2003",
      "Alcohol": "5.92",
      "Life.expectancy": "67.6"
    },
    {
      "Country": "Ukraine",
      "Year": "2002",
      "Alcohol": "4.89",
      "Life.expectancy": "67.6"
    },
    {
      "Country": "Ukraine",
      "Year": "2001",
      "Alcohol": "4.31",
      "Life.expectancy": "67.7"
    },
    {
      "Country": "Ukraine",
      "Year": "2000",
      "Alcohol": "4.49",
      "Life.expectancy": "67.5"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "77.1"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2014",
      "Alcohol": "1.91",
      "Life.expectancy": "76.9"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2013",
      "Alcohol": "1.82",
      "Life.expectancy": "76.7"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2012",
      "Alcohol": "1.75",
      "Life.expectancy": "76.5"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2011",
      "Alcohol": "1.73",
      "Life.expectancy": "76.3"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2010",
      "Alcohol": "1.69",
      "Life.expectancy": "76.2"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2009",
      "Alcohol": "1.73",
      "Life.expectancy": "76"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2008",
      "Alcohol": "1.86",
      "Life.expectancy": "75.8"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2007",
      "Alcohol": "1.69",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2006",
      "Alcohol": "1.74",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2005",
      "Alcohol": "1.79",
      "Life.expectancy": "75.3"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2004",
      "Alcohol": "1.77",
      "Life.expectancy": "75.1"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2003",
      "Alcohol": "1.74",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2002",
      "Alcohol": "1.72",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2001",
      "Alcohol": "1.67",
      "Life.expectancy": "74.5"
    },
    {
      "Country": "United Arab Emirates",
      "Year": "2000",
      "Alcohol": "1.64",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2015",
      "Alcohol": "10.66",
      "Life.expectancy": "81.2"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2014",
      "Alcohol": "10.37",
      "Life.expectancy": "81"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2013",
      "Alcohol": "10.32",
      "Life.expectancy": "87"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2012",
      "Alcohol": "10.42",
      "Life.expectancy": "86"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2011",
      "Alcohol": "10.68",
      "Life.expectancy": "86"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2010",
      "Alcohol": "10.88",
      "Life.expectancy": "82"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2009",
      "Alcohol": "10.79",
      "Life.expectancy": "81"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2008",
      "Alcohol": "11.47",
      "Life.expectancy": "79.6"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2007",
      "Alcohol": "11.84",
      "Life.expectancy": "79.5"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2006",
      "Alcohol": "11.61",
      "Life.expectancy": "79.3"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2005",
      "Alcohol": "12.05",
      "Life.expectancy": "79"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2004",
      "Alcohol": "12.22",
      "Life.expectancy": "78.8"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2003",
      "Alcohol": "11.85",
      "Life.expectancy": "78.3"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2002",
      "Alcohol": "11.44",
      "Life.expectancy": "78.2"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2001",
      "Alcohol": "10.91",
      "Life.expectancy": "78"
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland",
      "Year": "2000",
      "Alcohol": "10.59",
      "Life.expectancy": "77.8"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "61.8"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "67"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2013",
      "Alcohol": "4.2",
      "Life.expectancy": "59.7"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2012",
      "Alcohol": "3.98",
      "Life.expectancy": "58.6"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2011",
      "Alcohol": "4.04",
      "Life.expectancy": "58.3"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2010",
      "Alcohol": "4.19",
      "Life.expectancy": "57.5"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2009",
      "Alcohol": "3.97",
      "Life.expectancy": "56.9"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2008",
      "Alcohol": "3.44",
      "Life.expectancy": "56.2"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2007",
      "Alcohol": "4.4",
      "Life.expectancy": "54.5"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2006",
      "Alcohol": "4.07",
      "Life.expectancy": "53.1"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2005",
      "Alcohol": "3.94",
      "Life.expectancy": "52.2"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2004",
      "Alcohol": "3.81",
      "Life.expectancy": "51.5"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2003",
      "Alcohol": "2.34",
      "Life.expectancy": "58"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2002",
      "Alcohol": "3.37",
      "Life.expectancy": "52"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2001",
      "Alcohol": "4.09",
      "Life.expectancy": "49.6"
    },
    {
      "Country": "United Republic of Tanzania",
      "Year": "2000",
      "Alcohol": "3.89",
      "Life.expectancy": "49.2"
    },
    {
      "Country": "United States of America",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "79.3"
    },
    {
      "Country": "United States of America",
      "Year": "2014",
      "Alcohol": "8.82",
      "Life.expectancy": "79.1"
    },
    {
      "Country": "United States of America",
      "Year": "2013",
      "Alcohol": "8.82",
      "Life.expectancy": "78.9"
    },
    {
      "Country": "United States of America",
      "Year": "2012",
      "Alcohol": "8.82",
      "Life.expectancy": "78.8"
    },
    {
      "Country": "United States of America",
      "Year": "2011",
      "Alcohol": "8.67",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "United States of America",
      "Year": "2010",
      "Alcohol": "8.55",
      "Life.expectancy": "78.7"
    },
    {
      "Country": "United States of America",
      "Year": "2009",
      "Alcohol": "8.71",
      "Life.expectancy": "78.5"
    },
    {
      "Country": "United States of America",
      "Year": "2008",
      "Alcohol": "8.74",
      "Life.expectancy": "78.2"
    },
    {
      "Country": "United States of America",
      "Year": "2007",
      "Alcohol": "8.74",
      "Life.expectancy": "78.1"
    },
    {
      "Country": "United States of America",
      "Year": "2006",
      "Alcohol": "8.63",
      "Life.expectancy": "77.8"
    },
    {
      "Country": "United States of America",
      "Year": "2005",
      "Alcohol": "8.52",
      "Life.expectancy": "77.5"
    },
    {
      "Country": "United States of America",
      "Year": "2004",
      "Alcohol": "8.48",
      "Life.expectancy": "77.5"
    },
    {
      "Country": "United States of America",
      "Year": "2003",
      "Alcohol": "8.4",
      "Life.expectancy": "77.2"
    },
    {
      "Country": "United States of America",
      "Year": "2002",
      "Alcohol": "8.33",
      "Life.expectancy": "77"
    },
    {
      "Country": "United States of America",
      "Year": "2001",
      "Alcohol": "8.25",
      "Life.expectancy": "76.9"
    },
    {
      "Country": "United States of America",
      "Year": "2000",
      "Alcohol": "8.21",
      "Life.expectancy": "76.8"
    },
    {
      "Country": "Uruguay",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "77"
    },
    {
      "Country": "Uruguay",
      "Year": "2014",
      "Alcohol": "6.03",
      "Life.expectancy": "76.8"
    },
    {
      "Country": "Uruguay",
      "Year": "2013",
      "Alcohol": "5.82",
      "Life.expectancy": "76.8"
    },
    {
      "Country": "Uruguay",
      "Year": "2012",
      "Alcohol": "5.77",
      "Life.expectancy": "76.5"
    },
    {
      "Country": "Uruguay",
      "Year": "2011",
      "Alcohol": "5.97",
      "Life.expectancy": "77"
    },
    {
      "Country": "Uruguay",
      "Year": "2010",
      "Alcohol": "6.21",
      "Life.expectancy": "76.3"
    },
    {
      "Country": "Uruguay",
      "Year": "2009",
      "Alcohol": "6.67",
      "Life.expectancy": "76.6"
    },
    {
      "Country": "Uruguay",
      "Year": "2008",
      "Alcohol": "6.76",
      "Life.expectancy": "76.4"
    },
    {
      "Country": "Uruguay",
      "Year": "2007",
      "Alcohol": "6.67",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Uruguay",
      "Year": "2006",
      "Alcohol": "6.58",
      "Life.expectancy": "76.2"
    },
    {
      "Country": "Uruguay",
      "Year": "2005",
      "Alcohol": "6.35",
      "Life.expectancy": "75.7"
    },
    {
      "Country": "Uruguay",
      "Year": "2004",
      "Alcohol": "5.66",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Uruguay",
      "Year": "2003",
      "Alcohol": "5.11",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Uruguay",
      "Year": "2002",
      "Alcohol": "5.86",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Uruguay",
      "Year": "2001",
      "Alcohol": "6.48",
      "Life.expectancy": "75.2"
    },
    {
      "Country": "Uruguay",
      "Year": "2000",
      "Alcohol": "6.65",
      "Life.expectancy": "75.1"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "69.4"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "69.2"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "69.1"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "68.8"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2011",
      "Alcohol": "2.83",
      "Life.expectancy": "68.5"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2010",
      "Alcohol": "2.73",
      "Life.expectancy": "68.3"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2009",
      "Alcohol": "2.56",
      "Life.expectancy": "68"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2008",
      "Alcohol": "2.36",
      "Life.expectancy": "67.9"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2007",
      "Alcohol": "2.15",
      "Life.expectancy": "67.8"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2006",
      "Alcohol": "1.96",
      "Life.expectancy": "67.6"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2005",
      "Alcohol": "1.78",
      "Life.expectancy": "67.3"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2004",
      "Alcohol": "1.59",
      "Life.expectancy": "67.8"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2003",
      "Alcohol": "1.54",
      "Life.expectancy": "67.2"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2002",
      "Alcohol": "1.47",
      "Life.expectancy": "67.1"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2001",
      "Alcohol": "1.53",
      "Life.expectancy": "67.4"
    },
    {
      "Country": "Uzbekistan",
      "Year": "2000",
      "Alcohol": "1.6",
      "Life.expectancy": "67.1"
    },
    {
      "Country": "Vanuatu",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "72"
    },
    {
      "Country": "Vanuatu",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "71.7"
    },
    {
      "Country": "Vanuatu",
      "Year": "2013",
      "Alcohol": "0.01",
      "Life.expectancy": "71.6"
    },
    {
      "Country": "Vanuatu",
      "Year": "2012",
      "Alcohol": "0.01",
      "Life.expectancy": "71.4"
    },
    {
      "Country": "Vanuatu",
      "Year": "2011",
      "Alcohol": "0.85",
      "Life.expectancy": "71.2"
    },
    {
      "Country": "Vanuatu",
      "Year": "2010",
      "Alcohol": "0.91",
      "Life.expectancy": "71"
    },
    {
      "Country": "Vanuatu",
      "Year": "2009",
      "Alcohol": "0.83",
      "Life.expectancy": "78"
    },
    {
      "Country": "Vanuatu",
      "Year": "2008",
      "Alcohol": "1.18",
      "Life.expectancy": "75"
    },
    {
      "Country": "Vanuatu",
      "Year": "2007",
      "Alcohol": "1.01",
      "Life.expectancy": "73"
    },
    {
      "Country": "Vanuatu",
      "Year": "2006",
      "Alcohol": "1",
      "Life.expectancy": "71"
    },
    {
      "Country": "Vanuatu",
      "Year": "2005",
      "Alcohol": "0.88",
      "Life.expectancy": "69.9"
    },
    {
      "Country": "Vanuatu",
      "Year": "2004",
      "Alcohol": "0.85",
      "Life.expectancy": "69.6"
    },
    {
      "Country": "Vanuatu",
      "Year": "2003",
      "Alcohol": "1.2",
      "Life.expectancy": "69.4"
    },
    {
      "Country": "Vanuatu",
      "Year": "2002",
      "Alcohol": "1.24",
      "Life.expectancy": "69.3"
    },
    {
      "Country": "Vanuatu",
      "Year": "2001",
      "Alcohol": "0.91",
      "Life.expectancy": "69.1"
    },
    {
      "Country": "Vanuatu",
      "Year": "2000",
      "Alcohol": "1.21",
      "Life.expectancy": "69"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "74.1"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2014",
      "Alcohol": "6.47",
      "Life.expectancy": "73.9"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2013",
      "Alcohol": "6.71",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2012",
      "Alcohol": "6.7",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2011",
      "Alcohol": "6.74",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2010",
      "Alcohol": "7.22",
      "Life.expectancy": "73.7"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2009",
      "Alcohol": "7.59",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2008",
      "Alcohol": "8.18",
      "Life.expectancy": "73.2"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2007",
      "Alcohol": "8.7",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2006",
      "Alcohol": "8.27",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2005",
      "Alcohol": "7.92",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2004",
      "Alcohol": "7.55",
      "Life.expectancy": "73.3"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2003",
      "Alcohol": "6.3",
      "Life.expectancy": "72.4"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2002",
      "Alcohol": "6.89",
      "Life.expectancy": "73.1"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2001",
      "Alcohol": "8.05",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "Year": "2000",
      "Alcohol": "8.01",
      "Life.expectancy": "72.5"
    },
    {
      "Country": "Viet Nam",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "76"
    },
    {
      "Country": "Viet Nam",
      "Year": "2014",
      "Alcohol": "4.09",
      "Life.expectancy": "75.9"
    },
    {
      "Country": "Viet Nam",
      "Year": "2013",
      "Alcohol": "4",
      "Life.expectancy": "75.7"
    },
    {
      "Country": "Viet Nam",
      "Year": "2012",
      "Alcohol": "4.12",
      "Life.expectancy": "75.6"
    },
    {
      "Country": "Viet Nam",
      "Year": "2011",
      "Alcohol": "3.94",
      "Life.expectancy": "75.4"
    },
    {
      "Country": "Viet Nam",
      "Year": "2010",
      "Alcohol": "3.93",
      "Life.expectancy": "75.2"
    },
    {
      "Country": "Viet Nam",
      "Year": "2009",
      "Alcohol": "3.86",
      "Life.expectancy": "75"
    },
    {
      "Country": "Viet Nam",
      "Year": "2008",
      "Alcohol": "3.58",
      "Life.expectancy": "74.9"
    },
    {
      "Country": "Viet Nam",
      "Year": "2007",
      "Alcohol": "3.01",
      "Life.expectancy": "74.7"
    },
    {
      "Country": "Viet Nam",
      "Year": "2006",
      "Alcohol": "2.56",
      "Life.expectancy": "74.6"
    },
    {
      "Country": "Viet Nam",
      "Year": "2005",
      "Alcohol": "2.7",
      "Life.expectancy": "74.4"
    },
    {
      "Country": "Viet Nam",
      "Year": "2004",
      "Alcohol": "2.86",
      "Life.expectancy": "74.2"
    },
    {
      "Country": "Viet Nam",
      "Year": "2003",
      "Alcohol": "2.19",
      "Life.expectancy": "74"
    },
    {
      "Country": "Viet Nam",
      "Year": "2002",
      "Alcohol": "2.03",
      "Life.expectancy": "73.8"
    },
    {
      "Country": "Viet Nam",
      "Year": "2001",
      "Alcohol": "1.84",
      "Life.expectancy": "73.6"
    },
    {
      "Country": "Viet Nam",
      "Year": "2000",
      "Alcohol": "1.6",
      "Life.expectancy": "73.4"
    },
    {
      "Country": "Yemen",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "65.7"
    },
    {
      "Country": "Yemen",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "65.4"
    },
    {
      "Country": "Yemen",
      "Year": "2013",
      "Alcohol": "0.04",
      "Life.expectancy": "65.4"
    },
    {
      "Country": "Yemen",
      "Year": "2012",
      "Alcohol": "0.04",
      "Life.expectancy": "64.7"
    },
    {
      "Country": "Yemen",
      "Year": "2011",
      "Alcohol": "0.04",
      "Life.expectancy": "64.6"
    },
    {
      "Country": "Yemen",
      "Year": "2010",
      "Alcohol": "0.06",
      "Life.expectancy": "64.4"
    },
    {
      "Country": "Yemen",
      "Year": "2009",
      "Alcohol": "0.03",
      "Life.expectancy": "64.1"
    },
    {
      "Country": "Yemen",
      "Year": "2008",
      "Alcohol": "0.04",
      "Life.expectancy": "63.8"
    },
    {
      "Country": "Yemen",
      "Year": "2007",
      "Alcohol": "0.05",
      "Life.expectancy": "63.4"
    },
    {
      "Country": "Yemen",
      "Year": "2006",
      "Alcohol": "0.04",
      "Life.expectancy": "63"
    },
    {
      "Country": "Yemen",
      "Year": "2005",
      "Alcohol": "0.04",
      "Life.expectancy": "62.6"
    },
    {
      "Country": "Yemen",
      "Year": "2004",
      "Alcohol": "0.06",
      "Life.expectancy": "62.2"
    },
    {
      "Country": "Yemen",
      "Year": "2003",
      "Alcohol": "0.04",
      "Life.expectancy": "61.9"
    },
    {
      "Country": "Yemen",
      "Year": "2002",
      "Alcohol": "0.07",
      "Life.expectancy": "61.5"
    },
    {
      "Country": "Yemen",
      "Year": "2001",
      "Alcohol": "0.08",
      "Life.expectancy": "61.1"
    },
    {
      "Country": "Yemen",
      "Year": "2000",
      "Alcohol": "0.07",
      "Life.expectancy": "68"
    },
    {
      "Country": "Zambia",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "61.8"
    },
    {
      "Country": "Zambia",
      "Year": "2014",
      "Alcohol": "0.01",
      "Life.expectancy": "61.1"
    },
    {
      "Country": "Zambia",
      "Year": "2013",
      "Alcohol": "2.41",
      "Life.expectancy": "63"
    },
    {
      "Country": "Zambia",
      "Year": "2012",
      "Alcohol": "2.59",
      "Life.expectancy": "59.2"
    },
    {
      "Country": "Zambia",
      "Year": "2011",
      "Alcohol": "2.57",
      "Life.expectancy": "58.2"
    },
    {
      "Country": "Zambia",
      "Year": "2010",
      "Alcohol": "2.47",
      "Life.expectancy": "58"
    },
    {
      "Country": "Zambia",
      "Year": "2009",
      "Alcohol": "2.3",
      "Life.expectancy": "57.4"
    },
    {
      "Country": "Zambia",
      "Year": "2008",
      "Alcohol": "2.12",
      "Life.expectancy": "55.7"
    },
    {
      "Country": "Zambia",
      "Year": "2007",
      "Alcohol": "2.08",
      "Life.expectancy": "52.6"
    },
    {
      "Country": "Zambia",
      "Year": "2006",
      "Alcohol": "2.25",
      "Life.expectancy": "58"
    },
    {
      "Country": "Zambia",
      "Year": "2005",
      "Alcohol": "2.33",
      "Life.expectancy": "49.3"
    },
    {
      "Country": "Zambia",
      "Year": "2004",
      "Alcohol": "2.46",
      "Life.expectancy": "47.9"
    },
    {
      "Country": "Zambia",
      "Year": "2003",
      "Alcohol": "2.33",
      "Life.expectancy": "46.4"
    },
    {
      "Country": "Zambia",
      "Year": "2002",
      "Alcohol": "2.44",
      "Life.expectancy": "45.5"
    },
    {
      "Country": "Zambia",
      "Year": "2001",
      "Alcohol": "2.61",
      "Life.expectancy": "44.6"
    },
    {
      "Country": "Zambia",
      "Year": "2000",
      "Alcohol": "2.62",
      "Life.expectancy": "43.8"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2015",
      "Alcohol": "0",
      "Life.expectancy": "67"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2014",
      "Alcohol": "6.5",
      "Life.expectancy": "59.2"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2013",
      "Alcohol": "6.39",
      "Life.expectancy": "58"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2012",
      "Alcohol": "6.09",
      "Life.expectancy": "56.6"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2011",
      "Alcohol": "6",
      "Life.expectancy": "54.9"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2010",
      "Alcohol": "5.21",
      "Life.expectancy": "52.4"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2009",
      "Alcohol": "4.64",
      "Life.expectancy": "50"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2008",
      "Alcohol": "3.56",
      "Life.expectancy": "48.2"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2007",
      "Alcohol": "3.88",
      "Life.expectancy": "46.6"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2006",
      "Alcohol": "4.57",
      "Life.expectancy": "45.4"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2005",
      "Alcohol": "4.14",
      "Life.expectancy": "44.6"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2004",
      "Alcohol": "4.36",
      "Life.expectancy": "44.3"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2003",
      "Alcohol": "4.06",
      "Life.expectancy": "44.5"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2002",
      "Alcohol": "4.43",
      "Life.expectancy": "44.8"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2001",
      "Alcohol": "1.72",
      "Life.expectancy": "45.3"
    },
    {
      "Country": "Zimbabwe",
      "Year": "2000",
      "Alcohol": "1.68",
      "Life.expectancy": "46"
    }


 ]



// Rest of the code will go here...
// Process the data
data.forEach(function(d) {
    d.Alcohol = +d.Alcohol; // Convert population to number
    d['Life.expectancy'] = +d['Life.expectancy']; // Convert life expectancy to number
    d.Year = +d.Year; // Convert year to number
});

// Set the ranges
var x = d3.scaleLinear().range([0, width]).domain([0, 20]).nice(4);

// Define the x-axis
var xAxis = d3.axisBottom(x).ticks(4);

// Scale the range of the data
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
        .attr("cx", function(d) { return x(d.Alcohol); })
        .attr("cy", function(d) { return y(d['Life.expectancy']); })
        .on("mouseover", function(event, d) {
            tooltip.transition()
                .duration(200)
                .style("opacity", .9);
            tooltip.html(d.Country + "<br/>" + d.Year + "<br/>Life expectancy: " 
                + d['Life.expectancy'] + "<br/>Alcohol: " + d.Alcohol)
                .style("left", (event.pageX) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function(d) {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });

    // Add the X Axis
svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

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
  .attr("y", height + margin.bottom - 50)
  .text("Alcohol")
  .style("font-family", "Arial, sans-serif") // Choose a font family
  .style("font-size", "18px") // Set a specific font size
  .style("fill", "#6C757D") // Use a hex color code for a specific shade
  .style("font-weight", "bold"); // Make the label bold
