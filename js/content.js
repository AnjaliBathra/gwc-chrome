



/*
// waiting/listening for a message from popup.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    // communication tree - extecuted on receiving a message from popup.js
    if (request === 'dance_on') { // if the message from popup.js is 'dance_on'
         // your functionality here - insert mushroom dance!
        insertMushroom();  
    }

    // EXTRA CODE NOT COVERED IN WORKSHOP
    // send a response back to popup.js that the message has been successfully received
    sendResponse('success');
    
});

// Function to insert the mushroom GIF
function insertMushroom () {
    // For testing purposes:
    // alert("M u s h r o o m");

    // store Mushroom GIF HTML in a variable called data
    var data = '<iframe src="https://giphy.com/embed/Y4rBAwBrTOOggtksBK" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dance-happy-dancing-Y4rBAwBrTOOggtksBK">via GIPHY</a></p>'

    // create an HTML <div> element to insert the GIF into
    var mushroomBox = document.createElement('div');

    // insert data into <div>.......</div>
    mushroomBox.innerHTML = data; 

    // insert the HTML element into the <body> of the current page
    document.body.appendChild(mushroomBox);

}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    // communication tree - extecuted on receiving a message from popup.js
    if (request === 'openDashboard') { // if the message from popup.js is 'dance_on'
         // your functionality here - insert mushroom dance!
        insertMushroom();  
    }

    // EXTRA CODE NOT COVERED IN WORKSHOP
    // send a response back to popup.js that the message has been successfully received
    sendResponse('success');
    
});

*/
