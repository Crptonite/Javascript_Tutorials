const containerEl = document.querySelector(".container");

const careers = ["YouTuber", "Web Developer", "Freelancer", "Instructor"];
let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  // Current career string
  const career = careers[careerIndex];

  // Type out text
  const currentText = career.slice(0, characterIndex);
  const article = career[0].toLowerCase() === "i" ? "an" : "a";
  containerEl.innerHTML = `<h1>I am ${article} ${currentText}</h1>`;

  characterIndex++;

  let delay = 400;

  // Once full word is displayed
  if (characterIndex > career.length) {
    careerIndex++;
    characterIndex = 0;
    delay = 1000; // pause before next word

    // Loop back to first career
    if (careerIndex >= careers.length) {
      careerIndex = 0;
    }
  }

  setTimeout(updateText, delay);
}
