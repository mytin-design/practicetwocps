//@ts-nocheck


//The function creates tabs

function startg6Tab(evt, tabName) {
    //Declare all varibales;
    var e, tb6, tls6;

    //Access all elements with className tabcontents and store in tabcontent;
    //Loop through all the available elements and hide them;

    tb6 = document.getElementsByClassName("grd6hub");
    for (e = 0; e < tb6.length; e++) {
        tb6[e].style.display = "none";
        
    }

    //Get all elements with className tabLink, and store them in tabLinks;
    //Loop through each, target the className and replace it with className "active";

    tls6 = document.getElementsByClassName("grade6abtn");
    for(e = 0; e < tls6.length; e++) {
        tls6[e].className = tls6[e].className.replace("active", "");
                
    }

        //Get an element, by its tabName, and display it if className is "active";
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += "active";
        
}



//load the element with the id="defaultOpen" and click on it
var open = document.getElementById("default1Open").click();





