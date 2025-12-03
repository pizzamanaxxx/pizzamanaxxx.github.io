const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

// charger préférence
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
