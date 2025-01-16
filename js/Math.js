function checkValue(Type, Input) {
    switch (Type) {
        case "Decimal":
            if (!/^[+-]?[0-9]+$/.test(Input)) {
                alert('Value Is Not Decimal')
                return false;
            }
        case "Octal":
            if (!/^[0-7]+$/.test(Input)) {
                alert('Value Is Not Octal')
                return false;
            }
        case "Binary":
            if (!/^[01]+$/.test(Input)) {
                alert('Value Is Not Biner');
                return false;
            }
        case "Hexa":
            if(!/^[0-9a-fA-F]+$/.test(Input))
            {
                alert('Value Is Not Hexa');
                return false;
            }
    }
    return true;
}

function checkConvertTo(LeftType, RightType, value, result) {
    switch (LeftType.value) {
        case "Decimal":
            switch (RightType.value) {
                case "Octal":
                    value = parseInt(value.value);
                    const Octal = value.toString(8);
                    result.value = Octal;
                    break;
                case "Binary":
                    value = parseInt(value.value);
                    const Biner = value.toString(2);
                    result.value = Biner;
                    break;
                case "Hexa":
                    value = value.value.toString(16).toUpperCase();
                    result.value = value;
                    break;
            }
            break;
        case "Octal":
            switch (RightType.value) {
                case "Decimal":
                    value = parseInt(value.value, 8);
                    result.value = value;
                    break;
                case "Binary":
                    value = parseInt(value.value, 8);
                    const Biner = value.toString(2);
                    result.value = Biner;
                    break;
                case "Hexa":
                    value = parseInt(value.value,8).toString(16).toUpperCase();
                    result.value = value;
            }
            break;
        case "Binary":
            switch (RightType.value) {
                case "Decimal":
                    value = parseInt(value.value, 2);
                    result.value = value;
                    break;
                case "Octal":
                    value = parseInt(value.value, 2);
                    const Octal = value.toString(8);
                    result.value = Octal;
                    break;
                case "Hexa": 
                    value = parseInt(value.value,2).toString(16).toUpperCase();
                    result.value = value;
            }
        case "Hexa":
            switch(RightType.value){
                case "Decimal":
                    value = parseInt(value.value,16);
                    result.value = value;
                    break;
                case "Octal":
                    value = parseInt(value.value,16).toString(8);
                    result.value = value;
                    break;
                case "Binary":
                    value = parseInt(value.value,16).toString(2);
                    result.value = value;
                    break;
            }
    }
    return;
}

const LeftInput = document.getElementById('LeftInput');
const RightInput = document.getElementById('RightInput');
const LeftType = document.getElementById('LeftOption');
const RightType = document.getElementById('RightOption');
const ConvertBtn = document.getElementById('convert');

ConvertBtn.addEventListener('click', function () {
    const result = checkValue(LeftType.value, LeftInput.value);

    if (LeftType.value === RightType.value) {
        alert('Type is Same, Please Change To Another Type');
        return;
    }
    if (result) {
        checkConvertTo(LeftType, RightType, LeftInput, RightInput);
    }
});