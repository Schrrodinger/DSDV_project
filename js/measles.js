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
        "Measles": "1154",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2014",
        "Measles": "492",
        "Life.expectancy": "59.9",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2013",
        "Measles": "430",
        "Life.expectancy": "59.9",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2012",
        "Measles": "2787",
        "Life.expectancy": "59.5",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2011",
        "Measles": "3013",
        "Life.expectancy": "59.2",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2010",
        "Measles": "1989",
        "Life.expectancy": "58.8",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2009",
        "Measles": "2861",
        "Life.expectancy": "58.6",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2008",
        "Measles": "1599",
        "Life.expectancy": "58.1",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2007",
        "Measles": "1141",
        "Life.expectancy": "57.5",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2006",
        "Measles": "1990",
        "Life.expectancy": "57.3",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2005",
        "Measles": "1296",
        "Life.expectancy": "57.3",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2004",
        "Measles": "466",
        "Life.expectancy": "57",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2003",
        "Measles": "798",
        "Life.expectancy": "56.7",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2002",
        "Measles": "2486",
        "Life.expectancy": "56.2",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2001",
        "Measles": "8762",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2000",
        "Measles": "6532",
        "Life.expectancy": "54.8",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "77.8",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "77.5",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "77.2",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2012",
        "Measles": "9",
        "Life.expectancy": "76.9",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2011",
        "Measles": "28",
        "Life.expectancy": "76.6",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2010",
        "Measles": "10",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "76.1",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2007",
        "Measles": "22",
        "Life.expectancy": "75.9",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2006",
        "Measles": "68",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2005",
        "Measles": "6",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2004",
        "Measles": "7",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2003",
        "Measles": "8",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2002",
        "Measles": "16",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2001",
        "Measles": "18",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2000",
        "Measles": "662",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2015",
        "Measles": "63",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2013",
        "Measles": "25",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2012",
        "Measles": "18",
        "Life.expectancy": "75.1",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2011",
        "Measles": "112",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2010",
        "Measles": "103",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2009",
        "Measles": "107",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2008",
        "Measles": "217",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2006",
        "Measles": "944",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2005",
        "Measles": "2302",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2004",
        "Measles": "3289",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2003",
        "Measles": "15374",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2002",
        "Measles": "5862",
        "Life.expectancy": "71.6",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2001",
        "Measles": "2686",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "71.3",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2015",
        "Measles": "118",
        "Life.expectancy": "52.4",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2014",
        "Measles": "11699",
        "Life.expectancy": "51.7",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2013",
        "Measles": "8523",
        "Life.expectancy": "51.1",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2012",
        "Measles": "4458",
        "Life.expectancy": "56",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2011",
        "Measles": "1449",
        "Life.expectancy": "51",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2010",
        "Measles": "1190",
        "Life.expectancy": "49.6",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2009",
        "Measles": "2807",
        "Life.expectancy": "49.1",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2008",
        "Measles": "265",
        "Life.expectancy": "48.7",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2007",
        "Measles": "1014",
        "Life.expectancy": "48.2",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2006",
        "Measles": "765",
        "Life.expectancy": "47.7",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2005",
        "Measles": "258",
        "Life.expectancy": "47.4",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2004",
        "Measles": "29",
        "Life.expectancy": "47.1",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2003",
        "Measles": "1196",
        "Life.expectancy": "46.8",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2002",
        "Measles": "11945",
        "Life.expectancy": "46.5",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2001",
        "Measles": "9046",
        "Life.expectancy": "45.7",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2000",
        "Measles": "2219",
        "Life.expectancy": "45.3",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "76.4",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "76.1",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "75.9",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "75.7",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "76.3",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2014",
        "Measles": "1",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2012",
        "Measles": "2",
        "Life.expectancy": "75.9",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2011",
        "Measles": "3",
        "Life.expectancy": "75.7",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2010",
        "Measles": "17",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2009",
        "Measles": "3",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2000",
        "Measles": "6",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2015",
        "Measles": "33",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2014",
        "Measles": "13",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2013",
        "Measles": "10",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2010",
        "Measles": "2",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2007",
        "Measles": "1",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2006",
        "Measles": "137",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2005",
        "Measles": "2281",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2004",
        "Measles": "1783",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2003",
        "Measles": "4",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2002",
        "Measles": "40",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2001",
        "Measles": "69",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2000",
        "Measles": "15",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Australia",
        "Year": "2015",
        "Measles": "74",
        "Life.expectancy": "82.8",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2014",
        "Measles": "340",
        "Life.expectancy": "82.7",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2013",
        "Measles": "158",
        "Life.expectancy": "82.5",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2012",
        "Measles": "199",
        "Life.expectancy": "82.3",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2011",
        "Measles": "190",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2010",
        "Measles": "70",
        "Life.expectancy": "81.9",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2009",
        "Measles": "104",
        "Life.expectancy": "81.7",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2008",
        "Measles": "65",
        "Life.expectancy": "81.3",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2007",
        "Measles": "11",
        "Life.expectancy": "81.3",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "81.2",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2005",
        "Measles": "10",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2004",
        "Measles": "70",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2003",
        "Measles": "91",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2002",
        "Measles": "32",
        "Life.expectancy": "79.9",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2001",
        "Measles": "141",
        "Life.expectancy": "79.9",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2000",
        "Measles": "108",
        "Life.expectancy": "79.5",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2015",
        "Measles": "309",
        "Life.expectancy": "81.5",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2014",
        "Measles": "117",
        "Life.expectancy": "81.4",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2012",
        "Measles": "36",
        "Life.expectancy": "88",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2011",
        "Measles": "68",
        "Life.expectancy": "88",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2010",
        "Measles": "52",
        "Life.expectancy": "84",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2009",
        "Measles": "49",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2008",
        "Measles": "448",
        "Life.expectancy": "84",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2007",
        "Measles": "20",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2006",
        "Measles": "23",
        "Life.expectancy": "79.8",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2005",
        "Measles": "9",
        "Life.expectancy": "79.4",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2004",
        "Measles": "15",
        "Life.expectancy": "79.3",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2003",
        "Measles": "90",
        "Life.expectancy": "78.8",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "78.6",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "78.1",
        "Status": "Developed"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2013",
        "Measles": "164",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "71.6",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "71.1",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2008",
        "Measles": "5",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2006",
        "Measles": "222",
        "Life.expectancy": "69.2",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2005",
        "Measles": "1238",
        "Life.expectancy": "68.4",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2004",
        "Measles": "827",
        "Life.expectancy": "68.4",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2003",
        "Measles": "1978",
        "Life.expectancy": "67.8",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2002",
        "Measles": "4353",
        "Life.expectancy": "67.8",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2001",
        "Measles": "574",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2000",
        "Measles": "210",
        "Life.expectancy": "66.6",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "76.1",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "76.9",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2014",
        "Measles": "46",
        "Life.expectancy": "76.8",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "76.7",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "76.5",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "76.1",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "76.1",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2009",
        "Measles": "3",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2008",
        "Measles": "2",
        "Life.expectancy": "75.8",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2007",
        "Measles": "7",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2006",
        "Measles": "3",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2005",
        "Measles": "4",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2004",
        "Measles": "11",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2003",
        "Measles": "12",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2002",
        "Measles": "8",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2001",
        "Measles": "5",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2000",
        "Measles": "6",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2015",
        "Measles": "240",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2014",
        "Measles": "289",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2013",
        "Measles": "237",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2012",
        "Measles": "1986",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2011",
        "Measles": "5625",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2010",
        "Measles": "788",
        "Life.expectancy": "69.9",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2009",
        "Measles": "718",
        "Life.expectancy": "69.5",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2008",
        "Measles": "2660",
        "Life.expectancy": "69.1",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2007",
        "Measles": "2924",
        "Life.expectancy": "68.6",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2006",
        "Measles": "6192",
        "Life.expectancy": "68.2",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2005",
        "Measles": "25934",
        "Life.expectancy": "67.8",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2004",
        "Measles": "9743",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2003",
        "Measles": "4067",
        "Life.expectancy": "66.8",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2002",
        "Measles": "3484",
        "Life.expectancy": "66.3",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2001",
        "Measles": "4414",
        "Life.expectancy": "65.8",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2000",
        "Measles": "5098",
        "Life.expectancy": "65.3",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "75.1",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2015",
        "Measles": "2",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2014",
        "Measles": "64",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2013",
        "Measles": "16",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2012",
        "Measles": "10",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2011",
        "Measles": "50",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2010",
        "Measles": "1",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "70",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "70",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2007",
        "Measles": "1",
        "Life.expectancy": "69.8",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2006",
        "Measles": "149",
        "Life.expectancy": "68.9",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2005",
        "Measles": "1",
        "Life.expectancy": "68.1",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2004",
        "Measles": "2",
        "Life.expectancy": "68.2",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2003",
        "Measles": "21",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2002",
        "Measles": "14",
        "Life.expectancy": "67.2",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2001",
        "Measles": "45",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2000",
        "Measles": "21",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Belgium",
        "Year": "2015",
        "Measles": "47",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2014",
        "Measles": "70",
        "Life.expectancy": "89",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2013",
        "Measles": "39",
        "Life.expectancy": "87",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2012",
        "Measles": "109",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2011",
        "Measles": "576",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2010",
        "Measles": "40",
        "Life.expectancy": "80",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2009",
        "Measles": "33",
        "Life.expectancy": "79.8",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2008",
        "Measles": "98",
        "Life.expectancy": "79.5",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2007",
        "Measles": "64",
        "Life.expectancy": "79.5",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2006",
        "Measles": "15",
        "Life.expectancy": "79.4",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2005",
        "Measles": "26",
        "Life.expectancy": "78.9",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2004",
        "Measles": "61",
        "Life.expectancy": "78.8",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2003",
        "Measles": "44",
        "Life.expectancy": "78.3",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2001",
        "Measles": "83",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "77.6",
        "Status": "Developed"
      },
      {
        "Country": "Belize",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "70",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "69.8",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "69.5",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "69.5",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "69.6",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "69.6",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "68.7",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "68.4",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "68.2",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2015",
        "Measles": "55",
        "Life.expectancy": "60",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2014",
        "Measles": "786",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2013",
        "Measles": "637",
        "Life.expectancy": "59.5",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2012",
        "Measles": "288",
        "Life.expectancy": "59.3",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2011",
        "Measles": "426",
        "Life.expectancy": "59.1",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2010",
        "Measles": "392",
        "Life.expectancy": "58.7",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2009",
        "Measles": "1461",
        "Life.expectancy": "58.4",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2008",
        "Measles": "928",
        "Life.expectancy": "57.6",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2007",
        "Measles": "341",
        "Life.expectancy": "57.1",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2006",
        "Measles": "176",
        "Life.expectancy": "56.8",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2005",
        "Measles": "210",
        "Life.expectancy": "56.5",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2004",
        "Measles": "262",
        "Life.expectancy": "56.1",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2003",
        "Measles": "217",
        "Life.expectancy": "55.8",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2002",
        "Measles": "1588",
        "Life.expectancy": "55.6",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2001",
        "Measles": "5859",
        "Life.expectancy": "55.5",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2000",
        "Measles": "4244",
        "Life.expectancy": "55.4",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2015",
        "Measles": "11",
        "Life.expectancy": "69.8",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "69.1",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2012",
        "Measles": "1",
        "Life.expectancy": "68.7",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2011",
        "Measles": "10",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2010",
        "Measles": "21",
        "Life.expectancy": "67.9",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2009",
        "Measles": "6",
        "Life.expectancy": "67.4",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2008",
        "Measles": "7",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2007",
        "Measles": "11",
        "Life.expectancy": "66.5",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2006",
        "Measles": "2",
        "Life.expectancy": "65.8",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2005",
        "Measles": "11",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2004",
        "Measles": "3",
        "Life.expectancy": "64.2",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "63.3",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2002",
        "Measles": "27",
        "Life.expectancy": "62.5",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2001",
        "Measles": "756",
        "Life.expectancy": "61.7",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2000",
        "Measles": "418",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "69.8",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "69.3",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "68.7",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "67.4",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "66.8",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "66.2",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "65.7",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "65.1",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "64.5",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "63.9",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "63.3",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2000",
        "Measles": "122",
        "Life.expectancy": "62.6",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2015",
        "Measles": "1677",
        "Life.expectancy": "77.4",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2014",
        "Measles": "3000",
        "Life.expectancy": "77.2",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2012",
        "Measles": "22",
        "Life.expectancy": "76.8",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2011",
        "Measles": "10",
        "Life.expectancy": "76.9",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2010",
        "Measles": "45",
        "Life.expectancy": "76.4",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2009",
        "Measles": "22",
        "Life.expectancy": "76.1",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2008",
        "Measles": "8",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2007",
        "Measles": "166",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2006",
        "Measles": "17",
        "Life.expectancy": "75.7",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2005",
        "Measles": "23",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2004",
        "Measles": "28",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2003",
        "Measles": "18",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2002",
        "Measles": "28",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2000",
        "Measles": "43",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "65.7",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2014",
        "Measles": "1",
        "Life.expectancy": "65.1",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2013",
        "Measles": "1",
        "Life.expectancy": "64.2",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2012",
        "Measles": "7",
        "Life.expectancy": "63.4",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2011",
        "Measles": "8",
        "Life.expectancy": "62.2",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2010",
        "Measles": "853",
        "Life.expectancy": "61.1",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2009",
        "Measles": "184",
        "Life.expectancy": "59.2",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "57.5",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2007",
        "Measles": "1",
        "Life.expectancy": "56.9",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2006",
        "Measles": "6",
        "Life.expectancy": "54.8",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2005",
        "Measles": "5",
        "Life.expectancy": "51.7",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2004",
        "Measles": "1",
        "Life.expectancy": "48.1",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2003",
        "Measles": "59",
        "Life.expectancy": "46.4",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2002",
        "Measles": "7",
        "Life.expectancy": "46",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2001",
        "Measles": "1",
        "Life.expectancy": "46.7",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2000",
        "Measles": "2672",
        "Life.expectancy": "47.8",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2015",
        "Measles": "214",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2014",
        "Measles": "876",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2013",
        "Measles": "220",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2012",
        "Measles": "2",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2011",
        "Measles": "43",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2010",
        "Measles": "68",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2006",
        "Measles": "57",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2005",
        "Measles": "6",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2003",
        "Measles": "2",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2002",
        "Measles": "1",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2001",
        "Measles": "1",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2000",
        "Measles": "36",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2015",
        "Measles": "4",
        "Life.expectancy": "77.7",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2014",
        "Measles": "1",
        "Life.expectancy": "77.6",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "77.1",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2012",
        "Measles": "1",
        "Life.expectancy": "78.3",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2011",
        "Measles": "4",
        "Life.expectancy": "77.4",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "76.9",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2009",
        "Measles": "2",
        "Life.expectancy": "76.8",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2008",
        "Measles": "3",
        "Life.expectancy": "77.2",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "76.3",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2005",
        "Measles": "9",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2004",
        "Measles": "16",
        "Life.expectancy": "76.4",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2003",
        "Measles": "24",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2001",
        "Measles": "11",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2000",
        "Measles": "42",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Bulgaria",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "74.5",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "74.3",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2013",
        "Measles": "14",
        "Life.expectancy": "74.1",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2012",
        "Measles": "1",
        "Life.expectancy": "73.9",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2011",
        "Measles": "157",
        "Life.expectancy": "73.7",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2010",
        "Measles": "22004",
        "Life.expectancy": "73.4",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2009",
        "Measles": "2249",
        "Life.expectancy": "73.2",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2008",
        "Measles": "1",
        "Life.expectancy": "72.9",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2007",
        "Measles": "1",
        "Life.expectancy": "72.6",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2006",
        "Measles": "1",
        "Life.expectancy": "72.2",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2005",
        "Measles": "3",
        "Life.expectancy": "72.1",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "72.2",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "72",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "71.8",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2001",
        "Measles": "8",
        "Life.expectancy": "71.6",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2000",
        "Measles": "46",
        "Life.expectancy": "71.1",
        "Status": "Developed"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2015",
        "Measles": "99",
        "Life.expectancy": "59.9",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2014",
        "Measles": "343",
        "Life.expectancy": "59.3",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2013",
        "Measles": "375",
        "Life.expectancy": "59",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2012",
        "Measles": "7362",
        "Life.expectancy": "58.6",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2011",
        "Measles": "860",
        "Life.expectancy": "58.1",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2010",
        "Measles": "2511",
        "Life.expectancy": "57.5",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2009",
        "Measles": "54118",
        "Life.expectancy": "56.9",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2008",
        "Measles": "395",
        "Life.expectancy": "56.1",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2007",
        "Measles": "12",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2006",
        "Measles": "125",
        "Life.expectancy": "54.3",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2005",
        "Measles": "253",
        "Life.expectancy": "53.3",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2004",
        "Measles": "77",
        "Life.expectancy": "52.4",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2003",
        "Measles": "2946",
        "Life.expectancy": "51.6",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2002",
        "Measles": "1744",
        "Life.expectancy": "51",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2001",
        "Measles": "4174",
        "Life.expectancy": "56",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2000",
        "Measles": "6074",
        "Life.expectancy": "51",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2015",
        "Measles": "9",
        "Life.expectancy": "59.6",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "59.1",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "58.6",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2012",
        "Measles": "49",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2011",
        "Measles": "129",
        "Life.expectancy": "57.4",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2010",
        "Measles": "495",
        "Life.expectancy": "56.8",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2009",
        "Measles": "305",
        "Life.expectancy": "56.2",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2008",
        "Measles": "173",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2007",
        "Measles": "43",
        "Life.expectancy": "54.8",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2006",
        "Measles": "784",
        "Life.expectancy": "54.1",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "53.4",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2004",
        "Measles": "2",
        "Life.expectancy": "52.6",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2003",
        "Measles": "224",
        "Life.expectancy": "51.9",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2002",
        "Measles": "1016",
        "Life.expectancy": "51.5",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "51.3",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2000",
        "Measles": "18363",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2015",
        "Measles": "65",
        "Life.expectancy": "53.3",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2014",
        "Measles": "50",
        "Life.expectancy": "52.8",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2013",
        "Measles": "48",
        "Life.expectancy": "52.3",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2012",
        "Measles": "137",
        "Life.expectancy": "52",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2011",
        "Measles": "628",
        "Life.expectancy": "51.7",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2010",
        "Measles": "441",
        "Life.expectancy": "51.5",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2009",
        "Measles": "183",
        "Life.expectancy": "51",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2008",
        "Measles": "12",
        "Life.expectancy": "54",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2007",
        "Measles": "5",
        "Life.expectancy": "49.9",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2006",
        "Measles": "11",
        "Life.expectancy": "49.4",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2005",
        "Measles": "115",
        "Life.expectancy": "48.7",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2004",
        "Measles": "3466",
        "Life.expectancy": "48.2",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2003",
        "Measles": "4770",
        "Life.expectancy": "48",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2002",
        "Measles": "5882",
        "Life.expectancy": "47.7",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2001",
        "Measles": "5790",
        "Life.expectancy": "47.8",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2000",
        "Measles": "5729",
        "Life.expectancy": "47.9",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "71.1",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2000",
        "Measles": "2",
        "Life.expectancy": "69.9",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "68.7",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "67.8",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2012",
        "Measles": "15",
        "Life.expectancy": "67.4",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2011",
        "Measles": "722",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2010",
        "Measles": "1156",
        "Life.expectancy": "66.6",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2009",
        "Measles": "4779",
        "Life.expectancy": "66.1",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2008",
        "Measles": "4211",
        "Life.expectancy": "65.6",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2007",
        "Measles": "394",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2006",
        "Measles": "188",
        "Life.expectancy": "64.1",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2005",
        "Measles": "264",
        "Life.expectancy": "62.9",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2004",
        "Measles": "352",
        "Life.expectancy": "61.5",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2003",
        "Measles": "653",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2002",
        "Measles": "1361",
        "Life.expectancy": "59.3",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2001",
        "Measles": "3761",
        "Life.expectancy": "58.5",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2000",
        "Measles": "12237",
        "Life.expectancy": "57.7",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2015",
        "Measles": "1809",
        "Life.expectancy": "57.3",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2014",
        "Measles": "831",
        "Life.expectancy": "56.7",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2013",
        "Measles": "760",
        "Life.expectancy": "56.4",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2012",
        "Measles": "609",
        "Life.expectancy": "55.9",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2011",
        "Measles": "504",
        "Life.expectancy": "55.6",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2010",
        "Measles": "240",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2009",
        "Measles": "251",
        "Life.expectancy": "54.8",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2008",
        "Measles": "495",
        "Life.expectancy": "54.2",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2007",
        "Measles": "100",
        "Life.expectancy": "53.6",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2006",
        "Measles": "196",
        "Life.expectancy": "53.3",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2005",
        "Measles": "605",
        "Life.expectancy": "52.8",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2004",
        "Measles": "358",
        "Life.expectancy": "52.1",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2003",
        "Measles": "899",
        "Life.expectancy": "51.8",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2002",
        "Measles": "1448",
        "Life.expectancy": "51.6",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2001",
        "Measles": "23934",
        "Life.expectancy": "51.5",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2000",
        "Measles": "14629",
        "Life.expectancy": "51.4",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2015",
        "Measles": "195",
        "Life.expectancy": "82.2",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2014",
        "Measles": "418",
        "Life.expectancy": "82",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2013",
        "Measles": "83",
        "Life.expectancy": "81.8",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2012",
        "Measles": "10",
        "Life.expectancy": "81.6",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2011",
        "Measles": "803",
        "Life.expectancy": "81.5",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2010",
        "Measles": "99",
        "Life.expectancy": "81.2",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2009",
        "Measles": "14",
        "Life.expectancy": "81",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2008",
        "Measles": "62",
        "Life.expectancy": "87",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2007",
        "Measles": "101",
        "Life.expectancy": "85",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2006",
        "Measles": "13",
        "Life.expectancy": "85",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2005",
        "Measles": "6",
        "Life.expectancy": "81",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2004",
        "Measles": "7",
        "Life.expectancy": "80",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2003",
        "Measles": "15",
        "Life.expectancy": "79.7",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2002",
        "Measles": "6",
        "Life.expectancy": "79.5",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2001",
        "Measles": "34",
        "Life.expectancy": "79.4",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2000",
        "Measles": "206",
        "Life.expectancy": "79.1",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2015",
        "Measles": "150",
        "Life.expectancy": "52.5",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2014",
        "Measles": "210",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2013",
        "Measles": "596",
        "Life.expectancy": "49.9",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2012",
        "Measles": "141",
        "Life.expectancy": "53",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2011",
        "Measles": "679",
        "Life.expectancy": "49.8",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2010",
        "Measles": "2",
        "Life.expectancy": "49.2",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2009",
        "Measles": "11",
        "Life.expectancy": "48.6",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2008",
        "Measles": "12",
        "Life.expectancy": "47.6",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2007",
        "Measles": "49",
        "Life.expectancy": "46.8",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2006",
        "Measles": "3",
        "Life.expectancy": "46.3",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2005",
        "Measles": "471",
        "Life.expectancy": "45.9",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2004",
        "Measles": "1233",
        "Life.expectancy": "45.7",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2003",
        "Measles": "652",
        "Life.expectancy": "45.7",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2002",
        "Measles": "938",
        "Life.expectancy": "45.6",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2001",
        "Measles": "2837",
        "Life.expectancy": "45.6",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2000",
        "Measles": "3207",
        "Life.expectancy": "46",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2015",
        "Measles": "418",
        "Life.expectancy": "53.1",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2014",
        "Measles": "1275",
        "Life.expectancy": "52.6",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2013",
        "Measles": "226",
        "Life.expectancy": "52.2",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2012",
        "Measles": "120",
        "Life.expectancy": "51.8",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2011",
        "Measles": "8650",
        "Life.expectancy": "51.6",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2010",
        "Measles": "194",
        "Life.expectancy": "51.2",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2009",
        "Measles": "165",
        "Life.expectancy": "57",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2008",
        "Measles": "63",
        "Life.expectancy": "49.6",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2007",
        "Measles": "441",
        "Life.expectancy": "49.4",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2006",
        "Measles": "1594",
        "Life.expectancy": "48.5",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2005",
        "Measles": "2",
        "Life.expectancy": "48.6",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2004",
        "Measles": "10324",
        "Life.expectancy": "48.5",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2003",
        "Measles": "15801",
        "Life.expectancy": "48.4",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2002",
        "Measles": "7277",
        "Life.expectancy": "48.1",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2001",
        "Measles": "24908",
        "Life.expectancy": "48",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2000",
        "Measles": "3546",
        "Life.expectancy": "47.6",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2015",
        "Measles": "9",
        "Life.expectancy": "85",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "83",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "81",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "79.9",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2011",
        "Measles": "6",
        "Life.expectancy": "79.8",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "79.1",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2009",
        "Measles": "1",
        "Life.expectancy": "79.3",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "79.6",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "78.9",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "78.9",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "78.4",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2003",
        "Measles": "1",
        "Life.expectancy": "77.9",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "77.8",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "77.3",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "77.3",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2015",
        "Measles": "42361",
        "Life.expectancy": "76.1",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2014",
        "Measles": "52628",
        "Life.expectancy": "75.8",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2013",
        "Measles": "26883",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2012",
        "Measles": "6183",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2011",
        "Measles": "9943",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2010",
        "Measles": "38159",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2009",
        "Measles": "52461",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2008",
        "Measles": "131441",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2007",
        "Measles": "109023",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2006",
        "Measles": "99602",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2005",
        "Measles": "124219",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2004",
        "Measles": "70549",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2003",
        "Measles": "71879",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2002",
        "Measles": "58341",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2001",
        "Measles": "88962",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2000",
        "Measles": "71093",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2015",
        "Measles": "1",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2013",
        "Measles": "1",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2012",
        "Measles": "1",
        "Life.expectancy": "74.3",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2011",
        "Measles": "6",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2002",
        "Measles": "139",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2001",
        "Measles": "3",
        "Life.expectancy": "71.5",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2000",
        "Measles": "1",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "63.5",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "63.2",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "62.9",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2012",
        "Measles": "1",
        "Life.expectancy": "62.5",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2011",
        "Measles": "3",
        "Life.expectancy": "62.2",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "61.8",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2009",
        "Measles": "1",
        "Life.expectancy": "61.3",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "61",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2006",
        "Measles": "85",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2005",
        "Measles": "912",
        "Life.expectancy": "60",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "59.8",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "59.6",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "59.5",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "59.5",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "59.5",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2015",
        "Measles": "1359",
        "Life.expectancy": "64.7",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2014",
        "Measles": "71",
        "Life.expectancy": "64.2",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2013",
        "Measles": "124",
        "Life.expectancy": "63.9",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2012",
        "Measles": "260",
        "Life.expectancy": "63.7",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2011",
        "Measles": "315",
        "Life.expectancy": "62.9",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2010",
        "Measles": "4",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2009",
        "Measles": "1",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2008",
        "Measles": "2",
        "Life.expectancy": "59.4",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2007",
        "Measles": "84",
        "Life.expectancy": "58.2",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2006",
        "Measles": "126",
        "Life.expectancy": "56.9",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2005",
        "Measles": "146",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2004",
        "Measles": "3524",
        "Life.expectancy": "54.1",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2003",
        "Measles": "3712",
        "Life.expectancy": "53.2",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2002",
        "Measles": "2788",
        "Life.expectancy": "52.6",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2001",
        "Measles": "2152",
        "Life.expectancy": "52.7",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2000",
        "Measles": "1678",
        "Life.expectancy": "52.9",
        "Status": "Developing"
      },
      {
        "Country": "Cook Islands",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "0",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "79.6",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2014",
        "Measles": "1",
        "Life.expectancy": "79.5",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "79.4",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "79.2",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "78.1",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "79.2",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "78.9",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "78.9",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2005",
        "Measles": "1",
        "Life.expectancy": "78.6",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "77.7",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2003",
        "Measles": "1",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "78.3",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "77.5",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "77.6",
        "Status": "Developing"
      },
      {
        "Country": "Croatia",
        "Year": "2015",
        "Measles": "206",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "77.8",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "77.7",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2012",
        "Measles": "2",
        "Life.expectancy": "77.1",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2011",
        "Measles": "12",
        "Life.expectancy": "77",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2010",
        "Measles": "7",
        "Life.expectancy": "76.6",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2009",
        "Measles": "2",
        "Life.expectancy": "76.3",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2008",
        "Measles": "51",
        "Life.expectancy": "76",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "75.8",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2006",
        "Measles": "1",
        "Life.expectancy": "75.9",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2005",
        "Measles": "2",
        "Life.expectancy": "75.2",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2004",
        "Measles": "54",
        "Life.expectancy": "75.4",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2003",
        "Measles": "19",
        "Life.expectancy": "74.7",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2002",
        "Measles": "6",
        "Life.expectancy": "74.8",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2001",
        "Measles": "8",
        "Life.expectancy": "74.9",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2000",
        "Measles": "9",
        "Life.expectancy": "74.7",
        "Status": "Developed"
      },
      {
        "Country": "Cuba",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "79.1",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "78.7",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "78.7",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "78.8",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "78.1",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "77.9",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "78.1",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "77.2",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "77.3",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "77.4",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "77.7",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "76.7",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "76.9",
        "Status": "Developing"
      },
      {
        "Country": "Cyprus",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "85",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2014",
        "Measles": "10",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2012",
        "Measles": "1",
        "Life.expectancy": "80",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "79.7",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2010",
        "Measles": "18",
        "Life.expectancy": "79.5",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "79.3",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2008",
        "Measles": "1",
        "Life.expectancy": "79.1",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "78.9",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "78.8",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2005",
        "Measles": "1",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "78.6",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "78.5",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "78.4",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "78.2",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "78.1",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2015",
        "Measles": "9",
        "Life.expectancy": "78.8",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2014",
        "Measles": "222",
        "Life.expectancy": "78.6",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2013",
        "Measles": "15",
        "Life.expectancy": "78.2",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2012",
        "Measles": "22",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2011",
        "Measles": "17",
        "Life.expectancy": "77.8",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "77.5",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2009",
        "Measles": "5",
        "Life.expectancy": "77.1",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2008",
        "Measles": "2",
        "Life.expectancy": "77",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2007",
        "Measles": "2",
        "Life.expectancy": "76.8",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2006",
        "Measles": "7",
        "Life.expectancy": "76.5",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "75.9",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2004",
        "Measles": "17",
        "Life.expectancy": "75.8",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2003",
        "Measles": "30",
        "Life.expectancy": "75.2",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2002",
        "Measles": "4",
        "Life.expectancy": "75.3",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2001",
        "Measles": "6",
        "Life.expectancy": "75.1",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2000",
        "Measles": "9",
        "Life.expectancy": "74.7",
        "Status": "Developed"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2014",
        "Measles": "3",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "69.8",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "68.7",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2008",
        "Measles": "8",
        "Life.expectancy": "68.6",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2007",
        "Measles": "3550",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "68.4",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "68.1",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "67.6",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "66.6",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "65.4",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2015",
        "Measles": "5020",
        "Life.expectancy": "59.8",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2014",
        "Measles": "33711",
        "Life.expectancy": "59.3",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2013",
        "Measles": "88381",
        "Life.expectancy": "58.8",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2012",
        "Measles": "72029",
        "Life.expectancy": "58.3",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2011",
        "Measles": "133802",
        "Life.expectancy": "57.9",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2010",
        "Measles": "5407",
        "Life.expectancy": "57.4",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2009",
        "Measles": "57",
        "Life.expectancy": "56.7",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2008",
        "Measles": "12461",
        "Life.expectancy": "56.3",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2007",
        "Measles": "55577",
        "Life.expectancy": "55.7",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2006",
        "Measles": "80123",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2005",
        "Measles": "182485",
        "Life.expectancy": "54.3",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2004",
        "Measles": "44934",
        "Life.expectancy": "53.5",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2003",
        "Measles": "21956",
        "Life.expectancy": "52.8",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2002",
        "Measles": "30466",
        "Life.expectancy": "52.1",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2001",
        "Measles": "8072",
        "Life.expectancy": "51.8",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2000",
        "Measles": "8282",
        "Life.expectancy": "51.3",
        "Status": "Developing"
      },
      {
        "Country": "Denmark",
        "Year": "2015",
        "Measles": "9",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2014",
        "Measles": "27",
        "Life.expectancy": "84",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2013",
        "Measles": "17",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2012",
        "Measles": "2",
        "Life.expectancy": "80",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2011",
        "Measles": "84",
        "Life.expectancy": "79.7",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2010",
        "Measles": "5",
        "Life.expectancy": "79.2",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2009",
        "Measles": "6",
        "Life.expectancy": "78.9",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2008",
        "Measles": "14",
        "Life.expectancy": "78.8",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2007",
        "Measles": "2",
        "Life.expectancy": "78.4",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2006",
        "Measles": "27",
        "Life.expectancy": "78.1",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2005",
        "Measles": "2",
        "Life.expectancy": "78.1",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "77.7",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "77.3",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2002",
        "Measles": "32",
        "Life.expectancy": "77",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2001",
        "Measles": "11",
        "Life.expectancy": "77",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2000",
        "Measles": "14",
        "Life.expectancy": "76.9",
        "Status": "Developed"
      },
      {
        "Country": "Djibouti",
        "Year": "2015",
        "Measles": "47",
        "Life.expectancy": "63.5",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2013",
        "Measles": "28",
        "Life.expectancy": "62.7",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2012",
        "Measles": "709",
        "Life.expectancy": "62.2",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2011",
        "Measles": "49",
        "Life.expectancy": "61.8",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2010",
        "Measles": "7",
        "Life.expectancy": "61.3",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2009",
        "Measles": "48",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2008",
        "Measles": "143",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2007",
        "Measles": "24",
        "Life.expectancy": "59.8",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2006",
        "Measles": "49",
        "Life.expectancy": "59.1",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2005",
        "Measles": "298",
        "Life.expectancy": "58.6",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2004",
        "Measles": "71",
        "Life.expectancy": "58.1",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2003",
        "Measles": "37",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2002",
        "Measles": "50",
        "Life.expectancy": "57.9",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2001",
        "Measles": "79",
        "Life.expectancy": "57.7",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2000",
        "Measles": "183",
        "Life.expectancy": "57.4",
        "Status": "Developing"
      },
      {
        "Country": "Dominica",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "0",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2011",
        "Measles": "2",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "69.7",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "69.3",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2001",
        "Measles": "113",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2000",
        "Measles": "253",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2012",
        "Measles": "72",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2011",
        "Measles": "257",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "75.1",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2008",
        "Measles": "1",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2001",
        "Measles": "2",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2015",
        "Measles": "5432",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2014",
        "Measles": "1314",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2013",
        "Measles": "405",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2012",
        "Measles": "245",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2011",
        "Measles": "26",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2010",
        "Measles": "16",
        "Life.expectancy": "70",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2009",
        "Measles": "608",
        "Life.expectancy": "69.9",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2008",
        "Measles": "668",
        "Life.expectancy": "69.8",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2007",
        "Measles": "1684",
        "Life.expectancy": "69.7",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2006",
        "Measles": "953",
        "Life.expectancy": "69.5",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2005",
        "Measles": "77",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2004",
        "Measles": "80",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2003",
        "Measles": "164",
        "Life.expectancy": "68.6",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2002",
        "Measles": "653",
        "Life.expectancy": "68.7",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2001",
        "Measles": "2150",
        "Life.expectancy": "68.6",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2000",
        "Measles": "2633",
        "Life.expectancy": "68.8",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "70",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "69.9",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2001",
        "Measles": "2",
        "Life.expectancy": "68.9",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2015",
        "Measles": "1250",
        "Life.expectancy": "58.2",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2014",
        "Measles": "13",
        "Life.expectancy": "57.9",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2013",
        "Measles": "321",
        "Life.expectancy": "57.4",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2012",
        "Measles": "1190",
        "Life.expectancy": "56.7",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "56.2",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "56.1",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2009",
        "Measles": "78",
        "Life.expectancy": "55.7",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2008",
        "Measles": "436",
        "Life.expectancy": "55.4",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2007",
        "Measles": "5",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "54.8",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "54.4",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2004",
        "Measles": "38",
        "Life.expectancy": "54.1",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2003",
        "Measles": "18",
        "Life.expectancy": "53.8",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2002",
        "Measles": "24",
        "Life.expectancy": "53.5",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2001",
        "Measles": "1339",
        "Life.expectancy": "53.1",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "52.7",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2015",
        "Measles": "198",
        "Life.expectancy": "64.7",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2014",
        "Measles": "127",
        "Life.expectancy": "64.4",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2013",
        "Measles": "45",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2012",
        "Measles": "194",
        "Life.expectancy": "63.6",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2011",
        "Measles": "48",
        "Life.expectancy": "62.9",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2010",
        "Measles": "51",
        "Life.expectancy": "62.1",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2009",
        "Measles": "82",
        "Life.expectancy": "61.4",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2007",
        "Measles": "55",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2006",
        "Measles": "128",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2005",
        "Measles": "19",
        "Life.expectancy": "59.4",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2004",
        "Measles": "24",
        "Life.expectancy": "59.1",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2003",
        "Measles": "376",
        "Life.expectancy": "58.8",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2002",
        "Measles": "460",
        "Life.expectancy": "58.5",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2001",
        "Measles": "204",
        "Life.expectancy": "58.1",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2000",
        "Measles": "789",
        "Life.expectancy": "45.3",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2015",
        "Measles": "4",
        "Life.expectancy": "77.6",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "77.3",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2013",
        "Measles": "2",
        "Life.expectancy": "76.9",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2012",
        "Measles": "4",
        "Life.expectancy": "76.3",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2011",
        "Measles": "7",
        "Life.expectancy": "76.1",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2007",
        "Measles": "1",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2006",
        "Measles": "27",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2005",
        "Measles": "2",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2000",
        "Measles": "9",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2015",
        "Measles": "17745",
        "Life.expectancy": "64.8",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2014",
        "Measles": "12739",
        "Life.expectancy": "64.2",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2013",
        "Measles": "5253",
        "Life.expectancy": "63.7",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2012",
        "Measles": "4347",
        "Life.expectancy": "63.3",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2011",
        "Measles": "3255",
        "Life.expectancy": "62.6",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2010",
        "Measles": "4235",
        "Life.expectancy": "61.8",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2009",
        "Measles": "1176",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2008",
        "Measles": "3511",
        "Life.expectancy": "59.8",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2007",
        "Measles": "1446",
        "Life.expectancy": "58.5",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2006",
        "Measles": "1451",
        "Life.expectancy": "57.2",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2005",
        "Measles": "357",
        "Life.expectancy": "56",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2004",
        "Measles": "73",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2003",
        "Measles": "228",
        "Life.expectancy": "54",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2002",
        "Measles": "3332",
        "Life.expectancy": "53.2",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2001",
        "Measles": "2366",
        "Life.expectancy": "52.5",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2000",
        "Measles": "1660",
        "Life.expectancy": "51.2",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "69.9",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "69.7",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "69.6",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "69.2",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "69.1",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2009",
        "Measles": "1",
        "Life.expectancy": "68.9",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "68.7",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "68.6",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2006",
        "Measles": "136",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2004",
        "Measles": "37",
        "Life.expectancy": "68.1",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2003",
        "Measles": "305",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2002",
        "Measles": "304",
        "Life.expectancy": "67.9",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2001",
        "Measles": "17",
        "Life.expectancy": "67.8",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2015",
        "Measles": "2",
        "Life.expectancy": "81.1",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "89",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2013",
        "Measles": "2",
        "Life.expectancy": "87",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "84",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2011",
        "Measles": "27",
        "Life.expectancy": "83",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2010",
        "Measles": "5",
        "Life.expectancy": "79.9",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2009",
        "Measles": "2",
        "Life.expectancy": "79.7",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2008",
        "Measles": "5",
        "Life.expectancy": "79.6",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "79.3",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "79.2",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2005",
        "Measles": "1",
        "Life.expectancy": "78.9",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "78.7",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "78.4",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "78.1",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2001",
        "Measles": "1",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "77.5",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2015",
        "Measles": "157",
        "Life.expectancy": "82.4",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2014",
        "Measles": "267",
        "Life.expectancy": "82.2",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2013",
        "Measles": "272",
        "Life.expectancy": "82",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "81.5",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2011",
        "Measles": "14949",
        "Life.expectancy": "81.7",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2010",
        "Measles": "5048",
        "Life.expectancy": "81.3",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2009",
        "Measles": "1541",
        "Life.expectancy": "81.1",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2008",
        "Measles": "604",
        "Life.expectancy": "89",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2007",
        "Measles": "39",
        "Life.expectancy": "89",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2006",
        "Measles": "40",
        "Life.expectancy": "86",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2005",
        "Measles": "36",
        "Life.expectancy": "81",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2004",
        "Measles": "4448",
        "Life.expectancy": "82",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "79.3",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2002",
        "Measles": "5185",
        "Life.expectancy": "79.2",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2000",
        "Measles": "10000",
        "Life.expectancy": "78.8",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2015",
        "Measles": "27",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2014",
        "Measles": "33",
        "Life.expectancy": "65.5",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2013",
        "Measles": "122",
        "Life.expectancy": "64.6",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2012",
        "Measles": "2",
        "Life.expectancy": "63.5",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2011",
        "Measles": "2",
        "Life.expectancy": "62.8",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2010",
        "Measles": "1",
        "Life.expectancy": "62.3",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "61.7",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2008",
        "Measles": "3",
        "Life.expectancy": "61.6",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "61.6",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2006",
        "Measles": "90",
        "Life.expectancy": "61.4",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2004",
        "Measles": "63",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2002",
        "Measles": "110",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2001",
        "Measles": "5129",
        "Life.expectancy": "59.8",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2000",
        "Measles": "15",
        "Life.expectancy": "61",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2015",
        "Measles": "71",
        "Life.expectancy": "61.1",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2014",
        "Measles": "1",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "59.8",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2010",
        "Measles": "2",
        "Life.expectancy": "59.3",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "59",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "58.7",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "58.5",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "58.2",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "57.7",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "57.3",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2003",
        "Measles": "119",
        "Life.expectancy": "57",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2002",
        "Measles": "32",
        "Life.expectancy": "56.6",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2001",
        "Measles": "99",
        "Life.expectancy": "56.3",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2000",
        "Measles": "336",
        "Life.expectancy": "55.9",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2015",
        "Measles": "431",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2014",
        "Measles": "3188",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2013",
        "Measles": "7872",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2012",
        "Measles": "31",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2011",
        "Measles": "64",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2010",
        "Measles": "22",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2009",
        "Measles": "23",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2008",
        "Measles": "56",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2007",
        "Measles": "44",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2006",
        "Measles": "334",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2005",
        "Measles": "1356",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2004",
        "Measles": "6847",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2003",
        "Measles": "216",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2002",
        "Measles": "199",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2001",
        "Measles": "35",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2000",
        "Measles": "50",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Germany",
        "Year": "2015",
        "Measles": "2464",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2014",
        "Measles": "443",
        "Life.expectancy": "89",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2013",
        "Measles": "1771",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2012",
        "Measles": "166",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2011",
        "Measles": "1607",
        "Life.expectancy": "85",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2010",
        "Measles": "780",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2009",
        "Measles": "574",
        "Life.expectancy": "80",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2008",
        "Measles": "917",
        "Life.expectancy": "79.9",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2007",
        "Measles": "567",
        "Life.expectancy": "79.8",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2006",
        "Measles": "2307",
        "Life.expectancy": "79.6",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2005",
        "Measles": "778",
        "Life.expectancy": "79.2",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2004",
        "Measles": "121",
        "Life.expectancy": "79.1",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2003",
        "Measles": "779",
        "Life.expectancy": "78.5",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2002",
        "Measles": "4657",
        "Life.expectancy": "78.4",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2001",
        "Measles": "6024",
        "Life.expectancy": "78.3",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Ghana",
        "Year": "2015",
        "Measles": "23",
        "Life.expectancy": "62.4",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2014",
        "Measles": "124",
        "Life.expectancy": "62.1",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2013",
        "Measles": "319",
        "Life.expectancy": "61.9",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2012",
        "Measles": "1613",
        "Life.expectancy": "61.6",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2011",
        "Measles": "120",
        "Life.expectancy": "61.2",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2010",
        "Measles": "641",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2009",
        "Measles": "101",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2008",
        "Measles": "82",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2007",
        "Measles": "6",
        "Life.expectancy": "59.9",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2006",
        "Measles": "420",
        "Life.expectancy": "59.4",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2005",
        "Measles": "435",
        "Life.expectancy": "58.9",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2004",
        "Measles": "60",
        "Life.expectancy": "58.3",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2003",
        "Measles": "1939",
        "Life.expectancy": "57.9",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2002",
        "Measles": "12289",
        "Life.expectancy": "57.6",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2001",
        "Measles": "13476",
        "Life.expectancy": "57.4",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2000",
        "Measles": "23068",
        "Life.expectancy": "57.2",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2015",
        "Measles": "1",
        "Life.expectancy": "81",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2014",
        "Measles": "1",
        "Life.expectancy": "88",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2013",
        "Measles": "3",
        "Life.expectancy": "86",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2012",
        "Measles": "3",
        "Life.expectancy": "84",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2011",
        "Measles": "40",
        "Life.expectancy": "85",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2010",
        "Measles": "149",
        "Life.expectancy": "83",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2009",
        "Measles": "2",
        "Life.expectancy": "80",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2008",
        "Measles": "1",
        "Life.expectancy": "79.9",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2007",
        "Measles": "2",
        "Life.expectancy": "79.4",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "79.7",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2005",
        "Measles": "122",
        "Life.expectancy": "79.3",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2004",
        "Measles": "1",
        "Life.expectancy": "79.2",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "79.1",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2002",
        "Measles": "5",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2001",
        "Measles": "12",
        "Life.expectancy": "78.7",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2000",
        "Measles": "56",
        "Life.expectancy": "78.2",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "71.5",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "71.1",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "71.3",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "71.1",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "69.7",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "69.2",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "69.6",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "69.3",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "68.4",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2015",
        "Measles": "243",
        "Life.expectancy": "59",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2014",
        "Measles": "175",
        "Life.expectancy": "58.1",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2013",
        "Measles": "53",
        "Life.expectancy": "58.8",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2012",
        "Measles": "6",
        "Life.expectancy": "58.4",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2011",
        "Measles": "11",
        "Life.expectancy": "58.1",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2010",
        "Measles": "45",
        "Life.expectancy": "57.8",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2009",
        "Measles": "264",
        "Life.expectancy": "57.3",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2008",
        "Measles": "89",
        "Life.expectancy": "56.8",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2007",
        "Measles": "3",
        "Life.expectancy": "56.4",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2006",
        "Measles": "4",
        "Life.expectancy": "55.6",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2005",
        "Measles": "99",
        "Life.expectancy": "54.7",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2004",
        "Measles": "10",
        "Life.expectancy": "54",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2003",
        "Measles": "2497",
        "Life.expectancy": "53.3",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2002",
        "Measles": "2151",
        "Life.expectancy": "52.9",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2001",
        "Measles": "7408",
        "Life.expectancy": "52.5",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2000",
        "Measles": "11294",
        "Life.expectancy": "52.5",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2015",
        "Measles": "153",
        "Life.expectancy": "58.9",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2014",
        "Measles": "1",
        "Life.expectancy": "58.4",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "58.1",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "57.6",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "57.1",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2010",
        "Measles": "26",
        "Life.expectancy": "56.7",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "56.3",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2008",
        "Measles": "12",
        "Life.expectancy": "55.6",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2007",
        "Measles": "1",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "54.4",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "53.9",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2004",
        "Measles": "3526",
        "Life.expectancy": "53.5",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2003",
        "Measles": "1158",
        "Life.expectancy": "53",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2002",
        "Measles": "298",
        "Life.expectancy": "52.8",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2001",
        "Measles": "126",
        "Life.expectancy": "52.5",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "52.1",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "66.2",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "65.9",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "65.8",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "65.6",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "65.9",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "66.1",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "66.3",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "65.7",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "65.2",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "65.1",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "65.3",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "65.3",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "65.4",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "65.4",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "63.5",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "63.1",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "62.7",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "62.3",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "62.3",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "36.3",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "62.5",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "62.1",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "61.8",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "61.1",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "58.7",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "59.3",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2001",
        "Measles": "159",
        "Life.expectancy": "58.9",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2000",
        "Measles": "992",
        "Life.expectancy": "58.6",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "74.3",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "71.6",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "71.3",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Hungary",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "75.8",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "75.6",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2013",
        "Measles": "1",
        "Life.expectancy": "75.5",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2012",
        "Measles": "2",
        "Life.expectancy": "75",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2011",
        "Measles": "5",
        "Life.expectancy": "74.8",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "74.5",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2009",
        "Measles": "1",
        "Life.expectancy": "74.2",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "74.1",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "73.5",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2006",
        "Measles": "1",
        "Life.expectancy": "73.4",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2005",
        "Measles": "2",
        "Life.expectancy": "72.9",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "72.9",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "72.5",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "72.5",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2001",
        "Measles": "20",
        "Life.expectancy": "72.3",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2000",
        "Measles": "1",
        "Life.expectancy": "71.7",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "82.7",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "82.5",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "82.4",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "82.5",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "82.1",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "81.8",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "81.6",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "81.4",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "81.3",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "88",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "87",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "84",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "80",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "79.7",
        "Status": "Developed"
      },
      {
        "Country": "India",
        "Year": "2015",
        "Measles": "90387",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2014",
        "Measles": "79563",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2013",
        "Measles": "13822",
        "Life.expectancy": "67.6",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2012",
        "Measles": "18668",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2011",
        "Measles": "33634",
        "Life.expectancy": "66.8",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2010",
        "Measles": "31458",
        "Life.expectancy": "66.4",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2009",
        "Measles": "56188",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2008",
        "Measles": "44258",
        "Life.expectancy": "65.5",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2007",
        "Measles": "41144",
        "Life.expectancy": "65.2",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2006",
        "Measles": "64185",
        "Life.expectancy": "64.8",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2005",
        "Measles": "36711",
        "Life.expectancy": "64.4",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2004",
        "Measles": "55443",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2003",
        "Measles": "47147",
        "Life.expectancy": "63.7",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2002",
        "Measles": "40044",
        "Life.expectancy": "63.3",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2001",
        "Measles": "51780",
        "Life.expectancy": "62.9",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2000",
        "Measles": "38835",
        "Life.expectancy": "62.5",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2015",
        "Measles": "15099",
        "Life.expectancy": "69.1",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2014",
        "Measles": "12943",
        "Life.expectancy": "68.9",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2013",
        "Measles": "8419",
        "Life.expectancy": "68.7",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2012",
        "Measles": "15489",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2011",
        "Measles": "21893",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2010",
        "Measles": "18869",
        "Life.expectancy": "68.1",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2009",
        "Measles": "20818",
        "Life.expectancy": "67.9",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2008",
        "Measles": "15369",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2007",
        "Measles": "19456",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2006",
        "Measles": "20422",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2005",
        "Measles": "15853",
        "Life.expectancy": "67.2",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2004",
        "Measles": "29171",
        "Life.expectancy": "65.3",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2003",
        "Measles": "24457",
        "Life.expectancy": "66.9",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2002",
        "Measles": "14492",
        "Life.expectancy": "66.7",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2001",
        "Measles": "3825",
        "Life.expectancy": "66.5",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2000",
        "Measles": "3344",
        "Life.expectancy": "66.3",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2015",
        "Measles": "615",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2014",
        "Measles": "99",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2013",
        "Measles": "189",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2012",
        "Measles": "332",
        "Life.expectancy": "75.1",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2011",
        "Measles": "73",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2010",
        "Measles": "538",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2009",
        "Measles": "262",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2008",
        "Measles": "127",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2007",
        "Measles": "133",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2006",
        "Measles": "220",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2005",
        "Measles": "7",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2004",
        "Measles": "3",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2003",
        "Measles": "11644",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2002",
        "Measles": "9554",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2001",
        "Measles": "9582",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2000",
        "Measles": "11874",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2015",
        "Measles": "1433",
        "Life.expectancy": "68.9",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2014",
        "Measles": "1317",
        "Life.expectancy": "67.9",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2013",
        "Measles": "669",
        "Life.expectancy": "69.5",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2012",
        "Measles": "15",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2011",
        "Measles": "15",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2010",
        "Measles": "492",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2009",
        "Measles": "30328",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2008",
        "Measles": "5494",
        "Life.expectancy": "69.3",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2007",
        "Measles": "230",
        "Life.expectancy": "65.9",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2006",
        "Measles": "474",
        "Life.expectancy": "64.7",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2005",
        "Measles": "908",
        "Life.expectancy": "66.8",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2004",
        "Measles": "9081",
        "Life.expectancy": "67.2",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "66.5",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2001",
        "Measles": "4088",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2000",
        "Measles": "726",
        "Life.expectancy": "70",
        "Status": "Developing"
      },
      {
        "Country": "Ireland",
        "Year": "2015",
        "Measles": "4",
        "Life.expectancy": "81.4",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2014",
        "Measles": "33",
        "Life.expectancy": "81.2",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2013",
        "Measles": "51",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2012",
        "Measles": "107",
        "Life.expectancy": "85",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2011",
        "Measles": "285",
        "Life.expectancy": "84",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2010",
        "Measles": "443",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2009",
        "Measles": "164",
        "Life.expectancy": "79.7",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2008",
        "Measles": "57",
        "Life.expectancy": "79.8",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2007",
        "Measles": "64",
        "Life.expectancy": "79.5",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2006",
        "Measles": "87",
        "Life.expectancy": "79",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2005",
        "Measles": "95",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2004",
        "Measles": "334",
        "Life.expectancy": "78.3",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2003",
        "Measles": "584",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2002",
        "Measles": "243",
        "Life.expectancy": "77.4",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2001",
        "Measles": "241",
        "Life.expectancy": "77",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "76.4",
        "Status": "Developed"
      },
      {
        "Country": "Israel",
        "Year": "2015",
        "Measles": "80",
        "Life.expectancy": "82.5",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2014",
        "Measles": "6",
        "Life.expectancy": "82.2",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2013",
        "Measles": "50",
        "Life.expectancy": "82.1",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2012",
        "Measles": "211",
        "Life.expectancy": "81.8",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2011",
        "Measles": "70",
        "Life.expectancy": "81.8",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2010",
        "Measles": "23",
        "Life.expectancy": "81.7",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2009",
        "Measles": "5",
        "Life.expectancy": "81.5",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2008",
        "Measles": "931",
        "Life.expectancy": "81",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2007",
        "Measles": "539",
        "Life.expectancy": "84",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2006",
        "Measles": "9",
        "Life.expectancy": "84",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2005",
        "Measles": "2",
        "Life.expectancy": "80",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2004",
        "Measles": "116",
        "Life.expectancy": "81",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2003",
        "Measles": "124",
        "Life.expectancy": "79.7",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2002",
        "Measles": "2",
        "Life.expectancy": "79.3",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2001",
        "Measles": "19",
        "Life.expectancy": "79.3",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2000",
        "Measles": "36",
        "Life.expectancy": "78.9",
        "Status": "Developing"
      },
      {
        "Country": "Italy",
        "Year": "2015",
        "Measles": "159",
        "Life.expectancy": "82.7",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "82.5",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "82.3",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2012",
        "Measles": "376",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2011",
        "Measles": "5189",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2010",
        "Measles": "372",
        "Life.expectancy": "81.8",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2009",
        "Measles": "351",
        "Life.expectancy": "81.6",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2008",
        "Measles": "1617",
        "Life.expectancy": "81.5",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2007",
        "Measles": "321",
        "Life.expectancy": "81.3",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2006",
        "Measles": "439",
        "Life.expectancy": "81.2",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2005",
        "Measles": "135",
        "Life.expectancy": "88",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2004",
        "Measles": "599",
        "Life.expectancy": "89",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2003",
        "Measles": "10982",
        "Life.expectancy": "79.9",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2002",
        "Measles": "9385",
        "Life.expectancy": "80",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "79.8",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2000",
        "Measles": "1457",
        "Life.expectancy": "79.4",
        "Status": "Developed"
      },
      {
        "Country": "Jamaica",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "75.8",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2011",
        "Measles": "1",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2008",
        "Measles": "2",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Japan",
        "Year": "2015",
        "Measles": "35",
        "Life.expectancy": "83.7",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2014",
        "Measles": "462",
        "Life.expectancy": "83.5",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2013",
        "Measles": "229",
        "Life.expectancy": "83.5",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2012",
        "Measles": "228",
        "Life.expectancy": "83.3",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2011",
        "Measles": "434",
        "Life.expectancy": "82.5",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2010",
        "Measles": "450",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2009",
        "Measles": "741",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2008",
        "Measles": "11015",
        "Life.expectancy": "82.7",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "82.6",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2006",
        "Measles": "520",
        "Life.expectancy": "82.4",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2004",
        "Measles": "8752",
        "Life.expectancy": "82.1",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2003",
        "Measles": "8286",
        "Life.expectancy": "81.9",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2002",
        "Measles": "33812",
        "Life.expectancy": "81.8",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2001",
        "Measles": "22552",
        "Life.expectancy": "81.5",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2000",
        "Measles": "22497",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Jordan",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2014",
        "Measles": "20",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2013",
        "Measles": "120",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2012",
        "Measles": "3",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2008",
        "Measles": "2",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2007",
        "Measles": "41",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2006",
        "Measles": "1",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2005",
        "Measles": "28",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2004",
        "Measles": "21",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2003",
        "Measles": "76",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2002",
        "Measles": "19",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2001",
        "Measles": "61",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2000",
        "Measles": "32",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2015",
        "Measles": "526",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2014",
        "Measles": "321",
        "Life.expectancy": "69.9",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2013",
        "Measles": "73",
        "Life.expectancy": "69.5",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2012",
        "Measles": "55",
        "Life.expectancy": "69.1",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2011",
        "Measles": "127",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2010",
        "Measles": "4",
        "Life.expectancy": "67.8",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "67.8",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2008",
        "Measles": "20",
        "Life.expectancy": "66.6",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2007",
        "Measles": "13",
        "Life.expectancy": "65.3",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2006",
        "Measles": "109",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2005",
        "Measles": "16118",
        "Life.expectancy": "64.6",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2004",
        "Measles": "2204",
        "Life.expectancy": "64.7",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2003",
        "Measles": "24",
        "Life.expectancy": "64.4",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2002",
        "Measles": "18",
        "Life.expectancy": "64.7",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2001",
        "Measles": "94",
        "Life.expectancy": "64.4",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2000",
        "Measles": "245",
        "Life.expectancy": "63.9",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2015",
        "Measles": "95",
        "Life.expectancy": "63.4",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2014",
        "Measles": "354",
        "Life.expectancy": "62.9",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2013",
        "Measles": "190",
        "Life.expectancy": "62.6",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "62.1",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2011",
        "Measles": "2395",
        "Life.expectancy": "61.2",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2010",
        "Measles": "95",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2009",
        "Measles": "1218",
        "Life.expectancy": "59.1",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2008",
        "Measles": "1282",
        "Life.expectancy": "57.9",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2007",
        "Measles": "1516",
        "Life.expectancy": "56.8",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2006",
        "Measles": "1847",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2005",
        "Measles": "153",
        "Life.expectancy": "54.1",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2004",
        "Measles": "20",
        "Life.expectancy": "53",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2003",
        "Measles": "65",
        "Life.expectancy": "52.4",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2002",
        "Measles": "766",
        "Life.expectancy": "52.1",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2001",
        "Measles": "11304",
        "Life.expectancy": "51.9",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2000",
        "Measles": "21002",
        "Life.expectancy": "51.9",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "66.3",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "66.1",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "65.8",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "65.7",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "65.5",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "65.3",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "65.2",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "65.1",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "64.9",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "64.8",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "64.7",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "64.6",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "64.3",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "64.1",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2015",
        "Measles": "18",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2014",
        "Measles": "55",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2013",
        "Measles": "62",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2012",
        "Measles": "27",
        "Life.expectancy": "74.3",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2011",
        "Measles": "32",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2010",
        "Measles": "13",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2005",
        "Measles": "10",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2004",
        "Measles": "23",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2000",
        "Measles": "6",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2015",
        "Measles": "17779",
        "Life.expectancy": "71.1",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2014",
        "Measles": "318",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2013",
        "Measles": "1",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "69.9",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2011",
        "Measles": "222",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "68.8",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2009",
        "Measles": "1",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2008",
        "Measles": "16",
        "Life.expectancy": "67.6",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2007",
        "Measles": "40",
        "Life.expectancy": "67.2",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2006",
        "Measles": "27",
        "Life.expectancy": "66.7",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2005",
        "Measles": "53",
        "Life.expectancy": "66.9",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2004",
        "Measles": "8",
        "Life.expectancy": "67.1",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2003",
        "Measles": "6",
        "Life.expectancy": "66.6",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2002",
        "Measles": "2",
        "Life.expectancy": "66.7",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2001",
        "Measles": "17",
        "Life.expectancy": "67.2",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2000",
        "Measles": "16",
        "Life.expectancy": "66.6",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2015",
        "Measles": "56",
        "Life.expectancy": "65.7",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2014",
        "Measles": "339",
        "Life.expectancy": "65.3",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2013",
        "Measles": "71",
        "Life.expectancy": "64.9",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2012",
        "Measles": "32",
        "Life.expectancy": "64.4",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2011",
        "Measles": "113",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2010",
        "Measles": "153",
        "Life.expectancy": "63.6",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2009",
        "Measles": "78",
        "Life.expectancy": "63.1",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2008",
        "Measles": "174",
        "Life.expectancy": "62.6",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2007",
        "Measles": "1678",
        "Life.expectancy": "62.1",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2006",
        "Measles": "58",
        "Life.expectancy": "61.5",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2005",
        "Measles": "295",
        "Life.expectancy": "61",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2004",
        "Measles": "1491",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2003",
        "Measles": "1810",
        "Life.expectancy": "59.8",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2002",
        "Measles": "2070",
        "Life.expectancy": "59.3",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2001",
        "Measles": "94",
        "Life.expectancy": "58.7",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2000",
        "Measles": "332",
        "Life.expectancy": "58.1",
        "Status": "Developing"
      },
      {
        "Country": "Latvia",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "74.6",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2014",
        "Measles": "36",
        "Life.expectancy": "74.4",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "74.1",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2012",
        "Measles": "3",
        "Life.expectancy": "73.8",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2011",
        "Measles": "1",
        "Life.expectancy": "73.6",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "72.8",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "72.6",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2008",
        "Measles": "3",
        "Life.expectancy": "71.9",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2006",
        "Measles": "7",
        "Life.expectancy": "75",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2005",
        "Measles": "2",
        "Life.expectancy": "76",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "71",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "73",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2001",
        "Measles": "1",
        "Life.expectancy": "69.9",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "71",
        "Status": "Developed"
      },
      {
        "Country": "Lebanon",
        "Year": "2015",
        "Measles": "39",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2014",
        "Measles": "112",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2013",
        "Measles": "1761",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2012",
        "Measles": "9",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2011",
        "Measles": "9",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2010",
        "Measles": "12",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2009",
        "Measles": "22",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2008",
        "Measles": "24",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2007",
        "Measles": "373",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2006",
        "Measles": "956",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2005",
        "Measles": "618",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2004",
        "Measles": "213",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2003",
        "Measles": "526",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2002",
        "Measles": "36",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2001",
        "Measles": "8",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2000",
        "Measles": "5",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "53.7",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "52.1",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2013",
        "Measles": "516",
        "Life.expectancy": "52.1",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2012",
        "Measles": "179",
        "Life.expectancy": "52.2",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2011",
        "Measles": "172",
        "Life.expectancy": "52.3",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2010",
        "Measles": "2488",
        "Life.expectancy": "51.1",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "49.4",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "47.8",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2007",
        "Measles": "2",
        "Life.expectancy": "46.2",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2006",
        "Measles": "1",
        "Life.expectancy": "45.3",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "44.5",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2004",
        "Measles": "31",
        "Life.expectancy": "44.8",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2003",
        "Measles": "1",
        "Life.expectancy": "45.5",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "46.4",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2001",
        "Measles": "217",
        "Life.expectancy": "47.8",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2000",
        "Measles": "660",
        "Life.expectancy": "49.3",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2015",
        "Measles": "1060",
        "Life.expectancy": "61.4",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2014",
        "Measles": "34",
        "Life.expectancy": "58.1",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "61.1",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2012",
        "Measles": "43",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2011",
        "Measles": "279",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2010",
        "Measles": "2200",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2009",
        "Measles": "6",
        "Life.expectancy": "59.2",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2008",
        "Measles": "1",
        "Life.expectancy": "58.6",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2007",
        "Measles": "1",
        "Life.expectancy": "57.9",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2006",
        "Measles": "20",
        "Life.expectancy": "56.7",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2005",
        "Measles": "8",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2004",
        "Measles": "4",
        "Life.expectancy": "54",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2003",
        "Measles": "142",
        "Life.expectancy": "50",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2002",
        "Measles": "131",
        "Life.expectancy": "56",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2001",
        "Measles": "1379",
        "Life.expectancy": "51.5",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2000",
        "Measles": "5977",
        "Life.expectancy": "51.9",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2015",
        "Measles": "82",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2014",
        "Measles": "372",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2012",
        "Measles": "320",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "71.3",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2009",
        "Measles": "329",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2008",
        "Measles": "8",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2007",
        "Measles": "59",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2006",
        "Measles": "1",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2005",
        "Measles": "292",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2004",
        "Measles": "2771",
        "Life.expectancy": "71.5",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "71.3",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2002",
        "Measles": "3890",
        "Life.expectancy": "71.1",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2001",
        "Measles": "633",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Lithuania",
        "Year": "2015",
        "Measles": "50",
        "Life.expectancy": "73.6",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2014",
        "Measles": "11",
        "Life.expectancy": "73.4",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2013",
        "Measles": "35",
        "Life.expectancy": "73",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "73",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2011",
        "Measles": "7",
        "Life.expectancy": "72.8",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2010",
        "Measles": "2",
        "Life.expectancy": "72.4",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "72.2",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2008",
        "Measles": "1",
        "Life.expectancy": "71.1",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "72",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2006",
        "Measles": "1",
        "Life.expectancy": "76",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2005",
        "Measles": "1",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2004",
        "Measles": "1",
        "Life.expectancy": "71.6",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2003",
        "Measles": "1",
        "Life.expectancy": "71.6",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2002",
        "Measles": "103",
        "Life.expectancy": "71.4",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2001",
        "Measles": "7",
        "Life.expectancy": "71.2",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2000",
        "Measles": "19",
        "Life.expectancy": "71.6",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "81.7",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "81.4",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2012",
        "Measles": "2",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2011",
        "Measles": "6",
        "Life.expectancy": "88",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2008",
        "Measles": "1",
        "Life.expectancy": "80",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "79.7",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2006",
        "Measles": "8",
        "Life.expectancy": "79.4",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "78.8",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2003",
        "Measles": "1",
        "Life.expectancy": "78.6",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "78.3",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "77.8",
        "Status": "Developed"
      },
      {
        "Country": "Madagascar",
        "Year": "2015",
        "Measles": "3",
        "Life.expectancy": "65.5",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2014",
        "Measles": "3",
        "Life.expectancy": "65.1",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2013",
        "Measles": "6",
        "Life.expectancy": "64.7",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2012",
        "Measles": "2",
        "Life.expectancy": "64.3",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "63.8",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2010",
        "Measles": "1",
        "Life.expectancy": "63.3",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "62.8",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2008",
        "Measles": "3",
        "Life.expectancy": "62.3",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "61.9",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2006",
        "Measles": "2",
        "Life.expectancy": "61.4",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2004",
        "Measles": "35558",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2003",
        "Measles": "62233",
        "Life.expectancy": "59.9",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2002",
        "Measles": "10795",
        "Life.expectancy": "59.3",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2001",
        "Measles": "9357",
        "Life.expectancy": "58.7",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2000",
        "Measles": "35256",
        "Life.expectancy": "57.9",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "58.3",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2014",
        "Measles": "3",
        "Life.expectancy": "57.6",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2013",
        "Measles": "1",
        "Life.expectancy": "56.7",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2012",
        "Measles": "11",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2011",
        "Measles": "26",
        "Life.expectancy": "54.1",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2010",
        "Measles": "118712",
        "Life.expectancy": "52.9",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2009",
        "Measles": "21",
        "Life.expectancy": "51.5",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2008",
        "Measles": "20",
        "Life.expectancy": "50",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2007",
        "Measles": "143",
        "Life.expectancy": "48.5",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2006",
        "Measles": "1",
        "Life.expectancy": "47.1",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2005",
        "Measles": "184",
        "Life.expectancy": "46",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2004",
        "Measles": "1116",
        "Life.expectancy": "45.1",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2003",
        "Measles": "167",
        "Life.expectancy": "44.6",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2002",
        "Measles": "92",
        "Life.expectancy": "44",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2001",
        "Measles": "150",
        "Life.expectancy": "43.5",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2000",
        "Measles": "304",
        "Life.expectancy": "43.1",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2015",
        "Measles": "1318",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2014",
        "Measles": "221",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2013",
        "Measles": "195",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2012",
        "Measles": "1868",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2011",
        "Measles": "1569",
        "Life.expectancy": "74.3",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2010",
        "Measles": "73",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2009",
        "Measles": "153",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2008",
        "Measles": "334",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2007",
        "Measles": "394",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2006",
        "Measles": "564",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2005",
        "Measles": "1407",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2004",
        "Measles": "5729",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2003",
        "Measles": "632",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2002",
        "Measles": "408",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2001",
        "Measles": "2198",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2000",
        "Measles": "6187",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "78.5",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "78.2",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "77.9",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "77.6",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "77.3",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "76.7",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2009",
        "Measles": "6",
        "Life.expectancy": "76.3",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "75.9",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2007",
        "Measles": "20",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2006",
        "Measles": "47",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2005",
        "Measles": "1395",
        "Life.expectancy": "74.3",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2004",
        "Measles": "37",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2003",
        "Measles": "75",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2002",
        "Measles": "926",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2000",
        "Measles": "20",
        "Life.expectancy": "69.6",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2015",
        "Measles": "215",
        "Life.expectancy": "58.2",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2014",
        "Measles": "290",
        "Life.expectancy": "57.8",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2013",
        "Measles": "221",
        "Life.expectancy": "57.3",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2012",
        "Measles": "341",
        "Life.expectancy": "57.2",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2011",
        "Measles": "24",
        "Life.expectancy": "56.8",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2010",
        "Measles": "1719",
        "Life.expectancy": "56.5",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2009",
        "Measles": "2939",
        "Life.expectancy": "56",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2008",
        "Measles": "98",
        "Life.expectancy": "55.5",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2007",
        "Measles": "2",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2006",
        "Measles": "128",
        "Life.expectancy": "54.3",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2005",
        "Measles": "33",
        "Life.expectancy": "53.6",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2004",
        "Measles": "172",
        "Life.expectancy": "52.8",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2003",
        "Measles": "232",
        "Life.expectancy": "52",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2002",
        "Measles": "717",
        "Life.expectancy": "51.2",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2001",
        "Measles": "4464",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2000",
        "Measles": "1578",
        "Life.expectancy": "49.8",
        "Status": "Developing"
      },
      {
        "Country": "Malta",
        "Year": "2015",
        "Measles": "2",
        "Life.expectancy": "81.7",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "81.4",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2011",
        "Measles": "3",
        "Life.expectancy": "87",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2009",
        "Measles": "1",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2008",
        "Measles": "1",
        "Life.expectancy": "80",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2007",
        "Measles": "2",
        "Life.expectancy": "79.6",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2006",
        "Measles": "1",
        "Life.expectancy": "79.3",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2005",
        "Measles": "6",
        "Life.expectancy": "79",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2004",
        "Measles": "4",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2003",
        "Measles": "4",
        "Life.expectancy": "78.5",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2002",
        "Measles": "7",
        "Life.expectancy": "78.2",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2001",
        "Measles": "2",
        "Life.expectancy": "77.8",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2000",
        "Measles": "2",
        "Life.expectancy": "77.5",
        "Status": "Developed"
      },
      {
        "Country": "Marshall Islands",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "0",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2015",
        "Measles": "1",
        "Life.expectancy": "63.1",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2014",
        "Measles": "14",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2013",
        "Measles": "62",
        "Life.expectancy": "62.7",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2012",
        "Measles": "35",
        "Life.expectancy": "62.5",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2011",
        "Measles": "234",
        "Life.expectancy": "62.2",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2010",
        "Measles": "1292",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2009",
        "Measles": "322",
        "Life.expectancy": "61.7",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2008",
        "Measles": "4",
        "Life.expectancy": "61.4",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2007",
        "Measles": "11",
        "Life.expectancy": "61.2",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2006",
        "Measles": "22",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2005",
        "Measles": "127",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2004",
        "Measles": "5039",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2003",
        "Measles": "3611",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2002",
        "Measles": "883",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2001",
        "Measles": "1398",
        "Life.expectancy": "61",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "60",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2011",
        "Measles": "2",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2010",
        "Measles": "12",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2009",
        "Measles": "15",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2008",
        "Measles": "12",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2007",
        "Measles": "13",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2006",
        "Measles": "3",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2005",
        "Measles": "7",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2004",
        "Measles": "28",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2003",
        "Measles": "777",
        "Life.expectancy": "71.5",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "71.5",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "71.5",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "76.7",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2014",
        "Measles": "3",
        "Life.expectancy": "76.6",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "76.6",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "76.3",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2011",
        "Measles": "3",
        "Life.expectancy": "76.1",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "75.7",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2006",
        "Measles": "23",
        "Life.expectancy": "75.8",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2005",
        "Measles": "6",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2004",
        "Measles": "64",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2003",
        "Measles": "44",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2001",
        "Measles": "3",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2000",
        "Measles": "30",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2014",
        "Measles": "140",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "69.2",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "68.9",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "68.7",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "68.4",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "68.2",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "67.9",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "66.2",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "67.2",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Monaco",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "0",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2015",
        "Measles": "20359",
        "Life.expectancy": "68.8",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "68.4",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "68.1",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "67.8",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2010",
        "Measles": "7",
        "Life.expectancy": "66.3",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2009",
        "Measles": "8",
        "Life.expectancy": "66.9",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2008",
        "Measles": "31",
        "Life.expectancy": "67.4",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2007",
        "Measles": "12",
        "Life.expectancy": "65.9",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2006",
        "Measles": "26",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "64.5",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2003",
        "Measles": "18",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2002",
        "Measles": "1205",
        "Life.expectancy": "63.8",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2001",
        "Measles": "10677",
        "Life.expectancy": "63.2",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2000",
        "Measles": "925",
        "Life.expectancy": "62.8",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "76.1",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "75.9",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "75.8",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2011",
        "Measles": "5",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2010",
        "Measles": "5",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2015",
        "Measles": "17",
        "Life.expectancy": "74.3",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2014",
        "Measles": "10",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2013",
        "Measles": "92",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2012",
        "Measles": "668",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2011",
        "Measles": "982",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2010",
        "Measles": "633",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2009",
        "Measles": "834",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2008",
        "Measles": "1455",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2007",
        "Measles": "2248",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2006",
        "Measles": "1217",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2004",
        "Measles": "6399",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2003",
        "Measles": "10841",
        "Life.expectancy": "69.9",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2002",
        "Measles": "6000",
        "Life.expectancy": "69.5",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2001",
        "Measles": "2724",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2000",
        "Measles": "7368",
        "Life.expectancy": "68.6",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2015",
        "Measles": "79",
        "Life.expectancy": "57.6",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2014",
        "Measles": "9",
        "Life.expectancy": "56.7",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2013",
        "Measles": "8",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2012",
        "Measles": "145",
        "Life.expectancy": "54.8",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2011",
        "Measles": "177",
        "Life.expectancy": "54.3",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2010",
        "Measles": "2321",
        "Life.expectancy": "54",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2009",
        "Measles": "60",
        "Life.expectancy": "53.8",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2008",
        "Measles": "4",
        "Life.expectancy": "53.2",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2007",
        "Measles": "267",
        "Life.expectancy": "52.1",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2006",
        "Measles": "183",
        "Life.expectancy": "51.2",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2005",
        "Measles": "12598",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2004",
        "Measles": "9396",
        "Life.expectancy": "54",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2003",
        "Measles": "28898",
        "Life.expectancy": "51",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2002",
        "Measles": "7155",
        "Life.expectancy": "49.8",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2001",
        "Measles": "7085",
        "Life.expectancy": "49.5",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2000",
        "Measles": "7375",
        "Life.expectancy": "49",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2015",
        "Measles": "6",
        "Life.expectancy": "66.6",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2014",
        "Measles": "122",
        "Life.expectancy": "66.4",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2013",
        "Measles": "1010",
        "Life.expectancy": "66.2",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2012",
        "Measles": "2175",
        "Life.expectancy": "65.9",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2011",
        "Measles": "2046",
        "Life.expectancy": "65.6",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2010",
        "Measles": "190",
        "Life.expectancy": "65.4",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2009",
        "Measles": "329",
        "Life.expectancy": "65.2",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2008",
        "Measles": "333",
        "Life.expectancy": "59.2",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2007",
        "Measles": "1088",
        "Life.expectancy": "64.5",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2006",
        "Measles": "760",
        "Life.expectancy": "64.2",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2005",
        "Measles": "314",
        "Life.expectancy": "63.9",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2004",
        "Measles": "1329",
        "Life.expectancy": "63.5",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2003",
        "Measles": "830",
        "Life.expectancy": "63.2",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2002",
        "Measles": "736",
        "Life.expectancy": "62.8",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2001",
        "Measles": "2519",
        "Life.expectancy": "62.5",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2000",
        "Measles": "845",
        "Life.expectancy": "62.1",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2015",
        "Measles": "212",
        "Life.expectancy": "65.8",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2014",
        "Measles": "477",
        "Life.expectancy": "65.9",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2013",
        "Measles": "1028",
        "Life.expectancy": "66.1",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2012",
        "Measles": "86",
        "Life.expectancy": "65.8",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2011",
        "Measles": "79",
        "Life.expectancy": "64.3",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2010",
        "Measles": "3138",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2009",
        "Measles": "4076",
        "Life.expectancy": "62.4",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "61.7",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2007",
        "Measles": "21",
        "Life.expectancy": "60",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2006",
        "Measles": "3",
        "Life.expectancy": "57",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2005",
        "Measles": "4",
        "Life.expectancy": "55.1",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2004",
        "Measles": "4",
        "Life.expectancy": "54.7",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2003",
        "Measles": "262",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2002",
        "Measles": "1278",
        "Life.expectancy": "55.7",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2001",
        "Measles": "416",
        "Life.expectancy": "56.5",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2000",
        "Measles": "469",
        "Life.expectancy": "57.4",
        "Status": "Developing"
      },
      {
        "Country": "Nauru",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "0",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2015",
        "Measles": "1599",
        "Life.expectancy": "69.2",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2014",
        "Measles": "1279",
        "Life.expectancy": "69.6",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2013",
        "Measles": "1861",
        "Life.expectancy": "69.3",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2012",
        "Measles": "3362",
        "Life.expectancy": "68.9",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2011",
        "Measles": "2359",
        "Life.expectancy": "68.4",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2010",
        "Measles": "190",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2009",
        "Measles": "189",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2008",
        "Measles": "2089",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2007",
        "Measles": "1415",
        "Life.expectancy": "66.6",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2006",
        "Measles": "2838",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2005",
        "Measles": "5023",
        "Life.expectancy": "65.4",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2004",
        "Measles": "12074",
        "Life.expectancy": "64.7",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2003",
        "Measles": "13344",
        "Life.expectancy": "64.3",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2002",
        "Measles": "6749",
        "Life.expectancy": "63.1",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2001",
        "Measles": "10849",
        "Life.expectancy": "63.2",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2000",
        "Measles": "9397",
        "Life.expectancy": "62.5",
        "Status": "Developing"
      },
      {
        "Country": "Netherlands",
        "Year": "2015",
        "Measles": "7",
        "Life.expectancy": "81.9",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2014",
        "Measles": "140",
        "Life.expectancy": "81.7",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2013",
        "Measles": "2632",
        "Life.expectancy": "81.4",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2012",
        "Measles": "10",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2011",
        "Measles": "51",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2010",
        "Measles": "15",
        "Life.expectancy": "88",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2009",
        "Measles": "15",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2008",
        "Measles": "109",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2007",
        "Measles": "10",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2006",
        "Measles": "1",
        "Life.expectancy": "79.8",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2005",
        "Measles": "4",
        "Life.expectancy": "79.4",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2004",
        "Measles": "11",
        "Life.expectancy": "79.2",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2003",
        "Measles": "4",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2002",
        "Measles": "3",
        "Life.expectancy": "78.4",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "78.3",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2000",
        "Measles": "1019",
        "Life.expectancy": "78.1",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2015",
        "Measles": "10",
        "Life.expectancy": "81.6",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2014",
        "Measles": "280",
        "Life.expectancy": "81.5",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2013",
        "Measles": "8",
        "Life.expectancy": "81.3",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2012",
        "Measles": "68",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2011",
        "Measles": "597",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2010",
        "Measles": "43",
        "Life.expectancy": "89",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2009",
        "Measles": "198",
        "Life.expectancy": "85",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2007",
        "Measles": "25",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2006",
        "Measles": "20",
        "Life.expectancy": "79.9",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2005",
        "Measles": "20",
        "Life.expectancy": "79.9",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2004",
        "Measles": "33",
        "Life.expectancy": "79.2",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2003",
        "Measles": "66",
        "Life.expectancy": "79.1",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2002",
        "Measles": "21",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2001",
        "Measles": "65",
        "Life.expectancy": "78.5",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2000",
        "Measles": "65",
        "Life.expectancy": "78.6",
        "Status": "Developed"
      },
      {
        "Country": "Nicaragua",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2015",
        "Measles": "7693",
        "Life.expectancy": "61.8",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2014",
        "Measles": "1142",
        "Life.expectancy": "61.4",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2013",
        "Measles": "1224",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2012",
        "Measles": "272",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2011",
        "Measles": "771",
        "Life.expectancy": "59.4",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2010",
        "Measles": "372",
        "Life.expectancy": "58.2",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2009",
        "Measles": "801",
        "Life.expectancy": "57.1",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2008",
        "Measles": "1317",
        "Life.expectancy": "56",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2007",
        "Measles": "282",
        "Life.expectancy": "55.2",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2006",
        "Measles": "59",
        "Life.expectancy": "54.5",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2005",
        "Measles": "2183",
        "Life.expectancy": "53.7",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2004",
        "Measles": "63057",
        "Life.expectancy": "52.9",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2003",
        "Measles": "54190",
        "Life.expectancy": "52.1",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2002",
        "Measles": "31584",
        "Life.expectancy": "51.4",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2001",
        "Measles": "61208",
        "Life.expectancy": "56",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2000",
        "Measles": "21319",
        "Life.expectancy": "50",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2015",
        "Measles": "12423",
        "Life.expectancy": "54.5",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2014",
        "Measles": "6855",
        "Life.expectancy": "53.6",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2013",
        "Measles": "52852",
        "Life.expectancy": "53.2",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2012",
        "Measles": "6447",
        "Life.expectancy": "52.7",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2011",
        "Measles": "18843",
        "Life.expectancy": "52.3",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2010",
        "Measles": "8491",
        "Life.expectancy": "52",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2009",
        "Measles": "1272",
        "Life.expectancy": "51.6",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2008",
        "Measles": "9960",
        "Life.expectancy": "59",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2007",
        "Measles": "2613",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2006",
        "Measles": "704",
        "Life.expectancy": "49.8",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2005",
        "Measles": "110927",
        "Life.expectancy": "49.2",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2004",
        "Measles": "31521",
        "Life.expectancy": "48.5",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2003",
        "Measles": "141258",
        "Life.expectancy": "48.1",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2002",
        "Measles": "42007",
        "Life.expectancy": "47.7",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2001",
        "Measles": "168107",
        "Life.expectancy": "47.4",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2000",
        "Measles": "212183",
        "Life.expectancy": "47.1",
        "Status": "Developing"
      },
      {
        "Country": "Niue",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "0",
        "Status": "Developing"
      },
      {
        "Country": "Norway",
        "Year": "2015",
        "Measles": "14",
        "Life.expectancy": "81.8",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2014",
        "Measles": "3",
        "Life.expectancy": "81.6",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2013",
        "Measles": "8",
        "Life.expectancy": "81.5",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2012",
        "Measles": "4",
        "Life.expectancy": "81.3",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2011",
        "Measles": "39",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2010",
        "Measles": "3",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2009",
        "Measles": "2",
        "Life.expectancy": "89",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2008",
        "Measles": "4",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "85",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "84",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2004",
        "Measles": "7",
        "Life.expectancy": "79.8",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2003",
        "Measles": "8",
        "Life.expectancy": "79.4",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2002",
        "Measles": "5",
        "Life.expectancy": "78.9",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2001",
        "Measles": "4",
        "Life.expectancy": "78.8",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "78.5",
        "Status": "Developed"
      },
      {
        "Country": "Oman",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "76.6",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "76.4",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2012",
        "Measles": "13",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2011",
        "Measles": "5",
        "Life.expectancy": "75.8",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2010",
        "Measles": "3",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2009",
        "Measles": "19",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2008",
        "Measles": "18",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2007",
        "Measles": "24",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2006",
        "Measles": "13",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2005",
        "Measles": "25",
        "Life.expectancy": "74.3",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2004",
        "Measles": "18",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2003",
        "Measles": "1",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2002",
        "Measles": "5",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2001",
        "Measles": "15",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2000",
        "Measles": "15",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2015",
        "Measles": "386",
        "Life.expectancy": "66.4",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2014",
        "Measles": "1370",
        "Life.expectancy": "66.2",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2013",
        "Measles": "8749",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2012",
        "Measles": "8046",
        "Life.expectancy": "65.7",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2011",
        "Measles": "4386",
        "Life.expectancy": "65.5",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2010",
        "Measles": "4321",
        "Life.expectancy": "65.1",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2009",
        "Measles": "863",
        "Life.expectancy": "64.8",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2008",
        "Measles": "1129",
        "Life.expectancy": "64.6",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2007",
        "Measles": "2801",
        "Life.expectancy": "64.4",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2006",
        "Measles": "7641",
        "Life.expectancy": "64.2",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2005",
        "Measles": "2981",
        "Life.expectancy": "62.9",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2004",
        "Measles": "4248",
        "Life.expectancy": "63.7",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2003",
        "Measles": "4740",
        "Life.expectancy": "63.5",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2002",
        "Measles": "3903",
        "Life.expectancy": "63.2",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2001",
        "Measles": "3849",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2000",
        "Measles": "2064",
        "Life.expectancy": "62.8",
        "Status": "Developing"
      },
      {
        "Country": "Palau",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "0",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "77.8",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "77.6",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "77.5",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "77.2",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2011",
        "Measles": "4",
        "Life.expectancy": "77.3",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "76.5",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "76.8",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "76.5",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "76.4",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "75.8",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "75.8",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "75.7",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "75.7",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2015",
        "Measles": "38",
        "Life.expectancy": "62.9",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2014",
        "Measles": "2299",
        "Life.expectancy": "62.7",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2013",
        "Measles": "12",
        "Life.expectancy": "62.4",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "62.2",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "61.8",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "61.6",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "61.4",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "61.1",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2006",
        "Measles": "1",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2005",
        "Measles": "1222",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2004",
        "Measles": "1385",
        "Life.expectancy": "59.9",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2003",
        "Measles": "3863",
        "Life.expectancy": "59.6",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2002",
        "Measles": "17620",
        "Life.expectancy": "59.3",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2001",
        "Measles": "4023",
        "Life.expectancy": "59.1",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2000",
        "Measles": "7135",
        "Life.expectancy": "58.9",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "71.5",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2015",
        "Measles": "4",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2008",
        "Measles": "1",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2000",
        "Measles": "1",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2015",
        "Measles": "619",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2014",
        "Measles": "58848",
        "Life.expectancy": "68.4",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2013",
        "Measles": "2920",
        "Life.expectancy": "68.1",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2012",
        "Measles": "1536",
        "Life.expectancy": "68.1",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2011",
        "Measles": "6538",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2010",
        "Measles": "6368",
        "Life.expectancy": "67.9",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2009",
        "Measles": "1469",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2008",
        "Measles": "341",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2007",
        "Measles": "530",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2006",
        "Measles": "9",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2005",
        "Measles": "118",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2004",
        "Measles": "3025",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2003",
        "Measles": "10511",
        "Life.expectancy": "67.2",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2002",
        "Measles": "7003",
        "Life.expectancy": "66.8",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2001",
        "Measles": "7360",
        "Life.expectancy": "66.8",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2000",
        "Measles": "7120",
        "Life.expectancy": "66.8",
        "Status": "Developing"
      },
      {
        "Country": "Poland",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "77.5",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "77.3",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2013",
        "Measles": "84",
        "Life.expectancy": "77.1",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2012",
        "Measles": "71",
        "Life.expectancy": "76.8",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "76.7",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2010",
        "Measles": "13",
        "Life.expectancy": "76.3",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2009",
        "Measles": "115",
        "Life.expectancy": "75.7",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "75.5",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2007",
        "Measles": "40",
        "Life.expectancy": "75.3",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2006",
        "Measles": "120",
        "Life.expectancy": "75.2",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2005",
        "Measles": "13",
        "Life.expectancy": "75",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2004",
        "Measles": "11",
        "Life.expectancy": "74.9",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2003",
        "Measles": "48",
        "Life.expectancy": "74.7",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2002",
        "Measles": "34",
        "Life.expectancy": "74.5",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2001",
        "Measles": "133",
        "Life.expectancy": "74.2",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2000",
        "Measles": "77",
        "Life.expectancy": "73.7",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2015",
        "Measles": "8",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "89",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2013",
        "Measles": "1",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2012",
        "Measles": "23",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2011",
        "Measles": "2",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2010",
        "Measles": "5",
        "Life.expectancy": "79.6",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2009",
        "Measles": "3",
        "Life.expectancy": "79.3",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2008",
        "Measles": "1",
        "Life.expectancy": "79",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "78.5",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2005",
        "Measles": "7",
        "Life.expectancy": "77.7",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2004",
        "Measles": "5",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2003",
        "Measles": "8",
        "Life.expectancy": "77.3",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2002",
        "Measles": "8",
        "Life.expectancy": "77.2",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "76.9",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2000",
        "Measles": "45",
        "Life.expectancy": "76.6",
        "Status": "Developed"
      },
      {
        "Country": "Qatar",
        "Year": "2015",
        "Measles": "18",
        "Life.expectancy": "78.2",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2014",
        "Measles": "46",
        "Life.expectancy": "78.1",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2013",
        "Measles": "73",
        "Life.expectancy": "77.9",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2012",
        "Measles": "160",
        "Life.expectancy": "77.8",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2011",
        "Measles": "101",
        "Life.expectancy": "77.5",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2010",
        "Measles": "295",
        "Life.expectancy": "77.3",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2009",
        "Measles": "112",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "76.8",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2007",
        "Measles": "361",
        "Life.expectancy": "76.7",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2006",
        "Measles": "144",
        "Life.expectancy": "76.6",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2005",
        "Measles": "74",
        "Life.expectancy": "76.6",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2004",
        "Measles": "29",
        "Life.expectancy": "76.6",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2003",
        "Measles": "24",
        "Life.expectancy": "76.5",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2002",
        "Measles": "34",
        "Life.expectancy": "76.4",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2001",
        "Measles": "23",
        "Life.expectancy": "76.3",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2000",
        "Measles": "46",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2015",
        "Measles": "7",
        "Life.expectancy": "82.3",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2014",
        "Measles": "442",
        "Life.expectancy": "82",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2013",
        "Measles": "107",
        "Life.expectancy": "81.7",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2012",
        "Measles": "2",
        "Life.expectancy": "81.2",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2011",
        "Measles": "42",
        "Life.expectancy": "81.1",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2010",
        "Measles": "114",
        "Life.expectancy": "87",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2009",
        "Measles": "17",
        "Life.expectancy": "86",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2008",
        "Measles": "2",
        "Life.expectancy": "83",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2007",
        "Measles": "194",
        "Life.expectancy": "79.8",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2006",
        "Measles": "28",
        "Life.expectancy": "79.4",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2005",
        "Measles": "7",
        "Life.expectancy": "78.7",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2004",
        "Measles": "11",
        "Life.expectancy": "78.2",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2003",
        "Measles": "33",
        "Life.expectancy": "77.6",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2002",
        "Measles": "62",
        "Life.expectancy": "77.1",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2001",
        "Measles": "23060",
        "Life.expectancy": "76.7",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2000",
        "Measles": "32647",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2014",
        "Measles": "2",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2013",
        "Measles": "27",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2012",
        "Measles": "11",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "68.8",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "68.9",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2007",
        "Measles": "10",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2006",
        "Measles": "34",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2005",
        "Measles": "6",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2004",
        "Measles": "4",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2003",
        "Measles": "87",
        "Life.expectancy": "67.6",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2002",
        "Measles": "4929",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2001",
        "Measles": "457",
        "Life.expectancy": "67.6",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2000",
        "Measles": "687",
        "Life.expectancy": "67.1",
        "Status": "Developing"
      },
      {
        "Country": "Romania",
        "Year": "2015",
        "Measles": "4",
        "Life.expectancy": "75",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2014",
        "Measles": "59",
        "Life.expectancy": "74.8",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2013",
        "Measles": "1159",
        "Life.expectancy": "74.6",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2012",
        "Measles": "7450",
        "Life.expectancy": "74.4",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2011",
        "Measles": "4189",
        "Life.expectancy": "74.3",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2010",
        "Measles": "193",
        "Life.expectancy": "73.4",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2009",
        "Measles": "8",
        "Life.expectancy": "73.1",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2008",
        "Measles": "12",
        "Life.expectancy": "73.1",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2007",
        "Measles": "353",
        "Life.expectancy": "72.9",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2006",
        "Measles": "3196",
        "Life.expectancy": "72.5",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2005",
        "Measles": "5043",
        "Life.expectancy": "71.9",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2004",
        "Measles": "117",
        "Life.expectancy": "71.7",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2003",
        "Measles": "9",
        "Life.expectancy": "71.1",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2002",
        "Measles": "14",
        "Life.expectancy": "77",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2001",
        "Measles": "10",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2000",
        "Measles": "35",
        "Life.expectancy": "77",
        "Status": "Developed"
      },
      {
        "Country": "Russian Federation",
        "Year": "2015",
        "Measles": "843",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2014",
        "Measles": "4711",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2013",
        "Measles": "2339",
        "Life.expectancy": "70",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2012",
        "Measles": "2123",
        "Life.expectancy": "69.6",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2011",
        "Measles": "629",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2010",
        "Measles": "129",
        "Life.expectancy": "68.4",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2009",
        "Measles": "101",
        "Life.expectancy": "68.2",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2008",
        "Measles": "27",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2007",
        "Measles": "173",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2006",
        "Measles": "1147",
        "Life.expectancy": "66.4",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2005",
        "Measles": "454",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2004",
        "Measles": "2444",
        "Life.expectancy": "64.9",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2003",
        "Measles": "3291",
        "Life.expectancy": "64.6",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2002",
        "Measles": "580",
        "Life.expectancy": "64.8",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2001",
        "Measles": "2072",
        "Life.expectancy": "65.1",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2000",
        "Measles": "4800",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2015",
        "Measles": "1",
        "Life.expectancy": "66.1",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2014",
        "Measles": "10",
        "Life.expectancy": "65.7",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2013",
        "Measles": "17",
        "Life.expectancy": "65.2",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2012",
        "Measles": "75",
        "Life.expectancy": "64.6",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2011",
        "Measles": "31",
        "Life.expectancy": "63.8",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2010",
        "Measles": "121",
        "Life.expectancy": "62.8",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2009",
        "Measles": "5",
        "Life.expectancy": "61",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2008",
        "Measles": "6",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2007",
        "Measles": "26",
        "Life.expectancy": "59.6",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2006",
        "Measles": "494",
        "Life.expectancy": "57.6",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2005",
        "Measles": "129",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2004",
        "Measles": "386",
        "Life.expectancy": "53.4",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2003",
        "Measles": "1064",
        "Life.expectancy": "52",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2002",
        "Measles": "2738",
        "Life.expectancy": "57",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2001",
        "Measles": "896",
        "Life.expectancy": "48.6",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2000",
        "Measles": "2095",
        "Life.expectancy": "48.3",
        "Status": "Developing"
      },
      {
        "Country": "Saint Kitts and Nevis",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "0",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "74.3",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "71.6",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2012",
        "Measles": "1",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2010",
        "Measles": "8",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "71.6",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "San Marino",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "0",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "67.1",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "66.9",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "66.6",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "66.2",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "65.8",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "65.4",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "65.1",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "64.7",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "64.3",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "63.8",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "63.4",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "63.1",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "62.8",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "62.6",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2015",
        "Measles": "219",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2014",
        "Measles": "154",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2013",
        "Measles": "1164",
        "Life.expectancy": "74.3",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2012",
        "Measles": "294",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2011",
        "Measles": "362",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2010",
        "Measles": "334",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2009",
        "Measles": "82",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2008",
        "Measles": "158",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2007",
        "Measles": "4648",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2006",
        "Measles": "807",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2005",
        "Measles": "373",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2004",
        "Measles": "1880",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2003",
        "Measles": "1208",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2002",
        "Measles": "311",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2001",
        "Measles": "155",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2015",
        "Measles": "58",
        "Life.expectancy": "66.7",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2014",
        "Measles": "32",
        "Life.expectancy": "66.4",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2013",
        "Measles": "17",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2012",
        "Measles": "46",
        "Life.expectancy": "65.6",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2011",
        "Measles": "18",
        "Life.expectancy": "64.9",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2010",
        "Measles": "428",
        "Life.expectancy": "64.3",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2009",
        "Measles": "999",
        "Life.expectancy": "63.5",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2008",
        "Measles": "6",
        "Life.expectancy": "62.8",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2007",
        "Measles": "11",
        "Life.expectancy": "62.1",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2006",
        "Measles": "3",
        "Life.expectancy": "61.3",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2004",
        "Measles": "31",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2003",
        "Measles": "1519",
        "Life.expectancy": "59",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2002",
        "Measles": "18184",
        "Life.expectancy": "58.4",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2001",
        "Measles": "24789",
        "Life.expectancy": "57.9",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2000",
        "Measles": "5839",
        "Life.expectancy": "57.5",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2015",
        "Measles": "383",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2014",
        "Measles": "37",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2013",
        "Measles": "1",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2011",
        "Measles": "370",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2010",
        "Measles": "20",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2009",
        "Measles": "1",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2008",
        "Measles": "2",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2007",
        "Measles": "201",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2006",
        "Measles": "2",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2005",
        "Measles": "2",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2004",
        "Measles": "11",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2003",
        "Measles": "15",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2002",
        "Measles": "63",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2001",
        "Measles": "35",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2000",
        "Measles": "38",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2007",
        "Measles": "1",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2006",
        "Measles": "10",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2015",
        "Measles": "607",
        "Life.expectancy": "51",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2014",
        "Measles": "1006",
        "Life.expectancy": "48.1",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2013",
        "Measles": "15",
        "Life.expectancy": "54",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2012",
        "Measles": "678",
        "Life.expectancy": "49.7",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2011",
        "Measles": "1865",
        "Life.expectancy": "48.9",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2010",
        "Measles": "1089",
        "Life.expectancy": "48.1",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2009",
        "Measles": "31",
        "Life.expectancy": "47.1",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2008",
        "Measles": "44",
        "Life.expectancy": "46.2",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "45.3",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2006",
        "Measles": "33",
        "Life.expectancy": "44.3",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2005",
        "Measles": "29",
        "Life.expectancy": "43.3",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2004",
        "Measles": "7",
        "Life.expectancy": "42.3",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2003",
        "Measles": "586",
        "Life.expectancy": "41.5",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2002",
        "Measles": "568",
        "Life.expectancy": "48",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2001",
        "Measles": "649",
        "Life.expectancy": "41",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2000",
        "Measles": "3575",
        "Life.expectancy": "39",
        "Status": "Developing"
      },
      {
        "Country": "Singapore",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "83.1",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "82.9",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2013",
        "Measles": "138",
        "Life.expectancy": "82.7",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2012",
        "Measles": "42",
        "Life.expectancy": "82.5",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2011",
        "Measles": "148",
        "Life.expectancy": "82.2",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2010",
        "Measles": "50",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2009",
        "Measles": "16",
        "Life.expectancy": "81.7",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2008",
        "Measles": "18",
        "Life.expectancy": "81.4",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2007",
        "Measles": "15",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2006",
        "Measles": "23",
        "Life.expectancy": "87",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2005",
        "Measles": "33",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2004",
        "Measles": "96",
        "Life.expectancy": "79.7",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2003",
        "Measles": "33",
        "Life.expectancy": "79.3",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2002",
        "Measles": "211",
        "Life.expectancy": "79",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2001",
        "Measles": "408",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2000",
        "Measles": "141",
        "Life.expectancy": "78.3",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2015",
        "Measles": "1",
        "Life.expectancy": "76.7",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "76.4",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "76.1",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "75.8",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "75.6",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "75.1",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "75",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "74.7",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "74.4",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "74.3",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "74",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2004",
        "Measles": "2",
        "Life.expectancy": "74.1",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2003",
        "Measles": "1",
        "Life.expectancy": "73.8",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "73.7",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "73.3",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "73",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2015",
        "Measles": "18",
        "Life.expectancy": "88",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2014",
        "Measles": "52",
        "Life.expectancy": "87",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2013",
        "Measles": "1",
        "Life.expectancy": "85",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2012",
        "Measles": "2",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2011",
        "Measles": "22",
        "Life.expectancy": "79.8",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2010",
        "Measles": "2",
        "Life.expectancy": "79.5",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "79.1",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "78.9",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "78.3",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "78.1",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "77.5",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "77.2",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "76.5",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "76.6",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "76.2",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "76",
        "Status": "Developed"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "69.2",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "68.8",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "68.8",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "68.7",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "68.1",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "67.6",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "67.6",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "67.4",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "67.1",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "66.8",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "66.5",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "66.2",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "65.8",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2015",
        "Measles": "7497",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2014",
        "Measles": "10229",
        "Life.expectancy": "54.3",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2013",
        "Measles": "3173",
        "Life.expectancy": "54.2",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2012",
        "Measles": "9983",
        "Life.expectancy": "53.1",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2011",
        "Measles": "17298",
        "Life.expectancy": "53.1",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2010",
        "Measles": "115",
        "Life.expectancy": "52.4",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2009",
        "Measles": "13",
        "Life.expectancy": "52.2",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2008",
        "Measles": "1081",
        "Life.expectancy": "51.9",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2007",
        "Measles": "1149",
        "Life.expectancy": "51.5",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2006",
        "Measles": "7",
        "Life.expectancy": "51.5",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "51.6",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2004",
        "Measles": "12008",
        "Life.expectancy": "51.2",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2003",
        "Measles": "8257",
        "Life.expectancy": "51.1",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2002",
        "Measles": "9559",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2001",
        "Measles": "3571",
        "Life.expectancy": "57",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2000",
        "Measles": "3965",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2015",
        "Measles": "17",
        "Life.expectancy": "62.9",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2014",
        "Measles": "66",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2013",
        "Measles": "25",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2012",
        "Measles": "32",
        "Life.expectancy": "59.2",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2011",
        "Measles": "92",
        "Life.expectancy": "58.9",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2010",
        "Measles": "12499",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2009",
        "Measles": "5857",
        "Life.expectancy": "56.5",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2008",
        "Measles": "39",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2007",
        "Measles": "31",
        "Life.expectancy": "54.5",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2006",
        "Measles": "81",
        "Life.expectancy": "54",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2005",
        "Measles": "615",
        "Life.expectancy": "53.8",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2004",
        "Measles": "830",
        "Life.expectancy": "53.7",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2003",
        "Measles": "244",
        "Life.expectancy": "54",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2002",
        "Measles": "1043",
        "Life.expectancy": "54.9",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2001",
        "Measles": "1166",
        "Life.expectancy": "56",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2000",
        "Measles": "1459",
        "Life.expectancy": "57.3",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2015",
        "Measles": "878",
        "Life.expectancy": "57.3",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2014",
        "Measles": "441",
        "Life.expectancy": "56.6",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2013",
        "Measles": "525",
        "Life.expectancy": "56.4",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2012",
        "Measles": "1952",
        "Life.expectancy": "56",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2011",
        "Measles": "1256",
        "Life.expectancy": "55.4",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "54.3",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "53.6",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "53.1",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "52.5",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "51.9",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "51.4",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "52",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "49.6",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "48.9",
        "Status": "Developing"
      },
      {
        "Country": "Spain",
        "Year": "2015",
        "Measles": "115",
        "Life.expectancy": "82.8",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2014",
        "Measles": "154",
        "Life.expectancy": "82.6",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2013",
        "Measles": "131",
        "Life.expectancy": "82.4",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2012",
        "Measles": "1204",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2011",
        "Measles": "3802",
        "Life.expectancy": "82.1",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2010",
        "Measles": "302",
        "Life.expectancy": "81.9",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2009",
        "Measles": "41",
        "Life.expectancy": "81.6",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2008",
        "Measles": "297",
        "Life.expectancy": "81.3",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2007",
        "Measles": "267",
        "Life.expectancy": "89",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2006",
        "Measles": "362",
        "Life.expectancy": "88",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2005",
        "Measles": "22",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2004",
        "Measles": "26",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2003",
        "Measles": "256",
        "Life.expectancy": "79.4",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2002",
        "Measles": "67",
        "Life.expectancy": "79.5",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "79.4",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2000",
        "Measles": "152",
        "Life.expectancy": "79.1",
        "Status": "Developed"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2015",
        "Measles": "1568",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2014",
        "Measles": "1686",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2013",
        "Measles": "2107",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2012",
        "Measles": "51",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2011",
        "Measles": "60",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2010",
        "Measles": "79",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2009",
        "Measles": "21",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2008",
        "Measles": "33",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2007",
        "Measles": "44",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2005",
        "Measles": "3",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2004",
        "Measles": "35",
        "Life.expectancy": "69.1",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2003",
        "Measles": "65",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2002",
        "Measles": "139",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2001",
        "Measles": "309",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2000",
        "Measles": "16527",
        "Life.expectancy": "71.5",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2015",
        "Measles": "3585",
        "Life.expectancy": "64.1",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2014",
        "Measles": "676",
        "Life.expectancy": "63.8",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2013",
        "Measles": "2813",
        "Life.expectancy": "63.5",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2012",
        "Measles": "8523",
        "Life.expectancy": "63.2",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2011",
        "Measles": "5616",
        "Life.expectancy": "62.7",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2010",
        "Measles": "680",
        "Life.expectancy": "62.5",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2009",
        "Measles": "68",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2008",
        "Measles": "129",
        "Life.expectancy": "61.8",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2007",
        "Measles": "327",
        "Life.expectancy": "61.4",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2006",
        "Measles": "228",
        "Life.expectancy": "61",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2005",
        "Measles": "1374",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2004",
        "Measles": "9562",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2003",
        "Measles": "4381",
        "Life.expectancy": "59.6",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2002",
        "Measles": "4529",
        "Life.expectancy": "59.4",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2001",
        "Measles": "4362",
        "Life.expectancy": "58.9",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2000",
        "Measles": "2875",
        "Life.expectancy": "58.6",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "71.6",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "71.3",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "70",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "69.8",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "69.5",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "69.3",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "68.9",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "67.9",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "67.4",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "58.9",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "58.4",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "57.6",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "56.5",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2010",
        "Measles": "313",
        "Life.expectancy": "53.6",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2009",
        "Measles": "26",
        "Life.expectancy": "52.6",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2008",
        "Measles": "1",
        "Life.expectancy": "51.4",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "50",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "47.8",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "46",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "45.6",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2003",
        "Measles": "350",
        "Life.expectancy": "45.9",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2002",
        "Measles": "37",
        "Life.expectancy": "46.4",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2001",
        "Measles": "49",
        "Life.expectancy": "47.1",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2000",
        "Measles": "10",
        "Life.expectancy": "48.4",
        "Status": "Developing"
      },
      {
        "Country": "Sweden",
        "Year": "2015",
        "Measles": "22",
        "Life.expectancy": "82.4",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2014",
        "Measles": "26",
        "Life.expectancy": "82.3",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2013",
        "Measles": "51",
        "Life.expectancy": "81.9",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2012",
        "Measles": "30",
        "Life.expectancy": "81.7",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2011",
        "Measles": "26",
        "Life.expectancy": "81.7",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2010",
        "Measles": "6",
        "Life.expectancy": "81.5",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2009",
        "Measles": "3",
        "Life.expectancy": "81.4",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2008",
        "Measles": "25",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2007",
        "Measles": "1",
        "Life.expectancy": "89",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2006",
        "Measles": "19",
        "Life.expectancy": "88",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2005",
        "Measles": "13",
        "Life.expectancy": "85",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2004",
        "Measles": "5",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2003",
        "Measles": "3",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2002",
        "Measles": "9",
        "Life.expectancy": "79.9",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2001",
        "Measles": "5",
        "Life.expectancy": "79.8",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2000",
        "Measles": "59",
        "Life.expectancy": "79.6",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2015",
        "Measles": "35",
        "Life.expectancy": "83.4",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2014",
        "Measles": "23",
        "Life.expectancy": "83.2",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2013",
        "Measles": "175",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2012",
        "Measles": "61",
        "Life.expectancy": "82.7",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2011",
        "Measles": "621",
        "Life.expectancy": "82.6",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2010",
        "Measles": "77",
        "Life.expectancy": "82.3",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2009",
        "Measles": "958",
        "Life.expectancy": "82.1",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2008",
        "Measles": "2022",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2007",
        "Measles": "1015",
        "Life.expectancy": "81.7",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "81.5",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2005",
        "Measles": "60",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2004",
        "Measles": "39",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2003",
        "Measles": "574",
        "Life.expectancy": "85",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "84",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2001",
        "Measles": "700",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "79.7",
        "Status": "Developed"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2015",
        "Measles": "45",
        "Life.expectancy": "64.5",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2014",
        "Measles": "594",
        "Life.expectancy": "64.4",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2013",
        "Measles": "740",
        "Life.expectancy": "63.6",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2012",
        "Measles": "13",
        "Life.expectancy": "62.8",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2011",
        "Measles": "13",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2010",
        "Measles": "26",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2009",
        "Measles": "22",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2008",
        "Measles": "19",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2007",
        "Measles": "403",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2006",
        "Measles": "517",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2005",
        "Measles": "375",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2004",
        "Measles": "189",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2003",
        "Measles": "801",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2002",
        "Measles": "538",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2001",
        "Measles": "290",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2000",
        "Measles": "146",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2015",
        "Measles": "3",
        "Life.expectancy": "69.7",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "69.6",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2013",
        "Measles": "1",
        "Life.expectancy": "69.3",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2012",
        "Measles": "16",
        "Life.expectancy": "68.8",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2011",
        "Measles": "1",
        "Life.expectancy": "68.1",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "66.7",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "66.4",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2007",
        "Measles": "2",
        "Life.expectancy": "66.1",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2006",
        "Measles": "3",
        "Life.expectancy": "65.9",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "65.5",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2004",
        "Measles": "4",
        "Life.expectancy": "65.9",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2003",
        "Measles": "2144",
        "Life.expectancy": "65.2",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2002",
        "Measles": "927",
        "Life.expectancy": "64.3",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2001",
        "Measles": "38",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2000",
        "Measles": "192",
        "Life.expectancy": "63.7",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2015",
        "Measles": "154",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2013",
        "Measles": "2641",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2012",
        "Measles": "5197",
        "Life.expectancy": "74.3",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2011",
        "Measles": "3156",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2010",
        "Measles": "2583",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2009",
        "Measles": "6071",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2008",
        "Measles": "7790",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2007",
        "Measles": "3893",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2006",
        "Measles": "3588",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2005",
        "Measles": "3526",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2004",
        "Measles": "4165",
        "Life.expectancy": "71.6",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2003",
        "Measles": "4519",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2002",
        "Measles": "10315",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2001",
        "Measles": "7319",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2000",
        "Measles": "4074",
        "Life.expectancy": "71.1",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2015",
        "Measles": "1",
        "Life.expectancy": "75.7",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2014",
        "Measles": "116",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2013",
        "Measles": "4",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2012",
        "Measles": "7",
        "Life.expectancy": "75.1",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2011",
        "Measles": "701",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2010",
        "Measles": "217",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2009",
        "Measles": "5",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2008",
        "Measles": "27",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2007",
        "Measles": "1",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2006",
        "Measles": "3",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2005",
        "Measles": "5",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2004",
        "Measles": "9",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2003",
        "Measles": "18",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2002",
        "Measles": "19",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2001",
        "Measles": "27",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2000",
        "Measles": "36",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2015",
        "Measles": "43",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2014",
        "Measles": "47",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2013",
        "Measles": "4",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2012",
        "Measles": "16",
        "Life.expectancy": "67.4",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2011",
        "Measles": "763",
        "Life.expectancy": "67.2",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2010",
        "Measles": "50",
        "Life.expectancy": "66.9",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2009",
        "Measles": "10",
        "Life.expectancy": "66.6",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "66.2",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "65.8",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2006",
        "Measles": "90",
        "Life.expectancy": "64.9",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2005",
        "Measles": "203",
        "Life.expectancy": "63.7",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2004",
        "Measles": "41",
        "Life.expectancy": "62.3",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2003",
        "Measles": "94",
        "Life.expectancy": "61",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "59.4",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "58.7",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2015",
        "Measles": "20",
        "Life.expectancy": "59.9",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2014",
        "Measles": "577",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2013",
        "Measles": "564",
        "Life.expectancy": "59.4",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2012",
        "Measles": "238",
        "Life.expectancy": "58.9",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2011",
        "Measles": "187",
        "Life.expectancy": "58.3",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2010",
        "Measles": "120",
        "Life.expectancy": "57.4",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2009",
        "Measles": "425",
        "Life.expectancy": "56.7",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2008",
        "Measles": "187",
        "Life.expectancy": "56.2",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2007",
        "Measles": "8",
        "Life.expectancy": "55.9",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2006",
        "Measles": "26",
        "Life.expectancy": "55.7",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2005",
        "Measles": "38",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2004",
        "Measles": "61",
        "Life.expectancy": "54.9",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2003",
        "Measles": "295",
        "Life.expectancy": "54.7",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2002",
        "Measles": "363",
        "Life.expectancy": "54.7",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2001",
        "Measles": "1833",
        "Life.expectancy": "54.6",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2000",
        "Measles": "3578",
        "Life.expectancy": "54.6",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2001",
        "Measles": "4",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "71.6",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "71.1",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "69.9",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "69.7",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "69.6",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "69.5",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "69.3",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "69.2",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "69.1",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "69.1",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2015",
        "Measles": "16",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2014",
        "Measles": "15",
        "Life.expectancy": "75.1",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2013",
        "Measles": "16",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2012",
        "Measles": "48",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2011",
        "Measles": "11",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2010",
        "Measles": "1",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2009",
        "Measles": "1",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2008",
        "Measles": "2",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2007",
        "Measles": "4",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2006",
        "Measles": "3",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2005",
        "Measles": "15",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2004",
        "Measles": "1",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2003",
        "Measles": "22",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2002",
        "Measles": "98",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2001",
        "Measles": "231",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2000",
        "Measles": "47",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2015",
        "Measles": "342",
        "Life.expectancy": "75.8",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2014",
        "Measles": "565",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2013",
        "Measles": "7405",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2012",
        "Measles": "349",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2011",
        "Measles": "111",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2010",
        "Measles": "7",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2009",
        "Measles": "4",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2007",
        "Measles": "3",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2006",
        "Measles": "34",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2005",
        "Measles": "6200",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2004",
        "Measles": "8927",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2003",
        "Measles": "5844",
        "Life.expectancy": "71.6",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2002",
        "Measles": "7823",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2001",
        "Measles": "30509",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2000",
        "Measles": "16244",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "66.3",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "65.4",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "65.6",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "65.6",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "65.8",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "65.6",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "64.5",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2007",
        "Measles": "59",
        "Life.expectancy": "64.1",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2006",
        "Measles": "48",
        "Life.expectancy": "63.7",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "63.3",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2004",
        "Measles": "1",
        "Life.expectancy": "63.5",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2003",
        "Measles": "1",
        "Life.expectancy": "63.4",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2002",
        "Measles": "11",
        "Life.expectancy": "63.3",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2001",
        "Measles": "9",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2000",
        "Measles": "113",
        "Life.expectancy": "63.8",
        "Status": "Developing"
      },
      {
        "Country": "Tuvalu",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "0",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2015",
        "Measles": "478",
        "Life.expectancy": "62.3",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2014",
        "Measles": "314",
        "Life.expectancy": "61.5",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2013",
        "Measles": "7878",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2012",
        "Measles": "2027",
        "Life.expectancy": "60",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2011",
        "Measles": "3312",
        "Life.expectancy": "59.3",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2010",
        "Measles": "1313",
        "Life.expectancy": "58.4",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2009",
        "Measles": "1601",
        "Life.expectancy": "57.5",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2008",
        "Measles": "1319",
        "Life.expectancy": "56.3",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2007",
        "Measles": "3776",
        "Life.expectancy": "55.5",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2006",
        "Measles": "5736",
        "Life.expectancy": "54.9",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2005",
        "Measles": "22",
        "Life.expectancy": "53.2",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2004",
        "Measles": "141",
        "Life.expectancy": "51.3",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2003",
        "Measles": "29429",
        "Life.expectancy": "51",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2002",
        "Measles": "49871",
        "Life.expectancy": "48.8",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2001",
        "Measles": "48543",
        "Life.expectancy": "47.7",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2000",
        "Measles": "42554",
        "Life.expectancy": "46.6",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2015",
        "Measles": "105",
        "Life.expectancy": "71.3",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2012",
        "Measles": "12746",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2011",
        "Measles": "1333",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2010",
        "Measles": "39",
        "Life.expectancy": "69.8",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "69.2",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2008",
        "Measles": "48",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2007",
        "Measles": "1005",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2006",
        "Measles": "42724",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2005",
        "Measles": "2392",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2004",
        "Measles": "146",
        "Life.expectancy": "67.4",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2003",
        "Measles": "411",
        "Life.expectancy": "67.6",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2002",
        "Measles": "7587",
        "Life.expectancy": "67.6",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2001",
        "Measles": "16970",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2000",
        "Measles": "817",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2015",
        "Measles": "347",
        "Life.expectancy": "77.1",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2014",
        "Measles": "344",
        "Life.expectancy": "76.9",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "76.7",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2012",
        "Measles": "132",
        "Life.expectancy": "76.5",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "76.3",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2010",
        "Measles": "87",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2008",
        "Measles": "55",
        "Life.expectancy": "75.8",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2005",
        "Measles": "29",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2004",
        "Measles": "22",
        "Life.expectancy": "75.1",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2003",
        "Measles": "42",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2002",
        "Measles": "53",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2001",
        "Measles": "30",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2000",
        "Measles": "69",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2015",
        "Measles": "91",
        "Life.expectancy": "81.2",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2014",
        "Measles": "133",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2013",
        "Measles": "1919",
        "Life.expectancy": "87",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2012",
        "Measles": "2092",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2011",
        "Measles": "1112",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2010",
        "Measles": "443",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2009",
        "Measles": "1212",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2008",
        "Measles": "1445",
        "Life.expectancy": "79.6",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2007",
        "Measles": "1022",
        "Life.expectancy": "79.5",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2006",
        "Measles": "764",
        "Life.expectancy": "79.3",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2005",
        "Measles": "79",
        "Life.expectancy": "79",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2004",
        "Measles": "189",
        "Life.expectancy": "78.8",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2003",
        "Measles": "460",
        "Life.expectancy": "78.3",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2002",
        "Measles": "314",
        "Life.expectancy": "78.2",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2001",
        "Measles": "73",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2000",
        "Measles": "104",
        "Life.expectancy": "77.8",
        "Status": "Developed"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2015",
        "Measles": "30",
        "Life.expectancy": "61.8",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2014",
        "Measles": "88",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2013",
        "Measles": "185",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2012",
        "Measles": "1668",
        "Life.expectancy": "58.6",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2011",
        "Measles": "1622",
        "Life.expectancy": "58.3",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2010",
        "Measles": "167",
        "Life.expectancy": "57.5",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2009",
        "Measles": "1574",
        "Life.expectancy": "56.9",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2008",
        "Measles": "3413",
        "Life.expectancy": "56.2",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2007",
        "Measles": "7726",
        "Life.expectancy": "54.5",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2006",
        "Measles": "2362",
        "Life.expectancy": "53.1",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2005",
        "Measles": "23",
        "Life.expectancy": "52.2",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2004",
        "Measles": "1419",
        "Life.expectancy": "51.5",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2003",
        "Measles": "1673",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2002",
        "Measles": "5131",
        "Life.expectancy": "52",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2001",
        "Measles": "11847",
        "Life.expectancy": "49.6",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2000",
        "Measles": "14649",
        "Life.expectancy": "49.2",
        "Status": "Developing"
      },
      {
        "Country": "United States of America",
        "Year": "2015",
        "Measles": "188",
        "Life.expectancy": "79.3",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2014",
        "Measles": "667",
        "Life.expectancy": "79.1",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2013",
        "Measles": "187",
        "Life.expectancy": "78.9",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2012",
        "Measles": "55",
        "Life.expectancy": "78.8",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2011",
        "Measles": "220",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2010",
        "Measles": "63",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2009",
        "Measles": "71",
        "Life.expectancy": "78.5",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2008",
        "Measles": "140",
        "Life.expectancy": "78.2",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2007",
        "Measles": "43",
        "Life.expectancy": "78.1",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2006",
        "Measles": "55",
        "Life.expectancy": "77.8",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2005",
        "Measles": "66",
        "Life.expectancy": "77.5",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2004",
        "Measles": "37",
        "Life.expectancy": "77.5",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2003",
        "Measles": "56",
        "Life.expectancy": "77.2",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2002",
        "Measles": "41",
        "Life.expectancy": "77",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2001",
        "Measles": "116",
        "Life.expectancy": "76.9",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2000",
        "Measles": "85",
        "Life.expectancy": "76.8",
        "Status": "Developed"
      },
      {
        "Country": "Uruguay",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "76.8",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "76.8",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "76.5",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "76.3",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "76.6",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "76.4",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "75.7",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2002",
        "Measles": "0",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2001",
        "Measles": "0",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "75.1",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2015",
        "Measles": "22",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2014",
        "Measles": "8",
        "Life.expectancy": "69.2",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "69.1",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "68.8",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2011",
        "Measles": "476",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2010",
        "Measles": "117",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2008",
        "Measles": "2",
        "Life.expectancy": "67.9",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2007",
        "Measles": "863",
        "Life.expectancy": "67.8",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2006",
        "Measles": "823",
        "Life.expectancy": "67.6",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2005",
        "Measles": "737",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2004",
        "Measles": "75",
        "Life.expectancy": "67.8",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2003",
        "Measles": "85",
        "Life.expectancy": "67.2",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2002",
        "Measles": "25",
        "Life.expectancy": "67.1",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2001",
        "Measles": "22",
        "Life.expectancy": "67.4",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2000",
        "Measles": "80",
        "Life.expectancy": "67.1",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2015",
        "Measles": "39",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2014",
        "Measles": "10",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "71.6",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2007",
        "Measles": "0",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2006",
        "Measles": "0",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2005",
        "Measles": "3",
        "Life.expectancy": "69.9",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "69.6",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2003",
        "Measles": "165",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2002",
        "Measles": "101",
        "Life.expectancy": "69.3",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2001",
        "Measles": "7",
        "Life.expectancy": "69.1",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2000",
        "Measles": "9",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2012",
        "Measles": "1",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2010",
        "Measles": "0",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2009",
        "Measles": "0",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2007",
        "Measles": "32",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2006",
        "Measles": "78",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2005",
        "Measles": "0",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2004",
        "Measles": "0",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2003",
        "Measles": "0",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2002",
        "Measles": "2392",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2001",
        "Measles": "115",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2000",
        "Measles": "22",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2015",
        "Measles": "256",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2014",
        "Measles": "15033",
        "Life.expectancy": "75.9",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2013",
        "Measles": "1123",
        "Life.expectancy": "75.7",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2012",
        "Measles": "578",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2011",
        "Measles": "750",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2010",
        "Measles": "2809",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2009",
        "Measles": "6582",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2008",
        "Measles": "352",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2007",
        "Measles": "17",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2006",
        "Measles": "1978",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2005",
        "Measles": "410",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2004",
        "Measles": "217",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2003",
        "Measles": "2297",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2002",
        "Measles": "6755",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2001",
        "Measles": "12058",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2000",
        "Measles": "16512",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2015",
        "Measles": "468",
        "Life.expectancy": "65.7",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2014",
        "Measles": "815",
        "Life.expectancy": "65.4",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2013",
        "Measles": "400",
        "Life.expectancy": "65.4",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2012",
        "Measles": "2177",
        "Life.expectancy": "64.7",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2011",
        "Measles": "2676",
        "Life.expectancy": "64.6",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2010",
        "Measles": "510",
        "Life.expectancy": "64.4",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2009",
        "Measles": "130",
        "Life.expectancy": "64.1",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2008",
        "Measles": "7",
        "Life.expectancy": "63.8",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2007",
        "Measles": "13",
        "Life.expectancy": "63.4",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2006",
        "Measles": "8079",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2005",
        "Measles": "6285",
        "Life.expectancy": "62.6",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2004",
        "Measles": "12708",
        "Life.expectancy": "62.2",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2003",
        "Measles": "8536",
        "Life.expectancy": "61.9",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2002",
        "Measles": "890",
        "Life.expectancy": "61.5",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2001",
        "Measles": "485",
        "Life.expectancy": "61.1",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2000",
        "Measles": "0",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2015",
        "Measles": "9",
        "Life.expectancy": "61.8",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2014",
        "Measles": "9",
        "Life.expectancy": "61.1",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2013",
        "Measles": "35",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2012",
        "Measles": "896",
        "Life.expectancy": "59.2",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2011",
        "Measles": "13234",
        "Life.expectancy": "58.2",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2010",
        "Measles": "15754",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2009",
        "Measles": "26",
        "Life.expectancy": "57.4",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2008",
        "Measles": "140",
        "Life.expectancy": "55.7",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2007",
        "Measles": "535",
        "Life.expectancy": "52.6",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2006",
        "Measles": "459",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2005",
        "Measles": "45",
        "Life.expectancy": "49.3",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2004",
        "Measles": "35",
        "Life.expectancy": "47.9",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2003",
        "Measles": "881",
        "Life.expectancy": "46.4",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2002",
        "Measles": "25036",
        "Life.expectancy": "45.5",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2001",
        "Measles": "16997",
        "Life.expectancy": "44.6",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2000",
        "Measles": "30930",
        "Life.expectancy": "43.8",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2015",
        "Measles": "0",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2014",
        "Measles": "0",
        "Life.expectancy": "59.2",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2013",
        "Measles": "0",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2012",
        "Measles": "0",
        "Life.expectancy": "56.6",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2011",
        "Measles": "0",
        "Life.expectancy": "54.9",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2010",
        "Measles": "9696",
        "Life.expectancy": "52.4",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2009",
        "Measles": "853",
        "Life.expectancy": "50",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2008",
        "Measles": "0",
        "Life.expectancy": "48.2",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2007",
        "Measles": "242",
        "Life.expectancy": "46.6",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2006",
        "Measles": "212",
        "Life.expectancy": "45.4",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2005",
        "Measles": "420",
        "Life.expectancy": "44.6",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2004",
        "Measles": "31",
        "Life.expectancy": "44.3",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2003",
        "Measles": "998",
        "Life.expectancy": "44.5",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2002",
        "Measles": "304",
        "Life.expectancy": "44.8",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2001",
        "Measles": "529",
        "Life.expectancy": "45.3",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2000",
        "Measles": "1483",
        "Life.expectancy": "46",
        "Status": "Developing"
      }
    

]



 // Process the data
 data.forEach(function(d) {
    d['Measles'] = +d['Measles']; 
    d['Life.expectancy'] = +d['Life.expectancy']; // Convert life expectancy to number
    d.Year = +d.Year; // Convert year to number
});

// Set the ranges
x.domain([0, d3.max(data, function(d) { return d['Measles']; })]);
y.domain([0, d3.max(data, function(d) { return d['Life.expectancy']; })]);

// Add the valueline path
svg.append("path")
    .datum(data)
    .attr("class", "line")
    .attr("d", valueline);

// Add the scatterplot points
svg.selectAll(".dot")
    .data(data)
    .enter().append("circle")
    .attr("class", function(d) { return "dot " + d.Status; })
    .attr("r", 5)
    .attr("cx", function(d) { return x(d['Measles']); })
    .attr("cy", function(d) { return y(d['Life.expectancy']); })
    .on("mouseover", function(event, d) {
        tooltip.transition()
            .duration(200)
            .style("opacity", .9);
        tooltip.html(d.Country + "<br/>" + d.Year + "<br/>Life expectancy: " 
            + d['Life.expectancy'] + "<br/>Measles: " + d['Measles'])
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

// Add graph title
svg.append("text")
    .attr("text-anchor", "middle")
    .attr("x", width / 2)
    .attr("y", -margin.top / 2 + 20)
    .text("Country over 15 years")
    .style("font-family", "Arial, sans-serif")
    .style("font-size", "24px")
    .style("fill", "#4E79A7")
    .style("font-weight", "bold");

// Add Y axis label
svg.append("text")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(0)")
    .attr("y", -margin.left + 200)
    .attr("x", - 50)
    .text("Life Expectancy")
    .style("font-family", "Arial, sans-serif")
    .style("font-size", "18px")
    .style("fill", "#6C757D")
    .style("font-weight", "bold"); // Make the label bold


// Add X axis label
svg.append("text")
    .attr("text-anchor", "end")
    .attr("x", width - margin.right + 200)
    .attr("y", height + margin.bottom - 50)
    .text("Measles")
    .style("font-family", "Arial, sans-serif")
    .style("font-size", "18px")
    .style("fill", "#6C757D")
    .style("font-weight", "bold");