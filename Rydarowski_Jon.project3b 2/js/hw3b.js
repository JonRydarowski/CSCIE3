/* hw3b.js */

window.onload = function(){

//Item 1 Variables and Listeners	
var forms = document.forms;
var formMain = document.getElementsByName('hw4Form');
var pwd1 = document.getElementById('pwd1');
var pwd2 = document.getElementById('pwd2');
var pwd1Hint = document.getElementById('pwd1Hint');
var pwd2Hint = document.getElementById('pwd2Hint');
pwd1.addEventListener('change', processFormMain, false);
pwd2.addEventListener('change', processFormMain, false);



/*
########################
Item #1: There are two password fields on the form. You will write code that ensures that:
- Users must enter passwords of at least 8 characters.
- The two fields must match.
- Users receive feedback immediately if the passwords don't match, rather than only when the form is submitted.

Reference From HTML: 
  pwd1 | pwd1Hint
  pwd2 | pwd2Hint
#######################
	*/	
	
function processFormMain(){
	if (!pwd1.validity.valid && !pwd2.validity.valid){
		pwd1Hint.style.display = 'block';
	} else {
		pwd1Hint.style.display = 'none';
	}
	
	if (pwd1.value != pwd2.value) {
		pwd2Hint.style.display = 'block';
	} else {
		pwd2Hint.style.display = 'none';
	}
}

/*
######################
Item #2: There is a textarea on the form labeled Brief Bio. This is going to be really brief. Your code will provide a countdown near the 140 character limit caption that counts backwards from 140 to zero to show users how many characters they have left.  You may make it so that once the limit is reached, no more characters show in the field, even if the user keeps typing. Alternatively, you may choose to let users keep typing, but have the page show users how far over the limit they've gone. 

Reference From HTML:
div | charLimit
span | charsLeft
######################	
	*/	

//Item #2 Variables and Listeners
var bioCharacters = document.getElementById('bio');
bioCharacters.addEventListener('keyup', function(){
	var bioCharactersCount = 140;
	document.getElementById('charsLeft').innerHTML = bioCharactersCount - this.value.length;
	if (this.value.length >= 140){
		bioCharacters.style.color = '#ff0000';
	} else {
			bioCharacters.style.color = '#000000';
	}	
}
);
	
/*
######################

Note To TA: While I wanted to do all 6 - I ran out of time. I've decided to roll #3 and #4 together. Based on the choice selection in the "Make" dropdown, presents the user with a choice of a premium feature that they would want to add on to the car. Switching between the car makes presents the user with a different set of features based on the car.

Item #3: Your task is to make the two complimentary SELECT controls work in this way—selecting a value in the first populates the second with appropriate choices. The types of values are entirely up to you— automobile Make/Model is just an example. 

Item #4: Your form should have at least one subsection which will appear depending on the value selected in a checkbox, radio button or SELECT. For example, if the user selectsed a checkbox called "add my Twitter account", a section of the form will appear prompting the user for their Twitter username. You may add this feature anywhere on the form.

######################
*/


//Item #3 and #4 array variables
var firstSelectMakeOptions = ['Jeep', 'Maserati'];
var jeepSelectModelOptions = ['Cherokee','Wrangler','Compass','Patriot'];
var maseratiSelectModelOptions = ['Ghibli','Levante','Quattroporte','Gran Turismo'];
var jeepPremiumFeatures = ['Body Lift','4 Wheel Drive', 'Hard Top' ,'Other'];
var maseratiFeatures = ['Designer Spoiler','Run-Flat Tires', 'Bulletproof Glass','Other'];


//Item #3 & #4: Simple Variable Types
var firstSelect = document.getElementById('firstSelect');
var secondSelect = document.getElementById('secondSelect');
var thirdSelect = document.getElementById('thirdSelect');
var forthSelect = document.getElementById('forthSelect');
var jeepPremium = document.getElementById('jeepPremium');
var maseratiPremium = document.getElementById('maseratiPremium');
var makeLength = firstSelectMakeOptions.length;

    
function clearSelectList(el) {
	var MAX = el.length;
    for (var i = MAX; i >= 0; i--) {
        el.remove(i);
        }
     }
for (var i = 0; i < makeLength; i++) {
        var opt = document.createElement('option');
        var txtNode = document.createTextNode(firstSelectMakeOptions[i]);
        opt.value = i;
        opt.appendChild(txtNode);
        firstSelect.appendChild(opt);
    }

firstSelect.addEventListener('change', function () {
        var indx = this.value;

//clear selections between changes in other selections
        clearSelectList(secondSelect);
        clearSelectList(thirdSelect);
        clearSelectList(forthSelect);


//Based on your choice of car Make the user will be presented with Model and Feature choices that are populated from the associated arrays of options        
        if (indx != '') {
	        if (firstSelect.value == firstSelectMakeOptions.indexOf("Jeep")) {
                jeepPremium.style.display = 'block';	
                maseratiPremium.style.display = 'none';
                var makeLength = jeepSelectModelOptions.length;
                for (var i = 0; i < makeLength; i++) {
                    var opt = document.createElement('option');
                    var txtNode = document.createTextNode(jeepSelectModelOptions[i]);
                    opt.appendChild(txtNode);
                    secondSelect.appendChild(opt);                  
            	}
            } else if (firstSelect.value == firstSelectMakeOptions.indexOf("Maserati")) {
	            maseratiPremium.style.display = 'block';
	            jeepPremium.style.display = 'none';
                var makeLength = maseratiSelectModelOptions.length;
                for (var i = 0; i < makeLength; i++) {
                    var opt = document.createElement('option');
                    var txtNode = document.createTextNode(maseratiSelectModelOptions[i]);
                    opt.appendChild(txtNode);
                    secondSelect.appendChild(opt);    
                } 
                
            }
            if (firstSelect.value == firstSelectMakeOptions.indexOf("Jeep")){
                for (var i = 0; i < makeLength; i++) {
                    var opt = document.createElement('option');
                    var txtNode = document.createTextNode(jeepPremiumFeatures[i]);
                    opt.appendChild(txtNode);
                    thirdSelect.appendChild(opt);    
                }
            } else if (firstSelect.value == firstSelectMakeOptions.indexOf("Maserati")){
	                for (var i = 0; i < makeLength; i++) {
                    var opt = document.createElement('option');
                    var txtNode = document.createTextNode(maseratiFeatures[i]);
                    opt.appendChild(txtNode);
                    forthSelect.appendChild(opt); 
                }
            } else {
                var opt = document.createElement('option');
                var txtNode = document.createTextNode('----');
                opt.appendChild(txtNode);
                modelSelect.appendChild(opt);     
        		}
        }
    })
};//this is the end of the file

