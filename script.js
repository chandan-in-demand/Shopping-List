var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");


function inputLength() {
	return input.value.length;
}


function createListElement() {
	var li = document.createElement("li");
	var delBtn = document.createElement("button");
	delBtn.appendChild(document.createTextNode("Delete"));
	delBtn.classList.add("cool");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(delBtn);
	delBtn.onclick = deleteOnClick;
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function markTheItem(event){
	event.target.classList.toggle("done");
}

function deleteOnClick(){
	event.target.parentNode.remove();
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", markTheItem);

