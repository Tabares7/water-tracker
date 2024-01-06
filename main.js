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
            <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3394e4" fill-opacity="1" d="M0,128L60,112C120,96,240,64,360,80C480,96,600,160,720,176C840,192,960,160,1080,165.3C1200,171,1320,213,1380,234.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <svg class="wave w1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#69b4f8" fill-opacity="1" d="M0,64L60,101.3C120,139,240,213,360,213.3C480,213,600,139,720,122.7C840,107,960,149,1080,144C1200,139,1320,85,1380,58.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
           `;
            for_drink.innerHTML = "1.75L";
            drinked.style.height = "3rem";
            for_drink.style.height = "21rem";
            text.innerHTML = ml250;
            break;
        case 2:
            drinked.innerHTML = `500ml
             <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3394e4" fill-opacity="1" d="M0,128L60,112C120,96,240,64,360,80C480,96,600,160,720,176C840,192,960,160,1080,165.3C1200,171,1320,213,1380,234.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <svg class="wave w1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#69b4f8" fill-opacity="1" d="M0,64L60,101.3C120,139,240,213,360,213.3C480,213,600,139,720,122.7C840,107,960,149,1080,144C1200,139,1320,85,1380,58.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
          `
            for_drink.innerHTML = "1.5L";
            drinked.style.height = "6rem";
            for_drink.style.height = "18rem";
            text.innerHTML = ml500;
            break;
        case 3:
            drinked.innerHTML = `750ml
            <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3394e4" fill-opacity="1" d="M0,128L60,112C120,96,240,64,360,80C480,96,600,160,720,176C840,192,960,160,1080,165.3C1200,171,1320,213,1380,234.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <svg class="wave w1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#69b4f8" fill-opacity="1" d="M0,64L60,101.3C120,139,240,213,360,213.3C480,213,600,139,720,122.7C840,107,960,149,1080,144C1200,139,1320,85,1380,58.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
           `
            for_drink.innerHTML = "1.25L";
            drinked.style.height = "9rem";
            for_drink.style.height = "15rem";
            text.innerHTML = ml750;
            break;
        case 4:
            drinked.innerHTML = `1L
            <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3394e4" fill-opacity="1" d="M0,128L60,112C120,96,240,64,360,80C480,96,600,160,720,176C840,192,960,160,1080,165.3C1200,171,1320,213,1380,234.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <svg class="wave w1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#69b4f8" fill-opacity="1" d="M0,64L60,101.3C120,139,240,213,360,213.3C480,213,600,139,720,122.7C840,107,960,149,1080,144C1200,139,1320,85,1380,58.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
           `
            for_drink.innerHTML = "1L";
            drinked.style.height = "12rem";
            for_drink.style.height = "12rem";
            text.innerHTML = L1;
            break;
        case 5:
            drinked.innerHTML = `1.25L
            <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3394e4" fill-opacity="1" d="M0,128L60,112C120,96,240,64,360,80C480,96,600,160,720,176C840,192,960,160,1080,165.3C1200,171,1320,213,1380,234.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <svg class="wave w1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#69b4f8" fill-opacity="1" d="M0,64L60,101.3C120,139,240,213,360,213.3C480,213,600,139,720,122.7C840,107,960,149,1080,144C1200,139,1320,85,1380,58.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
           `
            for_drink.innerHTML = "750ml";
            drinked.style.height = "15rem";
            for_drink.style.height = "9rem";
            text.innerHTML = L125;
            break;
        case 6:
            drinked.innerHTML = `1.5L
            <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3394e4" fill-opacity="1" d="M0,128L60,112C120,96,240,64,360,80C480,96,600,160,720,176C840,192,960,160,1080,165.3C1200,171,1320,213,1380,234.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <svg class="wave w1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#69b4f8" fill-opacity="1" d="M0,64L60,101.3C120,139,240,213,360,213.3C480,213,600,139,720,122.7C840,107,960,149,1080,144C1200,139,1320,85,1380,58.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
           `
            for_drink.innerHTML = "500ml";
            drinked.style.height = "18rem";
            for_drink.style.height = "6rem";
            text.innerHTML = L15;
            break;
        case 7:
            drinked.innerHTML = `1.75L
            <svg class="wave wave-end" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3394e4" fill-opacity="1" d="M0,128L60,112C120,96,240,64,360,80C480,96,600,160,720,176C840,192,960,160,1080,165.3C1200,171,1320,213,1380,234.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <svg class="wave w1 wave-end" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#69b4f8" fill-opacity="1" d="M0,64L60,101.3C120,139,240,213,360,213.3C480,213,600,139,720,122.7C840,107,960,149,1080,144C1200,139,1320,85,1380,58.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
           `
            for_drink.innerHTML = "";
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

 
