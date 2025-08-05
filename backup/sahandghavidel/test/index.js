const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");
const errorMessageEl = document.querySelector(".error-message");
const retryBtnEl = document.querySelector(".retry-btn");

// Event listener for the main "Load More" button
btnEl.addEventListener("click", () => {
  const imageNum = 10;
  addNewImages(imageNum);
});

// Event listener for the "Retry" button within the error message
retryBtnEl.addEventListener("click", () => {
  errorMessageEl.style.display = "none"; // Hide the error message
  addNewImages(10); // Attempt to load images again
});

/**
 * Adds a specified number of new images to the container.
 * Shows an error message if all images in the batch fail to load.
 * @param {number} count The number of images to attempt to load.
 */
function addNewImages(count) {
  let loadedCount = 0; // Tracks images that have either loaded or errored
  let failedCount = 0; // Tracks images that specifically failed to load

  // Clear previous error message if it was showing
  errorMessageEl.style.display = "none";

  for (let i = 0; i < count; i++) {
    const newImageEl = document.createElement("img");
    // Using a different random seed to increase the chance of actual 404s for testing
    // or you can use a controlled URL that sometimes fails for testing.
    // For general use, picsum.photos is very reliable.
    // To simulate failure for testing, you could do:
    // newImageEl.src = i % 3 === 0 ? 'invalid-url-to-fail.jpg' : `https://picsum.photos/300?random=${Math.floor(Math.random() * 100000)}`;

    // Standard reliable URL for actual use:
    newImageEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 100000)}`;
    newImageEl.alt = "Random Image";

    newImageEl.onload = () => {
      loadedCount++;
      // No increment to failedCount, so it remains 0 for this image
      checkCompletion();
    };

    newImageEl.onerror = () => {
      loadedCount++;
      failedCount++; // Increment failed count if this specific image fails
      checkCompletion();
    };

    imageContainerEl.appendChild(newImageEl);
  }

  /**
   * Checks if all images in the current batch have either loaded or failed.
   * If all images failed, displays the error message.
   */
  function checkCompletion() {
    if (loadedCount === count) { // All images in the batch have completed (loaded or failed)
      if (failedCount === count) { // And specifically, ALL of them failed
        errorMessageEl.style.display = "block"; // Show the error message
      } else {
        errorMessageEl.style.display = "none"; // If some loaded, hide the error (in case it was previously shown)
      }
    }
  }
}

// Optional: Load some images on initial page load
// addNewImages(5);