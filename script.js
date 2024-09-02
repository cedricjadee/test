const button = document.querySelector(".menu-button");
const noteMenu = document.querySelector(".note-menu");
const content = document.querySelector(".content");

// Create a circle indicator element
const circleIndicator = document.createElement("div");
circleIndicator.classList.add("circle-indicator");
content.appendChild(circleIndicator); // Append it to the content div

button.addEventListener("click", () => {
  button.classList.toggle("active");
  noteMenu.classList.toggle("active");
});

document.querySelectorAll(".note-link").forEach((n) => {
  n.addEventListener("click", (e) => {
    const linkText = e.target.textContent;
    button.classList.remove("active");
    noteMenu.classList.remove("active");

    if (linkText === "Add to Favorites") {
      circleIndicator.style.display = "block"; // Show the orange circle
    } else if (linkText === "Remove from Favorites") {
      circleIndicator.style.display = "none"; // Hide the orange circle
    }
  });
});
