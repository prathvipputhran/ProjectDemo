window.onload = function() {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'login.html';
    }
};

document.getElementById('sumForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const sum = number1 + number2;
    document.getElementById('result').textContent = 'Sum: ' + sum;
});
