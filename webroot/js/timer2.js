jQuery(document).ready( function(){
							
	$('#clock1, div.work2 span').click( function(){
		
			if (!interval) {
				$(".startInterval").trigger('click');
			}
				$('#clock1 .clockBackground').css({'background-color' : workBackground });
				$('#clock2 .clockBackground').css({'background-color' : '#fff' });
				$('.work span').css({'font-size':'100%','border-bottom':'3px solid #ccc'});
				$('.rest span').css({'font-size':'85%','border-bottom':'8px solid #ccc'});
				
				$('.minusRest, .minusRestUndo').css({'display':'none'});	
				$('.minusWork').css({'display':'block'});		
				
			if ( typeInt != 'work') {									
				//to fix!!! wrong!!!
				projectId = $('.myProject:first').attr("id");
	
				nextInterval = 1;
				typeInt = 'work';		
			}			
	});
	
	$('#clock2, div.rest2 span').click( function(){
			if (!interval) {
				$(".startInterval").trigger('click');
			}		
				if (typeInt != 'rest' || typeof HourStat[0][0] == 'undefined') {				
				//$('#clock1').css({'background-color' :'#ffffff'});
				$('#clock1 .clockBackground').css({'background-color' : '#fff' });
				//$('#clock2').css({'background-color' :'#ffd7d7'});
				$('#clock2 .clockBackground').css({'background-color' : 'red' });
				$('.work span').css({'font-size':'85%','border-bottom':'8px solid #ccc'});
				$('.rest span').css({'font-size':'100%','border-bottom':'3px solid #ccc'});
				
				$('.minusRest').css({'display':'block'});
				$('.minusWork').css({'display':'none'});
				
				//projectId = 'rest_1';
				nextInterval = 1;	
				typeInt = 'rest';

			}
	});



	//after loading ini	
	if( typeInt == 'rest' ) {
			//$('#clock2').css({'background-color' :'#ffd7d7'});
			$('#clock2 .clockBackground').css({'background-color' : 'red' });
			$('#clock1').css({'background-color' :'#ffffff'});
			$('.minusRest').css({'display':'block'});	
			$('.minusWork').css({'display':'none'});	
	} else if (typeInt == 'work' ) {
			//$('#clock1').css({'background-color' : workBackground });
			$('#clock1 .clockBackground').css({'background-color' : workBackground });
			$('#clock2 .clockBackground').css({'background-color' : '#fff' });
			//$('#clock2').css({'background-color' :'#ffffff'});	
			$('.minusRest').css({'display':'none'});
			$('.minusWork').css({'display':'block'});		
	}
	
	$('#clock1 span').html(resHour + ":" + resMin + ":" + resSec );
	$('#clock2 span').html(resHour2 + ":" + resMin2 + ":"+ resSec2);

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
												sec++;
																				
												if ( sec < 10 ) {
													resSec = '0' + sec;
												} else if ( sec >= 10 && sec < 60 ) {
													resSec = sec;
												} else if ( sec == 60 ) {
													resSec = "00";
													sec = 0;
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
																								
												$('#clock1 span').html(resHour + ":" + resMin + ":" + resSec );
												document.title = 'Work ' + resHour + ":" + resMin; 
								
												
											}	
												
										if ( typeInt == 'rest' ) {
												restTotal++;	
												sec2++;
												
												if ( sec2 < 10 ) {
													resSec2 = '0' + sec2;
												} else if ( sec2 >= 10 && sec2 < 60 ) {
													resSec2 = sec2;
												} else if ( sec2 == 60 ) {
													resSec2 = "00";											
													sec2 = 0;
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
												
												
												$('#clock2 span').html(resHour2 + ":" + resMin2 + ":"+ resSec2);
												document.title = 'Rest ' + resHour2 + ":" + resMin2;
								
										}

									
								}
										
									
										
								if( nextInterval == 1 && correction != 1) {
									nextInterval = 0;
									
									workDelta = parseInt(workTotal) - parseInt(workStamp);											
									restDelta = parseInt(restTotal) - parseInt(restStamp);											
																			
									workStamp = workTotal;
									restStamp = restTotal;	
									
									if ( typeof HourStat[hourDay][0] == 'undefined' ) {
										HourStat[hourDay].push( new Array(0,typeInt,projectId) );
										grafon2( 0, typeInt, 4, workBackground);									
									} else {								
										var Delta1 = 0;
										if ( HourStat[hourDay][HourStat[hourDay].length - 1 ][1] == 'work' ) {
											Delta1 = workDelta;
										} else if ( HourStat[hourDay][HourStat[hourDay].length - 1 ][1] == 'rest' ) {
											Delta1 = restDelta;
										}	
										var temp1 = HourStat[hourDay].pop();									
										temp1[0] = temp1[0] + Delta1;
										if( temp1[0] > 4 ) {									
											HourStat[hourDay].push(temp1);
											grafon2( HourStat[hourDay][HourStat[hourDay].length - 1 ][0], typeInt, 1, workBackground);
											HourStat[hourDay].push( new Array(0,typeInt,projectId) );
										} else {
											
											$('.interval:last').remove();
											clockCorrection( temp1[0], temp1[1]);	
											
											if ( typeof HourStat[hourDay][0] == 'undefined' ) {//new intreval instead of the previous short one
												HourStat[hourDay].push( new Array(0,typeInt,projectId) );	
												HourStat[hourDay][HourStat[hourDay].length - 1 ][0] += temp1[0];
												grafon2( HourStat[hourDay][HourStat[hourDay].length - 1 ][0], typeInt, 4, workBackground);							
											} else {										 											
												HourStat[hourDay][HourStat[hourDay].length - 1 ][0] += temp1[0];	
											}	
																																																											
										}																																						
									}
														
								}	else if ( nextInterval == 1 && correction == 1 ) {
									HourStat[hourDay].push( new Array(0,typeInt,projectId) );										
									grafon2( 0, typeInt, 2 , workBackground);									
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
																		
									grafon2( HourStat[hourDay][HourStat[hourDay].length - 1][0], typeInt, 0, workBackground );
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
								 	
									grafon2(0, typeInt, 3, workBackground );																								
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
															
												'workStamp': workStamp,
												'workDelta': workDelta,
												'workTotal': workTotal,
										
												'restStamp': restStamp,
												'restDelta': restDelta,
												'restTotal': restTotal,
																							
												'hourInt': hourInt,
												'graf': graf,
												'saveSumm': saveSumm, 
										
							
												'sec': sec,
												'resSec':resSec,
												'resMin': resMin,
												'minut': minut,
												'resHour': resHour,
												'hour': hour,
												'sec': sec,
												
												'sec2': sec2,
												'resSec2':resSec2,
												'resMin2': resMin2,
												'minut2': minut2,
												'resHour2': resHour2,
												'hour2':hour2,
												'sec2': sec2		
								};
								var iniVarsJSONText = JSON.stringify(varsObject);	
								//setting of the time offset for cookie (3hour ex.);											
								var dateExp = new Date();	
								dateExp.setTime( dateExp.getTime() + parseInt(cokieLive) );
								//vars cookie setting
								$.cookie("IniVars", iniVarsJSONText,{ expires: dateExp } );	
								//hourStat cookie saving
								var HourStatJSONText = JSON.stringify(HourStat);
								$.cookie("HourStat", HourStatJSONText,{ expires: dateExp } );	
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
			projectId = 'rest_1';
			
						
			workStamp = 0;
			workDelta = 0;
			workTotal = 0;
			
	
			restStamp = 0;
			 restDelta = 0;
			 restTotal = 0;

				
	
			 hourInt = 0;
			 graf = 0;
			 saveSumm = 0;
	
	
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
			
		}
		location.reload();
			
	})
				
});