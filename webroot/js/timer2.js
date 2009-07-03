/*
var mm = new Array('a','b','c');
alert(mm);
mm.reverse();
mm.unshift('d');
mm.reverse();
alert(mm);
*/


jQuery(document).ready( function(){
    
	if ( 10 > 0 ) {
    $.expr[':'].external = function(obj){
        return (obj.hostname != location.hostname);

    };


    $(document).ready(function(){
            // Add 'external' CSS class to all external links
            $('a:external').css({'background-color':'blue'});
    });
	}


	if ( 100 > 0 ) {			
		var secInt = 0;
		var interval = false;
		var nextInterval = 0;
		var typeInt = 'rest';
		var projectId = 'project_1';
		var projectName = 'Work';
		var workBackground = '#d2ffe9';
		var colorProjectId = 'green';
		var hourDay = 0;
		var correction = 0;//switch correction mode;

		var nextHour = 0;
		var HourStat = new Array();
		var projectId = 'rest_1';
		 		HourStat[0] = new Array( new Array(0,'rest','rest_1') );

		
					
		var workStamp = 0;
		var workDelta = 0;
		var workTotal = 0;
		var workHour = 0;
		

		var restStamp = 0;
		var restDelta = 0;
		var restTotal = 0;
		var restHour = 0;
			

		var hourInt = 0;
		var graf = 0;
		var saveSumm = 0;


		var resSec = "00";
		var resMin = "00";
		var resHour = "00";
		var sec = 0;
		var minut = 0;
		var hour = 0;
		var k = 0;
		var i = 0;



		var resSec2 = "00";
		var resMin2 = "00";
		var resHour2 = "00";
		var sec2 = 0;
		var minut2 = 0;
		var hour2 = 0;
		var k2 = 0;
		var i2 = 0;	
		
	}	



	if ( $.cookie("the_cookie11") != null ) {
			
		 var cc = JSON.parse( $.cookie("the_cookie11") );


		 typeInt = cc.typeInt;
		 hourDay = cc.hourDay;
		 HourStat[hourDay] = new Array();
		 HourStat[hourDay].push( new Array(cc.lastInterval ,cc.lastIntervalType) );
		 projectId = cc.projectId;			
					
		 workStamp = cc.workStamp;
		 workDelta = cc.workDelta;
		 workTotal = cc.workTotal;
		 workHour = cc.workHour;
		 


		 restStamp = cc.restStamp;
		 restDelta = cc.restDelta;
		 restTotal = cc.restTotal;
		 restHour = cc.restHour;
			

		 hourInt = cc.hourInt;
		 graf = cc.graf;
		 saveSumm  = cc.saveSumm;
		 saveCount = cc.saveCount;
		 
		 sec = cc.sec;
		 resSec = cc.resSec,
		 resMin = cc.resMin;
		 minut = cc.minut;
		 resHour = cc.resHour;
		 hour = cc.hour;
		 k = cc.k;
		 i = cc.i;
		
		 sec2 = cc.sec2;
		 resSec2 = cc.resSec2,
		 resMin2 = cc.resMin2;
		 minut2 = cc.minut2;
		 resHour2 = cc.resHour2;
		 hour2 = cc.hour2;
		 k2 = cc.k2;
		 i2 = cc.i2;			
	}
	

	//#ffd7d7 - red;							
	$('#clock1, .work').click( function(){
		
			if (!interval) {
				$(".startInterval").trigger('click');
			}
				
			$('#clock1').css({'background-color' : workBackground });
			$('#clock2').css({'background-color' :'#ffffff'});
			$('.work span').css({'font-size':'100%'});
			$('.rest span').css({'font-size':'85%'});
			
			$('.minusRest').css({'display':'none'});
			$('.minusWork').css({'display':'block'});
			
//to fix!!! wrong!!!
			projectId = $('.myProject:first').attr("id");

			nextInterval = 1;
			typeInt = 'work';
			i = k;			
	});
	
	$('#clock2, .rest').click( function(){

			if (!interval) {
				$(".startInterval").trigger('click');
			}		
	
			
			$('#clock1').css({'background-color' :'#ffffff'});
			$('#clock2').css({'background-color' :'#ffd7d7'});
			$('.work span').css({'font-size':'85%'});
			$('.rest span').css({'font-size':'100%'});
			
			$('.minusRest').css({'display':'block'});
			$('.minusWork').css({'display':'none'});
			
			projectId = 'rest_1';
			nextInterval = 1;	
			typeInt = 'rest';
			i2 = k2;
	});

	$(".myProject").click(function(){
		
		//$(".stopInterval").trigger('click');
		var prevProjectId = projectId;
		projectId = $(this).attr("id");

		//only if we chose another project.
		if ( prevProjectId != projectId ) {
			
			projectName = $(this).text();
			colorProjectId = $(this).css("color");
			workBackground = $(this).css("background-color");
		
		
		
			$('.clock1, .work').css({'color':colorProjectId});
			$('.work span').text(projectName);
			$('#clock1').css({'background-color' : workBackground });
			$('#clock2').css({'background-color' :'#ffffff'});
			$('.work span').css({'font-size':'100%'});
			$('.rest span').css({'font-size':'85%'});
			
		
			nextInterval = 1;
			typeInt = 'work';
			i = k;
		} 

		
	});

		
	if( typeInt == 'rest' ) {
			$('#clock2').css({'background-color' :'#ffd7d7'});
			$('#clock1').css({'background-color' :'#ffffff'});
			$('.minusRest').css({'display':'block'});	
			$('.minusWork').css({'display':'none'});	
	} else if (typeInt == 'work' ) {
			$('#clock1').css({'background-color' : workBackground });
			$('#clock2').css({'background-color' :'#ffffff'});	
			$('.minusRest').css({'display':'none'});
			$('.minusWork').css({'display':'block'});		
	}
	
	$('#clock1').html(resHour + ":" + resMin + ":" + resSec );
	$('#clock2').html(resHour2 + ":" + resMin2 + ":"+ resSec2);

			$('.startInterval').click( function(){	
				
				$('.startInterval').css({'display':'none'});
				$('.stopInterval').css({'display':'inline'});
				
				if ( correction == 1 ) {

					for ( var kk in HourStat ) {

						for ( var nn in HourStat[kk] ) {
							
							if ( HourStat[kk][nn][1] == 'rest' && HourStat[kk][nn][0] == 0 ) {
								HourStat[kk].splice(nn,1);
							} 
							
							
							if ( HourStat[kk][nn][1] == 'workTemp' ) {
								 HourStat[kk][nn][1] = 'work';
							}
						}

					}
										
				}
				
				
				var clockObj = new Date();
				interval = setInterval(function () {
													
								var curClockObj = new Date();	
										
								var increm = ( curClockObj.getTime() - clockObj.getTime() ) - (secInt*1000);		
		
								if ( increm > 999 ) { 
											secInt++;										
											hourInt++;

											i++;
											i2++;
											
											graf++;
											saveSumm++;
								}
										
								if ( typeInt == 'work' ) {			
										k = i;										
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
										
						
										
										$('#clock1').html(resHour + ":" + resMin + ":" + resSec );
										document.title = 'Work ' + resHour + ":" + resMin; 
										workTotal = parseInt(hour)*3600 + parseInt(minut)*60 + parseInt(i)*1;										
										
									}	
										
								if ( typeInt == 'rest' ) {	
										k2 = i2;
										
										if ( i2 < 10 ) {
											resSec2 = '0' + i2;
										} else if ( i2 >= 10 && i2 < 60 ) {
											resSec2 = i2;
										} else if ( i2 == 60 ) {
											resSec2 = "00";											
											i2 = 0;
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
										
							
										
										$('#clock2').html(resHour2 + ":" + resMin2 + ":"+ resSec2);
										document.title = 'Rest ' + resHour2 + ":" + resMin2;
										restTotal = parseInt(hour2)*3600 + parseInt(minut2)*60 + parseInt(i2);									
								}											
									
										
								if( nextInterval == 1 && correction != 1) {
									nextInterval = 0;
									
									//so, new interval

									workDelta = parseInt(workTotal) - parseInt(workStamp);											
									restDelta = parseInt(restTotal) - parseInt(restStamp);											
																			
									workStamp = workTotal;
									restStamp = restTotal;	
									
									var Delta1 = 0;
									if ( HourStat[hourDay][HourStat[hourDay].length - 1 ][1] == 'work' ) {
										Delta1 = workDelta;
									} else if ( HourStat[hourDay][HourStat[hourDay].length - 1 ][1] == 'rest' ) {
										Delta1 = restDelta;
									}						
									
																		
									var temp1 = HourStat[hourDay].pop();
									//alert(temp1);
									//$(".stopInterval").trigger('click');	
									temp1[0] = temp1[0] + Delta1;
									//alert(HourStat[0][0]);
									//checking if interval was to short or not
									if ( temp1[0] > 2 || typeof(HourStat[0][0]) == 'undefined' ) {
										//alert('here1');
					
										HourStat[hourDay].push(temp1);
																				
										grafon2( HourStat[hourDay][HourStat[hourDay].length - 1 ][0], typeInt, 1, workBackground);
										
										HourStat[hourDay].push( new Array(0,typeInt,projectId) );	

									
									} else {
										//alert('here2');
										$('.interval:last').remove();
										HourStat[hourDay][HourStat[hourDay].length - 1 ][0] += temp1[0];
										$(".stopInterval").trigger('click');	
									}

									var nnnT = '';
									$.each(HourStat[hourDay], function() {									
											nnnT += this + " temp1: " + temp1[0] + ";<br />";									
									} );
									$('#hourstat').html(nnnT);

									
	                //New interval creation
	               // if ( HourStat[hourDay][HourStat[hourDay].length - 1 ][2] != projectId ) {
										//HourStat[hourDay].push( new Array(0,typeInt,projectId) );	
									//}

									
																								
								}	else if ( nextInterval == 1 && correction == 1 ) {
									HourStat[hourDay].push( new Array(0,typeInt,projectId) );	
									//alert(HourStat[hourDay][HourStat[hourDay].length - 1 ][1]);
									grafon2( HourStat[hourDay][HourStat[hourDay].length - 1 ][0], typeInt, 2 , workBackground);
									
								}	
								nextInterval = 0;	
								correction = 0;
																				
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
								/*
									if ( 10 > 9 ) {	
									//to del
										var qq1 = workDelta; 
										var qq2 = restDelta;	
												
										var red = 'color: blue';
										var check = 0;
									//to del
	
										if ( restDelta < 0 || restDelta > graf ) {
											//to del
											red = 'color: red';
											check = 1;											
											if ( workDelta < 0 || workDelta > graf ) {
												workDelta = 0;
												restDelta = 0;
											} else {
												restDelta = graf - workDelta;
											}												
										} else if (workDelta < 0 || workDelta > graf) {
											//to del
											red = 'color: red';
											check = 1;
												workDelta = graf - restDelta;			
										} else {
											workDelta = graf - restDelta;												
										}
										//to del
												if ( check == 1 ) {
													$('.ultest').append('<li>'+ workDelta +' - ' + restDelta + ': <span style="font-weight: bold;'+ red +'">' + qq1 + ' - ' + qq2 + '</span>'+ ' - saveCount - '+ saveCount + '</li>');	
												}	
										//to del		
									}	
								*/
									
									
									var temp2 = HourStat[hourDay].pop();
									temp2[0] = parseInt(temp2[0]) + parseInt(Delta);									
									HourStat[hourDay].push(temp2);	
									
																
									//$('#test4').html('<p style="margin:0">'+HourStat[hourDay][HourStat[hourDay].length - 1][0]+' | '+HourStat[hourDay][HourStat[hourDay].length - 1][1]+' | '+hourDay+'</p>');
									
									grafon2( HourStat[hourDay][HourStat[hourDay].length - 1][0], typeInt, 0, workBackground );
									
									var nnnT = '';
									$.each(HourStat[hourDay], function() {									
											nnnT += this + " ;<br />";									
									} );
									$('#hourstat').html(nnnT);
																
								}
	
								if ( saveSumm  == 10 ) {
									
									//to create json text.
									var HourStatJSONText = JSON.stringify(HourStat);

									
									saveTime2( HourStatJSONText );
									
									if ( nextHour == 1 ) {
										nextHour = 0;
									}
									saveSumm = 0;
								}
	
								if ( hourInt == 60 ) {
									nextHour = 1;
									hourDay++;
								 	HourStat[hourDay] = new Array();
								 	HourStat[hourDay].push(new Array(0,typeInt,projectId));

                                    if ( typeInt == 'rest') {
                                        color2 = 'red';
                                    } else {
                                        color2 = workBackground;
                                    }

									$('.grafWrapper').append(	'<div class=" graf span-2" style="height: 10px; border: 2px solid #ccc; margin: 2px">'+
																								'<div class="interval" style="margin: 0; height: 10px; background-color:'+color2+'; float: left;width:0%"></div>'+
																						'</div>'
																					);																								
									hourInt = 0
								}	
								
										//to del										
										if ( 10 > 9 ) {					
											//$('#test1').html('secInt :'+secInt+' hourInt: '+hourInt);
											//$('#test4').html(workDelta + ' - ' + restDelta + ' - saveCount - '+ saveCount+' | hourDay | '+hourDay );										
											//$('#test3').html('Interval: '+ HourStat[hourDay][HourStat.length][0]+' | type: '+ HourStat[hourDay][HourStat.length][1] + ' | saveCount : '+ saveCount );
											//
										}
										
										
						}	,100);	
			});

					
		$(window).unload( function () {
				//saveTime( HourStat[hourDay][0][0][0], HourStat[hourDay][1], nextHour);
				var toSaveInterval = new Array();
				toSaveInterval = HourStat[hourDay].pop();
				//alert(toSaveInterval);
								var varsObject = {		
												//'secInt': secInt,
												'typeInt': typeInt,
												'hourDay': hourDay,
												//'lastInterval':toSaveInterval[0],
												//'lastIntervalType':toSaveInterval[1],
												
												//'intervals':[],
												
												'projectId': projectId,
															
												'workStamp': workStamp,
												'workDelta': workDelta,
												'workTotal': workTotal,
												//'workHour': workHour,
										
												'restStamp': restStamp,
												'restDelta': restDelta,
												'restTotal': restTotal,
												//'restHour': restHour,
													
										
												'hourInt': hourInt,
												'graf': graf,
												'saveSumm': saveSumm, 
												'saveCount': saveCount,
										
							
												'sec': sec,
												'resSec':resSec,
												'resMin': resMin,
												'minut': minut,
												'resHour': resHour,
												'hour': hour,
												'k': k,
												'i': i,
												
												'sec2': sec2,
												'resSec2':resSec2,
												'resMin2': resMin2,
												'minut2': minut2,
												'resHour2': resHour2,
												'hour2':hour2,
												'k2': k2,
												'i2': i2		
								};
								var myJSONText = JSON.stringify(varsObject);												
								var date2 = new Date();
								date2.setTime(date2.getTime() + (3 * 60 * 60 * 1000) );
								//$.cookie("the_cookie11", myJSONText,{ expires: date2 } );	
		} );


	$('.stopInterval').click(function(){		
		clearInterval(interval);
		secInt = 0;
		clockObj = 0;
		$('.startInterval').css({'display':'inline'});
		$(this).css({'display':'none'});
		interval = false;

	})
	$(".startInterval").trigger('click');	


		

	$('.minusRest').click(function(){		
		clearInterval(interval);
		

			
		//set up correction mode
		correction = 1;	
		secInt = 0;
		clockObj = 0;
		
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
		//mark for exiting the external loop	
		var endBigLoop = 0;
		
		for ( var ii in HourStat ) {
						//position of the div to operate.
						pos = parseInt(HourStat.length) - parseInt(ii) -1;
					
						//creation of the new interval workTemp.	
						if (HourStat[ii][(HourStat[ii].length -1)][1] == 'rest' && HourStat[ii][(HourStat[ii].length -1)][0] != 0 ) {
							$('.graf:eq('+pos+')').append(	'<div class="interval hourWork wwoorrkk" style="margin: 0; height: 10px; background-color:#95ffca; float: left;width:0%"></div>');				
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
															$('#test4').after('<p style="margin:0">'+HourStat+'</p>');
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



	$('.delCookie').click(function(){
		
		$.cookie("the_cookie11",null);
		if ( 100 > 0 ) {			
			secInt = 0;
			//interval;
			
			typeInt = 'rest';
			hourDay = 0;
			grafClass = 'graf0';
			nextHour = 0;
			HourStat = new Array();
			HourStat[hourDay] = new Array();
			HourStat[hourDay][0] = new Array(0,0);
			projectId = 0;
			
						
			workStamp = 0;
			workDelta = 0;
			workTotal = 0;
			workHour = 0;
			
	
			restStamp = 0;
			 restDelta = 0;
			 restTotal = 0;
			 restHour = 0;
				
	
			 hourInt = 0;
			 graf = 0;
			 saveSumm = 0;
	
	
			 resSec = "00";
			 resMin = "00";
			 resHour = "00";
			 sec = 0;
			 minut = 0;
			 hour = 0;
			 k = 0;
			 i = 0;
	
	
	
			 resSec2 = "00";
			 resMin2 = "00";
			 resHour2 = "00";
			 sec2 = 0;
			 minut2 = 0;
			 hour2 = 0;
			 k2 = 0;
			 i2 = 0;	
			
		}
			
	})
				
});




var saveCount = 0;
function saveTime( workHour, restHour, nextHour ) {
		saveCount++;
		$.post(
			path + "/intervals/add",
			{"data[work]": workHour,"data[rest]":restHour,"data[nextHour]":nextHour },
					function(data){
						$('#test2').html(data.hi+' - '+data.hi2+' - '+data.hi3);
					},
					"json"
		);	
	
}
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
				//old red #FF7D7D
				$('.graf:last').append('<div class="interval hourRest" style="margin: 0; height: 10px; background-color:red; float: left;"></div>');					
			} else if ( typeInt2 == 'work') {
				$('.graf:last').append('<div class="interval hourWork" style="margin: 0; height: 10px; background-color: '+color+'; float: left;"></div>');				
			}
//To Fix!!
		} else if ( nextInt == 2 ) {
			
			if ( typeInt2 == 'rest' ) {
				$('.graf:last').append('<div class="interval hourRest1" style="margin: 0; height: 10px; background-color: '+color+'; float: left;"></div>');		//red			
			} else if ( typeInt2 == 'work') {
				$('.graf:last').append('<div class="interval hourWork1" style="margin: 0; height: 10px; background-color: red; float: left;"></div>');		//green		
			}	
					
		}
	
}


function openWin(wUri, wName, wWidth, wHeight, Scroll, wMenu) {
	var scrollBars = (Scroll!=0) ? 1 : 0;
	var menuBars = (wMenu) ? 1 : 0;
	var positionLeft = (screen.width - wWidth)/2;
	var positionTop = (screen.height - wHeight)/2;
	var myW = window.open(wUri,wName,'width='+wWidth+',height='+wHeight+',top='+positionTop+',left='+positionLeft+',location=0,menubar='+menuBars+',resizable=0,scrollbars='+scrollBars+',status=0,titlebar=0,toolbar=0,directories=0,hotkeys=0')
	myW.focus();
}





