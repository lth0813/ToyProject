window.addEventListener("DOMContentLoaded", () => {
    let cnt = 0;
    const content = document.querySelector(".context").innerHTML;
    // const content = `
    // "크아아아아"
    

    // 드래곤중에서도 최강의 투명드래곤이 울부짓었다

    // 투명드래곤은 졸라짱쎄서 드래곤중에서 최강이엇다

    // 신이나 마족도 이겼따 다덤벼도 이겼따 투명드래곤은

    // 새상에서 하나였다 어쨌든 걔가 울부짓었다

    
    // "으악 제기랄 도망가자"

    
    // 발록들이 도망갔다 투명드래곤이 짱이었따

    // 그래서 발록들은 도망간 것이다

    
    // 나는 어떻게 할까?`
    const scrcontent = document.querySelector(".scrcon");
    const choice = document.querySelector(".choice_wrapper")
    const btn1 = document.querySelector(".btn1")
    const btn2 = document.querySelector(".btn2")
    let pause = false;
    let auto;
    function autotype() {
        for (let i = 0; i > content.length; i++) {
            let txt = content[i];
            if (pause === false) {
                if (i > 10 & i < 13) {
                    scrcontent.innerHTML += `<span>`+txt+`</span>`;
                    i++;
                } else {
                scrcontent.innerHTML += txt === "\n" ? "<br>": txt;
                i++;
                }
            } else if (pause === true) {
                choice.style.display = 'flex';
            }
        }
    }
    function stopauto() {
        clearInterval(auto);
        pause = true;
    }
    function bclick() {
        cnt++;
        if (cnt == 1) {
            autotype();
            auto = setInterval(autotype,100);
        }
        
        if (cnt == 2) {
            stopauto();
            scrcontent.innerText = content;
            choice.style.display = 'flex';
        }
    }
    function npage() {
        setTimeout(() => {location.href="./ToyProject2.html"},500)
        document.body.style.opacity = 0;
        document.body.style.transitionDuration = '0.5s';
        document.body.style.transitionProperty = opacity;
        
    }
    document.body.addEventListener("click", bclick);
    btn1.addEventListener("click", () => {npage()});
    btn2.addEventListener("click", () => {alert("도망칠 수 없다!")});
    
})

//https://velog.io/@yunsungyang-omc/JS-%ED%95%A8%EC%88%98%EC%9D%98-%EC%A6%89%EC%8B%9C-%EC%A2%85%EB%A3%8C Interval 종료
//https://velog.io/@somangoi/%EC%9E%90%EA%B8%B0%EC%86%8C%EA%B0%9C-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B06-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%83%80%EC%9D%B4%ED%95%91-%ED%9A%A8%EA%B3%BC 타이핑효과
//https://sisiblog.tistory.com/248 페이드인 효과