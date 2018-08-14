var ul = document.querySelector("ul");
var input = document.querySelector("input");
var button = document.querySelector("#addBtn");

button.onclick = function () {
	var userInput = input.value;
	input.value = '';
	if (userInput.trim().length !== 0) {

		var li = document.createElement("li");
		var span = document.createElement("span");
		var btnDel = document.createElement("button");

		span.textContent = userInput;
		btnDel.textContent = "Delete";

		li.appendChild(span);
		li.appendChild(btnDel);
		ul.appendChild(li);

		btnDel.onclick = function () {
			ul.removeChild(li);
		};

		input.focus();
	} else {
		window.alert("empty input");
	}
}