// JavaScript source code




    /*-------------------SECTION FOR FUNCTIONS---------------------------------------------------------------------------------------------------------------------------------------*/

function begin(x) {
    x.textContent = "Game Start";
}

function reg(x) {
    x.textContent = "Move your mouse over the \"S\" to begin.";
}
function end(x) {
    x.textContent = "You Lose";
}

function win(x) {
    x.textContent = "You Win";
}

function redWall(w) {
    if (w.length > 1) {
        for (i = 0; i < w.length - 1; i++) {
            lose(w[i]);
        }
    } else {
        lose(w);
    }
}

function lose(thing) {
    thing.classList.add("youlose");    
}

function whiteWall(w) {
    if (w.length > 1) {
        for (i = 0; i < w.length - 1; i++) {
            w[i].classList.remove("youlose");
        }
    } else {
        w.classList.remove("youlose");
    }
}
        

/*-------------------------FUNCTIONS END--------------------------------------------------------------------------------------------------------------------------*/


window.onload = function () {

    /* Variable Declarations */
    var rStart = document.getElementById("start");
    var rEnd = document.getElementById("end");
    var rBoun1 = document.getElementById("boundary1");
    var trigger = 0;
    var count = 0;
    var rBounds = document.querySelectorAll(".boundary");
    
    console.log(rBounds);

    var rStatus = document.getElementById("status");

    /* End Variable Declarations */



    /* Add Event Listeners */

    rStart.onmouseover = function () {
        if (count == 1) {
            redWall(rBounds);
            end(rStatus);
        } else {
            count = count + 1;
            console.log(count);
            begin(rStatus);
        };
    };

    rStart.onclick = function () {
        whiteWall(rBounds);
        count = 0;
        trigger = 0;
        reg(rStatus);
    };

/*    rBoun1.onmouseover = function () {
        redWall(this);
        trigger += 1;
        console.log("you Lose");
        end(rStatus);
    };

  */    
    for (var i = 0; i < rBounds.length; i++) {
        rBounds[i].onmouseover = function () {
            redWall(this);
            trigger += 1;
            console.log("you Lose");
            end(rStatus);
           
        };        
    }

    rEnd.onmouseover = function () {
        if (trigger > 0) {
            console.log("you Lose");
            end(rStatus);
            alert("you Lose");
        } else {
            console.log("You Win");
            win(rStatus);
            alert("You Win");
        }
    };

        /*End Event Listeners*/

};