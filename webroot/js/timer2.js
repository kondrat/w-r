jQuery(document).ready( function(){

				
		var secInt = 0;
		var interval;
		
		var typeInt = 'rest';
		var hourDay = 0;
		var grafClass = 'graf0';
		var nextHour = 0;
		var HourStat = new Array();
					
		var workStamp = 0;
		var workDelta = 0;
		var workTotal = 0;
		var workHour = 0;

		var restStamp = 0;
		var restDelta = 0;
		var restTotal = 0;
		var restHour = 0;
			

		var hourInt = 0;
		var graf = 0;
		var saveSumm = 0;


		var resSec = "00";
		var resMin = "00";
		var resHour = "00";
		var sec = 0;
		var minut = 0;
		var hour = 0;
		var k = 0;
		var i = 0;
		


		var resSec2 = "00";
		var resMin2 = "00";
		var resHour2 = "00";
		var sec2 = 0;
		var minut2 = 0;
		var hour2 = 0;
		var k2 = 0;
		var i2 = 0;	
		
	

	if ( $.cookie("the_cookie11") != null ) {
			
		 var cc = JSON.parse( $.cookie("the_cookie11") );


		 typeInt = cc.typeInt;
		 hourDay = cc.hourDay;
		 grafClass = cc.grafClass;
					
		 workStamp = cc.workStamp;
		 workDelta = cc.workDelta;
		 workTotal = cc.workTotal;
		 workHour = cc.workHour;

		 restStamp = cc.restStamp;
		 restDelta = cc.restDelta;
		 restTotal = cc.restTotal;
		 restHour = cc.restHour;
			

		 hourInt = cc.hourInt;
		 graf = cc.graf;
		 saveSumm  = cc.saveSumm;
		 saveCount = cc.saveCount;
		 
		 sec = cc.sec;
		 resSec = cc.resSec,
		 resMin = cc.resMin;
		 minut = cc.minut;
		 resHour = cc.resHour;
		 hour = cc.hour;
		 k = cc.k;
		 i = cc.i;
		
		 sec2 = cc.sec2;
		 resSec2 = cc.resSec2,
		 resMin2 = cc.resMin2;
		 minut2 = cc.minut2;
		 resHour2 = cc.resHour2;
		 hour2 = cc.hour2;
		 k2 = cc.k2;
		 i2 = cc.i2;			
	}
	

								
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
		
	if( typeInt == 'rest' ) {
			$('#clock2').css({'background-color' :'#ffd7d7'});
			$('#clock1').css({'background-color' :'#ffffff'});		
	} else if (typeInt == 'work' ) {
			$('#clock1').css({'background-color' :'#d2ffe9'});
			$('#clock2').css({'background-color' :'#ffffff'});		
	}
	
	$('#clock1').html(resHour + ":" + resMin + ":" + resSec );
	$('#clock2').html(resHour2 + ":" + resMin2 + ":"+ resSec2);
	

	
	grafon( workHour, restHour );

			$('.startInterval').click( function(){				
				var clockObj = new Date();
				interval = setInterval(function () {
													
								var curClockObj = new Date();	
										
								var increm = ( curClockObj.getTime() - clockObj.getTime() ) - (secInt*1000);		
		
								if ( increm > 999 ) { 
											secInt++;
											
											hourInt++;

											i++;
											i2++;
											
											graf++;
											saveSumm++;
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
										workTotal = parseInt(hour)*3600 + parseInt(minut)*60 + parseInt(i)*1;										
										
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
										restTotal = parseInt(hour2)*3600 + parseInt(minut2)*60 + parseInt(i2);									
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
										//alert(graf);
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
									graf = 0;
																			
									workHour = parseInt(workHour) + parseInt(workDelta);
									restHour = parseInt(restHour) + parseInt(restDelta);
									
									HourStat[hourDay] = new Array( workHour, restHour);
									//$('#test4').after('<p style="margin:0">'+HourStat[hourDay][0]+'</p>');
									
									grafon( workHour, restHour );
	
									
										
										
										
									//to del
											if ( check == 1 ) {
												$('.ultest').append('<li>'+ workDelta +' - ' + restDelta + ': <span style="font-weight: bold;'+ red +'">' + qq1 + ' - ' + qq2 + '</span>'+ ' - saveCount - '+ saveCount + '</li>');	
											}	
									//to del										
								}
	
								if ( saveSumm  == 40 ) {

									saveTime( workHour, restHour, nextHour);
									if ( nextHour == 1 ) {
										nextHour = 0;
									}
									saveSumm = 0;
								}
	
								if ( hourInt == 3600 ) {
									nextHour = 1;
									hourDay++;
									
									workHour = 0;
									restHour = 0;
																						
									var grafClass = '.graf'+hourDay;
									$('.grafWrapper').append(	'<div class="'+grafClass+' graf span-1" style="height: 10px; border: 2px solid #ccc; margin: 2px">'+
																							'<div class="hourWork" style="margin: 0; height: 10px; background-color: #95ffca; float: left;"></div>'+
																							'<div class="hourRest" style="margin: 0; height: 10px; background-color: #ff7d7d; float: left;"></div>'+
																						'</div>'
																		);																								
									hourInt = 0
							
								}	
											//to del								
										$('#test1').html('secInt :'+secInt+' hourInt: '+hourInt);
										$('#test4').html(workDelta + ' - ' + restDelta + ' - saveCount - '+ saveCount );										
										$('#test3').html('workHour: '+ workHour+' | restHour: '+ restHour + ' | saveCount : '+ saveCount );
										//
										
						}	,100);	
			});
					//to del;
					//$('#test4').after('<p style="margin:0">'+HourStat[hourDay][0]+'</p>');
					
						$(window).unload( function () {
								saveTime( workHour, restHour, nextHour);
												var varsObject = {		
																//'secInt': secInt,
																'typeInt': typeInt,
																'hourDay': hourDay,
																'grafClass': grafClass,
																			
																'workStamp': workStamp,
																'workDelta': workDelta,
																'workTotal': workTotal,
																'workHour': workHour,
														
																'restStamp': restStamp,
																'restDelta': restDelta,
																'restTotal': restTotal,
																'restHour': restHour,
																	
														
																'hourInt': hourInt,
																'graf': graf,
																'saveSumm': saveSumm, 
																'saveCount': saveCount,
														
											
																'sec': sec,
																'resSec':resSec,
																'resMin': resMin,
																'minut': minut,
																'resHour': resHour,
																'hour': hour,
																'k': k,
																'i': i,
																
																'sec2': sec2,
																'resSec2':resSec2,
																'resMin2': resMin2,
																'minut2': minut2,
																'resHour2': resHour2,
																'hour2':hour2,
																'k2': k2,
																'i2': i2,		
												};
												var myJSONText = JSON.stringify(varsObject);												
												var date2 = new Date();
												date2.setTime(date2.getTime() + (3 * 60 * 60 * 1000) );
												$.cookie("the_cookie11", myJSONText,{ expires: date2 } );	
						} );


	$('.stopInterval').click(function(){		
		clearInterval(interval);
		secInt = 0;
		clockObj = 0;
	})
	$(".startInterval").trigger('click');	
	
    $(".addPlus").mouseup(function(){
      $(this).append('<span style="color:#F00;"> | </span>');
    }).mousedown(function(){
      $(this).append('<span style="color:#00F;"> resMin2 : '+ resMin2 +' | minut2: ' + minut2+'</span>');
    });


			HourStat[0] = new Array();
			HourStat[0][0] = 3200;
			HourStat[0][1] = 400;
			HourStat[1] = new Array();
			HourStat[1][0] = 3200;
			HourStat[1][1] = 400;
			HourStat[2] = new Array();
			HourStat[2][0] = 3200;
			HourStat[2][1] = 400;
			HourStat.reverse();	


	$('.plusWork').click(function(){		
		clearInterval(interval);
		secInt = 0;
		clockObj = 0;
		var step = 600;
		
		//clocks
		if ( restTotal >= step) {
			workTotal = parseInt(workTotal) + step; 
			restTotal = parseInt(restTotal) - step;

		} else if ( restTotal < step ) {
			workTotal = parseInt(workTotal) + parseInt(restTotal);
			restTotal = 0;
		}
			workStamp = workTotal;
			restStamp = restTotal;
		
		
		//grafs
			

			
			for ( var i in HourStat ) {
				if ( ( parseInt(step) - parseInt(HourStat[i][1]) ) < 0 ) {
					HourStat[i][1] = HourStat[i][1] - step;
					HourStat[i][0] = parseInt(HourStat[i][0]) + parseInt(step);
					break;
				} else {
					step = step - parseInt(HourStat[i][1]);
					HourStat[i][0] = parseInt(HourStat[i][0]) + HourStat[i][1];
					HourStat[i][1] = 0;					
				}
				
				
			   
			} 
			 alert( HourStat );
			if ( restHour >= 0 ) {
				
				var hourTotalTime = parseInt(workHour) + parseInt(restHour);
				
				var newWorkHourDelta = ( hourTotalTime - parseInt(workHour) );
			
				if ( newWorkHourDelta >= 10 ) {
					workHour = ( parseInt(workHour) + 10 );
					restHour = parseInt(hourTotalTime) - parseInt(workHour);
				} else if ( newWorkHourDelta < 10 && newWorkHourDelta >= 0 ) {
					workHour = ( parseInt(workHour) + newWorkHourDelta );
					restHour = 0;
				}

				grafon( workHour, restHour );				
			}
 
 
 
 
 
 

			hour = parseInt(workTotal/3600);
			minut = parseInt( ( workTotal - (hour*3600) )/60 );
			i = workTotal - (hour*3600) - (minut*60);
			k = i;

			hour2 = parseInt(restTotal/3600);
			minut2 = parseInt( ( restTotal - (hour2*3600) )/60 );
			i2 = restTotal - (hour2*3600) - (minut2*60);
			k2 = i2;	
									//work
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
										
										
										//rest
										if ( i2 < 10 ) {
											resSec2 = '0' + i2;
										} else if ( i2 >= 10 && i2 < 60 ) {
											resSec2 = i2;
										} else if ( i2 == 60 ) {
											resSec2 = "00";											
											i2 = 0;
											minut2--;
										}
										
										if ( minut2 >= 0 && minut2 < 10 ) {
											resMin2 = "0" + minut2;
										} else if (minut2 >= 10 && minut2 < 60) {
											resMin2 = minut2;
										} else if ( minut2 == 60 ) {
											resMin2 = "00";
											minut2 = 0;
											hour2--;
										} 
										
										if ( hour2 >= 0 && hour2 < 10 ) {
											resHour2 = "0" + hour2;
										} else if ( hour2 >= 10 && hour2 < 24 ) {
											resHour2 = hour2;
										} else if ( hour2 == 24) {
											resHour2 = "00";
											hour2 = 0;
										}	
	
		
		
		$('#clock1').html(resHour + ":" + resMin + ":" + resSec );
		$('#clock2').html(resHour2 + ":" + resMin2 + ":"+ resSec2);		
		
	})
	
	$('.plusRest').click(function(){		
		clearInterval(interval);
		secInt = 0;
		clockObj = 0;

		
		
	})


				
});




var saveCount = 0;
function saveTime( workHour, restHour, nextHour ) {
		saveCount++;
		$.post(
			path + "/intervals/add",
			{"data[work]": workHour,"data[rest]":restHour,"data[nextHour]":nextHour },
					function(data){
						$('#test2').html(data.hi+' - '+data.hi2+' - '+data.hi3);
					},
					"json"
		);	
	
}

function grafon( workHour, restHour ) {
	
		workPS = Math.floor(workHour/36);
		restPS = Math.floor(restHour/36);
		
		if ( (parseInt(workPS) + parseInt(restPS)) > 100 ) {
			restPS = 100 - workPS;
		} else if (( parseInt(workPS) + parseInt(restPS)) >= 99 ) {
			restPS = 100 - workPS;
		}
		
		$('.hourWork:last').width( workPS+"%");
		$('.hourRest:last').width( restPS+"%");
		$('.graf:last').attr( { title: "Work: " + workPS+"% : Rest: "+restPS+"%" } );
}

function clockDisp ( ) {
	
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
	return (resHour + ":" + resMin + ":" + resSec );
			
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
