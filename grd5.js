//@ts-nocheck


//The function creates tabs

function startg5Tab(evt, tabName) {
    //Declare all varibales;
    var d, tb5, tls5;

    //Access all elements with className tabcontents and store in tabcontent;
    //Loop through all the available elements and hide them;

    tb5 = document.getElementsByClassName("grd5hub");
    for (d = 0; d < tb5.length; d++) {
        tb5[d].style.display = "none";
        
    }

    //Get all elements with className tabLink, and store them in tabLinks;
    //Loop through each, target the className and replace it with className "active";

    tls5 = document.getElementsByClassName("grade5abtn");
    for(d = 0; d < tls5.length; d++) {
        tls5[d].className = tls5[d].className.replace("active", "");
                
    }

        //Get an element, by its tabName, and display it if className is "active";
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += "active";
        
}



//load the element with the id="defaultOpen" and click on it
var open = document.getElementById("default1Open").click();





