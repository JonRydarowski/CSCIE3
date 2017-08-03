
window.onload = function() { 
	var transformButton = document.getElementById('divideTranscript');
    	transformButton.addEventListener('click', transform, false);
};
			//Get the button and initiate transformation on click. 
			
function transform() {
    var textDiv = document.getElementById("transcriptText");
    var initTextDiv = textDiv.innerHTML;
    var textSite = initTextDiv.split(' ');        
    var textLength = textSite.length;    		
    document.getElementById("transcriptText").innerHTML = ""; 
    
    	    //Variables needed to get the text and divide it within individual tags	
    
    for (var t = 0; t < textLength; t++) {
        var wordTextS = textSite[t];          
              
        var wordSpanS = document.createElement('span');
        var spaceSpanS = document.createElement('span');
        var wordNodeS = document.createTextNode(wordTextS);
        var spaceNodeS = document.createTextNode(' ');
        
		   //FOR loop to create the span nodes

        wordSpanS.addEventListener('mouseover', function () {
            this.setAttribute('class','highlight')
        });
        wordSpanS.addEventListener('mouseout', function (evt) {
            this.setAttribute('class','default')
        });
        
           //Event Listeners for the mouseover/mouseouts for the text
        
        
        wordSpanS.appendChild(wordNodeS);
        spaceSpanS.appendChild(spaceNodeS);
        textDiv.appendChild(wordSpanS);
        textDiv.appendChild(spaceSpanS);
        
          //Applying the appends for the elements.
    }

}
