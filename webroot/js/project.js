jQuery(document).ready( function(){

		$(".projectTitle, .projectMainClose ").click(function(){
			
   		if ( $(".projectMain").is(":hidden") ) {
            $(".projectMain").slideDown("fast");
						$(".projectTitle").text('close id').css({'color' : 'blue'});
          } else {
            $(".projectMain").slideUp();
						$(".projectTitle").text('switch projects').css({'color' : '#000'});
          }

    });

		$(".myProject").live("click",function(){
		
			//$(".stopInterval").trigger('click');
			var prevProjectId = projectId;
			projectId = $(this).attr("id");
			var index = $(".myProject").index(this);
			if ( index > 0 ) {
				var myPr = $(this).remove();
				$(".myProject:first").next().remove();
				$('.projectsNameWrpapper').prepend(myPr);	
				$(".myProject:first").after('<hr style="margin: 5px;" />').addClass("myProjectFirst");
			}					
			

			
			if ( correction == 1 && projectClicked == 0 ) {
				projectClicked = 1;

				projectId = $(this).attr("id");				
				projectName = $(this).text();				
				colorProjectId = $(this).css("color");				
				$('.clock1, .work').css({'color':colorProjectId});
				$('.work span').text(projectName);
				$('.rest div.minusRest').trigger('click');

				return false;				
			}
	
			//only if we chose another project.
			if ( prevProjectId != projectId ) {
				
				projectName = $(this).text();
				colorProjectId = $(this).css("color");

				$('.clock1, .work').css({'color':colorProjectId});
				$('.work span').text(projectName);

				$('#clock1 .clockBackground').css({'background-color' : colorProjectId });

				$('#clock2 .clockBackground').css({'background-color' : '#fff' });
				$('.work span').css({'font-size':'100%','border-bottom':'3px solid #ccc'});
				$('.rest span').css({'font-size':'85%','border-bottom':'8px solid #ccc'});
				
				$('.minusRest').css({'display':'none'});
				$('.minusWork').css({'display':'block'});			
			
				nextInterval = 1;
				typeInt = 'work';
			} 
	
			
		});
	
			
		$(".newProject").click(function () {
      $(".newProjectWrapper").toggle();
      return false;
    });
    
		$("a.projectEdit").click(function () {
			//getting the object status
			var ttm2 = $(this).parents(".projectList").find(".projectDataEdit");
    			if ( $(ttm2).is('.hide') ) {
     				var hide = true;
     			} else {
     				var hide = false;
     			}
			//hiding each object
		    $("div.projectDataEdit").each(function (i) {
					if( $("div.projectDataEdit").not('.hide') ) {
						$("div.projectDataEdit").addClass('hide');
					}
				});
				//if it was hidden showing it.
				if ( hide == true ) {
     			$(this).parents(".projectList").find(".projectDataEdit").toggleClass('hide');
     		}

      return false;
    });
  
  	//colorPicker
		$(".colorPicker").click(function () {
			var colorCode = $(this).text();
			var projectEdit = $(this).parents(".projectList").children('.projectPreview');
			$(projectEdit).css({'background-color':colorCode,'color':colorCode});
			var attrTest = $(this).parent().siblings('.span-5').children('input:eq(1)').attr({value : colorCode});
			return false;
		}); 
  
  
  
  
  
    
		/*
		$('.projectSubmit').click(function(){
			$(this).parents("form:first").ajaxSubmit({
				success: function(responseText, responseCode) {
						$('#ajax-save-message').hide().html(responseText).fadeIn();					
						//$('#ajax-save-message').fadeOut(5000);
					},
				resetForm: true
				});
			return false;
		})
		*/
		
		$('.myProject:first').after('<hr style="margin:5px"/>').addClass('myProjectFirst');
		
		$(' a img.pageImgPrev').hover(	
			function(){
				$(this).attr({src: "/w-r/img/icons/left_arrow2.png"});
			},
			function(){
				$(this).attr({src: "/w-r/img/icons/left_arrow.png"});				
			}			
		);			
		
		$(' a img.pageImgNext').hover(	
			function(){
				$(this).attr({src: "/w-r/img/icons/right_arrow2.png"});
			},
			function(){
				$(this).attr({src: "/w-r/img/icons/right_arrow.png"});				
			}			
		);
		
		$('.projectActions a ').hover(	
			function(){
				$(this).find('img.projectDelImg').attr({src: "/w-r/img/icons/delete.png"});
			},
			function(){
				$('img.projectDelImg').attr({src: "/w-r/img/icons/delete_2.png"});				
			}			
		);	
			
		$('.projectActions a').hover(	
			function(){
				$(this).find('img.projectEditImg').attr({src: "/w-r/img/icons/edit.png"});
			},
			function(){
				$('img.projectEditImg').attr({src: "/w-r/img/icons/edit_2.png"});				
			}			
		);		
				
});

