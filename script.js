// タイピング文字

const text = "専門学校でITを勉強中！";
const typing = document.getElementById("typing");

let i = 0;

function typeText(){

    if(i < text.length){

        typing.textContent += text.charAt(i);

        i++;

        setTimeout(typeText,100);

    }

}

typeText();


// ダークモード

const darkMode = document.getElementById("darkMode");

darkMode.addEventListener("click",function(){

    document.body.classList.toggle("dark");

});




// スクロールで表示

const fade = document.querySelectorAll(".fade");

function showFade(){

    fade.forEach(function(item){

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",showFade);

showFade();