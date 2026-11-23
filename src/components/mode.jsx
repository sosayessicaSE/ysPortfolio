export const setTheme = (theme) => {
  try {
    localStorage.setItem("theme", theme);
  } catch {
    /* storage unavailable */
  }
  document.documentElement.className = theme;
};

export const keepTheme = () => {
  let theme = null;
  try {
    theme = localStorage.getItem("theme");
  } catch {
    /* storage unavailable */
  }
  document.documentElement.className = theme || "theme-light";
};
