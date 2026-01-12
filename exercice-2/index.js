let list = document.querySelector("ol");
let item = document.createElement("li");

let itemText = document.createTextNode("Préchauffer le four");
item.appendChild(itemText);
list.insertBefore(item, list.firstChild);