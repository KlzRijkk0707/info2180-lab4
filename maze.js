// JavaScript source code

    /*-------------------SECTION FOR FUNCTIONS---------------------------------------------------------------------------------------------------------------------------------------*/

function begin(x) {
    x.textContent = "Game Start";
}

function reg(x) {                                                               //function to reset the status
    x.textContent = "Move your mouse over the \"S\" to begin.";
}
function end(x) {
    x.textContent = "You Lose";
}

function win(x) {                                                               //function to show the user they won
    x.textContent = "You Win";
}

function lose(thing) {
    thing.classList.add("youlose");                                             //function to add the "youlose" class to an element
}

function redWall(w) {                                                           //function to colour the touched boundary red by calling a previously defined function
    if (w.length > 1) {
        for (i = 0; i < w.length - 1; i++) {
            lose(w[i]);
        }
    } else {
        lose(w);
    }
}

function whiteWall(w) {                                                         //function to reset the game
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
    var rMaze = document.getElementById("maze"); 
    var trigger = 0;                                                            // trigger to check if the player touched any boundaries and still went to the end 
    var count = 0;                                                              // counter to ensure the player is not cheating
    var rBounds = document.querySelectorAll(".boundary");
    var rStatus = document.getElementById("status");

    /* End Variable Declarations */


    /* Add Event Listeners */

    rStart.onmouseover = function () {                                          //event listener to start the game 
        if (count == 1) {                                                       //checks the variable count to ensure that the player does not cheat the game by exiting the maze
            redWall(rBounds);
            end(rStatus);
        } else {
            count = count + 1; 
            console.log(count);
            begin(rStatus);
        };
    };
    
    rStart.onclick = function () {                                              // event listener to reset game
        whiteWall(rBounds);
        count = 0; 
        trigger = 0;
        begin(rStatus);
    };
    
    for (var i = 0; i < rBounds.length; i++) {                                  //loop to add event an listener to all the boundary classes
        rBounds[i].onmouseover = function () {
            redWall(this);
            trigger += 1;
            console.log("you Lose");
            end(rStatus);

        };
    }

    rMaze.onmouseleave = function () {                                          // event listener to check if the player tried to cheat after the game has been reset
        trigger += 1;
    };

    rEnd.onmouseover = function () {                                            //event listener to check if the player won the game or attempted to cheat the game on the first try
      
        if (trigger > 0) {                                                      // check to see if any of the walls were touched
            redWall(rBounds);
            console.log("you Lose");
            end(rStatus);
        } else {
            console.log("You Win");
            win(rStatus);
        }
    };

        /*End Event Listeners*/
};