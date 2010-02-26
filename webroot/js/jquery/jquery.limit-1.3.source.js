(function($){ 
     $.fn.extend({  
         limit: function(_limit,_element) {
			
			return this.each(function() {
			
				var	interval, substringFunction, self = $(this)[0], limit = _limit, element = _element;
				
				self.addEventListener('focus',function(){ interval = window.setInterval(substring,100); },false);	
				self.addEventListener('blur',function(){ clearInterval(interval); substring(); },false);
				
				eval("function substring(){ var length = self.value.length;if(length > limit){self.value = self.value.substring(0,limit);}" + ((typeof element != 'undefined')?"if($(element).html() != limit-length){$(element).html((limit-length<=0)?'0':limit-length);}}":"}"));

				substring();
			
			});
			
        } 
    }); 
})(jQuery);