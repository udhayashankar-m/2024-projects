const container = document.querySelector(".container");
const btns = document.querySelectorAll(".btn");
const images = ["image1.webp","image2.jpg","image3.jpg","image1.png"] 

index = 0;
btns.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(button.classList.contains("btnLeft")){
            index--;
            if(index < 0){
                index = images.length -1
                container.style.background = `url(./assests/${images[index]}) no-repeat center`
                container.style.backgroundSize = `contain`;
                container.style.backgroundPosition = "fixed"
            }
            container.style.background = `url(./assests/${images[index]}) no-repeat center`
            container.style.backgroundSize = `contain`;
            container.style.backgroundPosition = "fixed"
        }
        else{
            index++
            if(index === images.length){
                index = 0
                container.style.background = `url(./assests/${images[index]}) no-repeat center`
                container.style.backgroundSize = `contain`;
                container.style.backgroundPosition = "fixed"
            }
            container.style.background = `url(./assests/${images[index]}) no-repeat center`
            container.style.backgroundSize = `contain`;
            container.style.backgroundPosition = "fixed"
        }
    })
})