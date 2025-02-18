function isValidInput(type, input) {
    if (input.trim() === "") {
        alert("Input tidak boleh kosong!");
        return false;
    }

    const patterns = {
        "Decimal": /^[+-]?[0-9]+$/,
        "Octal": /^[0-7]+$/,
        "Binary": /^[01]+$/,
        "Hexa": /^[0-9a-fA-F]+$/
    };

    if (!patterns[type].test(input)) {
        alert(`Input bukan ${type} yang valid.`);
        return false;
    }

    return true;
}

function updateTitle(type, element) {
    element.textContent = type === "Hexa" ? "Hexadecimal" : type;
}

function convertValue(fromType, toType, input) {
    let decimalValue = parseInt(input, getBase(fromType));

    if (isNaN(decimalValue)) {
        return "Error";
    }

    return decimalValue.toString(getBase(toType)).toUpperCase();
}

function getBase(type) {
    return {
        "Decimal": 10,
        "Octal": 8,
        "Binary": 2,
        "Hexa": 16
    }[type];
}

document.addEventListener("DOMContentLoaded", function () {
    const leftInput = document.getElementById("LeftInput");
    const rightInput = document.getElementById("RightInput");
    const leftType = document.getElementById("LeftOption");
    const rightType = document.getElementById("RightOption");
    const convertBtn = document.getElementById("convert");
    const leftTitle = document.getElementById("title-left");
    const rightTitle = document.getElementById("title-right");

    leftType.addEventListener("change", function () {
        updateTitle(this.value, leftTitle);
    });

    rightType.addEventListener("change", function () {
        updateTitle(this.value, rightTitle);
    });

    convertBtn.addEventListener("click", function () {
        if (isValidInput(leftType.value, leftInput.value)) {
            rightInput.value = convertValue(leftType.value, rightType.value, leftInput.value);
        }
    });
});
