document.getElementById('hipotenusa-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const cateto1 = parseFloat(document.getElementById('cateto1').value);
    const cateto2 = parseFloat(document.getElementById('cateto2').value);

    if (cateto1 <= 0 || cateto2 <= 0) {
        document.getElementById('result').textContent = "Los catetos deben ser valores positivos.";
        return;
    }

    const hipotenusa = Math.sqrt(cateto1 ** 2 + cateto2 ** 2).toFixed(2);
    document.getElementById('result').textContent = `La hipotenusa es: ${hipotenusa}`;
});
