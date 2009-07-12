jQuery(document).ready( function(){
	
	$('.rest div.minusRest').click(function(){	
		//stop interva module	
		$('.minusRestUndo').css({'display':'block'});
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
				clockCorrection(totalStep,'rest');
				
	})
	
	$('.minusRestUndo').click(function(){		
		if ( correction == 1 ) {
			
		}
	})




	// not started yet
	$('.plusRest').click(function(){		
		clearInterval(interval);
		secInt = 0;
		clockObj = 0;
	})
		
});
