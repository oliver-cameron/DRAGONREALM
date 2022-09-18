// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal

// Get the <span> element that closes the modal
var apart = ((Number(document.getElementById("inventory_backround").offsetWidth) - 360)/7);
document.getElementById("m1_square").style.left = (((apart*1)+(60*0)).toString())+"px";
document.getElementById("m2_square").style.left = (((apart*2)+(60*1)).toString())+"px";
document.getElementById("db_square").style.left = (((apart*3)+(60*2)).toString())+"px";
document.getElementById("edb_square").style.left = (((apart*4)+(60*3)).toString())+"px";
document.getElementById("px_square").style.left = (((apart*5)+(60*4)).toString())+"px";
document.getElementById("al_square").style.left = (((apart*6)+(60*5)).toString())+"px";
document.getElementById("m1_square").style.backgroundColor = "#ff6666";
document.getElementById("m2_square").style.backgroundColor = "#ffff66";
document.getElementById("db_square").style.backgroundColor = "#66ff66";
document.getElementById("edb_square").style.backgroundColor = "#66ffff";
document.getElementById("px_square").style.backgroundColor = "#6666ff";
document.getElementById("al_square").style.backgroundColor = "#ff66ff";
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
var secretString = "";
let inventory = {Med: 0, Med2: 0, DragBlood: 0 ,EldDragBlood: 0, Angel: 0, Pick: 0};
document.addEventListener('keydown', function (event) {
    keydown = event.key;
    //console.log(keydown);
    if (keydown == "s") {
        modal.style.display = "block";
    }
    if (keydown == "b") {
        modal.style.display = "none";
    }
    if (keydown == "ArrowLeft"){
        play(1);
    }
    if (keydown == "ArrowRight"){
        play(2);
    }
    if (keydown == "r"){
        keydown = [];
        hp = 50;
        au = 0;
        set = "null"
        times = [];
        angels = 0;
        pickaxe = 0;
        guessCount = 0;
        document.getElementById("msg_lose").style.display = "none";
        document.getElementById("msg_win").style.display = "none";
        let inventory = {Med: 0, Med2: 0, DragBlood: 0 ,EldDragBlood: 0, Angel: 0, Pick: 0}
    }
    if (keydown == "a"){
        play(1);
    }
    if (keydown == "d"){
        play(1);
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
            timesAdd(3000,"msg_gold_delete");
            au += getRandomInt(1, 6);
        } else {
            document.getElementById("msg_gold").style.display = "none";
            document.getElementById("msg_die").style.display = "block";
            document.getElementById("msg_error").style.display = "none";
            timesAdd(3000,"msg_die_delete");
            hp -= getRandomInt(1, 6);
        }
       
    
        secret = Math.floor(Math.random() * 2) + 1;
        if (secret == 1){
            secretString = "left";
        } else {
            secretString = "right";
        }
        if (angels !== 0){
            document.getElementById("msg_angel").innerHTML = "Choose "+ secretString;
            document.getElementById("msg_angel").style.display = "block";
            timesAdd(5000,"msg_angel_delete");
            angels --;
        } else{
            document.getElementById("msg_angel").style.display = "none";   
        }
    }
    
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
function purchase(num){
    modal.style.display = "none";
    if(num == 1){
        if (au >= 2){
            au -= 2;
            inventory.Med++;
        } else {
            document.getElementById("msg_tooExpensive").style.display = "block";
            timesAdd(3000,"msg_tooExpensive_delete");
        } 

    } else if (num == 2){
        if(au >= 3){
            au -= 3;

        inventory.Med2++;
        } else {
            document.getElementById("msg_tooExpensive").style.display = "block";
            timesAdd(3000,"msg_tooExpensive_delete");
        }
    } else if (num == 3){
        if(au >= 5){  
             au -= 5;
            inventory.DragBlood++;
            } else{
                document.getElementById("msg_tooExpensive").style.display = "block";
                timesAdd(3000,"msg_tooExpensive_delete");
            }
    } else if (num == 4){
        if(au >= 30){
            au -= 30;
            inventory.EldDragBlood++;
        } else{
            document.getElementById("msg_tooExpensive").style.display = "block";
            timesAdd(3000,"msg_tooExpensive_delete");
        }
    } else if (num == 5){
        if (au >= 15){
            au -= 15;
            inventory.Angel++;     
        } else {
            document.getElementById("msg_tooExpensive").style.display = "block";
            timesAdd(3000,"msg_tooExpensive_delete");
        }

    } else if (num == 6){
        if(au >= 5){
            au -= 5;
            inventory.Pick++;
        } else{
            document.getElementById("msg_tooExpensive").style.display = "block";
            timesAdd(3000,"msg_tooExpensive_delete");
        }
    }
}  
function product(num) {
     if (set == "null"){
        if (num == 1 ) {
            if(inventory.Med > 0){
                hp += 1; 
                inventory.Med--;
            } 
        }
        if (num == 2) {
            if (inventory.Med2 > 0){
                inventory.Med2--;
                hp += 2;
            }  
        }
        if (num == 3) {
            if(inventory.DragBlood > 0){
                inventory.DragBlood--;
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
                    ]);}
        }
        if (num == 4){
            if (inventory.EldDragBlood > 0){
                inventory.EldDragBlood--;
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
                    ]);}}
         if (num == 5){
            if(inventory.Angel > 0){
                if (angels <= 0){
                    inventory.Angel--;
                    angels = 5;
                } else {
                    console.log("You already have an angel.")
                }
            }
           }
            
         if (num == 6){
            if(inventory.Pick > 0){
                inventory.Pick--;
                pickaxe += 1000000; 
            } 
        }
    }
}
function timesAdd(mili,instruct){
    times = times.concat([{ instance: Date.now() + mili, instruction: instruct },]);
}

setInterval(function () {
    hpb.style.width = (hp)*2 + "%";
    hpb.innerText = hp;
    aub.style.width = (au)*2 + "%";
    aub.innerText = au;
    document.getElementById("m1_text").innerText = inventory.Med.toString();
    document.getElementById("m2_text").innerText = inventory.Med2.toString();
    document.getElementById("db_text").innerText = inventory.DragBlood.toString();
    document.getElementById("edb_text").innerText = inventory.EldDragBlood.toString();
    document.getElementById("px_text").innerText = inventory.Pick.toString();
    document.getElementById("al_text").innerText = inventory.Angel.toString();
    if (inventory.Med < 1){
        document.getElementById("m1_square").style.display = "none";
    }else{
        document.getElementById("m1_square").style.display = "block";        
    }
    if (inventory.Med2 < 1){
        document.getElementById("m2_square").style.display = "none";
    }else{
        document.getElementById("m2_square").style.display = "block";        
    }
    if (inventory.DragBlood < 1){
        document.getElementById("db_square").style.display = "none";
    }else{
        document.getElementById("db_square").style.display = "block";       
    }
    if (inventory.EldDragBlood < 1){
        document.getElementById("edb_square").style.display = "none";
    }else{
        document.getElementById("edb_square").style.display = "block";        
    }
    if (inventory.Pick < 1){
        document.getElementById("px_square").style.display = "none";
    }else{
        document.getElementById("px_square").style.display = "block";       
    }
    if (inventory.Angel < 1){
        document.getElementById("al_square").style.display = "none";
    }else{
        document.getElementById("al_square").style.display = "block";        
    }
    if(inventory.Med == 1){
        document.getElementById("m1_text").style.display = "none";
    }else{
        document.getElementById("m1_text").style.display = "block"; 
    }
    if(inventory.Med2 == 1){
        document.getElementById("m2_text").style.display = "none";
    }else{
        document.getElementById("m2_text").style.display = "block"; 
    }
    if(inventory.DragBlood == 1){
        document.getElementById("db_text").style.display = "none";
    }else{
        document.getElementById("db_text").style.display = "block"; 
    }
    if(inventory.EldDragBlood == 1){
        document.getElementById("edb_text").style.display = "none";
    }else{
        document.getElementById("edb_text").style.display = "block"; 
    }
    if(inventory.Pick == 1){
        document.getElementById("px_text").style.display = "none";
    }else{
        document.getElementById("px_text").style.display = "block"; 
    }
    if(inventory.Angel == 1){
        document.getElementById("al_text").style.display = "none";
    }else{
        document.getElementById("al_text").style.display = "block"; 
    }
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
    
    } else if (au >= 50 && set == "null") {
        set = "win";
        document.getElementById("msg_win").style.display = "block";
        
    }
    if (set == "null"){
        if (pickaxe !== 0){
            if (getRandomInt(1,100001) = 1){
                if (getRandomInt(1,11)== 1){
                    au = 50;
                } else {
                    au++;
                    console.log("You struck it rich!");
                    document.getElementById("msg_rich").style.display = "block";
                    timesAdd(3000,"msg_rich_delete");
                }
            }
            pickaxe --;
        }
    }
    for (var i = 0; i < times.length; i++) {
        if (Date.now() >= times[i].instance) {
            if (times[i].instruction == "hpAdd1") {
                if (set == "null"){
                    if(hp < 50){
                        hp += 1;
                    }
                } 
            } else if (times[i].instruction == "hpAdd2") {
                if (set == "null"){
                    if(hp < 50){
                        hp += 2;
                    }
                }
            } else if (times[i].instruction == "auAdd2"){
                if (set == "null"){
                    if(au < 50){
                        au += 2;
                    }  
                }
            } else if (times[i].instruction == "msg_die_delete"){
                document.getElementById("msg_die").style.display = "none";
            } else if (times[i].instruction == "msg_tooExpensive_delete"){
                document.getElementById("msg_tooExpensive").style.display = "none";
            } else if (times[i].instruction == "msg_gold_delete"){
                document.getElementById("msg_gold").style.display = "none";
            } else if (times[i].instruction == "msg_angel_delete"){
                document.getElementById("msg_angel").style.display = "none";
            } else if (times[i].instruction == "msg_rich_delete"){
                document.getElementById("msg_rich").style.display = "none";
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
