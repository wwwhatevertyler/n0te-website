const themeBootScript = `
(() => {
  try {
    const stored = window.localStorage.getItem("n0te-site-theme");
    const theme = stored === "light" ? "light" : "dark";
    document.documentElement.dataset.siteTheme = theme;
  } catch {
    document.documentElement.dataset.siteTheme = "dark";
  }
})();
`;

export default function ThemeBootScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />;
}

