// from data.js
var tableData = data;
//console.log(data);
console.log("app.js is loaded");

console.log(data.length);

// use data from data.js to populate webpage table
createTable(tableData);

var button = d3.select("#filter-btn");
var resetButton = d3.select("#reset-btn");
var form = d3.select("form");
console.log(button);
console.log(form);
//button.on("click", runEnter);
//form.on("submit", runEnter);
button.on("click", runEnter2);
form.on("submit", runEnter2);

resetButton.on("click", resetTable);

function resetTable(){
    createTable(tableData);
    d3.select("#datetime>placeholder").text("freakout");
}

function createTable(newTableData) {
    // console.log(newTableData);
    // if (newTableData == "") {
    //     newTableData = tableData
    // }
    console.log('createTable');
    console.log(newTableData.length);
    //console.log(table.rows.length);
    
    var tbody = d3.select("tbody");
    tbody.html("");
    
    newTableData.forEach(function(ufo_report){
        var row =  tbody.append("tr");
        
        Object.entries(ufo_report).forEach(function([key, value]) {
            var cell = row.append("td");       
            cell.text(value);
        });
    });
    
    return;
}


function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    console.log("button clicked or something!!")
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    // use input value to select data 
    var selectedData = data.filter(d => d.datetime === inputValue);
    console.log(selectedData);
    
    if (selectedData != 0) {
        createTable(selectedData);
    } else {
        // no data found for entered date... 
        // reset the table with the full dataset
        createTable(tableData);
    }
   
}

function runEnter2() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    console.log("runEnter2() activated");

    var dateValue = d3.select("#datetime").property("value");
    var cityValue = d3.select("#city").property("value");
    var stateValue = d3.select("#state").property("value");
    var countryValue = d3.select("#country").property("value");
    var shapeValue = d3.select("#shape").property("value");

    console.log(dateValue);
    console.log(cityValue);
    console.log(stateValue);
    console.log(countryValue);
    console.log(shapeValue);

    // let's filter the data based on user input!!
    // this is intentionally a series of filters rather than a chain of filters
    var selectedData = tableData;
    if (dateValue != "") {
        console.log("filter by date");
        selectedData = selectedData.filter(d => d.datetime === dateValue);
    }

    if (cityValue != "") {
        console.log("filter by city");
        selectedData = selectedData.filter(d => d.city === cityValue);
    }

    if (stateValue != "") {
        console.log("filter by state");
        selectedData = selectedData.filter(d => d.state === stateValue);
    }

    if (countryValue != "") {
        console.log("filter by country");
        selectedData = selectedData.filter(d => d.country === countryValue);
    }

    if (shapeValue != "") {
        console.log("filter by shape");
        selectedData = selectedData.filter(d => d.shape === shapeValue);
    }
    
    console.log(selectedData);

    if (selectedData != 0) {
        createTable(selectedData);
    } else {
        // no data found for entered date... 
        // reset the table with the full dataset
        createTable(tableData);
    }

}



