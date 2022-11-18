import { main, cards } from './DOMelems.js';

export default function glowOnHover(e) {
    main.style.border = '2px solid red'
}

main.addEventListener('mousemove', glowOnHover);