/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.

In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/


// Written by Kent, Clark
var Enemies=["Lex","Batman","Darkseid","Brainiac","General Zod","Doomsday"];

function whoWins(isThereKryptonite,enemyName){
if (isThereKryptonite)
{
    console.log("Superman beats " +enemyName+ ", of course");
}

else{
    console.log("Depends on how quick Superman can get rid of the Kryptonite. "+ enemyName +" could possibly win this one.");
}
    }
    var i = 0;
    for (var i=0;i<Enemies.length;i++){
    var isThereKryptonite;
    if (i % 2 === 0) {
        isThereKryptonite = true;
    } else {
        isThereKryptonite = false;
    }
    console.log(whoWins(isThereKryptonite,Enemies[i]));
}

function howAttracted(phoneBoothQuickChange){
    return Math.floor((Math.random()*10)+1);
}
    console.log("How Attracted Is Lois Lane To Me");
var clarkKent = true;
var superman = false;

while (clarkKent){
    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange =Math.random();
    if (phoneBoothQuickChange>= 0.5) {
        clarkKent=false;
        superman=true;
        console.log("Now I'm Superman!")
}}