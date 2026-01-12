window.addEventListener("DOMContentLoaded", () => {

    let todos = [
        "Rappeler l'école",
        "Faire les courses",
        "Récupérer le colis à la Poste",
        "Faire la litière du chat",
        "Ranger le bureau"
    ];

    let body = document.querySelector("body"); 
    
    let ul = document.createElement("ul");
    
    body.appendChild(ul);

    for (let i = 0; i < todos.length; i++) {
        
        let li = document.createElement("li");
        ul.appendChild(li);
        
        let text = document.createTextNode(todos[i]);
        li.appendChild(text);
        
        li.addEventListener("click", (event) => {
            li.style.textDecoration = "line-through";
        });
    }
});
