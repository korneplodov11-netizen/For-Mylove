const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const kiss = document.getElementById("kiss");
const hearts = document.getElementById("hearts");

let noCount = 0;

// Летающие сердечки
function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.pointerEvents = "none";
    heart.style.animation = "fall 5s linear";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 400);

// Добавляем анимацию падения
const style = document.createElement("style");

style.innerHTML = `
@keyframes fall{
0%{
transform:translateY(-20px);
opacity:1;
}
100%{
transform:translateY(110vh);
opacity:0;
}
}
`;

document.head.appendChild(style);

// Кнопка "Нет"
noButton.addEventListener("click", () => {

    noCount++;

    // Вибрация телефона
    if (navigator.vibrate) {
        navigator.vibrate(120);
    }

    // Показываем поцелуй
    kiss.style.opacity = "1";
    kiss.style.transform = "translate(-50%,-50%) scale(2.5)";

    setTimeout(() => {
        kiss.style.opacity = "0";
        kiss.style.transform = "translate(-50%,-50%) scale(.1)";
    }, 700);

    // Убегает
    noButton.style.position = "fixed";
    noButton.style.left = Math.random() * (window.innerWidth - 120) + "px";
    noButton.style.top = Math.random() * (window.innerHeight - 80) + "px";

    // Да становится больше
    yesButton.style.transform =
        `scale(${1 + noCount * 0.08})`;

    if(noCount==3){
        alert("🥺 Ну солнышко... такого варианта нет ❤️");
    }

});

// Кнопка Да
yesButton.addEventListener("click",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

window.location.href="date.html";

},700);

});
