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
					$('.graf:eq('+pos+')').append(	'<div class="interval wwoorrkk" style="margin: 0; height: 10px; background-color:'+colorProjectId+'; float: left;width:0%"></div>');				
					HourStat[ii].push(new Array(0,'workTemp',projectId) );
				}
					
				//temp array to store info of the workTemp.
				var workLastTemp = new Array(0,'workTemp',projectId);
				//start loop from the end.												
				HourStat[ii].reverse();	
				//mark for exiting the internal loop			
				var endSmallLoop = 0;
				
				for ( var j in HourStat[ii] ) {
					
					switch(HourStat[ii][j][1]) {
						case 'work':
							//it's a work interval, so we stop all the loops
							endSmallLoop = 1;
							endBigLoop = 1
							//totalStep = 0;
							break;
						case 'workTemp':
							//increasing the interval of the workTemp by the existing one
							workLastTemp[0] += HourStat[ii][j][0];
							endSmallLoop = 0;
							break;
						case 'rest':												
							if (  HourStat[ii][j][0] > 0  ) {								
									if ( HourStat[ii][j][0] >= step ) {
										//alert('rest1 - : '+HourStat[ii][j][0]);

										HourStat[ii][j][0] = parseInt(HourStat[ii][j][0]) - parseInt(step);
										//grafon
										var workPS11 =  (HourStat[ii][j][0])*100/HourCalc;
										$('.graf:eq('+pos+') .interval:last').prev().width( workPS11+"%");
											
										workLastTemp[0] = parseInt(workLastTemp[0])  + parseInt(step);
										//grafon
										var workPS12 =  (workLastTemp[0])*100/HourCalc;
										$('.graf:eq('+pos+') .interval:last').width( workPS12+"%");	
										
										//ok, end of all loops, all done
										endBigLoop = 1;
										endSmallLoop = 1;
										totalStep += step;
										break;				
									
									} else {
										alert('rest2: '+HourStat[ii][j][0]);
										var Delta2 =  HourStat[ii][j][0];
										totalStep += parseInt(HourStat[ii][j][0]);
										alert('rest2 totalStep: '+totalStep);
										step = step - HourStat[ii][j][0];

										HourStat[ii][j][0] = 0;
										$('.graf:eq('+pos+') .interval:last').prev().width( "0%");
											
										workLastTemp[0] = parseInt(workLastTemp[0])  + parseInt(Delta2);
										//grafon
										var workPS12 =  (workLastTemp[0])*100/HourCalc ;
										$('.graf:eq('+pos+') .interval:last').width( workPS12+"%");	
																	
									}
							} else {
								endSmallLoop = 1;
							}				
							break;
							
					}//end of switch
					
					if ( endSmallLoop == 1 ) {
							break;
					}			
				}//end of internal loop
				
				//we removing old data of the work interval and putting new one
				HourStat[ii].reverse();
				if ( HourStat[ii][(HourStat[ii].length -1)][1] == 'workTemp' ) {
					HourStat[ii].pop();
					HourStat[ii].push(workLastTemp);
				}
				//reversing array back
			

				if ( typeof(endBigLoop) != 'undefined' && endBigLoop == 1 ) {
					break;
				}				
				
				
		}//ii
			HourStat.reverse();	
 			//clocks
 			alert('totalStep final: ' +totalStep);
			clockCorrection(totalStep,'rest');
						
						//to del;
									if ( 100 > 10 ) {
										var nnnC = '';										
										$.each(HourStat, function() {
											nnnC += '<div class="span-4 clearfix" style="border:1px solid;padding: 5px;">';		 
											$.each(this, function() {	
												var bbb1 = '';
											
												$.each(this, function() {
													if ( !isNaN(parseInt(this)) ) {
														bbb1 += '<b>'+this+'</b>&nbsp;';
													} else if ( this == 'rest' ) {
														bbb1 += '&nbsp;<b style="color:red">'+this +'</b>';
													} else if (this == 'workTemp') {
														bbb1 += '&nbsp;<b style="color:teal">'+this +'</b>';														
													}else if (this == 'work') {
														bbb1 += '&nbsp;<b style="color:green">'+this +'</b>';														
													} else {
														bbb1 += '&nbsp;<b>'+this+'</b>';
													}
												});
																				
													nnnC += bbb1+ "<hr />";									
											});
											nnnC += "</div><hr />";							
										});
										$('#testCorrection').html(nnnC);
									}

				
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




