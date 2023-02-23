// headerとfooterのパーツ化
// JavaScript
document.addEventListener("DOMContentLoaded", function() {
  fetch("/common/header.html", {cache: "no-store"})
    .then(response => response.text())
    .then(data => {
      document.querySelector("header").innerHTML = data;
    });

  fetch("/common/footer.html", {cache: "no-store"})
    .then(response => response.text())
    .then(data => {
      document.querySelector("footer").innerHTML = data;
    });
});
