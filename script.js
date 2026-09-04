let selectedType = ""; const slides = document.querySelectorAll(".slide");

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
    document.getElementById("slide1").classList.remove("active");
    document.getElementById("memorySlide").classList.add("active");

    setTimeout(()=>{
        document.getElementById("memoryContinueBtn").classList.add("show");
    },9000);
});

// Кнопка после воспоминаний
document.getElementById("memoryContinueBtn").onclick=()=>{
    document.getElementById("memorySlide").classList.remove("active");
    document.getElementById("slide2").classList.add("active");
};
// Выбор свидания
document.querySelectorAll(".card").forEach(card=>{
    card.onclick=()=>{
        selectedType=card.dataset.value;

        document.getElementById("slide2").classList.remove("active");
        document.getElementById("slide3").classList.add("active");
    }
});

// Далее
document.getElementById("continueBtn").onclick=()=>{

selectedTime=document.getElementById("date").value;

if(selectedTime==""){

alert("Выбери дату ❤️");

return;

}

document.getElementById("finalText").innerHTML = `
<h2>🥹 Спасибо, любимая ❤️</h2>

<p>
Ты выбрала:<br><br>

<b>${selectedType}</b>

<br><br>

📅 ${selectedTime}

<br><br>

Хорошо, отличный выбор свидания ❤️

<br><br>

Жди меня, солнце ☀️

<br>

Я приеду к тебе с подарочком, любимая 🎁💕
</p>
`;

document.getElementById("slide3").classList.remove("active");
document.getElementById("slide4").classList.add("active");

confetti();
};

// Пока просто спасибо
document.getElementById("finishBtn").onclick = async () => {

    const dateValue = document.getElementById("date").value;

    const parts = dateValue.split("T");
    const chosenDate = parts[0];
    const chosenTime = parts[1];

    try {
        await fetch("https://script.google.com/macros/s/AKfycbyfaGc39xorjjcT5NeKd9c2YLRiExtUDcJUX9V_IEMLCwrQr480LKPE6fP3ptPW7rQ5/exec", {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "text/plain"
            },
            body: JSON.stringify({
                type: selectedType,
                date: chosenDate,
                time: chosenTime
            })
        });

        alert("❤️ Выбор сохранён");
    } catch (error) {
        alert("Ошибка отправки");
        console.log(error);
    }
};
// ===== Падающие сердечки =====

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-30px";
    heart.style.fontSize = (18 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    const duration = 4 + Math.random() * 3;

    heart.animate([
        { transform: "translateY(0px)", opacity: 1 },
        { transform: `translateY(${window.innerHeight + 50}px) rotate(${Math.random()*360}deg)`, opacity: 0 }
    ], {
        duration: duration * 1000,
        easing: "linear"
    });

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);

}

setInterval(createHeart, 350);
// Красивое появление кнопок
document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});
// ===== Конфетти =====

function confetti() {

    for (let i = 0; i < 120; i++) {

        const c = document.createElement("div");

        c.style.position = "fixed";
        c.style.left = Math.random() * 100 + "vw";
        c.style.top = "-20px";
        c.style.width = "10px";
        c.style.height = "10px";
        c.style.borderRadius = "50%";

        const colors = [
            "#ff4f93",
            "#ff77b7",
            "#ffd54f",
            "#ffffff",
            "#ffb3d9"
        ];

        c.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        c.style.pointerEvents = "none";
        c.style.zIndex = "9999";

        const time = 2500 + Math.random() * 1500;

        c.animate([
            {
                transform: "translateY(0px) rotate(0deg)"
            },
            {
                transform:
                    `translateY(${window.innerHeight + 100}px) rotate(${720 + Math.random()*720}deg)`
            }
        ], {
            duration: time,
            easing: "linear"
        });

        document.body.appendChild(c);

        setTimeout(() => {

            c.remove();

        }, time);

    }

}
