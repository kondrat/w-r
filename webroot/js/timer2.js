jQuery(document).ready( function(){
	/*
		var clockObj = new Date();
		var secInt = 0;
		var typeInt = 'rest';
		var hourDay = 0;
		var grafClass = 'graf0';
		var nextHour = 0;
					
		var workStamp = 0;
		var workDelta = 0;
		var workTotal = 0;
		var hourWork = 0;

		var restStamp = 0;
		var restDelta = 0;
		var restTotal = 0;
		var hourRest = 0;
			

		var hourInt = 0;
		var graf = 0;


		var resHour,resMin, resSec;
		var sec = 0;
		var resMin = "00";
		var minut = 0;
		var resHour = "00";
		var hour = 0;
		var k = 0;
		var i = 0;
		
		var resHour2,resMin2, resSec2;
		var sec2 = 0;
		var resMin2 = "00";
		var minut2 = 0;
		var resHour2 = "00";
		var hour2 = 0;
		var k2 = 0;
		var i2 = 0;	
		
	*/	

	$.cookie("the_cookie", "the_value111");
								
	$('#clock1, .work').click( function(){
		
			$('#clock1').css({'background-color' :'#d2ffe9'});
			$('#clock2').css({'background-color' :'#ffffff'});

			typeInt = 'work';
			i = k;
			
	});
	
	$('#clock2, .rest').click( function(){
			$('#clock2').css({'background-color' :'#ffd7d7'});
			$('#clock1').css({'background-color' :'#ffffff'});
				
			typeInt = 'rest';
			i2 = k2;
	});	

	
				var interval = setInterval(function () {
													
										var curClockObj = new Date();
										nextHour = 0;	
										
										var test1 = ( curClockObj.getTime() - clockObj.getTime() ) - (secInt*1000);		
		
										if ( test1 > 999 ) { 
											secInt++;
											
											hourInt++;

											i++;
											i2++;
											
											graf++;
										}
										
								if ( typeInt == 'work' ) {			
										k = i;										
										if ( i < 10 ) {
											resSec = '0' + i;
										} else if ( i >= 10 && i < 60 ) {
											resSec = i;
										} else if ( i == 60 ) {
											resSec = "00";
											i = 0;
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
										workTotal = parseInt(hour)*60 + parseInt(minut)*60 + parseInt(i)*1;										
										
									}	
										
								if ( typeInt == 'rest' ) {	
										k2 = i2;
										
										if ( i2 < 10 ) {
											resSec2 = '0' + i2;
										} else if ( i2 >= 10 && i2 < 60 ) {
											resSec2 = i2;
										} else if ( i2 == 60 ) {
											resSec2 = "00";											
											i2 = 0;
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
										restTotal = parseInt(hour2)*60 + parseInt(minut2)*60 + parseInt(i2);									
								}											
										

	
												if ( hourInt == 3600 ) {
												
												nextHour = 1;
												
												hourDay++;
												
												hourWork = 0;
												hourRest = 0;
																									
												var grafClass = '.graf'+hourDay;
												$('.grafWrapper').append(	'<div class="'+grafClass+' graf span-1" style="height: 10px; border: 2px solid #ccc; margin: 2px">'+
																										'<div class="hourWork" style="margin: 0; height: 10px; background-color: #95ffca; float: left;"></div>'+
																										'<div class="hourRest" style="margin: 0; height: 10px; background-color: #ff7d7d; float: left;"></div>'+
																									'</div>'
																					);																								
												hourInt = 0
										
											}												
																				
											if ( graf == 20 ) {
												
												workDelta = parseInt(workTotal) - parseInt(workStamp);											
												workStamp = workTotal;
																							
												restDelta = parseInt(restTotal) - parseInt(restStamp);											
												restStamp = restTotal;												
												
											//to del
												var qq1 = workDelta; 
												var qq2 = restDelta;	
														
												var red = 'color: blue';
												var check = 0;
											//to del
													
												if ( restDelta < 0 || restDelta > graf ) {
													//to del
													red = 'color: red';
													check = 1;											
													if ( workDelta < 0 || workDelta > graf ) {
														workDelta = 0;
														restDelta = 0;
													} else {
														restDelta = graf - workDelta;
													}												
												} else if (workDelta < 0 || workDelta > graf) {
													//to del
													red = 'color: red';
													check = 1;
														workDelta = graf - restDelta;			
												} else {
													workDelta = graf - restDelta;												
												}
	
																						
												hourWork = parseInt(hourWork) + parseInt(workDelta);
												hourRest = parseInt(hourRest) + parseInt(restDelta);
												
												
												saveTime( hourWork, hourRest, nextHour);													
												
												
												
												
												var workPS = Math.floor(hourWork/36);
												var restPS = Math.floor(hourRest/36);
												
												if ( (parseInt(workPS) + parseInt(restPS)) > 100 ) {
													restPS = 100 - workPS;
												} else if (( parseInt(workPS) + parseInt(restPS)) >= 99 ) {
													restPS = 100 - workPS;
												}
											

												
												$('.hourWork:last').width( workPS+"%");
												$('.hourRest:last').width( restPS+"%");
												$('.graf:last').attr( { title: "Work: " + workPS+"% : Rest: "+restPS+"%" } );
												
												graf = 0;	
												//to del
														if ( check == 1 ) {
															$('.ultest').append('<li>'+ workDelta +' - ' + restDelta + ': <span style="font-weight: bold;'+ red +'">' + qq1 + ' - ' + qq2 + '</span>'+ ' - save - '+ save + ' - graf - '+ graf + '</li>');	
														}	
												//to del										
											}


											//to del								
										$('#test1').html(secInt);
										$('#test4').html(workDelta + ' - ' + restDelta + ' - save - '+ save );										
										$('#test3').html('hourWork: '+ hourWork+' - hourRest: '+ hourRest + ' - save - '+ save );
										
						}	,100);	
	


						$(window).unload( function () {
							 saveTime( hourWork, hourRest, nextHour);
						} );


	$('.addInterval').click(function(){		
		clearInterval(interval);
		//alert('clear');
	})

				
});



var save = 0;
function saveTime( workDelta,  restDelta, nextHour ) {
		save++;
		$.post(
			path + "/intervals/add",
			{"data[work]": workDelta,"data[rest]":restDelta,"data[nextHour]":nextHour },
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
		
		/*
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
			*/
	})
	
	
	
});

