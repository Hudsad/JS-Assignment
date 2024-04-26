/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var daycost=0;
var daycount=0;
var mbtn=document.getElementById("monday");
var tbtn=document.getElementById("tuesday");
var wbtn=document.getElementById("wednesday");
var thbtn=document.getElementById("thursday");
var fbtn=document.getElementById("friday");
var reset=document.getElementById("clear-button");
var full=document.getElementById("full");
var half=document.getElementById("half");
var finalcost=0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
mbtn.addEventListener("click", event => {
    if (!mbtn.classList.contains("clicked")){
        event.target.classList.add("clicked");
        daycount+=1;
        calculate();
    }
});
tbtn.addEventListener("click", event => {
    if (!tbtn.classList.contains("clicked")){
        event.target.classList.add("clicked");
        daycount+=1;
        calculate();
    }
});
wbtn.addEventListener("click", event => {
    if (!wbtn.classList.contains("clicked")){
        event.target.classList.add("clicked");
        daycount+=1;
        calculate();
    }
});
thbtn.addEventListener("click", event => {
    if (!thbtn.classList.contains("clicked")){
        event.target.classList.add("clicked");
        daycount+=1;
        calculate();
    }
});
fbtn.addEventListener("click", event => {
    if (!fbtn.classList.contains("clicked")){
        event.target.classList.add("clicked");
        daycount+=1;
        calculate();
    }
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
reset.addEventListener("click", event => {
    mbtn.classList.remove("clicked");
    tbtn.classList.remove("clicked");
    wbtn.classList.remove("clicked");
    thbtn.classList.remove("clicked");
    fbtn.classList.remove("clicked");
    daycount=0;
    calculate();
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
full.addEventListener("click", event => {
    if (!full.classList.contains("clicked")){
        event.target.classList.add("clicked");
        half.classList.remove("clicked");
        calculate();
    }
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
half.addEventListener("click", event => {
    if (!half.classList.contains("clicked")){
        event.target.classList.add("clicked");
        full.classList.remove("clicked");
        calculate();
    }
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    if (full.classList.contains("clicked")){
        daycost=35;
    } else {
        daycost=20;
    }
    finalcost=daycost*daycount;
    document.getElementById("calculated-cost").innerText=finalcost;
}
