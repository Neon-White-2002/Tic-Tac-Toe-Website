// JAVA-SCRIPT:
const turn_sound = new Audio("ting.mp3");
const game_over_sound = new Audio("small-applause.mp3");
const game_over_sound_no = new Audio("uh-oh.mp3");

let current_player = "X";
let game_over = false;

function change_player()
{
    return current_player === "X" ? "0" : "X";
}

function check_winner()
{
    const boxs = document.querySelectorAll(".box");
    
    // TO CHECK - ROWS:
    if((boxs[0].innerHTML !== "") && (boxs[0].innerHTML === boxs[1].innerHTML) && (boxs[1].innerHTML === boxs[2].innerHTML))
    {
        if(boxs[0].innerHTML === "X")
        {
            document.getElementById("x-player").innerHTML = `<i class='bx bx-play'></i> WINNER is, 'X'`;
            document.getElementById("x-player").style.color = "#000";
            document.getElementById("o-player").style.color = "#CCC";
            game_over = true;
            game_over_sound.play();
            document.getElementById("win_moment").style.display = "flex";

            boxs.forEach(element =>
            {
                element.classList.add("disable");
            });
        }
        else if(boxs[0].innerHTML === "0")
        {
            document.getElementById("o-player").innerHTML = `<i class='bx bx-play'></i> WINNER is, '0'`;
            document.getElementById("o-player").style.color = "#000";
            document.getElementById("x-player").style.color = "#CCC";
            game_over = true;
            game_over_sound.play();
            document.getElementById("win_moment").style.display = "flex";

            boxs.forEach(element =>
            {
                element.classList.add("disable");
            });
        }
    }
    else
    {
        check_tie();
    }

    if((boxs[3].innerHTML !== "") && (boxs[3].innerHTML === boxs[4].innerHTML) && (boxs[4].innerHTML === boxs[5].innerHTML))
    {
        if(boxs[3].innerHTML === "X")
        {
            document.getElementById("x-player").innerHTML = `<i class='bx bx-play'></i> WINNER is, 'X'`;
            document.getElementById("x-player").style.color = "#000";
            document.getElementById("o-player").style.color = "#CCC";
            game_over = true;
            game_over_sound.play();
            document.getElementById("win_moment").style.display = "flex";

            boxs.forEach(element =>
            {
                element.classList.add("disable");
            });
        }
        else if(boxs[3].innerHTML === "0")
        {
            document.getElementById("o-player").innerHTML = `<i class='bx bx-play'></i> WINNER is, '0'`;
            document.getElementById("o-player").style.color = "#000";
            document.getElementById("x-player").style.color = "#CCC";
            game_over = true;
            game_over_sound.play();
            document.getElementById("win_moment").style.display = "flex";

            boxs.forEach(element =>
            {
                element.classList.add("disable");
            });
        }
    }
    else
    {
        check_tie();
    }

    if((boxs[6].innerHTML !== "") && (boxs[6].innerHTML === boxs[7].innerHTML) && (boxs[7].innerHTML === boxs[8].innerHTML))
    {
        if(boxs[6].innerHTML === "X")
        {
            document.getElementById("x-player").innerHTML = `<i class='bx bx-play'></i> WINNER is, 'X'`;
            document.getElementById("x-player").style.color = "#000";
            document.getElementById("o-player").style.color = "#CCC";
            game_over = true;
            game_over_sound.play();
            document.getElementById("win_moment").style.display = "flex";

            boxs.forEach(element =>
            {
                element.classList.add("disable");
            });
        }
        else if(boxs[6].innerHTML === "0")
        {
            document.getElementById("o-player").innerHTML = `<i class='bx bx-play'></i> WINNER is, '0'`;
            document.getElementById("o-player").style.color = "#000";
            document.getElementById("x-player").style.color = "#CCC";
            game_over = true;
            game_over_sound.play();
            document.getElementById("win_moment").style.display = "flex";

            boxs.forEach(element =>
            {
                element.classList.add("disable");
            });
        }
    }
    else
    {
        check_tie();
    }

    // TO CHECK - COLUMNS:
    if((boxs[0].innerHTML !== "") && (boxs[0].innerHTML === boxs[3].innerHTML) && (boxs[3].innerHTML === boxs[6].innerHTML))
    {
        if(boxs[0].innerHTML === "X")
        {
            document.getElementById("x-player").innerHTML = `<i class='bx bx-play'></i> WINNER is, 'X'`;
            document.getElementById("x-player").style.color = "#000";
            document.getElementById("o-player").style.color = "#CCC";
            game_over_sound.play();
            document.getElementById("win_moment").style.display = "flex";

            boxs.forEach(element =>
            {
                element.classList.add("disable");
            });
        }
        else if(boxs[0].innerHTML === "0")
        {
            document.getElementById("o-player").innerHTML = `<i class='bx bx-play'></i> WINNER is, '0'`;
            document.getElementById("o-player").style.color = "#000";
            document.getElementById("x-player").style.color = "#CCC";
            game_over = true;
            game_over_sound.play();
            document.getElementById("win_moment").style.display = "flex";

            boxs.forEach(element =>
            {
                element.classList.add("disable");
            });
        }
    }
    else
    {
        check_tie();
    }

    if((boxs[1].innerHTML !== "") && (boxs[1].innerHTML === boxs[4].innerHTML) && (boxs[4].innerHTML === boxs[7].innerHTML))
    {
        if(boxs[1].innerHTML === "X")
        {
            document.getElementById("x-player").innerHTML = `<i class='bx bx-play'></i> WINNER is, 'X'`;
            document.getElementById("x-player").style.color = "#000";
            document.getElementById("o-player").style.color = "#CCC";
            game_over = true;
            game_over_sound.play();
            document.getElementById("win_moment").style.display = "flex";

            boxs.forEach(element =>
            {
                element.classList.add("disable");
            });
        }
        else if(boxs[1].innerHTML === "0")
        {
            document.getElementById("o-player").innerHTML = `<i class='bx bx-play'></i> WINNER is, '0'`;
            document.getElementById("o-player").style.color = "#000";
            document.getElementById("x-player").style.color = "#CCC";
            game_over = true;
            game_over_sound.play();
            document.getElementById("win_moment").style.display = "flex";

            boxs.forEach(element =>
            {
                element.classList.add("disable");
            });
        }
    }
    else
    {
        check_tie();
    }

    if((boxs[2].innerHTML !== "") && (boxs[2].innerHTML === boxs[5].innerHTML) && (boxs[5].innerHTML === boxs[8].innerHTML))
    {
        if(boxs[2].innerHTML === "X")
        {
            document.getElementById("x-player").innerHTML = `<i class='bx bx-play'></i> WINNER is, 'X'`;
            document.getElementById("x-player").style.color = "#000";
            document.getElementById("o-player").style.color = "#CCC";
            game_over = true;
            game_over_sound.play();
            document.getElementById("win_moment").style.display = "flex";

            boxs.forEach(element =>
            {
                element.classList.add("disable");
            });
        }
        else if(boxs[2].innerHTML === "0")
        {
            document.getElementById("o-player").innerHTML = `<i class='bx bx-play'></i> WINNER is, '0'`;
            document.getElementById("o-player").style.color = "#000";
            document.getElementById("x-player").style.color = "#CCC";
            game_over = true;
            game_over_sound.play();
            document.getElementById("win_moment").style.display = "flex";

            boxs.forEach(element =>
            {
                element.classList.add("disable");
            });
        }
    }
    else
    {
        check_tie();
    }

    // TO CHECK - DIAGONALS:
    if((boxs[0].innerHTML !== "") && (boxs[0].innerHTML === boxs[4].innerHTML) && (boxs[4].innerHTML === boxs[8].innerHTML))
    {
        if(boxs[0].innerHTML === "X")
        {
            document.getElementById("x-player").innerHTML = `<i class='bx bx-play'></i> WINNER is, 'X'`;
            document.getElementById("x-player").style.color = "#000";
            document.getElementById("o-player").style.color = "#CCC";
            game_over = true;
            game_over_sound.play();
            document.getElementById("win_moment").style.display = "flex";

            boxs.forEach(element =>
            {
                element.classList.add("disable");
            });
        }
        else if(boxs[0].innerHTML === "0")
        {
            document.getElementById("o-player").innerHTML = `<i class='bx bx-play'></i> WINNER is, '0'`;
            document.getElementById("o-player").style.color = "#000";
            document.getElementById("x-player").style.color = "#CCC";
            game_over = true;
            game_over_sound.play();
            document.getElementById("win_moment").style.display = "flex";

            boxs.forEach(element =>
            {
                element.classList.add("disable");
            });
        }
    }
    else
    {
        check_tie();
    }

    if((boxs[2].innerHTML !== "") && (boxs[2].innerHTML === boxs[4].innerHTML) && (boxs[4].innerHTML === boxs[6].innerHTML))
    {
        if(boxs[2].innerHTML === "X")
        {
            document.getElementById("x-player").innerHTML = `<i class='bx bx-play'></i> WINNER is, 'X'`;
            document.getElementById("x-player").style.color = "#000";
            document.getElementById("o-player").style.color = "#CCC";
            game_over = true;
            game_over_sound.play();
            document.getElementById("win_moment").style.display = "flex";

            boxs.forEach(element =>
            {
                element.classList.add("disable");
            });
        }
        else if(boxs[2].innerHTML === "0")
        {
            document.getElementById("o-player").innerHTML = `<i class='bx bx-play'></i> WINNER is, '0'`;
            document.getElementById("o-player").style.color = "#000";
            document.getElementById("x-player").style.color = "#CCC";
            game_over = true;
            game_over_sound.play();
            document.getElementById("win_moment").style.display = "flex";

            boxs.forEach(element =>
            {
                element.classList.add("disable");
            });
        }
    }
    else
    {
        check_tie();
    }
}

function check_tie()
{
    let empty_cell = 0;

    for(let i = 0; i < boxs.length; i++)
    {
        if(boxs[i].innerHTML === "")
        {
            empty_cell++;
            console.log("Continue, Match...!");
        }
    }

    if(empty_cell == 0)
    {
        document.getElementById("x-player").innerHTML = `<i class='bx bx-play'></i> Match is, 'TIE'`;
        document.getElementById("x-player").style.color = "#000";
        document.getElementById("o-player").style.color = "#CCC";
        document.getElementById("o-player").innerHTML = `Turn of, '0'`;
        boxs.forEach(element =>
        {
            element.classList.add("disable");
        });
        game_over_sound_no.play();
    }
    else
    {
        console.log("Continue, Match...!");
    }
}

const boxs = document.querySelectorAll(".box");
boxs.forEach(element =>
{
    element.addEventListener("click", () =>
    {
        if(element.innerHTML == "")
        {
            element.innerHTML = current_player;
            turn_sound.play();

            current_player = change_player();

            if(current_player == "X" && game_over == false)
            {
                document.getElementById("x-player").innerHTML = `<i class='bx bx-play'></i> Turn of, 'X'`;
                document.getElementById("x-player").style.color = "#000";
                document.getElementById("o-player").style.color = "#CCC";
                document.getElementById("o-player").innerHTML = `Turn of, '0'`;
            }
            else
            {
                document.getElementById("o-player").innerHTML = `<i class='bx bx-play'></i> Turn of, '0'`;
                document.getElementById("o-player").style.color = "#000";
                document.getElementById("x-player").style.color = "#CCC";
                document.getElementById("x-player").innerHTML = `Turn of, 'X'`;
            }

            check_winner();
        }
    });
});

const reset_button = document.getElementById("reset-button");
reset_button.addEventListener("click", () =>
{
    const box = document.querySelectorAll(".box");
    box.forEach(element =>
    {
        element.innerHTML = "";
        element.classList.remove("disable");
        current_player = "X";
        game_over = false;

        if(current_player == "X")
        {
            document.getElementById("x-player").innerHTML = `<i class='bx bx-play'></i> Turn of, 'X'`;
            document.getElementById("x-player").style.color = "#000";
            document.getElementById("o-player").style.color = "#CCC";
            document.getElementById("o-player").innerHTML = `Turn of, '0'`;
        }
        else if(current_player == "0")
        {
            document.getElementById("o-player").innerHTML = `<i class='bx bx-play'></i> Turn of, '0'`;
            document.getElementById("o-player").style.color = "#000";
            document.getElementById("x-player").style.color = "#CCC";
            document.getElementById("x-player").innerHTML = `Turn of, 'X'`;
        }

        document.getElementById("win_moment").style.display = "none";
    });
});