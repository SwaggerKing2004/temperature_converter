function convert() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;

    let convertedTemp;

    // Convert the input temperature to the target unit
    if (inputUnit === outputUnit) {
        convertedTemp = inputTemp;
    } else if (inputUnit === "celsius") {
        if (outputUnit === "fahrenheit") {
            convertedTemp = (inputTemp * 9/5) + 32;
        } else if (outputUnit === "kelvin") {
            convertedTemp = inputTemp + 273.15;
        }
    } else if (inputUnit === "fahrenheit") {
        if (outputUnit === "celsius") {
            convertedTemp = (inputTemp - 32) * 5/9;
        } else if (outputUnit === "kelvin") {
            convertedTemp = (inputTemp - 32) * 5/9 + 273.15;
        }
    } else if (inputUnit === "kelvin") {
        if (outputUnit === "celsius") {
            convertedTemp = inputTemp - 273.15;
        } else if (outputUnit === "fahrenheit") {
            convertedTemp = (inputTemp - 273.15) * 9/5 + 32;
        }
    }

    // Update the output temperature in the box
    document.getElementById("outputTemp").innerText = `Converted Temperature: ${convertedTemp.toFixed(2)}`;
}
