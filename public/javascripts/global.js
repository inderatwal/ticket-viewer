

/*
* this code is used to send a parameter in the url via the search  depending on which *   ticket is clicked 
* the id is then recieved by the server, and is returned to the next details page
*
*/
var id;
$(document).on('click', '.btn', function() {
        var temp=this.id;
        id=parseInt(temp);
        //pass clicked id as a paramater
	var parameters={ search : temp}
        //pass paramaters (id) into URL
	$.get('/',parameters,function(data){
		// change windows to the new details page
		window.location.href = '/details';
	});
	
	
		
});


/*
* each link is given its own onclick event, and it displays a different hidden div
* according to the button pressed, while hiding all other divs. 
* 
* this is the code used to navigate through each 25 tickets
*
*/


$(document).on('click', '.p1', function() {
	//displaying page 1, while hidding the rest
	document.getElementById("page1").style.display='block';
	document.getElementById("page2").style.display='none';
	document.getElementById("page3").style.display='none';
	document.getElementById("page4").style.display='none';
	// send to top after clicking and displaying next page.
	$('body').scrollTop(0);
	
		
});

$(document).on('click', '.p2', function() {
	//displaying page 2, while hidding the rest
	document.getElementById("page1").style.display='none';
	document.getElementById("page2").style.display='block';
	document.getElementById("page3").style.display='none';
	document.getElementById("page4").style.display='none';
	// send to top after clicking and displaying next page.
	$('body').scrollTop(0);
	
		
});


$(document).on('click', '.p3', function() {
 	//displaying page 3, while hidding the rest
 	document.getElementById("page1").style.display='none';
	document.getElementById("page2").style.display='none';
	document.getElementById("page3").style.display='block';
	document.getElementById("page4").style.display='none';
	// send to top after clicking and displaying next page.
	$('body').scrollTop(0);
	
		
});

$(document).on('click', '.p4', function() {
	//displaying page 4, while hidding the rest
	document.getElementById("page1").style.display='none';
	document.getElementById("page2").style.display='none';
	document.getElementById("page3").style.display='none';
	document.getElementById("page4").style.display='block';
	// send to top of page after clicking and displaying next page.
	$('body').scrollTop(0);
		
});


$(document).on('click', '.backbtn', function() {
        window.location.href = '/';
	});
	








// code to keep header table visible while scrolling, due to large number of tickets. 
$(window).scroll(function(e){ 
	var $el = $('#sticky'); 
	var isPositionFixed = ($el.css('position') == 'fixed');
	if ($(this).scrollTop() > 100 && !isPositionFixed){ 
		/*setting ccs variables to display sticky header 			created*/
		$('#sticky').css({'position': 'fixed', 'top': '0px','display':'block'}); 
	}
	if ($(this).scrollTop() < 100 && isPositionFixed)
	{
		/*setting ccs variables to hide sticky header 			when at top of page again */
		$('#sticky').css({'position': 'static', 'top': '0px', 'display':'none'}); 
	} 
});


