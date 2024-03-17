// game.js
document.addEventListener("DOMContentLoaded", function () {
  var buttonsContainer = document.getElementById("buttonsContainer");
  buttonsContainer.innerHTML = `
    <button onclick="loadLevel(1)" class="btn btn-primary">Tree Planter</button>
    <button onclick="loadLevel(2)" class="btn btn-primary">Solar Saver</button>
    <button onclick="loadLevel(3)" class="btn btn-primary">Green Traveler</button>
    <button id="back"> Back to Homepage</button>
  `;
  loadLevel(1);
  const backButton = document.getElementById("back");
  backButton.addEventListener("click", redirectToHomePage);

  function redirectToHomePage(event) {
    event.preventDefault(); // Prevent default link behavior (navigating to "#")
    window.location.href = "../index.html"; // Navigate to the game.html page
  }
});

function loadLevel(level) {
  var scratchFrame = document.getElementById("scratchFrame");
  var introContainer = document.getElementById("introContainer");
  switch (level) {
    case 1:
      scratchFrame.src = "https://scratch.mit.edu/projects/984039284/embed";
      introContainer.innerHTML = "";
      break;
    case 2:
      scratchFrame.src = "https://scratch.mit.edu/projects/984054603/embed";
      introContainer.innerHTML = "";
      break;
    case 3:
      scratchFrame.src = "https://scratch.mit.edu/projects/984072678/embed";
      introContainer.innerHTML = "";
      break;
    default:
      scratchFrame.src = "https://scratch.mit.edu/projects/984039284/embed";
      introContainer.innerHTML = "";
      break;
  }
}
