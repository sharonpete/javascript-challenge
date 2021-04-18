// from data.js
var tableData = data;
//console.log(data);


console.log("app.js is loaded");
var table = document.querySelector("table");
// var table_header = table.querySelector("thead");
// var table_body = table.querySelector("tbody");

console.log(data.length);

function createTable(table,tableData) {
    for (var element of tableData){
        var row = table.insertRow();
        for (key in element){
            var cell = row.insertCell();
            var text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
    console.log(table);
    return table;
}


var button = d3.select("#filter-btn");
var form = d3.select("form");
console.log(button);
console.log(form);
button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();
    console.log("button clicked or something!!")
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var selectedData = data.filter(d => d.datetime === inputValue);
    console.log(selectedData);
    // use input value to select data 
    

    // if no data found for entered date... 
   
}


function selectByDate(date) {
    console.log('selectByDate');
    console.log(data.datetime == date);
    return data.datetime == date;
}


table = createTable(table,tableData);

// use data from data.js to populate webpage table


