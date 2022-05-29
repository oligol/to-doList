let toDoItems = document.querySelector(".to-do-items"),
    btnSubmit = document.querySelector(".btn"),
    input = document.getElementById("input"),
    trashIcon = document.getElementById("trash");


btnSubmit.addEventListener('click', function() {
    addItem();
});

input.addEventListener("keydown", function(event) {
    if(event.key === "Enter"){
        addItem();    
    }
});

function addItem() {

    let divParent = document.createElement("div"),
        divChild = document.createElement("div"),
        checkIcon = document.createElement("i"),
        trashIcon = document.createElement("i");
    
    divParent.className = "item";
    divParent.innerHTML = '<div>' + input.value + '</div>';
    
    checkIcon.className = "fa-solid fa-square-check";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener('click', function() {
        checkIcon.style.color = "limegreen";
    });

    divChild.appendChild(checkIcon);
    trashIcon.className = "fa-solid fa-trash";
    trashIcon.style.color = "lightgray";
    trashIcon.addEventListener('click', function() {
        divParent.remove();
    });

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);

    input.value = '';
}