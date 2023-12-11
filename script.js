//When the user scrolls doqwn 20px from the top of the document, slide down the navbar
//When the user scrolls to the top of the page, slide up the navbar out of the top view

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('description').style.top = "0";
    } else {
        document.getElementById('description').style.top = "-70px";
    }
}




//for sidepanel 

//open the sidepanel by setting the width to 25pc

let openNav = () => {
    document.getElementById("sidePanel").style.width = "15pc";
}


//close the panel by changing width to 0

let closeNav = () => {
    document.getElementById("sidePanel").style.width = "0";
}


//pop up dialog box
//ts check

let dbox = document.querySelector(".dialogmain");
let body = document.querySelector("body");
let closeDialog = () => {
    //get buttons and dialog box
    let b1 = document.getElementById("b1");
    let b2 = document.getElementById("b2");

    dbox.style.display = "none";

    //should effect when dialog box is not active
    body.classList.remove("addopacity");
    dbox.classList.remove("removeopacity");

}

let openDialog = () => {
    dbox.style.display = "block";

    //should effect when dialog box is active
    body.classList.add("addopacity");
    dbox.classList.add("removeopacity");
}






/*
//create acc redirect

- This script is conflicting with the carousel - check out why  
let createbtn = document.querySelector(".createBtn")

createbtn.onclick = goTo


function goTo() {
    window.open("./log-form.html", "_blank")
}

*/

/*
//exams search criteria logic
let gradeFilter = document.getElementById("gradeftr")

let streamFilter = document.getElementById("streamftr")

let yearFilter = document.getElementById("yearftr")

let termFilter = document.getElementById("termftr")

let typeFilter = document.getElementById("typeftr")

//get search btn
let examsearchbtn = document.getElementById("exTySearch")

examsearchbtn.onclick = checkValues

//get all possible value inputs
//Grade
let fgradedef = document.getElementById("fgradedef")

let fgrade1 = document.getElementById("fgrade1")

let fgrade2 = document.getElementById("fgrade2")

let fgrade3 = document.getElementById("fgrade3")

let fgrade4 = document.getElementById("fgrade4")

let fgrade5 = document.getElementById("fgrade5")

let fgrade6 = document.getElementById("fgrade6")

let fgrade7 = document.getElementById("fgrade7")

let fgrade8 = document.getElementById("fgrade8")



//streams

let fstreamdef = document.getElementById("fstreamdef")

let fstreamx = document.getElementById("fstreamx")

let fstreamy = document.getElementById("fstreamy")

let fstreamz = document.getElementById("fstreamz")

//year

let fyeardef = document.getElementById("fyeardef")

let fyear0 = document.getElementById("fyear0")

let fyear1 = document.getElementById("fyear1")

let fyear2 = document.getElementById("fyear2")

let fyear3 = document.getElementById("fyear3")

let fyear4 = document.getElementById("fyear4")


let fyear5 = document.getElementById("fyear5")

let fyear6 = document.getElementById("fyear6")

let fyear7 = document.getElementById("fyear7")

let fyear8 = document.getElementById("fyear8")


let fyear9 = document.getElementById("fyear9")

let fyear10 = document.getElementById("fyear10")

let fyear11 = document.getElementById("fyear11")

let fyear12 = document.getElementById("fyear12")

let fyear13 = document.getElementById("fyear13")

let fyear14 = document.getElementById("fyear14")

let fyear15 = document.getElementById("fyear15")

let fyear16 = document.getElementById("fyear16")

let fyear17 = document.getElementById("fyear17")

let fyear18 = document.getElementById("fyear18")

let fyear19 = document.getElementById("fyear19")

let fyear20 = document.getElementById("fyear20")

let fyear21 = document.getElementById("fyear21")

let fyear22 = document.getElementById("fyear22")

let fyear23 = document.getElementById("fyear23")


//Term

let ftermdef = document.getElementById("ftermdef")

let ftermone = document.getElementById("ftermone")

let ftermtwo = document.getElementById("ftermtwo")

let ftermthree = document.getElementById("ftermthree")


//Type

let ftypedef = document.getElementById("ftypedef")

let ftypeopener = document.getElementById("ftypeopener")

let ftypemid = document.getElementById("ftypemid")

let ftypeend = document.getElementById("ftypeend")

let ftypeother = document.getElementById("ftypeother")


//get the display container
let examsresult = document.getElementById("examsresults")



function checkValues() {
    //check values for grd 1x, yr 2022, end term, 
    if(fgradedef && ftermdef && ftypedef && fstreamdef && fyeardef) {
        
        //this section should be the default
        //that is- when everything else fails, show this
        let displayVoid = document.createElement("p")

        examsresult.appendChild(displayVoid)
        displayVoid.innerHTML = "Incorrect Search Criteria"
        displayVoid.style.fontSize = "2.5rem"
        displayVoid.style.fontWeight = "bold"
        displayVoid.style.textAlign = "center"


    } else if(fgrade1 && fstreamx && fyear22 && ftypeopener && ftermone) {
        window.open("./exams/G1X-Term1-2022-opener.docx", "_blank") 
    } else {
        let displayVoid = document.createElement("p")

        examsresult.appendChild(displayVoid)
        displayVoid.innerHTML = '"Incorrect Search Criteria"'
        displayVoid.style.fontSize = "2.5rem"
        displayVoid.style.fontWeight = "bold"
        displayVoid.style.textAlign = "center"


    }

}

*/

//header carousel 
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("pcard");
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if(slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); //Change image every 2 seconds;

    let inds = document.getElementsByClassName("ind");

    for(i = 0; i < inds.length;i++) {
        inds[i].className = inds[i].className.replace("active", "");
    }

    slides[slideIndex-1].style.display = "block";
    inds[slideIndex-1].className += " active";
}


function plusSlides(n) {
    showSlides(slideIndex += n);
}





//Employee joining form



function openJoinerForm(){
    document.getElementById("joinerHolder").style.display = "block";
}


function closeJoinerForm() {
    document.getElementById("joinerHolder").style.display = "none";
}






