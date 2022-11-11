
const listEventUsage = document.querySelectorAll(`[data-list="eventsUsage"]`);
const shakeItButton = document.querySelector(`[data-button="Shake"]`);
const redBox = document.querySelector(".box");

listEventUsage.forEach(item => {
    item.addEventListener("click", openListItem);
});

shakeItButton.addEventListener("click", shakeCard);

redBox.addEventListener("mouseover", () => {
    alert("Quer mudar a cor da caixa?\n\n - Pressione qualquer letra");
});

document.addEventListener("keypress", (e) => {
    
    switch (e.key) {
        case "a":
            redBox.style.backgroundColor = "aqua";
            break;
    
        case "b":
            redBox.style.backgroundColor = "blue";
            break;
    
        case "c":
            redBox.style.backgroundColor = "cyan";
            break;
        
        case "d":
            redBox.style.backgroundColor = "deeppink";
            break;
        
        
        case "e":
            redBox.style.backgroundColor = "black";
            break;
    
        case "f":
            redBox.style.backgroundColor = "firebrick";
            break;

        case "g":
            redBox.style.backgroundColor = "gold";
            break;

        case "h":
            redBox.style.backgroundColor = "hotpink";
            break;

        case "i":
            redBox.style.backgroundColor = "indigo";
            break;

        case "j":
            redBox.style.backgroundColor = "black";
            break;

        case "k":
            redBox.style.backgroundColor = "khaki";
            break;

        case "l":
            redBox.style.backgroundColor = "lightcoral";
            break;

        case "m":
            redBox.style.backgroundColor = "magenta";
            break;

        case "n":
            redBox.style.backgroundColor = "navy";
            break;

        case "o":
            redBox.style.backgroundColor = "olive";
            break;

        case "p":
            redBox.style.backgroundColor = "palegreen";
            break;

        case "q":
            redBox.style.backgroundColor = "black";
            break;

        case "r":
            redBox.style.backgroundColor = "red";
            break;

        case "s":
            redBox.style.backgroundColor = "saddlebrown";
            break;

        case "t":
            redBox.style.backgroundColor = "teal";
            break;

        case "u":
            redBox.style.backgroundColor = "black";
            break;

        case "v":
            redBox.style.backgroundColor = "violet";
            break;

        case "w":
            redBox.style.backgroundColor = "wheat";
            break;

        case "x":
            redBox.style.backgroundColor = "black";
            break;

        case "y":
            redBox.style.backgroundColor = "yellow";
            break;

        case "z":
            redBox.style.backgroundColor = "black";
            break;

        default:
            break;
    }
});

function shakeCard(){
    const imgExample = document.querySelector(`[data-card="1"]`).querySelector("img");

    imgExample.classList.add("shake-it");

    setTimeout(() => {
        imgExample.classList.toggle("shake-it");
    }, 2000);
}

function openListItem(event){
    const listItem = event.target;

    const content = listItem.querySelector(".list__item__content");
    
    
    const icon = listItem.querySelector("ion-icon");
    content.classList.contains("contracted")? icon.name = "chevron-down-outline" : icon.name = "chevron-up-outline";

    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    }else{
        content.style.maxHeight = (content.scrollHeight + 150) + "px";
    }

    content.classList.toggle("contracted");
}