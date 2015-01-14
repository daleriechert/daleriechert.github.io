var nav1, nav2, nav3, nav4, nav5;
	
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

function nav3over() {
	document.getElementById("nav3").style.backgroundColor = "#FFFFFF";
}
function nav3leave() {
	if (nav3 == 0)
	document.getElementById("nav3").style.backgroundColor = "#444444";
}

function nav4over() {
	document.getElementById("nav4").style.backgroundColor = "#FFFFFF";
}
function nav4leave() {
	if (nav4 == 0)
	document.getElementById("nav4").style.backgroundColor = "#444444";
}

function nav5over() {
	document.getElementById("nav5").style.backgroundColor = "#FFFFFF";
}
function nav5leave() {
	if (nav5 == 0)
	document.getElementById("nav5").style.backgroundColor = "#444444";
}

function nav1click() {
	document.getElementById("content-warning").style.display = "none";

	nav1 = 1;
	nav2 = 0, nav3 = 0, nav4 = 0, nav5 = 0;
	document.getElementById("nav1").style.backgroundColor = "#FFFFFF";
	document.getElementById("nav2").style.backgroundColor = "#444444";
	document.getElementById("nav3").style.backgroundColor = "#444444";
	document.getElementById("nav4").style.backgroundColor = "#444444";
	document.getElementById("nav5").style.backgroundColor = "#444444";
	document.getElementById("content1").style.display = "block";
	document.getElementById("content2").style.display = "none";
	document.getElementById("content3").style.display = "none";
	document.getElementById("content4").style.display = "none";
	document.getElementById("content5").style.display = "none";
}

function nav2click() {
	nav2 = 1;
	nav1 = 0, nav3 = 0, nav4 = 0, nav5 = 0;
	document.getElementById("nav1").style.backgroundColor = "#444444";
	document.getElementById("nav2").style.backgroundColor = "#FFFFFF";
	document.getElementById("nav3").style.backgroundColor = "#444444";
	document.getElementById("nav4").style.backgroundColor = "#444444";
	document.getElementById("nav5").style.backgroundColor = "#444444";
	document.getElementById("content1").style.display = "none";
	document.getElementById("content2").style.display = "block";
	document.getElementById("content3").style.display = "none";
	document.getElementById("content4").style.display = "none";
	document.getElementById("content5").style.display = "none";
}

function nav3click() {
	nav3 = 1;
	nav1 = 0, nav2 = 0, nav4 = 0, nav5 = 0;
	document.getElementById("nav1").style.backgroundColor = "#444444";
	document.getElementById("nav2").style.backgroundColor = "#444444";
	document.getElementById("nav3").style.backgroundColor = "#FFFFFF";
	document.getElementById("nav4").style.backgroundColor = "#444444";
	document.getElementById("nav5").style.backgroundColor = "#444444";
	document.getElementById("content1").style.display = "none";
	document.getElementById("content2").style.display = "none";
	document.getElementById("content3").style.display = "block";
	document.getElementById("content4").style.display = "none";
	document.getElementById("content5").style.display = "none";
}


function nav4click() {
	nav4 = 1;
	nav1 = 0, nav2 = 0, nav3 = 0, nav5 = 0;
	document.getElementById("nav1").style.backgroundColor = "#444444";
	document.getElementById("nav2").style.backgroundColor = "#444444";
	document.getElementById("nav3").style.backgroundColor = "#444444";
	document.getElementById("nav4").style.backgroundColor = "#FFFFFF";
	document.getElementById("nav5").style.backgroundColor = "#444444";
	document.getElementById("content1").style.display = "none";
	document.getElementById("content2").style.display = "none";
	document.getElementById("content3").style.display = "none";
	document.getElementById("content4").style.display = "block";
	document.getElementById("content5").style.display = "none";
}

function nav5click() {
	nav5 = 1;
	nav1 = 0, nav2 = 0, nav3 = 0, nav4 = 0;
	document.getElementById("nav1").style.backgroundColor = "#444444";
	document.getElementById("nav2").style.backgroundColor = "#444444";
	document.getElementById("nav3").style.backgroundColor = "#444444";
	document.getElementById("nav4").style.backgroundColor = "#444444";
	document.getElementById("nav5").style.backgroundColor = "#FFFFFF";
	document.getElementById("content1").style.display = "none";
	document.getElementById("content2").style.display = "none";
	document.getElementById("content3").style.display = "none";
	document.getElementById("content4").style.display = "none";
	document.getElementById("content5").style.display = "block";
}

function OpenTab(url) {
  var win=window.open(url, '_blank');
  win.focus();
}