const scrollToTopButton = document.querySelector('.scroll-to-top');

// Initially hide the button
scrollToTopButton.classList.add('fade');

// When the user scrolls down 300px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    // scrollToTopButton.style.visibility = 'visible';
    scrollToTopButton.classList.remove('fade');
  } else {
    // scrollToTopButton.style.visibility = 'hidden';
    scrollToTopButton.classList.add('fade');
  }
}

scrollToTopButton.addEventListener('click', function() {
  document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
