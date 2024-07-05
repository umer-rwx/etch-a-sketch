// Made by Umer Tariq, 3rd July, 2024
// I don't know what I'm doing, but things are going pretty well so far

"use strict";

let container = document.getElementById("container");
const CONTAINER_WIDTH = 540;

function getButtonsPerRow() {
    return document.getElementById("input").value || 10;
}

function createGrid() {
    container.replaceChildren(); // "Replaces" children with "nothing". Clears container.
    let buttonsPerRow = getButtonsPerRow();

    if (buttonsPerRow > 40) {
        alert("Maximum size of grid is 40");
        buttonsPerRow = 40;
    } 

    let buttonSize = CONTAINER_WIDTH / buttonsPerRow; 

    for (let i = 1; i <= buttonsPerRow ** 2; i++) {
        let button = document.createElement("button");
        button.style.width = button.style.height = buttonSize + "px";
        button.addEventListener("click", function() {
            if (button.style.backgroundColor == "white") {
                button.style.backgroundColor = "black";
            } else {
                button.style.backgroundColor = "white";
            }
        });
        container.append(button);
    }
}