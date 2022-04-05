function foo(elename,att,value){
    let ele=document.createElement(elename);
    ele.className=att;
    ele.innerHTML=value;
    return ele;
}

var container=foo("div","container","");
var row=foo("div","row","");
var col=foo("div","col","");
var table=  foo("table","table","")
row.append(col);
container.append(row);
col.append(table);
document.body.append(container);

var thead= foo("thead","thead-dark","");
var tr= foo("tr","","");
var th1=foo("th","","#"); 
var th2=foo("th","","First Name");
var th3=foo("th","","Last Name");

tr.append(th1,th2,th3);
thead.append(tr);

var tbody=foo("tbody","","");

var tr=foo("tr","","");
var td1=foo("td","","1");
var td2=foo("td","","John");
var td3=foo("td","","doe");
 
tr.append(td1,td2,td3);
tbody.append(tr);
table.append(thead,tbody);

var tr=foo("tr","","");
var td1=foo("td","","2");
var td2=foo("td","","mark");
var td3=foo("td","","doe");
 
tr.append(td1,td2,td3);
tbody.append(tr);
table.append(thead,tbody);

var tr=foo("tr","","");
var td1=foo("td","","3");	
var td2=foo("td","","Larry");
var td3=foo("td","","the Bird");
 
tr.append(td1,td2,td3);
tbody.append(tr);
table.append(thead,tbody);