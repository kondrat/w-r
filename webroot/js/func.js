function saveTime2( hourStatJson ) {
		$.post(
			path + "/intervals/add",
			{"data[work]": hourStatJson },
					function(data){
						$('#test2').html(data.hi);
					},
					"json"
		);	
	
}
function timer(timeToDo) {
	var hourCur,minutCur,secCur;
	var resSecCur = "00";
	var resMinCur = "00";
	var resHourCur = "00";
	hourCur = parseInt(timeToDo/3600);
	minutCur = parseInt( ( timeToDo - (hourCur*3600) )/60 );
	secCur = timeToDo - (hourCur*3600) - (minutCur*60);
	
					if ( secCur < 10 ) {
							resSecCur = '0' + secCur;
						} else if ( secCur >= 10 && secCur < 60 ) {
							resSecCur = secCur;
						} else if ( secCur == 60 ) {
							resSecCur = "00";
							secCur = 0;
							minutCur++;
						}
						
						if ( minutCur > 0 && minutCur < 10 ) {
							resMinCur = "0" + minutCur;
						} else if (minutCur >= 10 && minutCur < 60) {
							resMinCur = minutCur;
						} else if ( minutCur == 60 ) {
							resMinCur = "00";
							minutCur = 0;
							hourCur++;
						}
						
						if ( hourCur > 0 && hourCur < 10 ) {
							resHourCur = "0" + hourCur;
						} else if ( hourCur >= 10 && hourCur < 24 ) {
							resHourCur = hourCur;
						} else if ( hourCur == 24) {
							resHourCur = "00";
							hourCur = 0;
						}
	return (resHourCur + ":" + resMinCur + ":" + resSecCur );
}

function grafon4(HourStat) {	
		$('.graf:gt(0), .interval').remove();		
		var I = HourCalc;
		var inTe = 0;			
		$.each(HourStat, function(i) {

				inTe = this[0];	
			
				do {
					if( inTe < I ) {

						I = parseInt(I) - parseInt(inTe);
						
						if ( this[1] == 'rest' ) {
							$('.graf:last').append('<div class="interval" style="background-color: red;"></div>');		//red			
						} else {
							$('.graf:last').append('<div class="interval" style=" background-color: '+this[3]+';"></div>');		//green		
						}	
						$('.interval:last').width( inTe/HourCalc*100+"%");
							
						inTe = 0;								

					} else {
						if ( this[1] == 'rest' ) {
							$('.graf:last').append('<div class="interval" style="background-color: red;"></div>');		//red			
						} else {
							$('.graf:last').append('<div class="interval" style=" background-color: '+this[3]+';"></div>');		//green		
						}	
						$('.interval:last').width( I/HourCalc*100+"%");
						
						inTe = parseInt(inTe) - parseInt(I);
						
						$('.grafWrapper').append(	'<div class="graf span-2"><div class="grafConnector" /></div>');
					
						I = HourCalc;											
					}
				
				}
				while (inTe != 0);				
				//stat toDel
				stat(HourStat,'#hourstat');																			
		});	
					
}
function clockCorrection (HourStat) {
	
	workTotal = restTotal = 0;
	HourStat.splice(0,0,new Array(0,'first','xxx','blue'));

		for ( i = 1; i<=(HourStat.length-1);i++) {
			
			if ( HourStat[i][0] < 4 ) {
				HourStat.splice(i,1);
			} else if( HourStat[i][2] == HourStat[(i-1)][2] ) {
				if (HourStat[i][1] == 'work') {
					workTotal += HourStat[i][0];
				} else if (HourStat[i][1] == 'rest') {
					restTotal += HourStat[i][0];
				}			
				HourStat[(i-1)][0] += HourStat[i][0];
				HourStat.splice(i,1);			
	
			} else {
				if (HourStat[i][1] == 'work') {
					workTotal += HourStat[i][0];
				} else if (HourStat[i][1] == 'rest') {
					restTotal += HourStat[i][0];
				}
			}
	
		}
		HourStat.shift();
		$('#clock1 span').html(timer(workTotal));
		$('#clock2 span').html(timer(restTotal));
}

function HourStatCorrection() {
	
	
	if( typeof HourStat != 'undefined' ) {
		for ( var kk in HourStat ) {
		
			for ( var nn in HourStat[kk] ) {
				
				if ( HourStat[kk][nn][1] == 'rest' && HourStat[kk][nn][0] == 0 ) {
					HourStat[kk].splice(nn,1);//removing 0 rest ints
				} 
				//resetting workTemp							
				if ( HourStat[kk][nn][1] == 'temp' ) {
					 HourStat[kk][nn][1] = 'work';
				}
			}
		}	
	}
	
	
}
function stat(intevalArray, domElm) {

		$(domElm).empty();
		
		var Interval = '';
		
		$.each(intevalArray, function() {
				if(this[1] == 'work' ){
					var typeInn = '<span style="color:green">'+this[1]+'</span>';
				} else {
					var typeInn = '<span style="color:red">'+this[1]+'</span>';
				}
				var colorr = ' : <span style="padding:0 2px;color:white; font-size:smaller; background-color:'+this[3]+'">'+this[3]+'</span>';
				Interval = '<b>'+this[0]+'</b> : '+typeInn+' : '+'<em>'+this[2]+'</em>'+colorr+'<hr style="margin-bottom:3px;" />';
				$(domElm).append(Interval);
		});
	$(domElm).wrapInner('<div style="background-color:#eee; padding:5px; border:2px solid;"></div>');	
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