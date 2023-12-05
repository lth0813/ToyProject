window.addEventListener("DOMContentLoaded", () => {
    const image = document.querySelectorAll(".container div");
    const stage = ["one","two","three","four","five","six","seven","eight","nine"];
    const one = document.querySelector(".one");
    const two = document.querySelector(".two");
    const three = document.querySelector(".three");
    const four = document.querySelector(".four");
    const five = document.querySelector(".five");
    const six = document.querySelector(".six");
    const seven = document.querySelector(".seven");
    const eight = document.querySelector(".eight");
    const nine = document.querySelector(".nine");
    const list = ["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth"];
    const con = document.querySelector(".container");
    const addimage = document.querySelector(".printsrc")
    // 퍼즐 섞기
    function shuffle() {    
        list.sort(() => Math.random() - 0.5);
        for (let i = 0; i < list.length; i++) {
            if (addimage.innerText == "") {
                image[i].innerHTML = `<img class="${list[i]}image" src="./Static/images/dog.jpg">`
            } else {
                image[i].innerHTML = `<img class="${list[i]}image" src=${addimage.innerText}>`
            }
        }
        document.querySelector(".ninthimage").parentNode.innerHTML = "";
        // 풀 수 있는 퍼즐인지 확인하기
        const check = [...list];
        check.splice(check.indexOf("ninth"),1)
        for (let i = 0;i < check.length; i++) {
            if (check[i] == "first") {check[i] = 1}
            else if (check[i] == "second") {check[i] = 2}
            else if (check[i] == "third") {check[i] = 3}
            else if (check[i] == "fourth") {check[i] = 4}
            else if (check[i] == "fifth") {check[i] = 5}
            else if (check[i] == "sixth") {check[i] = 6}
            else if (check[i] == "seventh") {check[i] = 7}
            else if (check[i] == "eighth") {check[i] = 8}
        }
        let inversion = 0;
        for (let i = 0;i < check.length; i++) {
            for (let j = 0;j < i;j++) {
                if (check[j] > check[i]) {
                    inversion++
                }
            }
        }
        if (inversion % 2 == 1) {
            reset();
        }
    }
    function reset() {
        shuffle();
    }
    // 1번 조각
    one.addEventListener("click", () => {
        if (two.innerHTML == "") {
            two.innerHTML = one.innerHTML;
            one.innerHTML = "";
        } else if (four.innerHTML == "") {
            four.innerHTML = one.innerHTML;
            one.innerHTML = "";
        }
        victory();
    })
    // 2번 조각
    two.addEventListener("click", () => {
        if (one.innerHTML == "") {
            one.innerHTML = two.innerHTML;
            two.innerHTML = "";
        } else if (three.innerHTML == "") {
            three.innerHTML = two.innerHTML;
            two.innerHTML = "";
        } else if (five.innerHTML == "") {
            five.innerHTML = two.innerHTML;
            two.innerHTML = "";
        }
        victory();
    })
    // 3번 조각
    three.addEventListener("click", () => {
        if (two.innerHTML == "") {
            two.innerHTML = three.innerHTML;
            three.innerHTML = "";
        } else if (six.innerHTML == "") {
            six.innerHTML = three.innerHTML;
            three.innerHTML = "";
        }
        victory();
    })
    // 4번 조각
    four.addEventListener("click", () => {
        if (one.innerHTML == "") {
            one.innerHTML = four.innerHTML;
            four.innerHTML = "";
        } else if (seven.innerHTML == "") {
            seven.innerHTML = four.innerHTML;
            four.innerHTML = "";
        } else if (five.innerHTML == "") {
            five.innerHTML = four.innerHTML;
            four.innerHTML = "";
        }
        victory();
    })
    // 5번 조각
    five.addEventListener("click", () => {
        if (two.innerHTML == "") {
            two.innerHTML = five.innerHTML;
            five.innerHTML = "";
        } else if (four.innerHTML == "") {
            four.innerHTML = five.innerHTML;
            five.innerHTML = "";
        } else if (six.innerHTML == "") {
            six.innerHTML = five.innerHTML;
            five.innerHTML = "";
        } else if (eight.innerHTML == "") {
            eight.innerHTML = five.innerHTML;
            five.innerHTML = "";
        }
        victory();
    })
    // 6번 조각
    six.addEventListener("click", () => {
        if (three.innerHTML == "") {
            three.innerHTML = six.innerHTML;
            six.innerHTML = "";
        } else if (five.innerHTML == "") {
            five.innerHTML = six.innerHTML;
            six.innerHTML = "";
        } else if (nine.innerHTML == "") {
            nine.innerHTML = six.innerHTML;
            six.innerHTML = "";
        }
        victory();
    })
    // 7번 조각
    seven.addEventListener("click", () => {
        if (four.innerHTML == "") {
            four.innerHTML = seven.innerHTML;
            seven.innerHTML = "";
        } else if (eight.innerHTML == "") {
            eight.innerHTML = seven.innerHTML;
            seven.innerHTML = "";
        }
        victory();
    })
    // 8번 조각
    eight.addEventListener("click", () => {
        if (five.innerHTML == "") {
            five.innerHTML = eight.innerHTML;
            eight.innerHTML = "";
        } else if (seven.innerHTML == "") {
            seven.innerHTML = eight.innerHTML;
            eight.innerHTML = "";
        } else if (nine.innerHTML == "") {
            nine.innerHTML = eight.innerHTML;
            eight.innerHTML = "";
        }
        victory();
    })
    // 9번 조각
    nine.addEventListener("click", () => {
        if (six.innerHTML == "") {
            six.innerHTML = nine.innerHTML;
            nine.innerHTML = "";
        } else if (eight.innerHTML == "") {
            eight.innerHTML = nine.innerHTML;
            nine.innerHTML = "";
        }
        victory();
    })
    // 승리 조건
    function victory() {
        if (
            one.innerHTML != "" &
            two.innerHTML != "" &
            three.innerHTML != "" &
            four.innerHTML != "" &
            five.innerHTML != "" &
            six.innerHTML != "" &
            seven.innerHTML != "" &
            eight.innerHTML != ""
        ) { if (
                one.querySelector("img").className == "firstimage" &
                two.querySelector("img").className == "secondimage" &
                three.querySelector("img").className == "thirdimage" &
                four.querySelector("img").className == "fourthimage" &
                five.querySelector("img").className == "fifthimage" &
                six.querySelector("img").className == "sixthimage" &
                seven.querySelector("img").className == "seventhimage" &
                eight.querySelector("img").className == "eighthimage"
            ) {
                nine.appendChild(document.createElement("img")),
                document.querySelector(".nine img").setAttribute("class","ninthimage")
                if (addimage.innerText == "") {
                    document.querySelector(".nine img").setAttribute("src","./Static/images/dog.jpg")
                } else {
                    document.querySelector(".nine img").setAttribute("src",`${addimage.innerText}`)
                }
                for (div of document.querySelectorAll(".container div")) {div.style.border = "none";}
                con.style.opacity = 0;
                con.style.transitionDuration = '0.5s';
                setTimeout(() =>{
                    con.style.opacity = 1;
                con.style.transitionDuration = '0.5s';
                },500)
                clearInterval(etime);
                setTimeout(() =>{
                    document.querySelector(".reset").style.display = "flex";
                    document.querySelector(".reset").style.transitionDuration = '0.5s';
                },2000)
                
            }
        }
    }
    let etime;
    let time = 0
    // 타이머
    function timer() {
        document.querySelector(".time").innerHTML = time;
        time++
    }
    // 힌트 보기
    function hint() {
        document.querySelector(".hintbtn").addEventListener("click",() => {
            if (document.querySelector(".showhint").innerHTML == "") {
                document.querySelector(".showhint").appendChild(document.createElement("img"))
                if (addimage.innerText == "") {
                    document.querySelector(".showhint img").setAttribute("src","./Static/images/dog.jpg")
                } else {
                    document.querySelector(".showhint img").setAttribute("src",`${addimage.innerText}`)
                }
                document.querySelector(".showhint").style.display = "flex";
            } else {
                document.querySelector(".showhint").innerHTML = "";
                document.querySelector(".showhint").style.display = "none";
            }
        })
    }
    // 게임 시작
    document.querySelector(".start").addEventListener("click",() => {
        for (div of document.querySelectorAll(".container div")) {div.style.display = "flex";}
        document.querySelector(".start").style.display = "none";
        shuffle();
        hint();
        timer();
        etime = setInterval(timer,1000)
    })
    // 재시작
    document.querySelector(".reset").addEventListener("click",() => {location.href = "ToyProject4.html"})
})
// 주소 가져오기
function getsrc() {
    const name = document.querySelector(".name").value;
    document.querySelector(".printsrc").innerText = name;
}