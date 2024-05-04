function resetResult() {
    document.getElementById('resultDisplay').value = '';
}

function addToResult(value) {
    document.getElementById('resultDisplay').value += value;
}

function calculateResult() {
    let result = eval(document.getElementById('resultDisplay').value);
    document.getElementById('resultDisplay').value = result;
}