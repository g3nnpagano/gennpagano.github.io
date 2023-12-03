
/** 
 * sleeps for a given number of ms
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


/** 
 * decide how the program should resopond to certain key presses
 */
function choosePath(e){

  document.getElementById("myInput").focus();
  if(e.key == 'Enter'){
    printUser();
  } else if(e.keyCode == '38'){ // up arrow
    e.preventDefault();
    if(counter <= 0){
      document.getElementById("myInput").value = hist[0];
    } else{
      counter--;
      document.getElementById("myInput").value = hist[counter];
    } 
  } else if(e.keyCode == '40'){ // down arrow
    e.preventDefault();
    if(document.getElementById("myInput").value == ""){
      //do nothing
    } else if(counter == hist.length - 1){
      document.getElementById("myInput").value = "";
      counter++;
    } else if(counter > hist.length - 1){
      document.getElementById("myInput").value = "";
    } else{
      counter++;
      document.getElementById("myInput").value = hist[counter];
    }
  }
}


/** 
 * called at the start of the program. Creates text box, displays logo and help message
 */
async function start(){
  let newLine = document.createElement("div");
  newLine.className = "spaced";
  newLine.id = "sp";

  let username = document.createElement("span");
  let col = document.createElement("span");
  let til = document.createElement("span");
  let dol = document.createElement("span");

  let tbox = document.createElement("input");
  tbox.className = "inputText";
  tbox.spellcheck = false;
  tbox.id = "myInput";

  username.appendChild(document.createTextNode("visitor@gennSite"));
  username.className = "greenText";

  col.appendChild(document.createTextNode(":"));
  col.className = "whiteText";

  til.appendChild(document.createTextNode("~"));
  til.className = "blueText";

  dol.appendChild(document.createTextNode("$"));
  dol.className = "whiteText";

  newLine.appendChild(username);
  newLine.appendChild(col);
  newLine.appendChild(til);
  newLine.appendChild(dol);

  newLine.appendChild(tbox);
  document.body.appendChild(newLine);

  let helpMessage = document.createElement("p");
  helpMessage.className = "hlpMessage";
  helpMessage.id = "hlp";
  helpMessage.textContent = "Type " + "\'help\' for the list of commands in the prompt below";

  logo(true);

  document.getElementById("invisible_div").appendChild(helpMessage);
  document.getElementById("myInput").focus();
}


/** 
 * copies input box and contents into a new string and appends it to the screen.
 * Then decides what function to call based on the input in the text box
 */
function printUser(){

  x = document.getElementById("myInput").value;

  let newLine = document.createElement("div");
  newLine.className = "spaced";

  let username = document.createElement("span");
  let col = document.createElement("span");
  let til = document.createElement("span");
  let dol = document.createElement("span");

  username.appendChild(document.createTextNode("visitor@gennSite"));
  username.className = "greenText";

  col.appendChild(document.createTextNode(":"));
  col.className = "whiteText";

  til.appendChild(document.createTextNode("~"));
  til.className = "blueText";

  dol.appendChild(document.createTextNode("$"));
  dol.className = "whiteText";

  newLine.appendChild(username);
  newLine.appendChild(col);
  newLine.appendChild(til);
  newLine.appendChild(dol);

  let thing = document.createElement("span");
  thing.appendChild(document.createTextNode(" " + x));
  thing.className = "greyText";
  newLine.appendChild(thing);

  document.getElementById("invisible_div").appendChild(newLine);
  let element = document.getElementById("sp");
  element.scrollIntoView();
  if(x.trim() != ""){
    hist.push(document.getElementById("myInput").value);
  }
  document.getElementById("myInput").value = "";
  counter = hist.length;

  if(x == "clear"){
    clear();
  } else if(x.toLowerCase() == "help"){
    help();
  } else if(x.toLowerCase() == ""){
    // do nothing
  }  else if(x.toLowerCase() == "webpage"){
    webpage();
  } else if(x.toLowerCase() == "resume"){
	resume();
  }else{
    invalid();
  }

  element = document.getElementById("sp");
  element.scrollIntoView();

}


/** 
 * clears DOM elements from the 'invisible_div', leaving only the input box
 */
function clear(){
  let element = document.getElementById("invisible_div");
  element.innerHTML = '';
}


/** 
 * displays the various commands of this website
 */
function help(){

  const commands = []
  commands[0] = 'help' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 'print commands';
  commands[1] = 'clear' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 'clear terminal';
  commands[2] = 'webpage' + '\xa0\xa0\xa0\xa0\xa0' + 'visit my Website!';
  commands[6] = 'resume' + '\xa0\xa0\xa0\xa0\xa0\xa0' + 'display my resume in a new tab';
  for(let i = 0; i < commands.length; i++){
    let buf = document.createElement("p");
    buf.textContent = commands[i];
    buf.className = "magentaText";
    document.getElementById("invisible_div").appendChild(buf);
  }
}


/** 
 * displays message for invalid commands
 */
function invalid(){
  const store = document.createElement("div");
  store.className = "aquaText";

  const err = document.createElement("div");
  err.appendChild(document.createTextNode("\'" + x + "\'" + " is not a valid command"));

  const hlp = document.createElement("div");
  hlp.appendChild(document.createTextNode("Type " + "\'help\' for the list of commands"));

  store.appendChild(err);
  store.appendChild(hlp);
  document.getElementById("invisible_div").appendChild(store);
}

/** 
 * displays the logo of the webiste and loop trough colors
 * @param {boolean} first - true if this is the first time the function is called
 *							false otherwise
 */
async function logo(first){

  const store = document.createElement("div");

  const lines = [];
  lines[0] = "  /$$$$$$  /$$$$$$$$ /$$   /$$ /$$   /$$  /$$$$$$  /$$$$$$$   /$$$$$$ ";
  lines[1] = " /$$__  $$| $$_____/| $$$ | $$| $$$ | $$ /$$__  $$| $$__  $$ /$$__  $$";
  lines[2] = "| $$  \\__/| $$      | $$$$| $$| $$$$| $$| $$  \\ $$| $$  \\ $$| $$  \\ $$";
  lines[2] = "| $$  \\__/| $$      | $$$$| $$| $$$$| $$| $$  \\ $$| $$  \\ $$| $$  \\ $$";
  lines[3] = "| $$ /$$$$| $$$$$   | $$ $$ $$| $$ $$ $$| $$$$$$$$| $$$$$$$/| $$  | $$";
  lines[4] = "| $$|_  $$| $$__/   | $$  $$$$| $$  $$$$| $$__  $$| $$__  $$| $$  | $$";
  lines[5] = "| $$  \\ $$| $$      | $$\\  $$$| $$\\  $$$| $$  | $$| $$  \\ $$| $$  | $$";
  lines[6] = "|  $$$$$$/| $$$$$$$$| $$ \\  $$| $$ \\  $$| $$  | $$| $$  | $$|  $$$$$$/";
  lines[7] = " \\______/ |________/|__/  \\__/|__/  \\__/|__/  |__/|__/  |__/ \\______/ "
  lines[8] = " /$$$$$$$   /$$$$$$  /$$$$$$$  /$$$$$$$$ /$$$$$$$$ /$$$$$$  /$$       /$$$$$$  /$$$$$$        /$$$$$$$$ /$$$$$$$$ /$$$$$$$  /$$      /$$ /$$$$$$ /$$   /$$  /$$$$$$  /$$      ";
  lines[9] = "| $$__  $$ /$$__  $$| $$__  $$|__  $$__/| $$_____//$$__  $$| $$      |_  $$_/ /$$__  $$      |__  $$__/| $$_____/| $$__  $$| $$$    /$$$|_  $$_/| $$$ | $$ /$$__  $$| $$      ";
  lines[10] = "| $$  \\ $$| $$  \\ $$| $$  \\ $$   | $$   | $$     | $$  \\ $$| $$        | $$  | $$  \\ $$         | $$   | $$      | $$  \\ $$| $$$$  /$$$$  | $$  | $$$$| $$| $$  \\ $$| $$      ";
  lines[11] = "| $$$$$$$/| $$  | $$| $$$$$$$/   | $$   | $$$$$  | $$  | $$| $$        | $$  | $$  | $$         | $$   | $$$$$   | $$$$$$$/| $$ $$/$$ $$  | $$  | $$ $$ $$| $$$$$$$$| $$      ";
  lines[12] = "| $$____/ | $$  | $$| $$__  $$   | $$   | $$__/  | $$  | $$| $$        | $$  | $$  | $$         | $$   | $$__/   | $$__  $$| $$  $$$| $$  | $$  | $$  $$$$| $$__  $$| $$      ";
  lines[13] = "| $$      | $$  | $$| $$  \\ $$   | $$   | $$     | $$  | $$| $$        | $$  | $$  | $$         | $$   | $$      | $$  \\ $$| $$\\  $ | $$  | $$  | $$\\  $$$| $$  | $$| $$      ";
  lines[14] = "| $$      |  $$$$$$/| $$  | $$   | $$   | $$     |  $$$$$$/| $$$$$$$$ /$$$$$$|  $$$$$$/         | $$   | $$$$$$$$| $$  | $$| $$ \\/  | $$ /$$$$$$| $$ \\  $$| $$  | $$| $$$$$$$$";
  lines[15] = "|__/       \\______/ |__/  |__/   |__/   |__/      \\______/ |________/|______/ \\______/          |__/   |________/|__/  |__/|__/     |__/|______/|__/  \\__/|__/  |__/|________/";
  

  for(let i = 0; i < lines.length; i++){
    lines[i] = lines[i].replace(/ /g, '\xa0');
    let buf = document.createElement("p");
    buf.textContent = lines[i];
    buf.className = "blackText";
    store.appendChild(buf);
    if(i == 7){
      store.appendChild(document.createElement("br"));
    }
  }
  
  document.getElementById("invisible_div").appendChild(store);

  const parent = document.getElementById("invisible_div").lastElementChild;
  const children = parent.children;

  colors = ['tangerineText', 'magentaText', 'aquaText', 'greenText', 'whiteText'];
  for(let c = 0; c < colors.length; c++){
    for(let i = 0; i < children.length; i++){
      await sleep(sleepTime);
      children[i].className = colors[c];
    }
    if(first == true && c == 0){
      document.getElementById("hlp").className = "reddishText";
    }
  }
}


/** 
 * prints a discription about who I am
 */
function webpage(){
  const store = document.createElement("p");
  store.textContent = "You can visit my website here -> ";
  store.className = "half";
  const link = document.createElement("a");
  link.textContent = "website";
  link.href = "webpage.html";
  link.target = "_blank";
  store.appendChild(link);
  document.getElementById("invisible_div").appendChild(store);
}


/**
 * opens resume in a new tab
 */
function resume(){
	window.open('files\\PGNGNR-Cv 1.0.pdf');
}


window.addEventListener("keydown", choosePath); // listen for key presses

var x = "";			// the input that will be in the input box
var sleepTime = 15; // the time  between each color change for logo
var hist = [];		// an array to store all commands excecuted by the user
var counter = 0;	// used to sift through the previous commands
