function handleCostKeydown(event){
  if(event.key === "Enter"){
    calculate()
  }
}
function calculate(){
  try{
    let inputValue = Number(document.querySelector(".inputvalue").value)
    const calculateTotal = document.querySelector(".calculateTotal")
    
    if(inputValue < 40 && inputValue > 0){
      inputValue += 10
      calculateTotal.innerHTML = "order cost: " + inputValue + "$"
    }
    else{
      calculateTotal.innerHTML = "order cost: " + inputValue + "$"
    }
  }
  catch(err){
    document.getElementsByClassName("calculateTotal").innerHTML = err.message
  }
 
}
function Subscribe(){
  let subscribe = document.querySelector(".js-subscribe-btn")

  if(subscribe.innerHTML === "Subscribe"){
    subscribe.innerHTML = "Subscribed"
    subscribe.classList.add("subscribed")
  }
  else{
    subscribe.innerHTML = "Subscribe"
    subscribe.classList.remove("subscribed")
} 
}