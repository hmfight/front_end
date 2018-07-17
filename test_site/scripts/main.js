var myImage = document.querySelector('img');
myImage.onclick = function () {
	var imgSrc = myImage.getAttribute('src');
	if (imgSrc === 'images/fire_fox.png') {
		myImage.setAttribute('src', 'images/google.png');
	} else {
		myImage.setAttribute("src", 'images/fire_fox.png')
	}
}

var myButton = document.querySelector('button').onclick = function () {
	setUserName()
};
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = item;
	myHeading.textContent = 'Mozilla is cool, ' + storedName;
}