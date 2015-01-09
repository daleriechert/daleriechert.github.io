var nav1, nav2, nav3, nav4;
	
function nav1over() {
	document.getElementById("nav1").style.backgroundColor = "#FFFFFF";
}
function nav1leave() {
	if (nav1 == 0)
	document.getElementById("nav1").style.backgroundColor = "#444444";
}

function nav2over() {
	document.getElementById("nav2").style.backgroundColor = "#FFFFFF";
}
function nav2leave() {
	if (nav2 == 0)
	document.getElementById("nav2").style.backgroundColor = "#444444";
}

function nav1click() {
	nav1 = 1;
	nav2 = 0;
	document.getElementById("nav1").style.backgroundColor = "#FFFFFF";
	document.getElementById("nav2").style.backgroundColor = "#444444";
	document.getElementById("content1").style.display = "block";
	document.getElementById("content2").style.display = "none";
}

function nav2click() {
	nav1 = 0;
	nav2 = 1;
	document.getElementById("nav1").style.backgroundColor = "#444444";
	document.getElementById("nav2").style.backgroundColor = "#FFFFFF";
	document.getElementById("content1").style.display = "none";
	document.getElementById("content2").style.display = "block";
}
