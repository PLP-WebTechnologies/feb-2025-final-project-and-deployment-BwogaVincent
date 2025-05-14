document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const changeColorBtn = document.getElementById('changeColorBtn');
    const clickCounterBtn = document.getElementById('clickCounterBtn');
    const counterDisplay = document.getElementById('counterDisplay');
    const textInput = document.getElementById('textInput');
    const textOutput = document.getElementById('textOutput');

    let clickCount = 0;

    // Function to generate random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Event listener for color change button
    changeColorBtn.addEventListener('click', function() {
        document.body.style.backgroundColor = getRandomColor();
    });

    // Event listener for click counter button
    clickCounterBtn.addEventListener('click', function() {
        clickCount++;
        counterDisplay.textContent = `Clicks: ${clickCount}`;
    });

    // Event listener for text input
    textInput.addEventListener('input', function() {
        textOutput.textContent = textInput.value || 'Start typing...';
    });

    // Add hover effect to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            button.style.backgroundColor = '#e0e0e0';
        });
        button.addEventListener('mouseout', function() {
            button.style.backgroundColor = '#f0f0f0';
        });
    });
});