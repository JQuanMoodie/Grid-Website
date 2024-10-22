// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    numRows++;
    const newRow = document.getElementById("grid").insertRow();
    //For loop adds the cells for the new row
    for (let i = 0; i < numCols; i++)
    {
        let temp = newRow.insertCell(i);
        temp.style.backgroundColor = "white";
        temp.addEventListener("click", function(){
            temp.style.backgroundColor = colorSelected;
        });
    }
}

// Add a column
function addC() {
    numCols++;
    const rows = document.getElementById("grid").rows;
    //For loop adds new cells that creates a new column
    for (let i = 0; i < rows.length; i++)
    {
            for (let j = rows[i].cells.length; j < numCols; j++)
            {
                let temp = rows[i].insertCell(j);
                temp.style.backgroundColor = "white";
                temp.addEventListener("click", function(){
                    temp.style.backgroundColor = colorSelected;
                })
            }   
    }
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}
