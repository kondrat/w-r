jQuery(document).ready( function(){

	$('#clock1, div.work2 span').click( function(){
		
			if (!interval) {
				$(".startInterval").trigger('click');
			}
				$('#clock1 .clockBackground').css({'background-color' : colorProjectId });
				$('#clock2 .clockBackground').css({'background-color' : '#fff' });
				$('.work span').css({'font-size':'100%','border-bottom':'3px solid #ccc'});
				$('.rest span').css({'font-size':'85%','border-bottom':'8px solid #ccc'});
				
				$('.minusRest, .minusRestUndo').css({'display':'none'});	
				$('.minusWork').css({'display':'block'});		
				
			if ( typeInt != 'work') {
				nextInterval = 1;
				typeInt = 'work';	
				sec1Cur = 0;
				$('.clock1Current').html('00:00:00');		
			}	
	
	});
	
	$('#clock2, div.rest2 span').click( function(){
			if (!interval) {
				$(".startInterval").trigger('click');
			}		
				if (typeInt != 'rest' || typeof HourStat[0][0] == 'undefined') {				
				$('#clock1 .clockBackground').css({'background-color' : '#fff' });
				$('#clock2 .clockBackground').css({'background-color' : 'red' });
				$('.work span').css({'font-size':'85%','border-bottom':'8px solid #ccc'});
				$('.rest span').css({'font-size':'100%','border-bottom':'3px solid #ccc'});
				
				$('.minusRest').css({'display':'block'});
				$('.minusWork').css({'display':'none'});
				

				nextInterval = 1;	
				typeInt = 'rest';
				sec2Cur = 0;
				$('.clock2Current').html('00:00:00');	
			}
	});



	//after loading ini	
	if( typeInt == 'rest' ) {
			$('#clock2 .clockBackground').css({'background-color' : 'red' });
			$('#clock1').css({'background-color' :'#ffffff'});
			$('.minusRest').css({'display':'block'});	
			$('.minusWork').css({'display':'none'});	
	} else if (typeInt == 'work' ) {
			$('#clock1 .clockBackground').css({'background-color' : colorProjectId });
			$('#clock2 .clockBackground').css({'background-color' : '#fff' });	
			$('.minusRest').css({'display':'none'});
			$('.minusWork').css({'display':'block'});		
	}
	$('#clock1 span').html(timer(workTotal));
	$('#clock2 span').html(timer(restTotal));
	$('.clock1Current').html(timer(sec1Cur));
	$('.clock2Current').html(timer(sec2Cur));

	//Here we starting of the interval
	//---------------------------------------------------------
			$('.startInterval').click( function(){	
				//central button
				$('.startInterval').css({'display':'none'});
				$('.stopInterval').css({'display':'inline'});
								
				//prepering of the array after correction
				if ( correction == 1 ) {
					HourStatCorrection();					
					$('.minusRestData').addClass('hide').text('');
					totalMinus = 0;										
				}

				var clockObj = new Date();
				interval = setInterval(function () {
													
								var curClockObj = new Date();	
										
								var increm = ( curClockObj.getTime() - clockObj.getTime() ) - (secInt*1000);		
		
								if ( increm > 999 ) { 
											secInt++;										
											hourInt++;										
											graf++;
											saveSumm++;
										
										if ( typeInt == 'work' ) {	
												workTotal++;		
												sec1Cur++; 
												var wT = timer(workTotal);
												$('#clock1 span').html(wT);
												document.title = 'Work ' + wT;
												$('.clock1Current').html(timer(sec1Cur));	
											}	
												
										if ( typeInt == 'rest' ) {
												restTotal++;	
												sec2Cur++;
												var wT2 = timer(restTotal);
												$('#clock2 span').html(wT2);
												document.title = 'Rest ' + wT2;
												$('.clock2Current').html(timer(sec2Cur));	
										}
									
								}
										
									
										
								if( nextInterval == 1 && correction != 1) {
									nextInterval = 0;
									
									workDelta = parseInt(workTotal) - parseInt(workStamp);											
									restDelta = parseInt(restTotal) - parseInt(restStamp);											
																			
									workStamp = workTotal;
									restStamp = restTotal;	
									
									if ( typeof HourStat[hourDay][0] == 'undefined' ) {
										HourStat[hourDay].push( new Array(0,typeInt,projectId,colorProjectId) );
										grafon3(HourStat);									
									} else {
										
																		
										var Delta1 = 0;
										if ( HourStat[hourDay][HourStat[hourDay].length - 1 ][1] == 'work' ) {
											//Delta1 = workDelta;
											Delta1 = sec1Cur;
										} else if ( HourStat[hourDay][HourStat[hourDay].length - 1 ][1] == 'rest' ) {
											//Delta1 = restDelta;
											Delta1 = sec2Cur;
										}	
										
										
										var temp1 = HourStat[hourDay].pop();									
										temp1[0] = temp1[0] + Delta1;
										if( temp1[0] > 4 ) {									
											HourStat[hourDay].push(temp1);
											HourStat[hourDay].push( new Array(0,typeInt,projectId,colorProjectId) );
										} else {
											if ( typeof HourStat[hourDay][0] == 'undefined' ) {//new intreval instead of the previous short one
												HourStat[hourDay].push( new Array(0,typeInt,projectId,colorProjectId) );	
												HourStat[hourDay][HourStat[hourDay].length - 1 ][0] += temp1[0];						
											} else {										 											
												
												 	if( HourStat[hourDay][HourStat[hourDay].length - 1 ][1] == temp1[1] ) { //from work to work												 														 		
														HourStat[hourDay].push( new Array(temp1[0],typeInt,projectId) );
													} else { // from work to rest
														HourStat[hourDay][HourStat[hourDay].length - 1 ][0] += temp1[0];																										
													}
													
											}
											if( HourStat[hourDay][HourStat[hourDay].length - 1 ][1] != temp1[1] )clockCorrection( temp1[0], temp1[1]);	 																																																											
										}																																						
									}
									
									grafon3(HourStat);
														
								}	else if ( nextInterval == 1 && correction == 1 ) {
									HourStat[hourDay].push( new Array(0,typeInt,projectId,colorProjectId) );										
									grafon3(HourStat);									
								}	
								
								//flags down
								nextInterval = 0;	
								correction = 0;
								projectClicked = 0;
								nextHour = 0;
																				
								if ( graf == 5 ) {
																	
									graf = 0;
									
										workDelta = parseInt(workTotal) - parseInt(workStamp);																					
										restDelta = parseInt(restTotal) - parseInt(restStamp);
										
										workStamp = workTotal;											
										restStamp = restTotal;	
																			 		
									var Delta = 0;
									if ( typeInt == 'rest' ) {
										Delta = restDelta;
									} else if ( typeInt == 'work' ) {
										Delta = workDelta;
									}											

									
									var temp2 = HourStat[hourDay].pop();
									temp2[0] = parseInt(temp2[0]) + parseInt(Delta);									
									HourStat[hourDay].push(temp2);																			
									grafon3(HourStat);
									//stat
									if ( 100 > 10 ) {
										var nnnT = '';
										
										$.each(HourStat, function() {
											var bbb2 = 0;
											nnnT += '<div style="border:1px solid;padding: 5px;">';		 
											$.each(this, function() {	
												var bbb1;
											
												$.each(this, function() {
													if ( !isNaN(parseInt(this)) ) {
														bbb1 = parseInt(this)*100/HourCalc;
														bbb2 += bbb1;
													}
												});
																				
													nnnT += this + " : <br /><b>"+ bbb1 + "</b><hr />";									
											});
											nnnT += "</div><i style='color:red'>"+bbb2+"</i><hr />";							
										});
									}
									$('#hourstat').html(nnnT);
															
								}//graf
	
								if ( saveSumm  == 10 ) {									
									//to create json text.
									var HourStatJSONText = JSON.stringify(HourStat);
									
									saveTime2( HourStatJSONText );

									saveSumm = 0;
								}
	
								if ( hourInt == HourCalc ) {
									nextHour = 1;
									nextInterval = 1;
									hourDay++;
								 	HourStat[hourDay] = new Array();
								 	
									grafon3(HourStat);	
									hourInt = 0
								}	
						}	,100);	
			});

					
		$(window).unload( function () {
				if ( correction == 1 ) {
					HourStatCorrection();
				}						
				//saveTime( HourStat[hourDay][0][0][0], HourStat[hourDay][1], nextHour);
								var varsObject = {		
												'typeInt': typeInt,
												'hourDay': hourDay,
												
												'projectId': projectId,
												'projectName':projectName,
												'colorProjectId':colorProjectId,
															
												'workStamp': workStamp,
												'workDelta': workDelta,
												'workTotal': workTotal,
												'sec1Cur': sec1Cur,
										
												'restStamp': restStamp,
												'restDelta': restDelta,
												'restTotal': restTotal,
												'sec2Cur': sec2Cur,
																							
												'hourInt': hourInt,
												'graf': graf,
												'saveSumm': saveSumm, 
										
												/*
												'sec': sec,
												'resSec':resSec,
												'resMin': resMin,
												'minut': minut,
												'resHour': resHour,
												'hour': hour,
												
												'sec2': sec2,
												'resSec2':resSec2,
												'resMin2': resMin2,
												'minut2': minut2,
												'resHour2': resHour2,
												'hour2':hour2,
												*/	
								};
								var iniVarsJSONText = JSON.stringify(varsObject);	
								//setting of the time offset for cookie (3hour ex.);											
								var dateExp = new Date();	
								dateExp.setTime( dateExp.getTime() + parseInt(cookieLive) );
								//vars cookie setting
								$.cookie("IniVars", iniVarsJSONText,{ expires: dateExp } );	
								//hourStat cookie saving
								var HourStatJSONText = JSON.stringify(HourStat);
								$.cookie("HourStat", HourStatJSONText,{ expires: dateExp } );	
								//alert($.cookie("HourStat"));
		} );


	$('.stopInterval').click(function(){		
		clearInterval(interval);
		secInt = 0;
		clockObj = 0;
		$('.startInterval').css({'display':'inline'});
		$(this).css({'display':'none'});
		interval = false;

	})
	
	//if we want to start int after loading
	//$(".startInterval").trigger('click');	


//misc

	$('.delCookie').click(function(){
		clearInterval(interval);
		$.cookie("HourStat",null);
		$.cookie("IniVars",null);
		if ( 100 > 0 ) {			
			secInt = 0;
			//interval;
			
			typeInt = 'rest';
			hourDay = 0;
			grafClass = 'graf0';
			nextHour = 0;
			HourStat = new Array();
			HourStat[0] = new Array();
			projectId = undefined;
						
			workStamp = 0;
			workDelta = 0;
			workTotal = 0;
			sec1Cur = 0;			
	
			restStamp = 0;
			restDelta = 0;
			restTotal = 0;
			sec1Cur = 0;

	
			hourInt = 0;
			graf = 0;
			saveSumm = 0;
	
			/*
			 resSec = "00";
			 resMin = "00";
			 resHour = "00";
			 sec = 0;
			 minut = 0;
			 hour = 0;
			 sec = 0;

			 resSec2 = "00";
			 resMin2 = "00";
			 resHour2 = "00";
			 sec2 = 0;
			 minut2 = 0;
			 hour2 = 0;
			 sec2 = 0;
			 */	
			
		}
		location.reload();
			
	})
				
});