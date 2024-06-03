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

let Population;

// Load the data
fetch('data/all_years_data.json')
  .then(response => response.json())
  .then(data => {})
var data =
 [
    
    {
        "Country": "Afghanistan",
        "Year": "2015",
        "Population": "33736494",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2014",
        "Population": "327582",
        "Life.expectancy": "59.9",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2013",
        "Population": "31731688",
        "Life.expectancy": "59.9",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2012",
        "Population": "3696958",
        "Life.expectancy": "59.5",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2011",
        "Population": "2978599",
        "Life.expectancy": "59.2",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2010",
        "Population": "2883167",
        "Life.expectancy": "58.8",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2009",
        "Population": "284331",
        "Life.expectancy": "58.6",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2008",
        "Population": "2729431",
        "Life.expectancy": "58.1",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2007",
        "Population": "26616792",
        "Life.expectancy": "57.5",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2006",
        "Population": "2589345",
        "Life.expectancy": "57.3",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2005",
        "Population": "257798",
        "Life.expectancy": "57.3",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2004",
        "Population": "24118979",
        "Life.expectancy": "57",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2003",
        "Population": "2364851",
        "Life.expectancy": "56.7",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2002",
        "Population": "21979923",
        "Life.expectancy": "56.2",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2001",
        "Population": "2966463",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "Afghanistan",
        "Year": "2000",
        "Population": "293756",
        "Life.expectancy": "54.8",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2015",
        "Population": "28873",
        "Life.expectancy": "77.8",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2014",
        "Population": "288914",
        "Life.expectancy": "77.5",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2013",
        "Population": "289592",
        "Life.expectancy": "77.2",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2012",
        "Population": "2941",
        "Life.expectancy": "76.9",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2011",
        "Population": "295195",
        "Life.expectancy": "76.6",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2010",
        "Population": "291321",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2009",
        "Population": "2927519",
        "Life.expectancy": "76.1",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2008",
        "Population": "2947314",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2007",
        "Population": "29717",
        "Life.expectancy": "75.9",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2006",
        "Population": "2992547",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2005",
        "Population": "311487",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2004",
        "Population": "326939",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2003",
        "Population": "339616",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2002",
        "Population": "3511",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2001",
        "Population": "36173",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Albania",
        "Year": "2000",
        "Population": "38927",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2015",
        "Population": "39871528",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2014",
        "Population": "39113313",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2013",
        "Population": "38338562",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2012",
        "Population": "37565847",
        "Life.expectancy": "75.1",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2011",
        "Population": "36819558",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2010",
        "Population": "36117637",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2009",
        "Population": "3546576",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2008",
        "Population": "3486715",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2007",
        "Population": "34376",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2006",
        "Population": "33777915",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2005",
        "Population": "33288437",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2004",
        "Population": "3283196",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2003",
        "Population": "3243514",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2002",
        "Population": "3199546",
        "Life.expectancy": "71.6",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2001",
        "Population": "31592153",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Algeria",
        "Year": "2000",
        "Population": "3118366",
        "Life.expectancy": "71.3",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2015",
        "Population": "2785935",
        "Life.expectancy": "52.4",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2014",
        "Population": "2692466",
        "Life.expectancy": "51.7",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2013",
        "Population": "2599834",
        "Life.expectancy": "51.1",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2012",
        "Population": "259615",
        "Life.expectancy": "56",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2011",
        "Population": "24218565",
        "Life.expectancy": "51",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2010",
        "Population": "23369131",
        "Life.expectancy": "49.6",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2009",
        "Population": "22549547",
        "Life.expectancy": "49.1",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2008",
        "Population": "2175942",
        "Life.expectancy": "48.7",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2007",
        "Population": "2997687",
        "Life.expectancy": "48.2",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2006",
        "Population": "2262399",
        "Life.expectancy": "47.7",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2005",
        "Population": "19552542",
        "Life.expectancy": "47.4",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2004",
        "Population": "18865716",
        "Life.expectancy": "47.1",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2003",
        "Population": "1823369",
        "Life.expectancy": "46.8",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2002",
        "Population": "17572649",
        "Life.expectancy": "46.5",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2001",
        "Population": "16983266",
        "Life.expectancy": "45.7",
        "Status": "Developing"
      },
      {
        "Country": "Angola",
        "Year": "2000",
        "Population": "1644924",
        "Life.expectancy": "45.3",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "76.4",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "76.1",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "75.9",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "75.7",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Antigua and Barbuda",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2015",
        "Population": "43417765",
        "Life.expectancy": "76.3",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2014",
        "Population": "42981515",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2013",
        "Population": "42539925",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2012",
        "Population": "4296739",
        "Life.expectancy": "75.9",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2011",
        "Population": "41656879",
        "Life.expectancy": "75.7",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2010",
        "Population": "41223889",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2009",
        "Population": "479947",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2008",
        "Population": "4382389",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2007",
        "Population": "3997224",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2006",
        "Population": "3955889",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2005",
        "Population": "39145488",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2004",
        "Population": "38728696",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2003",
        "Population": "3839379",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2002",
        "Population": "3788937",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2001",
        "Population": "3747159",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Argentina",
        "Year": "2000",
        "Population": "3757452",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2015",
        "Population": "291695",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2014",
        "Population": "29622",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2013",
        "Population": "289359",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2012",
        "Population": "2881922",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2011",
        "Population": "2875581",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2010",
        "Population": "2877311",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2009",
        "Population": "2888584",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2008",
        "Population": "29822",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2007",
        "Population": "293356",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2006",
        "Population": "29585",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2005",
        "Population": "2981259",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2004",
        "Population": "3612",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2003",
        "Population": "31786",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2002",
        "Population": "333897",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2001",
        "Population": "35655",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Armenia",
        "Year": "2000",
        "Population": "369588",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Australia",
        "Year": "2015",
        "Population": "23789338",
        "Life.expectancy": "82.8",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2014",
        "Population": "2346694",
        "Life.expectancy": "82.7",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2013",
        "Population": "23117353",
        "Life.expectancy": "82.5",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2012",
        "Population": "22728254",
        "Life.expectancy": "82.3",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2011",
        "Population": "223424",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2010",
        "Population": "223175",
        "Life.expectancy": "81.9",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2009",
        "Population": "216917",
        "Life.expectancy": "81.7",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2008",
        "Population": "212492",
        "Life.expectancy": "81.3",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2007",
        "Population": "28276",
        "Life.expectancy": "81.3",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2006",
        "Population": "26979",
        "Life.expectancy": "81.2",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2005",
        "Population": "23948",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2004",
        "Population": "21274",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2003",
        "Population": "198954",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2002",
        "Population": "196514",
        "Life.expectancy": "79.9",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2001",
        "Population": "19413",
        "Life.expectancy": "79.9",
        "Status": "Developed"
      },
      {
        "Country": "Australia",
        "Year": "2000",
        "Population": "19153",
        "Life.expectancy": "79.5",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2015",
        "Population": "8633169",
        "Life.expectancy": "81.5",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2014",
        "Population": "8541575",
        "Life.expectancy": "81.4",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2013",
        "Population": "8479375",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2012",
        "Population": "8429991",
        "Life.expectancy": "88",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2011",
        "Population": "8391643",
        "Life.expectancy": "88",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2010",
        "Population": "836344",
        "Life.expectancy": "84",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2009",
        "Population": "8343323",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2008",
        "Population": "8321496",
        "Life.expectancy": "84",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2007",
        "Population": "8295487",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2006",
        "Population": "8268641",
        "Life.expectancy": "79.8",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2005",
        "Population": "8227829",
        "Life.expectancy": "79.4",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2004",
        "Population": "8171966",
        "Life.expectancy": "79.3",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2003",
        "Population": "8121423",
        "Life.expectancy": "78.8",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2002",
        "Population": "881957",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2001",
        "Population": "842293",
        "Life.expectancy": "78.6",
        "Status": "Developed"
      },
      {
        "Country": "Austria",
        "Year": "2000",
        "Population": "811566",
        "Life.expectancy": "78.1",
        "Status": "Developed"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2015",
        "Population": "9649341",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2014",
        "Population": "953579",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2013",
        "Population": "941681",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2012",
        "Population": "9295784",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2011",
        "Population": "917382",
        "Life.expectancy": "71.6",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2010",
        "Population": "954332",
        "Life.expectancy": "71.1",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2009",
        "Population": "8947243",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2008",
        "Population": "87634",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2007",
        "Population": "85813",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2006",
        "Population": "848455",
        "Life.expectancy": "69.2",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2005",
        "Population": "839185",
        "Life.expectancy": "68.4",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2004",
        "Population": "8365",
        "Life.expectancy": "68.4",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2003",
        "Population": "82341",
        "Life.expectancy": "67.8",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2002",
        "Population": "817195",
        "Life.expectancy": "67.8",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2001",
        "Population": "81112",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "Azerbaijan",
        "Year": "2000",
        "Population": "8486",
        "Life.expectancy": "66.6",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "76.1",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Bahamas",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "76.9",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "76.8",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "76.7",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "76.5",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "76.1",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "76.1",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "75.8",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Bahrain",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2015",
        "Population": "1612886",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2014",
        "Population": "15945279",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2013",
        "Population": "157571292",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2012",
        "Population": "15572753",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2011",
        "Population": "153911916",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2010",
        "Population": "15214912",
        "Life.expectancy": "69.9",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2009",
        "Population": "1545478",
        "Life.expectancy": "69.5",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2008",
        "Population": "14885814",
        "Life.expectancy": "69.1",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2007",
        "Population": "147139191",
        "Life.expectancy": "68.6",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2006",
        "Population": "1453684",
        "Life.expectancy": "68.2",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2005",
        "Population": "14343111",
        "Life.expectancy": "67.8",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2004",
        "Population": "14137489",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2003",
        "Population": "139191",
        "Life.expectancy": "66.8",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2002",
        "Population": "1366667",
        "Life.expectancy": "66.3",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2001",
        "Population": "1341716",
        "Life.expectancy": "65.8",
        "Status": "Developing"
      },
      {
        "Country": "Bangladesh",
        "Year": "2000",
        "Population": "131581243",
        "Life.expectancy": "65.3",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "75.1",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Barbados",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2015",
        "Population": "9489616",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2014",
        "Population": "9474511",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2013",
        "Population": "9465997",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2012",
        "Population": "9464495",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2011",
        "Population": "9473172",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2010",
        "Population": "949583",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2009",
        "Population": "956765",
        "Life.expectancy": "70",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2008",
        "Population": "9527985",
        "Life.expectancy": "70",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2007",
        "Population": "956953",
        "Life.expectancy": "69.8",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2006",
        "Population": "964924",
        "Life.expectancy": "68.9",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2005",
        "Population": "9663915",
        "Life.expectancy": "68.1",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2004",
        "Population": "973146",
        "Life.expectancy": "68.2",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2003",
        "Population": "9796749",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2002",
        "Population": "9865548",
        "Life.expectancy": "67.2",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2001",
        "Population": "9928549",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Belarus",
        "Year": "2000",
        "Population": "997961",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Belgium",
        "Year": "2015",
        "Population": "11274196",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2014",
        "Population": "112957",
        "Life.expectancy": "89",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2013",
        "Population": "11182817",
        "Life.expectancy": "87",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2012",
        "Population": "11128246",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2011",
        "Population": "1147744",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2010",
        "Population": "1895586",
        "Life.expectancy": "80",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2009",
        "Population": "1796493",
        "Life.expectancy": "79.8",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2008",
        "Population": "179973",
        "Life.expectancy": "79.5",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2007",
        "Population": "16257",
        "Life.expectancy": "79.5",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2006",
        "Population": "1547958",
        "Life.expectancy": "79.4",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2005",
        "Population": "1478617",
        "Life.expectancy": "78.9",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2004",
        "Population": "1421137",
        "Life.expectancy": "78.8",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2003",
        "Population": "1376133",
        "Life.expectancy": "78.3",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2002",
        "Population": "1332785",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2001",
        "Population": "128657",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Belgium",
        "Year": "2000",
        "Population": "125125",
        "Life.expectancy": "77.6",
        "Status": "Developed"
      },
      {
        "Country": "Belize",
        "Year": "2015",
        "Population": "359288",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2014",
        "Population": "351694",
        "Life.expectancy": "70",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2013",
        "Population": "344181",
        "Life.expectancy": "69.8",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2012",
        "Population": "33671",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2011",
        "Population": "329192",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2010",
        "Population": "32168",
        "Life.expectancy": "69.5",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2009",
        "Population": "313929",
        "Life.expectancy": "69.5",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2008",
        "Population": "36165",
        "Life.expectancy": "69.6",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2007",
        "Population": "29847",
        "Life.expectancy": "69.6",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2006",
        "Population": "29747",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2005",
        "Population": "283277",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2004",
        "Population": "27689",
        "Life.expectancy": "68.7",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2003",
        "Population": "26913",
        "Life.expectancy": "68.4",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2002",
        "Population": "26226",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2001",
        "Population": "254984",
        "Life.expectancy": "68.2",
        "Status": "Developing"
      },
      {
        "Country": "Belize",
        "Year": "2000",
        "Population": "247315",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2015",
        "Population": "1575952",
        "Life.expectancy": "60",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2014",
        "Population": "1286712",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2013",
        "Population": "14451",
        "Life.expectancy": "59.5",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2012",
        "Population": "972916",
        "Life.expectancy": "59.3",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2011",
        "Population": "94682",
        "Life.expectancy": "59.1",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2010",
        "Population": "9199259",
        "Life.expectancy": "58.7",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2009",
        "Population": "894476",
        "Life.expectancy": "58.4",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2008",
        "Population": "8696916",
        "Life.expectancy": "57.6",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2007",
        "Population": "8454791",
        "Life.expectancy": "57.1",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2006",
        "Population": "8216896",
        "Life.expectancy": "56.8",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2005",
        "Population": "7982225",
        "Life.expectancy": "56.5",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2004",
        "Population": "7754",
        "Life.expectancy": "56.1",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2003",
        "Population": "752555",
        "Life.expectancy": "55.8",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2002",
        "Population": "7295394",
        "Life.expectancy": "55.6",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2001",
        "Population": "776733",
        "Life.expectancy": "55.5",
        "Status": "Developing"
      },
      {
        "Country": "Benin",
        "Year": "2000",
        "Population": "6865951",
        "Life.expectancy": "55.4",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2015",
        "Population": "787386",
        "Life.expectancy": "69.8",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2014",
        "Population": "776448",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2013",
        "Population": "764961",
        "Life.expectancy": "69.1",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2012",
        "Population": "752967",
        "Life.expectancy": "68.7",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2011",
        "Population": "7451",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2010",
        "Population": "727641",
        "Life.expectancy": "67.9",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2009",
        "Population": "714458",
        "Life.expectancy": "67.4",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2008",
        "Population": "795",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2007",
        "Population": "686958",
        "Life.expectancy": "66.5",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2006",
        "Population": "672228",
        "Life.expectancy": "65.8",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2005",
        "Population": "656639",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2004",
        "Population": "64282",
        "Life.expectancy": "64.2",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2003",
        "Population": "623434",
        "Life.expectancy": "63.3",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2002",
        "Population": "66399",
        "Life.expectancy": "62.5",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2001",
        "Population": "5896",
        "Life.expectancy": "61.7",
        "Status": "Developing"
      },
      {
        "Country": "Bhutan",
        "Year": "2000",
        "Population": "573416",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "69.8",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "69.3",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "68.7",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "67.4",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "66.8",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "66.2",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "65.7",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "65.1",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "64.5",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "63.9",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "63.3",
        "Status": "Developing"
      },
      {
        "Country": "Bolivia (Plurinational State of)",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "62.6",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2015",
        "Population": "3535961",
        "Life.expectancy": "77.4",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2014",
        "Population": "35662",
        "Life.expectancy": "77.2",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2013",
        "Population": "364999",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2012",
        "Population": "36482",
        "Life.expectancy": "76.8",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2011",
        "Population": "3688865",
        "Life.expectancy": "76.9",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2010",
        "Population": "372284",
        "Life.expectancy": "76.4",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2009",
        "Population": "3746561",
        "Life.expectancy": "76.1",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2008",
        "Population": "3763599",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2007",
        "Population": "3774",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2006",
        "Population": "3779468",
        "Life.expectancy": "75.7",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2005",
        "Population": "378153",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2004",
        "Population": "3781287",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2003",
        "Population": "3779247",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2002",
        "Population": "377587",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2001",
        "Population": "3771284",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Year": "2000",
        "Population": "376676",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2015",
        "Population": "229197",
        "Life.expectancy": "65.7",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2014",
        "Population": "2168573",
        "Life.expectancy": "65.1",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2013",
        "Population": "212857",
        "Life.expectancy": "64.2",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2012",
        "Population": "289315",
        "Life.expectancy": "63.4",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2011",
        "Population": "251339",
        "Life.expectancy": "62.2",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2010",
        "Population": "214866",
        "Life.expectancy": "61.1",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2009",
        "Population": "1979882",
        "Life.expectancy": "59.2",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2008",
        "Population": "1946351",
        "Life.expectancy": "57.5",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2007",
        "Population": "1914414",
        "Life.expectancy": "56.9",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2006",
        "Population": "1884238",
        "Life.expectancy": "54.8",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2005",
        "Population": "1855852",
        "Life.expectancy": "51.7",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2004",
        "Population": "182933",
        "Life.expectancy": "48.1",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2003",
        "Population": "184339",
        "Life.expectancy": "46.4",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2002",
        "Population": "1779953",
        "Life.expectancy": "46",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2001",
        "Population": "1754935",
        "Life.expectancy": "46.7",
        "Status": "Developing"
      },
      {
        "Country": "Botswana",
        "Year": "2000",
        "Population": "172834",
        "Life.expectancy": "47.8",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2015",
        "Population": "2596218",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2014",
        "Population": "24213133",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2013",
        "Population": "2248632",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2012",
        "Population": "256983",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2011",
        "Population": "198686688",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2010",
        "Population": "196796269",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2009",
        "Population": "194895996",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2008",
        "Population": "19297929",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2007",
        "Population": "19126637",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2006",
        "Population": "18912412",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2005",
        "Population": "186917361",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2004",
        "Population": "184738458",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2003",
        "Population": "182482149",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2002",
        "Population": "1815121",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2001",
        "Population": "1777567",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Brazil",
        "Year": "2000",
        "Population": "175287587",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "77.7",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "77.6",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "77.1",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "78.3",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "77.4",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "76.9",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "76.8",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "77.2",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "76.3",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "76.4",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Brunei Darussalam",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Bulgaria",
        "Year": "2015",
        "Population": "7177991",
        "Life.expectancy": "74.5",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2014",
        "Population": "7223938",
        "Life.expectancy": "74.3",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2013",
        "Population": "7265115",
        "Life.expectancy": "74.1",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2012",
        "Population": "735888",
        "Life.expectancy": "73.9",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2011",
        "Population": "7348328",
        "Life.expectancy": "73.7",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2010",
        "Population": "7395599",
        "Life.expectancy": "73.4",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2009",
        "Population": "7444443",
        "Life.expectancy": "73.2",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2008",
        "Population": "7492561",
        "Life.expectancy": "72.9",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2007",
        "Population": "7545338",
        "Life.expectancy": "72.6",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2006",
        "Population": "76122",
        "Life.expectancy": "72.2",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2005",
        "Population": "7658972",
        "Life.expectancy": "72.1",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2004",
        "Population": "771686",
        "Life.expectancy": "72.2",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2003",
        "Population": "7775327",
        "Life.expectancy": "72",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2002",
        "Population": "7837161",
        "Life.expectancy": "71.8",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2001",
        "Population": "89142",
        "Life.expectancy": "71.6",
        "Status": "Developed"
      },
      {
        "Country": "Bulgaria",
        "Year": "2000",
        "Population": "817172",
        "Life.expectancy": "71.1",
        "Status": "Developed"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2015",
        "Population": "1811624",
        "Life.expectancy": "59.9",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2014",
        "Population": "17585977",
        "Life.expectancy": "59.3",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2013",
        "Population": "1772723",
        "Life.expectancy": "59",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2012",
        "Population": "16571216",
        "Life.expectancy": "58.6",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2011",
        "Population": "168194",
        "Life.expectancy": "58.1",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2010",
        "Population": "1565217",
        "Life.expectancy": "57.5",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2009",
        "Population": "1514199",
        "Life.expectancy": "56.9",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2008",
        "Population": "14689726",
        "Life.expectancy": "56.1",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2007",
        "Population": "1425221",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2006",
        "Population": "13829177",
        "Life.expectancy": "54.3",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2005",
        "Population": "1342193",
        "Life.expectancy": "53.3",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2004",
        "Population": "133569",
        "Life.expectancy": "52.4",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2003",
        "Population": "12654621",
        "Life.expectancy": "51.6",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2002",
        "Population": "122931",
        "Life.expectancy": "51",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2001",
        "Population": "11944587",
        "Life.expectancy": "56",
        "Status": "Developing"
      },
      {
        "Country": "Burkina Faso",
        "Year": "2000",
        "Population": "1167942",
        "Life.expectancy": "51",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2015",
        "Population": "119927",
        "Life.expectancy": "59.6",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2014",
        "Population": "989179",
        "Life.expectancy": "59.1",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2013",
        "Population": "96186",
        "Life.expectancy": "58.6",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2012",
        "Population": "931971",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2011",
        "Population": "94358",
        "Life.expectancy": "57.4",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2010",
        "Population": "876693",
        "Life.expectancy": "56.8",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2009",
        "Population": "848931",
        "Life.expectancy": "56.2",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2008",
        "Population": "8212264",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2007",
        "Population": "7939573",
        "Life.expectancy": "54.8",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2006",
        "Population": "7675338",
        "Life.expectancy": "54.1",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2005",
        "Population": "7423289",
        "Life.expectancy": "53.4",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2004",
        "Population": "7182451",
        "Life.expectancy": "52.6",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2003",
        "Population": "6953113",
        "Life.expectancy": "51.9",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2002",
        "Population": "6741569",
        "Life.expectancy": "51.5",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2001",
        "Population": "6555829",
        "Life.expectancy": "51.3",
        "Status": "Developing"
      },
      {
        "Country": "Burundi",
        "Year": "2000",
        "Population": "6476",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "53.3",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "52.8",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "52.3",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "52",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "51.7",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "51.5",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "51",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "54",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "49.9",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "49.4",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "48.7",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "48.2",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "48",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "47.7",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "47.8",
        "Status": "Developing"
      },
      {
        "Country": "CÃ´te d'Ivoire",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "47.9",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2015",
        "Population": "532913",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2014",
        "Population": "526437",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2013",
        "Population": "5216",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2012",
        "Population": "513979",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2011",
        "Population": "5867",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2010",
        "Population": "52384",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2009",
        "Population": "496963",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2008",
        "Population": "491723",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2007",
        "Population": "486438",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2006",
        "Population": "48795",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2005",
        "Population": "474567",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2004",
        "Population": "467664",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2003",
        "Population": "46147",
        "Life.expectancy": "71.1",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2002",
        "Population": "45216",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2001",
        "Population": "443716",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Cabo Verde",
        "Year": "2000",
        "Population": "43579",
        "Life.expectancy": "69.9",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2015",
        "Population": "15517635",
        "Life.expectancy": "68.7",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2014",
        "Population": "152779",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2013",
        "Population": "1522692",
        "Life.expectancy": "67.8",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2012",
        "Population": "14776866",
        "Life.expectancy": "67.4",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2011",
        "Population": "14537886",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2010",
        "Population": "143874",
        "Life.expectancy": "66.6",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2009",
        "Population": "14928",
        "Life.expectancy": "66.1",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2008",
        "Population": "138859",
        "Life.expectancy": "65.6",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2007",
        "Population": "13676693",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2006",
        "Population": "13474489",
        "Life.expectancy": "64.1",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2005",
        "Population": "132721",
        "Life.expectancy": "62.9",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2004",
        "Population": "1363377",
        "Life.expectancy": "61.5",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2003",
        "Population": "12853124",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2002",
        "Population": "12634729",
        "Life.expectancy": "59.3",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2001",
        "Population": "1242473",
        "Life.expectancy": "58.5",
        "Status": "Developing"
      },
      {
        "Country": "Cambodia",
        "Year": "2000",
        "Population": "12152354",
        "Life.expectancy": "57.7",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2015",
        "Population": "22834522",
        "Life.expectancy": "57.3",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2014",
        "Population": "2223994",
        "Life.expectancy": "56.7",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2013",
        "Population": "21655715",
        "Life.expectancy": "56.4",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2012",
        "Population": "2182383",
        "Life.expectancy": "55.9",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2011",
        "Population": "252447",
        "Life.expectancy": "55.6",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2010",
        "Population": "1997495",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2009",
        "Population": "19432541",
        "Life.expectancy": "54.8",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2008",
        "Population": "18978",
        "Life.expectancy": "54.2",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2007",
        "Population": "18395389",
        "Life.expectancy": "53.6",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2006",
        "Population": "17899562",
        "Life.expectancy": "53.3",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2005",
        "Population": "1742795",
        "Life.expectancy": "52.8",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2004",
        "Population": "1695981",
        "Life.expectancy": "52.1",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2003",
        "Population": "16513822",
        "Life.expectancy": "51.8",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2002",
        "Population": "1684886",
        "Life.expectancy": "51.6",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2001",
        "Population": "15671927",
        "Life.expectancy": "51.5",
        "Status": "Developing"
      },
      {
        "Country": "Cameroon",
        "Year": "2000",
        "Population": "15274234",
        "Life.expectancy": "51.4",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2015",
        "Population": "3584861",
        "Life.expectancy": "82.2",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2014",
        "Population": "35544564",
        "Life.expectancy": "82",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2013",
        "Population": "35155451",
        "Life.expectancy": "81.8",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2012",
        "Population": "3475545",
        "Life.expectancy": "81.6",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2011",
        "Population": "3434278",
        "Life.expectancy": "81.5",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2010",
        "Population": "345274",
        "Life.expectancy": "81.2",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2009",
        "Population": "33628571",
        "Life.expectancy": "81",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2008",
        "Population": "33245773",
        "Life.expectancy": "87",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2007",
        "Population": "32887928",
        "Life.expectancy": "85",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2006",
        "Population": "325755",
        "Life.expectancy": "85",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2005",
        "Population": "32312",
        "Life.expectancy": "81",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2004",
        "Population": "31995",
        "Life.expectancy": "80",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2003",
        "Population": "31676",
        "Life.expectancy": "79.7",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2002",
        "Population": "31362",
        "Life.expectancy": "79.5",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2001",
        "Population": "31819",
        "Life.expectancy": "79.4",
        "Status": "Developing"
      },
      {
        "Country": "Canada",
        "Year": "2000",
        "Population": "37697",
        "Life.expectancy": "79.1",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2015",
        "Population": "45461",
        "Life.expectancy": "52.5",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2014",
        "Population": "4515392",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2013",
        "Population": "4499653",
        "Life.expectancy": "49.9",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2012",
        "Population": "449416",
        "Life.expectancy": "53",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2011",
        "Population": "4476153",
        "Life.expectancy": "49.8",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2010",
        "Population": "4448525",
        "Life.expectancy": "49.2",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2009",
        "Population": "44423",
        "Life.expectancy": "48.6",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2008",
        "Population": "4345386",
        "Life.expectancy": "47.6",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2007",
        "Population": "42758",
        "Life.expectancy": "46.8",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2006",
        "Population": "421758",
        "Life.expectancy": "46.3",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2005",
        "Population": "412791",
        "Life.expectancy": "45.9",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2004",
        "Population": "45536",
        "Life.expectancy": "45.7",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2003",
        "Population": "3981665",
        "Life.expectancy": "45.7",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2002",
        "Population": "397612",
        "Life.expectancy": "45.6",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2001",
        "Population": "383223",
        "Life.expectancy": "45.6",
        "Status": "Developing"
      },
      {
        "Country": "Central African Republic",
        "Year": "2000",
        "Population": "3754986",
        "Life.expectancy": "46",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2015",
        "Population": "149413",
        "Life.expectancy": "53.1",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2014",
        "Population": "13569438",
        "Life.expectancy": "52.6",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2013",
        "Population": "13133589",
        "Life.expectancy": "52.2",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2012",
        "Population": "1275135",
        "Life.expectancy": "51.8",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2011",
        "Population": "12288651",
        "Life.expectancy": "51.6",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2010",
        "Population": "1188722",
        "Life.expectancy": "51.2",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2009",
        "Population": "1152786",
        "Life.expectancy": "57",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2008",
        "Population": "11133861",
        "Life.expectancy": "49.6",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2007",
        "Population": "177578",
        "Life.expectancy": "49.4",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2006",
        "Population": "1421597",
        "Life.expectancy": "48.5",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2005",
        "Population": "1679",
        "Life.expectancy": "48.6",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2004",
        "Population": "97143",
        "Life.expectancy": "48.5",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2003",
        "Population": "935321",
        "Life.expectancy": "48.4",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2002",
        "Population": "91689",
        "Life.expectancy": "48.1",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2001",
        "Population": "866312",
        "Life.expectancy": "48",
        "Status": "Developing"
      },
      {
        "Country": "Chad",
        "Year": "2000",
        "Population": "8342559",
        "Life.expectancy": "47.6",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2015",
        "Population": "17762681",
        "Life.expectancy": "85",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2014",
        "Population": "17613798",
        "Life.expectancy": "83",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2013",
        "Population": "17462982",
        "Life.expectancy": "81",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2012",
        "Population": "1739746",
        "Life.expectancy": "79.9",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2011",
        "Population": "17153357",
        "Life.expectancy": "79.8",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2010",
        "Population": "16993354",
        "Life.expectancy": "79.1",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2009",
        "Population": "16829442",
        "Life.expectancy": "79.3",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2008",
        "Population": "16661942",
        "Life.expectancy": "79.6",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2007",
        "Population": "16491687",
        "Life.expectancy": "78.9",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2006",
        "Population": "16319792",
        "Life.expectancy": "78.9",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2005",
        "Population": "1614764",
        "Life.expectancy": "78.4",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2004",
        "Population": "15973778",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2003",
        "Population": "15799542",
        "Life.expectancy": "77.9",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2002",
        "Population": "15623635",
        "Life.expectancy": "77.8",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2001",
        "Population": "15444969",
        "Life.expectancy": "77.3",
        "Status": "Developing"
      },
      {
        "Country": "Chile",
        "Year": "2000",
        "Population": "15262754",
        "Life.expectancy": "77.3",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2015",
        "Population": "137122",
        "Life.expectancy": "76.1",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2014",
        "Population": "136427",
        "Life.expectancy": "75.8",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2013",
        "Population": "135738",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2012",
        "Population": "135695",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2011",
        "Population": "134413",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2010",
        "Population": "133775",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2009",
        "Population": "133126",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2008",
        "Population": "1324655",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2007",
        "Population": "1317885",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2006",
        "Population": "13112",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2005",
        "Population": "13372",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2004",
        "Population": "129675",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2003",
        "Population": "12884",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2002",
        "Population": "1284",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2001",
        "Population": "127185",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "China",
        "Year": "2000",
        "Population": "1262645",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2015",
        "Population": "48228697",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2014",
        "Population": "47791911",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2013",
        "Population": "47342981",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2012",
        "Population": "46881475",
        "Life.expectancy": "74.3",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2011",
        "Population": "4646646",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2010",
        "Population": "4591897",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2009",
        "Population": "45416181",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2008",
        "Population": "4491544",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2007",
        "Population": "44374572",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2006",
        "Population": "43835722",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2005",
        "Population": "43285634",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2004",
        "Population": "42724163",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2003",
        "Population": "42152151",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2002",
        "Population": "41572491",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2001",
        "Population": "498899",
        "Life.expectancy": "71.5",
        "Status": "Developing"
      },
      {
        "Country": "Colombia",
        "Year": "2000",
        "Population": "443958",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2015",
        "Population": "777424",
        "Life.expectancy": "63.5",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2014",
        "Population": "759385",
        "Life.expectancy": "63.2",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2013",
        "Population": "7415",
        "Life.expectancy": "62.9",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2012",
        "Population": "723868",
        "Life.expectancy": "62.5",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2011",
        "Population": "76569",
        "Life.expectancy": "62.2",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2010",
        "Population": "689692",
        "Life.expectancy": "61.8",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2009",
        "Population": "673252",
        "Life.expectancy": "61.3",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2008",
        "Population": "657229",
        "Life.expectancy": "61",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2007",
        "Population": "64162",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2006",
        "Population": "626425",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2005",
        "Population": "611627",
        "Life.expectancy": "60",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2004",
        "Population": "597228",
        "Life.expectancy": "59.8",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2003",
        "Population": "583211",
        "Life.expectancy": "59.6",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2002",
        "Population": "569479",
        "Life.expectancy": "59.5",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2001",
        "Population": "555888",
        "Life.expectancy": "59.5",
        "Status": "Developing"
      },
      {
        "Country": "Comoros",
        "Year": "2000",
        "Population": "542357",
        "Life.expectancy": "59.5",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "64.7",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "64.2",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "63.9",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "63.7",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "62.9",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "59.4",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "58.2",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "56.9",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "54.1",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "53.2",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "52.6",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "52.7",
        "Status": "Developing"
      },
      {
        "Country": "Congo",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "52.9",
        "Status": "Developing"
      },
      {
        "Country": "Cook Islands",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "0",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2015",
        "Population": "487852",
        "Life.expectancy": "79.6",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2014",
        "Population": "4757575",
        "Life.expectancy": "79.5",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2013",
        "Population": "47641",
        "Life.expectancy": "79.4",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2012",
        "Population": "4654122",
        "Life.expectancy": "79.2",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2011",
        "Population": "46474",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2010",
        "Population": "454528",
        "Life.expectancy": "78.1",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2009",
        "Population": "4488263",
        "Life.expectancy": "79.2",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2008",
        "Population": "442958",
        "Life.expectancy": "78.9",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2007",
        "Population": "4369469",
        "Life.expectancy": "78.9",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2006",
        "Population": "438794",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2005",
        "Population": "4247841",
        "Life.expectancy": "78.6",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2004",
        "Population": "418738",
        "Life.expectancy": "77.7",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2003",
        "Population": "4125971",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2002",
        "Population": "46324",
        "Life.expectancy": "78.3",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2001",
        "Population": "3996798",
        "Life.expectancy": "77.5",
        "Status": "Developing"
      },
      {
        "Country": "Costa Rica",
        "Year": "2000",
        "Population": "3925443",
        "Life.expectancy": "77.6",
        "Status": "Developing"
      },
      {
        "Country": "Croatia",
        "Year": "2015",
        "Population": "42364",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2014",
        "Population": "4238389",
        "Life.expectancy": "77.8",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2013",
        "Population": "4255689",
        "Life.expectancy": "77.7",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2012",
        "Population": "4267558",
        "Life.expectancy": "77.1",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2011",
        "Population": "428622",
        "Life.expectancy": "77",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2010",
        "Population": "4417781",
        "Life.expectancy": "76.6",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2009",
        "Population": "442978",
        "Life.expectancy": "76.3",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2008",
        "Population": "443458",
        "Life.expectancy": "76",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2007",
        "Population": "4436",
        "Life.expectancy": "75.8",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2006",
        "Population": "444",
        "Life.expectancy": "75.9",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2005",
        "Population": "4442",
        "Life.expectancy": "75.2",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2004",
        "Population": "4439",
        "Life.expectancy": "75.4",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2003",
        "Population": "444",
        "Life.expectancy": "74.7",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2002",
        "Population": "444",
        "Life.expectancy": "74.8",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2001",
        "Population": "444",
        "Life.expectancy": "74.9",
        "Status": "Developed"
      },
      {
        "Country": "Croatia",
        "Year": "2000",
        "Population": "4426",
        "Life.expectancy": "74.7",
        "Status": "Developed"
      },
      {
        "Country": "Cuba",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "79.1",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "78.7",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "78.7",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "78.8",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "78.1",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "77.9",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "78.1",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "77.2",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "77.3",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "77.4",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "77.7",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "76.7",
        "Status": "Developing"
      },
      {
        "Country": "Cuba",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "76.9",
        "Status": "Developing"
      },
      {
        "Country": "Cyprus",
        "Year": "2015",
        "Population": "116985",
        "Life.expectancy": "85",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2014",
        "Population": "115239",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2013",
        "Population": "1143896",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2012",
        "Population": "113562",
        "Life.expectancy": "80",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2011",
        "Population": "1124835",
        "Life.expectancy": "79.7",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2010",
        "Population": "111267",
        "Life.expectancy": "79.5",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2009",
        "Population": "19876",
        "Life.expectancy": "79.3",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2008",
        "Population": "181563",
        "Life.expectancy": "79.1",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2007",
        "Population": "163712",
        "Life.expectancy": "78.9",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2006",
        "Population": "14559",
        "Life.expectancy": "78.8",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2005",
        "Population": "127658",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2004",
        "Population": "1141",
        "Life.expectancy": "78.6",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2003",
        "Population": "993563",
        "Life.expectancy": "78.5",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2002",
        "Population": "976966",
        "Life.expectancy": "78.4",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2001",
        "Population": "96282",
        "Life.expectancy": "78.2",
        "Status": "Developed"
      },
      {
        "Country": "Cyprus",
        "Year": "2000",
        "Population": "943286",
        "Life.expectancy": "78.1",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "78.8",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "78.6",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "78.2",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "77.8",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "77.5",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "77.1",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "77",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "76.8",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "76.5",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "75.9",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "75.8",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "75.2",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "75.3",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "75.1",
        "Status": "Developed"
      },
      {
        "Country": "Czechia",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "74.7",
        "Status": "Developed"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "69.8",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "68.7",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "68.6",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "68.4",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "68.1",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "67.6",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "66.6",
        "Status": "Developing"
      },
      {
        "Country": "Democratic People's Republic of Korea",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "65.4",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "59.8",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "59.3",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "58.8",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "58.3",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "57.9",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "57.4",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "56.7",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "56.3",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "55.7",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "54.3",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "53.5",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "52.8",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "52.1",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "51.8",
        "Status": "Developing"
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "51.3",
        "Status": "Developing"
      },
      {
        "Country": "Denmark",
        "Year": "2015",
        "Population": "5683483",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2014",
        "Population": "5643475",
        "Life.expectancy": "84",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2013",
        "Population": "5614932",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2012",
        "Population": "5591572",
        "Life.expectancy": "80",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2011",
        "Population": "557572",
        "Life.expectancy": "79.7",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2010",
        "Population": "5547683",
        "Life.expectancy": "79.2",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2009",
        "Population": "552395",
        "Life.expectancy": "78.9",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2008",
        "Population": "5493621",
        "Life.expectancy": "78.8",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2007",
        "Population": "5461438",
        "Life.expectancy": "78.4",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2006",
        "Population": "5437272",
        "Life.expectancy": "78.1",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2005",
        "Population": "5419432",
        "Life.expectancy": "78.1",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2004",
        "Population": "544523",
        "Life.expectancy": "77.7",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2003",
        "Population": "539574",
        "Life.expectancy": "77.3",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2002",
        "Population": "5375931",
        "Life.expectancy": "77",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2001",
        "Population": "5358783",
        "Life.expectancy": "77",
        "Status": "Developed"
      },
      {
        "Country": "Denmark",
        "Year": "2000",
        "Population": "5339616",
        "Life.expectancy": "76.9",
        "Status": "Developed"
      },
      {
        "Country": "Djibouti",
        "Year": "2015",
        "Population": "927414",
        "Life.expectancy": "63.5",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2014",
        "Population": "912164",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2013",
        "Population": "896688",
        "Life.expectancy": "62.7",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2012",
        "Population": "881185",
        "Life.expectancy": "62.2",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2011",
        "Population": "865937",
        "Life.expectancy": "61.8",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2010",
        "Population": "851146",
        "Life.expectancy": "61.3",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2009",
        "Population": "83684",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2008",
        "Population": "822934",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2007",
        "Population": "8942",
        "Life.expectancy": "59.8",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2006",
        "Population": "79628",
        "Life.expectancy": "59.1",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2005",
        "Population": "783254",
        "Life.expectancy": "58.6",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2004",
        "Population": "77752",
        "Life.expectancy": "58.1",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2003",
        "Population": "758615",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2002",
        "Population": "746221",
        "Life.expectancy": "57.9",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2001",
        "Population": "732711",
        "Life.expectancy": "57.7",
        "Status": "Developing"
      },
      {
        "Country": "Djibouti",
        "Year": "2000",
        "Population": "717584",
        "Life.expectancy": "57.4",
        "Status": "Developing"
      },
      {
        "Country": "Dominica",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "0",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2015",
        "Population": "1528394",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2014",
        "Population": "145844",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2013",
        "Population": "1281296",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2012",
        "Population": "115495",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2011",
        "Population": "12795",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2010",
        "Population": "9897985",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2009",
        "Population": "9767758",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2008",
        "Population": "963652",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2007",
        "Population": "954353",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2006",
        "Population": "9371338",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2005",
        "Population": "9237566",
        "Life.expectancy": "69.7",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2004",
        "Population": "912998",
        "Life.expectancy": "69.3",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2003",
        "Population": "896776",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2002",
        "Population": "8832285",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2001",
        "Population": "8697126",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Dominican Republic",
        "Year": "2000",
        "Population": "8562622",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2015",
        "Population": "16144368",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2014",
        "Population": "1593112",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2013",
        "Population": "15661547",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2012",
        "Population": "15419666",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2011",
        "Population": "15177355",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2010",
        "Population": "1493469",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2009",
        "Population": "14691275",
        "Life.expectancy": "75.1",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2008",
        "Population": "14447562",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2007",
        "Population": "1425453",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2006",
        "Population": "1396748",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2005",
        "Population": "13735233",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2004",
        "Population": "1359647",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2003",
        "Population": "1328961",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2002",
        "Population": "13726",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2001",
        "Population": "12852755",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Ecuador",
        "Year": "2000",
        "Population": "12628596",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "70",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "69.9",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "69.8",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "69.7",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "69.5",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "68.6",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "68.7",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "68.6",
        "Status": "Developing"
      },
      {
        "Country": "Egypt",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "68.8",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2015",
        "Population": "6312478",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2014",
        "Population": "6281189",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2013",
        "Population": "625777",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2012",
        "Population": "6221246",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2011",
        "Population": "619256",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2010",
        "Population": "6164626",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2009",
        "Population": "6137276",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2008",
        "Population": "61131",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2007",
        "Population": "683475",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2006",
        "Population": "656478",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2005",
        "Population": "628961",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2004",
        "Population": "6775",
        "Life.expectancy": "70",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2003",
        "Population": "5971535",
        "Life.expectancy": "69.9",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2002",
        "Population": "59433",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2001",
        "Population": "595962",
        "Life.expectancy": "68.9",
        "Status": "Developing"
      },
      {
        "Country": "El Salvador",
        "Year": "2000",
        "Population": "5867626",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2015",
        "Population": "1175389",
        "Life.expectancy": "58.2",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2014",
        "Population": "1129424",
        "Life.expectancy": "57.9",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2013",
        "Population": "183746",
        "Life.expectancy": "57.4",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2012",
        "Population": "138593",
        "Life.expectancy": "56.7",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2011",
        "Population": "99429",
        "Life.expectancy": "56.2",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2010",
        "Population": "95114",
        "Life.expectancy": "56.1",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2009",
        "Population": "99111",
        "Life.expectancy": "55.7",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2008",
        "Population": "868418",
        "Life.expectancy": "55.4",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2007",
        "Population": "829327",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2006",
        "Population": "792217",
        "Life.expectancy": "54.8",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2005",
        "Population": "757317",
        "Life.expectancy": "54.4",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2004",
        "Population": "724817",
        "Life.expectancy": "54.1",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2003",
        "Population": "694611",
        "Life.expectancy": "53.8",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2002",
        "Population": "66647",
        "Life.expectancy": "53.5",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2001",
        "Population": "639762",
        "Life.expectancy": "53.1",
        "Status": "Developing"
      },
      {
        "Country": "Equatorial Guinea",
        "Year": "2000",
        "Population": "614323",
        "Life.expectancy": "52.7",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "64.7",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "64.4",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "63.6",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2011",
        "Population": "447469",
        "Life.expectancy": "62.9",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2010",
        "Population": "43984",
        "Life.expectancy": "62.1",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2009",
        "Population": "431334",
        "Life.expectancy": "61.4",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2008",
        "Population": "4232636",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2007",
        "Population": "4153332",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2006",
        "Population": "466648",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2005",
        "Population": "39697",
        "Life.expectancy": "59.4",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2004",
        "Population": "3858623",
        "Life.expectancy": "59.1",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2003",
        "Population": "3738265",
        "Life.expectancy": "58.8",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2002",
        "Population": "3614639",
        "Life.expectancy": "58.5",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2001",
        "Population": "3497124",
        "Life.expectancy": "58.1",
        "Status": "Developing"
      },
      {
        "Country": "Eritrea",
        "Year": "2000",
        "Population": "339281",
        "Life.expectancy": "45.3",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2015",
        "Population": "131547",
        "Life.expectancy": "77.6",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2014",
        "Population": "1314545",
        "Life.expectancy": "77.3",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2013",
        "Population": "1317997",
        "Life.expectancy": "76.9",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2012",
        "Population": "1322696",
        "Life.expectancy": "76.3",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2011",
        "Population": "1327439",
        "Life.expectancy": "76.1",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2010",
        "Population": "1331475",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2009",
        "Population": "1334515",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2008",
        "Population": "13379",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2007",
        "Population": "13468",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2006",
        "Population": "134681",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2005",
        "Population": "1354775",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2004",
        "Population": "136255",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2003",
        "Population": "13772",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2002",
        "Population": "137935",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2001",
        "Population": "1388115",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Estonia",
        "Year": "2000",
        "Population": "1396985",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2015",
        "Population": "9987333",
        "Life.expectancy": "64.8",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2014",
        "Population": "97366774",
        "Life.expectancy": "64.2",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2013",
        "Population": "94887724",
        "Life.expectancy": "63.7",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2012",
        "Population": "92444183",
        "Life.expectancy": "63.3",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2011",
        "Population": "946756",
        "Life.expectancy": "62.6",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2010",
        "Population": "877267",
        "Life.expectancy": "61.8",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2009",
        "Population": "85416253",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2008",
        "Population": "83184892",
        "Life.expectancy": "59.8",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2007",
        "Population": "8149",
        "Life.expectancy": "58.5",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2006",
        "Population": "7885689",
        "Life.expectancy": "57.2",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2005",
        "Population": "7672783",
        "Life.expectancy": "56",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2004",
        "Population": "7462445",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2003",
        "Population": "72545144",
        "Life.expectancy": "54",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2002",
        "Population": "7497192",
        "Life.expectancy": "53.2",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2001",
        "Population": "68492257",
        "Life.expectancy": "52.5",
        "Status": "Developing"
      },
      {
        "Country": "Ethiopia",
        "Year": "2000",
        "Population": "66537331",
        "Life.expectancy": "51.2",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2015",
        "Population": "892149",
        "Life.expectancy": "69.9",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2014",
        "Population": "88586",
        "Life.expectancy": "69.7",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2013",
        "Population": "879715",
        "Life.expectancy": "69.6",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2012",
        "Population": "873596",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2011",
        "Population": "86786",
        "Life.expectancy": "69.2",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2010",
        "Population": "85995",
        "Life.expectancy": "69.1",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2009",
        "Population": "851967",
        "Life.expectancy": "68.9",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2008",
        "Population": "84334",
        "Life.expectancy": "68.7",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2007",
        "Population": "834812",
        "Life.expectancy": "68.6",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2006",
        "Population": "827411",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2005",
        "Population": "821817",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2004",
        "Population": "818354",
        "Life.expectancy": "68.1",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2003",
        "Population": "816628",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2002",
        "Population": "815691",
        "Life.expectancy": "67.9",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2001",
        "Population": "814218",
        "Life.expectancy": "67.8",
        "Status": "Developing"
      },
      {
        "Country": "Fiji",
        "Year": "2000",
        "Population": "811223",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2015",
        "Population": "5479531",
        "Life.expectancy": "81.1",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2014",
        "Population": "5461512",
        "Life.expectancy": "89",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2013",
        "Population": "5438972",
        "Life.expectancy": "87",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2012",
        "Population": "5413971",
        "Life.expectancy": "84",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2011",
        "Population": "5388272",
        "Life.expectancy": "83",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2010",
        "Population": "5363352",
        "Life.expectancy": "79.9",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2009",
        "Population": "5338871",
        "Life.expectancy": "79.7",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2008",
        "Population": "5313399",
        "Life.expectancy": "79.6",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2007",
        "Population": "528872",
        "Life.expectancy": "79.3",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2006",
        "Population": "5266268",
        "Life.expectancy": "79.2",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2005",
        "Population": "524696",
        "Life.expectancy": "78.9",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2004",
        "Population": "5228172",
        "Life.expectancy": "78.7",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2003",
        "Population": "521314",
        "Life.expectancy": "78.4",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2002",
        "Population": "52598",
        "Life.expectancy": "78.1",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2001",
        "Population": "51888",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Finland",
        "Year": "2000",
        "Population": "517629",
        "Life.expectancy": "77.5",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2015",
        "Population": "6662468",
        "Life.expectancy": "82.4",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2014",
        "Population": "66331957",
        "Life.expectancy": "82.2",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2013",
        "Population": "6599857",
        "Life.expectancy": "82",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2012",
        "Population": "6565979",
        "Life.expectancy": "81.5",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2011",
        "Population": "65342776",
        "Life.expectancy": "81.7",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2010",
        "Population": "6527512",
        "Life.expectancy": "81.3",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2009",
        "Population": "647744",
        "Life.expectancy": "81.1",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2008",
        "Population": "6437499",
        "Life.expectancy": "89",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2007",
        "Population": "6416229",
        "Life.expectancy": "89",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2006",
        "Population": "63621376",
        "Life.expectancy": "86",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2005",
        "Population": "63179356",
        "Life.expectancy": "81",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2004",
        "Population": "6274897",
        "Life.expectancy": "82",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2003",
        "Population": "62244884",
        "Life.expectancy": "79.3",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2002",
        "Population": "6185267",
        "Life.expectancy": "79.2",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2001",
        "Population": "61357431",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "France",
        "Year": "2000",
        "Population": "6912498",
        "Life.expectancy": "78.8",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2015",
        "Population": "193175",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2014",
        "Population": "1875713",
        "Life.expectancy": "65.5",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2013",
        "Population": "1817271",
        "Life.expectancy": "64.6",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2012",
        "Population": "1756817",
        "Life.expectancy": "63.5",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2011",
        "Population": "169711",
        "Life.expectancy": "62.8",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2010",
        "Population": "16421",
        "Life.expectancy": "62.3",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2009",
        "Population": "1586754",
        "Life.expectancy": "61.7",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2008",
        "Population": "1536411",
        "Life.expectancy": "61.6",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2007",
        "Population": "1489193",
        "Life.expectancy": "61.6",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2006",
        "Population": "1444844",
        "Life.expectancy": "61.4",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2005",
        "Population": "143126",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2004",
        "Population": "136425",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2003",
        "Population": "1328146",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2002",
        "Population": "129449",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2001",
        "Population": "1262259",
        "Life.expectancy": "59.8",
        "Status": "Developing"
      },
      {
        "Country": "Gabon",
        "Year": "2000",
        "Population": "1231122",
        "Life.expectancy": "61",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "61.1",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "59.8",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "59.3",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "59",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "58.7",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "58.5",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "58.2",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "57.7",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "57.3",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "57",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "56.6",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "56.3",
        "Status": "Developing"
      },
      {
        "Country": "Gambia",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "55.9",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2015",
        "Population": "37171",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2014",
        "Population": "3727",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2013",
        "Population": "3776",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2012",
        "Population": "3825",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2011",
        "Population": "3875",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2010",
        "Population": "3926",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2009",
        "Population": "3978",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2008",
        "Population": "43",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2007",
        "Population": "482",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2006",
        "Population": "4136",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2005",
        "Population": "419",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2004",
        "Population": "4245",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2003",
        "Population": "431",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2002",
        "Population": "4357",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2001",
        "Population": "43864",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Georgia",
        "Year": "2000",
        "Population": "44183",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Germany",
        "Year": "2015",
        "Population": "81686611",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2014",
        "Population": "89825",
        "Life.expectancy": "89",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2013",
        "Population": "864565",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2012",
        "Population": "8425823",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2011",
        "Population": "8274983",
        "Life.expectancy": "85",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2010",
        "Population": "8177693",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2009",
        "Population": "819237",
        "Life.expectancy": "80",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2008",
        "Population": "821197",
        "Life.expectancy": "79.9",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2007",
        "Population": "82266372",
        "Life.expectancy": "79.8",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2006",
        "Population": "82376451",
        "Life.expectancy": "79.6",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2005",
        "Population": "82469422",
        "Life.expectancy": "79.2",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2004",
        "Population": "8251626",
        "Life.expectancy": "79.1",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2003",
        "Population": "82534176",
        "Life.expectancy": "78.5",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2002",
        "Population": "82488495",
        "Life.expectancy": "78.4",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2001",
        "Population": "82349925",
        "Life.expectancy": "78.3",
        "Status": "Developed"
      },
      {
        "Country": "Germany",
        "Year": "2000",
        "Population": "8221158",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Ghana",
        "Year": "2015",
        "Population": "27582821",
        "Life.expectancy": "62.4",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2014",
        "Population": "26962563",
        "Life.expectancy": "62.1",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2013",
        "Population": "26346251",
        "Life.expectancy": "61.9",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2012",
        "Population": "2573349",
        "Life.expectancy": "61.6",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2011",
        "Population": "25121796",
        "Life.expectancy": "61.2",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2010",
        "Population": "2451214",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2009",
        "Population": "2393831",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2008",
        "Population": "2329864",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2007",
        "Population": "227212",
        "Life.expectancy": "59.9",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2006",
        "Population": "22113425",
        "Life.expectancy": "59.4",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2005",
        "Population": "215429",
        "Life.expectancy": "58.9",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2004",
        "Population": "2986536",
        "Life.expectancy": "58.3",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2003",
        "Population": "2446782",
        "Life.expectancy": "57.9",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2002",
        "Population": "19924522",
        "Life.expectancy": "57.6",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2001",
        "Population": "1942165",
        "Life.expectancy": "57.4",
        "Status": "Developing"
      },
      {
        "Country": "Ghana",
        "Year": "2000",
        "Population": "18938762",
        "Life.expectancy": "57.2",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2015",
        "Population": "182883",
        "Life.expectancy": "81",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2014",
        "Population": "1892413",
        "Life.expectancy": "88",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2013",
        "Population": "1965211",
        "Life.expectancy": "86",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2012",
        "Population": "114511",
        "Life.expectancy": "84",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2011",
        "Population": "1114899",
        "Life.expectancy": "85",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2010",
        "Population": "11121341",
        "Life.expectancy": "83",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2009",
        "Population": "111717",
        "Life.expectancy": "80",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2008",
        "Population": "1177841",
        "Life.expectancy": "79.9",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2007",
        "Population": "1148473",
        "Life.expectancy": "79.4",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2006",
        "Population": "112362",
        "Life.expectancy": "79.7",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2005",
        "Population": "1987314",
        "Life.expectancy": "79.3",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2004",
        "Population": "1955141",
        "Life.expectancy": "79.2",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2003",
        "Population": "19287",
        "Life.expectancy": "79.1",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2002",
        "Population": "19222",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2001",
        "Population": "1862132",
        "Life.expectancy": "78.7",
        "Status": "Developing"
      },
      {
        "Country": "Greece",
        "Year": "2000",
        "Population": "18588",
        "Life.expectancy": "78.2",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "71.5",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "71.1",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Grenada",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2015",
        "Population": "16252429",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2014",
        "Population": "15923559",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2013",
        "Population": "15596214",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2012",
        "Population": "1527156",
        "Life.expectancy": "71.3",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2011",
        "Population": "14948919",
        "Life.expectancy": "71.1",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2010",
        "Population": "1463417",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2009",
        "Population": "1431628",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2008",
        "Population": "146366",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2007",
        "Population": "137286",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2006",
        "Population": "133978",
        "Life.expectancy": "69.7",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2005",
        "Population": "139628",
        "Life.expectancy": "69.2",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2004",
        "Population": "12796925",
        "Life.expectancy": "69.6",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2003",
        "Population": "125478",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2002",
        "Population": "1228848",
        "Life.expectancy": "69.3",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2001",
        "Population": "11924946",
        "Life.expectancy": "68.4",
        "Status": "Developing"
      },
      {
        "Country": "Guatemala",
        "Year": "2000",
        "Population": "1165743",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2015",
        "Population": "1291533",
        "Life.expectancy": "59",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2014",
        "Population": "118559",
        "Life.expectancy": "58.1",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2013",
        "Population": "11536615",
        "Life.expectancy": "58.8",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2012",
        "Population": "11281469",
        "Life.expectancy": "58.4",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2011",
        "Population": "113517",
        "Life.expectancy": "58.1",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2010",
        "Population": "179417",
        "Life.expectancy": "57.8",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2009",
        "Population": "1556524",
        "Life.expectancy": "57.3",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2008",
        "Population": "1323142",
        "Life.expectancy": "56.8",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2007",
        "Population": "196727",
        "Life.expectancy": "56.4",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2006",
        "Population": "9881428",
        "Life.expectancy": "55.6",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2005",
        "Population": "9679745",
        "Life.expectancy": "54.7",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2004",
        "Population": "949229",
        "Life.expectancy": "54",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2003",
        "Population": "939848",
        "Life.expectancy": "53.3",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2002",
        "Population": "9137345",
        "Life.expectancy": "52.9",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2001",
        "Population": "8971139",
        "Life.expectancy": "52.5",
        "Status": "Developing"
      },
      {
        "Country": "Guinea",
        "Year": "2000",
        "Population": "888546",
        "Life.expectancy": "52.5",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2015",
        "Population": "177526",
        "Life.expectancy": "58.9",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2014",
        "Population": "1725744",
        "Life.expectancy": "58.4",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2013",
        "Population": "1681495",
        "Life.expectancy": "58.1",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2012",
        "Population": "1638139",
        "Life.expectancy": "57.6",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2011",
        "Population": "1596154",
        "Life.expectancy": "57.1",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2010",
        "Population": "155588",
        "Life.expectancy": "56.7",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2009",
        "Population": "1517448",
        "Life.expectancy": "56.3",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2008",
        "Population": "148841",
        "Life.expectancy": "55.6",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2007",
        "Population": "1445958",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2006",
        "Population": "1412669",
        "Life.expectancy": "54.4",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2005",
        "Population": "138838",
        "Life.expectancy": "53.9",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2004",
        "Population": "135345",
        "Life.expectancy": "53.5",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2003",
        "Population": "132122",
        "Life.expectancy": "53",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2002",
        "Population": "1293523",
        "Life.expectancy": "52.8",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2001",
        "Population": "1267512",
        "Life.expectancy": "52.5",
        "Status": "Developing"
      },
      {
        "Country": "Guinea-Bissau",
        "Year": "2000",
        "Population": "1243229",
        "Life.expectancy": "52.1",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2015",
        "Population": "768514",
        "Life.expectancy": "66.2",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2014",
        "Population": "763393",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2013",
        "Population": "75881",
        "Life.expectancy": "65.9",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2012",
        "Population": "75391",
        "Life.expectancy": "65.8",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2011",
        "Population": "7491",
        "Life.expectancy": "65.6",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2010",
        "Population": "746556",
        "Life.expectancy": "65.9",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2009",
        "Population": "745693",
        "Life.expectancy": "66.1",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2008",
        "Population": "746314",
        "Life.expectancy": "66.3",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2007",
        "Population": "747869",
        "Life.expectancy": "65.7",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2006",
        "Population": "74961",
        "Life.expectancy": "65.2",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2005",
        "Population": "75946",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2004",
        "Population": "751652",
        "Life.expectancy": "65.1",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2003",
        "Population": "751857",
        "Life.expectancy": "65.3",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2002",
        "Population": "751884",
        "Life.expectancy": "65.3",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2001",
        "Population": "752263",
        "Life.expectancy": "65.4",
        "Status": "Developing"
      },
      {
        "Country": "Guyana",
        "Year": "2000",
        "Population": "75331",
        "Life.expectancy": "65.4",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2015",
        "Population": "171161",
        "Life.expectancy": "63.5",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2014",
        "Population": "1572466",
        "Life.expectancy": "63.1",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2013",
        "Population": "1431776",
        "Life.expectancy": "62.7",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2012",
        "Population": "128921",
        "Life.expectancy": "62.3",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2011",
        "Population": "114554",
        "Life.expectancy": "62.3",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2010",
        "Population": "9999617",
        "Life.expectancy": "36.3",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2009",
        "Population": "985287",
        "Life.expectancy": "62.5",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2008",
        "Population": "97529",
        "Life.expectancy": "62.1",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2007",
        "Population": "9556889",
        "Life.expectancy": "61.8",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2006",
        "Population": "949457",
        "Life.expectancy": "61.1",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2005",
        "Population": "926344",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2004",
        "Population": "9119178",
        "Life.expectancy": "58.7",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2003",
        "Population": "8976552",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2002",
        "Population": "8834733",
        "Life.expectancy": "59.3",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2001",
        "Population": "8692567",
        "Life.expectancy": "58.9",
        "Status": "Developing"
      },
      {
        "Country": "Haiti",
        "Year": "2000",
        "Population": "85492",
        "Life.expectancy": "58.6",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2015",
        "Population": "896829",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2014",
        "Population": "889216",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2013",
        "Population": "8657785",
        "Life.expectancy": "74.3",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2012",
        "Population": "855646",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2011",
        "Population": "83516",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2010",
        "Population": "8194778",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2009",
        "Population": "83521",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2008",
        "Population": "7872658",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2007",
        "Population": "777972",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2006",
        "Population": "754146",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2005",
        "Population": "737343",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2004",
        "Population": "724153",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2003",
        "Population": "733821",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2002",
        "Population": "6863157",
        "Life.expectancy": "71.6",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2001",
        "Population": "669361",
        "Life.expectancy": "71.3",
        "Status": "Developing"
      },
      {
        "Country": "Honduras",
        "Year": "2000",
        "Population": "6524283",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Hungary",
        "Year": "2015",
        "Population": "984328",
        "Life.expectancy": "75.8",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2014",
        "Population": "9866468",
        "Life.expectancy": "75.6",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2013",
        "Population": "989382",
        "Life.expectancy": "75.5",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2012",
        "Population": "992362",
        "Life.expectancy": "75",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2011",
        "Population": "9971727",
        "Life.expectancy": "74.8",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2010",
        "Population": "123",
        "Life.expectancy": "74.5",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2009",
        "Population": "12265",
        "Life.expectancy": "74.2",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2008",
        "Population": "138188",
        "Life.expectancy": "74.1",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2007",
        "Population": "15578",
        "Life.expectancy": "73.5",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2006",
        "Population": "17137",
        "Life.expectancy": "73.4",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2005",
        "Population": "18765",
        "Life.expectancy": "72.9",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2004",
        "Population": "117146",
        "Life.expectancy": "72.9",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2003",
        "Population": "1129552",
        "Life.expectancy": "72.5",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2002",
        "Population": "115868",
        "Life.expectancy": "72.5",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2001",
        "Population": "1187576",
        "Life.expectancy": "72.3",
        "Status": "Developed"
      },
      {
        "Country": "Hungary",
        "Year": "2000",
        "Population": "121971",
        "Life.expectancy": "71.7",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2015",
        "Population": "33815",
        "Life.expectancy": "82.7",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2014",
        "Population": "327386",
        "Life.expectancy": "82.5",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2013",
        "Population": "323764",
        "Life.expectancy": "82.4",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2012",
        "Population": "32716",
        "Life.expectancy": "82.5",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2011",
        "Population": "31914",
        "Life.expectancy": "82.1",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2010",
        "Population": "31841",
        "Life.expectancy": "81.8",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2009",
        "Population": "318499",
        "Life.expectancy": "81.6",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2008",
        "Population": "317414",
        "Life.expectancy": "81.4",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2007",
        "Population": "311566",
        "Life.expectancy": "81.3",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2006",
        "Population": "33782",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2005",
        "Population": "296734",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2004",
        "Population": "29274",
        "Life.expectancy": "88",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2003",
        "Population": "289521",
        "Life.expectancy": "87",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2002",
        "Population": "287523",
        "Life.expectancy": "84",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2001",
        "Population": "284968",
        "Life.expectancy": "80",
        "Status": "Developed"
      },
      {
        "Country": "Iceland",
        "Year": "2000",
        "Population": "28125",
        "Life.expectancy": "79.7",
        "Status": "Developed"
      },
      {
        "Country": "India",
        "Year": "2015",
        "Population": "1395398",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2014",
        "Population": "1293859294",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2013",
        "Population": "127856227",
        "Life.expectancy": "67.6",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2012",
        "Population": "126365852",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2011",
        "Population": "124723629",
        "Life.expectancy": "66.8",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2010",
        "Population": "12398691",
        "Life.expectancy": "66.4",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2009",
        "Population": "121427132",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2008",
        "Population": "119714696",
        "Life.expectancy": "65.5",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2007",
        "Population": "1179681239",
        "Life.expectancy": "65.2",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2006",
        "Population": "1161977719",
        "Life.expectancy": "64.8",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2005",
        "Population": "1144118674",
        "Life.expectancy": "64.4",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2004",
        "Population": "1126135777",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2003",
        "Population": "11827848",
        "Life.expectancy": "63.7",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2002",
        "Population": "18987112",
        "Life.expectancy": "63.3",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2001",
        "Population": "171477855",
        "Life.expectancy": "62.9",
        "Status": "Developing"
      },
      {
        "Country": "India",
        "Year": "2000",
        "Population": "1535912",
        "Life.expectancy": "62.5",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2015",
        "Population": "258162113",
        "Life.expectancy": "69.1",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2014",
        "Population": "255131116",
        "Life.expectancy": "68.9",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2013",
        "Population": "25232263",
        "Life.expectancy": "68.7",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2012",
        "Population": "248883232",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2011",
        "Population": "24577511",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2010",
        "Population": "242524123",
        "Life.expectancy": "68.1",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2009",
        "Population": "23934478",
        "Life.expectancy": "67.9",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2008",
        "Population": "236159276",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2007",
        "Population": "232989141",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2006",
        "Population": "22983822",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2005",
        "Population": "22671273",
        "Life.expectancy": "67.2",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2004",
        "Population": "223614649",
        "Life.expectancy": "65.3",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2003",
        "Population": "22545214",
        "Life.expectancy": "66.9",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2002",
        "Population": "2175859",
        "Life.expectancy": "66.7",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2001",
        "Population": "2145652",
        "Life.expectancy": "66.5",
        "Status": "Developing"
      },
      {
        "Country": "Indonesia",
        "Year": "2000",
        "Population": "21154429",
        "Life.expectancy": "66.3",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "75.1",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Iran (Islamic Republic of)",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2015",
        "Population": "36115649",
        "Life.expectancy": "68.9",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2014",
        "Population": "3568",
        "Life.expectancy": "67.9",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2013",
        "Population": "33883145",
        "Life.expectancy": "69.5",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2012",
        "Population": "32776571",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2011",
        "Population": "3172753",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2010",
        "Population": "376271",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2009",
        "Population": "29894652",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2008",
        "Population": "29111417",
        "Life.expectancy": "69.3",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2007",
        "Population": "2839433",
        "Life.expectancy": "65.9",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2006",
        "Population": "27697912",
        "Life.expectancy": "64.7",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2005",
        "Population": "278426",
        "Life.expectancy": "66.8",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2004",
        "Population": "2631669",
        "Life.expectancy": "67.2",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2003",
        "Population": "25627626",
        "Life.expectancy": "66.5",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2002",
        "Population": "24939299",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2001",
        "Population": "24251649",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Iraq",
        "Year": "2000",
        "Population": "23565413",
        "Life.expectancy": "70",
        "Status": "Developing"
      },
      {
        "Country": "Ireland",
        "Year": "2015",
        "Population": "4676835",
        "Life.expectancy": "81.4",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2014",
        "Population": "4617225",
        "Life.expectancy": "81.2",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2013",
        "Population": "4598294",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2012",
        "Population": "4586897",
        "Life.expectancy": "85",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2011",
        "Population": "4576794",
        "Life.expectancy": "84",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2010",
        "Population": "456155",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2009",
        "Population": "4535375",
        "Life.expectancy": "79.7",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2008",
        "Population": "4489544",
        "Life.expectancy": "79.8",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2007",
        "Population": "4398942",
        "Life.expectancy": "79.5",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2006",
        "Population": "4273591",
        "Life.expectancy": "79",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2005",
        "Population": "4159914",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2004",
        "Population": "47262",
        "Life.expectancy": "78.3",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2003",
        "Population": "3996521",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2002",
        "Population": "3931947",
        "Life.expectancy": "77.4",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2001",
        "Population": "3866243",
        "Life.expectancy": "77",
        "Status": "Developed"
      },
      {
        "Country": "Ireland",
        "Year": "2000",
        "Population": "385174",
        "Life.expectancy": "76.4",
        "Status": "Developed"
      },
      {
        "Country": "Israel",
        "Year": "2015",
        "Population": "8381",
        "Life.expectancy": "82.5",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2014",
        "Population": "82157",
        "Life.expectancy": "82.2",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2013",
        "Population": "8595",
        "Life.expectancy": "82.1",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2012",
        "Population": "7915",
        "Life.expectancy": "81.8",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2011",
        "Population": "77658",
        "Life.expectancy": "81.8",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2010",
        "Population": "76236",
        "Life.expectancy": "81.7",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2009",
        "Population": "74856",
        "Life.expectancy": "81.5",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2008",
        "Population": "7388",
        "Life.expectancy": "81",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2007",
        "Population": "7181",
        "Life.expectancy": "84",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2006",
        "Population": "7537",
        "Life.expectancy": "84",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2005",
        "Population": "6931",
        "Life.expectancy": "80",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2004",
        "Population": "689",
        "Life.expectancy": "81",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2003",
        "Population": "66897",
        "Life.expectancy": "79.7",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2002",
        "Population": "657",
        "Life.expectancy": "79.3",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2001",
        "Population": "6439",
        "Life.expectancy": "79.3",
        "Status": "Developing"
      },
      {
        "Country": "Israel",
        "Year": "2000",
        "Population": "6289",
        "Life.expectancy": "78.9",
        "Status": "Developing"
      },
      {
        "Country": "Italy",
        "Year": "2015",
        "Population": "673582",
        "Life.expectancy": "82.7",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2014",
        "Population": "678914",
        "Life.expectancy": "82.5",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2013",
        "Population": "6233948",
        "Life.expectancy": "82.3",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2012",
        "Population": "59539717",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2011",
        "Population": "59379449",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2010",
        "Population": "59277417",
        "Life.expectancy": "81.8",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2009",
        "Population": "5995365",
        "Life.expectancy": "81.6",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2008",
        "Population": "58826731",
        "Life.expectancy": "81.5",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2007",
        "Population": "5843831",
        "Life.expectancy": "81.3",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2006",
        "Population": "58143979",
        "Life.expectancy": "81.2",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2005",
        "Population": "57969484",
        "Life.expectancy": "88",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2004",
        "Population": "57685327",
        "Life.expectancy": "89",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2003",
        "Population": "5731323",
        "Life.expectancy": "79.9",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2002",
        "Population": "57597",
        "Life.expectancy": "80",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2001",
        "Population": "569741",
        "Life.expectancy": "79.8",
        "Status": "Developed"
      },
      {
        "Country": "Italy",
        "Year": "2000",
        "Population": "5694218",
        "Life.expectancy": "79.4",
        "Status": "Developed"
      },
      {
        "Country": "Jamaica",
        "Year": "2015",
        "Population": "2871934",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2014",
        "Population": "286287",
        "Life.expectancy": "75.8",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2013",
        "Population": "285187",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2012",
        "Population": "284992",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2011",
        "Population": "2829493",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2010",
        "Population": "281721",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2009",
        "Population": "28482",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2008",
        "Population": "279122",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2007",
        "Population": "2775467",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2006",
        "Population": "276279",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2005",
        "Population": "2744673",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2004",
        "Population": "2728777",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2003",
        "Population": "2712511",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2002",
        "Population": "2695446",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2001",
        "Population": "267711",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Jamaica",
        "Year": "2000",
        "Population": "2656864",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Japan",
        "Year": "2015",
        "Population": "127141",
        "Life.expectancy": "83.7",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2014",
        "Population": "127276",
        "Life.expectancy": "83.5",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2013",
        "Population": "127445",
        "Life.expectancy": "83.5",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2012",
        "Population": "127629",
        "Life.expectancy": "83.3",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2011",
        "Population": "127833",
        "Life.expectancy": "82.5",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2010",
        "Population": "1287",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2009",
        "Population": "12847",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2008",
        "Population": "12863",
        "Life.expectancy": "82.7",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2007",
        "Population": "1281",
        "Life.expectancy": "82.6",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2006",
        "Population": "127854",
        "Life.expectancy": "82.4",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2005",
        "Population": "127773",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2004",
        "Population": "127761",
        "Life.expectancy": "82.1",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2003",
        "Population": "127718",
        "Life.expectancy": "81.9",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2002",
        "Population": "127445",
        "Life.expectancy": "81.8",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2001",
        "Population": "127149",
        "Life.expectancy": "81.5",
        "Status": "Developed"
      },
      {
        "Country": "Japan",
        "Year": "2000",
        "Population": "126843",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Jordan",
        "Year": "2015",
        "Population": "915932",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2014",
        "Population": "88936",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2013",
        "Population": "8413464",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2012",
        "Population": "7992573",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2011",
        "Population": "7574943",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2010",
        "Population": "718239",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2009",
        "Population": "6821116",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2008",
        "Population": "6489822",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2007",
        "Population": "6193191",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2006",
        "Population": "5934232",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2005",
        "Population": "5714111",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2004",
        "Population": "5535595",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2003",
        "Population": "5396774",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2002",
        "Population": "5287488",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2001",
        "Population": "5193482",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Jordan",
        "Year": "2000",
        "Population": "51313",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2015",
        "Population": "17544126",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2014",
        "Population": "17289224",
        "Life.expectancy": "69.9",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2013",
        "Population": "1735275",
        "Life.expectancy": "69.5",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2012",
        "Population": "16791425",
        "Life.expectancy": "69.1",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2011",
        "Population": "165566",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2010",
        "Population": "16321581",
        "Life.expectancy": "67.8",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2009",
        "Population": "169271",
        "Life.expectancy": "67.8",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2008",
        "Population": "15674",
        "Life.expectancy": "66.6",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2007",
        "Population": "15484192",
        "Life.expectancy": "65.3",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2006",
        "Population": "153884",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2005",
        "Population": "1514729",
        "Life.expectancy": "64.6",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2004",
        "Population": "1512985",
        "Life.expectancy": "64.7",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2003",
        "Population": "149918",
        "Life.expectancy": "64.4",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2002",
        "Population": "14858948",
        "Life.expectancy": "64.7",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2001",
        "Population": "14858335",
        "Life.expectancy": "64.4",
        "Status": "Developing"
      },
      {
        "Country": "Kazakhstan",
        "Year": "2000",
        "Population": "14883626",
        "Life.expectancy": "63.9",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2015",
        "Population": "47236259",
        "Life.expectancy": "63.4",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2014",
        "Population": "462425",
        "Life.expectancy": "62.9",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2013",
        "Population": "44826849",
        "Life.expectancy": "62.6",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2012",
        "Population": "43646629",
        "Life.expectancy": "62.1",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2011",
        "Population": "42486839",
        "Life.expectancy": "61.2",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2010",
        "Population": "4135152",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2009",
        "Population": "423724",
        "Life.expectancy": "59.1",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2008",
        "Population": "39148416",
        "Life.expectancy": "57.9",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2007",
        "Population": "388599",
        "Life.expectancy": "56.8",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2006",
        "Population": "37525",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2005",
        "Population": "3648288",
        "Life.expectancy": "54.1",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2004",
        "Population": "3574931",
        "Life.expectancy": "53",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2003",
        "Population": "3413852",
        "Life.expectancy": "52.4",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2002",
        "Population": "332149",
        "Life.expectancy": "52.1",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2001",
        "Population": "32321482",
        "Life.expectancy": "51.9",
        "Status": "Developing"
      },
      {
        "Country": "Kenya",
        "Year": "2000",
        "Population": "3145483",
        "Life.expectancy": "51.9",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2015",
        "Population": "11247",
        "Life.expectancy": "66.3",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2014",
        "Population": "11458",
        "Life.expectancy": "66.1",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2013",
        "Population": "18535",
        "Life.expectancy": "65.8",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2012",
        "Population": "16613",
        "Life.expectancy": "65.7",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2011",
        "Population": "14656",
        "Life.expectancy": "65.5",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2010",
        "Population": "12652",
        "Life.expectancy": "65.3",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2009",
        "Population": "1568",
        "Life.expectancy": "65.2",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2008",
        "Population": "9844",
        "Life.expectancy": "65.1",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2007",
        "Population": "96311",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2006",
        "Population": "9426",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2005",
        "Population": "92325",
        "Life.expectancy": "64.9",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2004",
        "Population": "9542",
        "Life.expectancy": "64.8",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2003",
        "Population": "88895",
        "Life.expectancy": "64.7",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2002",
        "Population": "87343",
        "Life.expectancy": "64.6",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2001",
        "Population": "85858",
        "Life.expectancy": "64.3",
        "Status": "Developing"
      },
      {
        "Country": "Kiribati",
        "Year": "2000",
        "Population": "8446",
        "Life.expectancy": "64.1",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "74.3",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Kuwait",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "71.1",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "69.9",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "68.8",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "67.6",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "67.2",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "66.7",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "66.9",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "67.1",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "66.6",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "66.7",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "67.2",
        "Status": "Developing"
      },
      {
        "Country": "Kyrgyzstan",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "66.6",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "65.7",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "65.3",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "64.9",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "64.4",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "63.6",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "63.1",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "62.6",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "62.1",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "61.5",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "61",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "59.8",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "59.3",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "58.7",
        "Status": "Developing"
      },
      {
        "Country": "Lao People's Democratic Republic",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "58.1",
        "Status": "Developing"
      },
      {
        "Country": "Latvia",
        "Year": "2015",
        "Population": "1977527",
        "Life.expectancy": "74.6",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2014",
        "Population": "1993782",
        "Life.expectancy": "74.4",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2013",
        "Population": "212647",
        "Life.expectancy": "74.1",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2012",
        "Population": "234319",
        "Life.expectancy": "73.8",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2011",
        "Population": "25979",
        "Life.expectancy": "73.6",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2010",
        "Population": "297555",
        "Life.expectancy": "72.8",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2009",
        "Population": "2141669",
        "Life.expectancy": "72.6",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2008",
        "Population": "2177322",
        "Life.expectancy": "71.9",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2007",
        "Population": "22325",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2006",
        "Population": "2218357",
        "Life.expectancy": "75",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2005",
        "Population": "2238799",
        "Life.expectancy": "76",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2004",
        "Population": "2263122",
        "Life.expectancy": "71",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2003",
        "Population": "2287955",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2002",
        "Population": "231173",
        "Life.expectancy": "73",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2001",
        "Population": "233717",
        "Life.expectancy": "69.9",
        "Status": "Developed"
      },
      {
        "Country": "Latvia",
        "Year": "2000",
        "Population": "236755",
        "Life.expectancy": "71",
        "Status": "Developed"
      },
      {
        "Country": "Lebanon",
        "Year": "2015",
        "Population": "5851479",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2014",
        "Population": "563279",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2013",
        "Population": "527612",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2012",
        "Population": "491644",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2011",
        "Population": "4588368",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2010",
        "Population": "4337141",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2009",
        "Population": "4183156",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2008",
        "Population": "411147",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2007",
        "Population": "486466",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2006",
        "Population": "45735",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2005",
        "Population": "3986852",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2004",
        "Population": "3863267",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2003",
        "Population": "371464",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2002",
        "Population": "3522837",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2001",
        "Population": "3359859",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Lebanon",
        "Year": "2000",
        "Population": "3235366",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2015",
        "Population": "2174645",
        "Life.expectancy": "53.7",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2014",
        "Population": "2145785",
        "Life.expectancy": "52.1",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2013",
        "Population": "2117361",
        "Life.expectancy": "52.1",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2012",
        "Population": "289928",
        "Life.expectancy": "52.2",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2011",
        "Population": "264166",
        "Life.expectancy": "52.3",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2010",
        "Population": "24551",
        "Life.expectancy": "51.1",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2009",
        "Population": "21929",
        "Life.expectancy": "49.4",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2008",
        "Population": "199993",
        "Life.expectancy": "47.8",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2007",
        "Population": "1982287",
        "Life.expectancy": "46.2",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2006",
        "Population": "1965662",
        "Life.expectancy": "45.3",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2005",
        "Population": "1949543",
        "Life.expectancy": "44.5",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2004",
        "Population": "1933728",
        "Life.expectancy": "44.8",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2003",
        "Population": "191897",
        "Life.expectancy": "45.5",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2002",
        "Population": "192312",
        "Life.expectancy": "46.4",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2001",
        "Population": "1885955",
        "Life.expectancy": "47.8",
        "Status": "Developing"
      },
      {
        "Country": "Lesotho",
        "Year": "2000",
        "Population": "1868699",
        "Life.expectancy": "49.3",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2015",
        "Population": "4499621",
        "Life.expectancy": "61.4",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2014",
        "Population": "439737",
        "Life.expectancy": "58.1",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2013",
        "Population": "4286291",
        "Life.expectancy": "61.1",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2012",
        "Population": "4181563",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2011",
        "Population": "47167",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2010",
        "Population": "3948125",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2009",
        "Population": "3811528",
        "Life.expectancy": "59.2",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2008",
        "Population": "3662993",
        "Life.expectancy": "58.6",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2007",
        "Population": "3512932",
        "Life.expectancy": "57.9",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2006",
        "Population": "3375838",
        "Life.expectancy": "56.7",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2005",
        "Population": "326123",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2004",
        "Population": "3176414",
        "Life.expectancy": "54",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2003",
        "Population": "3116233",
        "Life.expectancy": "50",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2002",
        "Population": "362863",
        "Life.expectancy": "56",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2001",
        "Population": "2991132",
        "Life.expectancy": "51.5",
        "Status": "Developing"
      },
      {
        "Country": "Liberia",
        "Year": "2000",
        "Population": "2884522",
        "Life.expectancy": "51.9",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "71.3",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "71.5",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "71.3",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "71.1",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Libya",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Lithuania",
        "Year": "2015",
        "Population": "29491",
        "Life.expectancy": "73.6",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2014",
        "Population": "2932367",
        "Life.expectancy": "73.4",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2013",
        "Population": "2957689",
        "Life.expectancy": "73",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2012",
        "Population": "2987773",
        "Life.expectancy": "73",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2011",
        "Population": "328115",
        "Life.expectancy": "72.8",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2010",
        "Population": "397282",
        "Life.expectancy": "72.4",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2009",
        "Population": "3162916",
        "Life.expectancy": "72.2",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2008",
        "Population": "3198231",
        "Life.expectancy": "71.1",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2007",
        "Population": "3231294",
        "Life.expectancy": "72",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2006",
        "Population": "326999",
        "Life.expectancy": "76",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2005",
        "Population": "3322528",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2004",
        "Population": "337775",
        "Life.expectancy": "71.6",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2003",
        "Population": "3415213",
        "Life.expectancy": "71.6",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2002",
        "Population": "344367",
        "Life.expectancy": "71.4",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2001",
        "Population": "347818",
        "Life.expectancy": "71.2",
        "Status": "Developed"
      },
      {
        "Country": "Lithuania",
        "Year": "2000",
        "Population": "3499536",
        "Life.expectancy": "71.6",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2015",
        "Population": "56964",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2014",
        "Population": "556319",
        "Life.expectancy": "81.7",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2013",
        "Population": "54336",
        "Life.expectancy": "81.4",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2012",
        "Population": "53946",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2011",
        "Population": "518347",
        "Life.expectancy": "88",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2010",
        "Population": "56953",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2009",
        "Population": "497783",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2008",
        "Population": "48865",
        "Life.expectancy": "80",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2007",
        "Population": "479993",
        "Life.expectancy": "79.7",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2006",
        "Population": "472637",
        "Life.expectancy": "79.4",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2005",
        "Population": "465158",
        "Life.expectancy": "78.8",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2004",
        "Population": "45895",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2003",
        "Population": "45163",
        "Life.expectancy": "78.6",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2002",
        "Population": "446175",
        "Life.expectancy": "78.3",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2001",
        "Population": "441525",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Luxembourg",
        "Year": "2000",
        "Population": "4363",
        "Life.expectancy": "77.8",
        "Status": "Developed"
      },
      {
        "Country": "Madagascar",
        "Year": "2015",
        "Population": "2423488",
        "Life.expectancy": "65.5",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2014",
        "Population": "2358981",
        "Life.expectancy": "65.1",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2013",
        "Population": "22961146",
        "Life.expectancy": "64.7",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2012",
        "Population": "22346573",
        "Life.expectancy": "64.3",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2011",
        "Population": "21743949",
        "Life.expectancy": "63.8",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2010",
        "Population": "2115164",
        "Life.expectancy": "63.3",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2009",
        "Population": "2569121",
        "Life.expectancy": "62.8",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2008",
        "Population": "19996469",
        "Life.expectancy": "62.3",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2007",
        "Population": "19433523",
        "Life.expectancy": "61.9",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2006",
        "Population": "1888268",
        "Life.expectancy": "61.4",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2005",
        "Population": "18336724",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2004",
        "Population": "1782997",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2003",
        "Population": "17279141",
        "Life.expectancy": "59.9",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2002",
        "Population": "16765117",
        "Life.expectancy": "59.3",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2001",
        "Population": "1626932",
        "Life.expectancy": "58.7",
        "Status": "Developing"
      },
      {
        "Country": "Madagascar",
        "Year": "2000",
        "Population": "1576686",
        "Life.expectancy": "57.9",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2015",
        "Population": "1757367",
        "Life.expectancy": "58.3",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2014",
        "Population": "1768838",
        "Life.expectancy": "57.6",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2013",
        "Population": "16577147",
        "Life.expectancy": "56.7",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2012",
        "Population": "169735",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2011",
        "Population": "15627618",
        "Life.expectancy": "54.1",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2010",
        "Population": "1516795",
        "Life.expectancy": "52.9",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2009",
        "Population": "1471462",
        "Life.expectancy": "51.5",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2008",
        "Population": "14271234",
        "Life.expectancy": "50",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2007",
        "Population": "1384969",
        "Life.expectancy": "48.5",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2006",
        "Population": "13429262",
        "Life.expectancy": "47.1",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2005",
        "Population": "1339711",
        "Life.expectancy": "46",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2004",
        "Population": "1267638",
        "Life.expectancy": "45.1",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2003",
        "Population": "12336687",
        "Life.expectancy": "44.6",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2002",
        "Population": "1213711",
        "Life.expectancy": "44",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2001",
        "Population": "11695863",
        "Life.expectancy": "43.5",
        "Status": "Developing"
      },
      {
        "Country": "Malawi",
        "Year": "2000",
        "Population": "11376172",
        "Life.expectancy": "43.1",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2015",
        "Population": "3723155",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2014",
        "Population": "322817",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2013",
        "Population": "2976724",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2012",
        "Population": "2917456",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2011",
        "Population": "28635128",
        "Life.expectancy": "74.3",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2010",
        "Population": "28112289",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2009",
        "Population": "2765383",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2008",
        "Population": "2711169",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2007",
        "Population": "26625845",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2006",
        "Population": "26143566",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2005",
        "Population": "25659393",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2004",
        "Population": "2517419",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2003",
        "Population": "2468873",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2002",
        "Population": "24198811",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2001",
        "Population": "2369897",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Malaysia",
        "Year": "2000",
        "Population": "2318568",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2015",
        "Population": "49163",
        "Life.expectancy": "78.5",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2014",
        "Population": "41",
        "Life.expectancy": "78.2",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2013",
        "Population": "393",
        "Life.expectancy": "77.9",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2012",
        "Population": "385",
        "Life.expectancy": "77.6",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2011",
        "Population": "377",
        "Life.expectancy": "77.3",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2010",
        "Population": "367",
        "Life.expectancy": "76.7",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2009",
        "Population": "36",
        "Life.expectancy": "76.3",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2008",
        "Population": "362",
        "Life.expectancy": "75.9",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2007",
        "Population": "349",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2006",
        "Population": "333",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2005",
        "Population": "321",
        "Life.expectancy": "74.3",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2004",
        "Population": "312",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2003",
        "Population": "34",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2002",
        "Population": "297",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2001",
        "Population": "292",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Maldives",
        "Year": "2000",
        "Population": "286",
        "Life.expectancy": "69.6",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2015",
        "Population": "1746795",
        "Life.expectancy": "58.2",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2014",
        "Population": "16962846",
        "Life.expectancy": "57.8",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2013",
        "Population": "16477818",
        "Life.expectancy": "57.3",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2012",
        "Population": "16667",
        "Life.expectancy": "57.2",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2011",
        "Population": "1554989",
        "Life.expectancy": "56.8",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2010",
        "Population": "157585",
        "Life.expectancy": "56.5",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2009",
        "Population": "1466597",
        "Life.expectancy": "56",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2008",
        "Population": "14138216",
        "Life.expectancy": "55.5",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2007",
        "Population": "1367566",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2006",
        "Population": "1322764",
        "Life.expectancy": "54.3",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2005",
        "Population": "12798763",
        "Life.expectancy": "53.6",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2004",
        "Population": "1239196",
        "Life.expectancy": "52.8",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2003",
        "Population": "125128",
        "Life.expectancy": "52",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2002",
        "Population": "11638929",
        "Life.expectancy": "51.2",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2001",
        "Population": "11293258",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Mali",
        "Year": "2000",
        "Population": "196769",
        "Life.expectancy": "49.8",
        "Status": "Developing"
      },
      {
        "Country": "Malta",
        "Year": "2015",
        "Population": "431874",
        "Life.expectancy": "81.7",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2014",
        "Population": "427364",
        "Life.expectancy": "81.4",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2013",
        "Population": "423374",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2012",
        "Population": "419455",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2011",
        "Population": "416268",
        "Life.expectancy": "87",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2010",
        "Population": "41458",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2009",
        "Population": "412477",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2008",
        "Population": "49379",
        "Life.expectancy": "80",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2007",
        "Population": "46724",
        "Life.expectancy": "79.6",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2006",
        "Population": "4538",
        "Life.expectancy": "79.3",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2005",
        "Population": "43834",
        "Life.expectancy": "79",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2004",
        "Population": "41268",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2003",
        "Population": "398582",
        "Life.expectancy": "78.5",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2002",
        "Population": "395969",
        "Life.expectancy": "78.2",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2001",
        "Population": "39328",
        "Life.expectancy": "77.8",
        "Status": "Developed"
      },
      {
        "Country": "Malta",
        "Year": "2000",
        "Population": "3987",
        "Life.expectancy": "77.5",
        "Status": "Developed"
      },
      {
        "Country": "Marshall Islands",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "0",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2015",
        "Population": "4182341",
        "Life.expectancy": "63.1",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2014",
        "Population": "46392",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2013",
        "Population": "394617",
        "Life.expectancy": "62.7",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2012",
        "Population": "383239",
        "Life.expectancy": "62.5",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2011",
        "Population": "3717672",
        "Life.expectancy": "62.2",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2010",
        "Population": "369543",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2009",
        "Population": "356288",
        "Life.expectancy": "61.7",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2008",
        "Population": "347541",
        "Life.expectancy": "61.4",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2007",
        "Population": "3312665",
        "Life.expectancy": "61.2",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2006",
        "Population": "322653",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2005",
        "Population": "31372",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2004",
        "Population": "342823",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2003",
        "Population": "2957117",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2002",
        "Population": "2873228",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2001",
        "Population": "279729",
        "Life.expectancy": "61",
        "Status": "Developing"
      },
      {
        "Country": "Mauritania",
        "Year": "2000",
        "Population": "279359",
        "Life.expectancy": "60",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2015",
        "Population": "126265",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2014",
        "Population": "126934",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2013",
        "Population": "1258653",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2012",
        "Population": "1255882",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2011",
        "Population": "125244",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2010",
        "Population": "1254",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2009",
        "Population": "1247429",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2008",
        "Population": "1244121",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2007",
        "Population": "123963",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2006",
        "Population": "1233996",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2005",
        "Population": "1228254",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2004",
        "Population": "12213",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2003",
        "Population": "121337",
        "Life.expectancy": "71.5",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2002",
        "Population": "124621",
        "Life.expectancy": "71.5",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2001",
        "Population": "1196287",
        "Life.expectancy": "71.5",
        "Status": "Developing"
      },
      {
        "Country": "Mauritius",
        "Year": "2000",
        "Population": "1186873",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2015",
        "Population": "12589949",
        "Life.expectancy": "76.7",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2014",
        "Population": "1242216",
        "Life.expectancy": "76.6",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2013",
        "Population": "122535969",
        "Life.expectancy": "76.6",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2012",
        "Population": "1282837",
        "Life.expectancy": "76.3",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2011",
        "Population": "119917",
        "Life.expectancy": "76.1",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2010",
        "Population": "117318941",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2009",
        "Population": "11555228",
        "Life.expectancy": "75.7",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2008",
        "Population": "11366189",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2007",
        "Population": "111836346",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2006",
        "Population": "1192378",
        "Life.expectancy": "75.8",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2005",
        "Population": "18472228",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2004",
        "Population": "16995583",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2003",
        "Population": "1564453",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2002",
        "Population": "1435568",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2001",
        "Population": "136768",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Mexico",
        "Year": "2000",
        "Population": "11719673",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "69.2",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "68.9",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "68.7",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "68.4",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "68.2",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "67.9",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "66.2",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "67.2",
        "Status": "Developing"
      },
      {
        "Country": "Micronesia (Federated States of)",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Monaco",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "0",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2015",
        "Population": "2976877",
        "Life.expectancy": "68.8",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2014",
        "Population": "2923896",
        "Life.expectancy": "68.4",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2013",
        "Population": "286917",
        "Life.expectancy": "68.1",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2012",
        "Population": "2814226",
        "Life.expectancy": "67.8",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2011",
        "Population": "2761516",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2010",
        "Population": "271265",
        "Life.expectancy": "66.3",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2009",
        "Population": "2668289",
        "Life.expectancy": "66.9",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2008",
        "Population": "2628131",
        "Life.expectancy": "67.4",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2007",
        "Population": "259167",
        "Life.expectancy": "65.9",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2006",
        "Population": "255812",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2005",
        "Population": "2526446",
        "Life.expectancy": "64.5",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2004",
        "Population": "2496832",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2003",
        "Population": "2469286",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2002",
        "Population": "2443659",
        "Life.expectancy": "63.8",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2001",
        "Population": "2419776",
        "Life.expectancy": "63.2",
        "Status": "Developing"
      },
      {
        "Country": "Mongolia",
        "Year": "2000",
        "Population": "2397436",
        "Life.expectancy": "62.8",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2015",
        "Population": "622159",
        "Life.expectancy": "76.1",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2014",
        "Population": "62181",
        "Life.expectancy": "75.9",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2013",
        "Population": "62127",
        "Life.expectancy": "75.8",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2012",
        "Population": "6261",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2011",
        "Population": "6279",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2010",
        "Population": "619428",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2009",
        "Population": "618294",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2008",
        "Population": "616969",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2007",
        "Population": "615875",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2006",
        "Population": "61525",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2005",
        "Population": "614261",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2004",
        "Population": "613353",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2003",
        "Population": "612267",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2002",
        "Population": "69828",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2001",
        "Population": "67389",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Montenegro",
        "Year": "2000",
        "Population": "6495",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2015",
        "Population": "3483322",
        "Life.expectancy": "74.3",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2014",
        "Population": "3431882",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2013",
        "Population": "33824769",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2012",
        "Population": "33333789",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2011",
        "Population": "32858823",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2010",
        "Population": "3249639",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2009",
        "Population": "31989897",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2008",
        "Population": "31596855",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2007",
        "Population": "31225881",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2006",
        "Population": "3869346",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2005",
        "Population": "35217",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2004",
        "Population": "3179285",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2003",
        "Population": "29843937",
        "Life.expectancy": "69.9",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2002",
        "Population": "29512368",
        "Life.expectancy": "69.5",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2001",
        "Population": "29181832",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Morocco",
        "Year": "2000",
        "Population": "28849621",
        "Life.expectancy": "68.6",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2015",
        "Population": "281691",
        "Life.expectancy": "57.6",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2014",
        "Population": "27212382",
        "Life.expectancy": "56.7",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2013",
        "Population": "26434372",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2012",
        "Population": "2567666",
        "Life.expectancy": "54.8",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2011",
        "Population": "249395",
        "Life.expectancy": "54.3",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2010",
        "Population": "2422145",
        "Life.expectancy": "54",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2009",
        "Population": "2352463",
        "Life.expectancy": "53.8",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2008",
        "Population": "22846758",
        "Life.expectancy": "53.2",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2007",
        "Population": "22188387",
        "Life.expectancy": "52.1",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2006",
        "Population": "21547463",
        "Life.expectancy": "51.2",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2005",
        "Population": "29237",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2004",
        "Population": "231275",
        "Life.expectancy": "54",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2003",
        "Population": "19716598",
        "Life.expectancy": "51",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2002",
        "Population": "19139658",
        "Life.expectancy": "49.8",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2001",
        "Population": "18588758",
        "Life.expectancy": "49.5",
        "Status": "Developing"
      },
      {
        "Country": "Mozambique",
        "Year": "2000",
        "Population": "1867687",
        "Life.expectancy": "49",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2015",
        "Population": "5243669",
        "Life.expectancy": "66.6",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2014",
        "Population": "51924182",
        "Life.expectancy": "66.4",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2013",
        "Population": "51448196",
        "Life.expectancy": "66.2",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2012",
        "Population": "5986514",
        "Life.expectancy": "65.9",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2011",
        "Population": "555331",
        "Life.expectancy": "65.6",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2010",
        "Population": "5155896",
        "Life.expectancy": "65.4",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2009",
        "Population": "49869",
        "Life.expectancy": "65.2",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2008",
        "Population": "49479752",
        "Life.expectancy": "59.2",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2007",
        "Population": "49171586",
        "Life.expectancy": "64.5",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2006",
        "Population": "48846474",
        "Life.expectancy": "64.2",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2005",
        "Population": "48482614",
        "Life.expectancy": "63.9",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2004",
        "Population": "487377",
        "Life.expectancy": "63.5",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2003",
        "Population": "47624894",
        "Life.expectancy": "63.2",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2002",
        "Population": "471422",
        "Life.expectancy": "62.8",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2001",
        "Population": "46627994",
        "Life.expectancy": "62.5",
        "Status": "Developing"
      },
      {
        "Country": "Myanmar",
        "Year": "2000",
        "Population": "4695462",
        "Life.expectancy": "62.1",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2015",
        "Population": "2425561",
        "Life.expectancy": "65.8",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2014",
        "Population": "237992",
        "Life.expectancy": "65.9",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2013",
        "Population": "231652",
        "Life.expectancy": "66.1",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2012",
        "Population": "2263934",
        "Life.expectancy": "65.8",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2011",
        "Population": "2215621",
        "Life.expectancy": "64.3",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2010",
        "Population": "217317",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2009",
        "Population": "21374",
        "Life.expectancy": "62.4",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2008",
        "Population": "216375",
        "Life.expectancy": "61.7",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2007",
        "Population": "279915",
        "Life.expectancy": "60",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2006",
        "Population": "255734",
        "Life.expectancy": "57",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2005",
        "Population": "232196",
        "Life.expectancy": "55.1",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2004",
        "Population": "29228",
        "Life.expectancy": "54.7",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2003",
        "Population": "1986535",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2002",
        "Population": "1962147",
        "Life.expectancy": "55.7",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2001",
        "Population": "1933596",
        "Life.expectancy": "56.5",
        "Status": "Developing"
      },
      {
        "Country": "Namibia",
        "Year": "2000",
        "Population": "1899257",
        "Life.expectancy": "57.4",
        "Status": "Developing"
      },
      {
        "Country": "Nauru",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "0",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2015",
        "Population": "28656282",
        "Life.expectancy": "69.2",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2014",
        "Population": "28323241",
        "Life.expectancy": "69.6",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2013",
        "Population": "2798531",
        "Life.expectancy": "69.3",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2012",
        "Population": "27649925",
        "Life.expectancy": "68.9",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2011",
        "Population": "27327147",
        "Life.expectancy": "68.4",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2010",
        "Population": "2723137",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2009",
        "Population": "2674113",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2008",
        "Population": "26475859",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2007",
        "Population": "26214847",
        "Life.expectancy": "66.6",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2006",
        "Population": "2594618",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2005",
        "Population": "2564287",
        "Life.expectancy": "65.4",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2004",
        "Population": "2539449",
        "Life.expectancy": "64.7",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2003",
        "Population": "2495623",
        "Life.expectancy": "64.3",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2002",
        "Population": "24566342",
        "Life.expectancy": "63.1",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2001",
        "Population": "24161777",
        "Life.expectancy": "63.2",
        "Status": "Developing"
      },
      {
        "Country": "Nepal",
        "Year": "2000",
        "Population": "2374911",
        "Life.expectancy": "62.5",
        "Status": "Developing"
      },
      {
        "Country": "Netherlands",
        "Year": "2015",
        "Population": "16939923",
        "Life.expectancy": "81.9",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2014",
        "Population": "168658",
        "Life.expectancy": "81.7",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2013",
        "Population": "1684432",
        "Life.expectancy": "81.4",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2012",
        "Population": "16754962",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2011",
        "Population": "1669374",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2010",
        "Population": "16615394",
        "Life.expectancy": "88",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2009",
        "Population": "1653388",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2008",
        "Population": "16445593",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2007",
        "Population": "16381696",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2006",
        "Population": "1634611",
        "Life.expectancy": "79.8",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2005",
        "Population": "16319868",
        "Life.expectancy": "79.4",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2004",
        "Population": "16281779",
        "Life.expectancy": "79.2",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2003",
        "Population": "1622532",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2002",
        "Population": "16148929",
        "Life.expectancy": "78.4",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2001",
        "Population": "164618",
        "Life.expectancy": "78.3",
        "Status": "Developed"
      },
      {
        "Country": "Netherlands",
        "Year": "2000",
        "Population": "15925513",
        "Life.expectancy": "78.1",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "81.6",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "81.5",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "81.3",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "89",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "85",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "79.9",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "79.9",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "79.2",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "79.1",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "78.5",
        "Status": "Developed"
      },
      {
        "Country": "New Zealand",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "78.6",
        "Status": "Developed"
      },
      {
        "Country": "Nicaragua",
        "Year": "2015",
        "Population": "68235",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2014",
        "Population": "613997",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2013",
        "Population": "5945747",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2012",
        "Population": "587718",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2011",
        "Population": "58782",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2010",
        "Population": "5737723",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2009",
        "Population": "5666581",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2008",
        "Population": "559456",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2007",
        "Population": "552216",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2006",
        "Population": "545211",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2005",
        "Population": "5379328",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2004",
        "Population": "53973",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2003",
        "Population": "524879",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2002",
        "Population": "5171734",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2001",
        "Population": "5175",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Nicaragua",
        "Year": "2000",
        "Population": "526796",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2015",
        "Population": "19896965",
        "Life.expectancy": "61.8",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2014",
        "Population": "19148219",
        "Life.expectancy": "61.4",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2013",
        "Population": "18426372",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2012",
        "Population": "17731634",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2011",
        "Population": "1764636",
        "Life.expectancy": "59.4",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2010",
        "Population": "16425578",
        "Life.expectancy": "58.2",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2009",
        "Population": "15813913",
        "Life.expectancy": "57.1",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2008",
        "Population": "15228525",
        "Life.expectancy": "56",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2007",
        "Population": "14668338",
        "Life.expectancy": "55.2",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2006",
        "Population": "1413264",
        "Life.expectancy": "54.5",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2005",
        "Population": "13618449",
        "Life.expectancy": "53.7",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2004",
        "Population": "1312712",
        "Life.expectancy": "52.9",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2003",
        "Population": "1265687",
        "Life.expectancy": "52.1",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2002",
        "Population": "12262",
        "Life.expectancy": "51.4",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2001",
        "Population": "11771976",
        "Life.expectancy": "56",
        "Status": "Developing"
      },
      {
        "Country": "Niger",
        "Year": "2000",
        "Population": "11352973",
        "Life.expectancy": "50",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2015",
        "Population": "181181744",
        "Life.expectancy": "54.5",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2014",
        "Population": "1764652",
        "Life.expectancy": "53.6",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2013",
        "Population": "17182933",
        "Life.expectancy": "53.2",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2012",
        "Population": "167297284",
        "Life.expectancy": "52.7",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2011",
        "Population": "16287776",
        "Life.expectancy": "52.3",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2010",
        "Population": "158578261",
        "Life.expectancy": "52",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2009",
        "Population": "15442181",
        "Life.expectancy": "51.6",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2008",
        "Population": "1534739",
        "Life.expectancy": "59",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2007",
        "Population": "14641724",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2006",
        "Population": "14261494",
        "Life.expectancy": "49.8",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2005",
        "Population": "138939478",
        "Life.expectancy": "49.2",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2004",
        "Population": "135393616",
        "Life.expectancy": "48.5",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2003",
        "Population": "131972533",
        "Life.expectancy": "48.1",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2002",
        "Population": "12866671",
        "Life.expectancy": "47.7",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2001",
        "Population": "125463434",
        "Life.expectancy": "47.4",
        "Status": "Developing"
      },
      {
        "Country": "Nigeria",
        "Year": "2000",
        "Population": "1223529",
        "Life.expectancy": "47.1",
        "Status": "Developing"
      },
      {
        "Country": "Niue",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "0",
        "Status": "Developing"
      },
      {
        "Country": "Norway",
        "Year": "2015",
        "Population": "518867",
        "Life.expectancy": "81.8",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2014",
        "Population": "5137232",
        "Life.expectancy": "81.6",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2013",
        "Population": "579623",
        "Life.expectancy": "81.5",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2012",
        "Population": "518573",
        "Life.expectancy": "81.3",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2011",
        "Population": "495388",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2010",
        "Population": "4889252",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2009",
        "Population": "4828726",
        "Life.expectancy": "89",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2008",
        "Population": "4768212",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2007",
        "Population": "479153",
        "Life.expectancy": "85",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2006",
        "Population": "466677",
        "Life.expectancy": "84",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2005",
        "Population": "4623291",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2004",
        "Population": "459191",
        "Life.expectancy": "79.8",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2003",
        "Population": "4564855",
        "Life.expectancy": "79.4",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2002",
        "Population": "4538159",
        "Life.expectancy": "78.9",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2001",
        "Population": "4513751",
        "Life.expectancy": "78.8",
        "Status": "Developed"
      },
      {
        "Country": "Norway",
        "Year": "2000",
        "Population": "449967",
        "Life.expectancy": "78.5",
        "Status": "Developed"
      },
      {
        "Country": "Oman",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "76.6",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "76.4",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "75.8",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "74.3",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Oman",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2015",
        "Population": "18938513",
        "Life.expectancy": "66.4",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2014",
        "Population": "185546257",
        "Life.expectancy": "66.2",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2013",
        "Population": "181712595",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2012",
        "Population": "177911533",
        "Life.expectancy": "65.7",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2011",
        "Population": "174184265",
        "Life.expectancy": "65.5",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2010",
        "Population": "1756182",
        "Life.expectancy": "65.1",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2009",
        "Population": "1674958",
        "Life.expectancy": "64.8",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2008",
        "Population": "16364463",
        "Life.expectancy": "64.6",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2007",
        "Population": "16332974",
        "Life.expectancy": "64.4",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2006",
        "Population": "15793993",
        "Life.expectancy": "64.2",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2005",
        "Population": "15399667",
        "Life.expectancy": "62.9",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2004",
        "Population": "15783",
        "Life.expectancy": "63.7",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2003",
        "Population": "1477341",
        "Life.expectancy": "63.5",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2002",
        "Population": "144654143",
        "Life.expectancy": "63.2",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2001",
        "Population": "14161437",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Pakistan",
        "Year": "2000",
        "Population": "138523285",
        "Life.expectancy": "62.8",
        "Status": "Developing"
      },
      {
        "Country": "Palau",
        "Year": "2013",
        "Population": "292",
        "Life.expectancy": "0",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2015",
        "Population": "3969249",
        "Life.expectancy": "77.8",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2014",
        "Population": "393986",
        "Life.expectancy": "77.6",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2013",
        "Population": "3838462",
        "Life.expectancy": "77.5",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2012",
        "Population": "3772938",
        "Life.expectancy": "77.2",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2011",
        "Population": "377782",
        "Life.expectancy": "77.3",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2010",
        "Population": "3643222",
        "Life.expectancy": "76.5",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2009",
        "Population": "3579385",
        "Life.expectancy": "76.8",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2008",
        "Population": "3516268",
        "Life.expectancy": "76.5",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2007",
        "Population": "345387",
        "Life.expectancy": "76.4",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2006",
        "Population": "339195",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2005",
        "Population": "333465",
        "Life.expectancy": "75.8",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2004",
        "Population": "3269541",
        "Life.expectancy": "75.8",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2003",
        "Population": "329174",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2002",
        "Population": "3149265",
        "Life.expectancy": "75.7",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2001",
        "Population": "389684",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "Panama",
        "Year": "2000",
        "Population": "33347",
        "Life.expectancy": "75.7",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2015",
        "Population": "7919825",
        "Life.expectancy": "62.9",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2014",
        "Population": "7755785",
        "Life.expectancy": "62.7",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2013",
        "Population": "7592865",
        "Life.expectancy": "62.4",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2012",
        "Population": "743836",
        "Life.expectancy": "62.2",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2011",
        "Population": "7269348",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2010",
        "Population": "718239",
        "Life.expectancy": "61.8",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2009",
        "Population": "6947447",
        "Life.expectancy": "61.6",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2008",
        "Population": "6787187",
        "Life.expectancy": "61.4",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2007",
        "Population": "6627922",
        "Life.expectancy": "61.1",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2006",
        "Population": "647272",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2005",
        "Population": "631479",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2004",
        "Population": "6161517",
        "Life.expectancy": "59.9",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2003",
        "Population": "61724",
        "Life.expectancy": "59.6",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2002",
        "Population": "5862316",
        "Life.expectancy": "59.3",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2001",
        "Population": "5716152",
        "Life.expectancy": "59.1",
        "Status": "Developing"
      },
      {
        "Country": "Papua New Guinea",
        "Year": "2000",
        "Population": "5572222",
        "Life.expectancy": "58.9",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2015",
        "Population": "6639119",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2014",
        "Population": "6552584",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2013",
        "Population": "646574",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2012",
        "Population": "6379219",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2011",
        "Population": "6293783",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2010",
        "Population": "629877",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2009",
        "Population": "6127837",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2008",
        "Population": "647117",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2007",
        "Population": "5966159",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2006",
        "Population": "5882796",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2005",
        "Population": "5795494",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2004",
        "Population": "57374",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2003",
        "Population": "56795",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2002",
        "Population": "558611",
        "Life.expectancy": "71.5",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2001",
        "Population": "546624",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Paraguay",
        "Year": "2000",
        "Population": "5327",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2015",
        "Population": "31376671",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2014",
        "Population": "3973354",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2013",
        "Population": "3565716",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2012",
        "Population": "3158966",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2011",
        "Population": "29759989",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2010",
        "Population": "29373646",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2009",
        "Population": "29157",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2008",
        "Population": "2864198",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2007",
        "Population": "28292724",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2006",
        "Population": "27949944",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2005",
        "Population": "276141",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2004",
        "Population": "27273194",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2003",
        "Population": "26937738",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2002",
        "Population": "2661467",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2001",
        "Population": "26261363",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Peru",
        "Year": "2000",
        "Population": "25914879",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2015",
        "Population": "11716359",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2014",
        "Population": "112249",
        "Life.expectancy": "68.4",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2013",
        "Population": "9848132",
        "Life.expectancy": "68.1",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2012",
        "Population": "96866642",
        "Life.expectancy": "68.1",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2011",
        "Population": "9527794",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2010",
        "Population": "93726624",
        "Life.expectancy": "67.9",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2009",
        "Population": "9222879",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2008",
        "Population": "9751864",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2007",
        "Population": "8929349",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2006",
        "Population": "8789419",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2005",
        "Population": "86274237",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2004",
        "Population": "84678493",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2003",
        "Population": "8331954",
        "Life.expectancy": "67.2",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2002",
        "Population": "813526",
        "Life.expectancy": "66.8",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2001",
        "Population": "79665315",
        "Life.expectancy": "66.8",
        "Status": "Developing"
      },
      {
        "Country": "Philippines",
        "Year": "2000",
        "Population": "77991569",
        "Life.expectancy": "66.8",
        "Status": "Developing"
      },
      {
        "Country": "Poland",
        "Year": "2015",
        "Population": "37986412",
        "Life.expectancy": "77.5",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2014",
        "Population": "3811735",
        "Life.expectancy": "77.3",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2013",
        "Population": "384196",
        "Life.expectancy": "77.1",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2012",
        "Population": "3863164",
        "Life.expectancy": "76.8",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2011",
        "Population": "3863255",
        "Life.expectancy": "76.7",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2010",
        "Population": "3842794",
        "Life.expectancy": "76.3",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2009",
        "Population": "3815163",
        "Life.expectancy": "75.7",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2008",
        "Population": "38125759",
        "Life.expectancy": "75.5",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2007",
        "Population": "381256",
        "Life.expectancy": "75.3",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2006",
        "Population": "38141267",
        "Life.expectancy": "75.2",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2005",
        "Population": "38165445",
        "Life.expectancy": "75",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2004",
        "Population": "38182222",
        "Life.expectancy": "74.9",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2003",
        "Population": "382457",
        "Life.expectancy": "74.7",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2002",
        "Population": "3823364",
        "Life.expectancy": "74.5",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2001",
        "Population": "3824876",
        "Life.expectancy": "74.2",
        "Status": "Developed"
      },
      {
        "Country": "Poland",
        "Year": "2000",
        "Population": "38258629",
        "Life.expectancy": "73.7",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2015",
        "Population": "135876",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2014",
        "Population": "14162",
        "Life.expectancy": "89",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2013",
        "Population": "1457295",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2012",
        "Population": "1514844",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2011",
        "Population": "155756",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2010",
        "Population": "15731",
        "Life.expectancy": "79.6",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2009",
        "Population": "1568247",
        "Life.expectancy": "79.3",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2008",
        "Population": "1558177",
        "Life.expectancy": "79",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2007",
        "Population": "1542964",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2006",
        "Population": "1522288",
        "Life.expectancy": "78.5",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2005",
        "Population": "15333",
        "Life.expectancy": "77.7",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2004",
        "Population": "1483861",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2003",
        "Population": "1458821",
        "Life.expectancy": "77.3",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2002",
        "Population": "1419631",
        "Life.expectancy": "77.2",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2001",
        "Population": "1362722",
        "Life.expectancy": "76.9",
        "Status": "Developed"
      },
      {
        "Country": "Portugal",
        "Year": "2000",
        "Population": "1289898",
        "Life.expectancy": "76.6",
        "Status": "Developed"
      },
      {
        "Country": "Qatar",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "78.2",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "78.1",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "77.9",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "77.8",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "77.5",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "77.3",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "76.8",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "76.7",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "76.6",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "76.6",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "76.6",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "76.5",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "76.4",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "76.3",
        "Status": "Developing"
      },
      {
        "Country": "Qatar",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "82.3",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "82",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "81.7",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "81.2",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "81.1",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "87",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "86",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "83",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "79.8",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "79.4",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "78.7",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "78.2",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "77.6",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "77.1",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "76.7",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Korea",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "68.8",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "68.9",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "67.6",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "67.6",
        "Status": "Developing"
      },
      {
        "Country": "Republic of Moldova",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "67.1",
        "Status": "Developing"
      },
      {
        "Country": "Romania",
        "Year": "2015",
        "Population": "19815481",
        "Life.expectancy": "75",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2014",
        "Population": "1998979",
        "Life.expectancy": "74.8",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2013",
        "Population": "19983693",
        "Life.expectancy": "74.6",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2012",
        "Population": "25835",
        "Life.expectancy": "74.4",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2011",
        "Population": "2147528",
        "Life.expectancy": "74.3",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2010",
        "Population": "2246871",
        "Life.expectancy": "73.4",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2009",
        "Population": "2367487",
        "Life.expectancy": "73.1",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2008",
        "Population": "2537875",
        "Life.expectancy": "73.1",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2007",
        "Population": "2882982",
        "Life.expectancy": "72.9",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2006",
        "Population": "2119376",
        "Life.expectancy": "72.5",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2005",
        "Population": "21319685",
        "Life.expectancy": "71.9",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2004",
        "Population": "21451748",
        "Life.expectancy": "71.7",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2003",
        "Population": "21574326",
        "Life.expectancy": "71.1",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2002",
        "Population": "2173496",
        "Life.expectancy": "77",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2001",
        "Population": "2213197",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "Romania",
        "Year": "2000",
        "Population": "22442971",
        "Life.expectancy": "77",
        "Status": "Developed"
      },
      {
        "Country": "Russian Federation",
        "Year": "2015",
        "Population": "1449687",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2014",
        "Population": "143819666",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2013",
        "Population": "14356911",
        "Life.expectancy": "70",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2012",
        "Population": "14321676",
        "Life.expectancy": "69.6",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2011",
        "Population": "14296868",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2010",
        "Population": "142849449",
        "Life.expectancy": "68.4",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2009",
        "Population": "142785342",
        "Life.expectancy": "68.2",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2008",
        "Population": "14274235",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2007",
        "Population": "1428588",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2006",
        "Population": "14349528",
        "Life.expectancy": "66.4",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2005",
        "Population": "143518523",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2004",
        "Population": "1446754",
        "Life.expectancy": "64.9",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2003",
        "Population": "144648257",
        "Life.expectancy": "64.6",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2002",
        "Population": "1453646",
        "Life.expectancy": "64.8",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2001",
        "Population": "14597683",
        "Life.expectancy": "65.1",
        "Status": "Developing"
      },
      {
        "Country": "Russian Federation",
        "Year": "2000",
        "Population": "146596557",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2015",
        "Population": "11629553",
        "Life.expectancy": "66.1",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2014",
        "Population": "11345357",
        "Life.expectancy": "65.7",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2013",
        "Population": "1165151",
        "Life.expectancy": "65.2",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2012",
        "Population": "1788853",
        "Life.expectancy": "64.6",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2011",
        "Population": "151671",
        "Life.expectancy": "63.8",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2010",
        "Population": "1246842",
        "Life.expectancy": "62.8",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2009",
        "Population": "9977446",
        "Life.expectancy": "61",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2008",
        "Population": "978169",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2007",
        "Population": "944742",
        "Life.expectancy": "59.6",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2006",
        "Population": "92658",
        "Life.expectancy": "57.6",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2005",
        "Population": "8991735",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2004",
        "Population": "8818438",
        "Life.expectancy": "53.4",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2003",
        "Population": "868346",
        "Life.expectancy": "52",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2002",
        "Population": "853625",
        "Life.expectancy": "57",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2001",
        "Population": "832946",
        "Life.expectancy": "48.6",
        "Status": "Developing"
      },
      {
        "Country": "Rwanda",
        "Year": "2000",
        "Population": "82573",
        "Life.expectancy": "48.3",
        "Status": "Developing"
      },
      {
        "Country": "Saint Kitts and Nevis",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "0",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "74.3",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Saint Lucia",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "71.6",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2015",
        "Population": "193759",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2014",
        "Population": "19229",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2013",
        "Population": "19757",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2012",
        "Population": "189194",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2011",
        "Population": "187665",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2010",
        "Population": "18625",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2009",
        "Population": "184826",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2008",
        "Population": "183526",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2007",
        "Population": "182286",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2006",
        "Population": "18194",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2005",
        "Population": "179929",
        "Life.expectancy": "71.6",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2004",
        "Population": "178781",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2003",
        "Population": "177662",
        "Life.expectancy": "79",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2002",
        "Population": "176582",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2001",
        "Population": "175566",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Samoa",
        "Year": "2000",
        "Population": "17461",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "San Marino",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "0",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2015",
        "Population": "195553",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2014",
        "Population": "191266",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2013",
        "Population": "18745",
        "Life.expectancy": "67.1",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2012",
        "Population": "182889",
        "Life.expectancy": "66.9",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2011",
        "Population": "1788",
        "Life.expectancy": "66.6",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2010",
        "Population": "174776",
        "Life.expectancy": "66.2",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2009",
        "Population": "17813",
        "Life.expectancy": "65.8",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2008",
        "Population": "166913",
        "Life.expectancy": "65.4",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2007",
        "Population": "16311",
        "Life.expectancy": "65.1",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2006",
        "Population": "159328",
        "Life.expectancy": "64.7",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2005",
        "Population": "15563",
        "Life.expectancy": "64.3",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2004",
        "Population": "151969",
        "Life.expectancy": "63.8",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2003",
        "Population": "148372",
        "Life.expectancy": "63.4",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2002",
        "Population": "144889",
        "Life.expectancy": "63.1",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2001",
        "Population": "141622",
        "Life.expectancy": "62.8",
        "Status": "Developing"
      },
      {
        "Country": "Sao Tome and Principe",
        "Year": "2000",
        "Population": "13866",
        "Life.expectancy": "62.6",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "74.3",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Saudi Arabia",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2015",
        "Population": "14976994",
        "Life.expectancy": "66.7",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2014",
        "Population": "14546111",
        "Life.expectancy": "66.4",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2013",
        "Population": "141232",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2012",
        "Population": "1373513",
        "Life.expectancy": "65.6",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2011",
        "Population": "13391",
        "Life.expectancy": "64.9",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2010",
        "Population": "12916229",
        "Life.expectancy": "64.3",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2009",
        "Population": "1255917",
        "Life.expectancy": "63.5",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2008",
        "Population": "1223957",
        "Life.expectancy": "62.8",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2007",
        "Population": "11873557",
        "Life.expectancy": "62.1",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2006",
        "Population": "11556763",
        "Life.expectancy": "61.3",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2005",
        "Population": "11251266",
        "Life.expectancy": "65",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2004",
        "Population": "1955944",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2003",
        "Population": "16799",
        "Life.expectancy": "59",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2002",
        "Population": "1396861",
        "Life.expectancy": "58.4",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2001",
        "Population": "1134497",
        "Life.expectancy": "57.9",
        "Status": "Developing"
      },
      {
        "Country": "Senegal",
        "Year": "2000",
        "Population": "988452",
        "Life.expectancy": "57.5",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2015",
        "Population": "795383",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2014",
        "Population": "713576",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2013",
        "Population": "7164132",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2012",
        "Population": "719977",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2011",
        "Population": "723499",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2010",
        "Population": "7291436",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2009",
        "Population": "73287",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2008",
        "Population": "735222",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2007",
        "Population": "7381579",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2006",
        "Population": "7411569",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2005",
        "Population": "744769",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2004",
        "Population": "7463157",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2003",
        "Population": "748591",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2002",
        "Population": "7496522",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2001",
        "Population": "753433",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Serbia",
        "Year": "2000",
        "Population": "7516346",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2015",
        "Population": "93419",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2014",
        "Population": "91359",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2013",
        "Population": "89949",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2012",
        "Population": "8833",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2011",
        "Population": "87441",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2010",
        "Population": "8977",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2009",
        "Population": "87298",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2008",
        "Population": "86956",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2007",
        "Population": "8533",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2006",
        "Population": "846",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2005",
        "Population": "82858",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2004",
        "Population": "82475",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2003",
        "Population": "82781",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2002",
        "Population": "83723",
        "Life.expectancy": "72.1",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2001",
        "Population": "8122",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Seychelles",
        "Year": "2000",
        "Population": "81131",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2015",
        "Population": "723725",
        "Life.expectancy": "51",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2014",
        "Population": "779162",
        "Life.expectancy": "48.1",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2013",
        "Population": "692279",
        "Life.expectancy": "54",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2012",
        "Population": "676613",
        "Life.expectancy": "49.7",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2011",
        "Population": "6611692",
        "Life.expectancy": "48.9",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2010",
        "Population": "645872",
        "Life.expectancy": "48.1",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2009",
        "Population": "63126",
        "Life.expectancy": "47.1",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2008",
        "Population": "6165372",
        "Life.expectancy": "46.2",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2007",
        "Population": "615417",
        "Life.expectancy": "45.3",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2006",
        "Population": "5848692",
        "Life.expectancy": "44.3",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2005",
        "Population": "5658379",
        "Life.expectancy": "43.3",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2004",
        "Population": "5439695",
        "Life.expectancy": "42.3",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2003",
        "Population": "5199549",
        "Life.expectancy": "41.5",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2002",
        "Population": "4957216",
        "Life.expectancy": "48",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2001",
        "Population": "4739147",
        "Life.expectancy": "41",
        "Status": "Developing"
      },
      {
        "Country": "Sierra Leone",
        "Year": "2000",
        "Population": "4564297",
        "Life.expectancy": "39",
        "Status": "Developing"
      },
      {
        "Country": "Singapore",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "83.1",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "82.9",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "82.7",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "82.5",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "82.2",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "81.7",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "81.4",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "87",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "79.7",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "79.3",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "79",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "Singapore",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "78.3",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "76.7",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "76.4",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "76.1",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "75.8",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "75.6",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "75.1",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "75",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "74.7",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "74.4",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "74.3",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "74",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "74.1",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "73.8",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "73.7",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "73.3",
        "Status": "Developed"
      },
      {
        "Country": "Slovakia",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "73",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2015",
        "Population": "263531",
        "Life.expectancy": "88",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2014",
        "Population": "26198",
        "Life.expectancy": "87",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2013",
        "Population": "259953",
        "Life.expectancy": "85",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2012",
        "Population": "257159",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2011",
        "Population": "252843",
        "Life.expectancy": "79.8",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2010",
        "Population": "248583",
        "Life.expectancy": "79.5",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2009",
        "Population": "239669",
        "Life.expectancy": "79.1",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2008",
        "Population": "221316",
        "Life.expectancy": "78.9",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2007",
        "Population": "218122",
        "Life.expectancy": "78.3",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2006",
        "Population": "26868",
        "Life.expectancy": "78.1",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2005",
        "Population": "2474",
        "Life.expectancy": "77.5",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2004",
        "Population": "199712",
        "Life.expectancy": "77.2",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2003",
        "Population": "1995733",
        "Life.expectancy": "76.5",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2002",
        "Population": "199453",
        "Life.expectancy": "76.6",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2001",
        "Population": "19926",
        "Life.expectancy": "76.2",
        "Status": "Developed"
      },
      {
        "Country": "Slovenia",
        "Year": "2000",
        "Population": "1988925",
        "Life.expectancy": "76",
        "Status": "Developed"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2015",
        "Population": "587482",
        "Life.expectancy": "69.2",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2014",
        "Population": "57554",
        "Life.expectancy": "68.8",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2013",
        "Population": "563513",
        "Life.expectancy": "68.8",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2012",
        "Population": "551531",
        "Life.expectancy": "68.7",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2011",
        "Population": "539614",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2010",
        "Population": "52779",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2009",
        "Population": "51679",
        "Life.expectancy": "68.1",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2008",
        "Population": "54477",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2007",
        "Population": "49294",
        "Life.expectancy": "67.6",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2006",
        "Population": "481422",
        "Life.expectancy": "67.6",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2005",
        "Population": "469885",
        "Life.expectancy": "67.4",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2004",
        "Population": "458324",
        "Life.expectancy": "67.1",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2003",
        "Population": "446769",
        "Life.expectancy": "66.8",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2002",
        "Population": "435262",
        "Life.expectancy": "66.5",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2001",
        "Population": "423853",
        "Life.expectancy": "66.2",
        "Status": "Developing"
      },
      {
        "Country": "Solomon Islands",
        "Year": "2000",
        "Population": "41269",
        "Life.expectancy": "65.8",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "54.3",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "54.2",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "53.1",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "53.1",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "52.4",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "52.2",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "51.9",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "51.5",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "51.5",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "51.6",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "51.2",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "51.1",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "57",
        "Status": "Developing"
      },
      {
        "Country": "Somalia",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2015",
        "Population": "5511976.68",
        "Life.expectancy": "62.9",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2014",
        "Population": "54146734.74",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2013",
        "Population": "53311955.61",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2012",
        "Population": "5256515.8",
        "Life.expectancy": "59.2",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2011",
        "Population": "51729345.36",
        "Life.expectancy": "58.9",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2010",
        "Population": "5979432.36",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2009",
        "Population": "5255813.11",
        "Life.expectancy": "56.5",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2008",
        "Population": "49557573.3",
        "Life.expectancy": "55.3",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2007",
        "Population": "48883844.99",
        "Life.expectancy": "54.5",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2006",
        "Population": "4823384.48",
        "Life.expectancy": "54",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2005",
        "Population": "476667.24",
        "Life.expectancy": "53.8",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2004",
        "Population": "4717.99",
        "Life.expectancy": "53.7",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2003",
        "Population": "46418193.9",
        "Life.expectancy": "54",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2002",
        "Population": "45855482.88",
        "Life.expectancy": "54.9",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2001",
        "Population": "45312937",
        "Life.expectancy": "56",
        "Status": "Developing"
      },
      {
        "Country": "South Africa",
        "Year": "2000",
        "Population": "44896856",
        "Life.expectancy": "57.3",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2015",
        "Population": "11882136",
        "Life.expectancy": "57.3",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2014",
        "Population": "1153971",
        "Life.expectancy": "56.6",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2013",
        "Population": "1117749",
        "Life.expectancy": "56.4",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2012",
        "Population": "1818258",
        "Life.expectancy": "56",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2011",
        "Population": "1448857",
        "Life.expectancy": "55.4",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2010",
        "Population": "167192",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2009",
        "Population": "967667",
        "Life.expectancy": "54.3",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2008",
        "Population": "9263136",
        "Life.expectancy": "53.6",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2007",
        "Population": "88568",
        "Life.expectancy": "53.1",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2006",
        "Population": "8468152",
        "Life.expectancy": "52.5",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2005",
        "Population": "818877",
        "Life.expectancy": "51.9",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2004",
        "Population": "7787655",
        "Life.expectancy": "51.4",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2003",
        "Population": "751642",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2002",
        "Population": "7237276",
        "Life.expectancy": "52",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2001",
        "Population": "6974442",
        "Life.expectancy": "49.6",
        "Status": "Developing"
      },
      {
        "Country": "South Sudan",
        "Year": "2000",
        "Population": "67656",
        "Life.expectancy": "48.9",
        "Status": "Developing"
      },
      {
        "Country": "Spain",
        "Year": "2015",
        "Population": "46447697",
        "Life.expectancy": "82.8",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2014",
        "Population": "4648882",
        "Life.expectancy": "82.6",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2013",
        "Population": "466245",
        "Life.expectancy": "82.4",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2012",
        "Population": "4677355",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2011",
        "Population": "46742697",
        "Life.expectancy": "82.1",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2010",
        "Population": "46576897",
        "Life.expectancy": "81.9",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2009",
        "Population": "46362946",
        "Life.expectancy": "81.6",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2008",
        "Population": "4595416",
        "Life.expectancy": "81.3",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2007",
        "Population": "4522683",
        "Life.expectancy": "89",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2006",
        "Population": "44397319",
        "Life.expectancy": "88",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2005",
        "Population": "43653155",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2004",
        "Population": "42921895",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2003",
        "Population": "42187645",
        "Life.expectancy": "79.4",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2002",
        "Population": "41431558",
        "Life.expectancy": "79.5",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2001",
        "Population": "485412",
        "Life.expectancy": "79.4",
        "Status": "Developed"
      },
      {
        "Country": "Spain",
        "Year": "2000",
        "Population": "4567864",
        "Life.expectancy": "79.1",
        "Status": "Developed"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2015",
        "Population": "2966",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2014",
        "Population": "2771",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2013",
        "Population": "2585",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2012",
        "Population": "2425",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2011",
        "Population": "2271",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2010",
        "Population": "2119",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2009",
        "Population": "19968",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2008",
        "Population": "19817",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2007",
        "Population": "19668",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2006",
        "Population": "1952",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2005",
        "Population": "19373",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2004",
        "Population": "19228",
        "Life.expectancy": "69.1",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2003",
        "Population": "1983",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2002",
        "Population": "18939",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2001",
        "Population": "18797",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Sri Lanka",
        "Year": "2000",
        "Population": "18655",
        "Life.expectancy": "71.5",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2015",
        "Population": "3864783",
        "Life.expectancy": "64.1",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2014",
        "Population": "37737913",
        "Life.expectancy": "63.8",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2013",
        "Population": "36849918",
        "Life.expectancy": "63.5",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2012",
        "Population": "3599192",
        "Life.expectancy": "63.2",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2011",
        "Population": "35167314",
        "Life.expectancy": "62.7",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2010",
        "Population": "34385963",
        "Life.expectancy": "62.5",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2009",
        "Population": "3365619",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2008",
        "Population": "32955496",
        "Life.expectancy": "61.8",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2007",
        "Population": "32282526",
        "Life.expectancy": "61.4",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2006",
        "Population": "316764",
        "Life.expectancy": "61",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2005",
        "Population": "3911914",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2004",
        "Population": "3186341",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2003",
        "Population": "29435944",
        "Life.expectancy": "59.6",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2002",
        "Population": "28679565",
        "Life.expectancy": "59.4",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2001",
        "Population": "279455",
        "Life.expectancy": "58.9",
        "Status": "Developing"
      },
      {
        "Country": "Sudan",
        "Year": "2000",
        "Population": "2725535",
        "Life.expectancy": "58.6",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2015",
        "Population": "55328",
        "Life.expectancy": "71.6",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2014",
        "Population": "547928",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2013",
        "Population": "54254",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2012",
        "Population": "53777",
        "Life.expectancy": "71.3",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2011",
        "Population": "531589",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2010",
        "Population": "52613",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2009",
        "Population": "52619",
        "Life.expectancy": "70",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2008",
        "Population": "515148",
        "Life.expectancy": "69.8",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2007",
        "Population": "5975",
        "Life.expectancy": "69.5",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2006",
        "Population": "5437",
        "Life.expectancy": "69.3",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2005",
        "Population": "498946",
        "Life.expectancy": "68.9",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2004",
        "Population": "49363",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2003",
        "Population": "488332",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2002",
        "Population": "48344",
        "Life.expectancy": "67.9",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2001",
        "Population": "47774",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Suriname",
        "Year": "2000",
        "Population": "47239",
        "Life.expectancy": "67.4",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2015",
        "Population": "131911",
        "Life.expectancy": "58.9",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2014",
        "Population": "129597",
        "Life.expectancy": "58.4",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2013",
        "Population": "1271456",
        "Life.expectancy": "57.6",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2012",
        "Population": "1248158",
        "Life.expectancy": "56.5",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2011",
        "Population": "1225258",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2010",
        "Population": "122843",
        "Life.expectancy": "53.6",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2009",
        "Population": "118675",
        "Life.expectancy": "52.6",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2008",
        "Population": "1158897",
        "Life.expectancy": "51.4",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2007",
        "Population": "1138434",
        "Life.expectancy": "50",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2006",
        "Population": "112514",
        "Life.expectancy": "47.8",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2005",
        "Population": "115873",
        "Life.expectancy": "46",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2004",
        "Population": "19553",
        "Life.expectancy": "45.6",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2003",
        "Population": "187392",
        "Life.expectancy": "45.9",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2002",
        "Population": "1893",
        "Life.expectancy": "46.4",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2001",
        "Population": "172927",
        "Life.expectancy": "47.1",
        "Status": "Developing"
      },
      {
        "Country": "Swaziland",
        "Year": "2000",
        "Population": "161468",
        "Life.expectancy": "48.4",
        "Status": "Developing"
      },
      {
        "Country": "Sweden",
        "Year": "2015",
        "Population": "9799186",
        "Life.expectancy": "82.4",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2014",
        "Population": "969611",
        "Life.expectancy": "82.3",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2013",
        "Population": "96379",
        "Life.expectancy": "81.9",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2012",
        "Population": "9519374",
        "Life.expectancy": "81.7",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2011",
        "Population": "9449213",
        "Life.expectancy": "81.7",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2010",
        "Population": "9378126",
        "Life.expectancy": "81.5",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2009",
        "Population": "9298515",
        "Life.expectancy": "81.4",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2008",
        "Population": "9219637",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2007",
        "Population": "914892",
        "Life.expectancy": "89",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2006",
        "Population": "9855",
        "Life.expectancy": "88",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2005",
        "Population": "929572",
        "Life.expectancy": "85",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2004",
        "Population": "8993531",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2003",
        "Population": "8958229",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2002",
        "Population": "8924958",
        "Life.expectancy": "79.9",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2001",
        "Population": "889596",
        "Life.expectancy": "79.8",
        "Status": "Developed"
      },
      {
        "Country": "Sweden",
        "Year": "2000",
        "Population": "887219",
        "Life.expectancy": "79.6",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2015",
        "Population": "8282396",
        "Life.expectancy": "83.4",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2014",
        "Population": "8188649",
        "Life.expectancy": "83.2",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2013",
        "Population": "889346",
        "Life.expectancy": "83",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2012",
        "Population": "7996861",
        "Life.expectancy": "82.7",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2011",
        "Population": "7912398",
        "Life.expectancy": "82.6",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2010",
        "Population": "782499",
        "Life.expectancy": "82.3",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2009",
        "Population": "7743831",
        "Life.expectancy": "82.1",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2008",
        "Population": "7647675",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2007",
        "Population": "7551117",
        "Life.expectancy": "81.7",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2006",
        "Population": "7483934",
        "Life.expectancy": "81.5",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2005",
        "Population": "7437115",
        "Life.expectancy": "81.1",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2004",
        "Population": "7389625",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2003",
        "Population": "73391",
        "Life.expectancy": "85",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2002",
        "Population": "7284753",
        "Life.expectancy": "84",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2001",
        "Population": "7229854",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "Switzerland",
        "Year": "2000",
        "Population": "718425",
        "Life.expectancy": "79.7",
        "Status": "Developed"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2015",
        "Population": "18734987",
        "Life.expectancy": "64.5",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2014",
        "Population": "19239",
        "Life.expectancy": "64.4",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2013",
        "Population": "1989141",
        "Life.expectancy": "63.6",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2012",
        "Population": "24271",
        "Life.expectancy": "62.8",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2011",
        "Population": "2863993",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2010",
        "Population": "2118834",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2009",
        "Population": "2824893",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2008",
        "Population": "2325443",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2007",
        "Population": "1963286",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2006",
        "Population": "18914977",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2005",
        "Population": "18294611",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2004",
        "Population": "1786638",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2003",
        "Population": "17415266",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2002",
        "Population": "178791",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2001",
        "Population": "16766899",
        "Life.expectancy": "72.7",
        "Status": "Developing"
      },
      {
        "Country": "Syrian Arab Republic",
        "Year": "2000",
        "Population": "1641848",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2015",
        "Population": "8548651",
        "Life.expectancy": "69.7",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2014",
        "Population": "8362745",
        "Life.expectancy": "69.6",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2013",
        "Population": "817789",
        "Life.expectancy": "69.3",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2012",
        "Population": "799562",
        "Life.expectancy": "68.8",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2011",
        "Population": "7815949",
        "Life.expectancy": "68.1",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2010",
        "Population": "764163",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2009",
        "Population": "7472819",
        "Life.expectancy": "66.7",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2008",
        "Population": "739728",
        "Life.expectancy": "66.4",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2007",
        "Population": "7152385",
        "Life.expectancy": "66.1",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2006",
        "Population": "7557",
        "Life.expectancy": "65.9",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2005",
        "Population": "6854176",
        "Life.expectancy": "65.5",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2004",
        "Population": "6712841",
        "Life.expectancy": "65.9",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2003",
        "Population": "6576877",
        "Life.expectancy": "65.2",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2002",
        "Population": "6447688",
        "Life.expectancy": "64.3",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2001",
        "Population": "6327125",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "Tajikistan",
        "Year": "2000",
        "Population": "621625",
        "Life.expectancy": "63.7",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2015",
        "Population": "686576",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2014",
        "Population": "68416772",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2013",
        "Population": "6814365",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2012",
        "Population": "67843979",
        "Life.expectancy": "74.3",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2011",
        "Population": "675313",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2010",
        "Population": "672888",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2009",
        "Population": "66881867",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2008",
        "Population": "6654576",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2007",
        "Population": "66195615",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2006",
        "Population": "65824164",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2005",
        "Population": "6542547",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2004",
        "Population": "652231",
        "Life.expectancy": "71.6",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2003",
        "Population": "64554952",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2002",
        "Population": "6473164",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2001",
        "Population": "63543322",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Thailand",
        "Year": "2000",
        "Population": "6295821",
        "Life.expectancy": "71.1",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "75.7",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "75.1",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "The former Yugoslav republic of Macedonia",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2015",
        "Population": "124977",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2014",
        "Population": "1212814",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2013",
        "Population": "1184366",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2012",
        "Population": "115676",
        "Life.expectancy": "67.4",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2011",
        "Population": "1131523",
        "Life.expectancy": "67.2",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2010",
        "Population": "119591",
        "Life.expectancy": "66.9",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2009",
        "Population": "19221",
        "Life.expectancy": "66.6",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2008",
        "Population": "17811",
        "Life.expectancy": "66.2",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2007",
        "Population": "164973",
        "Life.expectancy": "65.8",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2006",
        "Population": "148621",
        "Life.expectancy": "64.9",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2005",
        "Population": "126484",
        "Life.expectancy": "63.7",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2004",
        "Population": "996698",
        "Life.expectancy": "62.3",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2003",
        "Population": "96852",
        "Life.expectancy": "61",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2002",
        "Population": "923825",
        "Life.expectancy": "62",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2001",
        "Population": "892531",
        "Life.expectancy": "59.4",
        "Status": "Developing"
      },
      {
        "Country": "Timor-Leste",
        "Year": "2000",
        "Population": "87167",
        "Life.expectancy": "58.7",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2015",
        "Population": "741682",
        "Life.expectancy": "59.9",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2014",
        "Population": "7228915",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2013",
        "Population": "742948",
        "Life.expectancy": "59.4",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2012",
        "Population": "6859482",
        "Life.expectancy": "58.9",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2011",
        "Population": "6679282",
        "Life.expectancy": "58.3",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2010",
        "Population": "652952",
        "Life.expectancy": "57.4",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2009",
        "Population": "633472",
        "Life.expectancy": "56.7",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2008",
        "Population": "6161796",
        "Life.expectancy": "56.2",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2007",
        "Population": "5997385",
        "Life.expectancy": "55.9",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2006",
        "Population": "5837792",
        "Life.expectancy": "55.7",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2005",
        "Population": "5683268",
        "Life.expectancy": "55",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2004",
        "Population": "5534598",
        "Life.expectancy": "54.9",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2003",
        "Population": "539141",
        "Life.expectancy": "54.7",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2002",
        "Population": "5251472",
        "Life.expectancy": "54.7",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2001",
        "Population": "511177",
        "Life.expectancy": "54.6",
        "Status": "Developing"
      },
      {
        "Country": "Togo",
        "Year": "2000",
        "Population": "497367",
        "Life.expectancy": "54.6",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2015",
        "Population": "16364",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2014",
        "Population": "15782",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2013",
        "Population": "15328",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2012",
        "Population": "14951",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2011",
        "Population": "14577",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2010",
        "Population": "14137",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2009",
        "Population": "1364",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2008",
        "Population": "135",
        "Life.expectancy": "72.6",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2007",
        "Population": "12357",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2006",
        "Population": "11689",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2005",
        "Population": "1141",
        "Life.expectancy": "72.3",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2004",
        "Population": "146",
        "Life.expectancy": "72.2",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2003",
        "Population": "99789",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2002",
        "Population": "99184",
        "Life.expectancy": "71.9",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2001",
        "Population": "98611",
        "Life.expectancy": "71.8",
        "Status": "Developing"
      },
      {
        "Country": "Tonga",
        "Year": "2000",
        "Population": "9882",
        "Life.expectancy": "71.6",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2015",
        "Population": "13692",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2014",
        "Population": "1354493",
        "Life.expectancy": "71.1",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2013",
        "Population": "1348248",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2012",
        "Population": "1341588",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2011",
        "Population": "1334788",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2010",
        "Population": "13281",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2009",
        "Population": "1321618",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2008",
        "Population": "1315372",
        "Life.expectancy": "69.9",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2007",
        "Population": "13926",
        "Life.expectancy": "69.7",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2006",
        "Population": "133144",
        "Life.expectancy": "69.6",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2005",
        "Population": "1296934",
        "Life.expectancy": "69.5",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2004",
        "Population": "129535",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2003",
        "Population": "128452",
        "Life.expectancy": "69.3",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2002",
        "Population": "1277837",
        "Life.expectancy": "69.2",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2001",
        "Population": "127238",
        "Life.expectancy": "69.1",
        "Status": "Developing"
      },
      {
        "Country": "Trinidad and Tobago",
        "Year": "2000",
        "Population": "1267984",
        "Life.expectancy": "69.1",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2015",
        "Population": "11273661",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2014",
        "Population": "1114398",
        "Life.expectancy": "75.1",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2013",
        "Population": "1114558",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2012",
        "Population": "1886668",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2011",
        "Population": "1761467",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2010",
        "Population": "1639931",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2009",
        "Population": "1521834",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2008",
        "Population": "147336",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2007",
        "Population": "129887",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2006",
        "Population": "1196136",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2005",
        "Population": "112482",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2004",
        "Population": "11761",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2003",
        "Population": "9939678",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2002",
        "Population": "9864326",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2001",
        "Population": "978571",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Tunisia",
        "Year": "2000",
        "Population": "9699197",
        "Life.expectancy": "72.9",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2015",
        "Population": "78271472",
        "Life.expectancy": "75.8",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2014",
        "Population": "773628",
        "Life.expectancy": "75.5",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2013",
        "Population": "75787333",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2012",
        "Population": "74569867",
        "Life.expectancy": "74.8",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2011",
        "Population": "7349455",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2010",
        "Population": "72326914",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2009",
        "Population": "71339185",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2008",
        "Population": "74432",
        "Life.expectancy": "73.5",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2007",
        "Population": "69597281",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2006",
        "Population": "6876345",
        "Life.expectancy": "72.8",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2005",
        "Population": "679346",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2004",
        "Population": "677855",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2003",
        "Population": "668583",
        "Life.expectancy": "71.6",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2002",
        "Population": "6514354",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2001",
        "Population": "64191474",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Turkey",
        "Year": "2000",
        "Population": "6324121",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2015",
        "Population": "5565284",
        "Life.expectancy": "66.3",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2014",
        "Population": "5466241",
        "Life.expectancy": "66",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2013",
        "Population": "5366277",
        "Life.expectancy": "65.4",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2012",
        "Population": "5267839",
        "Life.expectancy": "65.6",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2011",
        "Population": "517461",
        "Life.expectancy": "65.6",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2010",
        "Population": "58721",
        "Life.expectancy": "65.8",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2009",
        "Population": "5795",
        "Life.expectancy": "65.6",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2008",
        "Population": "4935762",
        "Life.expectancy": "64.5",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2007",
        "Population": "487137",
        "Life.expectancy": "64.1",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2006",
        "Population": "48115",
        "Life.expectancy": "63.7",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2005",
        "Population": "4754641",
        "Life.expectancy": "63.3",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2004",
        "Population": "473398",
        "Life.expectancy": "63.5",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2003",
        "Population": "4655741",
        "Life.expectancy": "63.4",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2002",
        "Population": "4612",
        "Life.expectancy": "63.3",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2001",
        "Population": "45648",
        "Life.expectancy": "64",
        "Status": "Developing"
      },
      {
        "Country": "Turkmenistan",
        "Year": "2000",
        "Population": "4516131",
        "Life.expectancy": "63.8",
        "Status": "Developing"
      },
      {
        "Country": "Tuvalu",
        "Year": "2013",
        "Population": "1819",
        "Life.expectancy": "0",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2015",
        "Population": "414487",
        "Life.expectancy": "62.3",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2014",
        "Population": "38833338",
        "Life.expectancy": "61.5",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2013",
        "Population": "37553726",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2012",
        "Population": "3636796",
        "Life.expectancy": "60",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2011",
        "Population": "3593648",
        "Life.expectancy": "59.3",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2010",
        "Population": "33915133",
        "Life.expectancy": "58.4",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2009",
        "Population": "32771895",
        "Life.expectancy": "57.5",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2008",
        "Population": "31663896",
        "Life.expectancy": "56.3",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2007",
        "Population": "359487",
        "Life.expectancy": "55.5",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2006",
        "Population": "2955662",
        "Life.expectancy": "54.9",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2005",
        "Population": "2854394",
        "Life.expectancy": "53.2",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2004",
        "Population": "27568436",
        "Life.expectancy": "51.3",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2003",
        "Population": "2662482",
        "Life.expectancy": "51",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2002",
        "Population": "2571848",
        "Life.expectancy": "48.8",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2001",
        "Population": "24854892",
        "Life.expectancy": "47.7",
        "Status": "Developing"
      },
      {
        "Country": "Uganda",
        "Year": "2000",
        "Population": "2439274",
        "Life.expectancy": "46.6",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2015",
        "Population": "4515429",
        "Life.expectancy": "71.3",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2014",
        "Population": "45271947",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2013",
        "Population": "454896",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2012",
        "Population": "455933",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2011",
        "Population": "45761",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2010",
        "Population": "45877",
        "Life.expectancy": "69.8",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2009",
        "Population": "46533",
        "Life.expectancy": "69.2",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2008",
        "Population": "462582",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2007",
        "Population": "465935",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2006",
        "Population": "4678775",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2005",
        "Population": "471515",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2004",
        "Population": "474516",
        "Life.expectancy": "67.4",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2003",
        "Population": "4781295",
        "Life.expectancy": "67.6",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2002",
        "Population": "48225",
        "Life.expectancy": "67.6",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2001",
        "Population": "48683865",
        "Life.expectancy": "67.7",
        "Status": "Developing"
      },
      {
        "Country": "Ukraine",
        "Year": "2000",
        "Population": "49175848",
        "Life.expectancy": "67.5",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "77.1",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "76.9",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "76.7",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "76.5",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "76.3",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "75.8",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "75.3",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "75.1",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "74.5",
        "Status": "Developing"
      },
      {
        "Country": "United Arab Emirates",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "81.2",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "87",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "86",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "82",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "81",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "79.6",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "79.5",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "79.3",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "79",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "78.8",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "78.3",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "78.2",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "78",
        "Status": "Developed"
      },
      {
        "Country": "United Kingdom of Great Britain and Northern Ireland",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "77.8",
        "Status": "Developed"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "61.8",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "59.7",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "58.6",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "58.3",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "57.5",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "56.9",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "56.2",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "54.5",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "53.1",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "52.2",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "51.5",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "52",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "49.6",
        "Status": "Developing"
      },
      {
        "Country": "United Republic of Tanzania",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "49.2",
        "Status": "Developing"
      },
      {
        "Country": "United States of America",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "79.3",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "79.1",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "78.9",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "78.8",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "78.7",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "78.5",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "78.2",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "78.1",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "77.8",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "77.5",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "77.5",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "77.2",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "77",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "76.9",
        "Status": "Developed"
      },
      {
        "Country": "United States of America",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "76.8",
        "Status": "Developed"
      },
      {
        "Country": "Uruguay",
        "Year": "2015",
        "Population": "3431552",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2014",
        "Population": "3419546",
        "Life.expectancy": "76.8",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2013",
        "Population": "3485",
        "Life.expectancy": "76.8",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2012",
        "Population": "3396777",
        "Life.expectancy": "76.5",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2011",
        "Population": "3385624",
        "Life.expectancy": "77",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2010",
        "Population": "3374415",
        "Life.expectancy": "76.3",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2009",
        "Population": "3362755",
        "Life.expectancy": "76.6",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2008",
        "Population": "335824",
        "Life.expectancy": "76.4",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2007",
        "Population": "3339741",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2006",
        "Population": "333143",
        "Life.expectancy": "76.2",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2005",
        "Population": "3325612",
        "Life.expectancy": "75.7",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2004",
        "Population": "332496",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2003",
        "Population": "3325637",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2002",
        "Population": "3327773",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2001",
        "Population": "332713",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Uruguay",
        "Year": "2000",
        "Population": "3321245",
        "Life.expectancy": "75.1",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2015",
        "Population": "312989",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2014",
        "Population": "37577",
        "Life.expectancy": "69.2",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2013",
        "Population": "32432",
        "Life.expectancy": "69.1",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2012",
        "Population": "297745",
        "Life.expectancy": "68.8",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2011",
        "Population": "293394",
        "Life.expectancy": "68.5",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2010",
        "Population": "285624",
        "Life.expectancy": "68.3",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2009",
        "Population": "277674",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2008",
        "Population": "27328",
        "Life.expectancy": "67.9",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2007",
        "Population": "26868",
        "Life.expectancy": "67.8",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2006",
        "Population": "2648825",
        "Life.expectancy": "67.6",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2005",
        "Population": "26167",
        "Life.expectancy": "67.3",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2004",
        "Population": "2586435",
        "Life.expectancy": "67.8",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2003",
        "Population": "2556765",
        "Life.expectancy": "67.2",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2002",
        "Population": "2527185",
        "Life.expectancy": "67.1",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2001",
        "Population": "2496445",
        "Life.expectancy": "67.4",
        "Status": "Developing"
      },
      {
        "Country": "Uzbekistan",
        "Year": "2000",
        "Population": "24654",
        "Life.expectancy": "67.1",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2015",
        "Population": "26463",
        "Life.expectancy": "72",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2014",
        "Population": "25885",
        "Life.expectancy": "71.7",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2013",
        "Population": "253142",
        "Life.expectancy": "71.6",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2012",
        "Population": "247485",
        "Life.expectancy": "71.4",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2011",
        "Population": "241871",
        "Life.expectancy": "71.2",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2010",
        "Population": "236295",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2009",
        "Population": "23785",
        "Life.expectancy": "78",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2008",
        "Population": "22534",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2007",
        "Population": "219953",
        "Life.expectancy": "73",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2006",
        "Population": "214634",
        "Life.expectancy": "71",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2005",
        "Population": "2937",
        "Life.expectancy": "69.9",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2004",
        "Population": "24143",
        "Life.expectancy": "69.6",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2003",
        "Population": "198964",
        "Life.expectancy": "69.4",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2002",
        "Population": "193956",
        "Life.expectancy": "69.3",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2001",
        "Population": "18929",
        "Life.expectancy": "69.1",
        "Status": "Developing"
      },
      {
        "Country": "Vanuatu",
        "Year": "2000",
        "Population": "18563",
        "Life.expectancy": "69",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "74.1",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "73.9",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "73.7",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "73.2",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "73.3",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "72.4",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "73.1",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Venezuela (Bolivarian Republic of)",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "72.5",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "76",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "75.9",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "75.7",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "75.6",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "75.4",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "75.2",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "75",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "74.9",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "74.7",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "74.6",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "74.4",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "74.2",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "74",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "73.8",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "73.6",
        "Status": "Developing"
      },
      {
        "Country": "Viet Nam",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "73.4",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2015",
        "Population": "0",
        "Life.expectancy": "65.7",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2014",
        "Population": "0",
        "Life.expectancy": "65.4",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2013",
        "Population": "0",
        "Life.expectancy": "65.4",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2012",
        "Population": "0",
        "Life.expectancy": "64.7",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2011",
        "Population": "0",
        "Life.expectancy": "64.6",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2010",
        "Population": "0",
        "Life.expectancy": "64.4",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2009",
        "Population": "0",
        "Life.expectancy": "64.1",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2008",
        "Population": "0",
        "Life.expectancy": "63.8",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2007",
        "Population": "0",
        "Life.expectancy": "63.4",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2006",
        "Population": "0",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2005",
        "Population": "0",
        "Life.expectancy": "62.6",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2004",
        "Population": "0",
        "Life.expectancy": "62.2",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2003",
        "Population": "0",
        "Life.expectancy": "61.9",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2002",
        "Population": "0",
        "Life.expectancy": "61.5",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2001",
        "Population": "0",
        "Life.expectancy": "61.1",
        "Status": "Developing"
      },
      {
        "Country": "Yemen",
        "Year": "2000",
        "Population": "0",
        "Life.expectancy": "68",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2015",
        "Population": "161587",
        "Life.expectancy": "61.8",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2014",
        "Population": "1562974",
        "Life.expectancy": "61.1",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2013",
        "Population": "1515321",
        "Life.expectancy": "63",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2012",
        "Population": "14699937",
        "Life.expectancy": "59.2",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2011",
        "Population": "14264756",
        "Life.expectancy": "58.2",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2010",
        "Population": "138533",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2009",
        "Population": "13456417",
        "Life.expectancy": "57.4",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2008",
        "Population": "1382517",
        "Life.expectancy": "55.7",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2007",
        "Population": "12725974",
        "Life.expectancy": "52.6",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2006",
        "Population": "12383446",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2005",
        "Population": "1252156",
        "Life.expectancy": "49.3",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2004",
        "Population": "11731746",
        "Life.expectancy": "47.9",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2003",
        "Population": "11421984",
        "Life.expectancy": "46.4",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2002",
        "Population": "111249",
        "Life.expectancy": "45.5",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2001",
        "Population": "1824125",
        "Life.expectancy": "44.6",
        "Status": "Developing"
      },
      {
        "Country": "Zambia",
        "Year": "2000",
        "Population": "1531221",
        "Life.expectancy": "43.8",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2015",
        "Population": "15777451",
        "Life.expectancy": "67",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2014",
        "Population": "15411675",
        "Life.expectancy": "59.2",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2013",
        "Population": "155456",
        "Life.expectancy": "58",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2012",
        "Population": "1471826",
        "Life.expectancy": "56.6",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2011",
        "Population": "14386649",
        "Life.expectancy": "54.9",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2010",
        "Population": "1486317",
        "Life.expectancy": "52.4",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2009",
        "Population": "1381599",
        "Life.expectancy": "50",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2008",
        "Population": "13558469",
        "Life.expectancy": "48.2",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2007",
        "Population": "1332999",
        "Life.expectancy": "46.6",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2006",
        "Population": "13124267",
        "Life.expectancy": "45.4",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2005",
        "Population": "129432",
        "Life.expectancy": "44.6",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2004",
        "Population": "12777511",
        "Life.expectancy": "44.3",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2003",
        "Population": "12633897",
        "Life.expectancy": "44.5",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2002",
        "Population": "125525",
        "Life.expectancy": "44.8",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2001",
        "Population": "12366165",
        "Life.expectancy": "45.3",
        "Status": "Developing"
      },
      {
        "Country": "Zimbabwe",
        "Year": "2000",
        "Population": "12222251",
        "Life.expectancy": "46",
        "Status": "Developing"
      }
  

 ]

  // Process the data
data.forEach(function(d) {
    d['Population'] = +d['Population']; // Convert HIV/AIDS to number
    d['Life.expectancy'] = +d['Life.expectancy']; // Convert life expectancy to number
    d.Year = +d.Year; // Convert year to number
});

// Set the ranges
x.domain([0, d3.max(data, function(d) { return d['Population']; })]);
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
    .attr("cx", function(d) { return x(d['Population']); })
    .attr("cy", function(d) { return y(d['Life.expectancy']); })
    .on("mouseover", function(event, d) {
        tooltip.transition()
            .duration(200)
            .style("opacity", .9);
        tooltip.html(d.Country + "<br/>" + d.Year + "<br/>Life expectancy: " 
            + d['Life.expectancy'] + "<br/>Population: " + d['Population'])
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
    .text("Population")
    .style("font-family", "Arial, sans-serif")
    .style("font-size", "18px")
    .style("fill", "#6C757D")
    .style("font-weight", "bold");