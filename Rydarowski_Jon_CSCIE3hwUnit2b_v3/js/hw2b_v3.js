/* hw2b.js */
"use strict";

(function(){
    var newArray = [];
    var button = document.getElementById("doit");
    var element = document.getElementById("output");
	

    			// Constructor function
    function addBookEntry(n,a,e){
        		//var newArray_Array = [];
        this.n = n;
        this.a = a;
        this.e = e;

    }

    button.onclick = function(){
        
        var name = document.getElementById("name").value;
        var address = document.getElementById("address").value;
        var email = document.getElementById("email").value;      
        var myNewArrayEntry = new addBookEntry(name,address,email);

        writeRowToPage(myNewArrayEntry,element);
		newArray.push(myNewArrayEntry);
		
        		console.log(myNewArrayEntry); //check success
        window.localStorage.setItem('myArray',JSON.stringify(newArray));
        		console.log(window.localStorage.getItem("myArray")); //check success
        var s = JSON.parse(window.localStorage.getItem("myArray"));
        		//window.localStorage["myArray"].clear();
    };


    function writeRowToPage(dataObject, element) {
        var s = "<div class=\"info\">";

        s+='<div class="nameDiv">';
        if (dataObject.n !== 'undefined') {
            s+=dataObject.n;
        }
        s+= '</div><div class="addrDiv">';
        if (dataObject.a !== 'undefined') {
            s+=dataObject.a;
        }
        s+= '</div><div class="emailDiv">';
        if (dataObject.e !== 'undefined') {
            s+=dataObject.e;
        }
        s+= '</div></div>';

        element.innerHTML += s;
    }

    var string = JSON.parse(window.localStorage.getItem("myArray"));
				//onload get from local
    window.onload = function(){
        if ( string != null)
        for (var i = 0; i < string.length; i++){
   
            writeRowToPage(string[i],element);
            console.log(string[i]);
        }
    };


})();