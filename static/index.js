const root = document.documentElement;
const tabBar = document.getElementById("tabBar");
const pageDisplay = document.getElementById("pageDisplay");
const addressBar = document.getElementById("addressBar");
const editPageModal = document.getElementById("editPage");

function toggleElement(element, displayStyle) {
  const display = element.style.display;
  const toggled = display == "none";
  element.style.display = display == "none" ? displayStyle : "none";
  return toggled;
}

addressBar.addEventListener("keydown", function() {
  if (event.key == "Enter") {
    const url = this.value;
    if (!pages[url]) {createPage(url);}
    updateTab(currentTab, url);
  }
});

document.querySelectorAll(".page").forEach(page => {
  page.style.display = "none";
});

editPageModal.style.display = "none";

newTab()
