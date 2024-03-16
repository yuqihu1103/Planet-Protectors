// game.js
document.addEventListener("DOMContentLoaded", function () {
  var buttonsContainer = document.getElementById("buttonsContainer");
  buttonsContainer.innerHTML = `
    <button onclick="loadLevel(1)">Level 1</button>
    <button onclick="loadLevel(2)">Level 2</button>
    <button onclick="loadLevel(3)">Level 3</button>
  `;
});

function loadLevel(level) {
  var scratchFrame = document.getElementById("scratchFrame");
  switch (level) {
    case 1:
      scratchFrame.src = "https://scratch.mit.edu/projects/level1_link/embed";
      break;
    case 2:
      console.log("case 2 reached");
      scratchFrame.src = "https://scratch.mit.edu/projects/level2_link/embed";
      break;
    case 3:
      scratchFrame.src = "https://scratch.mit.edu/projects/level3_link/embed";
      break;
    default:
      scratchFrame.src = "https://scratch.mit.edu/projects/164932339/embed";
      break;
  }
}
