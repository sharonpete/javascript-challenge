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

table = createTable(table,tableData);

// use data from data.js to populate webpage table


