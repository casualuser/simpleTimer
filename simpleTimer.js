/**
* @author Alexandr Ivantsov (shpuntik74@gmail.com)
* @uri http://alex_ivantsov.ru/
*/

(function($){
	
	var date = new Date();	
	var defaults = {
		date : date.getDate() + "," + date.getHours() + "," + date.getMinutes() + "," + date.getSeconds()
	};
	var options;
	
	$.fn.simpleTimer = function(params){
		
		options = $.extend({}, defaults, params);
		var event_date = options.date.split(",");
		
		var t_event = {
			day  : parseInt(event_date[0]), 	
			hour : parseInt(event_date[1]),	
			min  : parseInt(event_date[2]),	
			sec  : parseInt(event_date[3])
		};
		
		var t = setInterval(timer, 1000);					
		
		function timer(){
		
			date = new Date();
									
			var now = {
				day  : date.getDate(),
				hour : date.getHours(),
				min  : date.getMinutes(),
				sec  : date.getSeconds()
			};
											
			t_event.total = t_event.day * 24 * 60 * 60 + t_event.hour * 60 * 60 + t_event.min * 60 + t_event.sec;			
			now.total =  now.day * 24 * 60 * 60 + now.hour * 60 * 60 + now.min * 60 + now.sec;			
			var diff = t_event.total - now.total;
						
			if(diff <= 0){
				clearInterval(t);
				$("#timer").html("00:00:00");
				alert("Time is up!");
				return false;
			};
								
			var hour = Math.floor(diff / (60 * 60));
			var min  = Math.floor((diff - hour * 60 * 60) / 60);
			var sec  = diff % 60;
			if(hour < 10) hour = "0" + hour;
			if(min < 10) min = "0" + min;
			if(sec < 10) sec = "0" + sec;												
					
			$("#timer").html(hour + ":" + min + ":" + sec);					
		};
		
		return this;
		
	};
								
})(jQuery);
