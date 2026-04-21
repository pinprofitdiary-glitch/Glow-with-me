// LIKE BUTTON
document.querySelectorAll(".like-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("liked");
  });
});

// SHARE BUTTON
document.querySelectorAll(".share-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const url = window.location.href;

    navigator.clipboard.writeText(url);
    alert("Link copied! Share it anywhere.");
  });
});