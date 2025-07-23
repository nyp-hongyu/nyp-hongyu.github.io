
// CLEAN UP ALL THIS CODE TO FIT MY STYLE!!!
{ // CLEAN UP ALL THIS CODE TO FIT MY STYLE!!!
    // CLEAN UP ALL THIS CODE TO FIT MY STYLE!!! 
    // CLEAN UP ALL THIS CODE TO FIT MY STYLE!!! 

    //target all elements to save to constants
    const page5 = document.querySelector("#genre-pa");
    const page1 = document.querySelector("#genre-parts");
    const page2 = document.querySelector("#genre-notate");
    const page3 = document.querySelector("#genre-techs");
    const page4 = document.querySelector("#genre-exams");
    const menubtn = document.querySelector("#menubtn")
    var allpages = document.querySelectorAll(".page");
    //select all subtopic pages
    function hideall() { //function to hide all pages
        for (let onepage of allpages) { //go through all subtopic pages
            onepage.style.display = "none"; //hide it
        }
    }
    function show(pgno) { //function to show selected page no
        hideall();
        //select the page based on the parameter passed in
        let onepage = document.querySelector("#page" + pgno);
        onepage.style.display = "block"; //show the page
    }
    /*Listen for clicks on the buttons, assign anonymous
    eventhandler functions to call show function*/
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

    /*JS for hamMenu */
    const hamBtn = document.querySelector("#hamIcon");
    const menuItemsList = document.querySelector("nav ul");
    hamBtn.addEventListener("click", toggleMenus);
    function toggleMenus() { /*open and close menu*/
        //if menuItemsList dont have the class "menuShow", add it, else remove it
        menuItemsList.classList.toggle("menuShow");
        //if menu is showing (has the class “menuShow”)
        if (menuItemsList.classList.contains("menuShow")) {
            hamBtn.innerHTML = "Close Menu"; //change button text to chose menu
        } else { //if menu NOT showing
            hamBtn.innerHTML = "Open Menu"; //change button text open menu
        }
    }


    /*find references to all the buttons and ball */
    const leftBtn = document.querySelector("#leftBtn");
    const rightBtn = document.querySelector("#rightBtn");
    const upBtn = document.querySelector("#upBtn");
    const downBtn = document.querySelector("#downBtn");
    const resetBtn = document.querySelector("#resetBtn");
    const ball = document.querySelector("#ball");
    var ballX = ballY = 0; //assign initial position of ball
    function ResetPos() {
        ballX = ballY = 0; //reset to zero
        ball.style.left = ballX + "px"; //set left property to ball x variable
        ball.style.top = ballY + "px"; //set top property to ball x variable
        ball.innerText = ballX + "," + ballY; //update ball text to show coordinate
    }
    function MovePos(leftInc, topInc) {
        var maxX = sectionNo.getBoundingClientRect().width;
        var maxY = sectionNo.getBoundingClientRect().height;
        if (ballX + leftInc >= 0 && ballY + topInc >= 0 && ballX + 100 + leftInc <= maxX && ballY + 120 + topInc <= maxY) {
            ballX = ballX + leftInc;
            ballY = ballY + topInc;
            if (ballX + 100 > maxX) {
                ballX = Math.floor(maxX);
            }
            if (ballY + 120 > maxY) {
                ballY = Math.floor(maxY);
                console.log(maxY);
            }
            if (ballX + leftInc < minX) {
                ballX = minX;
            }
            if (ballY + topInc < minY) {
                ballY = minY;
            }
        }
        if (ballX + 100 > maxX) {
            ballX = Math.floor(maxX) - 120;
        }
        if (ballY + 120 > maxY) {
            ballY = Math.floor(maxY) - 140;
        }
        ball.style.left = ballX + "px"; //set left css property to ball x variable
        ball.style.top = ballY + "px"; //set top css property to ball y variable
        ball.innerText = ballX + "," + ballY; //update ball text to show coordinate
    }

    const minX = 0;
    const minY = 0;
    var sectionNo = document.querySelector("#page1");
    var maxX = sectionNo.getBoundingClientRect().width;
    var maxY = sectionNo.getBoundingClientRect().height;

    //eventlistener to activate MoveLeft (named callback function)
    leftBtn.addEventListener("click", function () {
        MovePos(-20, 0);
    });
    rightBtn.addEventListener("click", function () {
        MovePos(20, 0);
    });
    upBtn.addEventListener("click", function () {
        MovePos(0, -20);
    });
    downBtn.addEventListener("click", function () {
        MovePos(0, 20);
    });
    resetBtn.addEventListener("click", ResetPos);

    document.addEventListener('keydown', function (kbEvt) {
        console.log(kbEvt); //see what is returned
        if (kbEvt.code === "ArrowRight") {
            MovePos(10, 0);
        }
        if (kbEvt.code === "ArrowLeft") {
            MovePos(-10, 0);
        }
        if (kbEvt.code === "ArrowDown") {
            MovePos(0, 10);
        }
        if (kbEvt.code === "ArrowUp") {
            MovePos(0, -10);
        }
    });

    //define more variables and constants
    var velX, velY; //to store x and y velocity
    const minLeft = minTop = 0;
    const maxTop = maxLeft = 300;
    //function to pick random number from a min-max range
    function RandomRange(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    //function to activate MoveBallUsingVelocity
    function StartAutoMove() {
        velX = RandomRange(-10, 10); //pick btw -10 to 10
        velY = RandomRange(-10, 10); //pick btw -10 to 30
        //repeat calling MoveBallUsingVelocity() every 100ms
        setInterval(MoveBallUsingVelocity, 100);
    }
    StartAutoMove(); //invoke the function to activate automove

    function MoveBallUsingVelocity() {
        ballX += velX; //increase ball x by velX
        ballY += velY; //increase ball y by velY
        /*check if reach min/max left/top and flip velocity*/
        if (ballX > maxLeft) {
            velX = -velX; //reverse the X velocity
            ballX = maxLeft; //snap ballX to maxLeft
        }
        if (ballY > maxTop) {
            velY = -velY;
            ballY = maxTop; //snap ballY to maxTop
        }
        if (ballX < minLeft) {
            velX = -velX;
            ballX = minLeft;
        }
        if (ballY < minTop) {
            velY = -velY;
            ballY = minTop;
        }
        ball.style.left = ballX + "px"; //set left property to ball x variable
        ball.style.top = ballY + "px"; //set top property to ball x variable
        ball.innerText = ballX + "," + ballY; //update ball text to show coordinate
    }

}

const drum = document.querySelectorAll(".drum");

for (let i = 0; i < drum.length; i++) {
    document.addEventListener("click", function () {
        drum[i].classList.add("drumHit");
        console.log("Hit drum" + i);
        setTimeout(function () {
            drum[i].classList.remove("drumHit");
        }, 500);
    });
}