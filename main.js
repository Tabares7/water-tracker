const littleBotles = document.querySelectorAll(".little-botle");
const water_goal = document.querySelector(".water-goal");
const for_drink = document.querySelector(".for-drink");
const drinked = document.querySelector(".drinked");
const text = document.querySelector(".text");

const ml250 = "Great start! You've already drunk 250 ml of water. Keep up the healthy pace.";
const ml500 = "Awesome! You've reached 500 ml. Your body will thank you for this!";
const ml750 = "You're doing great! You've drunk 750 ml of water. Keep it up!";
const L1 = "Incredible! You've hit 1 liter. You're halfway to your daily goal!";
const L125 = "Fantastic! That's 1.25 liters of water. Your hydration is on point.";
const L15 = "Wonderful! You've consumed 1.5 liters. Your health is thanking you.";
const L175 = "Almost there! You've drunk 1.75 liters. You're doing a great job!";
const L2 = "Goal achieved! You've drunk 2 liters of water today. Excellent dedication to your well-being!";


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
            text.innerHTML = ml250;
            break;
        case 2:
            drinked.innerHTML = "500ml";
            for_drink.innerHTML = "1.5L";
            drinked.style.height = "6rem";
            for_drink.style.height = "18rem";
            text.innerHTML = ml500;
            break;
        case 3:
            drinked.innerHTML = "750ml";
            for_drink.innerHTML = "1.25L";
            drinked.style.height = "9rem";
            for_drink.style.height = "15rem";
            text.innerHTML = ml750;
            break;
        case 4:
            drinked.innerHTML = "1L";
            for_drink.innerHTML = "1L";
            drinked.style.height = "12rem";
            for_drink.style.height = "12rem";
            text.innerHTML = L1;
            break;
        case 5:
            drinked.innerHTML = "1.25L";
            for_drink.innerHTML = "750ml";
            drinked.style.height = "15rem";
            for_drink.style.height = "9rem";
            text.innerHTML = L125;
            break;
        case 6:
            drinked.innerHTML = "1.5L";
            for_drink.innerHTML = "500ml";
            drinked.style.height = "18rem";
            for_drink.style.height = "6rem";
            text.innerHTML = L15;
            break;
        case 7:
            drinked.innerHTML = "1.75L";
            for_drink.innerHTML = "250ml";
            drinked.style.height = "21rem";
            for_drink.style.height = "3rem";
            text.innerHTML = L175;
            break;
        case 8:
            drinked.innerHTML = "Congrats, you made it!!";
            drinked.style.height = "24rem";
            for_drink.style.height = "0rem";
            for_drink.innerHTML = "";
            text.innerHTML = L2;
            break;
    
        default:
            break;
    }
    
}

document.addEventListener("DOMContentLoaded", () => {
    waterGoal();
}   )   

 
