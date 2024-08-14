import indexCell from './indexcell.js'
import goblin from '../img/goblin.png';

const image = document.createElement("img");
image.src = goblin;
let newIndex = indexCell();
let goblinCell = null;
const cells = document.querySelectorAll('itemcell');
let loserCaunt = 0;

export default function playGoblin () {
    let index = newIndex;
    if(goblinCell != index) {
      goblinCell = index;
      cells[goblinCell].appendChild(image);
      loserCaunt ++;
    }
  }