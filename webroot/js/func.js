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
	
		workPS = Math.floor(workHour2/60*100);
		
		if ( typeof color == 'undefined' ) {
			color = 'red';
		} else {
			color = color; 
		}
		
		
		if ( nextInt == 0 ) {			
				$('.interval:last').width( workPS+"%");					
		} else if ( nextInt == 1) {				
      	$('.interval:last').width( workPS+"%");          
				if ( typeInt2 == 'rest' ) {
					
					$('.graf:last').append('<div class="interval" style="background-color:#FF6666;"></div>');					
				} else if ( typeInt2 == 'work') {
					$('.graf:last').append('<div class="interval" style="background-color: '+color+';"></div>');				
				}
//To Fix!!
		} else if ( nextInt == 2 ) {
			
			if ( typeInt2 == 'rest' ) {
				$('.graf:last').append('<div class="interval" style="background-color: #FF6666;"></div>');		//red			
			} else if ( typeInt2 == 'work') {
				$('.graf:last').append('<div class="interval" style=" background-color: '+color+';"></div>');		//green		
			}	
			
		} else if ( nextInt == 3 ) {
        if ( typeInt2 == 'rest') {
            color = '#FF6666';
        }
				$('.grafWrapper').append(	'<div class=" graf span-2"><div class="grafConnector"/>'+
														'<div class="interval" style="background-color:'+color+';"></div>'+
												'</div>'
											);									
		}
	
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