//@ts-nocheck


//The function creates tabs

function startg7Tab(evt, tabName) {
    //Declare all varibales;
    var f, tb7, tls7;

    //Access all elements with className tabcontents and store in tabcontent;
    //Loop through all the available elements and hide them;

    tb7 = document.getElementsByClassName("grd7hub");
    for (f = 0; f < tb7.length; f++) {
        tb7[f].style.display = "none";
        
    }

    //Get all elements with className tabLink, and store them in tabLinks;
    //Loop through each, target the className and replace it with className "active";

    tls7 = document.getElementsByClassName("grade7abtn");
    for(f = 0; f < tls7.length; f++) {
        tls7[f].className = tls7[f].className.replace("active", "");
                
    }

        //Get an element, by its tabName, and display it if className is "active";
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += "active";
        
}



//load the element with the id="defaultOpen" and click on it
var open = document.getElementById("default1Open").click();





