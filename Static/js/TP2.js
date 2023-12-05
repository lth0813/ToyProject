document.addEventListener('DOMContentLoaded', () => {
    window.setTimeout(() => {
    document.body.classList.remove('fade');
    });
});
window.addEventListener("DOMContentLoaded", () => {
    
    let cnt = 0;
    const content = `
    나는 결국 투명 드래곤과 싸우기로하엿다
    \n
    하지만 투명드래곤은 투명드래곤이라서 투명했따\n
    그래서 안보여서 나는 지고 말았따\n
    \n
    하지만 투명드래곤은 나를 봐줘따\n
    그리고 투명드래곤은 이새계가 심심해서 다른새계로\n
    가기로하였따
    \n
    평화가 차자왓따
    \n
    끗`
    const scrcontent = document.querySelector(".scrcon");
    const choice = document.querySelector(".choice_wrapper")
    const btn1 = document.querySelector(".btn1")
    const btn2 = document.querySelector(".btn2")
    let i = 0 
    let pause = false;
    let auto;
    function autotype() {
        if (i < content.length & !pause) {
            let txt = content.charAt(i);
            scrcontent.innerHTML += txt=== "\n" ? "<br/>": txt;
            i++;
        } else if (i >= content.length % !pause) {
            choice.style.display = 'flex';
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
    document.body.addEventListener("click", bclick);
    btn1.addEventListener("click", () => {alert("미구현!")});
    btn2.addEventListener("click", () => {alert("미구현!")});
    
})

//https://velog.io/@yunsungyang-omc/JS-%ED%95%A8%EC%88%98%EC%9D%98-%EC%A6%89%EC%8B%9C-%EC%A2%85%EB%A3%8C Interval 종료
//https://velog.io/@somangoi/%EC%9E%90%EA%B8%B0%EC%86%8C%EA%B0%9C-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B06-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%83%80%EC%9D%B4%ED%95%91-%ED%9A%A8%EA%B3%BC 타이핑효과
//https://sisiblog.tistory.com/248 페이드인 효과