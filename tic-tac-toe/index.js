window.addEventListener('DOMContentLoaded', () => {

});

function checkWin(grid)
{
    let gridFull = true;
    let victory = false;
    let defeat = false;
    let equality = false;

    console.log(grid);

    for(let i = 0; i < grid.length; i++)
    {
        if(grid[i] === "")
        {
            gridFull = false;
        }
    }

    if(grid[0] === "X" && grid[1] === "X" && grid[2] === "X") // line 1 player
    {
        victory = true;
    }
    else if(grid[3] === "X" && grid[4] === "X" && grid[5] === "X") // line 2 player
    {
        victory = true;
    }
    else if(grid[6] === "X" && grid[7] === "X" && grid[8] === "X") // line 3 player
    {
        victory = true;
    }
    else if(grid[0] === "O" && grid[1] === "O" && grid[2] === "O") // line 1 computer
    {
        defeat = true;
    }
    else if(grid[3] === "0" && grid[4] === "0" && grid[5] === "0") // line 2 computer
    {
        defeat = true;
    }
    else if(grid[6] === "0" && grid[7] === "0" && grid[8] === "0") // line 3 computer
    {
        defeat = true;
    }
    else if(grid[0] === "X" && grid[3] === "X" && grid[6] === "X") // col 1 player
    {
        victory = true;
    }
    else if(grid[1] === "X" && grid[4] === "X" && grid[7] === "X") // col 2 player
    {
        victory = true;
    }
    else if(grid[2] === "X" && grid[5] === "X" && grid[8] === "X") // col 3 player
    {
        victory = true;
    }
    else if(grid[0] === "O" && grid[3] === "O" && grid[6] === "O") // col 1 computer
    {
        defeat = true;
    }
    else if(grid[1] === "O" && grid[4] === "O" && grid[7] === "O") // col 2 computer
    {
        defeat = true;
    }
    else if(grid[2] === "O" && grid[5] === "O" && grid[8] === "O") // col 3 computer
    {
        defeat = true;
    }
    else if(grid[0] === "X" && grid[4] === "X" && grid[8] === "X") // diag tl to br player
    {
        victory = true;
    }
    else if(grid[2] === "X" && grid[4] === "X" && grid[6] === "X") // diag tr to bl player
    {
        victory = true;
    }
    else if(grid[0] === "O" && grid[4] === "O" && grid[8] === "O") // diag tl to br computer
    {
        defeat = true;
    }
    else if(grid[2] === "O" && grid[4] === "O" && grid[6] === "O") // diag tr to bl computer
    {
        defeat = true;
    }
    else
    {
        if(gridFull)
        {
            equality = true;
        }
    }

    if(victory)
    {
        window.alert("C'est gagné !");
        return "victory"
    }
    else if(defeat)
    {
        window.alert("C'est perdu !");
        return "defeat";
    }
    else if(equality)
    {
        window.alert("Match nul !");
        return "equality";
    }
    else
    {
        return "ongoing";
    }

}

function getFirstEmptyBox(grid)
{
    for(let i = 0; i < grid.length; i++)
    {
        if(grid[i] === "")
        {
            return `box-${i}`;
        }
    }

    return null;
}

function player(grid, box)
{
    // je vérifie si la case est bien vide
    if(box.textContent.trim() !== " ")
    {
        // je rajoute mon X dans la grille
        updateGrid(box, "X", grid);
    }
    else
    {
        window.alert("Case déjà occupée !");
    }
}

function computer(grid)
{
    // mode facile : il récupère la première case vide
    let emptyBox = getFirstEmptyBox(grid);

    // il rajoute son O dans la grille
    updateGrid(document.getElementById(emptyBox), "O", grid);
}

function updateGrid(box, symbol, grid)
{
    let boxNb = -1;

    if(box.id === "box-0")
    {
        boxNb = 0;
    }
    else if(box.id === "box-1")
    {
        boxNb = 1;
    }
    else if(box.id === "box-2")
    {
        boxNb = 2;
    }
    else if(box.id === "box-3")
    {
        boxNb = 3;
    }
    else if(box.id === "box-4")
    {
        boxNb = 4;
    }
    else if(box.id === "box-5")
    {
        boxNb = 5;
    }
    else if(box.id === "box-6")
    {
        boxNb = 6;
    }
    else if(box.id === "box-7")
    {
        boxNb = 7;
    }
    else if(box.id === "box-8")
    {
        boxNb = 8;
    }

    grid[boxNb] = symbol;
}

function displayGrid(grid)
{
    for(let i = 0; i < grid.length; i++)
    {
        if(grid[i] !== "")
        {
            let box = document.querySelector(`#box-${i}`);
            box.innerHTML = "";
            let text = document.createTextNode(grid[i]);
            box.appendChild(text);
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    // je crée un tableau qui représente mes cases
    let grid = ["", "", "", "", "", "", "", "", ""];

    // Je mets un eventListener pour réagir aux clics sur les cases du HTML
    let boxes = document.querySelectorAll("#game-board > div");

    for(let box of boxes)
    {
        // pour chacune des cases, je réagis au clic
        box.addEventListener("click", (event) => {
            // c'est le tour du joueur
            player(grid, event.target);
            console.log(grid);

            // j'affiche la grille dans le html
            displayGrid(grid);

            // je vérifie si quelqu'un a gagné
            let status = checkWin(grid);
            console.log(status);

            // si personne n'a gagné et qu'il n'y a pas égalité
            if(status === "ongoing")
            {
                // c'est le tour de l'ordinateur
                computer(grid);
                console.log(grid);

                // j'affiche la grille dans le html
                displayGrid(grid);

                // je vérifie si quelqu'un a gagné
                status = checkWin(grid);
                console.log(status);
            }
        });

        // le bouton reset
        let button = document.querySelector("#reset");
        button.addEventListener("click", () => {
            // je recharge la page
            location.reload();
        });
    }
});
Soft-wrap