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
}

function setTheme(themeName) {
  const theme = themes[themeName];
  Object.keys(theme).forEach(themeVar => {
    root.style.setProperty(themeVar, theme[themeVar]);
  });
}
