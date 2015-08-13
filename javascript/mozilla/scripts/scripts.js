(function() {
  var myHeading = document.querySelector('h1');
  var button = document.getElementById('toggleImg');
  var userButton = document.getElementById('changeUser');

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
  }

  userButton.onclick = function() {
    setUserName();
  }
  
  button.addEventListener('click', changeImg, false);

  function changeImg() {
    var currentImg = document.getElementById('banner');

    if(currentImg.getAttribute('src') == 'images/firefox-icon.png') {
      currentImg.setAttribute('src', 'images/fi-logo.png');
    } else {
      currentImg.setAttribute('src', 'images/firefox-icon.png');
    }
  }

  function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }

})();