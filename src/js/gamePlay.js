import { Board } from "./board";
import { Goblin } from "./goblin";

export class GamePlay {
  constructor() {
    this.gameBoard = new Board(4);
    this.goblin = new Goblin();
    this.board = document.querySelector("#field");
    this.countPlus = document.querySelector(".count-plus");
    this.countMinus = document.querySelector(".count-minus");
    this.countSkip = 0;
    this.count = 0;
  }

  start() {
    this.gameBoard.createBoard();
  
    this.plusCount();
    this.board.addEventListener("click", (event) => {
      event.preventDefault();
      this.clickCell(event);
    });
  
  }

  plusCount(){
    this.goblin.locateGoblin();
    let i = 0;
    setInterval(function() {
      i++;     
      if (i === 6) {
      i = 0;
      alert("Вы пропустили 5 появлений гоблина!");
      }
    }, 1000); 
    
  }


  clickCell(event) {
    if (!event.target.classList.contains("goblin")) {
      this.countSkip++;
      this.countMinus.textContent = this.countSkip;
      if (this.countSkip === 5) {
        this.reset();
        alert("Вы проиграли!");
      }
    } else {
      this.count++;
      this.countPlus.textContent = this.count;
      if (this.count === 5) {
        this.reset();
        alert("Вы выиграли!");
      }
    }
  }

  reset() {
    this.countSkip = 0;
    this.count = 0;
    this.countPlus.textContent = 0;
    this.countMinus.textContent = 0;
  }
}