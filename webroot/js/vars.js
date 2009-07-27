		var HourCalc = 3600;
		var HourCalc = 60;
		var cookieLive = 3*3600;

		var secInt = 0;
		var interval = false;
		var nextInterval = 0;
		var typeInt = 'rest';

		var projectName = 'Work';
		var colorProjectId = 'green';
		var hourDay = 0;
		var correction = 0;//switch correction mode;
		var projectClicked = 0;
		var totalMinus = 0;

		var nextHour = 0;
		var HourStat = new Array();
		 		HourStat[0] = new Array();
				HourStatCache = new Array();


				
		var iiii = 0		
		var projectId;

		
					
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




		var resSec2 = "00";
		var resMin2 = "00";
		var resHour2 = "00";
		var sec2 = 0;
		var minut2 = 0;
		var hour2 = 0;
		
jQuery(document).ready( function(){
 
	if ( $.cookie("IniVars") != null ) {
		
			//alert('IniVars');

		 var cc = JSON.parse( $.cookie("IniVars") );


		 typeInt = cc.typeInt;
		 hourDay = cc.hourDay;

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
		 sec = cc.sec;
		
		 sec2 = cc.sec2;
		 resSec2 = cc.resSec2,
		 resMin2 = cc.resMin2;
		 minut2 = cc.minut2;
		 resHour2 = cc.resHour2;
		 hour2 = cc.hour2;
		 sec2 = cc.sec2;			
	}
	if ( $.cookie("HourStat") != null ) {
		
		var hs = JSON.parse( $.cookie("HourStat") );		
		HourStat = hs;
									
		grafon3 (HourStat);							
	
		
	}
});
	