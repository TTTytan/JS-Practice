(function() {
  var heading = document.querySelector('h1');
  //.heading.innerHTML = '<span>Subtitle</span>';
  var element = document.createElement('span'); 
  var text = document.createTextNode('subtitle');
  element.appendChild(text);
  //heading.appendChild(element);
  heading.insertBefore(element, heading.firstChild);
})();

(function() {
  var simpleObject = {};
  console.log(simpleObject.constructor);
  console.log(simpleObject.toString);
})();