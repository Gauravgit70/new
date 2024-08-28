document.addEventListener('DOMContentLoaded', () => {
    const naruto = document.getElementById('naruto');
    const sasuke = document.getElementById('sasuke');
    const startButton = document.getElementById('start-fight');

    const fightSequence = () => {
        naruto.style.transition = 'all 1s ease';
        sasuke.style.transition = 'all 1s ease';

        setTimeout(() => {
            naruto.style.transform = 'translateX(400px)';
        }, 500);

        setTimeout(() => {
            sasuke.style.transform = 'translateX(-400px) scaleX(-1)';
        }, 1000);

        setTimeout(() => {
            naruto.style.transform = 'translateX(0px)';
            sasuke.style.transform = 'translateX(0px) scaleX(-1)';
        }, 2000);

        setTimeout(() => {
            alert('Fight Over!');
        }, 2500);
    };

    startButton.addEventListener('click', fightSequence);
});
