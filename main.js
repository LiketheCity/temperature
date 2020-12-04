function selectUnit() {
    let outputTemp;
    let isChecked = document.getElementById('farenheit').checked;
    let inputTemp = document.getElementById("inputTemp").value;

    if (isChecked == true) {
        outputTemp = (5/9) * (inputTemp-32);
    }
    else {
        outputTemp = (inputTemp*(9/5)) + 32;
    }

    document.getElementById("outputTemp").value = outputTemp;
}

