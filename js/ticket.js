function ticket() {
    document.querySelector(".acheter1").innerHTML = `<p>Acheter</p>`;
    this.addEventListener("click", ticket_remove, {once:true});
}
function ticket_remove() {
    document.querySelector(".acheter1").innerHTML = `<div class="acheter1"></div>`;
    this.addEventListener("click", ticket, {once:true});
}


//Ticket 2
function ticket2() {
    document.querySelector(".acheter2").innerHTML = `<p>Acheter</p>`;
    this.addEventListener("click", ticket2_remove, {once:true});
}
function ticket2_remove() {
    document.querySelector(".acheter2").innerHTML = `<div class="acheter2"></div>`;
    this.addEventListener("click", ticket2, {once:true});
}

//ticket 3
function ticket3() {
    document.querySelector(".acheter3").innerHTML = `<p>Acheter</p>`;
    this.addEventListener("click", ticket3_remove, {once:true});
}
function ticket3_remove() {
    document.querySelector(".acheter3").innerHTML = `<div class="acheter3"></div>`;
    this.addEventListener("click", ticket3, {once:true});
}

document.querySelector(".checkbox1").addEventListener("click", ticket, {once:true});
document.querySelector(".checkbox2").addEventListener("click", ticket2, {once:true});
document.querySelector(".checkbox3").addEventListener("click", ticket3, {once:true});