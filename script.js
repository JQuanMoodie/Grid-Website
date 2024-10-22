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
    //checks if there are no rows
    if (numRows == 0)
        alert("No More Rows");
    else
    {
        numRows--;
        document.getElementById("grid").deleteRow(numRows);
    }   
}

// Remove a column
function removeC() {
    //checks if there are no columns
    if (numCols == 0)
        alert("No More Rows");
    else
    {
        numCols--;
        const rows = document.getElementById("grid").rows;
        //For loop removes last cells of each row deleting the last column
        for (let i = 0; i < rows.length; i++)
            {
                rows[i].deleteCell(-1);
            }
    }
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
    const cells = document.querySelectorAll("#grid td");
    for (let i = 0; i < cells.length; i++)
    {
        cells[i].style.backgroundColor = "white";
    }
}
