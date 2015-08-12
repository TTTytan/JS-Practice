(function() {
  var myHeader = document.querySelector('h1');
  myHeader.innerHTML = 'future-ink Rocks!';
})();

(function() {

  var button = document.getElementById('toggleImg');
  
  button.addEventListener('click', changeImg, false);

  function changeImg() {
    var currentImg = document.getElementById('banner');

    if(currentImg.getAttribute('src') == 'images/firefox-icon.png') {
      currentImg.setAttribute('src', 'images/fi-logo.png');
    } else {
      currentImg.setAttribute('src', 'images/firefox-icon.png');
    }
  }

})();