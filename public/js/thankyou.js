// thankyou.js
document.addEventListener("DOMContentLoaded", function () {
  // Function to fetch data from the server
  async function fetchData() {
    try {
      const response = await fetch("/value");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      return data.value;
    } catch (error) {
      console.error("Error fetching data:", error.message);
      return null;
    }
  }

  // Function to calculate CO2 emissions neutralized
  function calculateCO2Neutralized(numTrees) {
    const carbonNeutralized = numTrees * 25; // Each tree neutralizes 25 kg of CO2 per year
    return carbonNeutralized;
  }

  // Function to update DOM with fetched data
  async function updateDOM() {
    const treesElement = document.getElementById("trees");
    const carbonElement = document.getElementById("carbon");

    const numTrees = await fetchData();
    if (numTrees !== null) {
      const carbonNeutralized = calculateCO2Neutralized(numTrees);

      // Update DOM with fetched data
      treesElement.textContent = numTrees;
      carbonElement.textContent = carbonNeutralized;
    } else {
      treesElement.textContent = "N/A";
      carbonElement.textContent = "N/A";
    }
  }

  // Call updateDOM function when the DOM content is loaded
  updateDOM();
});
