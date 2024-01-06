var nav1, nav2, nav3, nav4, nav5, nav6;
	
function nav1over() {
	document.getElementById("nav1").style.backgroundColor = "#FFFFFF";
}
function nav1leave() {
	if (nav1 == 0) {
		document.getElementById("nav1").style.backgroundColor = "#444444";
	}
}

function nav2over() {
	document.getElementById("nav2").style.backgroundColor = "#FFFFFF";
}
function nav2leave() {
	if (nav2 == 0) {
		document.getElementById("nav2").style.backgroundColor = "#444444";
	}
}

function nav3over() {
	document.getElementById("nav3").style.backgroundColor = "#FFFFFF";
}
function nav3leave() {
	if (nav3 == 0) {
		document.getElementById("nav3").style.backgroundColor = "#444444";
	}
}

function nav4over() {
	document.getElementById("nav4").style.backgroundColor = "#FFFFFF";
}
function nav4leave() {
	if (nav4 == 0) {
		document.getElementById("nav4").style.backgroundColor = "#444444";
	}
}

function nav5over() {
	document.getElementById("nav5").style.backgroundColor = "#FFFFFF";
}
function nav5leave() {
	if (nav5 == 0) {
		document.getElementById("nav5").style.backgroundColor = "#444444";
	}
}

function nav6over() {
	document.getElementById("nav6").style.backgroundColor = "#FFFFFF";
}
function nav6leave() {
	if (nav6 == 0) {
		document.getElementById("nav6").style.backgroundColor = "#444444";
	}
}


function nav1click() {
	document.getElementById("content-warning").style.display = "none";
	window.location.hash = "#home";
	nav1 = 1;
	nav2 = 0, nav3 = 0, nav4 = 0, nav5 = 0, nav6 = 0;
	document.getElementById("nav1").style.backgroundColor = "#FFFFFF";
	document.getElementById("nav2").style.backgroundColor = "#444444";
	document.getElementById("nav3").style.backgroundColor = "#444444";
	document.getElementById("nav4").style.backgroundColor = "#444444";
	document.getElementById("nav5").style.backgroundColor = "#444444";
	document.getElementById("nav6").style.backgroundColor = "#444444";
	document.getElementById("content1").style.display = "block";
	document.getElementById("content2").style.display = "none";
	document.getElementById("content3").style.display = "none";
	document.getElementById("content4").style.display = "none";
	document.getElementById("content5").style.display = "none";
	document.getElementById("content6").style.display = "none";
}

function nav2click() {
	document.getElementById("content-warning").style.display = "none";
	window.location.hash = "#resume";
	nav2 = 1;
	nav1 = 0, nav3 = 0, nav4 = 0, nav5 = 0, nav6 = 0;
	document.getElementById("nav1").style.backgroundColor = "#444444";
	document.getElementById("nav2").style.backgroundColor = "#FFFFFF";
	document.getElementById("nav3").style.backgroundColor = "#444444";
	document.getElementById("nav4").style.backgroundColor = "#444444";
	document.getElementById("nav5").style.backgroundColor = "#444444";
	document.getElementById("nav6").style.backgroundColor = "#444444";
	document.getElementById("content1").style.display = "none";
	document.getElementById("content2").style.display = "block";
	document.getElementById("content3").style.display = "none";
	document.getElementById("content4").style.display = "none";
	document.getElementById("content5").style.display = "none";
	document.getElementById("content6").style.display = "none";
}

function nav3click() {
	document.getElementById("content-warning").style.display = "none";
	window.location.hash = "#projects";
	nav3 = 1;
	nav1 = 0, nav2 = 0, nav4 = 0, nav5 = 0, nav6 = 0;
	document.getElementById("nav1").style.backgroundColor = "#444444";
	document.getElementById("nav2").style.backgroundColor = "#444444";
	document.getElementById("nav3").style.backgroundColor = "#FFFFFF";
	document.getElementById("nav4").style.backgroundColor = "#444444";
	document.getElementById("nav5").style.backgroundColor = "#444444";
	document.getElementById("nav6").style.backgroundColor = "#444444";
	document.getElementById("content1").style.display = "none";
	document.getElementById("content2").style.display = "none";
	document.getElementById("content3").style.display = "block";
	document.getElementById("content4").style.display = "none";
	document.getElementById("content5").style.display = "none";
	document.getElementById("content6").style.display = "none";
}


function nav4click() {
	document.getElementById("content-warning").style.display = "none";
	window.location.hash = "#design";
	nav4 = 1;
	nav1 = 0, nav2 = 0, nav3 = 0, nav5 = 0, nav6 = 0;
	document.getElementById("nav1").style.backgroundColor = "#444444";
	document.getElementById("nav2").style.backgroundColor = "#444444";
	document.getElementById("nav3").style.backgroundColor = "#444444";
	document.getElementById("nav4").style.backgroundColor = "#FFFFFF";
	document.getElementById("nav5").style.backgroundColor = "#444444";
	document.getElementById("nav6").style.backgroundColor = "#444444";
	document.getElementById("content1").style.display = "none";
	document.getElementById("content2").style.display = "none";
	document.getElementById("content3").style.display = "none";
	document.getElementById("content4").style.display = "block";
	document.getElementById("content5").style.display = "none";
	document.getElementById("content6").style.display = "none";
}

function nav5click() {
	document.getElementById("content-warning").style.display = "none";
	window.location.hash = "#photography";
	nav5 = 1;
	nav1 = 0, nav2 = 0, nav3 = 0, nav4 = 0, nav6 = 0;
	document.getElementById("nav1").style.backgroundColor = "#444444";
	document.getElementById("nav2").style.backgroundColor = "#444444";
	document.getElementById("nav3").style.backgroundColor = "#444444";
	document.getElementById("nav4").style.backgroundColor = "#444444";
	document.getElementById("nav5").style.backgroundColor = "#FFFFFF";
	document.getElementById("nav6").style.backgroundColor = "#444444";
	document.getElementById("content1").style.display = "none";
	document.getElementById("content2").style.display = "none";
	document.getElementById("content3").style.display = "none";
	document.getElementById("content4").style.display = "none";
	document.getElementById("content5").style.display = "block";
	document.getElementById("content6").style.display = "none";
}

function nav6click() {
	document.getElementById("content-warning").style.display = "none";
	nav6 = 1;
	nav1 = 0, nav2 = 0, nav3 = 0, nav4 = 0, nav5 = 0;
	document.getElementById("nav1").style.backgroundColor = "#444444";
	document.getElementById("nav2").style.backgroundColor = "#444444";
	document.getElementById("nav3").style.backgroundColor = "#444444";
	document.getElementById("nav4").style.backgroundColor = "#444444";
	document.getElementById("nav5").style.backgroundColor = "#444444";
	document.getElementById("nav6").style.backgroundColor = "#FFFFFF";
	document.getElementById("content1").style.display = "none";
	document.getElementById("content2").style.display = "none";
	document.getElementById("content3").style.display = "none";
	document.getElementById("content4").style.display = "none";
	document.getElementById("content5").style.display = "none";
	document.getElementById("content6").style.display = "block";
}

function init() {
	loadFlickrFeed()
	switch(window.location.hash) {
		case "#home":
			nav1click();
			break;
		case "#resume":
			nav2click();
			break;
		case "#projects":
			nav3click();
			break;
		case "#design":
			nav4click();
			break;
		case "#photography":
			nav5click();
			break;
		default:
			if (window.location.hash) { //for project hashes       
				nav3click();
			}
			else {
				nav1click();
			}
	}
}

function loadFlickrFeed() {
	$.ajax({
		url: 'https://www.flickr.com/services/feeds/photos_public.gne?id=130574536@N07&format=json',
		type: 'GET',
		dataType: 'jsonp',
		jsonpCallback: 'jsonFlickrFeed',
		success: function(result, status, xhr) {
			$.each(result.items, function (i, item) {			
				let thumb_link = item.media.m;
				let photo_link = thumb_link.replace("_m", "_b");
				
				var link = $("<a>").attr({
					href: photo_link,
					"data-lightbox": "Photos",
					title: item.title
				})
				var thumbnail = $("<img>").attr({
					"class": "photo-thumb",
					src: item.media.m
				})
			
				link.append(thumbnail);
				$("#content5").append(link)
				if (i === 17) {
					$("#content5").append("<br>")
					$("#content5").append($("<a>").attr({
						href: "https://www.flickr.com/photos/130574536@N07/",
						target: "_blank"
					}).text("More"))
					return false;
				}
			});
		},
		error: function(xhr, status, error) {
			console.log(xhr)
			$("#content5").html("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
		}
	});
}

document.addEventListener("DOMContentLoaded", init, false)