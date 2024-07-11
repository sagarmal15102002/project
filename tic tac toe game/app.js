let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-game");
let newgamebtn = document.querySelector(".new-game");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turno = true; //playero ,playerx


const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,8],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame = () => {
    turno = true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turno === true) {
            box.innerText = "o";
        
            turno = false;
        } else {
            box.innerText = "x";
            turno = true;

        }
        box.disabled = true;

        checkwinner();
    });
});

const disableboxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};
const enableboxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};


const showwinner = (winner) => {
    msg.innerText = `Congratulation , Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
}

const checkwinner = () => {
    for( let pattern of winpattern){
    

        let pos1Val = boxes[pattern[0]].innerText;
        let pos1Va2 = boxes[pattern[1]].innerText;
        let pos1Va3 = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos1Va2 != "" && pos1Va3 != "") {
            if(pos1Val === pos1Va2 && pos1Va2 === pos1Va3) {
                console.log("winner" ,pos1Val);
                disableboxes();
                showwinner(pos1Val);
            }
        }
    }
};

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);