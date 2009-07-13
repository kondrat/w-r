function saveTime2( hourStatJson ) {
		$.post(
			path + "/intervals/add",
			{"data[work]": hourStatJson },
					function(data){
						$('#test2').html(data.hi+' - '+data.hi2+' - '+data.hi3);
					},
					"json"
		);	
	
}

function grafon2( workHour2, typeInt2 ,nextInt, color ) {
	
		//workPS = Math.floor(workHour2/60*100);
		workPS = workHour2*100/HourCalc;
		
		if ( typeof color == 'undefined' ) {
			color = 'red';
		} else {
			color = color; 
		}
	//temp
			color='#6CFFB6';		

		switch(nextInt) {
			case 0:
				$('.interval:last').width( workPS+"%");				
				break;
			case 1:
      	$('.interval:last').width( workPS+"%");          
				if ( typeInt2 == 'rest' ) {					
					$('.graf:last').append('<div class="interval" style="background-color:#FF6666;"></div>');					
				} else if ( typeInt2 == 'work') {
					$('.graf:last').append('<div class="interval" style="background-color: '+color+';"></div>');				
				}				
				break;
			case 2://To Fix!!
				if ( typeInt2 == 'rest' ) {
					$('.graf:last').append('<div class="interval" style="background-color: #FF6666;"></div>');		//red			
				} else if ( typeInt2 == 'work') {
					$('.graf:last').append('<div class="interval" style=" background-color: '+color+';"></div>');		//green		
				}				
				break;
			case 3:
				$('.grafWrapper').append(	'<div class=" graf span-2"><div class="grafConnector" /></div>');				
				break;
			case 4:
        if ( typeInt2 == 'rest') {
            color = '#FF6666';
        }
				$('.graf:last').append(	'<div class="interval" style="background-color:'+color+';"></div>');				
				break;			
		}
	
}

function clockCorrection (stepToDo, stepType) {
						//stepToDo - step to subtract.
						totalStep = stepToDo;
						switch(stepType) {
							case 'work':
								if ( workTotal >= totalStep) {
									workTotal = parseInt(workTotal) - totalStep; 
									restTotal = parseInt(restTotal) + totalStep;
								} else if ( restTotal < totalStep ) {
									restTotal = parseInt(workTotal) + parseInt(restTotal);
									workTotal = 0;
								}
								break;
							case 'rest':
								if ( restTotal >= totalStep) {
									workTotal = parseInt(workTotal) + totalStep; 
									restTotal = parseInt(restTotal) - totalStep;
								} else if ( restTotal < totalStep ) {
									workTotal = parseInt(workTotal) + parseInt(restTotal);
									restTotal = 0;
								}
								break;
						}
						
						workStamp = workTotal;
						restStamp = restTotal;
			 
						hour = parseInt(workTotal/3600);
						minut = parseInt( ( workTotal - (hour*3600) )/60 );
						sec = workTotal - (hour*3600) - (minut*60);
			
						hour2 = parseInt(restTotal/3600);
						minut2 = parseInt( ( restTotal - (hour2*3600) )/60 );
						sec2 = restTotal - (hour2*3600) - (minut2*60);
												//work
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
													
													
													//rest
													if ( sec2 < 10 ) {
														resSec2 = '0' + sec2;
													} else if ( sec2 >= 10 && sec2 < 60 ) {
														resSec2 = sec2;
													} else if ( sec2 == 60 ) {
														resSec2 = "00";											
														sec2 = 0;
														minut2++;
													}
													
													if ( minut2 >= 0 && minut2 < 10 ) {
														resMin2 = "0" + minut2;
													} else if (minut2 >= 10 && minut2 < 60) {
														resMin2 = minut2;
													} else if ( minut2 == 60 ) {
														resMin2 = "00";
														minut2 = 0;
														hour2++;
													} 
													
													if ( hour2 >= 0 && hour2 < 10 ) {
														resHour2 = "0" + hour2;
													} else if ( hour2 >= 10 && hour2 < 24 ) {
														resHour2 = hour2;
													} else if ( hour2 == 24) {
														resHour2 = "00";
														hour2 = 0;
													}	
				
					
					
					$('#clock1 span').html(resHour + ":" + resMin + ":" + resSec );
					$('#clock2 span').html(resHour2 + ":" + resMin2 + ":"+ resSec2);			
	
	
}
//misc
function openWin(wUri, wName, wWidth, wHeight, Scroll, wMenu) {
	var scrollBars = (Scroll!=0) ? 1 : 0;
	var menuBars = (wMenu) ? 1 : 0;
	var positionLeft = (screen.width - wWidth)/2;
	var positionTop = (screen.height - wHeight)/2;
	var myW = window.open(wUri,wName,'width='+wWidth+',height='+wHeight+',top='+positionTop+',left='+positionLeft+',location=0,menubar='+menuBars+',resizable=0,scrollbars='+scrollBars+',status=0,titlebar=0,toolbar=0,directories=0,hotkeys=0')
	myW.focus();
}