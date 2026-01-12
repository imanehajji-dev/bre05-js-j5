let list = document.querySelector("body");

let item = document.createElement("a");
list.appendChild(item);
item.setAttribute("href", "https://fr.wikipedia.org/wiki/Lorem_ipsum");

let text = document.createTextNode("L'article de Wikipédia sur le Lorem Ipsum");
item.appendChild(text);

