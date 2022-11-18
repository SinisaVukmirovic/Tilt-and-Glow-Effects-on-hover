import { main, cards } from './DOMelems.js';

export default function glowOnHover(e) {
    for (const card of cards) {
        const rect = card.getBoundingClientRect();
        // const x = e.clientX - rect.left
        console.log(rect.left)
    }
}

main.addEventListener('mousemove', glowOnHover);