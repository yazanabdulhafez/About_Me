'use strict';

let score = 0;
let userName = prompt('please enter your name?');
alert('welcome to our website ' + userName + ' ,hope that you enjoy this site');

function fiveQuestion() {

    let myAge = prompt('do you think that I am over 30 years?').toLowerCase();
    if (myAge === 'yes' || myAge === 'y') {
        alert('no you are wrong with that , I am 26 years old');
    } else if (myAge === 'no' || myAge === 'n') {
        alert('you are right,I am 26 years old');
        score = score + 1;
    } else {
        alert('please type (yes) , (y) , (no) , (n)');
    }


    let myFavDay = prompt('In your opinion do I love friday?').toLowerCase();
    if (myFavDay === 'yes' || myFavDay === 'y') {
        alert('you hit the target , its my favotite day in the week');
        score = score + 1;
    } else if (myFavDay === 'no' || myFavDay === 'n') {
        alert('you wrong , its my favorite day');
    } else {
        alert('please type (yes) , (y) , (no) , (n)');
    }


    let techLover = prompt('do you think that I interist in technology?').toLowerCase();
    if (techLover === 'yes' || techLover === 'y') {
        alert('you are right , technology made our life easy');
        score = score + 1;
    } else if (techLover === 'no' || techLover === 'n') {
        alert('no you are wrong with that , I love technology   ');
    } else {
        alert('please type (yes) , (y) , (no) , (n)');
    }


    let comeFrom = prompt('do you think that I am amarican ?').toLowerCase();
    if (comeFrom === 'yes' || comeFrom === 'y') {
        alert('no you are wrong with that , I am from Jordan');
    } else if (comeFrom === 'no' || comeFrom === 'n') {
        alert('you are right,I am from Jordan ');
        score = score + 1;
    } else {
        alert('please type (yes) , (y) , (no) , (n)');
    }


    let favHoppy = prompt('In your point of veiw do I love painting?').toLowerCase();
    if (favHoppy === 'yes' || favHoppy === 'y') {
        alert('yes I love painting but I preffer reading books');
    } else if (favHoppy === 'no' || favHoppy === 'n') {
        alert('you are wrong this time , I love it ');
        score = score + 1;
    } else {
        alert('please type (yes) , (y) , (no) , (n)');
    }
    return (score);
}


function guessNumGame() {
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
        alert('you are wrong , my brothers are eight');
    }
    return (score);
}

function checkFavLang() {

    let programLang = ['javascript', 'python', 'c++', 'java', 'kotlin', 'php'];
    let myFavLang = '';
    for (let i = 0; i < 6; i++) {
        myFavLang = prompt('what my favorite programming language?').toLowerCase();
        for (let j = 0; j < programLang.length; j++) {

            if (myFavLang === programLang[j]) {
                alert('you are right');
                i = 6;
                score++;
                break;
            }

        }
        if (i === 5) {
            alert('no more trials \n' + 'the right answers are = ' + programLang);
        } else if (i < 6) {
            alert('this is wrong');
        }
    }
}
fiveQuestion();
guessNumGame();
checkFavLang();
alert('you score is : ' + score + ' out of 7');
alert('Its nice to have you in our website ' + userName + ' , we hope that you visit our website again');