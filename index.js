let main = document.getElementById('main');
main.remove();

let newHeader = document.createElement('h1');
newHeader.id = 'victory';

let text = document.createTextNode('MOMO is the champion');
newHeader.appendChild(text)