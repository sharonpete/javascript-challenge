// from data.js
var tableData = data;
//console.log(data);




function createTable(newTableData) {
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
    console.log(table);
    return;
}



var button = d3.select("#filter-btn");
var form = d3.select("form");
console.log(button);
console.log(form);
button.on("click", runEnter);
form.on("submit", runEnter);

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
        // 
        createTable(tableData);
    }

    
    
    
   
}




console.log("app.js is loaded");
var table = document.querySelector("tbody");


console.log(data.length);

createTable(tableData);

// use data from data.js to populate webpage table


