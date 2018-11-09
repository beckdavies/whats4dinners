
var today = new Date();


var day = today.getDay();
console.log(today, day);

// get today's date
var d = new Date();

// check whether today's date is within a range
var map_data = { 
	'Week 1': {
		'1':{
			'start': '19/11/2018',
			'end': '25/11/2018'
		},
		'2':{
			'start': '10/12/2018',
			'end': '16/12/2018'
		},
		'3':{
			'start': '14/01/2019',
			'end': '20/01/2019'
		},
		'4':{
			'start': '04/02/2019',
			'end': '10/02/2019'
		},
		'5':{
			'start': '04/03/2019',
			'end': '10/03/2019'
		},
		'6':{
			'start': '25/03/2019',
			'end': '31/03/2019'
		},
		'7':{
			'start': '29/04/2019',
			'end': '05/05/2019'
		},
		'8':{
			'start': '20/05/2019',
			'end': '26/05/2019'
		},
		'9':{
			'start': '17/06/2019',
			'end': '23/06/2019'
		},
		'10':{
			'start': '08/07/2019',
			'end': '14/07/2019'
		}
		
	},
	'Week 2': {
		'1':{
			'start': '05/11/2018',
			'end': '11/11/2018'
		},
		'2':{
			'start': '26/11/2018',
			'end': '02/12/2018'
		},
		'3':{
			'start': '17/12/2018',
			'end': '23/12/2018'
		},
		'4':{
			'start': '21/01/2019',
			'end': '27/01/2019'
		},
		'5':{
			'start': '11/02/2019',
			'end': '17/02/2019'
		},
		'6':{
			'start': '11/03/2019',
			'end': '17/03/2019'
		},
		'7':{
			'start': '06/05/2019',
			'end': '12/05/2019'
		},
		'8':{
			'start': '03/06/2019',
			'end': '09/06/2019'
		},
		'9':{
			'start': '24/06/2019',
			'end': '30/06/2019'
		},
		'10':{
			'start': '15/07/2019',
			'end': '21/07/2019'
		},
		
	},
	'Week 3': {
		'1':{
			'start': '12/11/2018',
			'end': '18/11/2018'
		},
		'2':{
			'start': '03/12/2018',
			'end': '09/12/2018'
		},
		'3':{
			'start': '07/01/2019',
			'end': '13/05/2019'
		},
		'4':{
			'start': '28/01/2019',
			'end': '03/02/2019'
		},
		'5':{
			'start': '18/02/2019',
			'end': '24/02/2019'
		},
		'6':{
			'start': '18/03/2019',
			'end': '24/03/2019'
		},
		'7':{
			'start': '08/04/2019',
			'end': '14/04/2019'
		},
		'8':{
			'start': '13/05/2019',
			'end': '19/05/2019'
		},
		'9':{
			'start': '10/06/2019',
			'end': '16/06/2019'
		},
		'7':{
			'start': '01/07/2019',
			'end': '07/07/2019'
		},
		
	},
	'Holidays': {
		'1':{
			'start': '24/12/2018',
			'end': '06/01/2019'
		},
		'2':{
			'start': '25/02/2019',
			'end': '03/03/2019'
		},
		'3':{
			'start': '15/04/2019',
			'end': '28/04/2019'
		},
		'4':{
			'start': '27/05/2019',
			'end': '02/06/2019'
		}
		
	}

};

// check the week that the date is in
// for 
// show the menu for the week
// get the day of the week
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("demo").innerHTML = days[d.getDay()];

//highlight the day today
var 


