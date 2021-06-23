// from data.js
var tableData = data;

// YOUR CODE HERE!

var button = d3.select("#filter-btn");
var form = d3.select("form");

function filterTable() {

    d3.event.preventDefault();

    d3.selectAll("tbody>tr").remove();

    var filters = {
        datetime: d3.select("#datetime").property("value"),
        city: d3.select("#city").property("value"),
        state: d3.select("#state").property("value"),
        country: d3.select("#country").property("value"),
        shape: d3.select("#shape").property("value")
    };

    var activeFilters = [];

    for (i=0; i<Object.keys(filters).length; i++) {
        if (Object.values(filters)[i] != "") {
            activeFilters.push(Object.keys(filters)[i]);
        }
    };

    var filteredData = tableData.filter(function(item) {
        for (i=0; i<activeFilters.length; i++) {
            input = activeFilters[i];
            if (item[input] != filters[input]) {
                return false;
            }
        }
        return true;
    });

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

