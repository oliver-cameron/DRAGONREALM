// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal

// Get the <span> element that closes the modal
var hpb = document.getElementById("healthBar");
var aub = document.getElementById("goldBar");
var span = document.getElementsByClassName("close")[0];
let keydown = [];
var hp = 50;
var au = 0;
var set = "null"
let times = [];
var angels = 0;
var pickaxe = 0;
var guessCount = 0;
document.addEventListener('keydown', function (event) {
    keydown = event.key;
    console.log(keydown);
    if (keydown == "s") {
        modal.style.display = "block";
    }
    if (keydown == "b") {
        modal.style.display = "none";
    }
    if (keydown == "Enter"){
        play()
    }
    if (keydown == "t"){
        console.table(times);
    
    }
    if (keydown == "ArrowLeft"){
        play(1);
    }
    if (keydown == "ArrowRight"){
        play(2);
    }
    if (keydown == "˘"){
        keydown = [];
        hp = 50;
        au = 0;
        set = "null"
        times = [];
        angels = 0;
        pickaxe = 0;
        guessCount = 0;
    }
});

function play(guess) {
    if (set == "null"){
        if (guessCount == 0){
            secret = Math.floor(Math.random() * 2) + 1;
            guessCount = 1;
        }
        
        console.log()
        if (guess != 1 && guess != 2) {
            document.getElementById("msg_gold").style.display = "none";
            document.getElementById("msg_die").style.display = "none";
            document.getElementById("msg_error").style.display = "block";
        } else if (guess == secret) {
            document.getElementById("msg_gold").style.display = "block";
            document.getElementById("msg_die").style.display = "none";
            document.getElementById("msg_error").style.display = "none";
            timesAdd(1000,"msg_gold_delete");
            au += getRandomInt(1, 6);
        } else {
            document.getElementById("msg_gold").style.display = "none";
            document.getElementById("msg_die").style.display = "block";
            document.getElementById("msg_error").style.display = "none";
            timesAdd(1000,"msg_die_delete");
            hp -= getRandomInt(1, 6);
        }
       
    
        secret = Math.floor(Math.random() * 2) + 1;
        if (angels !== 0){
            console.log ("Choose "+ secret);
            angels --;
        } 
    }
    
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function product(num) {
    if (set == "null"){
        if (num == 1 ) {
            if (au >= 2){
                    au -= 2;
                    hp += 1;
                } else {
                    document.getElementById("msg_tooExpensive").style.display = "block";
                    timesAdd(1000,"msg_tooExpensive_delete");
                } 
        }
        if (num == 2) {
            if(au >= 3){
                au -= 3;
                hp += 2;
            } else {
                document.getElementById("msg_tooExpensive").style.display = "block";
                timesAdd(1000,"msg_tooExpensive_delete");
            }   
        }
        if (num == 3) {
            if(au >= 5)
            {   au -= 5;
                times = times.concat([
                { instance: Date.now() + 1000, instruction: "hpAdd1" },
                { instance: Date.now() + 3000, instruction: "hpAdd1" },
                { instance: Date.now() + 5000, instruction: "hpAdd1" },
                { instance: Date.now() + 7000, instruction: "hpAdd1" },
                { instance: Date.now() + 9000, instruction: "hpAdd1" },
                { instance: Date.now() + 11000, instruction: "hpAdd1" },
                { instance: Date.now() + 13000, instruction: "hpAdd1" },
                { instance: Date.now() + 15000, instruction: "hpAdd1" },
                { instance: Date.now() + 17000, instruction: "hpAdd1" },
                { instance: Date.now() + 19000, instruction: "hpAdd1" },
                { instance: Date.now() + 21000, instruction: "hpAdd1" },
                ]);} else{
                    document.getElementById("msg_tooExpensive").style.display = "block";
                    timesAdd(1000,"msg_tooExpensive_delete");
                }
            
        }
        if (num == 4){
            if(au >= 30){
                au -= 30;
                times = times.concat([
                { instance: Date.now() + 1000, instruction: "hpAdd2" },
                { instance: Date.now() + 2000, instruction: "hpAdd2" },
                { instance: Date.now() + 3000, instruction: "hpAdd2" },
                { instance: Date.now() + 4000, instruction: "hpAdd2" },
                { instance: Date.now() + 5000, instruction: "hpAdd2" },
                { instance: Date.now() + 6000, instruction: "hpAdd2" },
                { instance: Date.now() + 7000, instruction: "hpAdd2" },
                { instance: Date.now() + 8000, instruction: "hpAdd2" },
                { instance: Date.now() + 9000, instruction: "hpAdd2" },
                { instance: Date.now() + 10000, instruction: "hpAdd2" },
                { instance: Date.now() + 11000, instruction: "hpAdd2" },
                { instance: Date.now() + 12000, instruction: "hpAdd2" },
                { instance: Date.now() + 13000, instruction: "hpAdd2" },
                { instance: Date.now() + 14000, instruction: "hpAdd2" },
                { instance: Date.now() + 15000, instruction: "hpAdd2" },
                { instance: Date.now() + 16000, instruction: "hpAdd2" },
                { instance: Date.now() + 17000, instruction: "hpAdd2" },
                { instance: Date.now() + 18000, instruction: "hpAdd2" },
                { instance: Date.now() + 19000, instruction: "hpAdd2" },
                { instance: Date.now() + 20000, instruction: "hpAdd2" },
                { instance: Date.now() + 21000, instruction: "hpAdd2" },
                { instance: Date.now() + 1000, instruction: "auAdd2" },
                { instance: Date.now() + 2000, instruction: "auAdd2" },
                { instance: Date.now() + 3000, instruction: "auAdd2" },
                { instance: Date.now() + 4000, instruction: "auAdd2" },
                { instance: Date.now() + 5000, instruction: "auAdd2" },
                { instance: Date.now() + 6000, instruction: "auAdd2" },
                { instance: Date.now() + 7000, instruction: "auAdd2" },
                { instance: Date.now() + 8000, instruction: "auAdd2" },
                { instance: Date.now() + 9000, instruction: "auAdd2" },
                { instance: Date.now() + 10000, instruction: "auAdd2" },
                { instance: Date.now() + 11000, instruction: "auAdd2" }, 
                { instance: Date.now() + 12000, instruction: "auAdd2" },
                { instance: Date.now() + 13000, instruction: "auAdd2" },
                { instance: Date.now() + 14000, instruction: "auAdd2" },
                { instance: Date.now() + 15000, instruction: "auAdd2" },
                { instance: Date.now() + 16000, instruction: "auAdd2" },
                { instance: Date.now() + 17000, instruction: "auAdd2" },
                { instance: Date.now() + 18000, instruction: "auAdd2" },
                { instance: Date.now() + 19000, instruction: "auAdd2" },
                { instance: Date.now() + 20000, instruction: "auAdd2" },
                { instance: Date.now() + 21000, instruction: "auAdd2" },
                ]);
            } else{
                document.getElementById("msg_tooExpensive").style.display = "block";
                timesAdd(1000,"msg_tooExpensive_delete");
            }
            
        } if (num == 5){
            if (au >= 15){
                if (angels == 0){
                    angels = 5
                    au -= 15;
                } else {
                    console.log("You already have an angel.")
                }
            } else {
                document.getElementById("msg_tooExpensive").style.display = "block";
                timesAdd(1000,"msg_tooExpensive_delete");
            }
            
        } if (num == 6){
            if(au >= 5){
                au -= 5;
            pickaxe = 1000000;
            } else{
                document.getElementById("msg_tooExpensive").style.display = "block";
                timesAdd(1000,"msg_tooExpensive_delete");
            }  
        }
    }
}
function timesAdd(mili,instruct){
    times = times.concat([{ instance: Date.now() + mili, instruction: instruct },]);
}

setInterval(function () {
    hpb.style.width = (hp)*2 + "%";
    hpb.innerHTML = hp;
    aub.style.width = (au)*2 + "%";
    aub.innerHTML = au;
    if (au > 50){
        au = 50;
    }
    if (hp > 50){
        hp = 50;
    }
    if(hp < 0){
        hp = 0;
    }
    if(au < 0){
        au = 0;
    }
    if (hp <= 0 && set == "null") {
        set = "lose";
        document.getElementById("msg_lose").style.display = "block";
        timesAdd(1000,"msg_lose_delete");
    } else if (au >= 50 && set == "null") {
        set = "win";
        document.getElementById("msg_win").style.display = "block";
        timesAdd(1000,"msg_win_delete")
    }
    if (set == "null"){
        if (pickaxe !== 0){
            if (hp <= 0 && set !== "win") {
                set = "lose"
                document.getElementById("msg_lose").style.display = "block";
            } else if (au >= 50 && set !== "lose") {
                set = "win"
                document.getElementById("msg_win").style.display = "block";
                console.log("YOU WON");
            }
            if (getRandomInt(1,100001) = 1){
                if (getRandomInt(1,11)== 1){
                    au = 50;
                } else {
                    au++;
                    console.log("You struck it rich!");
                }
            }
            pickaxe --;
        }
    }
    for (var i = 0; i < times.length; i++) {
        if (Date.now() >= times[i].instance) {
            if (times[i].instruction == "hpAdd1") {
                hp += 1;
            } else if (times[i].instruction == "hpAdd2") {
                hp += 2;
            } else if (times[i].instruction == "auAdd2"){
                au += 2;
            } else if (times[i].instruction == "msg_die_delete"){
                document.getElementById("msg_die").style.display = "none";
            } else if (times[i].instruction == "msg_tooExpensive_delete"){
                document.getElementById("msg_tooExpensive").style.display = "none";
            } else if (times[i].instruction == "msg_gold_delete"){
                document.getElementById("msg_gold").style.display = "none";
            }  else if (times[i].instruction == "msg_lose_delete"){
                document.getElementById("msg_lose").style.display = "none";
            } else if (times[i].instruction == "msg_win_delete"){
                document.getElementById("msg_win").style.display = "none";
            } 
            times.splice(i, 1);
            
        }
    }
    

}, 1);





// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
