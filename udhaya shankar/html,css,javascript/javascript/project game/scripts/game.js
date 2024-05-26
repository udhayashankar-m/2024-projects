let Score = JSON.parse(localStorage.getItem("score"));
    
    if(Score === null){
      Score = {
        win:0,
        loss:0,
        tie:0
      }
    }
    //getscore
    getscore();
    
    function resetmode(){
      Score.win = 0;
      Score.loss = 0;
      Score.tie = 0;
      localStorage.removeItem("score")
      getscore()
    }
    function getscore(){
      document.querySelector(".js-score").innerHTML = `you win - ${Score.win} computer win - ${Score.loss} tie - ${Score.tie}`
    }

    // auto play js
    let autoplayMode = false;
    let playingstate= document.querySelector(".autoPlay")
    function autoPlay(){ 
      if(!autoplayMode){
        autoplayMode = true 
        playingstate.innerHTML = "Pause"
        IntervalID = setInterval(()=>{
          let mode = computerMode()
          gameplay(mode)
          
        },1000)
      }
      else{
        clearInterval(IntervalID)
        autoplayMode = false;
        playingstate.innerHTML = "Auto play"
      }
    }

    document.querySelector(".js-rock").addEventListener("click",(e)=>{
      let rock = document.querySelector(".js-rock");
      rock.classList.toggle("clickingMode")
      setTimeout(()=>{
        rock.classList.toggle("clickingMode")
      },300)
    })
    document.querySelector(".js-paper").addEventListener("click",(e)=>{
      let rock = document.querySelector(".js-paper");
      rock.classList.toggle("clickingMode")
      setTimeout(()=>{
        rock.classList.toggle("clickingMode")
      },300)
    })
    document.querySelector(".js-scissors").addEventListener("click",(e)=>{
      let rock = document.querySelector(".js-scissors");
      rock.classList.toggle("clickingMode")
      setTimeout(()=>{
        rock.classList.toggle("clickingMode")
      },300)
    })
    document.body.addEventListener("keydown",(e)=>{
      let mode = e.key
      if(mode === "r"){
        gameplay("rock")
      }
      else if(mode === "p"){
        gameplay("paper")
      }
      else if(mode === "s"){
        gameplay("scissors")
      }
    })


    // game ppay
    function gameplay(mode) {
      const computermode = computerMode();
      let result = '';
      if (mode === "rock") {
        if (computermode === 'rock') {
          result = 'Tie';
        }
        else if (computermode === 'paper') {
          result = 'Computer Win';
        }
        else {
          result = 'You Win'
        }
      }
      if (mode === "paper") {
        if (computermode === 'rock') {
          result = 'You Win';}
        else if (computermode === 'paper') {
          result = 'Tie';
        }
        else {
          result = 'Computer Win'
        }
      }
      if (mode === "scissors") {
        if (computermode === 'rock') {
          result = 'Computer Win';
        }
        else if (computermode === 'paper') {
          result = 'You Win';
        }
        else {
          result = 'Tie'
        }
      }
    

      if(result === "You Win"){
        Score.win += 1;
      }
      else if(result === "Computer Win"){
        Score.loss += 1;
      }
      else{
        Score.tie +=1
      }

      localStorage.setItem("score",JSON.stringify(Score))
      //score
      getscore();
      //result
      document.querySelector(".js-result").innerHTML = `${result}`
      //move
      document.querySelector(".js-move").innerHTML = `you  <img src="../images/${mode}-emoji.png" alt="img" class="img-move"> <img src="../images/${computermode}-emoji.png" alt="img" class="img-move"> computer`
    }
    function computerMode() {
      const number = Math.random();
      let computermode = ''
      if (number > 0 && number <= 1/3) {
        computermode = 'rock'
      }
      else if (number > 1/3 && number <= 2/3) {
        computermode = 'paper'
      }
      else {
        computermode = 'scissors'
      }
      return computermode
    }