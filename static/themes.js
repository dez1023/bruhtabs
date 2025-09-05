const settingsThemes = document.getElementById("settings_themes");

const themes = {
  "light": {
    "--main": "white",
    "--text": "black",
    "--bg": "rgb(230,230,230)",
    "--secondary": "rgb(200,200,255)",
  },
  
  "dark": {
    "--main": "rgb(50,50,50)",
    "--text": "white",
    "--bg": "rgb(30,30,30)",
    "--secondary": "rgb(60,60,80)",
  },

  "poopoo": {
    "--main": "chocolate",
    "--text": "yellow",
    "--bg": "brown",
    "--secondary": "DarkSalmon",
  },
}

function setTheme(themeName) {
  const theme = themes[themeName];
  Object.keys(theme).forEach(themeVar => {
    root.style.setProperty(themeVar, theme[themeVar]);
  });
}

function createThemeBtn(themeName) {
  const theme = themes[themeName];
  const themeBtn = document.createElement("button");
  const themeCircle = document.createElement("div");
  themeBtn.classList.add("themeBtn");
  themeCircle.classList.add("themeCircle");
  
  let colors = `${theme["--main"]} ${theme["--main"]} ${theme["--bg"]} ${theme["--secondary"]} `
  
  console.log(colors);
  themeCircle.style.borderColor =  colors;
  settingsThemes.appendChild(themeBtn);
  themeBtn.appendChild(themeCircle);
  themeBtn.innerHTML += themeName;
  themeBtn.addEventListener("click", function() {
    setTheme(themeName);
  })
}

Object.keys(themes).forEach(themeName => {
  createThemeBtn(themeName);
});
