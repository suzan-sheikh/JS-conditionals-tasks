/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 65;
let ticket = 800;
let prof = "teacher"; 

if(age < 10){
    console.log("Dear children Your are Free");
}
else if(prof === "student"){
    let discount = ticket * 50/100;
    let stulTicket = ticket - discount;
    console.log(stulTicket);
}
else if(age >= 60){
    let discount = ticket * 15/100;
    let finalTicket = ticket - discount;
    console.log(finalTicket);
}
else{
    console.log(ticket)
}

/*



*/