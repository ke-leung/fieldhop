var Twit = require('twit');
var config = require('./config.js');
var T = new Twit(config);

function makeShitHappen(inputFile) {
    var fs = require('fs');
    var text = fs.readFileSync(inputFile, 'utf-8');
    var arrayOfThings = text.split('\n');
    var lastIndex,
        number,
        chosenOne = new String;

    lastIndex = arrayOfThings.length - 1;
  
    number = getRandomArbitrary(lastIndex);
  
    chosenOne = arrayOfThings[number];
    return chosenOne;
}
    
function getRandomArbitrary(max) {
        return Math.floor((Math.random() * max) + 1);
}
 
function mainBoi(){
var places,
    actioneers,
    actions,
    closers,
    prompt;
      
    places = makeShitHappen('./places.txt');
    actioneers = makeShitHappen('./actioneer.txt');
    actions = makeShitHappen('./action.txt');
    closers = makeShitHappen('./closer.txt');
    prompt = places + actioneers + actions + closers;

    T.post('statuses/update', { 
        status: prompt 
    }, function(err, data, response) {
        if (err){
            console.log(err);
            console.log(response);
            console.log("aaaaaaaaaaaaa");
        }
        else {
            console.log(prompt);
        }
   }); 
}

mainBoi();
setInterval(mainBoi, 21600000);  