//@ts-nocheck


//The function creates tabs

function startg2Tab(evt, tabName) {
    //Declare all varibales;
    var a, tabcontentt, tabLinkss;

    //Access all elements with className tabcontents and store in tabcontent;
    //Loop through all the available elements and hide them;

    tabcontentt = document.getElementsByClassName("grd2hub");
    for (a = 0; a < tabcontentt.length; a++) {
        tabcontentt[a].style.display = "none";
        
    }

    //Get all elements with className tabLink, and store them in tabLinks;
    //Loop through each, target the className and replace it with className "active";

    tabLinkss = document.getElementsByClassName("grade2abtn");
    for(a = 0; a < tabLinkss.length; a++) {
        tabLinkss[a].className = tabLinkss[a].className.replace("active", "");
                
    }

        //Get an element, by its tabName, and display it if className is "active";
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += "active";
        
}



//load the element with the id="defaultOpen" and click on it
var open = document.getElementById("default1Open").click();





