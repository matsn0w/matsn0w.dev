import confetti from 'canvas-confetti';

const me = document.querySelector('#me');

me.addEventListener('click', (e) => {
    const tada = new Audio('dist/audio/tada.ogg');
    tada.play();

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
