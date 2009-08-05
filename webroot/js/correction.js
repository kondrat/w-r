jQuery(document).ready( function(){
	
	$('.rest div.minusRest').click(function(){
		
		if( correction == 0 && projectClicked == 0 ) {
			$(".stopInterval").trigger('click');
			$('.projectTitle').trigger('click');
			//set up correction mode
			correction = 1;

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
			
			//preparing of the array for undo;
			var HourStatCacheJSONText = JSON.stringify(HourStat);
			b = new Array(HourStatCacheJSONText,totalStep);		
			HourStatCache.push(b);
			
			if ( typeInt == 'rest'){
				(typeInt='work');
			}else {
				(typeInt='rest');
			}
			return false;
		}

		//stop interval module	
		$('.minusRestUndo').css({'display':'block'});
		if ( interval ) {
			clearInterval(interval);					
			secInt = 0;
			clockObj = 0;
			interval = false;
		}

		$('.startInterval').css({'display':'inline'});
		$('.stopInterval').css({'display':'none'});
		//correction step				
		var step = 5;
		var totalStep = 0;	
				

		//start from the end.
		HourStat.reverse();
		//mark for stopping of an external loop	
		var endBigLoop = 0;
		
		for ( var ii in HourStat ) {
				
				//mark for exiting the internal loop			
				var endSmallLoop = 0;
				
							//creation of the new interval workTemp. ( It's for very first click, we havn't new interval yet.) and creation of the new array member for it.
							if ( HourStat[ii][HourStat[ii].length-1][1] == 'rest' && HourStat[ii][HourStat[ii].length-1][0] != 0 ) {
								HourStat[ii].push(new Array(0,'temp',projectId,colorProjectId) );
							}				
				
				//start loop from the end.
				HourStat[ii].reverse();	
				//temp array to store info of the workTemp.
				var workLastTemp = new Array(0,'temp',projectId,colorProjectId);				
				
				for ( var j in HourStat[ii] ) {
					
					switch(HourStat[ii][j][1]) {
						case 'work':
							//it's a work interval, so we stop all the loops
							endSmallLoop = 1;
							endBigLoop = 1
							break;
						case 'temp':
							//increasing the interval of the workTemp by the existing one
							workLastTemp[0] += HourStat[ii][j][0];
							endSmallLoop = 0;
							break;
						case 'rest':
						//	alert('rest');
																		
							if (  HourStat[ii][j][0] > 0  ) {								
									if ( HourStat[ii][j][0] >= step ) {

										HourStat[ii][j][0] = parseInt(HourStat[ii][j][0]) - parseInt(step);											
										workLastTemp[0] = parseInt(workLastTemp[0])  + parseInt(step);
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
										workLastTemp[0] = parseInt(workLastTemp[0])  + parseInt(Delta2);
									}
							} else {
							//	endSmallLoop = 1;
							//	endBigLoop = 1;
							}				
							break;
							
					}//end of switch
					
					if ( endSmallLoop == 1 ) {
							break;
					}			
				}//end of internal loop
				
				//we removing old data of the work interval and putting new one
				HourStat[ii].reverse();
				if ( HourStat[ii][(HourStat[ii].length -1)][1] == 'temp' ) {
					HourStat[ii].pop();
					HourStat[ii].push(workLastTemp);
				}
				//reversing array back
			

				if ( typeof(endBigLoop) != 'undefined' && endBigLoop == 1 ) {
					break;
				}				
				
				
		}//ii
			HourStat.reverse();
			grafon3(HourStat);	
			

			if ( totalStep > 0 ) {	
				var HourStatCacheJSONText = JSON.stringify(HourStat);
				b = new Array(HourStatCacheJSONText,totalStep);			
				HourStatCache.push(b);
			}
			
 			//clocks
 			totalMinus += totalStep;
			var totalMinusShow = 0;
			if( totalMinus <= 59 ) {
				totalMinusShow = '- '+ totalMinus+'sec';
			} else if (totalMinus >= 60 && totalMinus < 3600 ) {
				var minutMinus = parseInt(totalMinus/60);
				if ( minutMinus < 10 ) {
					totalMinusShow = '- 00:0'+ minutMinus;
				} else {
					totalMinusShow = '- 00:'+ minutMinus;					
				}
			} else if ( totalMinus >= 3600 ) {
				var hourMinus = parseInt(totalMinus/3600);
				var minutMinus = parseInt( (totalMinus - hourMinus*3600)/60);
				if ( minutMinus < 10 ) {
					minutMinus= '0'+ minutMinus;
				} 			
				if (hourMinus < 10 ) {
					totalMinusShow = '- 0'+ hourMinus+':'+minutMinus;
				} else {
					totalMinusShow = '- '+ hourMinus+':'+minutMinus;					
				}							
			}
  			
 			$('.minusRestData').removeClass('hide').text(totalMinusShow);
			clockCorrection(totalStep,'rest');

						
						//to del;
									if ( 100 > 10 ) {
										var nnnC = '';										
										$.each(HourStat, function() {
											nnnC += '<div class="span-5 clearfix" style="border:1px solid;padding: 5px;">';		 
											$.each(this, function() {	
												var bbb1 = '';
											
												$.each(this, function() {
													if ( !isNaN(parseInt(this)) ) {
														bbb1 += '<b>'+this+'</b>&nbsp;';
													} else if ( this == 'rest' ) {
														bbb1 += '&nbsp;<b style="color:red">'+this +'</b>';
													} else if (this == 'temp') {
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
			if( HourStatCache.length > 0 ) {
				var toUndo = new Array();
				hz = HourStatCache.pop();
			}
			
			if ( hz[1] > 0 ){
				toUndo = HourStatCache[HourStatCache.length-1];
				clockCorrection(hz[1],'work');
				var ccc = JSON.parse( toUndo[0] );
				HourStat = ccc;

				grafon3 (HourStat);
			}

						//to del;
									if ( 100 > 10 ) {
										var nnnC = '';										
										$.each(HourStat, function() {
											nnnC += '<div class="span-5 clearfix" style="border:1px solid;padding: 5px;">';		 
											$.each(this, function() {	
												var bbb1 = '';
											
												$.each(this, function() {
													if ( !isNaN(parseInt(this)) ) {
														bbb1 += '<b>'+this+'</b>&nbsp;';
													} else if ( this == 'rest' ) {
														bbb1 += '&nbsp;<b style="color:red">'+this +'</b>';
													} else if (this == 'temp') {
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

		}
	});




	// not started yet
	$('.plusRest').click(function(){		
		clearInterval(interval);
		secInt = 0;
		clockObj = 0;
	})
		
});




