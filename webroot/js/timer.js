jQuery(document).ready( function(){

		var int = 0;
		var k = 0;
		var i = 0;	
								
	$('#clock1, .work').click( function(){
			
		var firstObj = new Date();	
		var sec = 0;

		var resHour,resMin, resSec;
		var resMin = "00";
		var minut = 0;
		var resHour = "00";
		var hour = 0;
				
				if ( int == 0 ) {	
					int = setInterval(function () {
													
										var curObj = new Date();
										var t = ( curObj.getTime() - firstObj.getTime() )-(sec*1000);		
		
										if ( t > 999 ) { 
											sec++; 
										}	
										
										
										i = k + sec;
										
										if ( i < 10 ) {
											resSec = '0' + i;
										} else if ( i >= 10 && i < 60 ) {
											resSec = i;
										} else if ( i == 60 ) {
											resSec = "00";
											sec = 0;
											i = 0;
											k = 0;
											firstObj = new Date();
											minut++;
										}
										
										if ( minut > 0 && minut < 10 ) {
											resMin = "0" + minut;
										} else if (minut >= 10 && minut < 60) {
											resMin = minut;
										} else if ( minut == 60 ) {
											resMin = "00";
											minut = 0;
											hour++;
										}
										
										if ( hour > 0 && hour < 10 ) {
											resHour = "0" + hour;
										} else if ( hour >= 10 && hour < 24 ) {
											resHour = hour;
										} else if ( hour == 24) {
											resHour = "00";
											hour = 0;
										}
										
							
										
										$('#clock1').html(resHour + ":" + resMin + ":"+ resSec);
						}	,80);
		
				}		
			}
	);
	
	$('#clock2, .rest').click( function(){
		
			 clearInterval(int);
			 k = i;
			 sec = 0;
			 int = 0;
			
		
	
	
	
	
	
	
	
	
	
	
	});	
	
	

				
});

function ttt(){
	alert('hiiii');
}

/*
var start=new Date();
var now=new Date();
ID= window.setTimeout("updateCountdown();",1000);
function updateCountdown(){
	now=new Date();
	diff=parseInt((now-start)/1000);
	if(diff<numSeconds){
		minutes=parseInt((numSeconds-diff)/60);
		seconds=(numSeconds-diff)-minutes*60;
			if(seconds<10)
				document.getElementById('countdown').innerHTML=minutes+":0"+seconds;
			else
				document.getElementById('countdown').innerHTML=minutes+":"+seconds;
				ID=window.setTimeout("updateCountdown();",1000);
	}else{
		alert("You have exceeded the time limit.");
		document.location.href=regurl+"?err=29";
	}
}
*/
function openWin(wUri, wName, wWidth, wHeight, Scroll, wMenu) {
	var scrollBars = (Scroll!=0) ? 1 : 0;
	var menuBars = (wMenu) ? 1 : 0;
	var positionLeft = (screen.width - wWidth)/2;
	var positionTop = (screen.height - wHeight)/2;
	var myW = window.open(wUri,wName,'width='+wWidth+',height='+wHeight+',top='+positionTop+',left='+positionLeft+',location=0,menubar='+menuBars+',resizable=0,scrollbars='+scrollBars+',status=0,titlebar=0,toolbar=0,directories=0,hotkeys=0')
	myW.focus();
}