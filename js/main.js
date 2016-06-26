function askQuestions() {

var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name");
var fullName = firstName + ' ' + lastName;

var age = prompt("How old are you?");
age = parseInt(age);

if (age>= 18) {
	console.log("User is an adult");
} else if (age>=13){
	console.log("user is a teenager");
} else {
		console.log("user is a child");
}


/*
If the user's first name is "general" and the last name is NOT "Assembly", then greet the general!
(HINT: Use console.log)
*/

if (firstName.toLowerCase() === 'General' && lastName.toLowerCase() !== 'Assembly') {
	alert("Good Morning General " + lastName);
}

}


// When the page is loaded...
$(function() {
	$('img').on('click',askQuestions);




//Hide all the stuff When the user clicks on an h3
	$('h3').on('click', function() {

		//slidetoggle the sections after click on H3
		$(this).next().slideToggle();

	});

});



/* Comments can be shown like this OR....*/
//or like this (but this have to be in one line)

//$ is the same as jquery

//  usamos o codigo  alert($); para dar uma janela pop up de alert

//the console.log is a diagnostic code just to test - isto vai por o resultado na console no google crhome
