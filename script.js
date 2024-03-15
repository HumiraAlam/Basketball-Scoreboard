//Selectors
//score boards
 let homeScore= document.getElementById("home-score");
 let guestScore= document.getElementById("guest-score");

 //home score buttons
let homeScoreBtn1=document.getElementById("home-score-btn-1");
let homeScoreBtn2=document.getElementById("home-score-btn-2");
let homeScoreBtn3=document.getElementById("home-score-btn-3");

//guest score buttons
let guestScoreBtn1=document.getElementById("guest-score-btn-1");
let guestScoreBtn2=document.getElementById("guest-score-btn-2");
let guestScoreBtn3=document.getElementById("guest-score-btn-3");

//reset buttons
let resetHomeScore=document.getElementById("reset-home-score");
let resetGuestScore=document.getElementById("reset-guest-score");
let resetAllScore=document.getElementById("reset-all-score");


//===Button functions ==Home==
let count =0;
//button 1> Home
homeScoreBtn1.addEventListener("click", function(){
    homeScore.textContent++;

})



//button 2> Home

homeScoreBtn2.addEventListener("click",function(){
    homeScore.textContent=Number(homeScore.textContent)+2;
})
//button 3>Home

homeScoreBtn3.addEventListener("click",function(){
    homeScore.textContent=Number(homeScore.textContent)+3;
})

//reset>Home
resetHomeScore.addEventListener("click",function(){
    homeScore.textContent=0;
})

//===Button functions ==Guest==

//button 1>Guest
guestScoreBtn1.addEventListener("click",function(){
    guestScore.textContent++;
})

//button 2>Guest
guestScoreBtn2.addEventListener("click",function(){
    guestScore.textContent=Number(guestScore.textContent)+2;
})

//button 3>Guest
guestScoreBtn3.addEventListener("click",function(){
    guestScore.textContent=Number(guestScore.textContent)+3;
})

//reset>Guest
resetGuestScore.addEventListener("click",function(){
    guestScore.textContent=0;
})

//Reset All
resetAllScore.addEventListener("click",function(){
    homeScore.textContent=0;
    guestScore.textContent=0;
})


