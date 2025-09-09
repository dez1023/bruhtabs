let currentTab = null;
const tabs = [];

function openTab(tab) {
  if (currentTab == tab) {return};
  if (currentTab) {currentTab.classList.remove("tabOpen");}
  displayPage(tab.dataset.url);
  setTimeout(function() {
      tab.classList.add("tabOpen");
      currentTab = tab;
  }, 50)
}

function updateTab(tab, url) {
  tab.dataset.url = url;
  
  if (pages[url] && pages[url].title) {
    console.log("pages[url] exists");
    tab.querySelector("a").textContent = pages[url].title;
  }
  
  if (currentTab == tab) {displayPage(url);}

  console.log("updated tab with url: "+url)
}

function newTab(url) {
  const tab = document.createElement("div");
  const tabTitle = document.createElement("a");
  const closeBtn = document.createElement("button");
  tab.classList.add("tab");
  closeBtn.textContent = "x";
  tabBar.appendChild(tab);
  tab.appendChild(tabTitle);
  tab.appendChild(closeBtn);
  tabs.push(tab);
  
  const clickListener = tab.addEventListener("click", function() {
    event.stopPropagation();
    openTab(tab);
  });
  
  const closeListener = closeBtn.addEventListener("click", function() {
    event.stopPropagation();
    tab.removeEventListener("click", clickListener);
    closeBtn.removeEventListener("click", closeListener);
    const index = tabs.indexOf(tab);
    tabs.splice(index, 1)
    
    if (currentTab == tab) {
      const nextTab = tabs[Math.max(Math.min(index-1, tabs.length), 0)];
      if (nextTab) {
        openTab(nextTab);
      }else{
        newTab();
      }
    }
    
    tab.remove();
  });

  const url = url ?? "bruh-tabs://";
  if (!pages[url]) {createPage(url);}
  updateTab(tab, url);
  openTab(tab);
  return tab;
}
