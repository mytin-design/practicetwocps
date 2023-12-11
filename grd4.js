//@ts-nocheck


//The function creates tabs

function startg4Tab(evt, tabName) {
    //Declare all varibales;
    var c, tb, tls;

    //Access all elements with className tabcontents and store in tabcontent;
    //Loop through all the available elements and hide them;

    tb = document.getElementsByClassName("grd4hub");
    for (c = 0; c < tb.length; c++) {
        tb[c].style.display = "none";
        
    }

    //Get all elements with className tabLink, and store them in tabLinks;
    //Loop through each, target the className and replace it with className "active";

    tls = document.getElementsByClassName("grade4abtn");
    for(c = 0; c < tls.length; c++) {
        tls[c].className = tls[c].className.replace("active", "");
                
    }

        //Get an element, by its tabName, and display it if className is "active";
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += "active";
        
}



//load the element with the id="defaultOpen" and click on it
var open = document.getElementById("default1Open").click();





