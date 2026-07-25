let inactivityTimer;
let logoutTimer;

const inactivityLimit = 600000; // 10 minutes
const logoutDelay = 15000; // 15 seconds


function resetSessionTimer(){

    clearTimeout(inactivityTimer);
    clearTimeout(logoutTimer);

    const popup = document.getElementById("sessionPopup");

    if(popup){
        popup.style.display = "none";
    }


    inactivityTimer = setTimeout(()=>{

        showSessionWarning();

    }, inactivityLimit);

}



function showSessionWarning(){

    const popup = document.getElementById("sessionPopup");

    if(popup){

        popup.style.display = "flex";

    }


    logoutTimer = setTimeout(()=>{

        logoutUser();

    }, logoutDelay);

}



function continueSession(){

    clearTimeout(logoutTimer);

    document.getElementById("sessionPopup").style.display="none";

    resetSessionTimer();

}



function logoutUser(){

    window.location.href="../login.html";

}



[
"click",
"mousemove",
"keypress",
"scroll",
"touchstart"
].forEach(event=>{

    document.addEventListener(event, resetSessionTimer);

});



resetSessionTimer();