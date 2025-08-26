const careers = ["Web Developer", "Freelancer", "YouTuber", "Instructor"];
const currentExpress = document.getElementById("container");
let careerIndex = 0;
let charIndex = 0;
let iDelete = false;

function typingEffect() {
  const currentCareer = careers[careerIndex];
  if (!iDelete) {
    // typing
    currentExpress.textContent = `I am ${currentCareer.slice(0, charIndex)}`;
    charIndex++;
    if (charIndex > currentCareer.length) {
      iDelete = true;
      setTimeout(typingEffect, 1500); //pause before deleting
      return;
    }
  } else {
    // deleting
    currentExpress.textContent = `I am ${currentCareer.slice(0, charIndex)}`;
    charIndex--;
  }
  if (charIndex === 0) {
    iDelete = false;
    careerIndex = (careerIndex + 1) % careers.length; //loop careers
  }
  setTimeout(typingEffect, iDelete ? 100 : 200); //keep looping
}

typingEffect(); // start the effect

//Alternative of auto text effecting

/*const careers = ["YouTuber", "Web Developer", "Freelancer", "Instructor"];
  const typingEl = document.getElementById("typing");

  let careerIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentText = careers[careerIndex];

    if (!isDeleting) {
      // Typing
      typingEl.textContent = `I am ${currentText.slice(0, charIndex)}`;
      charIndex++;

      if (charIndex > currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500); // pause before deleting
        return;
      }
    } else {
      // Deleting
      typingEl.textContent = `I am ${currentText.slice(0, charIndex)}`;
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        careerIndex = (careerIndex + 1) % careers.length; // go to next career
      }
    }

    setTimeout(typeEffect, isDeleting ? 100 : 150); // speed difference
  }

  typeEffect();*/
