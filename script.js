const läggTill = document.querySelector('button');
var myList = document.querySelector('#list');
var userInput = document.querySelector("input[name=todo]");
var count = -1;

läggTill.addEventListener('click', function () { 
    userInput = document.querySelector("input[name=todo]");
    if (userInput.value.length < 1) {} else {
        if (userInput.value.includes('plugga javascript')) {} else {

        count += 1;   
        myList = document.querySelector('#list');
    
        const item = document.createElement('li');
        item.id = count;
        const itemText = document.createTextNode(userInput.value);

        const span = document.createElement("span");
        span.id = count;
        span.setAttribute('onclick','removeThis(this.id);');
        span.style.marginLeft = 30;
        const spanText = document.createTextNode('🗑️');
        
        span.appendChild(spanText);    
        item.appendChild(itemText);
        item.appendChild(span);
        myList.appendChild(item);

        userInput.value = "";
        }
    }
});

const removeThis = (id) => document.getElementById(id).outerHTML = "";

myList.addEventListener('click', (klicket) => {
    const x = klicket.target.id;
    if (document.getElementById(x) != null)
    {      
        document.getElementById(x).classList.toggle('klart'); 
    }    
});

userInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector('button').click();
    }
});
