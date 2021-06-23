// from data.js
var tableData = data;

// YOUR CODE HERE!

var button = d3.select("#filter-btn");
var form = d3.select("form");

function filterTable() {

    d3.event.preventDefault();

    d3.selectAll("tbody>tr").remove();

    var inputValue = d3.select("#datetime").property("value");

    var filteredData = tableData.filter(item => item.datetime === inputValue);

    var tbody = d3.select("tbody");

    filteredData.forEach(sighting => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};


button.on("click", filterTable);
form.on("submit", filterTable);

