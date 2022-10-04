let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	var list = document.querySelector("#myList");
	var elem = document.createElement("li");
	elem.innerHTML="Forth element";
	list.appendChild(elem);
	
});
