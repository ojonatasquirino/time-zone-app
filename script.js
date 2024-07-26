const citySelector = document.getElementById("city-selector");
const clock = document.getElementById("clock");
const themeToggle = document.getElementById("theme-toggle");

function updateTime() {
  const selectedCity = citySelector.value;
  const now = new Date();

  const options = {
    timeZone: selectedCity,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };

  const timeString = new Intl.DateTimeFormat("en-US", options).format(now);
  clock.textContent = `Horário em ${
    citySelector.options[citySelector.selectedIndex].text
  }: ${timeString}`;
}

citySelector.addEventListener("change", updateTime);
setInterval(updateTime, 1000);

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("dark-theme")) {
    themeToggle.textContent = "Mudar para Tema Claro";
  } else {
    themeToggle.textContent = "Mudar para Tema Escuro";
  }
}

themeToggle.addEventListener("click", toggleTheme);

// Initialize with the first city in the list and set default theme
updateTime();
document.body.classList.add("light-theme");
