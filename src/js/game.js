import playGoblin from './playgoblin.js';
import indexCell from './indexcell.js';

export class Game {
  constructor() {
  this.cells = document.querySelectorAll('itemcell');
  this.image = document.createElement("img");
  this.table = document.querySelectorAll('gametable');
  this.newIndex = indexCell();
  }


  
playGame() {
    setInterval(playGoblin(), 1000);
   
    this.cells.forEach((cell, index) => cell.addEventListener("click", (e)=> {
      if(e.currentTarget[index] == this.cells[this.goblinCell])  {
        this.victorCaunt ++;
        if(this.victorCaunt == 5) {
          this.victorCaunt = 0;
          this.loserCaunt = 0;
          return this.table.insertAdjacentHTML('afterbegin',`
            <div class="showwiner"}>
            ${'Вы выиграли!'}
            </div>`);

      }
    }
      else {
        if(this.loserCaunt > 5) {
          this.victorCaunt = 0;
          this.loserCaunt = 0;
          return  this.table.insertAdjacentHTML('afterbegin',`
            <div class="showwiner"}>
            ${'Вы проиграли!'}
            </div>`);
        }
      }
    }));

}
  
} 






