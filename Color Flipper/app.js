const colors = ["white" , "silver", "gray","black", "red", "maroon", "yellow", "olive", "lime", "green" , "aqua", "teal" , "blue", "navy", "fuchsia", "purple"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    //get a random number between 0 - 15
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];   
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}