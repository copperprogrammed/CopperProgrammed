const links = document.querySelectorAll(".link-box a");
const home = document.getElementById("home");
const about = document.getElementById("about");
const aboutPage = document.getElementById("about-page");
const topItem = document.getElementById("top-item");
const topH = document.getElementById("top");
const body = document.querySelector("main");

home.classList.add("borderBottom");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    home.classList.remove("borderBottom");
    about.classList.remove("borderBottom");
    link.classList.add("borderBottom");
  });
});

home.addEventListener("click", (e) => {
  e.preventDefault();
  topH.style.height = "30vh";
  topItem.style.display = "flex";
  body.style.display = "block";
  aboutPage.style.display = "none";
});

about.addEventListener("click", (e) => {
  e.preventDefault();
  topH.style.height = "10vh";
  topItem.style.display = "none";
  body.style.display = "none";
  aboutPage.style.display = "flex";
});

const discord = document.getElementById("discord");
const Email = document.getElementById("mail");
const disCopyBtn = document.getElementById("dis-copy");
const EmailCopyBtn = document.getElementById("mail-copy");
const animationBox = document.getElementById("copy-alart");

disCopyBtn.addEventListener("click", () => {
  navigator.clipboard
    .writeText(discord.textContent)
    .then(() => {
      animationBox.style.animation = "slid 1.4s 1";
      animationBox.addEventListener("animationend", () => {
        animationBox.style.animation = "";
      });
    })
    .catch((err) => {
      console.log("error", err);
    });
});

EmailCopyBtn.addEventListener("click", () => {
  navigator.clipboard
    .writeText(Email.textContent)
    .then(() => {
      animationBox.style.animation = "slid 1.4s 1";
      animationBox.addEventListener("animationend", () => {
        animationBox.style.animation = "";
      });
    })
    .catch((err) => {
      console.log("error", err);
    });
});

function performSearch() {
  const searchInput = document.getElementById('search-input').value.trim().toLowerCase();
  if (searchInput === "pokemon go") {
      window.open('https://cooper55555.github.io/PokemonChecklist/');
  } else {
      alert("No results found for: " + searchInput);
  }
}