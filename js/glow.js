import { main, cards } from './DOMelems.js';

export default function glowOnHover(e) {
    for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouseX', `${x}px`);
        card.style.setProperty('--mouseY', `${y}px`);
    }
}

main.addEventListener('mousemove', glowOnHover);