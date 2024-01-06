const littleBotles = document.querySelectorAll(".little-botle");
const water_goal = document.querySelector(".water-goal");
const for_drink = document.querySelector(".for-drink");
const drinked = document.querySelector(".drinked");

var count = 0;

littleBotles.forEach((littleBotle) => {
  littleBotle.addEventListener("click", () => {
      if (littleBotle.classList.contains("little-botle--active")) {
        count--;
      } else {
        count++;
      }
    littleBotle.classList.toggle("little-botle--active");
    waterGoal();
  });
});

const waterGoal = () =>{
   
    switch (count) {
        case 0:
            drinked.innerHTML = "";
            for_drink.innerHTML = "2L left";
            drinked.style.height = "0rem";
            for_drink.style.height = "24rem";
            break;
        case 1:
            drinked.innerHTML = "250ml";
            for_drink.innerHTML = "1.75L";
            drinked.style.height = "3rem";
            for_drink.style.height = "21rem";
            break;
        case 2:
            drinked.innerHTML = "500ml";
            for_drink.innerHTML = "1.5L";
            drinked.style.height = "6rem";
            for_drink.style.height = "18rem";
            break;
        case 3:
            drinked.innerHTML = "750ml";
            for_drink.innerHTML = "1.25L";
            drinked.style.height = "9rem";
            for_drink.style.height = "15rem";
            break;
        case 4:
            drinked.innerHTML = "1L";
            for_drink.innerHTML = "1L";
            drinked.style.height = "12rem";
            for_drink.style.height = "12rem";
            break;
        case 5:
            drinked.innerHTML = "1.25L";
            for_drink.innerHTML = "750ml";
            drinked.style.height = "15rem";
            for_drink.style.height = "9rem";
            break;
        case 6:
            drinked.innerHTML = "1.5L";
            for_drink.innerHTML = "500ml";
            drinked.style.height = "18rem";
            for_drink.style.height = "6rem";
            break;
        case 7:
            drinked.innerHTML = "1.75L";
            for_drink.innerHTML = "250ml";
            drinked.style.height = "21rem";
            for_drink.style.height = "3rem";
            break;
        case 8:
            drinked.innerHTML = "Congrats, you made it!!";
            drinked.style.height = "24rem";
            for_drink.style.height = "0rem";
            for_drink.innerHTML = "";
            break;
    
        default:
            break;
    }
    
}

document.addEventListener("DOMContentLoaded", () => {
    waterGoal();
}   )   

 
