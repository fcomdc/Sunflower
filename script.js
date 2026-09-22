const button = document.getElementById("surprise");
const hearts = document.getElementById("hearts");
button.addEventListener("click", () => {
  const sky = document.querySelector(".sky");
  
  // Create a new layer for the photo so it fades in smoothly
  let photoBg = document.getElementById("photo-bg");
  if (!photoBg && sky) {
    photoBg = document.createElement("div");
    photoBg.id = "photo-bg";
    photoBg.style.position = "absolute";
    photoBg.style.inset = "0";
    photoBg.style.backgroundImage = "url('Imagenes/WhatsApp%20Image%202026-09-21%20at%207.32.49%20PM.jpeg')";
    photoBg.style.backgroundSize = "cover";
    photoBg.style.backgroundPosition = "center 80%"; // Focus on the lower part where the faces are
    photoBg.style.zIndex = "2";
    photoBg.style.opacity = "0";
    photoBg.style.transition = "opacity 2s ease-in-out";
    
    // Clear any inline background we set previously
    sky.style.background = "";
    sky.appendChild(photoBg);
  }

  // Fade out the sunflowers so they don't block the faces
  const garden = document.getElementById("garden");
  if (garden) {
    garden.style.transition = "opacity 1.5s ease-in-out";
    garden.style.opacity = "0.4";
    garden.style.pointerEvents = "none";
  }

  // Move the center flower down so it doesn't block the face
  const mainSunflower = document.querySelector(".sunflower.main");
  if (mainSunflower) {
    mainSunflower.style.transition = "bottom 1.5s ease-in-out";
    mainSunflower.style.bottom = "-150px";
  }

  // Trigger the fade-in effect
  setTimeout(() => {
    if (photoBg) photoBg.style.opacity = "1";
  }, 50);

  const symbols = ["💛", "🌻", "✨", "💫", "🌼"];

  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = `${35 + Math.random() * 30}%`;
    heart.style.bottom = `${8 + Math.random() * 10}%`;
    heart.style.animationDelay = `${Math.random() * .8}s`;
    heart.style.fontSize = `${16 + Math.random() * 18}px`;

    hearts.appendChild(heart);

    setTimeout(() => heart.remove(), 3500);
  }
});
