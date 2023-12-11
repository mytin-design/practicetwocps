//items carousel 

//for new 

let slideCounter = 1;
displayTiles(slideCounter);

function addSlide(y) {
    displayTiles(slideCounter += y);
}

//sliderCounter = 1 + 1; // normal addition
//slideCounter += 1; //self assign
function displayTiles(y) {
    let x;
    let crsl = document.getElementsByClassName("crsl-bx");
    

    if(y > crsl.length) {
        slideCounter = 1;
    }

    if(y < 1) {
        slideCounter = crsl.length;
    }

    for(x = 0; x < crsl.length;x++) {
        crsl[x].style.display = "none";
    }
    
    crsl[slideCounter-1].style.display = "flex";

    
}


//for suggested
let slidesCounter = 1;
displayTile(slidesCounter);

function addSlides(z) {
    displayTile(slidesCounter += z);
}

function displayTile(z) {
    let p;
    let scrsl = document.getElementsByClassName("scrsl-bx");
    

    if(z > scrsl.length) {
        slidesCounter = 1;
    }

    if(z < 1) {
        slidesCounter = scrsl.length;
    }

    for(p = 0; p < scrsl.length;p++) {
        scrsl[p].style.display = "none";
    }
    
    scrsl[slidesCounter-1].style.display = "flex";

    
}


//for common/reco

let slideCount = 1;
displayCount(slideCount);

function addSlider(t) {
    displayCount(slideCount += t);
}

function displayCount(t) {
    let r;

    let rcrsl = document.getElementsByClassName("rcrsl-bx");

    for(r = 0; r < rcrsl.length;r++) {
        rcrsl[r].style.display = "none";
    }

    if(t > rcrsl.length) {
        slideCount = 1;
    }

    if(t < 1) {
        slideCount = rcrsl.length;
    }

    rcrsl[slideCount-1].style.display = "flex";

}




