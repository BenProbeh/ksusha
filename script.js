const homePage = document.getElementById("homePage");
const yesPage = document.getElementById("yesPage");
const noPage = document.getElementById("noPage");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

let isPlaying = false;

function showPage(pageToShow) {
  homePage.classList.remove("active");
  yesPage.classList.remove("active");
  noPage.classList.remove("active");

  pageToShow.classList.add("active");
}

function toggleMusic() {
  if (!isPlaying) {
    bgMusic.play();

    musicBtn.textContent = "⏸ Остановить музыку";
    musicBtn.classList.add("playing");

    isPlaying = true;
  } else {
    bgMusic.pause();

    musicBtn.textContent = "🔊 Включить музыку";
    musicBtn.classList.remove("playing");

    isPlaying = false;
  }
}

musicBtn.addEventListener("click", toggleMusic);

yesBtn.addEventListener("click", function () {
  showPage(yesPage);
});

noBtn.addEventListener("click", function () {
  showPage(noPage);
});