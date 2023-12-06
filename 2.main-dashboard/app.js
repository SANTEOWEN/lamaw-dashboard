// Sidebar Toggle
const sidebarToggle = document.querySelector("#sidebar-toggle");
sidebarToggle.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("collapsed");
});

document.querySelector(".theme-toggle").addEventListener("click", () => {
  toggleLocalStorage();
  toggleRootClass();
});

// Darkmode Toggle
function toggleRootClass() {
  const current = document.documentElement.getAttribute("data-bs-theme");
  const inverted = current == "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-bs-theme", inverted);
}

function toggleLocalStorage() {
  if (isLight()) {
    localStorage.removeItem("light");
  } else {
    localStorage.setItem("light", "set");
  }
}

function isLight() {
  return localStorage.getItem("light");
}

if (isLight()) {
  toggleRootClass();
}

//Items toggle
var tab_list = document.querySelectorAll(".sidebar-item[data-tc]");

var tab_items = document.querySelectorAll(".tab_item");

tab_list.forEach(function (list) {
  list.addEventListener("click", function () {
    var tab_data = list.getAttribute("data-tc");
    console.log(tab_data);

    tab_items.forEach(function (item) {
      var tab_class = item.getAttribute("id");
      console.log(tab_class);
      if (tab_class.includes(tab_data)) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  });
});
