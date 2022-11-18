import { cards } from './DOMelems.js';

const tiltMove = (x, y) => `perspective(500px) rotateX(${x}deg) rotateY(${y}deg)`;

cards.forEach(card => {
    const height = card.clientHeight;
    const width = card.clientWidth;

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const multiplier = 10;

        const xRotate = -multiplier * ((y - width / 2) / width);
        const yRotate = multiplier * ((x - height / 2) / height * 2.25);

        card.style.transform = tiltMove(xRotate, yRotate);
    })

    card.addEventListener('mouseout', () => card.style.transform = tiltMove(0, 0));
})