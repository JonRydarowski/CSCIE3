/*
	The box below accepts text input from the keyboard or copy/paste.  Your job is to add a feature to this page that provides an approximate word count for the user who's typing into the page.  

To do this successfully, you'll need to:
Create your own Javascript file in the js directory of this project. Call it whatever you want.
 Add a <script> tag to the page at the bottom that loads your new js file.
In your JS file:
Use document.getElementById() to get the textarea element from the page. You'll need its ID, which you can find in the HTML of this page.
Write an event handler function that runs every time someone types in the textarea. It will look something like this:
myTextareaElement.onkeyup = function(){
    // your code goes here
}
You'll want to access the .value property of the textarea to get the contents of the box as a String
Use String.split() to divide the string (at word boundaries) into an array of Strings
Count the elements in the array. This will be (roughly) the number of words in the box
Write that value into the HTML element that looks like this: <span id="wordcount"></span>
You may notice that this solution as outlined above will not count words correctly if there are extra 'whitespace' characters in your text.  For this assignment, that's OK. However, if you like, for extra credit (10 points) design your solution so that extra consecutive whitespaces are not counted.
	*/
	
var myTextareaElement = document.getElementById("myWordsToCount");

myTextareaElement.onkeyup = function() {
               document.getElementById("wordcount").innerHTML = wordCounting();
               }

wordCounting = function() {
	var wordArea = document.getElementById("myWordsToCount");
	var words = wordArea.value;
	var wordDivision = words.split(" ");
	return wordDivision.length;
}