//Tab for sign up

function startRegTab(evt, registrar) {
    let regtabbtn, regtabcontent, t;
  
  
  
    //Get all tacontents for sign up and hide them
  regtabcontent = document.getElementsByClassName('regtabcontent');
  for(t = 0; t < regtabcontent.length;t++) {
    regtabcontent[t].style.display = "none";
  }
  
  
  
  //Get all buttons and hide the active class;
  
    regtabbtn = document.getElementsByClassName("regtabbtn");
  
    for(t = 0; t < regtabbtn.length;t++) {
      regtabbtn[t].className = regtabbtn[t].className.replace('active', "");
    }
  
  
    document.getElementById(registrar).style.display = "block";
    evt.currentTarget.className += "active";
  }


  document.getElementById("defaultReg").click();