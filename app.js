// from data.js
var observations = data;

var tbody = d3.select("tbody");

// ***************************************************

observations.forEach(function(ufoInfo) {
    console.log(ufoInfo);
    var row = tbody.append("tr");

// Use d3 to update each cell's values with ufo data.
    Object.entries(ufoInfo).forEach(function([key, value]){
        console.log(key, value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});

// ********************************************************

var submit = d3.select("#filter-btn");
var empty = d3.select("tbody")
submit.on("click", function() {
    empty.html("")
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputElement = d3.select("#state");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(observations);

    var filteredData = observations.filter(bydate => bydate.datetime === inputValue);

    console.log(filteredData);

    filteredData.forEach(function(filteredReport) {
        console.log(filteredReport);
        var row = tbody.append("tr");
    
    // Use d3 to update each cell's values with data.
        Object.entries(filteredReport).forEach(function([key, value]){
            console.log(key, value);
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});
