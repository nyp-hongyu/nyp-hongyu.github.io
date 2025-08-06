// Navigator
{
    const page1 = document.querySelector("#genre-parts");
    const page2 = document.querySelector("#genre-notate");
    const page3 = document.querySelector("#genre-techs");
    const page4 = document.querySelector("#genre-exams");
    const page5 = document.querySelector("#genre-game");
    const menubtn = document.querySelector("#menubtn")
    var allpages = document.querySelectorAll(".page");

    function hideall() {
        for (let onepage of allpages) {
            onepage.style.display = "none";
        }
    }
    function show(pgno) {
        hideall();
        let onepage = document.querySelector("#page" + pgno);
        onepage.style.display = "block";
    }
    page1.addEventListener("click", function () {
        show(1);
    });
    page2.addEventListener("click", function () {
        show(2);
    });
    page3.addEventListener("click", function () {
        show(3);
    });
    page4.addEventListener("click", function () {
        show(4);
    });
    page5.addEventListener("click", function () {
        show(5);
    });
    hideall();

    const navBtn = document.querySelector("#navIcon");
    const menuItemsList = document.querySelector("nav ul");
    navBtn.addEventListener("click", toggleMenus);
    function toggleMenus() {
        menuItemsList.classList.toggle("menuShow");
        if (menuItemsList.classList.contains("menuShow")) {
            navBtn.innerHTML = "Close Menu";
        } else {
            navBtn.innerHTML = "Open Menu";
        }
    }
}

// Minigame (PAGE 5)
{
    const drum = document.querySelectorAll(".drum");
    const start = document.querySelector("#start-minigame");


    function hitDrum(index) {
        drum[index].classList.remove("drumHit");
        void drum[index].offsetWidth;
        drum[index].classList.add("drumHit");
        const audio = new Audio('audio/drum' + index + '.wav');
        audio.play();
        console.log("Hit drum " + index);
        setTimeout(function () {
            drum[index].classList.remove("drumHit");
        }, 200);
    }
    function hitCymbal(index) {
        drum[index].classList.remove("cymbalHit");
        void drum[index].offsetWidth;
        drum[index].classList.add("cymbalHit");
        const audio = new Audio('audio/drum' + index + '.wav');
        audio.play();
        console.log("Hit cymbal" + index);
        setTimeout(function () {
            drum[index].classList.remove("cymbalHit");
        }, 1500);
    }

    var gameplay = document.querySelector("#note-game-screen");
    let noLoss = true;
    let notation;
    let timer;
    let isGameActive = false;
    let score;

    start.onclick = function () { StartGame() }

    function StartGame() {
        score = 0;
        isGameActive = true;
        nextRound();
    }
    function nextRound() {
        notation = Math.floor(Math.random() * 8);
        console.log(notation);
        gameplay.style.backgroundPosition = `${notation * -160}px 0`;
        console.log("RNG done");
        clearTimeout(timer);
        timer = setTimeout(onTimeout, 3000);
    }
    for (let i = 0; i < drum.length; i++) {
        if (i >= 6) {
            drum[i].addEventListener("click", function () {
                hitCymbal(i);
                if (isGameActive == false) {
                    return;
                }
                clearTimeout(timer);
                scoreAttempt(i);
            });
        }
        else {
            drum[i].addEventListener("click", function () {
                hitDrum(i);
                if (isGameActive == false) {
                    return;
                }
                clearTimeout(timer);
                scoreAttempt(i);
            });
        }
    }
    function scoreAttempt(i) {
        if (i === notation) {
            score++;
            nextRound();
        } else {
            isGameActive = false;
        }
    }
    function onTimeout() {
        isGameActive = false;
    }
}


// Ball Game
{
    // /*find references to all the buttons and ball */
    // const leftBtn = document.querySelector("#leftBtn");
    // const rightBtn = document.querySelector("#rightBtn");
    // const upBtn = document.querySelector("#upBtn");
    // const downBtn = document.querySelector("#downBtn");
    // const resetBtn = document.querySelector("#resetBtn");
    // const ball = document.querySelector("#ball");
    // var ballX = ballY = 0; //assign initial position of ball
    // function ResetPos() {
    //     ballX = ballY = 0; //reset to zero
    //     ball.style.left = ballX + "px"; //set left property to ball x variable
    //     ball.style.top = ballY + "px"; //set top property to ball x variable
    //     ball.innerText = ballX + "," + ballY; //update ball text to show coordinate
    // }
    // function MovePos(leftInc, topInc) {
    //     var maxX = sectionNo.getBoundingClientRect().width;
    //     var maxY = sectionNo.getBoundingClientRect().height;
    //     if (ballX + leftInc >= 0 && ballY + topInc >= 0 && ballX + 100 + leftInc <= maxX && ballY + 120 + topInc <= maxY) {
    //         ballX = ballX + leftInc;
    //         ballY = ballY + topInc;
    //         if (ballX + 100 > maxX) {
    //             ballX = Math.floor(maxX);
    //         }
    //         if (ballY + 120 > maxY) {
    //             ballY = Math.floor(maxY);
    //             console.log(maxY);
    //         }
    //         if (ballX + leftInc < minX) {
    //             ballX = minX;
    //         }
    //         if (ballY + topInc < minY) {
    //             ballY = minY;
    //         }
    //     }
    //     if (ballX + 100 > maxX) {
    //         ballX = Math.floor(maxX) - 120;
    //     }
    //     if (ballY + 120 > maxY) {
    //         ballY = Math.floor(maxY) - 140;
    //     }
    //     ball.style.left = ballX + "px"; //set left css property to ball x variable
    //     ball.style.top = ballY + "px"; //set top css property to ball y variable
    //     ball.innerText = ballX + "," + ballY; //update ball text to show coordinate
    // }

    // const minX = 0;
    // const minY = 0;
    // var sectionNo = document.querySelector("#page1");
    // var maxX = sectionNo.getBoundingClientRect().width;
    // var maxY = sectionNo.getBoundingClientRect().height;

    // //eventlistener to activate MoveLeft (named callback function)
    // leftBtn.addEventListener("click", function () {
    //     MovePos(-20, 0);
    // });
    // rightBtn.addEventListener("click", function () {
    //     MovePos(20, 0);
    // });
    // upBtn.addEventListener("click", function () {
    //     MovePos(0, -20);
    // });
    // downBtn.addEventListener("click", function () {
    //     MovePos(0, 20);
    // });
    // resetBtn.addEventListener("click", ResetPos);

    // document.addEventListener('keydown', function (kbEvt) {
    //     console.log(kbEvt); //see what is returned
    //     if (kbEvt.code === "ArrowRight") {
    //         MovePos(10, 0);
    //     }
    //     if (kbEvt.code === "ArrowLeft") {
    //         MovePos(-10, 0);
    //     }
    //     if (kbEvt.code === "ArrowDown") {
    //         MovePos(0, 10);
    //     }
    //     if (kbEvt.code === "ArrowUp") {
    //         MovePos(0, -10);
    //     }
    // });

    // //define more variables and constants
    // var velX, velY; //to store x and y velocity
    // const minLeft = minTop = 0;
    // const maxTop = maxLeft = 300;
    // //function to pick random number from a min-max range
    // function RandomRange(min, max) {
    //     return Math.round(Math.random() * (max - min) + min);
    // }
    // //function to activate MoveBallUsingVelocity
    // function StartAutoMove() {
    //     velX = RandomRange(-10, 10); //pick btw -10 to 10
    //     velY = RandomRange(-10, 10); //pick btw -10 to 30
    //     //repeat calling MoveBallUsingVelocity() every 100ms
    //     setInterval(MoveBallUsingVelocity, 100);
    // }
    // StartAutoMove(); //invoke the function to activate automove

    // function MoveBallUsingVelocity() {
    //     ballX += velX; //increase ball x by velX
    //     ballY += velY; //increase ball y by velY
    //     /*check if reach min/max left/top and flip velocity*/
    //     if (ballX > maxLeft) {
    //         velX = -velX; //reverse the X velocity
    //         ballX = maxLeft; //snap ballX to maxLeft
    //     }
    //     if (ballY > maxTop) {
    //         velY = -velY;
    //         ballY = maxTop; //snap ballY to maxTop
    //     }
    //     if (ballX < minLeft) {
    //         velX = -velX;
    //         ballX = minLeft;
    //     }
    //     if (ballY < minTop) {
    //         velY = -velY;
    //         ballY = minTop;
    //     }
    //     ball.style.left = ballX + "px"; //set left property to ball x variable
    //     ball.style.top = ballY + "px"; //set top property to ball x variable
    //     ball.innerText = ballX + "," + ballY; //update ball text to show coordinate
    // }
}