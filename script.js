let currentNumber;

function startSequence() {
    const inputNumber = document.getElementById('inputNumber').value;
    currentNumber = parseInt(inputNumber);

    if (isNaN(currentNumber) || currentNumber <= 0) {
        alert('Please enter a positive integer.');
        return;
    }

    document.getElementById('inputSection').style.display = 'none';
    document.getElementById('sequenceSection').style.display = 'block';
    updateCurrentNumber();
}

function nextStep() {
    if (currentNumber === undefined || isNaN(currentNumber) || currentNumber <= 0) {
        alert('Please start the sequence first by entering a valid positive integer.');
        return;
    }

    if (currentNumber === 1) {
        alert('You have reached 1. You can start over.');
        return;
    }

    if (currentNumber % 2 === 0) {
        currentNumber = currentNumber / 2;
    } else {
        currentNumber = currentNumber * 3 + 1;
    }

    updateCurrentNumber();

    if (currentNumber === 1) {
        alert('You have reached 1. You can start over.');
    }
}

function updateCurrentNumber() {
    const currentNumberElement = document.getElementById('currentNumber');
    currentNumberElement.classList.remove('animatedNumber');
    // Trigger reflow to restart animation
    void currentNumberElement.offsetWidth;
    currentNumberElement.classList.add('animatedNumber');
    currentNumberElement.innerText = `Current number: ${currentNumber}`;
}

function restartSequence() {
    document.getElementById('inputSection').style.display = 'block';
    document.getElementById('sequenceSection').style.display = 'none';
    document.getElementById('inputNumber').value = '';
    document.getElementById('currentNumber').innerText = '';
    currentNumber = undefined;
}
