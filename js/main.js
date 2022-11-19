import './tilting.js';
import glowOnHover from './glow.js';

import { cards } from './DOMelems.js';

const images = {
    1: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/doom_bringer.png',
    2: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dragon_knight.png',
    3: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/earth_spirit.png',
    4: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/invoker.png',
    5: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/kunkka.png',
    6: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/legion_commander.png',
    7: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/night_stalker.png',
    8: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/omniknight.png',
    9: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/sven.png',
    10: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/skeleton_king.png'
}

// cards.forEach(card => {
//     const cardImg = card.querySelector('.card-img img');
// });

const imgsInObj = Object.getOwnPropertyNames(images);

// for (let i = 1; i <= imgsInObj.length; i++) {
//     const cardImg${i} = cards.querySelector('.card .card-img img');

//     cardImg.forEach(card => {
//         card.src = images.i;
//     });
// }

let i = 1;
console.log(imgsInObj.length)

cards.forEach(card => {
    const img = card.querySelector('.card-img img');
    // img.src = images[i];
    if (i > imgsInObj.length) {
        return;
    }
    i++
    // console.log(i)
    img.src = images[i];
});