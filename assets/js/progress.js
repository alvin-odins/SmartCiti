function progress() {
	var targetElem = document.getElementById("determinate");
	var width = 1;
	var id = setInterval(frame, 1000);
	function frame(){
		if (width >= 100) {
			clearInterval(id);
		} else {
			width++;
			targetElem.width = width + '%';
		}
	}
}