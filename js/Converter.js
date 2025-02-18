document.getElementById('convert').addEventListener('click', function () {
    let leftOption = document.getElementById('LeftOption').value;
    let rightOption = document.getElementById('RightOption').value;
    let leftInput = document.getElementById('LeftInput').value;
    let rightInput = document.getElementById('RightInput');

    if (leftInput === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Masukkan angka terlebih dahulu!',
        });
        return;
    }

    let convertedValue;
    try {
        convertedValue = convertNumber(leftInput, leftOption, rightOption);
        rightInput.value = convertedValue;

        Swal.fire({
            icon: 'success',
            title: 'Konversi Berhasil!',
            text: `Hasil: ${convertedValue}`,
        });

    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Kesalahan!',
            text: 'Format angka tidak valid.',
        });
    }
});

function convertNumber(value, from, to) {
    let decimalValue;

    switch (from) {
        case 'Decimal':
            decimalValue = parseInt(value, 10);
            break;
        case 'Binary':
            decimalValue = parseInt(value, 2);
            break;
        case 'Octal':
            decimalValue = parseInt(value, 8);
            break;
        case 'Hexa':
            decimalValue = parseInt(value, 16);
            break;
        default:
            throw new Error('Format tidak dikenal');
    }

    if (isNaN(decimalValue)) throw new Error('Input tidak valid');

    switch (to) {
        case 'Decimal':
            return decimalValue.toString(10);
        case 'Binary':
            return decimalValue.toString(2);
        case 'Octal':
            return decimalValue.toString(8);
        case 'Hexa':
            return decimalValue.toString(16).toUpperCase();
        default:
            throw new Error('Format tidak dikenal');
    }
}
