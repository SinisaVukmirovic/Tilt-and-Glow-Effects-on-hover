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

const imgSrc = Object.values(images)
let i = 0;
cards.forEach(card => {
    const img = card.querySelector('.card-img img');
    img.src = `${imgSrc[i]}`;
    i++;
});
// attemps to dynamically add entire card elem and then target and select them with JS failed...