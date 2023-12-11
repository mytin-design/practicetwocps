//Automatic carousel for mentorship page

let slideT = 0;

displayS();



function displayS() {
    let u;
    let sbox = document.getElementsByClassName("sboximg");
    for(u = 0;u < sbox.length;u++) {
        sbox[u].style.display = "none";
    }
    slideT++;

    if(slideT > sbox.length) {
        slideT = 1;
    }

    

    sbox[slideT-1].style.display = "block";
    setTimeout(displayS, 2000);// Change image after every 2 seconds;

    

}