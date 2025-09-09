let currentPage = null;

const pages = {
  "bruh-tabs://": {
    "page": document.getElementById("bruh-tabs_home"),
    "title": "New Bruhtab",
  },
  "bruh-tabs://settings": {
    "page": document.getElementById("bruh-tabs_settings"),
    "title": "Bruhtabs - Settings",
  },
};

function createPage(url) {
  const pageElement = document.createElement("div");
  const link = document.createElement("a");
  pageDisplay.appendChild(pageElement);
  pageElement.appendChild(link);
  link.href = url;
  link.textContent = "Go to "+url;
  
  pages[url] = {
    "page": pageElement,
    "title": "New Page",
  }

  pageElement.style.display = "none";
}

function displayPage(url) {
  const pageData = pages[url];
  if (!pageData) {return};
  const page = pageData.page;
  if (currentPage == page) {return};
  if (currentPage) {currentPage.style.display = "none";}
  page.style.display = "block";
  currentPage = page;
  addressBar.value = url;
}
