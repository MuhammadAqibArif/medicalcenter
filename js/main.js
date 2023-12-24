const toggleButtons = document.querySelectorAll('.toggle-button');

toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        const faq = this.parentNode;
        const hiddenText = faq.querySelector('.hidden');
        hiddenText.classList.toggle('hidden');
        if (hiddenText.classList.contains('hidden')) {
            this.textContent = '+';
        } else {
            this.textContent = '-';
        }
    });
});


// Sticky Header Js here 

let header = document.querySelector('.header');
header.classList.toggle('sticky', window.scrollY > 100);



// Animations Reveal Sections

window.addEventListener('scroll', reveal);
function reveal(){
    var reavals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveal.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reavals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if(revealtop < windowheight - revealpoint){
            reveal[i].classList.add('active');
        }
        else{
            reveal[i].classList.remove('active');
        }
    }
}