// 1. Select the target element by its ID
let element = document.getElementById("level");

// 2. Initialize a counter to track the level
let level = 0;

// 3. Traverse upwards until we reach the root
// While the current element is not null, keep moving up
while (element) {
    level++;
    element = element.parentElement;
}

// 4. Display the final result in the required format
alert("The level of the element is: " + level);