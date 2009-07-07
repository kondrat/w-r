jQuery(document).ready( function(){
	
	$('.rest div.minusRest').click(function(){	
		//stop interva module	
		if ( interval ) {
			clearInterval(interval);					
			//set up correction mode
			correction = 1;	
			secInt = 0;
			clockObj = 0;
			interval = false;
		}
		
		$('.startInterval').css({'display':'inline'});
		$('.stopInterval').css({'display':'none'});
		//correction step				
		var step = 5;
		var totalStep = 0;

		
			//fix of the current interval	
			if ( 100 > 10 ) {
				workDelta = parseInt(workTotal) - parseInt(workStamp);											
				restDelta = parseInt(restTotal) - parseInt(restStamp);											
														
				workStamp = workTotal;
				restStamp = restTotal;	
					
				var Delta3 = 0;
				if ( typeInt == 'rest' ) {
					Delta3 = restDelta;
				} else if ( typeInt == 'work' ) {
					Delta3 = workDelta;
				}						
																
				var temp3 = HourStat[hourDay].pop();
				temp3[0] = temp3[0] + Delta3;
				HourStat[hourDay].push(temp3);
			}
			//end of fix of the current interval
	
				
		//grafs

		//start from the end.
		HourStat.reverse();
		//mark for stopping of an external loop	
		var endBigLoop = 0;
		
		for ( var ii in HourStat ) {
			
				//position of the div to operate.
				pos = parseInt(HourStat.length) - parseInt(ii) -1;
			
				//creation of the new interval workTemp. ( It's for very first click, we havn't new interval yet.) and creation of the new array member for it.
				if (HourStat[ii][(HourStat[ii].length -1)][1] == 'rest' && HourStat[ii][(HourStat[ii].length -1)][0] != 0 ) {
					$('.graf:eq('+pos+')').append(	'<div class="interval wwoorrkk" style="margin: 0; height: 10px; background-color:green; float: left;width:0%"></div>');				
					HourStat[ii].push(new Array(0,'workTemp') );
				}	
					
				//temp array to store info of the workTemp.
				var workLastTemp = new Array(0,'workTemp');
				//start loop from the end.												
				HourStat[ii].reverse();	
				//mark for exiting the internal loop			
				var endSmallLoop = 0;
				
				for ( var j in HourStat[ii] ) {
					
					switch(HourStat[ii][j][1]) {
						case 'workTemp':
							//increasing the interval of the workTemp by the existing one
							workLastTemp[0] = HourStat[ii][j][0];
							endSmallLoop = 0;
							break;
						case 'work':
							//it's a work interval, so we stop all the loops
							endSmallLoop = 1;
							endBigLoop = 1
							totalStep = 0;
							break;
						case 'rest':
												
							if (  HourStat[ii][j][0] > 0  ) {
								
									if ( HourStat[ii][j][0] >= step ) {
										
										HourStat[ii][j][0] = HourStat[ii][j][0] - step;
										//grafon
										var workPS11 = Math.floor( (HourStat[ii][j][0])/60*100 );
										$('.graf:eq('+pos+') .interval:last').prev().width( workPS11+"%");
											
										workLastTemp[0] = parseInt(workLastTemp[0])  + parseInt(step);
										//grafon
										var workPS12 = Math.floor( (workLastTemp[0])/60*100 );
										$('.graf:eq('+pos+') .interval:last').width( workPS12+"%");	
										
										//ok, end of all loops, all done
										endBigLoop = 1;
										endSmallLoop = 1;
										totalStep += step;
										break;				
									
									} else {
										
										var Delta2 =  HourStat[ii][j][0];
										totalStep += parseInt(HourStat[ii][j][0]);
										
										step = step - HourStat[ii][j][0];

										HourStat[ii][j][0] = 0;
										$('.graf:eq('+pos+') .interval:last').prev().width( "0%");
											
										workLastTemp[0] = parseInt(workLastTemp[0])  + parseInt(Delta2);
										//grafon
										var workPS12 = Math.floor( (workLastTemp[0])/60*100 );
										$('.graf:eq('+pos+') .interval:last').width( workPS12+"%");	
																	
									}
							}	else if ( HourStat[ii][j][0] == 0 ) {
								/*
								endSmallLoop = 1;
								endBigLoop = 1
								step = 0;
								*/
							}						
							break;
							
					}//end of switch
					
					if ( endSmallLoop == 1 ) {
							break;
					}			
				}//end of internal loop
				
				//we removing old data of the work interval and putting new one
				HourStat[ii].shift();
				HourStat[ii].unshift(workLastTemp);
				//reversing array back
				HourStat[ii].reverse();
			

				if ( typeof(endBigLoop) != 'undefined' && endBigLoop == 1 ) {
					break;
				}				
				
				
		}//ii
			HourStat.reverse();	
//to del;
$('#testCorrection').html('');
$('#testCorrection').after('<p style="margin:0">'+HourStat.join('<br />')+'</p>');
 			//clocks
	 		if ( 100 > 10 ) {
						//clocks
						if ( restTotal >= totalStep) {
							workTotal = parseInt(workTotal) + totalStep; 
							restTotal = parseInt(restTotal) - totalStep;
						} else if ( restTotal < totalStep ) {
							workTotal = parseInt(workTotal) + parseInt(restTotal);
							restTotal = 0;
						}
							workStamp = workTotal;
							restStamp = restTotal;
			 
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
				}					
 			

	})

	// not started yet
	$('.plusRest').click(function(){		
		clearInterval(interval);
		secInt = 0;
		clockObj = 0;
	})
		
});
