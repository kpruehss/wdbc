var button = document.querySelector('button');
button.addEventListener("click", function() {
	if(body.style.backgroundColor === "purple") {
		document.body.background = "white";
    } else {
		document.body.background = "purple";
    }
})