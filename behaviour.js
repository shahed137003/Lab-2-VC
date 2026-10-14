document.addEventListener("DOMContentLoaded", () => {
  const helloWorld = document.querySelector("h1, #hello-world, .hello-world");

  if (!helloWorld) {
    return;
  }

  helloWorld.textContent = "Hello World";

  helloWorld.addEventListener("click", () => {
    helloWorld.classList.toggle("clicked");

    if (helloWorld.classList.contains("clicked")) {
      helloWorld.textContent = "Hello World! 👋";
      helloWorld.style.transform = "scale(1.1)";
      helloWorld.style.color = "#ff6600";
    } else {
      helloWorld.textContent = "Hello World";
      helloWorld.style.transform = "scale(1)";
      helloWorld.style.color = "";
    }
  });

  helloWorld.addEventListener("mouseenter", () => {
    helloWorld.style.color = "#ff6600";
  });

  helloWorld.addEventListener("mouseleave", () => {
    if (!helloWorld.classList.contains("clicked")) {
      helloWorld.style.color = "";
    }
  });
});
