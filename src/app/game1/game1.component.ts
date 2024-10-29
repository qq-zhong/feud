import { Component, HostListener } from '@angular/core';

//TODO: maybe have a manual show question button
// bug: when buzzing player clicks number key, it shows answer
@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})
export class Game1Component {
  answers = [
    { text: 'Answer 1Answer 1Answer 1Answer 1Answer', revealed: false, score: 35 },
    { text: 'Answer 2', revealed: false, score: 23 },
    { text: 'Answer 3', revealed: false, score: 20 },
    { text: 'Answer 4', revealed: false, score: 12 },
    { text: 'Answer 5', revealed: false, score: 4 },
    { text: 'Answer 6', revealed: false, score: 3 },
    { text: 'Answer 7', revealed: false, score: 2 },
    { text: 'Answer 8', revealed: false, score: 1 },
    // add up to 8 answers
  ];

  currentQuestion = 'Question to be revealed'; // Example question
  wrong_answer_count = "";

  isPlayer1Flashing = false;
  isPlayer2Flashing = false;

  revealed_count = 0;




  player1Keys: string[] = [];
  player2Keys: string[] = [];
  keysRegistered = false;
  gameStarted = false;
  gameScore = 0;
  raceOver = false; // Flag to indicate if race is over
  showXOverlay = false;
  canSteal = false;
  roundOver = false;
  wrongAnswerCount = 0;

  keyRegistrationInProgress = false;
  keyRegistrationMessage = '';
  activePlayerKey: number = 0; // 1 for Player 1, 2 for Player 2

  // Sounds
  wrongAnswerSound = new Audio('assets/wrong.mp3');
  correctAnswerSound = new Audio('assets/correct-answer.mp3');
  winningSound = new Audio('assets/winning-sound.mp3');
  buzzerSound = new Audio('assets/buzz.mp3');
  newRoundSound = new Audio('assets/come_up_to_play.mp3');
  rightAnswerSound = new Audio('assets/right_answer.mp3');
  roundOverSound = new Audio('assets/round_over.mp3');
  specialSound = new Audio('assets/nothing.mp3');

  ngOnInit(): void {
    this.newRoundSound.play();
  }

  // Start key registration for a specific player
  startKeyRegistration(player: number) {
    this.keyRegistrationInProgress = true;
    this.activePlayerKey = player;
    this.keyRegistrationMessage = `Press any keys for Player ${player}. Press 'Stop' to end registration.`;
  }

  stopKeyRegistration() {
    this.keyRegistrationInProgress = false;
    this.keyRegistrationMessage = '';
    if (this.player1Keys.length > 0 && this.player2Keys.length > 0) {
      this.keysRegistered = true;
    }
  }

  // Handle keypress events for registering keys and game management
  @HostListener('window:keydown', ['$event'])
  handleKeyPress(event: KeyboardEvent) {
    const keyPressed = event.key.toUpperCase(); // Convert to uppercase

    if (['META', 'ALT', 'CONTROL', 'SHIFT'].includes(keyPressed)) {
      return; // Skip these keys
    }

    if (this.keyRegistrationInProgress) {
      if (this.activePlayerKey === 1) {
        this.addKeyToPlayer(1, keyPressed);
      } else if (this.activePlayerKey === 2) {
        this.addKeyToPlayer(2, keyPressed);
      }
    }

    if (!this.gameStarted) return;

    // Game logic: determine who buzzed in first
    if (!this.raceOver) {
      
      if (this.player1Keys.includes(keyPressed)) {
        this.buzzerSound.play()
        this.raceOver = true;
        this.isPlayer1Flashing = true;
        this.showQuestion();
        setTimeout(() => this.isPlayer1Flashing = false, 2000); // Flash for 1 second
      } else if (this.player2Keys.includes(keyPressed)) {
        this.buzzerSound.play()
        this.raceOver = true;
        this.isPlayer2Flashing = true;
        this.showQuestion();
        setTimeout(() => this.isPlayer2Flashing = false, 2000); // Flash for 1 second
      }

      return;
    }

    // Handle wrong answers (X key)
    if (keyPressed === 'X') {
      this.addX();
    }

    if (keyPressed === 'N') {
      this.specialSound.play();
    }

    // Handle correct answers (keys 1-8)
    if (keyPressed >= '1' && keyPressed <= '8' && !this.answers[parseInt(keyPressed)-1].revealed) {
      const index = Number(keyPressed) - 1;
      this.revealAnswer(index);
      this.rightAnswerSound.play();
      this.revealed_count++;
      console.log(this.revealed_count)

      if (this.roundOver == true && this.revealed_count == 8){
        //this.roundOver = true;
        setTimeout(() => {
          this.roundOverSound.play();
        }, 1400);
      }
      if ((this.revealed_count == 8 || this.canSteal == true) && this.roundOver == false){
        this.roundOver = true;
        setTimeout(() => {
          this.winningSound.play();
        }, 1400);
      }
      
    }
  } 

  // Add key to the current player's list and remove from the other player's list if needed
  addKeyToPlayer(player: number, keyPressed: string) {
    if (player === 1) {
      if (!this.player1Keys.includes(keyPressed)) {
        this.player1Keys.push(keyPressed);
        this.removeKeyFromOtherPlayer(2, keyPressed);
      }
    } else if (player === 2) {
      if (!this.player2Keys.includes(keyPressed)) {
        this.player2Keys.push(keyPressed);
        this.removeKeyFromOtherPlayer(1, keyPressed);
      }
    }
  }

  // Remove key from the other player's list if it exists there
  removeKeyFromOtherPlayer(player: number, keyPressed: string) {
    if (player === 1) {
      const index = this.player1Keys.indexOf(keyPressed);
      if (index !== -1) {
        this.player1Keys.splice(index, 1);
      }
    } else if (player === 2) {
      const index = this.player2Keys.indexOf(keyPressed);
      if (index !== -1) {
        this.player2Keys.splice(index, 1);
      }
    }
  }

  addX() {
    if(this.roundOver == true)
    {
      return;
    }
    if(this.canSteal == true)
    {
        //this.wrongAnswerCount++;
        this.wrong_answer_count = "❌";
        this.showXOverlay = true;
        this.wrongAnswerSound.play();
        setTimeout(() => {
          this.showXOverlay = false;
          this.winningSound.play();
        }, 1400);
        
    }
    else{
      this.wrongAnswerCount++;
      this.wrong_answer_count += "❌";
      this.showXOverlay = true;
      this.wrongAnswerSound.play();
      console.log(this.wrong_answer_count);
  
      if (this.wrongAnswerCount === 3) {
        // Handle 3 wrong answers
        this.canSteal=true;
        console.log(this.wrong_answer_count);
        // this.wrongAnswerCount = 0;
        // this.wrong_answer_count = "";
      }
      setTimeout(() => {
        this.showXOverlay = false;
      }, 1400);
    }
    
  }

  revealAnswer(index: number) {
    if (!this.answers[index].revealed) {
      this.answers[index].revealed = true;
      this.correctAnswerSound.play();
      this.gameScore += this.answers[index].score;
    }
    // if (this.answers.every(answer => answer.revealed)) {
    //       this.winningSound.play();
    //     }
  }

  // stealAnswer() {
  //   setTimeout(() => {
  //     this.showXOverlay = false;
  //   }, 1400);
  //   this.wrongAnswerCount = 0;
  //   this.wrong_answer_count += "X ";

  // }
  

  closeXPopup() {
    this.showXOverlay = false;
  }

  startGame() {
    this.gameStarted = true;
    // alert('Game started! First player to press a key in their list wins the buzz-in.');
  }

  // Show question after race is over
  showQuestion() {
    this.currentQuestion = 'What is the most popular fruit?'; // Display actual question
  }
}