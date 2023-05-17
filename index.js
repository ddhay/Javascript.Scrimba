// document.getElementById("count-el") .innerText=25;

// let count = 5200;


// console.log(count);

// let myAge = 59;

// console.log(myAge)

// 

// Reassigning and incrementing
// let bonusPoints=50;
// console.log(bonusPoints);

// bonusPoints=bonusPoints+50;
// console.log(bonusPoints);

// bonusPoints=bonusPoints-75;
// console.log(bonusPoints);

// bonusPoints=bonusPoints+45;
// console.log(bonusPoints);

//9, onclick event listener:

// 

//10. USING FUNCTIONS TO WRITE LESS CODE
//Declare the function
// function countdown(){
//     console.log(6)
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)    
// }

// //CALL THE FUNCTION:

// countdown();
// countdown();


// function x() {
//     console.log(42)
// }

// x();

// 12.  WRITE A FUNCTION THAT CALLS THE SUM:

// let lap1 = 31;
// let lap2 = 33;
// let lap3 = 36;

// // function lapSum(){
// //     console.log( lap1 + lap2 + lap3);
// // }
// // lapSum();

// //ALTERNATIVE:

// function lapTime(){
//     let totalTime = lap1 + lap2 +lap3;
//     console.log(totalTime);
// }

// lapTime();

// 13.  WRITE A FUNCTION THAT INCREMENTS


// let lapsCompleted = 0;

// function incrementedLaps() {
//    let increasingLaps = lapsCompleted + 1;
//    console.log(increasingLaps);
    
// };

// incrementedLaps();

// 14. INCREMENT ON CLICKS:Each time button is clicked, count increases by +1.  HTML: 
// HTML: <button id = "increment-btn" onclick = "increment()">INCREMENT</button>

// let count=0;
// function increment(){
//     count = count + 1; 
//     console.log(count)
// }

// 15.  Display the count: Change 'count-el' in html to reflect new count.
// HTML: <h2 id='count-el'>0</h2>

// let countEl = document.getElementById('count-el').innerText=count;
// console.log(countEl)

// let count = 0;

// 16. Using the DOM

// 17. Display the count with innerText(see 15 above)


// 18. Create the save button: (1)Create a function, save(), which logs out the count 
// when it is called.(2)Create a SAVE button in HTML. Set id = 'save-btn' and 
// call the save() function when clicked.

// function save(){
//     // count = count + 1;
//     console.log(count);
// }

// 19. WHAT IS A STRING

// 20. WRITE FIRST STRING VARIABLE

    // let userName = 'per ';
    // let message = "You have three new notifications"; 
    // // CONCATENATE:

    //     // console.log( userName + ',' + message + '!')

    //     let messageToUser = userName + ',' + message + '!';
    //     console.log(messageToUser);

        //21 LOG A GREETING TO THE CONSOLE

    //     let name = 'Darrell';
    //     let greeting = 'Hi, my name is ';
    //     let myGreeting = greeting + name;
    //     console.log(myGreeting);

    // // 22.STRINGS VS NUMBERS

    // let myName = 45; 
    // let greet = 'Hi, my name is not ';
    // myGreeting = greet + myName;
    // console.log(myGreeting);

    // 22. RENDER A WELCOME MESSAGE

    // From Html:  <p id='welcom-el'></p>
    // Example 1:

    // let meName = 'Darrell';
    // let greeting2 = 'Hi, my name is ';
    // let message = greeting2 + meName;
    

    // document.getElementById("welcome-el").innerText=message;

    // // Example 2:

    // let name2='Darrell D.';
    // let greeting3 = ' says Fuck You!';
    // let message2 = name2 + greeting3;

    // document.getElementById('FU').innerText=message2;



    // console.log(welcomeEl);

    // ALTERNATIVE:

    // let welcomeEl2 = document.getElementById('welcome-el');
    // let meName = 'Darrell';
    // let greeting = 'Welcome back';

    // welcomeEl2.innerText = greeting + meName;

    //26. CREATE THE SAVE FEATURE:

     // console.log(countEl); 
//      let saveEl = document.getElementById(save-el);
     
     
//      let countEl = document.getElementById('save-el');
//      let count=0;

     function increment(){
     count += 1; 

     }
//      // console.log(count)
//  }
   
 
// function save(){
//     // count = count + 1;
//     let saveCount = count + ' - ';
//     // console.log(count);


//     document.getElementById('save-el').innerText+="Previous entries " + saveCount;

// countEl.textContent = 0;


// }let save
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count;
}

// function save() {
//     let countStr = count  + " - ";
//     saveEl.innerText += countStr;

//     }

// 28.  RESET COUNT TO ZERO AFTER EACH SAVE:
// change funcion on line 215 as follows:

function save(){
    let countStr = count + " - ";
    // change line 217 above:
    saveEl.textContent += countStr;
    // add code:
    countEl.textContent = 0;
    count = 0;
}









    





























     

