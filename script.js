document.getElementById('startButton').addEventListener('click', function() {
    window.scrollTo({
        top: document.getElementById('timeline').offsetTop,
        behavior: 'smooth'
    });
});


document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const respostasCorretas = {
        question1: 'nem eu sei',
        question2: 'no cinema'
    };

    
    const question1 = document.getElementById('question1').value;
    const question2 = document.getElementById('question2').value;

   
    let resultado = '';
    if (question1 === respostasCorretas.question1 && question2 === respostasCorretas.question2) {
        resultado = 'Parabéns, você acertou tudo! 🎉';
    } else {
        resultado = 'Parece que você errou alguma coisa. Tente novamente! 💡';
    }

   
    document.getElementById('result').innerText = resultado;
});
