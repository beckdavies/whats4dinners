// get today's date
var today = new Date();
var menu_week;
var next;
var range_start;
var range_end;

var map_data = [ 
	
	{week : '2', start: '11/05/2018', end: '11/11/2018', next: '3'},
	{week : '3', start: '11/12/2018', end: '11/18/2018', next: '1'},
	{week : '1', start: '11/19/2018', end: '11/25/2018', next: '2'},
	{week : '2', start: '11/26/2018', end: '12/02/2018', next: '3'},
	{week : '3', start: '12/03/2018', end: '12/09/2018', next: '1'},
	{week : '1', start: '12/10/2018', end: '12/16/2018', next: '2'},
	{week : '2', start: '12/17/2018', end: '12/23/2018', next: 'h'},
	{week : 'h', start: '12/24/2018', end: '12/30/2019', next: '3'},
	{week : 'h', start: '12/31/2018', end: '01/06/2019', next: '3'},
	{week : '3', start: '01/07/2019', end: '01/13/2019', next: '1'},
	{week : '1', start: '01/14/2019', end: '01/20/2019', next: '2'},
	{week : '2', start: '01/21/2019', end: '01/27/2019', next: '3'},
	{week : '3', start: '01/28/2019', end: '02/03/2019', next: '1'},
	{week : '1', start: '02/04/2019', end: '02/10/2019', next: '2'},
	{week : '2', start: '02/11/2019', end: '02/17/2019', next: '2'},
	{week : '3', start: '02/18/2019', end: '02/24/2019', next: 'h'},
	{week : 'h', start: '02/25/2019', end: '02/04/2019', next: '1'},
	{week : '1', start: '03/04/2019', end: '03/10/2019', next: '2'},
	{week : '2', start: '03/11/2019', end: '03/17/2019', next: '3'},
	{week : '3', start: '03/18/2019', end: '03/24/2019', next: '1'},
	{week : '1', start: '03/25/2019', end: '03/31/2019', next: '2'},
	{week : '2', start: '04/01/2019', end: '04/07/2019', next: '3'},
	{week : '3', start: '04/08/2019', end: '04/14/2019', next: 'h'},
	{week : 'h', start: '04/15/2019', end: '04/21/2019', next: '1'},
	{week : 'h', start: '04/22/2019', end: '04/28/2019', next: '1'},
	{week : '1', start: '04/29/2019', end: '05/05/2019', next: '2'},
	{week : '2', start: '05/06/2019', end: '05/12/2019', next: '3'},
	{week : '3', start: '05/13/2019', end: '05/19/2019', next: '1'},
	{week : '1', start: '05/20/2019', end: '05/26/2019', next: 'h'},
	{week : 'h', start: '05/27/2019', end: '06/02/2019', next: '2'},
	{week : '2', start: '06/03/2019', end: '06/09/2019', next: '3'},
	{week : '3', start: '06/10/2019', end: '06/16/2019', next: '1'},
	{week : '1', start: '06/17/2019', end: '06/23/2019', next: '2'},
	{week : '2', start: '06/24/2019', end: '06/30/2019', next: '3'},
	{week : '3', start: '07/01/2019', end: '07/07/2019', next: '1'},
	{week : '1', start: '07/08/2019', end: '07/14/2019', next: '2'},
	{week : '2', start: '07/15/2019', end: '07/21/2019', next: '0'},
];

// for each item in the array

map_data.forEach(function(el, index) {
    
    // assign the start date to a variable
    range_start = new Date(el.start);

    // assign the end date to a variable
    range_end = new Date(el.end);
    
    // console.log('s '+ range_start+ '\n' + 'e ' + range_end+ '\n'+el.week);

    // see if the current date falls in the range between the start and the end date
	// if it does, set the current week to the wekk variable

    if(today > range_start && today < range_end) {
        menu_week = 'week' + el.week;
        console.log(today + ':' + menu_week);
        
        if(menu_week == 'weekh') {
        	menu_week = 'week' + el.next;
        	console.log('today is a holiday. when they go back it will be '+menu_week);
        	document.getElementById(menu_week).click();
        } else {
			document.getElementById(menu_week).click();
        }

    };

});
