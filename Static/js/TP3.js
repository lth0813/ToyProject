window.addEventListener("DOMContentLoaded", () => {
    const five = document.querySelector(".five")
    const four = document.querySelector(".four")
    const three = document.querySelector(".three")
    const two = document.querySelector(".two")
    const one = document.querySelector(".one")
    const zero = document.querySelector(".zero")
    const ntol = {"0" : "W", "1" : "A", "2" : "S", "3" : "D", 87 : "W", 65 : "A", 83 : "S", 68 : "D"}
    let score = 0;
    const scorescr = document.querySelector(".scorescr")
    const good = document.querySelector(".good")
    const bad = document.querySelector(".bad")
    const timer = document.querySelector(".timerscr")
    const result = document.querySelector(".result")
    const resultscr = document.querySelector(".resultscr")
    const restart = document.querySelector(".restart")
    const ready = document.querySelector(".ready")

    function createnext() {
        let num = parseInt(Math.random() * 4).toString();
        return ntol[num];
    }
    function tonext() {
        if (five.innerHTML == '') {
            five.innerHTML = createnext();
        }
        else if (four.innerHTML == '') {
            four.innerHTML = five.innerHTML;
            five.innerHTML = '';
        }
        else if (three.innerHTML == '') {
            three.innerHTML = four.innerHTML;
            four.innerHTML = '';
        }
        else if (two.innerHTML == '') {
            two.innerHTML = three.innerHTML;
            three.innerHTML = '';
        }
        else if (one.innerHTML == '') {
            one.innerHTML = two.innerHTML;
            two.innerHTML = '';
        }
        else if (zero.innerHTML == '') {
            zero.innerHTML = one.innerHTML;
            one.innerHTML = '';
        }
        scorescr.innerHTML = score;
    }
    function givecolor() {
        let tmp = [five,four,three,two,one,zero]
        for (col of tmp) {
            if (col.innerHTML == "W") {
                col.setAttribute("id","green")
            } else if(col.innerHTML == "A") {
                col.setAttribute("id","red")
            } else if (col.innerHTML == "S") {
                col.setAttribute("id","blue")
            } else if (col.innerHTML == "D") {
                col.setAttribute("id","yellow")
            }
        }
    }
    let inter1;
    let inter2;
    let inter3;
    function start() {
        tonext();
        givecolor();
        inter1 = setInterval(tonext,10);
        inter2 = setInterval(givecolor,10);
    }
    function answer() {
        if (event.keyCode in ntol) {
            if (ntol[event.keyCode] == zero.innerHTML & timer.innerHTML != "0") {
                zero.innerHTML = "";
                score += 5;
                good.style.display = "flex";
                setTimeout(() => {good.style.display = "none"},200)
            } else if (ntol[event.keyCode] != zero.innerHTML & timer.innerHTML != "0") {
                zero.innerHTML = "";
                score -= 3;
                bad.style.display = "flex";
                setTimeout(() => {bad.style.display = "none"},200)
            }
        }
    }
    let i = 30
    function settimer() {
        timer.innerHTML = i;
        setTimeout(() => {
            if (i > 0) {
                i--
                timer.innerHTML = i;
            } else if (i == 0) {
                cnt = 2;
            }
        },1000)    
    }
    function showresult() {
        if (timer.innerHTML == "0") {
            resultscr.innerHTML = scorescr.innerHTML
            result.style.display = "flex"
            stopinterval();
        }
    }
    function stopinterval() {
        clearInterval(inter1);
        clearInterval(inter2);
        clearInterval(inter3);
    }
    function presskey() {
        document.body.addEventListener("keydown",(event) => {
            answer();
        })
    }
    let cnt = 1;
    function gamestart() {
            if (cnt == 1) {
                start();
                settimer();
                inter3 = setInterval(settimer,1000);
                presskey();
            } 
        };
    function reset() {
        restart.addEventListener("click",(event) => {
            location.reload();
        })
    }
    function countdown() {
        document.querySelector(".startbtn").style.display = "none"
        setTimeout(() => {
            ready.style.display = "flex";
            ready.style.fontSize = "250px";
            ready.innerHTML = "3";
        },1000)
        setTimeout(() => {ready.innerHTML = "2"},2000)
        setTimeout(() => {ready.innerHTML = "1"; ready.style.color = "red"},3000)
        setTimeout(() => {ready.innerHTML = "START"; ready.style.fontSize = "100px"; ready.style.color="black"},4000)
        setTimeout(() => {
            ready.style.display = "none";
            document.querySelector(".bigarrow").style.display = "flex";
            document.querySelector(".nextscr").style.display = "flex";
            document.querySelector(".container").style.display = "flex";
        },5000)
    }
    document.querySelector(".startbtn").addEventListener("click",() => {
        countdown();
        setTimeout(gamestart,5000);
    });
    showresult();
    setInterval(showresult,10);
    reset();
})