'use strict'

let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow > 18) {
    greeting = 'Good Evenin, Class!';
} else if (hourNow > 12) {
    greeting = 'Good Afternoon, Class!';
} else if (hourNow > 0) {
    greeting = 'Good Morning, Class!';
} else {
    greeting = 'Welcome, Class';
}

document.write('<h3>' + greeting + '</h3>');