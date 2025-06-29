function changeColor() {
    const button = document.getElementById('colorButton');
    const currentColor = button.style.backgroundColor;
    const newColor = currentColor === 'blue' ? 'red' : 'blue';
    button.style.backgroundColor = newColor;
}
function showGreeting() {
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = "Good morning!";
    } else if (currentHour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    alert(greeting);
}

function addNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 + num2;
    document.getElementById('result').innerText = `Result ${result}`;
}
