// Utility to get a cookie by name
function getCookie(name) {
  const value = document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="));
  return value ? value.split("=")[1] : null;
}

// Apply font settings from cookies if available
function applyPreferences() {
  const fontSize = getCookie("fontsize");
  const fontColor = getCookie("fontcolor");

  if (fontSize) {
    document.documentElement.style.setProperty("--fontsize", fontSize + "px");
    document.getElementById("fontsize").value = fontSize;
  }

  if (fontColor) {
    document.documentElement.style.setProperty("--fontcolor", fontColor);
    document.getElementById("fontcolor").value = fontColor;
  }
}

// Save preferences in cookies
document.getElementById("fontForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fontSize = document.getElementById("fontsize").value;
  const fontColor = document.getElementById("fontcolor").value;

  // Set cookies for 30 days
  document.cookie = `fontsize=${fontSize}; path=/; max-age=${60 * 60 * 24 * 30}`;
  document.cookie = `fontcolor=${fontColor}; path=/; max-age=${60 * 60 * 24 * 30}`;

  // Apply styles immediately
  applyPreferences();
});

// Initial call on page load
applyPreferences();
