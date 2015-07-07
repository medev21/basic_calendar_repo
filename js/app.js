//calendar 
function calendar(){
	var weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']		//weekDay array
	var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']		//month name array
	var date = new Date();		//start a new date object
	setTextDate('calendar-day', weekDay[date.getDay()]);		//call setTextDate function with two arguments, p tag id name and date type value
	setTextDate('calendar-date', date.getDate());
	setTextDate('calendar-month-year', month[date.getMonth()] + '  ' + (1900 + date.getYear()));		//must add 1900, get year returns 115
}

function setTextDate(idName, val){
	//if the date number is less than 10, add 0 before the number, date format
	if (val < 10 ) {
		val = "0" + String(val);
	}
	
	//store the new values in the p tag 
	document.getElementById(idName).innerHTML = val;
}

//load the changes when browser is ready
window.onload = calendar