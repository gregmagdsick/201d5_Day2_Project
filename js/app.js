var user = prompt('What is your name?');
console.log('The user\'s name is :' + user);

alert('Hi ' + user + '. I\'m going to ask you 3 yes or no questions. Please answer with a Y or N for each question.');
var answer1 = prompt(user + ', am I a resident of Washington state?');
console.log('user\'s answer1 is: ' + answer1);
if (answer1 === 'Y') {
  alert('Great ' + user + ', you got the first question right')
  console.log('user got question1 correct.');
} else {
  alert('Sorry ' + user + ', that\'s not right, I am a resident of Washington.')
  console.log('user got question 1 wrong.');
}

var answer2 = prompt(user + ', here is question number 2: Do I have brown hair?');
console.log('user\'s answer2 is: ' + answer2);
if (answer2 === 'Y') {
  alert('Fantastic ' + user + ', you are right!')
  console.log('user got question2 correct');
} else {
  alert('Bummer ' + user + ', you got question 2 wrong.')
  console.log('user got question2 wrong. I do have brown hair.');
}

var answer3 = prompt(user + ', here is question number 3: Do I have 4 kids?');
console.log('user\'s answer3 is: ' + answer3);
if (answer3 === 'N') {
  alert('Awesome ' + user + ', you got this one right!');
  console.log('user got question3 right.');
} else {
  alert('Oops, ' + user + ', you got this one wrong.');
  console.log('user got question3 wrong.');
}

alert(user + ', time for a bonus question. Please respond with a number, such as 2, not \'two\'.');
var answer4 = prompt(user + ', how many years have I been married?');
console.log('user\'s answer4 is: ' + answer4);
if (answer4 > 5) {
  alert('Sorry ' + user + ', your answer is too high.');
  console.log('user\'s answer4 is too high.');
}else if (answer4 < 5) {
  alert('Sorry ' + user + ', your answer was too low.');
  console.log('user\'s answer4 is too low.');
}else if (answer4 == 5) {
  alert('Congratulations, you got it right. I have been married for 5 years.');
  console.log('user\'s answer4 is correct.');
}else {
  alert('It looks like you didn\'t enter a numeric value. Please start over.')
  console.log('user\'s answer4 was not a number.');
}
