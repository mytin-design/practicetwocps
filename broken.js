//Handles all search functionality for Consolata School Nyeri website


//SCRIPT FOR NEW FEATURE 12 NOV 2023 - DIALOG BOX OR MODAL 

//tHE BUTTON THAT OPEns this modal is any button that leads to nowwhere

//example - twitter btn in footer  - not working

document.getElementById('twittertempbtn').addEventListener('click', function() {
    document.querySelector('.tempmodal').style.display = 'block';
})


document.querySelector('.closeModal').addEventListener('click', function() {
    document.querySelector('.tempmodal').style.display = 'none';
})
