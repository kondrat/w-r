jQuery(document).ready( function(){
	
	//work
	$('#clock1, div.work2 span').click( function(){
		//alert("#clock1, div.work2 span");
		
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
				$('.clock1Current').html('00:00:00');		
			}	
	
	});
	
	//rest
	$('#clock2, div.rest2 span').click( function(){

			if (!interval) {
				$(".startInterval").trigger('click');
			}		

			if (typeInt != 'rest' ||  typeof HourStat[0] == 'undefined') {									
				$('#clock1 .clockBackground').css({'background-color' : '#fff' });
				$('#clock2 .clockBackground').css({'background-color' : 'red' });
				$('.work span').css({'font-size':'85%','border-bottom':'8px solid #ccc'});
				$('.rest span').css({'font-size':'100%','border-bottom':'3px solid #ccc'});
				
				$('.minusRest').css({'display':'block'});
				$('.minusWork').css({'display':'none'});

				nextInterval = 1;	
				typeInt = 'rest';
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
				$('.stopInterval').css({'display':'block'});
					//return;			
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
									
									
									
									//we start with the first int.
									if ( typeof HourStat[0] == 'undefined' ) {
										if ( typeInt == 'work' ) {
											HourStat.push( new Array(0,'work',projectId,colorProjectId) );
										} else {
											HourStat.push( new Array(0,'rest','rest','red') );
										}
									} else {
										if ( HourStat[HourStat.length - 1 ][1] == 'work' ) {
											HourStat[HourStat.length - 1 ][0] = sec1Cur;
											sec1CurPrev = sec1Cur;
											sec1Cur = 0;
										} else if ( HourStat[HourStat.length - 1 ][1] == 'rest' ) {
											HourStat[HourStat.length - 1 ][0] = sec2Cur;
											sec2CurPrev = sec2Cur;
											sec2Cur = 0;
										}
										
										clockCorrection(HourStat);
											
										if ( typeInt == 'work' ) {
											//if ( HourStat[HourStat.length-1][2] != projectId ) {
												HourStat.push( new Array(0,'work',projectId,colorProjectId) );
												/*
											}else {
												sec1Cur = sec1CurPrev;
											}
											*/
										} else if (typeInt == 'rest') {
											//if ( HourStat[HourStat.length-1][2] != 'rest' ) {
												HourStat.push( new Array(0,'rest','rest','red') );
												/*
											}else{
												sec2Cur = sec2CurPrev;
											}
											*/
										}
										
										
										
									}
									
									
									grafon4(HourStat);
														
								}	else if ( nextInterval == 1 && correction == 1 ) {
									HourStat.push( new Array(0,typeInt,projectId,colorProjectId) );										
									grafon4(HourStat);									
								}	
								
								//flags down
								nextInterval = 0;	
								correction = 0;
								projectClicked = 0;
								//nextHour = 0;


								if ( graf == 5 ) {
																	
									graf = 0;
								 		
									var Delta = 0;
									if ( typeInt == 'rest' ) {
										Delta = sec2Cur;
									} else if ( typeInt == 'work' ) {
										Delta = sec1Cur;
									}											
									HourStat[HourStat.length -1][0] = Delta;																									
									grafon4(HourStat);

								}//graf
	
								if ( saveSumm  == 10 ) {									
									//to create json text.
									var HourStatJSONText = JSON.stringify(HourStat);
									saveTime2( HourStatJSONText );
									saveSumm = 0;
								}

						}	,100);	
			});
	
		$(window).unload( function () {
				if ( del == 1 ) {
								if ( correction == 1 ) {
									HourStatCorrection();
								}	
											
								var varsObject = {	
										
												'typeInt': typeInt,
												
												'projectId': projectId,
												'projectName':projectName,
												'colorProjectId':colorProjectId,

												'workTotal': workTotal,
												'sec1Cur': sec1Cur,
		
												'restTotal': restTotal,
												'sec2Cur': sec2Cur
																							
											//	'graf': graf,
											//	'saveSumm': saveSumm
											
								};
								
								var iniVarsJSONText = 100;//JSON.stringify(varsObject);								
								//setting of the time offset for cookie (3hour ex.);											
								var dateExp = new Date();
								dateExp.setTime( dateExp.getTime()+parseInt(cookieLive)*1000  );
								//vars cookie setting
							//	$.cookie("CakeCookie[IniVars]", iniVarsJSONText,{ expires: dateExp } );	
								//hourStat cookie saving
								//var HourStatJSONText = JSON.stringify(HourStat);
								//$.cookie("HourStat", HourStatJSONText,{ expires: dateExp } );	
								saveTime2(HourStatJSONText);
				} 
								
		} );

	
	$('.stopInterval').click(function(){		
		clearInterval(interval);
		secInt = 0;
		clockObj = 0;
		$('.startInterval').css({'display':'block'});
		$(this).css({'display':'none'});
		interval = false;

	})
	
	//if we want to start int after loading
	//$(".startInterval").trigger('click');	

//misc

	$('.delWorkSession').click(function(){
		del = 0;
		$.cookie("CakeCookie[IniVars]", null );
	})





				
});