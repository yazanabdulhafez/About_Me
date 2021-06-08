'use strict';
// //welcome part
let userName = prompt('please enter your name?');
alert('welcome to our website ' + userName + ' ,hope that you enjoy this site');
let score = 0;
//first question
let myAge = prompt('do you think that I am over 30 years?').toLowerCase();
if (myAge === 'yes' || myAge === 'y') {
    alert('no you are wrong with that , I am 26 years old');
} else if (myAge === 'no' || myAge === 'n') {
    //console.log('you are right,I am 26 years old');
    alert('you are right,I am 26 years old');
    score = score + 1;
} else {
    alert('please type (yes) , (y) , (no) , (n)');
}

//second question
let myFavDay = prompt('In your opinion do I love friday?').toLowerCase();
if (myFavDay === 'yes' || myFavDay === 'y') {
    //console.log('you hit the target , its my favotite day in the week');
    alert('you hit the target , its my favotite day in the week');
    score = score + 1;
} else if (myFavDay === 'no' || myFavDay === 'n') {
    alert('you wrong , its my favorite day');
} else {
    alert('please type (yes) , (y) , (no) , (n)');
}

//third question
let techLover = prompt('do you think that I interist in technology?').toLowerCase();
if (techLover === 'yes' || techLover === 'y') {
    // console.log('you are right , technology enhance our life');
    alert('you are right , technology made our life easy');
    score = score + 1;
} else if (techLover === 'no' || techLover === 'n') {
    alert('no you are wrong with that , I love technology   ');
} else {
    alert('please type (yes) , (y) , (no) , (n)');
}

//fourth question
let comeFrom = prompt('do you think that I am amarican ?').toLowerCase();
if (comeFrom === 'yes' || comeFrom === 'y') {
    alert('no you are wrong with that , I am from Jordan');
} else if (comeFrom === 'no' || comeFrom === 'n') {
    //console.log('you are right,I am from Jordan');
    alert('you are right,I am from Jordan ');
    score = score + 1;
} else {
    alert('please type (yes) , (y) , (no) , (n)');
}

//fifth question
let favHoppy = prompt('In your point of veiw do I love painting?').toLowerCase();
if (favHoppy === 'yes' || favHoppy === 'y') {
    alert('yes I love painting but I preffer reading books');
} else if (favHoppy === 'no' || favHoppy === 'n') {
    // console.log('you are wrong this time , I love it  ');
    alert('you are wrong this time , I love it ');
    score = score + 1;
} else {
    alert('please type (yes) , (y) , (no) , (n)');
}


//The sixth question
// let guess = 0;
// for (let i = 0; i < 4; i++) {
//     let x = prompt('how many brothers do I have?');
//     x = Number(x);
//     if (x === 8) {
//         if (x === 8) {
//             alert('will done , you are correct');
//             score = score + 1;
//         } else {
//             alert('you are wrong , my brothers are eight');
//         }
//         break;
//     } else if (x > 8)
//     /* if guessed number is greater
//                       than actual number*/
//     {
//         guess++;
//         alert("OOPS SORRY!! TRY A SMALLER NUMBER");
//     } else {
//         guess++;
//         alert("OOPS SORRY!! TRY A GREATER NUMBER")
//     }
// }

//////////////////////
let myBrothersNum = prompt('how many brothers and sisters do I have?');
myBrothersNum = Number(myBrothersNum);
let counter = 1;
while (myBrothersNum !== 8 && counter < 4) {
    myBrothersNum = prompt('please enter your Guess again?');
    myBrothersNum = Number(myBrothersNum);
    counter = counter + 1;
}
if (myBrothersNum === 8) {
    alert('will done , you are correct');
    score = score + 1;
} else {
    // if (myBrothersNum > 8) {
    //   alert('your Guess is high!');
    // } else if (myBrothersNum < 8) {
    // alert('your Guess is lower!');
    // } else {
    alert('you are wrong , my brothers are eight');
}



//The seventh question

// let programLang = ['javascript', 'python', 'c++', 'java','kotlin', 'php'];
// let numOfattampt=1;
// for (let i=0;numOfattampt<6;i++){

// let favBroLng = prompt('what programming language you hear about it?');
// for (let i = 0; favBroLng !== programLang[i]; i++) {
//     console.log('wrong');
// }
// alert('correct');

// }
// let counter = 0;
// while (counter < 6) {
//   let userInput = prompt('enter').toLowerCase();
//   for (let i = 0; i < programLang.length; i++) {

//     if (userInput === programLang[i]) {
//       alert('you are right');
//       score = score + 1;
//       break;
//     } else {
//       console.log('wrong entry');}
//   }
//   counter = counter + 1;
// }
//alert('please choose from these next time:javascript, python , c++, java, kotlin, php');
// if (userInput == programLang[]) {
//     alert('thats true')
// } else {
//     alert('false')
// }
///////////////////
// let programLang = ['javascript', 'python', 'c++', 'java','kotlin', 'php'];
let count = 0;
let myFavLang = prompt('guess what programming language I know ?');
while (count < 6 && myFavLang !== 'javascript' && myFavLang !== 'python' && myFavLang !== 'c++' && myFavLang !== 'java' && myFavLang !== 'kotlin' && myFavLang !== 'php') {
    myFavLang = prompt('guess what programming language I know again please ?').toLowerCase();
    count++;
}
if (myFavLang === myFavLang === 'javascript' || myFavLang === 'python' || myFavLang === 'c++' || myFavLang === 'java' || myFavLang === 'kotlin' || myFavLang === 'php') {
    alert('will done , you are correct');
    score = score + 1;
} else {
    alert('you are not correct');
}
alert('you score is : ' + score + ' out of 7');
alert('Its nice to have you in our website ' + userName + ' , we hope that you visit our website again');