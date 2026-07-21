const slides = document.querySelectorAll(".slide");

let currentSlide = 0;
let selectedDate = "";
let selectedTime = "";

function showSlide(index){
    slides.forEach(slide=>slide.classList.remove("active"));
    slides[index].classList.add("active");
}

const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");
const kiss=document.getElementById("kiss");

let noClicks=0;

// Кнопка Нет
noBtn.addEventListener("click",()=>{

    noClicks++;

    kiss.style.opacity="1";
    kiss.style.transform="translate(-50%,-50%) scale(2.5)";

    setTimeout(()=>{
        kiss.style.opacity="0";
        kiss.style.transform="translate(-50%,-50%) scale(.1)";
    },700);

    noBtn.style.position="fixed";

    noBtn.style.left=Math.random()*(window.innerWidth-120)+"px";
    noBtn.style.top=Math.random()*(window.innerHeight-80)+"px";

    yesBtn.style.transform=`scale(${1+noClicks*0.08})`;

    if(noClicks==3){
        alert("🥺 Такого варианта нет, солнышко ❤️");
    }

});

// Кнопка Да
yesBtn.addEventListener("click",()=>{
    currentSlide=1;
    showSlide(currentSlide);
});

// Выбор свидания
document.querySelectorAll(".card").forEach(card=>{

card.onclick=()=>{

selectedDate=card.dataset.value;

currentSlide=2;

showSlide(currentSlide);

}

});

// Далее
document.getElementById("continueBtn").onclick=()=>{

selectedTime=document.getElementById("date").value;

if(selectedTime==""){

alert("Выбери дату ❤️");

return;

}

document.getElementById("finalText").innerHTML=`
❤️ Отличный выбор!

<br><br>

<b>${selectedDate}</b>

<br><br>

📅 ${selectedTime}

<br><br>

Жди меня, солнце ☀️

<br><br>

Я уже очень жду нашей встречи ❤️
`;

currentSlide=3;

showSlide(currentSlide);

};

// Пока просто спасибо
document.getElementById("finishBtn").
