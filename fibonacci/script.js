function generateSeries() {
    var termsInput = document.getElementById("terms").value;
    var resultElement = document.getElementById("result");


    resultElement.textContent = "";

    if (!termsInput || isNaN(termsInput) || !Number.isInteger(Number(termsInput)) || Number(termsInput) >= 100) {
        resultElement.textContent = "Please Enter a Valid Number Less than 100.";
        return;
    }

    
    var terms = parseInt(termsInput);
    var a = 0, b = 1;
    var series = [a, b];

    for (var i = 2; i < terms; i++) {
        var next = a + b;
        series.push(next);
        a = b;
        b = next;
    }

    resultElement.textContent = "Fibonacci Series: " + series.join(", ");
}

function clearInput() {
    document.getElementById("terms").value = "";
    document.getElementById("result").textContent = "";
}
