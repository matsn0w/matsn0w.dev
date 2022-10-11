import confetti from 'canvas-confetti';

const me = document.querySelector('#me');

me.addEventListener('click', (e) => {
    confetti({
        spread: 360,
        particleCount: 150,
        disableForReducedMotion: true,
        origin: {
            x: e.clientX / window.innerWidth,
            y: e.clientY / window.innerHeight,
        },
    })
});
