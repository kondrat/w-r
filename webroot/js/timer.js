jQuery(document).ready( function(){
	
		var clockObj = new Date();
		var secInt = 0;

		var restStamp = 0;
		var restDelta = 0;
		var restTotal = 0;
		
		var workStamp = 0;
		var workDelta = 0;
		var workTotal = 0;
	
		var loop = 0;
		var hourInt = 0;


		var resHour,resMin, resSec;
		var sec = 0;
		var resMin = "00";
		var minut = 0;
		var resHour = "00";
		var hour = 0;
		var int = 0;
		var k = 0;
		var i = 0;
		
		var resHour2,resMin2, resSec2;
		var sec2 = 0;
		var resMin2 = "00";
		var minut2 = 0;
		var resHour2 = "00";
		var hour2 = 0;
		var int2 = 0;
		var k2 = 0;
		var i2 = 0;		
								
	$('#clock1, .work').click( function(){
			 $('#clock1').css({'background-color' :'#d2ffe9'});
			 $('#clock2').css({'background-color' :'#ffffff'});
			clearInterval(int2);
			k2 = i2;
			sec2 = 0;
			int2 = 0;
			
		var firstObj = new Date();	

				
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
										
							
										
										$('#clock1').html(resHour + ":" + resMin + ":" + resSec );
										document.title = 'Work ' + resHour + ":" + resMin; 
										workTotal = parseInt(resHour)*60 + parseInt(resMin)*60 + parseInt(resSec);
										if ( save != 0 ) {
											workTotal = parseInt(workTotal) + 1;
										}
										
						}	,80);		
				}		
			}
	);
	
	$('#clock2, .rest').click( function(){
			$('#clock2').css({'background-color' :'#ffd7d7'});
			$('#clock1').css({'background-color' :'#ffffff'});
			clearInterval(int);
			k = i;
			sec = 0;
			int = 0;
			var firstObj2 = new Date();
							 
				if ( int2 == 0 ) {	
					int2 = setInterval(function () {
													
										var curObj2 = new Date();
										var t2 = ( curObj2.getTime() - firstObj2.getTime() )-(sec2*1000);		
		
										if ( t2 > 999 ) { 
											sec2++; 
										}	
										
										
										i2 = k2 + sec2;
										
										if ( i2 < 10 ) {
											resSec2 = '0' + i2;
										} else if ( i2 >= 10 && i2 < 60 ) {
											resSec2 = i2;
										} else if ( i2 == 60 ) {
											resSec2 = "00";
											sec2 = 0;
											i2 = 0;
											k2 = 0;
											firstObj2 = new Date();
											minut2++;
										}
										
										if ( minut2 > 0 && minut2 < 10 ) {
											resMin2 = "0" + minut2;
										} else if (minut2 >= 10 && minut2 < 60) {
											resMin2 = minut2;
										} else if ( minut2 == 60 ) {
											resMin2 = "00";
											minut2 = 0;
											hour2++;
										}
										
										if ( hour2 > 0 && hour2 < 10 ) {
											resHour2 = "0" + hour2;
										} else if ( hour2 >= 10 && hour2 < 24 ) {
											resHour2 = hour2;
										} else if ( hour2 == 24) {
											resHour2 = "00";
											hour2 = 0;
										}
										
							
										
										$('#clock2').html(resHour2 + ":" + resMin2 + ":"+ resSec2);
										document.title = 'Rest ' + resHour2 + ":" + resMin2;
										restTotal = parseInt(resHour2)*60 + parseInt(resMin2)*60 + parseInt(resSec2);
										if ( save != 0 ) {
											restTotal = parseInt(restTotal) + 1;
										}
						}	,80);		
				}				
	
	});	
	
	
	$("#clock2").trigger('click');



		
					setInterval(function () {
													
										var curClockObj = new Date();
										
										var test1 = ( curClockObj.getTime() - clockObj.getTime() ) - (secInt*1000);		
		
										if ( test1 > 999 ) { 
											secInt++;
											hourInt++;
											loop++;
										}	
										
										if ( loop == 10) {
											if ( hourInt == 3600 ) {
												hourInt = 0;
												//alert('new Hour');
											}
											//secInt = 0;
											loop = 0;
											restDelta = parseInt(restTotal) - parseInt(restStamp);											
											restStamp = restTotal;
											
											workDelta = parseInt(workTotal) - parseInt(workStamp);											
											workStamp = workTotal;
											
											if ( restDelta < 0 || restDelta > 11 ) {
												alert( 'restDelta ' + restDelta);
											}

											if ( workDelta < 0 || workDelta > 11 ) {
												alert( 'workDelta ' + workDelta);
											}
																																	
											//curClockObj = 0;
											//clockObj = new Date();
											saveTime( workDelta, restDelta);
		 
												
													
										}
										
																			
										$('#test1').html(secInt);
										$('#test4').html(workDelta + ' - ' + restDelta + ' - save - '+ save);
										$('#test3').html(loop);
						}	,80);	
	


						$(window).unload( function () {
							 saveTime( workDelta, restDelta); 
						} );

				
});

var save = 0;
function saveTime( workDelta,  restDelta ) {
	//alert(workDelta + ' - ' + restDelta);
		save++;
		$.post(
			path + "/intervals/add",
			{"data[work]": workDelta,"data[rest]":restDelta },
					function(data){
						$('#test2').html(data.hi+' - '+data.hi2+' - '+data.hi3);
					},
					"json"
		);	
	
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




jQuery(document).ready( function(){


	
	
	$('.addInterval').click(function(){
		var clock1 = $('#clock1').html();
		var clock2 = $('#clock2').html();
    		$.post(
	    		path + "/intervals/add",
	    		{"data[work]": clock1,"data[rest]":clock2 },
	        	function(data){
								$('#test2').html(data.hi+' - '+data.hi2+' - '+data.hi3);
	          	},
	          	"json"
          	);			 

	})
	
	
	
});

