
const container = document.querySelector(".testi_container");
const cards = document.querySelectorAll(".testi_card");
const theme = document.getElementById('theme');

let index = 0;
const cardWidth = cards[0].offsetWidth + 30;

setInterval(() => {
    index++;

    if(index > cards.length - 3){
        index = 0;
    }

    container.style.transform = `translateX(-${index * cardWidth}px)`;
}, 2000);


theme.addEventListener('click', () =>{
    document.body.classList.toggle('light_theme');
})
