// Define initial state
let isToggled = false;

function toggleState() {
    const container = document.getElementById('container');
    const text = document.getElementById('text');
    const button = document.getElementById('toggleButton');

    if (!isToggled) {
        // Change to toggled state
        container.style.backgroundColor = 'red';
        text.textContent = 'Text has been changed!';
        button.textContent = 'Revert Changes';
    } else {
        // Revert to initial state
        container.style.backgroundColor = 'green';
        text.textContent = 'This is some text.';
        button.textContent = 'Click Me';
    }

    // Toggle the state
    isToggled = !isToggled;
}
