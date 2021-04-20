// from data.js
var tableData = data;
//console.log(data);




function createTable(table,newTableData) {
    console.log('createTable');
    
    console.log(table.rows.length);
    
    var tbody = d3.select("tbody");
    
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

function updateTable(selectedData){
    var rows = d3.selectAll('tbody tr')
        .data(selectedData, function (d) { return d;});
    
    rows.enter()
        .append('tr')
        .selectAll('td')
        .data(function (d) {return [d.key, d.value];})
        .enter()
        .append('td')
        .text(function(d) {  return d; });
        
    rows.exit().remove();
    
    var cells = rows.selectAll('td')
        .data(function (d) { return [d.key, d.value];})
        .text(document.createTextNode(element[key]));
    
    cells.enter()
        .append('td')
        .text(function(d) { return d; });
    
    cells.exit().remove();

    var table = document.querySelector("tbody");
    
    createTable(table, selectedData);
    // var table = d3.select("tbody")
    //     .selectAll("tr")
    //     .data(selectedData)
    //     .selectAll("td")
    //     .data(function(row) {
    //         return columns.map(function(column) {
    //             return {
    //                 column: column,
    //                 value: row[column]
    //             };
    //         });
    //     })
    //     .text(function(d) {  return d.value; });

    
    // rows.enter().append("tr")
    //     .text(function(d) { return d; });
    
   

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

    var selectedData = data.filter(d => d.datetime === inputValue);
    console.log(selectedData);
    // use input value to select data 
    
    //var ufo_table = document.querySelector("#ufo-table");
    //createTable(table,selectedData);
    updateTable(table, selectedData);
    // if no data found for entered date... 
   
}




console.log("app.js is loaded");
var table = document.querySelector("tbody");
//var table = document.getElementById('ufo-table');
// var table_header = table.querySelector("thead");
// var table_body = table.querySelector("tbody");

console.log(data.length);

createTable(table,tableData);

// use data from data.js to populate webpage table


