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
            drinked.innerHTML = `250ml
            <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#69b4f8" fill-opacity="1" d="M0,224L20,229.3C40,235,80,245,120,229.3C160,213,200,171,240,176C280,181,320,235,360,213.3C400,192,440,96,480,85.3C520,75,560,149,600,165.3C640,181,680,139,720,138.7C760,139,800,181,840,218.7C880,256,920,288,960,282.7C1000,277,1040,235,1080,229.3C1120,224,1160,256,1200,240C1240,224,1280,160,1320,122.7C1360,85,1400,75,1420,69.3L1440,64L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
            <svg class="wave w1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#69b4f8" fill-opacity="1" d="M0,64L20,64C40,64,80,64,120,96C160,128,200,192,240,208C280,224,320,192,360,197.3C400,203,440,245,480,256C520,267,560,245,600,202.7C640,160,680,96,720,90.7C760,85,800,139,840,160C880,181,920,171,960,149.3C1000,128,1040,96,1080,96C1120,96,1160,128,1200,144C1240,160,1280,160,1320,144C1360,128,1400,96,1420,80L1440,64L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
            `;
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

 
