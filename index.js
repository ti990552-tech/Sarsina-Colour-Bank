
const myCarousel = document.getElementById('carouselExample');


const backToTopButton = document.querySelector('.back-home');

const elementIntro = document.getElementById('intro');


const footer1 = document.querySelector('.footer1');
const waveElement1 = document.querySelector('.wave1');
const waveElement2 = document.querySelector('.wave2');
const waveElement3 = document.querySelector('.wave3');
const waveElement4 = document.querySelector('.wave4');
const waveElement5 = document.querySelector('.wave5');


var loader = document.getElementById("loading");

window.addEventListener("load", function() {
  loader.style.display = "none";
}

);


// 3. Setup the event listener for when the slide has changed
myCarousel.addEventListener('slid.bs.carousel', function (event) {
    // 4. 'event.relatedTarget' points to the newly active .carousel-item
    const activeSlide = event.relatedTarget;

    // 5. Get the color defined in the HTML 'data-wave-color' attribute
    const newColorF = activeSlide.getAttribute('data-wave-color');
    console.log("Updating wave to: " + newColorF); // Helpful debug log
    
    
    
    const newColor = newColorF.replace('#', '%23');
    // Reconstruct the SVG string with the new color variable
    footer1.style.background = `${newColorF}`;
    elementIntro.style.webkitTextStroke = `2px ${newColorF}`;
    elementIntro.style.textShadow = `3px 3px 2px ${newColorF}`;
  

// Reconstruct the SVG string with the new color variable
waveElement1.style.backgroundImage = `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="${newColor}" fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,112C384,75,480,53,576,48C672,43,768,53,864,74.7C960,96,1056,128,1152,160C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>')`;


// Reconstruct the SVG string with the new color variable
waveElement2.style.backgroundImage = `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="${newColor}" fill-opacity="1" d="M0,288L48,250.7C96,213,192,139,288,144C384,149,480,235,576,266.7C672,299,768,277,864,240C960,203,1056,149,1152,149.3C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>')`;



// Reconstruct the SVG string with the new color variable
waveElement3.style.backgroundImage = `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="${newColor}" fill-opacity="1" d="M0,256L48,218.7C96,181,192,107,288,106.7C384,107,480,181,576,176C672,171,768,85,864,69.3C960,53,1056,107,1152,154.7C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>')`;



// Reconstruct the SVG string with the new color variable
waveElement4.style.backgroundImage = `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'><path fill='${newColor}' fill-opacity='1' d='M0,256L120,224C240,192,480,128,720,138.7C960,149,1200,235,1320,277.3L1440,320L1440,320L0,320Z'></path></svg>")`;



// Reconstruct the SVG string with the new color variable
waveElement5.style.backgroundImage = `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="${newColor}" fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,112C384,75,480,53,576,48C672,43,768,53,864,74.7C960,96,1056,128,1152,160C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>')`;

});


window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});



function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

let intro = document.getElementById("intro");

window.onload = async function() {

    if (intro) {
      
      setTimeout(() => {
          intro.classList.add("fade");
            intro.innerHTML = "THANK YOU <br> FOR <br> VISITING US.";
            intro.classList.add("show");
        }, 3000);
    };
await sleep(10000);

setTimeout(() => {
   intro.innerHTML = "Experience <br> the Perfect <br> Finish.";
}, 2000);

};





function sendMail(e) {
  e.preventDefault();

  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  };

  emailjs.send("service_0wpvkoq", "template_hsapoxu", params)
    .then(function(res) {
      alert("Email sent successfully!");
        // ✅ Clear form fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
      
      console.log(res);
    })
    .catch(function(err) {
      alert("Failed to send!");
      console.log(err);
    });
}

// document.getElementById("contactForm").reset();