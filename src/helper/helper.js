function checkMenuDropdown(e) {
  if (e.target.parentNode.className.indexOf("menu-open") === -1) {
    e.target.parentNode.classList.add("menu-open");
  } else {
    e.target.parentNode.classList.remove("menu-open");
  }
}

function showProfileDropdown() {
  let item = document.querySelector("#showProfiledropdown");
  let itemlist = document
    .querySelector("#showProfiledropdown")
    .querySelector("#dropdoownRight");

  if (item.classList.contains("show") || itemlist.classList.contains("show")) {
    item.classList.remove("show") || itemlist.classList.remove("show");
  } else {
    item.classList.add("show") || itemlist.classList.add("show");
  }
}

// Session Helper
const getToken = () => {
  const auth = localStorage.getItem("auth");
  const data = JSON.parse(auth);
  return data?.token;
};

export { checkMenuDropdown, showProfileDropdown, getToken };
