//! Go to top button

//Get el
myBtnScroll = document.getElementById("myBtn");

// When the user scrolls down, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myBtnScroll.style.display = "block";

  } else {
    myBtnScroll.style.display = "none";

  }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};



// ! Change page color
//TODO not working yet, something to the future

function changeBgColor() {
  var btnChangeColor = document.querySelector('.changeColor');
  var bodyBg = document.querySelector('body');
  var textBoxLine = document.querySelectorAll('.text-box-line');

  btnChangeColor.addEventListener('click', function () {
    bodyBg.style.backgroundColor = "var(--grey)";
    textBoxLine.style.borderTop = "2px solid whitesmoke";
  })
  return false;
}

changeBgColor();