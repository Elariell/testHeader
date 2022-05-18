const dropdowns = document.getElementsByClassName("dropdown-menu");

if (dropdowns.length > 0) {
  for (let i = 0; i < dropdowns.length; i++) {
    const element = dropdowns[i];
    element.parentElement.addEventListener("click", () => {
      element.classList.toggle("open");
    });
  }
  for (let i = 0; i < dropdowns.length; i++) {
    const element = dropdowns[i];
    element.addEventListener("mouseleave", () => {
      element.classList.remove("open");
    });
  }
}

const menuElems = document.getElementsByClassName("menu-link");

for (let i = 0; i < menuElems.length; i++) {
  const elem = menuElems[i];

  elem.addEventListener("click", () => {
    elem.classList.toggle("show");
  });
  elem.addEventListener("mouseout", () => {
    elem.classList.remove("show");
  });
}

const burgerIcon = document.getElementById("burger");
const menuContainer = document.getElementById("nav-container");

burgerIcon.addEventListener("click", () => {
  menuContainer.classList.toggle("show");
  burgerIcon.classList.toggle("open");
});

const seach = document.getElementById("seach");
const input = seach.previousElementSibling;

seach.addEventListener("click", () => {
  input.classList.toggle("active");
});
input.addEventListener("mouseout", () => {
  input.classList.remove("active");
});
