function ans(button, status) {
    const resultDiv = document.getElementById('result');

    if (status === 'right') {
        resultDiv.textContent = 'Correct!';
        resultDiv.style.color = 'black';
        button.style.backgroundColor= 'green';
        button.style.color='black';
        document.body.style.backgroundColor = 'green';
    } else {
        resultDiv.textContent = 'Wrong!';
        resultDiv.style.color ='black';
        button.style.color = 'black';
        document.body.style.backgroundColor = 'red';
        button.style.backgroundColor='yellow';
    }

    const buttons = document.querySelectorAll('.option');
    buttons.forEach(btn => btn.disabled = true);
}
