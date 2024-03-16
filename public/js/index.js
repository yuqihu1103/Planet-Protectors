document.addEventListener("DOMContentLoaded", loadHomepage);
const homeLink = document.getElementById("home-link");
const learnMoreLink = document.getElementById("learn-more-link");
homeLink.addEventListener("click", loadHomepage);
learnMoreLink.addEventListener("click", loadLearnMore);

function loadHomepage() {
  const mainContent = document.getElementById("main-content");
  const contactInfo = document.getElementById("contact-info");

  mainContent.innerHTML = `
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
      <h1 class="text-center">Planet Protector</h1>
      <div class="container">
          <div class="row justify-content-center">
              <p>
              The world is in DANGER!
              </p>
              <p>
              It need your help.
              </p>
          </div>
      </div>
  </div>

  <div class="column">
      <!-- Content for the third column -->
      <img
      src="./assets/terminator.png"
      alt="terminator"
    />
  </div>
</div>
    `;

  contactInfo.innerHTML = `
        <h3>Contact the Authors</h3>
    `;
}
