		//var HourCalc = 3600;
		var HourCalc = 60;
		var cookieLive = 1*3600;
		
		var hs2;
		
		var secInt = 0;
		var interval = false;
		var nextInterval = 0;
		
		var typeInt = 'rest';
		var projectName = 'rest';
		var colorProjectId = 'red';
		

		var correction = 0;//switch correction mode;
		var projectClicked = 0;
		
		var totalMinus = 0;

		var HourStat = new Array();
		 		//HourStat[0] = new Array();
		var	HourStatCache = new Array();
	
		var projectId;

		
		var workTotal = 0;
		var restTotal = 0;

		var graf = 0;
		var saveSumm = 0;

		var sec1Cur = 0;
		var sec2Cur = 0;

		
jQuery(document).ready( function(){
 
	if ( $.cookie("IniVars") != null ) {
		
			//alert($.cookie("IniVars"));


		 var cc = JSON.parse( $.cookie("IniVars") );


		 typeInt = cc.typeInt;

		 projectId = cc.projectId;
		 projectName = cc.projectName;
		 colorProjectId = cc.colorProjectId;			
					

		 workTotal = cc.workTotal;
		 sec1Cur = cc.sec1Cur;
		 
		 restTotal = cc.restTotal;
		 sec2Cur = cc.sec2Cur;			


			graf = cc.graf;
			saveSumm  = cc.saveSumm;

	}
	

			
	if (hs2 != null && hs2 != 0) {	
		HourStat = hs2;
		grafon4 (HourStat);				
	} else {
		//var HourStat = new Array();
	}

});
	