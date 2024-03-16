document.addEventListener("DOMContentLoaded", loadHomepage);
const homeLink = document.getElementById("home-link");
homeLink.addEventListener("click", loadHomepage);

function loadHomepage() {
  const mainContent = document.getElementById("main-content");

  mainContent.innerHTML = `
  <h1 class="text-center">Planet Protector</h1>
  <div class="container">
  <div class="column">
      <!-- Content for the first column -->
      <img
              src="./assets/protector.png"
              alt="planet-protector"
            />
  </div>

  <div class="column">
      <!-- Content for the second column -->
      <div class="container">
          <div class="row justify-content-center message">
              <p>
              The world is in 
                <span id="danger">DANGER!</span>
              </p>
              <p>
              It needs your help.
              </p>
                <a href="#" class="btn btn-primary" id="play">Play Now!</a>
          </div>
      </div>
  </div>

  <div class="column" id="term">
      <!-- Content for the third column -->
      <img
      src="./assets/terminator.png"
      alt="terminator"
      id="terminator"
    />
  </div>
</div>
    `;
  const playButton = document.getElementById("play");
  playButton.addEventListener("click", redirectToGamePage);
}

function redirectToGamePage(event) {
  event.preventDefault(); // Prevent default link behavior (navigating to "#")
  window.location.href = "html/game.html"; // Navigate to the game.html page
}
