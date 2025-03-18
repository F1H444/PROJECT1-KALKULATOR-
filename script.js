const output = document.getElementById("output");

function toOutput(input) {
    output.value += input;

}

function clearOutput() {
    output.value = "";
}

function clear() {
}

function calculate() {
    try {
        output.value = eval(output.value);
    }
    catch {
        output.value = "ERROR";
    }
}   