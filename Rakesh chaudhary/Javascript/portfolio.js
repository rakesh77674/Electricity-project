// Display navbar when top scroll is greater than 50
window.onscroll = function viewScrollTopIcon(){
	var scrollPosY = window.pageYOffset;
	var scrollTopIcon = document.getElementById("scrollTop");
	if(scrollPosY > 60) {
  		scrollTopIcon.style.visibility = "visible";
	} 
	else {
 		scrollTopIcon.style.visibility =  "hidden";
	}
}