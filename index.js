// Your code goes here
// set up DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function (){
    
    // use the events callback function to target the paragraph element with id="text" 

    const newPText = document.getElementById('text');
   
   //replace text with "This si really cool!" using textContent
    newPText.textContent = "This is really cool!";



});


