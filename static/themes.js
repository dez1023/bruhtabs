const settingsThemes = document.getElementById("settings_themes");

const themes = {
  "Day": {
    "--main": "white",
    "--text": "black",
    "--bg": "rgb(230,230,230)",
    "--secondary": "rgb(200,200,255)",
  },
  
  "Night": {
    "--main": "rgb(50,50,50)",
    "--text": "white",
    "--bg": "rgb(30,30,30)",
    "--secondary": "rgb(60,60,80)",
  },
  
  "Morning": {
    "--main": "rgb(250,250,200)",
    "--text": "rgb(50,50,30)",
    "--bg": "rgb(230,230,200)",
    "--secondary": "rgb(220,210,220)",
  },
  
  "Dusk": {
    "--main": "rgb(50,30,50)",
    "--text": "rgb(240,200,240)",
    "--bg": "rgb(30,20,30)",
    "--secondary": "rgb(80,60,80)",
  },

  "Poopoo": {
    "--main": "chocolate",
    "--text": "Moccasin",
    "--bg": "sienna",
    "--secondary": "saddlebrown",
  },
  
  "Piepi": {
    "--main": "gold",
    "--text": "brown",
    "--bg": "yellow",
    "--secondary": "orange",
  },
  
  "Smeli Phaart": {
    "--main": "green",
    "--text": "rgba(100,240,100)",
    "--bg": "darkgreen",
    "--secondary": "forestgreen",
  },
  
  "Gaiemen": {
    "--main": "lightpink",
    "--text": "#800013",
    "--bg": "#ff99a8",
    "--secondary": "#ff8093",
  },
  
  "Veyniedih": {
    "--main": "pink",
    "--text": "black",
    "--bg": "peachpuff",
    "--secondary": "bisque",
  },
  
  "Aimabautoukhaumuoahshiohmygaudetsalouverdeskrieen": {
    "--main": "white",
    "--text": "grey",
    "--bg": "white",
    "--secondary": "white",
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
