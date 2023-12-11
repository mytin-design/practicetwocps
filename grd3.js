//@ts-nocheck


//The function creates tabs

function startg3Tab(evt, tabName) {
    //Declare all varibales;
    var b, tabcontenttt, tabLinksss;

    //Access all elements with className tabcontents and store in tabcontent;
    //Loop through all the available elements and hide them;

    tabcontenttt = document.getElementsByClassName("grd3hub");
    for (b = 0; b < tabcontenttt.length; b++) {
        tabcontenttt[b].style.display = "none";
        
    }

    //Get all elements with className tabLink, and store them in tabLinks;
    //Loop through each, target the className and replace it with className "active";

    tabLinksss = document.getElementsByClassName("grade3abtn");
    for(b = 0; b < tabLinksss.length; b++) {
        tabLinksss[b].className = tabLinksss[b].className.replace("active", "");
                
    }

        //Get an element, by its tabName, and display it if className is "active";
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += "active";
        
}



//load the element with the id="defaultOpen" and click on it
var open = document.getElementById("default1Open").click();





