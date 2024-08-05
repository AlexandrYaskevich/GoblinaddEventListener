import goblin from '../img/goblin.png';

export class Game {
  constructor() {
  this.cells = document.querySelectorAll('itemcell');
  this.image = document.createElement("img");
  this.table = document.querySelectorAll('gametable');
  this.src = goblin;
  this.goblinCell = null;
  this.victorCaunt = 0;
  this.loserCaunt = 0;
  this.index = null;
  this.newIndex = null;
  }

 indexCell (){
    this.index = Math.floor(Math.random() * this.cells.length);
    return this.cells[this.index];
  }

 playGoblin (){
    this.newIndex = indexCell();
    if(this.goblinCell != this.newIndex) {
      this.goblinCell = this.newIndex;
      this.goblinCell.appendChild(this.image);
      this.loserCaunt ++;
    }
  }

  
playGame() {
    setInterval(playGoblin, 1000);
   
    this.cells.forEach((cell, index) => cell.addEventListener("click", (e)=> {
      if(e.currentTarget[index] = this.goblinCell)  {
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






