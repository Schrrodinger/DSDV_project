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
    .style("opacity", 5);

// Load the data
var data =
 [

    {
        "Country": "Afghanistan",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "59.9",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "59.9",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "59.5",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "59.2",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "58.8",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "58.6",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "58.1",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "57.5",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "57.3",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "57.3",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "57",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "56.7",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "56.2",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "54.8",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.8",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.5",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.2",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.9",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.6",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.1",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.9",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.1",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.6",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.3",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2015",
        "HIV.AIDS": "1.9",
        "Life.expectancy": "52.4",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2014",
        "HIV.AIDS": "2",
        "Life.expectancy": "51.7",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2013",
        "HIV.AIDS": "2.3",
        "Life.expectancy": "51.1",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2012",
        "HIV.AIDS": "2.6",
        "Life.expectancy": "56",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2011",
        "HIV.AIDS": "2.5",
        "Life.expectancy": "51",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2010",
        "HIV.AIDS": "2.5",
        "Life.expectancy": "49.6",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2009",
        "HIV.AIDS": "2.5",
        "Life.expectancy": "49.1",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2008",
        "HIV.AIDS": "2.6",
        "Life.expectancy": "48.7",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2007",
        "HIV.AIDS": "2.6",
        "Life.expectancy": "48.2",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2006",
        "HIV.AIDS": "2.5",
        "Life.expectancy": "47.7",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2005",
        "HIV.AIDS": "2.6",
        "Life.expectancy": "47.4",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2004",
        "HIV.AIDS": "2.5",
        "Life.expectancy": "47.1",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2003",
        "HIV.AIDS": "2.4",
        "Life.expectancy": "46.8",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2002",
        "HIV.AIDS": "2.3",
        "Life.expectancy": "46.5",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2001",
        "HIV.AIDS": "2.1",
        "Life.expectancy": "45.7",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2000",
        "HIV.AIDS": "2",
        "Life.expectancy": "45.3",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2015",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "76.4",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2014",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2013",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "76.1",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2012",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "75.9",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.7",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.3",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.9",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.7",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Australia",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.8",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.7",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.5",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.3",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.9",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.7",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.3",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.3",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.2",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.9",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.9",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.5",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.5",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.4",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "88",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "88",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "84",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "84",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.8",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.4",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.3",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.8",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.6",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.1",
        "Status": "Developed"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.6",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.1",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.2",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.4",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.4",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.8",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.8",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.6",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.1",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2012",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2010",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2001",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.9",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.8",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.7",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.5",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.1",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.1",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.8",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.9",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.5",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.1",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.6",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.2",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.8",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.8",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.3",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "65.8",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "65.3",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.1",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2004",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2003",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2002",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2001",
        "HIV.AIDS": "0.7",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2000",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "70",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "70",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.8",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.9",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.1",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.2",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.2",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Belgium",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "89",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "87",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "80",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.8",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.5",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.5",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.4",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.9",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.8",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.3",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.6",
        "Status": "Developed"
      },
      {
        "Country": "Belize",
        "Year": "2015",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2014",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "70",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2013",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "69.8",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2011",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2010",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "69.5",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2009",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "69.5",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.6",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2007",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "69.6",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2006",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2005",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2004",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "68.7",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2003",
        "HIV.AIDS": "1.5",
        "Life.expectancy": "68.4",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2001",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "68.2",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2000",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2015",
        "HIV.AIDS": "1",
        "Life.expectancy": "60",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2014",
        "HIV.AIDS": "1.1",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2013",
        "HIV.AIDS": "1.2",
        "Life.expectancy": "59.5",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2012",
        "HIV.AIDS": "1.3",
        "Life.expectancy": "59.3",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2011",
        "HIV.AIDS": "1.4",
        "Life.expectancy": "59.1",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2010",
        "HIV.AIDS": "1.4",
        "Life.expectancy": "58.7",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2009",
        "HIV.AIDS": "1.6",
        "Life.expectancy": "58.4",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2008",
        "HIV.AIDS": "1.8",
        "Life.expectancy": "57.6",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2007",
        "HIV.AIDS": "2",
        "Life.expectancy": "57.1",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2006",
        "HIV.AIDS": "2",
        "Life.expectancy": "56.8",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2005",
        "HIV.AIDS": "2.1",
        "Life.expectancy": "56.5",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2004",
        "HIV.AIDS": "2.1",
        "Life.expectancy": "56.1",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2003",
        "HIV.AIDS": "2.1",
        "Life.expectancy": "55.8",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2002",
        "HIV.AIDS": "2.1",
        "Life.expectancy": "55.6",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2001",
        "HIV.AIDS": "2.1",
        "Life.expectancy": "55.5",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2000",
        "HIV.AIDS": "2",
        "Life.expectancy": "55.4",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2015",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "69.8",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2014",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2013",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "69.1",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2012",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "68.7",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2011",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2010",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "67.9",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2009",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "67.4",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2008",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2007",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "66.5",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2006",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "65.8",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2005",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2004",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "64.2",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2003",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "63.3",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "62.5",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "61.7",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.8",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2011",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "69.3",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2010",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "68.7",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2009",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2008",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "67.4",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2007",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "66.8",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2006",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "66.2",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2005",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "65.7",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2004",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "65.1",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2003",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "64.5",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "63.9",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "63.3",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "62.6",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.4",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.2",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.8",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.9",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.4",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.1",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.7",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2015",
        "HIV.AIDS": "2.2",
        "Life.expectancy": "65.7",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2014",
        "HIV.AIDS": "2.3",
        "Life.expectancy": "65.1",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2013",
        "HIV.AIDS": "2.8",
        "Life.expectancy": "64.2",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2012",
        "HIV.AIDS": "4.4",
        "Life.expectancy": "63.4",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2011",
        "HIV.AIDS": "5.5",
        "Life.expectancy": "62.2",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2010",
        "HIV.AIDS": "6.2",
        "Life.expectancy": "61.1",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2009",
        "HIV.AIDS": "9",
        "Life.expectancy": "59.2",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2008",
        "HIV.AIDS": "12.7",
        "Life.expectancy": "57.5",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2007",
        "HIV.AIDS": "13.4",
        "Life.expectancy": "56.9",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2006",
        "HIV.AIDS": "14.4",
        "Life.expectancy": "54.8",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2005",
        "HIV.AIDS": "20.6",
        "Life.expectancy": "51.7",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2004",
        "HIV.AIDS": "28.4",
        "Life.expectancy": "48.1",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2003",
        "HIV.AIDS": "31.9",
        "Life.expectancy": "46.4",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2002",
        "HIV.AIDS": "34.6",
        "Life.expectancy": "46",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2001",
        "HIV.AIDS": "37.2",
        "Life.expectancy": "46.7",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2000",
        "HIV.AIDS": "38.8",
        "Life.expectancy": "47.8",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.7",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.6",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.1",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.3",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.4",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.9",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.8",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.2",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.3",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.4",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Bulgaria",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.5",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.3",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.1",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.9",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.7",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.4",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.2",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.9",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.6",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.2",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.1",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.2",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.8",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.6",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.1",
        "Status": "Developed"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2015",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "59.9",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2014",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "59.3",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2013",
        "HIV.AIDS": "0.7",
        "Life.expectancy": "59",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2012",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "58.6",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2011",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "58.1",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2010",
        "HIV.AIDS": "1",
        "Life.expectancy": "57.5",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2009",
        "HIV.AIDS": "1.1",
        "Life.expectancy": "56.9",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2008",
        "HIV.AIDS": "1.5",
        "Life.expectancy": "56.1",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2007",
        "HIV.AIDS": "1.7",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2006",
        "HIV.AIDS": "2",
        "Life.expectancy": "54.3",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2005",
        "HIV.AIDS": "2.3",
        "Life.expectancy": "53.3",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2004",
        "HIV.AIDS": "2.5",
        "Life.expectancy": "52.4",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2003",
        "HIV.AIDS": "2.9",
        "Life.expectancy": "51.6",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2002",
        "HIV.AIDS": "3.2",
        "Life.expectancy": "51",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2001",
        "HIV.AIDS": "3.6",
        "Life.expectancy": "56",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2000",
        "HIV.AIDS": "4",
        "Life.expectancy": "51",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2015",
        "HIV.AIDS": "0.7",
        "Life.expectancy": "59.6",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2014",
        "HIV.AIDS": "0.7",
        "Life.expectancy": "59.1",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2013",
        "HIV.AIDS": "1",
        "Life.expectancy": "58.6",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2012",
        "HIV.AIDS": "1.2",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2011",
        "HIV.AIDS": "1.5",
        "Life.expectancy": "57.4",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2010",
        "HIV.AIDS": "1.9",
        "Life.expectancy": "56.8",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2009",
        "HIV.AIDS": "2.4",
        "Life.expectancy": "56.2",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2008",
        "HIV.AIDS": "2.9",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2007",
        "HIV.AIDS": "3.4",
        "Life.expectancy": "54.8",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2006",
        "HIV.AIDS": "3.8",
        "Life.expectancy": "54.1",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2005",
        "HIV.AIDS": "4.3",
        "Life.expectancy": "53.4",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2004",
        "HIV.AIDS": "4.8",
        "Life.expectancy": "52.6",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2003",
        "HIV.AIDS": "5.1",
        "Life.expectancy": "51.9",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2002",
        "HIV.AIDS": "5.2",
        "Life.expectancy": "51.5",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2001",
        "HIV.AIDS": "5.3",
        "Life.expectancy": "51.3",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2000",
        "HIV.AIDS": "5.2",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2015",
        "HIV.AIDS": "1.9",
        "Life.expectancy": "53.3",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2014",
        "HIV.AIDS": "2",
        "Life.expectancy": "52.8",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2013",
        "HIV.AIDS": "2.4",
        "Life.expectancy": "52.3",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2012",
        "HIV.AIDS": "2.9",
        "Life.expectancy": "52",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2011",
        "HIV.AIDS": "3.3",
        "Life.expectancy": "51.7",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2010",
        "HIV.AIDS": "3.3",
        "Life.expectancy": "51.5",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2009",
        "HIV.AIDS": "3.7",
        "Life.expectancy": "51",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2008",
        "HIV.AIDS": "4.1",
        "Life.expectancy": "54",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2007",
        "HIV.AIDS": "5.3",
        "Life.expectancy": "49.9",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2006",
        "HIV.AIDS": "5.8",
        "Life.expectancy": "49.4",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2005",
        "HIV.AIDS": "6.1",
        "Life.expectancy": "48.7",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2004",
        "HIV.AIDS": "6.5",
        "Life.expectancy": "48.2",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2003",
        "HIV.AIDS": "6.7",
        "Life.expectancy": "48",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2002",
        "HIV.AIDS": "6.9",
        "Life.expectancy": "47.7",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2001",
        "HIV.AIDS": "7",
        "Life.expectancy": "47.8",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2000",
        "HIV.AIDS": "7.1",
        "Life.expectancy": "47.9",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2015",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2014",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2013",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2012",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2011",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2010",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2009",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2008",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2007",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2006",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2005",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2004",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2003",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "71.1",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2002",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2001",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2000",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "69.9",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2015",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "68.7",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2014",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2013",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "67.8",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2012",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "67.4",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2011",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2010",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "66.6",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2009",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "66.1",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2008",
        "HIV.AIDS": "0.7",
        "Life.expectancy": "65.6",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2007",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2006",
        "HIV.AIDS": "1.1",
        "Life.expectancy": "64.1",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2005",
        "HIV.AIDS": "1.4",
        "Life.expectancy": "62.9",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2004",
        "HIV.AIDS": "1.7",
        "Life.expectancy": "61.5",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2003",
        "HIV.AIDS": "1.9",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2002",
        "HIV.AIDS": "2.1",
        "Life.expectancy": "59.3",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2001",
        "HIV.AIDS": "2.2",
        "Life.expectancy": "58.5",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2000",
        "HIV.AIDS": "2.1",
        "Life.expectancy": "57.7",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2015",
        "HIV.AIDS": "3.5",
        "Life.expectancy": "57.3",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2014",
        "HIV.AIDS": "3.7",
        "Life.expectancy": "56.7",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2013",
        "HIV.AIDS": "4",
        "Life.expectancy": "56.4",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2012",
        "HIV.AIDS": "4.6",
        "Life.expectancy": "55.9",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2011",
        "HIV.AIDS": "4.9",
        "Life.expectancy": "55.6",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2010",
        "HIV.AIDS": "5.5",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2009",
        "HIV.AIDS": "6.3",
        "Life.expectancy": "54.8",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2008",
        "HIV.AIDS": "6.7",
        "Life.expectancy": "54.2",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2007",
        "HIV.AIDS": "7",
        "Life.expectancy": "53.6",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2006",
        "HIV.AIDS": "7.2",
        "Life.expectancy": "53.3",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2005",
        "HIV.AIDS": "7.4",
        "Life.expectancy": "52.8",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2004",
        "HIV.AIDS": "7.5",
        "Life.expectancy": "52.1",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2003",
        "HIV.AIDS": "7.7",
        "Life.expectancy": "51.8",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2002",
        "HIV.AIDS": "7.8",
        "Life.expectancy": "51.6",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2001",
        "HIV.AIDS": "7.9",
        "Life.expectancy": "51.5",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2000",
        "HIV.AIDS": "7.7",
        "Life.expectancy": "51.4",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.2",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.8",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.6",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.5",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.2",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "87",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "85",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "85",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "80",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.7",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.5",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.4",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.1",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2015",
        "HIV.AIDS": "4.4",
        "Life.expectancy": "52.5",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2014",
        "HIV.AIDS": "4.5",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2013",
        "HIV.AIDS": "5.1",
        "Life.expectancy": "49.9",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2012",
        "HIV.AIDS": "5.1",
        "Life.expectancy": "53",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2011",
        "HIV.AIDS": "5.8",
        "Life.expectancy": "49.8",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2010",
        "HIV.AIDS": "6.6",
        "Life.expectancy": "49.2",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2009",
        "HIV.AIDS": "7.3",
        "Life.expectancy": "48.6",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2008",
        "HIV.AIDS": "8.3",
        "Life.expectancy": "47.6",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2007",
        "HIV.AIDS": "9",
        "Life.expectancy": "46.8",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2006",
        "HIV.AIDS": "10",
        "Life.expectancy": "46.3",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2005",
        "HIV.AIDS": "11.2",
        "Life.expectancy": "45.9",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2004",
        "HIV.AIDS": "12",
        "Life.expectancy": "45.7",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2003",
        "HIV.AIDS": "12.8",
        "Life.expectancy": "45.7",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2002",
        "HIV.AIDS": "13.4",
        "Life.expectancy": "45.6",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2001",
        "HIV.AIDS": "13.9",
        "Life.expectancy": "45.6",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2000",
        "HIV.AIDS": "14.3",
        "Life.expectancy": "46",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2015",
        "HIV.AIDS": "2.8",
        "Life.expectancy": "53.1",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2014",
        "HIV.AIDS": "2.9",
        "Life.expectancy": "52.6",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2013",
        "HIV.AIDS": "3.1",
        "Life.expectancy": "52.2",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2012",
        "HIV.AIDS": "3.6",
        "Life.expectancy": "51.8",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2011",
        "HIV.AIDS": "3.9",
        "Life.expectancy": "51.6",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2010",
        "HIV.AIDS": "4.1",
        "Life.expectancy": "51.2",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2009",
        "HIV.AIDS": "4.4",
        "Life.expectancy": "57",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2008",
        "HIV.AIDS": "4.7",
        "Life.expectancy": "49.6",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2007",
        "HIV.AIDS": "4.9",
        "Life.expectancy": "49.4",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2006",
        "HIV.AIDS": "5.1",
        "Life.expectancy": "48.5",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2005",
        "HIV.AIDS": "5.2",
        "Life.expectancy": "48.6",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2004",
        "HIV.AIDS": "5.2",
        "Life.expectancy": "48.5",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2003",
        "HIV.AIDS": "5.1",
        "Life.expectancy": "48.4",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2002",
        "HIV.AIDS": "5",
        "Life.expectancy": "48.1",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2001",
        "HIV.AIDS": "4.8",
        "Life.expectancy": "48",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2000",
        "HIV.AIDS": "4.6",
        "Life.expectancy": "47.6",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "85",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "83",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.9",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.8",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.1",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.3",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.6",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.9",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.9",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.4",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.9",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.8",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.3",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.3",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.1",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.8",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.3",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.5",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2015",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "63.5",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2014",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "63.2",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2013",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "62.9",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2012",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "62.5",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2011",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "62.2",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "61.8",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "61.3",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "61",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "60",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "59.8",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "59.6",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "59.5",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "59.5",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "59.5",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2015",
        "HIV.AIDS": "2.8",
        "Life.expectancy": "64.7",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2014",
        "HIV.AIDS": "3",
        "Life.expectancy": "64.2",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2013",
        "HIV.AIDS": "3",
        "Life.expectancy": "63.9",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2012",
        "HIV.AIDS": "3.3",
        "Life.expectancy": "63.7",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2011",
        "HIV.AIDS": "3.5",
        "Life.expectancy": "62.9",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2010",
        "HIV.AIDS": "3.8",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2009",
        "HIV.AIDS": "4",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2008",
        "HIV.AIDS": "4.3",
        "Life.expectancy": "59.4",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2007",
        "HIV.AIDS": "5",
        "Life.expectancy": "58.2",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2006",
        "HIV.AIDS": "5.5",
        "Life.expectancy": "56.9",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2005",
        "HIV.AIDS": "5.9",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2004",
        "HIV.AIDS": "6.3",
        "Life.expectancy": "54.1",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2003",
        "HIV.AIDS": "6.8",
        "Life.expectancy": "53.2",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2002",
        "HIV.AIDS": "7.2",
        "Life.expectancy": "52.6",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2001",
        "HIV.AIDS": "7.6",
        "Life.expectancy": "52.7",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2000",
        "HIV.AIDS": "7.8",
        "Life.expectancy": "52.9",
        "Status": "Developing"
      },
      {
        "Country": "Cook Islands",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "0",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.6",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.5",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.4",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.2",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.1",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.2",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.9",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.9",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.6",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.7",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.3",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.5",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.6",
        "Status": "Developing"
      },
      {
        "Country": "Croatia",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.8",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.7",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.1",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.6",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.3",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.8",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.9",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.2",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.4",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.7",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.8",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.9",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.7",
        "Status": "Developed"
      },
      {
        "Country": "Cuba",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.1",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.7",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.7",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.8",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.1",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.9",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.1",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.2",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.3",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.4",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.7",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.7",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.9",
        "Status": "Developing"
      },
      {
        "Country": "Cyprus",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "85",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "80",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.7",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.5",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.3",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.1",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.9",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.8",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.6",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.5",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.4",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.2",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.1",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.8",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.6",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.2",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.8",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.5",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.1",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.8",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.5",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.9",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.8",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.2",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.3",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.1",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.7",
        "Status": "Developed"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.8",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.7",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.6",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.4",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.1",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.6",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.6",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "65.4",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2015",
        "HIV.AIDS": "1.1",
        "Life.expectancy": "59.8",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2014",
        "HIV.AIDS": "1.1",
        "Life.expectancy": "59.3",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2013",
        "HIV.AIDS": "1.2",
        "Life.expectancy": "58.8",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2012",
        "HIV.AIDS": "1.5",
        "Life.expectancy": "58.3",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2011",
        "HIV.AIDS": "1.6",
        "Life.expectancy": "57.9",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2010",
        "HIV.AIDS": "1.6",
        "Life.expectancy": "57.4",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2009",
        "HIV.AIDS": "1.7",
        "Life.expectancy": "56.7",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2008",
        "HIV.AIDS": "1.8",
        "Life.expectancy": "56.3",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2007",
        "HIV.AIDS": "1.9",
        "Life.expectancy": "55.7",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2006",
        "HIV.AIDS": "2",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2005",
        "HIV.AIDS": "2",
        "Life.expectancy": "54.3",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2004",
        "HIV.AIDS": "2.1",
        "Life.expectancy": "53.5",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2003",
        "HIV.AIDS": "2.2",
        "Life.expectancy": "52.8",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2002",
        "HIV.AIDS": "2.4",
        "Life.expectancy": "52.1",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2001",
        "HIV.AIDS": "2.4",
        "Life.expectancy": "51.8",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2000",
        "HIV.AIDS": "2.5",
        "Life.expectancy": "51.3",
        "Status": "Developing"
      },
      {
        "Country": "Denmark",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "84",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "80",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.7",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.2",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.9",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.8",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.4",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.1",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.1",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.7",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.3",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.9",
        "Status": "Developed"
      },
      {
        "Country": "Djibouti",
        "Year": "2015",
        "HIV.AIDS": "2.1",
        "Life.expectancy": "63.5",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2014",
        "HIV.AIDS": "2.1",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2013",
        "HIV.AIDS": "2.1",
        "Life.expectancy": "62.7",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2012",
        "HIV.AIDS": "1.9",
        "Life.expectancy": "62.2",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2011",
        "HIV.AIDS": "2.7",
        "Life.expectancy": "61.8",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2010",
        "HIV.AIDS": "3.1",
        "Life.expectancy": "61.3",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2009",
        "HIV.AIDS": "3.2",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2008",
        "HIV.AIDS": "3.3",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2007",
        "HIV.AIDS": "3.5",
        "Life.expectancy": "59.8",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2006",
        "HIV.AIDS": "3.7",
        "Life.expectancy": "59.1",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2005",
        "HIV.AIDS": "3.9",
        "Life.expectancy": "58.6",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2004",
        "HIV.AIDS": "4",
        "Life.expectancy": "58.1",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2003",
        "HIV.AIDS": "4.2",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2002",
        "HIV.AIDS": "4.3",
        "Life.expectancy": "57.9",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2001",
        "HIV.AIDS": "4.3",
        "Life.expectancy": "57.7",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2000",
        "HIV.AIDS": "4.1",
        "Life.expectancy": "57.4",
        "Status": "Developing"
      },
      {
        "Country": "Dominica",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "0",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2015",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2014",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2013",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2012",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2011",
        "HIV.AIDS": "0.7",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2010",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2009",
        "HIV.AIDS": "1.2",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2008",
        "HIV.AIDS": "1.4",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2007",
        "HIV.AIDS": "1.6",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2006",
        "HIV.AIDS": "1.8",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2005",
        "HIV.AIDS": "2",
        "Life.expectancy": "69.7",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2004",
        "HIV.AIDS": "2.1",
        "Life.expectancy": "69.3",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2003",
        "HIV.AIDS": "2.3",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2002",
        "HIV.AIDS": "2.4",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2001",
        "HIV.AIDS": "2.5",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2000",
        "HIV.AIDS": "2.5",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.1",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2007",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2006",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2005",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2004",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2003",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2002",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2001",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2000",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "70",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.9",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.8",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.7",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.5",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.6",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.7",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.6",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.8",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2015",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2014",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2013",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2012",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2011",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2010",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2009",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2008",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2007",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2006",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2005",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2004",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "70",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2003",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "69.9",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2002",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2001",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "68.9",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2000",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2015",
        "HIV.AIDS": "4.2",
        "Life.expectancy": "58.2",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2014",
        "HIV.AIDS": "4.4",
        "Life.expectancy": "57.9",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2013",
        "HIV.AIDS": "5.7",
        "Life.expectancy": "57.4",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2012",
        "HIV.AIDS": "8.2",
        "Life.expectancy": "56.7",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2011",
        "HIV.AIDS": "7.7",
        "Life.expectancy": "56.2",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2010",
        "HIV.AIDS": "7.2",
        "Life.expectancy": "56.1",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2009",
        "HIV.AIDS": "7.3",
        "Life.expectancy": "55.7",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2008",
        "HIV.AIDS": "6.3",
        "Life.expectancy": "55.4",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2007",
        "HIV.AIDS": "5.9",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2006",
        "HIV.AIDS": "5.3",
        "Life.expectancy": "54.8",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2005",
        "HIV.AIDS": "4.9",
        "Life.expectancy": "54.4",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2004",
        "HIV.AIDS": "4.4",
        "Life.expectancy": "54.1",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2003",
        "HIV.AIDS": "3.6",
        "Life.expectancy": "53.8",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2002",
        "HIV.AIDS": "2.9",
        "Life.expectancy": "53.5",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2001",
        "HIV.AIDS": "2.3",
        "Life.expectancy": "53.1",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2000",
        "HIV.AIDS": "1.9",
        "Life.expectancy": "52.7",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2015",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "64.7",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2014",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "64.4",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2013",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2012",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "63.6",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2011",
        "HIV.AIDS": "0.7",
        "Life.expectancy": "62.9",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2010",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "62.1",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2009",
        "HIV.AIDS": "1",
        "Life.expectancy": "61.4",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2008",
        "HIV.AIDS": "1.1",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2007",
        "HIV.AIDS": "1.3",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2006",
        "HIV.AIDS": "1.4",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2005",
        "HIV.AIDS": "1.6",
        "Life.expectancy": "59.4",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2004",
        "HIV.AIDS": "1.8",
        "Life.expectancy": "59.1",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2003",
        "HIV.AIDS": "1.9",
        "Life.expectancy": "58.8",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2002",
        "HIV.AIDS": "1.9",
        "Life.expectancy": "58.5",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2001",
        "HIV.AIDS": "2",
        "Life.expectancy": "58.1",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2000",
        "HIV.AIDS": "1.9",
        "Life.expectancy": "45.3",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.6",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.3",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.9",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.3",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.1",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2015",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "64.8",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2014",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "64.2",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2013",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "63.7",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2012",
        "HIV.AIDS": "1.2",
        "Life.expectancy": "63.3",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2011",
        "HIV.AIDS": "1.4",
        "Life.expectancy": "62.6",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2010",
        "HIV.AIDS": "1.7",
        "Life.expectancy": "61.8",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2009",
        "HIV.AIDS": "2",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2008",
        "HIV.AIDS": "2.4",
        "Life.expectancy": "59.8",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2007",
        "HIV.AIDS": "2.8",
        "Life.expectancy": "58.5",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2006",
        "HIV.AIDS": "3.3",
        "Life.expectancy": "57.2",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2005",
        "HIV.AIDS": "3.7",
        "Life.expectancy": "56",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2004",
        "HIV.AIDS": "4.1",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2003",
        "HIV.AIDS": "4.4",
        "Life.expectancy": "54",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2002",
        "HIV.AIDS": "4.6",
        "Life.expectancy": "53.2",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2001",
        "HIV.AIDS": "4.9",
        "Life.expectancy": "52.5",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2000",
        "HIV.AIDS": "5",
        "Life.expectancy": "51.2",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.9",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.7",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.6",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.2",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.1",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.9",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.7",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.6",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.1",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.9",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.8",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.1",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "89",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "87",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "84",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "83",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.9",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.7",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.6",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.3",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.2",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.9",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.7",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.4",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.1",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.5",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.4",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.2",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.5",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.7",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.3",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.1",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "89",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "89",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "86",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.3",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.2",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.8",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2015",
        "HIV.AIDS": "2.7",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2014",
        "HIV.AIDS": "2.8",
        "Life.expectancy": "65.5",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2013",
        "HIV.AIDS": "3.7",
        "Life.expectancy": "64.6",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2012",
        "HIV.AIDS": "4.9",
        "Life.expectancy": "63.5",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2011",
        "HIV.AIDS": "6",
        "Life.expectancy": "62.8",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2010",
        "HIV.AIDS": "7",
        "Life.expectancy": "62.3",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2009",
        "HIV.AIDS": "8",
        "Life.expectancy": "61.7",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2008",
        "HIV.AIDS": "8.9",
        "Life.expectancy": "61.6",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2007",
        "HIV.AIDS": "10",
        "Life.expectancy": "61.6",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2006",
        "HIV.AIDS": "10.7",
        "Life.expectancy": "61.4",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2005",
        "HIV.AIDS": "10.9",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2004",
        "HIV.AIDS": "11.1",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2003",
        "HIV.AIDS": "11",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2002",
        "HIV.AIDS": "10.7",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2001",
        "HIV.AIDS": "10.1",
        "Life.expectancy": "59.8",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2000",
        "HIV.AIDS": "9.5",
        "Life.expectancy": "61",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2015",
        "HIV.AIDS": "1.7",
        "Life.expectancy": "61.1",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2014",
        "HIV.AIDS": "1.7",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2013",
        "HIV.AIDS": "1.6",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2012",
        "HIV.AIDS": "1.4",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2011",
        "HIV.AIDS": "1.8",
        "Life.expectancy": "59.8",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2010",
        "HIV.AIDS": "2.1",
        "Life.expectancy": "59.3",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2009",
        "HIV.AIDS": "2.7",
        "Life.expectancy": "59",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2008",
        "HIV.AIDS": "3",
        "Life.expectancy": "58.7",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2007",
        "HIV.AIDS": "3.1",
        "Life.expectancy": "58.5",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2006",
        "HIV.AIDS": "3",
        "Life.expectancy": "58.2",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2005",
        "HIV.AIDS": "3",
        "Life.expectancy": "57.7",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2004",
        "HIV.AIDS": "2.9",
        "Life.expectancy": "57.3",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2003",
        "HIV.AIDS": "2.7",
        "Life.expectancy": "57",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2002",
        "HIV.AIDS": "2.5",
        "Life.expectancy": "56.6",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2001",
        "HIV.AIDS": "2.3",
        "Life.expectancy": "56.3",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2000",
        "HIV.AIDS": "2",
        "Life.expectancy": "55.9",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Germany",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "89",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "85",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "80",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.9",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.8",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.6",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.2",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.1",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.5",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.4",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.3",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Ghana",
        "Year": "2015",
        "HIV.AIDS": "0.7",
        "Life.expectancy": "62.4",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2014",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "62.1",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2013",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "61.9",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2012",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "61.6",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2011",
        "HIV.AIDS": "1.3",
        "Life.expectancy": "61.2",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2010",
        "HIV.AIDS": "1.9",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2009",
        "HIV.AIDS": "2.1",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2008",
        "HIV.AIDS": "2.2",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2007",
        "HIV.AIDS": "2.6",
        "Life.expectancy": "59.9",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2006",
        "HIV.AIDS": "2.9",
        "Life.expectancy": "59.4",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2005",
        "HIV.AIDS": "3.1",
        "Life.expectancy": "58.9",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2004",
        "HIV.AIDS": "3.2",
        "Life.expectancy": "58.3",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2003",
        "HIV.AIDS": "3.4",
        "Life.expectancy": "57.9",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2002",
        "HIV.AIDS": "3.5",
        "Life.expectancy": "57.6",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2001",
        "HIV.AIDS": "3.5",
        "Life.expectancy": "57.4",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2000",
        "HIV.AIDS": "3.6",
        "Life.expectancy": "57.2",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "88",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "86",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "84",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "85",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "83",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "80",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.9",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.4",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.7",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.3",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.2",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.1",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.7",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.2",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.5",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.1",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2015",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2014",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2013",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2012",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "71.3",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2011",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "71.1",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2010",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2009",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2008",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2007",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2006",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "69.7",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2005",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "69.2",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2004",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "69.6",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2003",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2002",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "69.3",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2001",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "68.4",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2000",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2015",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "59",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2014",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "58.1",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2013",
        "HIV.AIDS": "1",
        "Life.expectancy": "58.8",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2012",
        "HIV.AIDS": "1.9",
        "Life.expectancy": "58.4",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2011",
        "HIV.AIDS": "2",
        "Life.expectancy": "58.1",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2010",
        "HIV.AIDS": "2.2",
        "Life.expectancy": "57.8",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2009",
        "HIV.AIDS": "2.3",
        "Life.expectancy": "57.3",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2008",
        "HIV.AIDS": "2.3",
        "Life.expectancy": "56.8",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2007",
        "HIV.AIDS": "2.4",
        "Life.expectancy": "56.4",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2006",
        "HIV.AIDS": "2.6",
        "Life.expectancy": "55.6",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2005",
        "HIV.AIDS": "2.7",
        "Life.expectancy": "54.7",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2004",
        "HIV.AIDS": "2.8",
        "Life.expectancy": "54",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2003",
        "HIV.AIDS": "2.9",
        "Life.expectancy": "53.3",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2002",
        "HIV.AIDS": "3",
        "Life.expectancy": "52.9",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2001",
        "HIV.AIDS": "3",
        "Life.expectancy": "52.5",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2000",
        "HIV.AIDS": "3",
        "Life.expectancy": "52.5",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2015",
        "HIV.AIDS": "3.2",
        "Life.expectancy": "58.9",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2014",
        "HIV.AIDS": "3.4",
        "Life.expectancy": "58.4",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2013",
        "HIV.AIDS": "4.5",
        "Life.expectancy": "58.1",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2012",
        "HIV.AIDS": "5.3",
        "Life.expectancy": "57.6",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2011",
        "HIV.AIDS": "5.7",
        "Life.expectancy": "57.1",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2010",
        "HIV.AIDS": "5.9",
        "Life.expectancy": "56.7",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2009",
        "HIV.AIDS": "6",
        "Life.expectancy": "56.3",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2008",
        "HIV.AIDS": "6",
        "Life.expectancy": "55.6",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2007",
        "HIV.AIDS": "5.7",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2006",
        "HIV.AIDS": "5.6",
        "Life.expectancy": "54.4",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2005",
        "HIV.AIDS": "5.4",
        "Life.expectancy": "53.9",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2004",
        "HIV.AIDS": "5",
        "Life.expectancy": "53.5",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2003",
        "HIV.AIDS": "4.6",
        "Life.expectancy": "53",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2002",
        "HIV.AIDS": "4.1",
        "Life.expectancy": "52.8",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2001",
        "HIV.AIDS": "3.6",
        "Life.expectancy": "52.5",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2000",
        "HIV.AIDS": "3.1",
        "Life.expectancy": "52.1",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2015",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "66.2",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2014",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2013",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "65.9",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2012",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "65.8",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2011",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "65.6",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2010",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "65.9",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2009",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "66.1",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2008",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "66.3",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2007",
        "HIV.AIDS": "1.9",
        "Life.expectancy": "65.7",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2006",
        "HIV.AIDS": "1.1",
        "Life.expectancy": "65.2",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2005",
        "HIV.AIDS": "1.8",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2004",
        "HIV.AIDS": "1.9",
        "Life.expectancy": "65.1",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2003",
        "HIV.AIDS": "2.1",
        "Life.expectancy": "65.3",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2002",
        "HIV.AIDS": "2.3",
        "Life.expectancy": "65.3",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2001",
        "HIV.AIDS": "1.7",
        "Life.expectancy": "65.4",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2000",
        "HIV.AIDS": "1.1",
        "Life.expectancy": "65.4",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2015",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "63.5",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2014",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "63.1",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2013",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "62.7",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2012",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "62.3",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2011",
        "HIV.AIDS": "1.5",
        "Life.expectancy": "62.3",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2010",
        "HIV.AIDS": "1.9",
        "Life.expectancy": "36.3",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2009",
        "HIV.AIDS": "2",
        "Life.expectancy": "62.5",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2008",
        "HIV.AIDS": "2.4",
        "Life.expectancy": "62.1",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2007",
        "HIV.AIDS": "2.7",
        "Life.expectancy": "61.8",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2006",
        "HIV.AIDS": "3.3",
        "Life.expectancy": "61.1",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2005",
        "HIV.AIDS": "3.9",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2004",
        "HIV.AIDS": "4.3",
        "Life.expectancy": "58.7",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2003",
        "HIV.AIDS": "4.6",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2002",
        "HIV.AIDS": "4.8",
        "Life.expectancy": "59.3",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2001",
        "HIV.AIDS": "5",
        "Life.expectancy": "58.9",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2000",
        "HIV.AIDS": "5.1",
        "Life.expectancy": "58.6",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2015",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2014",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2013",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "74.3",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2012",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2011",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2010",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2009",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2008",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2007",
        "HIV.AIDS": "0.7",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2006",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2005",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2004",
        "HIV.AIDS": "1.2",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2003",
        "HIV.AIDS": "1.4",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2002",
        "HIV.AIDS": "1.5",
        "Life.expectancy": "71.6",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2001",
        "HIV.AIDS": "1.6",
        "Life.expectancy": "71.3",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2000",
        "HIV.AIDS": "1.7",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Hungary",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.8",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.6",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.5",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.8",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.5",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.2",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.1",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.5",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.4",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.9",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.9",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.5",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.5",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.3",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.7",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.7",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.5",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.4",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.5",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.1",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.8",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.6",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.4",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.3",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "88",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "87",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "84",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "80",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.7",
        "Status": "Developed"
      },
      {
        "Country": "India",
        "Year": "2015",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2014",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2013",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "67.6",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2012",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2011",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "66.8",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2010",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "66.4",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2009",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2008",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "65.5",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2007",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "65.2",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2006",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "64.8",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2005",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "64.4",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2004",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2003",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "63.7",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2002",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "63.3",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2001",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "62.9",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2000",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "62.5",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2015",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "69.1",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2014",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "68.9",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2013",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "68.7",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2012",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2011",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2010",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "68.1",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2009",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "67.9",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2008",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2007",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.2",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "65.3",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.9",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.7",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.5",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.3",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.1",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.9",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.9",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.5",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.3",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "65.9",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "64.7",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.8",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.2",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.5",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "70",
        "Status": "Developing"
      },
      {
        "Country": "Ireland",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.4",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.2",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "85",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "84",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.7",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.8",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.5",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.3",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.4",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.4",
        "Status": "Developed"
      },
      {
        "Country": "Israel",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.5",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.2",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.1",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.8",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.8",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.7",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.5",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "84",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "84",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "80",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.7",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.3",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.3",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.9",
        "Status": "Developing"
      },
      {
        "Country": "Italy",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.7",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.5",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.3",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.8",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.6",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.5",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.3",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.2",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "88",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "89",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.9",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "80",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.8",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.4",
        "Status": "Developed"
      },
      {
        "Country": "Jamaica",
        "Year": "2015",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2014",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "75.8",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2013",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2012",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2011",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2010",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2009",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2008",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2007",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2006",
        "HIV.AIDS": "1.5",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2005",
        "HIV.AIDS": "1.9",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2004",
        "HIV.AIDS": "2.3",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2003",
        "HIV.AIDS": "2.3",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2002",
        "HIV.AIDS": "2.3",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2001",
        "HIV.AIDS": "2.2",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2000",
        "HIV.AIDS": "2.2",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Japan",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "83.7",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "83.5",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "83.5",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "83.3",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.5",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.7",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.6",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.4",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.1",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.9",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.8",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.5",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Jordan",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.9",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.5",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.1",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.8",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.8",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.6",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "65.3",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "64.6",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "64.7",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "64.4",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "64.7",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "64.4",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "63.9",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2015",
        "HIV.AIDS": "2.8",
        "Life.expectancy": "63.4",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2014",
        "HIV.AIDS": "2.9",
        "Life.expectancy": "62.9",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2013",
        "HIV.AIDS": "3",
        "Life.expectancy": "62.6",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2012",
        "HIV.AIDS": "3",
        "Life.expectancy": "62.1",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2011",
        "HIV.AIDS": "3.4",
        "Life.expectancy": "61.2",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2010",
        "HIV.AIDS": "4.3",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2009",
        "HIV.AIDS": "5",
        "Life.expectancy": "59.1",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2008",
        "HIV.AIDS": "6.4",
        "Life.expectancy": "57.9",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2007",
        "HIV.AIDS": "9.1",
        "Life.expectancy": "56.8",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2006",
        "HIV.AIDS": "10.3",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2005",
        "HIV.AIDS": "11.6",
        "Life.expectancy": "54.1",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2004",
        "HIV.AIDS": "13.2",
        "Life.expectancy": "53",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2003",
        "HIV.AIDS": "14.5",
        "Life.expectancy": "52.4",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2002",
        "HIV.AIDS": "15.7",
        "Life.expectancy": "52.1",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2001",
        "HIV.AIDS": "16.9",
        "Life.expectancy": "51.9",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2000",
        "HIV.AIDS": "18.1",
        "Life.expectancy": "51.9",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.3",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.1",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "65.8",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "65.7",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "65.5",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "65.3",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "65.2",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "65.1",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "64.9",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "64.8",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "64.7",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "64.6",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "64.3",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "64.1",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.3",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.1",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.9",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2011",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.8",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2008",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "67.6",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.2",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.7",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.9",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.1",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.6",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.7",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.2",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.6",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2015",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "65.7",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2014",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "65.3",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2013",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "64.9",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2012",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "64.4",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2011",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2010",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "63.6",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2009",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "63.1",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2008",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "62.6",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2007",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "62.1",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2006",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "61.5",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2005",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "61",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2004",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "59.8",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "59.3",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "58.7",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "58.1",
        "Status": "Developing"
      },
      {
        "Country": "Latvia",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.6",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.4",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.1",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.8",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.6",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.8",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.6",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.9",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.9",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71",
        "Status": "Developed"
      },
      {
        "Country": "Lebanon",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2015",
        "HIV.AIDS": "9.3",
        "Life.expectancy": "53.7",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2014",
        "HIV.AIDS": "9.4",
        "Life.expectancy": "52.1",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2013",
        "HIV.AIDS": "9.6",
        "Life.expectancy": "52.1",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2012",
        "HIV.AIDS": "9",
        "Life.expectancy": "52.2",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2011",
        "HIV.AIDS": "10.5",
        "Life.expectancy": "52.3",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2010",
        "HIV.AIDS": "13.4",
        "Life.expectancy": "51.1",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2009",
        "HIV.AIDS": "18.2",
        "Life.expectancy": "49.4",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2008",
        "HIV.AIDS": "27.3",
        "Life.expectancy": "47.8",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2007",
        "HIV.AIDS": "30",
        "Life.expectancy": "46.2",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2006",
        "HIV.AIDS": "34.1",
        "Life.expectancy": "45.3",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2005",
        "HIV.AIDS": "34.8",
        "Life.expectancy": "44.5",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2004",
        "HIV.AIDS": "34.6",
        "Life.expectancy": "44.8",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2003",
        "HIV.AIDS": "33.8",
        "Life.expectancy": "45.5",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2002",
        "HIV.AIDS": "32.5",
        "Life.expectancy": "46.4",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2001",
        "HIV.AIDS": "31.2",
        "Life.expectancy": "47.8",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2000",
        "HIV.AIDS": "29.8",
        "Life.expectancy": "49.3",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2015",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "61.4",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2014",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "58.1",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2013",
        "HIV.AIDS": "1.1",
        "Life.expectancy": "61.1",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2012",
        "HIV.AIDS": "1.2",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2011",
        "HIV.AIDS": "1.5",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2010",
        "HIV.AIDS": "1.8",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2009",
        "HIV.AIDS": "2.1",
        "Life.expectancy": "59.2",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2008",
        "HIV.AIDS": "2.4",
        "Life.expectancy": "58.6",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2007",
        "HIV.AIDS": "2.8",
        "Life.expectancy": "57.9",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2006",
        "HIV.AIDS": "3",
        "Life.expectancy": "56.7",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2005",
        "HIV.AIDS": "3.1",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2004",
        "HIV.AIDS": "3.2",
        "Life.expectancy": "54",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2003",
        "HIV.AIDS": "3.2",
        "Life.expectancy": "50",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2002",
        "HIV.AIDS": "3.1",
        "Life.expectancy": "56",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2001",
        "HIV.AIDS": "3.1",
        "Life.expectancy": "51.5",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2000",
        "HIV.AIDS": "3.1",
        "Life.expectancy": "51.9",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.3",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.5",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.3",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.1",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Lithuania",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.6",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.4",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.8",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.4",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.2",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.1",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.6",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.6",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.4",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.2",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.6",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.7",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.4",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "88",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "80",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.7",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.4",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.8",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.6",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.3",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.8",
        "Status": "Developed"
      },
      {
        "Country": "Madagascar",
        "Year": "2015",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "65.5",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2014",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "65.1",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2013",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "64.7",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2012",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "64.3",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2011",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "63.8",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2010",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "63.3",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2009",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "62.8",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2008",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "62.3",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2007",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "61.9",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2006",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "61.4",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2005",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2004",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2003",
        "HIV.AIDS": "0.7",
        "Life.expectancy": "59.9",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2002",
        "HIV.AIDS": "0.7",
        "Life.expectancy": "59.3",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2001",
        "HIV.AIDS": "0.7",
        "Life.expectancy": "58.7",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2000",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "57.9",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2015",
        "HIV.AIDS": "4.8",
        "Life.expectancy": "58.3",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2014",
        "HIV.AIDS": "5.1",
        "Life.expectancy": "57.6",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2013",
        "HIV.AIDS": "6.3",
        "Life.expectancy": "56.7",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2012",
        "HIV.AIDS": "8.3",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2011",
        "HIV.AIDS": "11.2",
        "Life.expectancy": "54.1",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2010",
        "HIV.AIDS": "13.7",
        "Life.expectancy": "52.9",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2009",
        "HIV.AIDS": "14.9",
        "Life.expectancy": "51.5",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2008",
        "HIV.AIDS": "16.9",
        "Life.expectancy": "50",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2007",
        "HIV.AIDS": "19.3",
        "Life.expectancy": "48.5",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2006",
        "HIV.AIDS": "21.1",
        "Life.expectancy": "47.1",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2005",
        "HIV.AIDS": "22.4",
        "Life.expectancy": "46",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2004",
        "HIV.AIDS": "23.4",
        "Life.expectancy": "45.1",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2003",
        "HIV.AIDS": "24.2",
        "Life.expectancy": "44.6",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2002",
        "HIV.AIDS": "24.7",
        "Life.expectancy": "44",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2001",
        "HIV.AIDS": "25.1",
        "Life.expectancy": "43.5",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2000",
        "HIV.AIDS": "25.5",
        "Life.expectancy": "43.1",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.3",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.5",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.2",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.9",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.6",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.3",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.7",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.3",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.9",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.3",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.6",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2015",
        "HIV.AIDS": "1.5",
        "Life.expectancy": "58.2",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2014",
        "HIV.AIDS": "1.6",
        "Life.expectancy": "57.8",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2013",
        "HIV.AIDS": "1.6",
        "Life.expectancy": "57.3",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2012",
        "HIV.AIDS": "1.5",
        "Life.expectancy": "57.2",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2011",
        "HIV.AIDS": "1.5",
        "Life.expectancy": "56.8",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2010",
        "HIV.AIDS": "1.5",
        "Life.expectancy": "56.5",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2009",
        "HIV.AIDS": "1.6",
        "Life.expectancy": "56",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2008",
        "HIV.AIDS": "1.6",
        "Life.expectancy": "55.5",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2007",
        "HIV.AIDS": "1.7",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2006",
        "HIV.AIDS": "1.8",
        "Life.expectancy": "54.3",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2005",
        "HIV.AIDS": "1.9",
        "Life.expectancy": "53.6",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2004",
        "HIV.AIDS": "2",
        "Life.expectancy": "52.8",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2003",
        "HIV.AIDS": "2.2",
        "Life.expectancy": "52",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2002",
        "HIV.AIDS": "2.3",
        "Life.expectancy": "51.2",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2001",
        "HIV.AIDS": "2.4",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2000",
        "HIV.AIDS": "2.5",
        "Life.expectancy": "49.8",
        "Status": "Developing"
      },
      {
        "Country": "Malta",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.7",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.4",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "87",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "80",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.6",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.3",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.5",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.2",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.8",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.5",
        "Status": "Developed"
      },
      {
        "Country": "Marshall Islands",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "0",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2015",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "63.1",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2014",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2013",
        "HIV.AIDS": "1.1",
        "Life.expectancy": "62.7",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2012",
        "HIV.AIDS": "1.2",
        "Life.expectancy": "62.5",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2011",
        "HIV.AIDS": "1.2",
        "Life.expectancy": "62.2",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2010",
        "HIV.AIDS": "1.2",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2009",
        "HIV.AIDS": "1.2",
        "Life.expectancy": "61.7",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2008",
        "HIV.AIDS": "1.3",
        "Life.expectancy": "61.4",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2007",
        "HIV.AIDS": "1.3",
        "Life.expectancy": "61.2",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2006",
        "HIV.AIDS": "1.3",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2005",
        "HIV.AIDS": "1.3",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2004",
        "HIV.AIDS": "1.3",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2003",
        "HIV.AIDS": "1.3",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2002",
        "HIV.AIDS": "1.2",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2001",
        "HIV.AIDS": "1.2",
        "Life.expectancy": "61",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2000",
        "HIV.AIDS": "1.1",
        "Life.expectancy": "60",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2010",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.5",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.5",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.5",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.7",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.6",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.6",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.3",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.1",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.7",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.8",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.2",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.9",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.7",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.4",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.2",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.9",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.2",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.2",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Monaco",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "0",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.8",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.4",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.1",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.8",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.3",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.9",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.4",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "65.9",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "64.5",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "63.8",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "63.2",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "62.8",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.1",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.9",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.8",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.3",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.9",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.5",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.6",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2015",
        "HIV.AIDS": "3.9",
        "Life.expectancy": "57.6",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2014",
        "HIV.AIDS": "4.1",
        "Life.expectancy": "56.7",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2013",
        "HIV.AIDS": "5.1",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2012",
        "HIV.AIDS": "6.9",
        "Life.expectancy": "54.8",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2011",
        "HIV.AIDS": "9.6",
        "Life.expectancy": "54.3",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2010",
        "HIV.AIDS": "10.8",
        "Life.expectancy": "54",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2009",
        "HIV.AIDS": "11.3",
        "Life.expectancy": "53.8",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2008",
        "HIV.AIDS": "12.6",
        "Life.expectancy": "53.2",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2007",
        "HIV.AIDS": "14.1",
        "Life.expectancy": "52.1",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2006",
        "HIV.AIDS": "16.3",
        "Life.expectancy": "51.2",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2005",
        "HIV.AIDS": "16.2",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2004",
        "HIV.AIDS": "15.9",
        "Life.expectancy": "54",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2003",
        "HIV.AIDS": "15.3",
        "Life.expectancy": "51",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2002",
        "HIV.AIDS": "14.5",
        "Life.expectancy": "49.8",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2001",
        "HIV.AIDS": "13.4",
        "Life.expectancy": "49.5",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2000",
        "HIV.AIDS": "12.2",
        "Life.expectancy": "49",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2015",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "66.6",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2014",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "66.4",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2013",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "66.2",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2012",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "65.9",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2011",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "65.6",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2010",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "65.4",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2009",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "65.2",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2008",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "59.2",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2007",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "64.5",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2006",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "64.2",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2005",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "63.9",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2004",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "63.5",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2003",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "63.2",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2002",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "62.8",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2001",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "62.5",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2000",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "62.1",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2015",
        "HIV.AIDS": "2.1",
        "Life.expectancy": "65.8",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2014",
        "HIV.AIDS": "2.2",
        "Life.expectancy": "65.9",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2013",
        "HIV.AIDS": "2.5",
        "Life.expectancy": "66.1",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2012",
        "HIV.AIDS": "3.7",
        "Life.expectancy": "65.8",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2011",
        "HIV.AIDS": "4.7",
        "Life.expectancy": "64.3",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2010",
        "HIV.AIDS": "6.2",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2009",
        "HIV.AIDS": "8.7",
        "Life.expectancy": "62.4",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2008",
        "HIV.AIDS": "11.7",
        "Life.expectancy": "61.7",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2007",
        "HIV.AIDS": "15.2",
        "Life.expectancy": "60",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2006",
        "HIV.AIDS": "19.2",
        "Life.expectancy": "57",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2005",
        "HIV.AIDS": "22.1",
        "Life.expectancy": "55.1",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2004",
        "HIV.AIDS": "24",
        "Life.expectancy": "54.7",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2003",
        "HIV.AIDS": "24.7",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2002",
        "HIV.AIDS": "24.6",
        "Life.expectancy": "55.7",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2001",
        "HIV.AIDS": "23.9",
        "Life.expectancy": "56.5",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2000",
        "HIV.AIDS": "22.8",
        "Life.expectancy": "57.4",
        "Status": "Developing"
      },
      {
        "Country": "Nauru",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "0",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.2",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.6",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.3",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2012",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "68.9",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2011",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "68.4",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2010",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2009",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2008",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2007",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "66.6",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2006",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2005",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "65.4",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2004",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "64.7",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "64.3",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "63.1",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "63.2",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "62.5",
        "Status": "Developing"
      },
      {
        "Country": "Netherlands",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.9",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.7",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.4",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "88",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.8",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.4",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.2",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.4",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.3",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.1",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.6",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.5",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.3",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "89",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "85",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.9",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.9",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.2",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.1",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.5",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.6",
        "Status": "Developed"
      },
      {
        "Country": "Nicaragua",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2009",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2008",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2007",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2006",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2005",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2004",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2003",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2002",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2001",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2000",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2015",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "61.8",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2014",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "61.4",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2013",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2012",
        "HIV.AIDS": "0.7",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2011",
        "HIV.AIDS": "0.7",
        "Life.expectancy": "59.4",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2010",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "58.2",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2009",
        "HIV.AIDS": "1.1",
        "Life.expectancy": "57.1",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2008",
        "HIV.AIDS": "1.3",
        "Life.expectancy": "56",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2007",
        "HIV.AIDS": "1.4",
        "Life.expectancy": "55.2",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2006",
        "HIV.AIDS": "1.5",
        "Life.expectancy": "54.5",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2005",
        "HIV.AIDS": "1.6",
        "Life.expectancy": "53.7",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2004",
        "HIV.AIDS": "1.6",
        "Life.expectancy": "52.9",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2003",
        "HIV.AIDS": "1.6",
        "Life.expectancy": "52.1",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2002",
        "HIV.AIDS": "1.6",
        "Life.expectancy": "51.4",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2001",
        "HIV.AIDS": "1.6",
        "Life.expectancy": "56",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2000",
        "HIV.AIDS": "1.5",
        "Life.expectancy": "50",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2015",
        "HIV.AIDS": "3.7",
        "Life.expectancy": "54.5",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2014",
        "HIV.AIDS": "3.9",
        "Life.expectancy": "53.6",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2013",
        "HIV.AIDS": "3.9",
        "Life.expectancy": "53.2",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2012",
        "HIV.AIDS": "4.4",
        "Life.expectancy": "52.7",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2011",
        "HIV.AIDS": "4.7",
        "Life.expectancy": "52.3",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2010",
        "HIV.AIDS": "4.8",
        "Life.expectancy": "52",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2009",
        "HIV.AIDS": "4.9",
        "Life.expectancy": "51.6",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2008",
        "HIV.AIDS": "5",
        "Life.expectancy": "59",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2007",
        "HIV.AIDS": "5.2",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2006",
        "HIV.AIDS": "5.3",
        "Life.expectancy": "49.8",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2005",
        "HIV.AIDS": "5.4",
        "Life.expectancy": "49.2",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2004",
        "HIV.AIDS": "5.4",
        "Life.expectancy": "48.5",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2003",
        "HIV.AIDS": "5.4",
        "Life.expectancy": "48.1",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2002",
        "HIV.AIDS": "5.3",
        "Life.expectancy": "47.7",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2001",
        "HIV.AIDS": "5.1",
        "Life.expectancy": "47.4",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2000",
        "HIV.AIDS": "4.9",
        "Life.expectancy": "47.1",
        "Status": "Developing"
      },
      {
        "Country": "Niue",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "0",
        "Status": "Developing"
      },
      {
        "Country": "Norway",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.8",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.6",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.5",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.3",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "89",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "85",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "84",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.8",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.4",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.9",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.8",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.5",
        "Status": "Developed"
      },
      {
        "Country": "Oman",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.6",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.4",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.8",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.3",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.4",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.2",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "65.7",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "65.5",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "65.1",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "64.8",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "64.6",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "64.4",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "64.2",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "62.9",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "63.7",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "63.5",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "63.2",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "62.8",
        "Status": "Developing"
      },
      {
        "Country": "Palau",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "0",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.8",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.6",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.5",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.2",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.3",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.5",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.8",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.5",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2007",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "76.4",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.8",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2004",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "75.8",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2002",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "75.7",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2000",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "75.7",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2015",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "62.9",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2014",
        "HIV.AIDS": "0.7",
        "Life.expectancy": "62.7",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2013",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "62.4",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2012",
        "HIV.AIDS": "1",
        "Life.expectancy": "62.2",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2011",
        "HIV.AIDS": "1",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2010",
        "HIV.AIDS": "1.1",
        "Life.expectancy": "61.8",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2009",
        "HIV.AIDS": "1.1",
        "Life.expectancy": "61.6",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2008",
        "HIV.AIDS": "1.3",
        "Life.expectancy": "61.4",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2007",
        "HIV.AIDS": "1.4",
        "Life.expectancy": "61.1",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2006",
        "HIV.AIDS": "1.5",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2005",
        "HIV.AIDS": "1.5",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2004",
        "HIV.AIDS": "1.5",
        "Life.expectancy": "59.9",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2003",
        "HIV.AIDS": "1.4",
        "Life.expectancy": "59.6",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2002",
        "HIV.AIDS": "1.4",
        "Life.expectancy": "59.3",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2001",
        "HIV.AIDS": "1.3",
        "Life.expectancy": "59.1",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2000",
        "HIV.AIDS": "1.1",
        "Life.expectancy": "58.9",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2015",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2014",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2013",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2006",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2005",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2004",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.5",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2011",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2010",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2009",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2008",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2007",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2006",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2005",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2004",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2003",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2002",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2001",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2000",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.4",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.1",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.1",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.9",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.2",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.8",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.8",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.8",
        "Status": "Developing"
      },
      {
        "Country": "Poland",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.5",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.3",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.1",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.8",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.7",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.3",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.7",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.5",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.3",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.2",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.9",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.7",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.5",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.2",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.7",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "89",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.6",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.3",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.5",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.7",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.3",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.2",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.9",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.6",
        "Status": "Developed"
      },
      {
        "Country": "Qatar",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.2",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.1",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.9",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.8",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.5",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.3",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.8",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.7",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.6",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.6",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.6",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.5",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.4",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.3",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.3",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.7",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.2",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.1",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "87",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "86",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "83",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.8",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.4",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.7",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.2",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.6",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.1",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.7",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.8",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.9",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.6",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.6",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.1",
        "Status": "Developing"
      },
      {
        "Country": "Romania",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.8",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.6",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.4",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.3",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.4",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.1",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.1",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.9",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.5",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.9",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.7",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.1",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77",
        "Status": "Developed"
      },
      {
        "Country": "Russian Federation",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2013",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "70",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2012",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "69.6",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2011",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2010",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "68.4",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2009",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "68.2",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2008",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2007",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2006",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "66.4",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2005",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2004",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "64.9",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2003",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "64.6",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2002",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "64.8",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2001",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "65.1",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2000",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2015",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "66.1",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2014",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "65.7",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2013",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "65.2",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2012",
        "HIV.AIDS": "0.7",
        "Life.expectancy": "64.6",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2011",
        "HIV.AIDS": "1.3",
        "Life.expectancy": "63.8",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2010",
        "HIV.AIDS": "2.3",
        "Life.expectancy": "62.8",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2009",
        "HIV.AIDS": "2.8",
        "Life.expectancy": "61",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2008",
        "HIV.AIDS": "3.7",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2007",
        "HIV.AIDS": "5",
        "Life.expectancy": "59.6",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2006",
        "HIV.AIDS": "6.2",
        "Life.expectancy": "57.6",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2005",
        "HIV.AIDS": "7.1",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2004",
        "HIV.AIDS": "7.7",
        "Life.expectancy": "53.4",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2003",
        "HIV.AIDS": "8.1",
        "Life.expectancy": "52",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2002",
        "HIV.AIDS": "8",
        "Life.expectancy": "57",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2001",
        "HIV.AIDS": "8.1",
        "Life.expectancy": "48.6",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2000",
        "HIV.AIDS": "8.5",
        "Life.expectancy": "48.3",
        "Status": "Developing"
      },
      {
        "Country": "Saint Kitts and Nevis",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "0",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.3",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2005",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2004",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2003",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2001",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2000",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "71.6",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2009",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2008",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2007",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2006",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2005",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2004",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2003",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2002",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2001",
        "HIV.AIDS": "0.7",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2000",
        "HIV.AIDS": "0.7",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.6",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "San Marino",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "0",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2015",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2014",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2013",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "67.1",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2012",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "66.9",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2011",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "66.6",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2010",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "66.2",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2009",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "65.8",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2008",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "65.4",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2007",
        "HIV.AIDS": "1.2",
        "Life.expectancy": "65.1",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2006",
        "HIV.AIDS": "1.2",
        "Life.expectancy": "64.7",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2005",
        "HIV.AIDS": "1.6",
        "Life.expectancy": "64.3",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2004",
        "HIV.AIDS": "1.6",
        "Life.expectancy": "63.8",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2003",
        "HIV.AIDS": "1.6",
        "Life.expectancy": "63.4",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2002",
        "HIV.AIDS": "1.4",
        "Life.expectancy": "63.1",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2001",
        "HIV.AIDS": "1.5",
        "Life.expectancy": "62.8",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2000",
        "HIV.AIDS": "1.5",
        "Life.expectancy": "62.6",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.3",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2015",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "66.7",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2014",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "66.4",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2013",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2012",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "65.6",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2011",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "64.9",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2010",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "64.3",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2009",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "63.5",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2008",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "62.8",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2007",
        "HIV.AIDS": "0.7",
        "Life.expectancy": "62.1",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2006",
        "HIV.AIDS": "0.7",
        "Life.expectancy": "61.3",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2005",
        "HIV.AIDS": "0.7",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2004",
        "HIV.AIDS": "0.7",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2003",
        "HIV.AIDS": "0.7",
        "Life.expectancy": "59",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2002",
        "HIV.AIDS": "0.7",
        "Life.expectancy": "58.4",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2001",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "57.9",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2000",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "57.5",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2015",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "51",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2014",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "48.1",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2013",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "54",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2012",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "49.7",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2011",
        "HIV.AIDS": "1.3",
        "Life.expectancy": "48.9",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2010",
        "HIV.AIDS": "1.6",
        "Life.expectancy": "48.1",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2009",
        "HIV.AIDS": "1.7",
        "Life.expectancy": "47.1",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2008",
        "HIV.AIDS": "1.9",
        "Life.expectancy": "46.2",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2007",
        "HIV.AIDS": "2.2",
        "Life.expectancy": "45.3",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2006",
        "HIV.AIDS": "2.2",
        "Life.expectancy": "44.3",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2005",
        "HIV.AIDS": "2.2",
        "Life.expectancy": "43.3",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2004",
        "HIV.AIDS": "2.1",
        "Life.expectancy": "42.3",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2003",
        "HIV.AIDS": "1.9",
        "Life.expectancy": "41.5",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2002",
        "HIV.AIDS": "1.7",
        "Life.expectancy": "48",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2001",
        "HIV.AIDS": "1.5",
        "Life.expectancy": "41",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2000",
        "HIV.AIDS": "1.2",
        "Life.expectancy": "39",
        "Status": "Developing"
      },
      {
        "Country": "Singapore",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "83.1",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.9",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.7",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.5",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.2",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.7",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.4",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "87",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.7",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.3",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.3",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.7",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.4",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.1",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.8",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.6",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.1",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.7",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.4",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.3",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.1",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.8",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.7",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.3",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "88",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "87",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "85",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.8",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.5",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.1",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.9",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.3",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.1",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.5",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.2",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.5",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.6",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.2",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76",
        "Status": "Developed"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.2",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.8",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.8",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.7",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.1",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.6",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.6",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.4",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.1",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.8",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.5",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.2",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "65.8",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2015",
        "HIV.AIDS": "0.7",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2014",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "54.3",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2013",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "54.2",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2012",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "53.1",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2011",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "53.1",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2010",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "52.4",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2009",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "52.2",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2008",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "51.9",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2007",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "51.5",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2006",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "51.5",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2005",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "51.6",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2004",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "51.2",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2003",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "51.1",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2002",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2001",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "57",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2000",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2015",
        "HIV.AIDS": "3.6",
        "Life.expectancy": "62.9",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2014",
        "HIV.AIDS": "3.7",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2013",
        "HIV.AIDS": "4.5",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2012",
        "HIV.AIDS": "7.6",
        "Life.expectancy": "59.2",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2011",
        "HIV.AIDS": "8.5",
        "Life.expectancy": "58.9",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2010",
        "HIV.AIDS": "11",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2009",
        "HIV.AIDS": "19",
        "Life.expectancy": "56.5",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2008",
        "HIV.AIDS": "23.5",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2007",
        "HIV.AIDS": "26.4",
        "Life.expectancy": "54.5",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2006",
        "HIV.AIDS": "28.1",
        "Life.expectancy": "54",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2005",
        "HIV.AIDS": "29.5",
        "Life.expectancy": "53.8",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2004",
        "HIV.AIDS": "29.7",
        "Life.expectancy": "53.7",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2003",
        "HIV.AIDS": "28.9",
        "Life.expectancy": "54",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2002",
        "HIV.AIDS": "26.6",
        "Life.expectancy": "54.9",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2001",
        "HIV.AIDS": "24",
        "Life.expectancy": "56",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2000",
        "HIV.AIDS": "21.3",
        "Life.expectancy": "57.3",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2015",
        "HIV.AIDS": "3.4",
        "Life.expectancy": "57.3",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2014",
        "HIV.AIDS": "3.5",
        "Life.expectancy": "56.6",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2013",
        "HIV.AIDS": "3.6",
        "Life.expectancy": "56.4",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2012",
        "HIV.AIDS": "3.8",
        "Life.expectancy": "56",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2011",
        "HIV.AIDS": "3.9",
        "Life.expectancy": "55.4",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2010",
        "HIV.AIDS": "4",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2009",
        "HIV.AIDS": "4.2",
        "Life.expectancy": "54.3",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2008",
        "HIV.AIDS": "4.2",
        "Life.expectancy": "53.6",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2007",
        "HIV.AIDS": "4.2",
        "Life.expectancy": "53.1",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2006",
        "HIV.AIDS": "4.1",
        "Life.expectancy": "52.5",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2005",
        "HIV.AIDS": "3.9",
        "Life.expectancy": "51.9",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2004",
        "HIV.AIDS": "3.8",
        "Life.expectancy": "51.4",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2003",
        "HIV.AIDS": "3.5",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2002",
        "HIV.AIDS": "3.3",
        "Life.expectancy": "52",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2001",
        "HIV.AIDS": "3",
        "Life.expectancy": "49.6",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2000",
        "HIV.AIDS": "2.7",
        "Life.expectancy": "48.9",
        "Status": "Developing"
      },
      {
        "Country": "Spain",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.8",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.6",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.4",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.1",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.9",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.6",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.3",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "89",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "88",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.4",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.5",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.4",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.1",
        "Status": "Developed"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.1",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.5",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2015",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "64.1",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2014",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "63.8",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2013",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "63.5",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2012",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "63.2",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2011",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "62.7",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2010",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "62.5",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2009",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2008",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "61.8",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2007",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "61.4",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2006",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "61",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2005",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2004",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2003",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "59.6",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2002",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "59.4",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2001",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "58.9",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "58.6",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2015",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "71.6",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2014",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2013",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2012",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "71.3",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2010",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2009",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "70",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2008",
        "HIV.AIDS": "1.2",
        "Life.expectancy": "69.8",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2007",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "69.5",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2006",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "69.3",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2005",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "68.9",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2004",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2003",
        "HIV.AIDS": "1",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2002",
        "HIV.AIDS": "1.6",
        "Life.expectancy": "67.9",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2001",
        "HIV.AIDS": "1.8",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2000",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "67.4",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2015",
        "HIV.AIDS": "7.1",
        "Life.expectancy": "58.9",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2014",
        "HIV.AIDS": "7.3",
        "Life.expectancy": "58.4",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2013",
        "HIV.AIDS": "9.8",
        "Life.expectancy": "57.6",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2012",
        "HIV.AIDS": "12.2",
        "Life.expectancy": "56.5",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2011",
        "HIV.AIDS": "15.7",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2010",
        "HIV.AIDS": "21.6",
        "Life.expectancy": "53.6",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2009",
        "HIV.AIDS": "33.7",
        "Life.expectancy": "52.6",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2008",
        "HIV.AIDS": "40.2",
        "Life.expectancy": "51.4",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2007",
        "HIV.AIDS": "40.7",
        "Life.expectancy": "50",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2006",
        "HIV.AIDS": "43.7",
        "Life.expectancy": "47.8",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2005",
        "HIV.AIDS": "49.1",
        "Life.expectancy": "46",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2004",
        "HIV.AIDS": "50.3",
        "Life.expectancy": "45.6",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2003",
        "HIV.AIDS": "50.6",
        "Life.expectancy": "45.9",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2002",
        "HIV.AIDS": "49.9",
        "Life.expectancy": "46.4",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2001",
        "HIV.AIDS": "48.8",
        "Life.expectancy": "47.1",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2000",
        "HIV.AIDS": "46.4",
        "Life.expectancy": "48.4",
        "Status": "Developing"
      },
      {
        "Country": "Sweden",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.4",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.3",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.9",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.7",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.7",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.5",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.4",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "89",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "88",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "85",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.9",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.8",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.6",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "83.4",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "83.2",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.7",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.6",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.3",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82.1",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.7",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.5",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "85",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "84",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.7",
        "Status": "Developed"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "64.5",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "64.4",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "63.6",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "62.8",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2015",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "69.7",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2014",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "69.6",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2013",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "69.3",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2012",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "68.8",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2011",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "68.1",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2010",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2009",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "66.7",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2008",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "66.4",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2007",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "66.1",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2006",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "65.9",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2005",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "65.5",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2004",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "65.9",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2003",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "65.2",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2002",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "64.3",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2001",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2000",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "63.7",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.3",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2011",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2010",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2009",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2008",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2007",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2006",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2005",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2004",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "71.6",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2003",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2002",
        "HIV.AIDS": "0.7",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2001",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2000",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "71.1",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.7",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.1",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.4",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.2",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.9",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.6",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.2",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "65.8",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "64.9",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "63.7",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "62.3",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "61",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "59.4",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "58.7",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2015",
        "HIV.AIDS": "1",
        "Life.expectancy": "59.9",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2014",
        "HIV.AIDS": "1",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2013",
        "HIV.AIDS": "1.5",
        "Life.expectancy": "59.4",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2012",
        "HIV.AIDS": "1.7",
        "Life.expectancy": "58.9",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2011",
        "HIV.AIDS": "2.6",
        "Life.expectancy": "58.3",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2010",
        "HIV.AIDS": "3.8",
        "Life.expectancy": "57.4",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2009",
        "HIV.AIDS": "4.3",
        "Life.expectancy": "56.7",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2008",
        "HIV.AIDS": "4.8",
        "Life.expectancy": "56.2",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2007",
        "HIV.AIDS": "5.1",
        "Life.expectancy": "55.9",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2006",
        "HIV.AIDS": "5",
        "Life.expectancy": "55.7",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2005",
        "HIV.AIDS": "5",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2004",
        "HIV.AIDS": "5.1",
        "Life.expectancy": "54.9",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2003",
        "HIV.AIDS": "5.2",
        "Life.expectancy": "54.7",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2002",
        "HIV.AIDS": "5.3",
        "Life.expectancy": "54.7",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2001",
        "HIV.AIDS": "5.3",
        "Life.expectancy": "54.6",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2000",
        "HIV.AIDS": "5.1",
        "Life.expectancy": "54.6",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.6",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2015",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2014",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "71.1",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2013",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2012",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2011",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2010",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2009",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2008",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "69.9",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2007",
        "HIV.AIDS": "0.7",
        "Life.expectancy": "69.7",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2006",
        "HIV.AIDS": "0.6",
        "Life.expectancy": "69.6",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2005",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "69.5",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2004",
        "HIV.AIDS": "1",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2003",
        "HIV.AIDS": "0.5",
        "Life.expectancy": "69.3",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2002",
        "HIV.AIDS": "2",
        "Life.expectancy": "69.2",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2001",
        "HIV.AIDS": "1.2",
        "Life.expectancy": "69.1",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2000",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "69.1",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.1",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.8",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.6",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66.3",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "65.4",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "65.6",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "65.6",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "65.8",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "65.6",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "64.5",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "64.1",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "63.7",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "63.3",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "63.5",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "63.4",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "63.3",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "63.8",
        "Status": "Developing"
      },
      {
        "Country": "Tuvalu",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "0",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2015",
        "HIV.AIDS": "3.1",
        "Life.expectancy": "62.3",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2014",
        "HIV.AIDS": "3.2",
        "Life.expectancy": "61.5",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2013",
        "HIV.AIDS": "4",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2012",
        "HIV.AIDS": "4.6",
        "Life.expectancy": "60",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2011",
        "HIV.AIDS": "6.8",
        "Life.expectancy": "59.3",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2010",
        "HIV.AIDS": "8",
        "Life.expectancy": "58.4",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2009",
        "HIV.AIDS": "8.1",
        "Life.expectancy": "57.5",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2008",
        "HIV.AIDS": "8.2",
        "Life.expectancy": "56.3",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2007",
        "HIV.AIDS": "8.4",
        "Life.expectancy": "55.5",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2006",
        "HIV.AIDS": "8.6",
        "Life.expectancy": "54.9",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2005",
        "HIV.AIDS": "8.7",
        "Life.expectancy": "53.2",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2004",
        "HIV.AIDS": "8.9",
        "Life.expectancy": "51.3",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2003",
        "HIV.AIDS": "9.4",
        "Life.expectancy": "51",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2002",
        "HIV.AIDS": "10",
        "Life.expectancy": "48.8",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2001",
        "HIV.AIDS": "10.8",
        "Life.expectancy": "47.7",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2000",
        "HIV.AIDS": "11.6",
        "Life.expectancy": "46.6",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2015",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "71.3",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2014",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2013",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2012",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2011",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2010",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "69.8",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2009",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "69.2",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2008",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2007",
        "HIV.AIDS": "0.7",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2006",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2005",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2004",
        "HIV.AIDS": "1",
        "Life.expectancy": "67.4",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2003",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "67.6",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2002",
        "HIV.AIDS": "0.9",
        "Life.expectancy": "67.6",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2001",
        "HIV.AIDS": "0.8",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2000",
        "HIV.AIDS": "0.7",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.1",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.9",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.7",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.5",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.3",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.8",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.1",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81.2",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "87",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.6",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.5",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.3",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.8",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.3",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.2",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.8",
        "Status": "Developed"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2015",
        "HIV.AIDS": "1.4",
        "Life.expectancy": "61.8",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2014",
        "HIV.AIDS": "1.4",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2013",
        "HIV.AIDS": "2.1",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2012",
        "HIV.AIDS": "2.4",
        "Life.expectancy": "58.6",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2011",
        "HIV.AIDS": "3.1",
        "Life.expectancy": "58.3",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2010",
        "HIV.AIDS": "4.6",
        "Life.expectancy": "57.5",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2009",
        "HIV.AIDS": "6.4",
        "Life.expectancy": "56.9",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2008",
        "HIV.AIDS": "7.4",
        "Life.expectancy": "56.2",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2007",
        "HIV.AIDS": "8.5",
        "Life.expectancy": "54.5",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2006",
        "HIV.AIDS": "9.4",
        "Life.expectancy": "53.1",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2005",
        "HIV.AIDS": "10",
        "Life.expectancy": "52.2",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2004",
        "HIV.AIDS": "10.8",
        "Life.expectancy": "51.5",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2003",
        "HIV.AIDS": "11.5",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2002",
        "HIV.AIDS": "12.1",
        "Life.expectancy": "52",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2001",
        "HIV.AIDS": "12.5",
        "Life.expectancy": "49.6",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2000",
        "HIV.AIDS": "12.8",
        "Life.expectancy": "49.2",
        "Status": "Developing"
      },
      {
        "Country": "United States of America",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.3",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "79.1",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.9",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.8",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.5",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.2",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78.1",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.8",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.5",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.5",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77.2",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.9",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.8",
        "Status": "Developed"
      },
      {
        "Country": "Uruguay",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.8",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.8",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.5",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.3",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.6",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.4",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.7",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.1",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.2",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.1",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.8",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2010",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2009",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2008",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "67.9",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2007",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "67.8",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2006",
        "HIV.AIDS": "0.4",
        "Life.expectancy": "67.6",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2005",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2004",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "67.8",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2003",
        "HIV.AIDS": "0.3",
        "Life.expectancy": "67.2",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2002",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "67.1",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2001",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "67.4",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "67.1",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.6",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.9",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.6",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.3",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69.1",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.9",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.7",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2008",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2007",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2006",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2005",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2004",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2003",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2002",
        "HIV.AIDS": "0.2",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2015",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "65.7",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2014",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "65.4",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2013",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "65.4",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2012",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "64.7",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2011",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "64.6",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2010",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "64.4",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2009",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "64.1",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2008",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "63.8",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2007",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "63.4",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2006",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2005",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "62.6",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2004",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "62.2",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2003",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "61.9",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2002",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "61.5",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2001",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "61.1",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2000",
        "HIV.AIDS": "0.1",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2015",
        "HIV.AIDS": "4.1",
        "Life.expectancy": "61.8",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2014",
        "HIV.AIDS": "4.3",
        "Life.expectancy": "61.1",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2013",
        "HIV.AIDS": "4.8",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2012",
        "HIV.AIDS": "5.6",
        "Life.expectancy": "59.2",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2011",
        "HIV.AIDS": "6.3",
        "Life.expectancy": "58.2",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2010",
        "HIV.AIDS": "6.8",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2009",
        "HIV.AIDS": "9.1",
        "Life.expectancy": "57.4",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2008",
        "HIV.AIDS": "11.9",
        "Life.expectancy": "55.7",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2007",
        "HIV.AIDS": "13.6",
        "Life.expectancy": "52.6",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2006",
        "HIV.AIDS": "15.9",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2005",
        "HIV.AIDS": "17",
        "Life.expectancy": "49.3",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2004",
        "HIV.AIDS": "17.6",
        "Life.expectancy": "47.9",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2003",
        "HIV.AIDS": "18.2",
        "Life.expectancy": "46.4",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2002",
        "HIV.AIDS": "18.4",
        "Life.expectancy": "45.5",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2001",
        "HIV.AIDS": "18.6",
        "Life.expectancy": "44.6",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2000",
        "HIV.AIDS": "18.7",
        "Life.expectancy": "43.8",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2015",
        "HIV.AIDS": "6.2",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2014",
        "HIV.AIDS": "6.3",
        "Life.expectancy": "59.2",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2013",
        "HIV.AIDS": "6.8",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2012",
        "HIV.AIDS": "8.8",
        "Life.expectancy": "56.6",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2011",
        "HIV.AIDS": "13.3",
        "Life.expectancy": "54.9",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2010",
        "HIV.AIDS": "15.7",
        "Life.expectancy": "52.4",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2009",
        "HIV.AIDS": "18.1",
        "Life.expectancy": "50",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2008",
        "HIV.AIDS": "20.5",
        "Life.expectancy": "48.2",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2007",
        "HIV.AIDS": "23.7",
        "Life.expectancy": "46.6",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2006",
        "HIV.AIDS": "26.8",
        "Life.expectancy": "45.4",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2005",
        "HIV.AIDS": "30.3",
        "Life.expectancy": "44.6",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2004",
        "HIV.AIDS": "33.6",
        "Life.expectancy": "44.3",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2003",
        "HIV.AIDS": "36.7",
        "Life.expectancy": "44.5",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2002",
        "HIV.AIDS": "39.8",
        "Life.expectancy": "44.8",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2001",
        "HIV.AIDS": "42.1",
        "Life.expectancy": "45.3",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2000",
        "HIV.AIDS": "43.5",
        "Life.expectancy": "46",
        "Status": "Developing"
      }
  
 ]



 // Process the data
data.forEach(function(d) {
    d['HIV.AIDS'] = +d['HIV.AIDS']; // Convert HIV/AIDS to number
    d['Life.expectancy'] = +d['Life.expectancy']; // Convert life expectancy to number
    d.Year = +d.Year; // Convert year to number
});

// Set the ranges
x.domain([0, d3.max(data, function(d) { return d['HIV.AIDS']; })]);
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
    .attr("cx", function(d) { return x(d['HIV.AIDS']); })
    .attr("cy", function(d) { return y(d['Life.expectancy']); })
    .on("mouseover", function(event, d) {
        tooltip.transition()
            .duration(200)
            .style("opacity", .9);
        tooltip.html(d.Country + "<br/>" + d.Year + "<br/>Life expectancy: " 
            + d['Life.expectancy'] + "<br/>HIV.AIDS: " + d['HIV.AIDS'])
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
    .text("HIV/AIDS")
    .style("font-family", "Arial, sans-serif")
    .style("font-size", "18px")
    .style("fill", "#6C757D")
    .style("font-weight", "bold");