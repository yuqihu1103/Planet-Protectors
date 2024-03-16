// game.js
document.addEventListener("DOMContentLoaded", function () {
  var buttonsContainer = document.getElementById("buttonsContainer");
  buttonsContainer.innerHTML = `
    <button onclick="loadLevel(1)">Tree Planter</button>
    <button onclick="loadLevel(2)">Level 1</button>
    <button onclick="loadLevel(3)">Level 3</button>
    <button id="back"> Back to Homepage</button>
  `;
  const backButton = document.getElementById("back");
  backButton.addEventListener("click", redirectToHomePage);

  function redirectToHomePage(event) {
    event.preventDefault(); // Prevent default link behavior (navigating to "#")
    window.location.href = "../index.html"; // Navigate to the game.html page
  }
});

function loadLevel(level) {
  var scratchFrame = document.getElementById("scratchFrame");
  switch (level) {
    case 1:
      scratchFrame.src = "https://scratch.mit.edu/projects/984039284/embed";
      break;
    case 2:
      scratchFrame.src = "https://scratch.mit.edu/projects/level1_link/embed";
      break;
    case 3:
      scratchFrame.src = "https://scratch.mit.edu/projects/level3_link/embed";
      break;
    default:
      scratchFrame.src = "https://scratch.mit.edu/projects/984039284/embed";
      break;
  }
}
