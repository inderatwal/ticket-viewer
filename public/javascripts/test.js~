

var id;
$(document).on('click', '.btn', function() {
        var temp=this.id;
        id=parseInt(temp);
	var parameters={ search : temp};
	$.get('/',parameters,function(data){
		alert('this somehow worked');
		window.location.href = '/details';
	});
	
	
		
});

$("#p1").click( function(){
  document.getElementById("page1").style.display='block';
  document.getElementById("page2").style.display='none';
  document.getElementById("page3").style.display='none';
  document.getElementById("page4").style.display='none';
 $('body').scrollTop(0);
  
});
$("#p2").click( function(){
  document.getElementById("page1").style.display='none';
  document.getElementById("page2").style.display='block';
  document.getElementById("page3").style.display='none';
  document.getElementById("page4").style.display='none';
  $('body').scrollTop(0);
  
});
$("#p3").click( function(){
  document.getElementById("page1").style.display='none';
  document.getElementById("page2").style.display='none';
  document.getElementById("page3").style.display='block';
  document.getElementById("page4").style.display='none';
  $('body').scrollTop(0);
});
$("#p4").click( function(){
  document.getElementById("page1").style.display='none';
  document.getElementById("page2").style.display='none';
  document.getElementById("page3").style.display='none';
  document.getElementById("page4").style.display='block';
  $('body').scrollTop(0);
});





