//adding scroll to top feature
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show or hide the button based on the user's scroll position
window.addEventListener('scroll', function() {
    var scrollToTopButton = document.getElementById('scrollToTopBtn');
    
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});