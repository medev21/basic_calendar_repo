//calendar 
function calendar(){
	var date = new Date();
	setTextDate('calendar-day', date.getDate());
}

function setTextDate(valId, val){
	document.getElementById(valId).innerHTML = val;
}

window.onload = calendar