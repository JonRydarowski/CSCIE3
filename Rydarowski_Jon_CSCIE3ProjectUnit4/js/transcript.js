/* transcript.js */
(function($){
    $.fn.playerConnect = function(player){
        var transcriptElements = this;
        player.onTime(function(evt){
	        
//Item 2: YOUR CODE TO ADD #2: Next you'll move into the jQuery plugin itself, where you'll get the current position of the video playback from the jwplayer's event object

                var time =  evt.position;  
                console.log(time);     
                       
// YOUR for() loop or transcriptElements.each() goes here...
// YOUR CODE TO ADD #3: Third, you'll write the loop that compares the current player time with the time described in each element, and apply a style if the times match up. 

				for (var i = 0; i < transcriptElements.length; i++) {
	                var spanEle = transcriptElements[i];
	                var transStartTime = parseInt(spanEle.getAttribute("data-start"));
	                var duration = parseFloat(spanEle.getAttribute("data-dur"));
	                if (time >= transStartTime && time <= parseFloat(transStartTime + duration)) {
		                //set the class
	                    spanEle.setAttribute("class", "hilite");
	                } else {
	                    spanEle.setAttribute('class', '');
	                }
	            }
        	});

//Item 4: Finally, the click handler for each element is created, but the logic inside is missing. You'll add the code that causes a click to make the player seek to the right moment.

        return this.click(function(evt){
	        
	        //For the length of the transcriptElements set the target content to the text to match in transcript
	        
	        for (var i = 0; i < transcriptElements.length; i++) {
                var spanEle = $(transcriptElements[i]);
                if (evt.target.textContent == spanEle.text()) {
                    player.seek(spanEle.attr("data-start"));
                }
            }

       });
   };

})(jQuery);

$(document).ready(function(){
   var player = jwplayer("playerDiv").setup({
                    file: "http://www.people.fas.harvard.edu/~lbouthillier/nasa-spinoffs.mp4",
                    height: 360,
                    width: 640,
                    controls:true
                });
                
// Item 1: YOUR CODE TO ADD #1: The first one is near the end of the JS file, where you'll create the jwplayer and load it into the page (this one is already done for you)   
            
   player.onReady(function(){
        $('.words').playerConnect(player);

    });

});
