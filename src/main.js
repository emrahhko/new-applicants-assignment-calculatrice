// Add your JavaScript here

// creation of a variable that collect and store the input of the user via the id #display on the html file.
let display = document.getElementById('display');

//function that append the user input (numbers) to the display.
function append(numbers) {
    display.value = display.value + numbers;
}

//function that execute the operations and show error message with a try catch block, if the user input an invalid operation.
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error ';
    }
}

//function with the slice method that delete the last character (-1).
function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

//function that clear the display from the input #display.
function clearDisplay() {
    display.value = '';
}

// all the function are called when the button is clicked via the "onclick" event.
