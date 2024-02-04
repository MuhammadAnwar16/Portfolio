const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 200)
});

let menu =  document.querySelector('#menu-icon');
let navlist =  document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

const sr = ScrollReveal({
    distance: '40px',
    duration: 2050,
    delay: 200,
    reset: true
});

sr.reveal('.hero-text',{origin:'top'});
sr.reveal('.about-img, .service-item, .about-text',{origin:'bottom'});
sr.reveal('.about-text h2, .text-center, .right-contact h2',{origin:'top'});
sr.reveal('.left-contact',{origin:'left'});
sr.reveal('.right-contact',{origin:'right'});
sr.reveal('.end-section',{origin:'top'});

document.getElementById("downloadCV").addEventListener("click", function() {
    // Create an invisible anchor element
    var link = document.createElement("a");

    // Set the href attribute to the path of your PDF file
    link.href = "@Resume.pdf";

    // Set the download attribute with the desired file name
    link.download = "Muhammad_Anwar_CV.pdf";

    // Append the anchor element to the document
    document.body.appendChild(link);

    // Trigger a click event on the anchor element to start the download
    link.click();

    // Remove the anchor element from the document
    document.body.removeChild(link);
});
